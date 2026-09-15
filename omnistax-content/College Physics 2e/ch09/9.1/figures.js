/* Figures for section 9.1 The First Condition for Equilibrium.
   Boots against the section's text article. Every figure here is a still
   picture: a body in equilibrium has no time in it, so nothing registers a
   cycle and nothing carries a transport. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['9.1'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, register, begin, line, arrow, dot, text, headline, vbracket, car, fixed, silhouette, crate, label } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- helpers shared by the figures ---------- */
const G = 9.80, TAU = 2 * Math.PI;
const commas = (s) => s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const N0 = (x) => commas(fmt(x, 0));                       /* a force in whole newtons, with commas */
const NT = (x) => N0(x).replace(/,/g, '{,}');              /* the same number, written for KaTeX */
const cap = (L, m) => Math.max(0, Math.min(L, m));

/* a free-body diagram: a dot at (cx, cy) with one arrow per force, each scaled by its own k */
function fbd(ctx, cx, cy, forces, title) {
  const reach = Math.max(...forces.map((f) => Math.abs(f.v) * f.k), 60);
  if (title) text(ctx, title, cx, cy - reach - 48, PAL.muted, { size: 18, align: 'center' });
  forces.forEach((f) => {
    const L = Math.abs(f.v) * f.k; if (L < 4) return;
    const ex = cx + f.dx * L, ey = cy + f.dy * L;
    arrow(ctx, cx, cy, ex, ey, f.c, 4);
    const ax = f.dx > 0.5 ? 'left' : f.dx < -0.5 ? 'right' : 'center';
    text(ctx, f.label, ex + f.dx * 14, ey + f.dy * 20 + (f.off ?? 0), f.c, { size: 19, weight: 600, align: ax });
  });
  dot(ctx, cx, cy, PAL.ink, true, 8);
}

/* The forces along one axis added with their signs: one bar per force, then their
   sum. `top` is the full height of the column in newtons, fixed per figure from
   the slider maxima and never from the values on show, so that raising a mass
   lengthens the bars instead of leaving the picture unchanged. */
function balance(ctx, box, items, title, top) {
  const total = items.reduce((s, it) => s + it.v, 0);
  const all = items.concat([{ label: 'net', v: total, c: PAL.ink }]);
  const max = top;
  const y0 = (box.t + box.b) / 2, hh = (box.b - box.t) / 2 - 40;
  const n = all.length, w = (box.r - box.l) / n;
  if (title) text(ctx, title, (box.l + box.r) / 2, box.t - 26, PAL.muted, { size: 18, align: 'center' });
  line(ctx, box.l, y0, box.r, y0, PAL.muted, 2);
  all.forEach((it, i) => {
    const x = box.l + w * (i + 0.5), h = (Math.max(-1, Math.min(1, it.v / max))) * hh;
    if (Math.abs(h) < 3) dot(ctx, x, y0, it.c, true, 8); else line(ctx, x, y0, x, y0 - h, it.c, 22);
    text(ctx, it.label, x, box.b + 6, it.c, { size: 18, weight: 600, align: 'center' });
    text(ctx, N0(it.v), x, y0 - h - (h >= 0 ? 22 : -22), it.c, { size: 17, align: 'center' });
  });
}

/* ---------- sprites, in ink ---------- */
/* a person standing still, the feet on (x, y), about 225 units tall, with a pack on the back
   when he carries one; the pack hangs from the shoulders and grows with its mass */
const PS = 1.5;
function person(ctx, x, y, color, pack) {
  if (pack > 0) {
    const h = 44 + Math.min(70, pack * 1.7), sh = { x: x + 2 * PS, y: y - 118 * PS };
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.fillStyle = PAL.soft; ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.roundRect(sh.x - 14 * PS - 44, sh.y + 4, 46, h, 8); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(sh.x - 14 * PS, sh.y + 10); ctx.lineTo(sh.x - 2, sh.y - 4); ctx.stroke();   /* the strap */
    ctx.restore();
  }
  silhouette(ctx, { x, y, s: PS, pose: 'stand', color });
}
/* an ice hockey stick seen from above: the shaft from a to b with the blade angled off a, drawn as one filled shape */
function hockeyStick(ctx, ax, ay, bx, by, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  ctx.lineWidth = 14; ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke();
  ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(bx, by); ctx.lineTo(bx + 6, by - 14); ctx.stroke();       /* the tape at the grip */
  ctx.beginPath(); ctx.moveTo(ax - 4, ay - 12); ctx.lineTo(ax - 150, ay + 26); ctx.lineTo(ax - 158, ay + 50); ctx.lineTo(ax - 8, ay + 12); ctx.closePath(); ctx.fill();
  ctx.restore();
}
/* an arc about (cx, cy) turning from a0 to a1, with an arrowhead where it ends */
function turn(ctx, cx, cy, r, a0, a1, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 5;
  ctx.beginPath(); ctx.arc(cx, cy, r, a0, a1); ctx.stroke(); ctx.restore();
  const hx = cx + r * Math.cos(a1), hy = cy + r * Math.sin(a1), t = a1 + Math.PI / 2;
  arrow(ctx, hx - 16 * Math.cos(t), hy - 16 * Math.sin(t), hx, hy, color, 5);
}

/* =====================================================================
   FIGURE 9.2: the motionless person. Standing still has no time in it, so
   the figure answers its sliders and carries no transport. The column on
   the right adds the two vertical forces with their signs.
===================================================================== */
(function () {
  const d = sim('sim-person', 660);
  const mm = ctl(d.controls, { label: 'm', cls: '', min: 40, max: 120, step: 0.5, value: 70, unit: 'kg', dec: 1, aria: 'mass of the person' });
  const mp = ctl(d.controls, { label: 'm_{\\text{pack}}', cls: '', min: 0, max: 40, step: 0.5, value: 0, unit: 'kg', dec: 1, aria: 'mass of the pack he carries' });
  function draw() {
    const { ctx } = begin(d.c);
    const w = (mm.v + mp.v) * G, cf = C('force'), K = 170 / 1600, L = cap(w * K, 170);
    const gy = 430, cx = 330, cgy = gy - 90 * PS;          /* the center of gravity, a little above the hips */
    fixed(ctx, 90, gy, 480, 24);
    person(ctx, cx, gy, PAL.ink, mp.v);
    dot(ctx, cx, cgy, PAL.ink, true, 7);
    arrow(ctx, cx, cgy, cx, cgy + L, cf, 5);
    label(ctx, 'w = ' + N0(w) + ' N', cx, cgy + L, { side: 'right', color: cf, gap: 34, size: 21 });
    arrow(ctx, cx, gy + 24 + L, cx, gy + 24, cf, 5);
    label(ctx, 'N = ' + N0(w) + ' N', cx, gy + 24 + L * 0.6, { side: 'right', color: cf, gap: 22, size: 21 });
    text(ctx, mp.v > 0 ? 'a person of ' + fmt(mm.v, 1) + ' kg carrying a pack of ' + fmt(mp.v, 1) + ' kg' : 'a person of ' + fmt(mm.v, 1) + ' kg, standing still',
      cx, 100, PAL.muted, { size: 18, align: 'center' });
    fbd(ctx, 790, 390, [
      { dx: 0, dy: -1, v: w, k: K, label: 'N', c: cf },
      { dx: 0, dy: 1, v: w, k: K, label: 'w', c: cf },
    ], 'the forces on the person and his pack');
    /* the column runs to 1600 N, the heaviest person and pack the sliders reach */
    balance(ctx, { l: 1010, r: 1340, t: 220, b: 560 }, [
      { label: 'N', v: w, c: cf },
      { label: 'w', v: -w, c: cf },
    ], 'the vertical forces, added with their signs', 1600);
    headline(ctx, 'The ground pushes up with ' + N0(w) + ' N, exactly what he weighs, so the net external force on him is zero.');
    readout(d.readout, `\\text{net}\\;\\kFy = \\kN - \\kwgt = ${NT(w)}\\ \\text{N} - ${NT(w)}\\ \\text{N} = 0`,
      'A mass of ' + fmt(mm.v + mp.v, 1) + ' kg weighs (' + fmt(mm.v + mp.v, 1) + ' kg)(9.80 m/s²) = ' + N0(w) + ' N, and because the person does not accelerate the ground must hold him up with exactly that much. Load him with a heavier pack and both arrows grow together: the two forces are always equal and opposite, and their sum is always zero.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 9.3: the car at constant velocity. A steady velocity has no time
   in it either, since nothing about the scene changes as the clock runs,
   so this figure is still as well. The two columns add the horizontal and
   the vertical forces separately, which is what the second equation of the
   section asks for.
===================================================================== */
(function () {
  const d = sim('sim-car', 900);
  const mm = ctl(d.controls, { label: 'm', cls: '', min: 800, max: 1600, step: 10, value: 1200, unit: 'kg', dec: 0, aria: 'mass of the car' });
  const Fa = ctl(d.controls, { label: '\\kFa', cls: 'force', min: 0, max: 2000, step: 10, value: 700, unit: 'N', dec: 0, aria: 'applied force between the tires and the road' });
  const ff = ctl(d.controls, { label: '\\kff', cls: 'force', min: 0, max: 2000, step: 10, value: 700, unit: 'N', dec: 0, aria: 'air friction on the car' });
  function draw() {
    const { ctx } = begin(d.c);
    const w = mm.v * G, net = Fa.v - ff.v, ok = Math.abs(net) < 1e-9;
    const cf = C('force'), cv = C('velocity');
    const kv = 190 / 15680, kh = 200 / 2000;              /* the two axes are drawn to scales of their own */
    const gy = 330, cx = 700, s = 4.6, cgy = gy - 14 * s;   /* the car's center of gravity, low in the body */
    const LW = cap(w * kv, 190), LFa = cap(Fa.v * kh, 200), Lf = cap(ff.v * kh, 200);
    line(ctx, 100, gy, 1300, gy, PAL.muted, 3);
    car(ctx, cx, gy - 16 * s, PAL.ink, s);
    if (ok) {
      arrow(ctx, cx - 110, 130, cx + 130, 130, cv, 5);
      text(ctx, 'v constant', cx + 10, 98, cv, { size: 21, weight: 600, align: 'center' });
    }
    /* the book draws the support as four equal arrows, one at each tire, so each is a quarter of N */
    [-120, -72, 72, 120].forEach((o) => arrow(ctx, cx + o, gy + 34, cx + o, gy + 34 - LW / 4, cf, 4));
    label(ctx, 'a quarter of N at each tire', cx + 150, gy + 40, { side: 'right', color: cf, gap: 8, size: 20 });
    dot(ctx, cx, cgy, PAL.ink, true, 7);
    arrow(ctx, cx, cgy, cx, cgy + LW, cf, 5);
    label(ctx, 'w = ' + N0(w) + ' N', cx, cgy + LW, { side: 'below', color: cf, gap: 22, size: 21 });
    /* the tires drive the car forward where they meet the road, and the air pushes back on the body */
    arrow(ctx, cx - 24 * s, gy - 6, cx - 24 * s + LFa, gy - 6, cf, 5);
    label(ctx, 'F_app = ' + N0(Fa.v) + ' N', cx - 24 * s + Math.max(LFa, 60), gy - 6, { side: 'right', color: cf, gap: 20, size: 20 });
    arrow(ctx, cx + 42 * s + Lf, gy - 60, cx + 42 * s, gy - 60, cf, 5);
    label(ctx, 'f = ' + N0(ff.v) + ' N', cx + 42 * s + Lf, gy - 60, { side: 'right', color: cf, gap: 16, size: 20 });
    fbd(ctx, 250, 720, [
      { dx: 0, dy: -1, v: w, k: 130 / 15680, label: 'N', c: cf },
      { dx: 0, dy: 1, v: w, k: 130 / 15680, label: 'w', c: cf },
      { dx: 1, dy: 0, v: Fa.v, k: 150 / 2000, label: 'F_app', c: cf },
      { dx: -1, dy: 0, v: ff.v, k: 150 / 2000, label: 'f', c: cf },
    ], 'the forces on the car');
    text(ctx, 'The horizontal and the vertical forces are drawn to scales of their own.', 700, 884, PAL.muted, { size: 17, align: 'center' });
    /* the columns run to the slider maxima: 2000 N along the road, and 15,680 N across it, which a 1600 kg car weighs */
    balance(ctx, { l: 520, r: 880, t: 620, b: 840 }, [
      { label: 'F_app', v: Fa.v, c: cf },
      { label: 'f', v: -ff.v, c: cf },
    ], 'along the road', 2000);
    balance(ctx, { l: 990, r: 1340, t: 620, b: 840 }, [
      { label: 'N', v: w, c: cf },
      { label: 'w', v: -w, c: cf },
    ], 'across the road', 15680);
    headline(ctx, ok
      ? 'The ' + N0(Fa.v) + ' N the tires apply and the ' + N0(ff.v) + ' N of air friction cancel, so the car keeps its constant velocity.'
      : 'The net external force along the road is ' + N0(net) + ' N, so the car ' + (net > 0 ? 'speeds up' : 'slows down') + ' and is not in equilibrium.');
    readout(d.readout, `\\text{net}\\;\\kFx = \\kFa - \\kff = ${NT(Fa.v)}\\ \\text{N} - ${NT(ff.v)}\\ \\text{N} = ${NT(net)}\\ \\text{N} \\qquad \\text{net}\\;\\kFy = \\kN - \\kwgt = ${NT(w)}\\ \\text{N} - ${NT(w)}\\ \\text{N} = 0`,
      ok
        ? 'The car is in dynamic equilibrium, because it is moving at a constant velocity, so its acceleration is zero and the net external force on it is zero in every direction. The weight of ' + N0(w) + ' N is carried by the four tires together, each of them pushing up with a quarter of the normal force N, and the drive of the tires against the road is exactly undone by the air.'
        : 'The vertical forces still cancel, since the car neither rises nor sinks, but along the road they do not: a net external force of ' + N0(net) + ' N is left over, the car accelerates, and the first condition for equilibrium is no longer met. Set the two horizontal forces equal again and the car returns to a constant velocity.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 9.4 + 9.5: the ice hockey stick, with the two equal and opposite
   forces first along one line and then applied at different places. The
   book draws the scene twice because print cannot slide the forces along
   the stick; one slider walks from the first drawing to the second. The
   idea is where the forces act, not how the stick turns, so the figure is
   still and the rotation is drawn as the book draws it, with two curved
   arrows.
===================================================================== */
(function () {
  const d = sim('sim-stick', 720);
  const Fm = ctl(d.controls, { label: '\\kF', cls: 'force', min: 5, max: 60, step: 0.5, value: 30, unit: 'N', dec: 1, aria: 'size of each of the two forces' });
  const dd = ctl(d.controls, { label: 'd', cls: '', min: 0, max: 0.6, step: 0.02, value: 0, unit: 'm', dec: 2, aria: 'distance between the two lines of action' });
  const SC = 300;                                          /* logical units to the metre */
  function draw() {
    const { ctx } = begin(d.c);
    const cf = C('force'), off = dd.v * SC / 2, L = cap(Fm.v * (190 / 60), 190);
    const ax = 620, ay = 600, bx = 780, by = 230, mid = 415;
    const xOf = (y) => ax + (ay - y) * (bx - ax) / (ay - by);
    const yA = mid - off, yB = mid + off, xA = xOf(yA), xB = xOf(yB);
    line(ctx, 250, yA, 1000, yA, PAL.rule, 2, [10, 10]);
    if (off > 0) line(ctx, 250, yB, 1000, yB, PAL.rule, 2, [10, 10]);
    hockeyStick(ctx, ax, ay, bx, by, PAL.ink);
    arrow(ctx, xA - L - 10, yA, xA - 10, yA, cf, 5);
    label(ctx, 'F = ' + fmt(Fm.v, 1) + ' N', xA - L - 10, yA, { side: 'left', color: cf, gap: 14, size: 21 });
    arrow(ctx, xB + L + 10, yB, xB + 10, yB, cf, 5);
    label(ctx, 'F = ' + fmt(Fm.v, 1) + ' N', xB + L + 10, yB, { side: 'right', color: cf, gap: 14, size: 21 });
    if (off > 4) {
      vbracket(ctx, 310, yA, yB, PAL.muted, 'd = ' + fmt(dd.v, 2) + ' m', -1);
      turn(ctx, 700, mid, 236, -2.3, -1.0, PAL.muted);
      turn(ctx, 700, mid, 236, 0.84, 2.14, PAL.muted);
      text(ctx, 'The stick turns.', 700, 130, PAL.muted, { size: 19, align: 'center' });
    } else {
      text(ctx, 'The two forces act along one line, and the stick stays where it is.', 620, 120, PAL.muted, { size: 19, align: 'center' });
    }
    fbd(ctx, 1140, 415, [
      { dx: 1, dy: 0, v: Fm.v, k: 150 / 60, label: 'F', c: cf },
      { dx: -1, dy: 0, v: Fm.v, k: 150 / 60, label: 'F', c: cf },
    ], 'the free-body diagram');
    text(ctx, 'This drawing is the same at every setting.', 1140, 500, PAL.muted, { size: 17, align: 'center' });
    headline(ctx, off > 4
      ? 'The two forces of ' + fmt(Fm.v, 1) + ' N still add to zero, but their lines of action are ' + fmt(dd.v, 2) + ' m apart.'
      : 'The two forces of ' + fmt(Fm.v, 1) + ' N act along one line, and the net external force is zero.');
    readout(d.readout, `\\text{net}\\;\\kF = \\kF - \\kF = ${fmt(Fm.v, 1)}\\ \\text{N} - ${fmt(Fm.v, 1)}\\ \\text{N} = 0`,
      'The free-body diagram gathers both forces at one point, so it is the same drawing whether the two lines of action lie on top of each other or ' + fmt(dd.v, 2) + ' m apart. The net external force is zero in both cases, and yet only one of the two sticks stays where it is, which is why the first condition is necessary but not sufficient.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: one crate, at rest and sliding. The speed is a slider and not a
   clock: at every setting the scene is one frozen moment, and the forces
   do not depend on how long the crate has been going. The figure exists
   because the book draws static equilibrium on a person and dynamic
   equilibrium on a car, so the reader never sees one body in both states
   with the same forces on it.
===================================================================== */
(function () {
  const d = sim('sim-equilibrium', 860);
  const mm = ctl(d.controls, { label: 'm', cls: '', min: 20, max: 150, step: 1, value: 100, unit: 'kg', dec: 0, aria: 'mass of the crate' });
  const Fa = ctl(d.controls, { label: '\\kFa', cls: 'force', min: 0, max: 400, step: 5, value: 150, unit: 'N', dec: 0, aria: 'force of the push' });
  const vv = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 0, max: 20, step: 0.5, value: 0, unit: 'm/s', dec: 1, aria: 'constant speed of the crate' });
  function draw() {
    const { ctx } = begin(d.c);
    const w = mm.v * G, moving = vv.v > 0.01, cf = C('force'), cv = C('velocity');
    const kv = 170 / 1470, kh = 200 / 400;                 /* the two axes are drawn to scales of their own */
    const gy = 320, cx = 560, LF = cap(Fa.v * kh, 200), LW = cap(w * kv, 170);
    const CW = 150, CH = 120, cl = cx - CW / 2, cgy = gy - CH / 2;
    fixed(ctx, 100, gy, 820, 22);
    /* the person who pushes, hands flat on the crate's side, and the crate itself */
    if (Fa.v > 0) silhouette(ctx, { x: cl - 52, y: gy, s: 1.34, pose: 'push', hands: [{ x: 39, y: -70 }, { x: 40, y: -62 }] });
    else silhouette(ctx, { x: cl - 60, y: gy, s: 1.34, pose: 'stand' });
    crate(ctx, cx, cgy, CW, CH);
    label(ctx, fmt(mm.v, 0) + ' kg', cx, cgy - CH / 2, { side: 'above', gap: 18, size: 22 });
    dot(ctx, cx, cgy, PAL.ink, true, 7);
    if (LF > 4) {
      arrow(ctx, cl, cgy - 28, cl + LF, cgy - 28, cf, 5);
      label(ctx, 'F_app = ' + N0(Fa.v) + ' N', cl + LF, cgy - 28, { side: 'above', color: cf, gap: 52, size: 21 });
      arrow(ctx, cx, gy - 8, cx - LF, gy - 8, cf, 5);
      label(ctx, 'f = ' + N0(Fa.v) + ' N', cx - LF, gy + 22, { side: 'below', color: cf, gap: 22, size: 21 });
    }
    arrow(ctx, cx, cgy, cx, cgy + LW, cf, 5);
    label(ctx, 'w = ' + N0(w) + ' N', cx + 10, cgy + LW, { side: 'right', color: cf, gap: 22, size: 21 });
    arrow(ctx, cx + 60, gy, cx + 60, gy - LW, cf, 5);
    label(ctx, 'N = ' + N0(w) + ' N', cx + 60, gy - LW * 0.5, { side: 'right', color: cf, gap: 30, size: 21 });
    if (moving) {
      arrow(ctx, cx + 160, gy - 170, cx + 160 + 30 + vv.v * 8, gy - 170, cv, 5);
      text(ctx, 'v = ' + fmt(vv.v, 1) + ' m/s, constant', cx + 160, gy - 202, cv, { size: 21, weight: 600 });
    } else {
      text(ctx, 'The crate is not moving.', cx + 160, gy - 170, PAL.muted, { size: 20 });
    }
    text(ctx, moving ? 'dynamic equilibrium' : 'static equilibrium', 300, 116, PAL.muted, { size: 20, align: 'center', weight: 600 });
    fbd(ctx, 1140, 300, [
      { dx: 0, dy: -1, v: w, k: 130 / 1470, label: 'N', c: cf },
      { dx: 0, dy: 1, v: w, k: 130 / 1470, label: 'w', c: cf },
      { dx: 1, dy: 0, v: Fa.v, k: 150 / 400, label: 'F_app', c: cf },
      { dx: -1, dy: 0, v: Fa.v, k: 150 / 400, label: 'f', c: cf },
    ], 'the forces on the crate');
    text(ctx, 'Not one of these arrows answers the speed.', 1140, 490, PAL.muted, { size: 17, align: 'center' });
    /* the columns run to the slider maxima: 400 N along the floor, and 1470 N across it, which a 150 kg crate weighs */
    balance(ctx, { l: 180, r: 560, t: 600, b: 820 }, [
      { label: 'F_app', v: Fa.v, c: cf },
      { label: 'f', v: -Fa.v, c: cf },
    ], 'along the floor', 400);
    balance(ctx, { l: 760, r: 1140, t: 600, b: 820 }, [
      { label: 'N', v: w, c: cf },
      { label: 'w', v: -w, c: cf },
    ], 'across the floor', 1470);
    headline(ctx, moving
      ? 'At ' + fmt(vv.v, 1) + ' m/s the crate is in dynamic equilibrium, and the four forces on it are the ones it had at rest.'
      : 'At rest the crate is in static equilibrium, because the push and the friction cancel and so do the weight and the floor.');
    readout(d.readout, `\\text{net}\\;\\kFx = \\kFa - \\kff = ${NT(Fa.v)}\\ \\text{N} - ${NT(Fa.v)}\\ \\text{N} = 0 \\qquad \\text{net}\\;\\kFy = \\kN - \\kwgt = ${NT(w)}\\ \\text{N} - ${NT(w)}\\ \\text{N} = 0`,
      'Neither equation mentions the speed. Raise it from zero to ' + fmt(Math.max(vv.v, 6), 1) + ' m/s and the push, the friction, the weight and the support of the floor keep the values they had, because what the first condition asks is that the velocity be constant and not that it be zero. At rest the crate is in static equilibrium and while it slides steadily it is in dynamic equilibrium, and the same four arrows describe both.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
