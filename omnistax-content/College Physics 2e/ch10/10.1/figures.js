/* Figures for section 10.1 Angular Acceleration. Boots against the section's text article.
   Every figure of this section has a clock in it: a steady turning, a spin-up
   and a stop, a point whose speed changes, a motorcycle pulling away. Each
   registers one cycle, gets the app's transport, and resets when a slider
   moves. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['10.1'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, topline, axes, pinned, labeller, strip, scale, person } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const TAU = 2 * Math.PI;
/* a value that rounds to nothing at d decimals is nothing, so no reading shows a signed zero */
const eps = (v, d) => (Math.abs(v) < 0.5 * Math.pow(10, -d) ? 0 : v);
/* a number written with the typographic minus */
const num = (v, d) => { const x = eps(v, d); return (x < 0 ? '−' : '') + fmt(Math.abs(x), d); };
/* the same number for KaTeX, with a hyphen-minus the parser reads */
const knum = (v, d) => { const x = eps(v, d); return (x < 0 ? '-' : '') + fmt(Math.abs(x), d); };
/* a circle outline */
function ring(ctx, x, y, R, color, w = 3, dash) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; if (dash) ctx.setLineDash(dash); ctx.beginPath(); ctx.arc(x, y, R, 0, TAU); ctx.stroke(); ctx.restore();
}
/* a filled disk */
function disk(ctx, x, y, R, fill, stroke, w = 3) {
  ctx.save(); ctx.fillStyle = fill; ctx.strokeStyle = stroke; ctx.lineWidth = w; ctx.beginPath(); ctx.arc(x, y, R, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
}
/* the sense of a turning, drawn as an arc about (cx, cy) centred on the canvas
   angle `mid`, with an arrowhead at the end the turn runs towards; ccw is the
   physical sense, which on the canvas is a decreasing angle */
function turnArc(ctx, cx, cy, R, ccw, color, mid, w = 4, half = 0.7) {
  const a0 = mid - half, a1 = mid + half;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath(); ctx.arc(cx, cy, R, a0, a1); ctx.stroke(); ctx.restore();
  const a = ccw ? a0 : a1, t = ccw ? a - Math.PI / 2 : a + Math.PI / 2;
  const hx = cx + R * Math.cos(a), hy = cy + R * Math.sin(a);
  arrow(ctx, hx - 26 * Math.cos(t), hy - 26 * Math.sin(t), hx, hy, color, w);
}
/* a small square marking a right angle at (x, y) between the unit directions (ux, uy) and (wx, wy) */
function rightAngle(ctx, x, y, ux, uy, wx, wy, color) {
  const s = 14;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.beginPath();
  ctx.moveTo(x + ux * s, y + uy * s); ctx.lineTo(x + (ux + wx) * s, y + (uy + wy) * s); ctx.lineTo(x + wx * s, y + wy * s); ctx.stroke(); ctx.restore();
}
/* a spoked wheel at (x, y) of radius R, turned by the canvas angle phi, in ink */
function wheel(ctx, x, y, R, phi, spokes = 8) {
  ring(ctx, x, y, R, PAL.ink, Math.max(6, R * 0.12));
  ring(ctx, x, y, R * 0.8, PAL.muted, 2);
  ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.beginPath();
  for (let i = 0; i < spokes; i++) { const a = phi + (i * TAU) / spokes; ctx.moveTo(x, y); ctx.lineTo(x + (R * 0.8 - 1) * Math.cos(a), y + (R * 0.8 - 1) * Math.sin(a)); }
  ctx.stroke(); ctx.restore();
  dot(ctx, x, y, PAL.ink, true, Math.max(5, R * 0.08));
}
/* a label direction that never leads into the headline band: a tip near the top of the canvas whose arrow points
   upward gets its label to the side instead, the way it was already heading, and a label on an arrow pointing
   straight up goes to the left, where the scene has room and the graph does not */
const away = (ty, dx, dy) => (dy < 0 && Math.abs(dx) < 0.35 ? [-1, 0.25] : ty < 170 && dy < 0 ? [dx >= 0 ? 1 : -1, 0.25] : [dx, dy]);
/* a graph line of f(t) from t0 to t1 through the scales, solid where it has happened and dashed where it has not */
function trace(ctx, f, t0, t1, tNow, X, Y, color) {
  const seg = (a, b, col, w, dash) => {
    if (b <= a) return;
    ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = w; if (dash) ctx.setLineDash(dash); ctx.beginPath();
    for (let i = 0; i <= 60; i++) { const t = a + ((b - a) * i) / 60; if (i) ctx.lineTo(X(t), Y(f(t))); else ctx.moveTo(X(t), Y(f(t))); }
    ctx.stroke(); ctx.restore();
  };
  seg(Math.min(tNow, t1), t1, PAL.muted, 3, [8, 8]);
  seg(t0, Math.min(tNow, t1), color, 5);
}

/* =====================================================================
   FIGURE 10.3: uniform circular motion. A disk turns at a constant angular
   velocity; the radius sweeps the angle, and the velocity of a rim point
   keeps its magnitude while its direction turns. Moving: one revolution per
   loop, since a steady turning is a clock.
===================================================================== */
(function () {
  const d = sim('sim-uniform', 800);
  const ws = ctl(d.controls, { label: '\\kw', cls: 'angular-rate', min: 0.5, max: 4, step: 0.1, value: 2, unit: 'rad/s', dec: 1, onInput: reset, aria: 'the angular velocity' });
  const rs = ctl(d.controls, { label: '\\kr', cls: 'position', min: 0.2, max: 1, step: 0.05, value: 0.6, unit: 'm', dec: 2, onInput: reset, aria: 'the radius' });
  const cy = cycle(() => TAU / ws.v, 1.2);
  function reset() { cy.reset(); }
  /* the scene scale is fixed from the slider maxima: 1.00 m of radius is 240 units and 1 m/s of velocity 50 units, the
     disk sitting low enough that a velocity arrow of up to 175 units stays inside the canvas and out of the headline
     wherever it points; the arrow of a faster rim (above 3.5 m/s) is drawn shortened and its label says so (root rule 28.4) */
  const CX = 700, CY = 460, S = 240, KV = 50, VMAX = 175;
  function draw() {
    const { ctx, H } = begin(d.c);
    const wc = C('angular-rate'), pc = C('position'), vc = C('velocity'), tc = C('time');
    const w = ws.v, r = rs.v, t = cy.now(), th = w * t, v = r * w, R = r * S;
    const px = CX + R * Math.cos(th), py = CY - R * Math.sin(th);
    /* the disk, the reference radius and the radius that has turned */
    disk(ctx, CX, CY, R, PAL.soft, PAL.muted, 3);
    line(ctx, CX, CY, CX + R, CY, PAL.muted, 2, [8, 8]);
    line(ctx, CX, CY, px, py, pc, 4);
    /* the angle swept so far */
    if (th > 0.05) {
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(CX, CY, Math.min(52, R * 0.45), 0, -th, true); ctx.stroke(); ctx.restore();
    }
    const am = -th / 2, ar = Math.min(52, R * 0.45) + 34;
    text(ctx, 'Δθ = ' + fmt(th, 2) + ' rad', CX + ar * Math.cos(am), CY + ar * Math.sin(am), PAL.ink, { size: 20, weight: 600, align: Math.cos(am) < -0.3 ? 'right' : Math.cos(am) > 0.3 ? 'left' : 'center', bg: alpha(PAL.panel, 0.85) });
    /* the sense of rotation, inside the disk and clear of the radius */
    turnArc(ctx, CX, CY, R * 0.68, true, PAL.ink, Math.PI * 0.75, 3, 0.5);
    /* the velocity of the rim point, tangent to the circle: hollow at the start, filled now */
    const ux = -Math.sin(th), uy = -Math.cos(th);
    dot(ctx, CX + R, CY, PAL.ink, false, 9);
    const L = Math.min(v * KV, VMAX), cut = L < v * KV - 1;
    arrow(ctx, px, py, px + L * ux, py + L * uy, vc, 5);
    dot(ctx, px, py, PAL.ink, true, 9);
    const lab = labeller(ctx, H);
    lab.block(0, 0, 1400, 96);
    lab.add('v = ' + fmt(v, 2) + ' m/s' + (cut ? ' (arrow shortened)' : ''), px + L * ux, py + L * uy, ...away(py + L * uy, ux, uy), vc, 21, 24);
    lab.add('r = ' + fmt(r, 2) + ' m', (CX + px) / 2, (CY + py) / 2, Math.sin(th), Math.cos(th), pc, 21, 22);
    lab.flush();
    /* the clock sits in the corner, clear of the disk at every radius */
    text(ctx, 't = ' + fmt(t, 2) + ' s', 70, 140, tc, { size: 22, weight: 600 });
    topline(ctx, t < 1e-9 ? 'The radius lies along the reference line, and the rim point is about to move at ' + fmt(v, 2) + ' m/s.'
      : t >= TAU / w - 1e-9 ? 'After ' + fmt(t, 2) + ' s the radius has swept a full 2π rad, and the velocity has come back to the direction it began with.'
      : 'After ' + fmt(t, 2) + ' s the radius has swept ' + fmt(th, 2) + ' rad and the rim moves at ' + fmt(v, 2) + ' m/s in a direction that has turned with it.');
    readout(d.readout, `\\kv = \\kr\\kw = (${fmt(r, 2)}\\ \\text{m})(${fmt(w, 1)}\\ \\text{rad/s}) = ${fmt(v, 2)}\\ \\text{m/s}`,
      t > 0.05 ? 'The radius has swept Δθ = ' + fmt(th, 2) + ' rad in Δt = ' + fmt(t, 2) + ' s, so ω = Δθ/Δt = ' + fmt(th / t, 1) + ' rad/s, the same at every instant because the motion is uniform. One revolution takes 2π/ω = ' + fmt(TAU / w, 2) + ' s.'
        : 'One revolution takes 2π/ω = ' + fmt(TAU / w, 2) + ' s. Counterclockwise is the positive direction.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => TAU / ws.v / 5), draw });
})();

/* =====================================================================
   SIM: the bicycle wheel of Example 10.1 spun up from rest and then braked.
   The wheel turns on the left; the graph of ω against t on the right shows
   the gentle rise and the steep fall. Moving: the example is a story in
   time, one spin-up and one stop per loop.
===================================================================== */
(function () {
  const d = sim('sim-spin-up', 640);
  const wf = ctl(d.controls, { label: '\\kw', cls: 'angular-rate', min: 5, max: 40, step: 0.1, value: 26.2, unit: 'rad/s', dec: 1, onInput: reset, aria: 'the final angular velocity of the spin-up' });
  const dts = ctl(d.controls, { label: '\\kdt', cls: 'time', min: 1, max: 10, step: 0.1, value: 5, unit: 's', dec: 2, onInput: reset, aria: 'the time the spin-up takes' });
  const ab = ctl(d.controls, { label: '\\kalpha', cls: 'angular-acceleration', min: -150, max: -20, step: 0.1, value: -87.3, unit: 'rad/s²', dec: 1, onInput: reset, aria: 'the angular acceleration of the brakes' });
  const model = () => { const w = wf.v, T1 = dts.v, a1 = w / T1, ts = w / Math.abs(ab.v); return { w, T1, a1, ts, T: T1 + ts }; };
  const cy = cycle(() => model().T, 1.4);
  function reset() { cy.reset(); }
  const WX = 330, WY = 330, R = 150;
  /* the graph's axes are fixed from the slider extremes: 10 s of spin-up and 2 s of braking, 40 rad/s */
  const box = { l: 700, r: 1330, t: 130, b: 520 };
  function draw() {
    const { ctx } = begin(d.c);
    const wc = C('angular-rate'), ac = C('angular-acceleration'), tc = C('time');
    const m = model(), t = cy.now(), braking = t > m.T1, done = t >= m.T - 1e-9;
    const wOf = (s) => (s <= m.T1 ? m.a1 * s : Math.max(0, m.w + ab.v * (s - m.T1)));
    const phiOf = (s) => (s <= m.T1 ? 0.5 * m.a1 * s * s : 0.5 * m.a1 * m.T1 * m.T1 + m.w * (s - m.T1) + 0.5 * ab.v * (s - m.T1) * (s - m.T1));
    const w = wOf(t), a = braking ? ab.v : m.a1;
    /* the upturned bicycle: the wheel on its fork, the frame on the ground */
    line(ctx, WX - 60, WY + R + 70, WX + 60, WY + R + 70, PAL.muted, 4);
    line(ctx, WX - 18, WY + R + 70, WX - 4, WY + 8, PAL.muted, 5); line(ctx, WX + 18, WY + R + 70, WX + 4, WY + 8, PAL.muted, 5);
    text(ctx, 'the rear wheel of the upturned bicycle', WX, WY + R + 100, PAL.muted, { size: 18, align: 'center' });
    wheel(ctx, WX, WY, R, -phiOf(t), 10);
    /* a mark on the tire so the turning shows */
    dot(ctx, WX + (R - 2) * Math.cos(-phiOf(t)), WY + (R - 2) * Math.sin(-phiOf(t)), PAL.panel, true, 7);
    /* the sense of the angular acceleration, drawn round the wheel */
    if (!done && Math.abs(a) > 0.01) turnArc(ctx, WX, WY, R + 34, a > 0, ac, -Math.PI / 2, 5, 0.75);
    text(ctx, 'α = ' + num(done ? 0 : a, done ? 0 : 2) + ' rad/s²', WX, WY - R - 62, ac, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'ω = ' + fmt(w, 1) + ' rad/s', WX, WY + R + 42, wc, { size: 22, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.9) });
    /* the graph of angular velocity against time */
    const { X, Y } = axes(ctx, box, [0, 12], [0, 40], { xl: 't (s)', xc: tc, yl: 'ω (rad/s)', yc: wc, nx: 6, ny: 4 });
    trace(ctx, wOf, 0, m.T, t, X, Y, wc);
    line(ctx, X(m.T1), box.b, X(m.T1), Y(m.w), PAL.rule, 2, [4, 8]);
    text(ctx, 'Δt = ' + fmt(m.T1, 2) + ' s', X(m.T1 / 2), box.b + 58, tc, { size: 18, weight: 600, align: 'center' });
    /* the stopping time sits to the right of the fall, or to its left where the fall ends near the frame's edge */
    const roomRight = X(m.T) + 200 < box.r;
    text(ctx, 'stops in ' + fmt(m.ts, 3) + ' s', roomRight ? X(m.T) + 10 : X(m.T1) - 10, Y(m.w / 2), tc, { size: 18, weight: 600, align: roomRight ? 'left' : 'right', bg: alpha(PAL.panel, 0.85) });
    pinned(ctx, box, X, Y, t, w, wc);
    line(ctx, X(t), Y(w), X(t), box.b, tc, 2, [4, 8]);
    topline(ctx, t < 1e-9 ? 'The wheel is at rest, and the spin-up is about to take it to ' + fmt(m.w, 1) + ' rad/s in ' + fmt(m.T1, 2) + ' s.'
      : done ? 'The wheel reached ' + fmt(m.w, 1) + ' rad/s in ' + fmt(m.T1, 2) + ' s, and the brakes stopped it in ' + fmt(m.ts, 3) + ' s.'
      : braking ? 'At ' + fmt(t, 2) + ' s the brakes are on and the wheel has slowed to ' + fmt(w, 1) + ' rad/s, losing ' + fmt(Math.abs(ab.v), 1) + ' rad/s every second.'
      : 'At ' + fmt(t, 2) + ' s the wheel turns at ' + fmt(w, 1) + ' rad/s; it is gaining ' + fmt(m.a1, 2) + ' rad/s every second.');
    const up = `\\kalpha = \\frac{\\kdw}{\\kdt} = \\frac{${fmt(m.w, 1)}\\ \\text{rad/s}}{${fmt(m.T1, 2)}\\ \\text{s}} = ${fmt(m.a1, 2)}\\ \\text{rad/s}^2`;
    const stop = `\\kdt = \\frac{\\kdw}{\\kalpha} = \\frac{${knum(-m.w, 1)}\\ \\text{rad/s}}{${knum(ab.v, 1)}\\ \\text{rad/s}^2} = ${fmt(m.ts, 3)}\\ \\text{s}`;
    readout(d.readout, braking ? stop : up,
      braking ? 'The spin-up was the gentle slope, α = ' + fmt(m.a1, 2) + ' rad/s². The brakes make the angular acceleration large and negative, so the angular velocity goes to zero quickly.'
        : 'Once the wheel is spinning, the brakes bring it to rest in Δt = Δω/α = ' + fmt(m.ts, 3) + ' s. The angular acceleration of the spin-up is small and positive, and that of the stop is large and negative.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => model().T / 5), draw });
})();

/* =====================================================================
   FIGURE 10.4 + 10.5: the tangential and the centripetal acceleration of a
   point whose angular velocity is changing. The tangential acceleration
   lies along the velocity and changes its magnitude; the centripetal one
   points at the center and changes its direction. Moving: the point is
   somewhere along the circle at every instant, 4.0 s of model time per loop.
===================================================================== */
(function () {
  const d = sim('sim-accelerations', 860);
  const rs = ctl(d.controls, { label: '\\kr', cls: 'position', min: 0.2, max: 1, step: 0.05, value: 0.6, unit: 'm', dec: 2, onInput: reset, aria: 'the radius' });
  const w0 = ctl(d.controls, { label: '\\kwo', cls: 'angular-rate', min: 0, max: 3, step: 0.1, value: 0.5, unit: 'rad/s', dec: 1, onInput: reset, aria: 'the starting angular velocity' });
  const as = ctl(d.controls, { label: '\\kalpha', cls: 'angular-acceleration', min: -1, max: 1, step: 0.05, value: 0.8, unit: 'rad/s²', dec: 2, onInput: reset, aria: 'the angular acceleration' });
  const T = 4;
  const cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  /* the scene scale is fixed: 1.00 m is 280 units, from the slider maximum, the largest circle clearing the headline;
     the arrow scales are set from the book's default state, which the slider maxima would leave tiny: 1 m/s of
     velocity is 80 units and 1 m/s² of acceleration 150, so the book's 1.36 m/s and 0.48 m/s² are legible beside the
     point. A velocity arrow longer than 220 units, which keeps the longest inside the canvas and out of the headline
     wherever it points, and a centripetal acceleration that would pass the center are drawn shortened, and their
     labels say so (root rule 28.4) */
  const CX = 380, CY = 460, S = 280, KV = 80, KA = 150, VMAX = 220;
  /* the graph's axes are fixed from the book's default: the speed runs from −2 to 4 m/s over 4 s, which holds the
     default run (0.30 to 2.22 m/s) and every gentle one; a speed beyond it is pinned at the frame's edge */
  const box = { l: 880, r: 1330, t: 170, b: 640 };
  function draw() {
    const { ctx, H } = begin(d.c);
    const pc = C('position'), wc = C('angular-rate'), acc = C('acceleration'), vc = C('velocity'), tc = C('time');
    const r = rs.v, a = as.v, t = cy.now();
    const wOf = (s) => w0.v + a * s, thOf = (s) => w0.v * s + 0.5 * a * s * s, vOf = (s) => r * wOf(s);
    const w = wOf(t), th = thOf(t), v = vOf(t), at = r * a, ac = r * w * w, R = r * S;
    const px = CX + R * Math.cos(th), py = CY - R * Math.sin(th);
    const ux = -Math.sin(th), uy = -Math.cos(th);             /* the counterclockwise tangent on the canvas */
    const cx = -Math.cos(th), cyy = Math.sin(th);             /* towards the center */
    /* the circle, its center and the radius to the point */
    ring(ctx, CX, CY, R, PAL.muted, 3);
    line(ctx, CX, CY, px, py, pc, 3, [6, 8]);
    dot(ctx, CX, CY, PAL.ink, true, 6);
    turnArc(ctx, CX, CY, R + 30, w >= 0, PAL.ink, Math.PI * 0.75, 3, 0.45);
    /* the velocity, the tangential acceleration along it and the centripetal acceleration towards the center */
    const lab = labeller(ctx, H);
    lab.block(0, 0, 1400, 96); lab.block(box.l - 80, box.t - 40, 1400, H);
    if (Math.abs(v) > 0.02) {
      const full = Math.abs(v) * KV, L = Math.min(full, VMAX), vs = Math.sign(v), cut = L < full - 1;
      arrow(ctx, px, py, px + L * vs * ux, py + L * vs * uy, vc, 5);
      lab.add('v = ' + num(v, 2) + ' m/s' + (cut ? ' (arrow shortened)' : ''), px + L * vs * ux, py + L * vs * uy, ...away(py + L * vs * uy, vs * ux, vs * uy), vc, 21, 24);
    }
    if (Math.abs(at) > 0.005) {
      /* the tangential acceleration lies along the velocity, so it is drawn a little outside the circle beside it,
         where the book draws it too, rather than underneath the velocity arrow */
      const ox = px - 16 * cx, oy = py - 16 * cyy;
      arrow(ctx, ox, oy, ox + at * KA * ux, oy + at * KA * uy, acc, 5);
      lab.add('a_t = ' + num(at, 2) + ' m/s²', ox + at * KA * ux, oy + at * KA * uy, ...away(oy + at * KA * uy, Math.sign(at) * ux - 0.5 * cx, Math.sign(at) * uy - 0.5 * cyy), acc, 21, 26);
    }
    if (ac > 0.005) {
      const full = ac * KA, L = Math.min(full, R - 14), cut = L < full - 1;
      arrow(ctx, px, py, px + L * cx, py + L * cyy, acc, 5);
      const sv = v >= 0 ? 1 : -1;   /* the label sits behind the point, away from the velocity arrow */
      lab.add('a_c = ' + fmt(ac, 2) + ' m/s²' + (cut ? ' (arrow shortened)' : ''), px + L * 0.6 * cx, py + L * 0.6 * cyy, -ux * sv, -uy * sv, acc, 21, 22);
      if (Math.abs(at) > 0.005) rightAngle(ctx, px, py, Math.sign(at) * ux, Math.sign(at) * uy, cx, cyy, acc);
    }
    lab.add('r = ' + fmt(r, 2) + ' m', (CX + px) / 2, (CY + py) / 2, Math.sin(th), Math.cos(th), pc, 20, 20);
    dot(ctx, px, py, PAL.ink, true, 9);
    lab.flush();
    /* the graph of speed against time: a straight line whose slope is the tangential acceleration */
    const { X, Y } = axes(ctx, box, [0, 4], [-2, 4], { xl: 't (s)', xc: tc, yl: 'v (m/s)', yc: vc, nx: 4, ny: 6 });
    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
    trace(ctx, vOf, 0, T, t, X, Y, vc);
    ctx.restore();
    pinned(ctx, box, X, Y, t, v, vc);
    line(ctx, X(t), Y(Math.max(-2, Math.min(4, v))), X(t), box.b, tc, 2, [4, 8]);
    text(ctx, 'slope = a_t = ' + num(at, 2) + ' m/s²', box.r, box.t - 24, acc, { size: 18, weight: 600, align: 'right' });
    topline(ctx, Math.abs(a) < 1e-9
      ? 'With no angular acceleration the speed stays at ' + fmt(Math.abs(v), 2) + ' m/s and only a_c = ' + fmt(ac, 2) + ' m/s² acts, turning the velocity: this is uniform circular motion.'
      : 'At ' + fmt(t, 2) + ' s the point moves at ' + num(v, 2) + ' m/s; a_t = ' + num(at, 2) + ' m/s² is changing that speed and a_c = ' + fmt(ac, 2) + ' m/s² is changing its direction.');
    readout(d.readout, `\\kat = \\kr\\kalpha = ${knum(at, 2)}\\ \\text{m/s}^2 \\qquad \\kac = \\kr\\kw^2 = ${fmt(ac, 2)}\\ \\text{m/s}^2`,
      'With r = ' + fmt(r, 2) + ' m, α = ' + num(a, 2) + ' rad/s² and ω = ω₀ + αt = ' + num(w, 2) + ' rad/s now, the tangential acceleration is (' + fmt(r, 2) + ' m)(' + num(a, 2) + ' rad/s²) and the centripetal acceleration is (' + fmt(r, 2) + ' m)(' + num(w, 2) + ' rad/s)². The two are perpendicular and independent: the tangential acceleration is the same at every instant while α is, and the centripetal acceleration grows with the square of the angular velocity.' + (Math.abs(v) < 0.02 && t > 0.1 ? ' At this instant the point is at rest, so it has no centripetal acceleration at all.' : ''));
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 5), draw });
})();

/* =====================================================================
   FIGURE 10.6: the motorcycle of Example 10.2. It pulls away from rest and
   reaches its final speed in the given time; the linear acceleration of the
   machine is the tangential acceleration of the rim of each wheel, and the
   wheels turn with α = a_t / r. Moving: one run per loop.
===================================================================== */
(function () {
  const d = sim('sim-motorcycle', 860);
  const vs = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 10, max: 40, step: 0.5, value: 30, unit: 'm/s', dec: 1, onInput: reset, aria: 'the final speed' });
  const dts = ctl(d.controls, { label: '\\kdt', cls: 'time', min: 2, max: 8, step: 0.1, value: 4.2, unit: 's', dec: 2, onInput: reset, aria: 'the time the run takes' });
  const rs = ctl(d.controls, { label: '\\kr', cls: 'position', min: 0.2, max: 0.5, step: 0.01, value: 0.32, unit: 'm', dec: 3, onInput: reset, aria: 'the radius of the wheels' });
  const cy = cycle(() => dts.v, 1.2);
  function reset() { cy.reset(); }
  /* the road is fixed from the slider extremes: the longest run, 160 m, is 850 units starting 250 in, so the machine
     and its widest wheels stay on the canvas at both ends of it; a wheel of 1 m radius is 200 units and the wheelbase
     is 1.40 m; 1 m/s of velocity is 5 units and 1 m/s² of acceleration 14 */
  const X0 = 250, RY = 400, SC = 850 / 160, WS = 200, KV = 5, KA = 14;
  const box = { l: 160, r: 1300, t: 556, b: 776 };
  function draw() {
    const { ctx } = begin(d.c);
    const vc = C('velocity'), acc = C('acceleration'), ac = C('angular-acceleration'), wc = C('angular-rate'), tc = C('time'), pc = C('position');
    const vf = vs.v, T = dts.v, r = rs.v, t = cy.now(), done = t >= T - 1e-9;
    const a = vf / T, al = a / r, v = a * t, x = 0.5 * a * t * t, w = v / r, phi = x / r, rw = r * WS;
    const wOf = (s) => (a * s) / r;
    /* the road, with its distance marks */
    strip(ctx, 60, 1340, RY + 10, 20);
    const RX = (m) => X0 + m * SC;
    scale(ctx, RX, 0, 160, 20, RY + 42, 'm', 2);
    /* the motorcycle, in ink, facing right: the swing arm and the fork first, then the seat, tank and engine over
       them, the handlebars, a footpeg, and the rider drawn with the library's person sprite, feet on the peg, leaning
       forward with both hands on the bars */
    const bx = RX(x), rear = bx - 140, front = bx + 140, hub = RY - rw;
    const bars = { x: front - 50, y: hub - 116 }, peg = { x: bx + 10, y: hub + 4 };
    line(ctx, rear, hub, rear + 50, hub - 22, PAL.ink, 6);                          /* the swing arm to the rear hub */
    line(ctx, front, hub, bars.x, bars.y, PAL.ink, 6);                               /* the fork to the front hub */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.lineJoin = 'round';
    ctx.beginPath();                                                                 /* the seat, the tank and the engine, filled light so the rider in ink stands out against them */
    ctx.moveTo(rear + 10, hub - 70); ctx.lineTo(rear + 60, hub - 78); ctx.lineTo(bx - 20, hub - 70); ctx.lineTo(bx + 10, hub - 92); ctx.lineTo(bx + 70, hub - 88);
    ctx.lineTo(front - 40, hub - 54); ctx.lineTo(front - 56, hub - 20); ctx.lineTo(bx + 50, hub + 2); ctx.lineTo(bx - 40, hub + 2); ctx.lineTo(rear + 40, hub - 26); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.restore();
    line(ctx, bars.x - 26, bars.y, bars.x + 26, bars.y - 4, PAL.ink, 6);             /* the handlebars */
    line(ctx, peg.x - 12, peg.y, peg.x + 12, peg.y, PAL.ink, 5);                     /* the footpeg */
    person(ctx, peg.x, peg.y, PAL.ink, { s: 1.8, crouch: 0.4, lean: 0.6, reach: { x: bars.x, y: bars.y } });
    wheel(ctx, rear, hub, rw, phi, 6); wheel(ctx, front, hub, rw, phi, 6);
    /* the linear acceleration of the machine and its velocity, stacked under the headline and pointing the way it
       goes, moved left where their tips would leave the canvas; the angular acceleration of the wheels, on arcs round
       both, named under the rear wheel below the distance marks; the radius drawn on the front wheel and named under it */
    const ax0 = Math.min(bx - 40, 1330 - a * KA - 170);
    arrow(ctx, ax0, 110, ax0 + a * KA, 110, acc, 5);
    text(ctx, 'a_t = ' + fmt(a, 2) + ' m/s²', ax0 + a * KA + 14, 110, acc, { size: 21, weight: 600 });
    if (v > 0.2) { const vx0 = Math.min(bx - 40, 1330 - v * KV - 150); arrow(ctx, vx0, 142, vx0 + v * KV, 142, vc, 5); text(ctx, 'v = ' + fmt(v, 1) + ' m/s', vx0 + v * KV + 14, 142, vc, { size: 21, weight: 600 }); }
    for (const cxw of [rear, front]) turnArc(ctx, cxw, hub, rw + 26, false, ac, Math.PI / 2, 4, 0.6);
    text(ctx, 'α = ' + fmt(al, 1) + ' rad/s²', rear, RY + 100, ac, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    line(ctx, front, hub, front + rw * 0.7, hub - rw * 0.7, pc, 3);
    text(ctx, 'r = ' + fmt(r, 3) + ' m', front, RY + 100, pc, { size: 19, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    /* the graph of a wheel's angular velocity against time: a line whose slope is α */
    const { X, Y } = axes(ctx, box, [0, 8], [0, 200], { xl: 't (s)', xc: tc, yl: 'ω of a wheel (rad/s)', yc: wc, nx: 4, ny: 4 });
    trace(ctx, wOf, 0, T, t, X, Y, wc);
    pinned(ctx, box, X, Y, t, w, wc);
    line(ctx, X(t), Y(w), X(t), box.b, tc, 2, [4, 8]);
    text(ctx, 'slope = α = ' + fmt(al, 1) + ' rad/s²', box.r, box.t - 24, ac, { size: 18, weight: 600, align: 'right' });
    topline(ctx, t < 1e-9 ? 'The motorcycle is at rest and about to reach ' + fmt(vf, 1) + ' m/s in ' + fmt(T, 2) + ' s, with wheels of radius ' + fmt(r, 3) + ' m.'
      : done ? 'After ' + fmt(T, 2) + ' s the motorcycle moves at ' + fmt(vf, 1) + ' m/s and each wheel turns at ' + fmt(vf / r, 1) + ' rad/s, having covered ' + fmt(x, 1) + ' m.'
      : 'At ' + fmt(t, 2) + ' s the motorcycle moves at ' + fmt(v, 1) + ' m/s and its wheels turn at ' + fmt(w, 1) + ' rad/s, gaining ' + fmt(al, 1) + ' rad/s every second.');
    readout(d.readout, `\\kalpha = \\frac{\\kat}{\\kr} = \\frac{${fmt(a, 2)}\\ \\text{m/s}^2}{${fmt(r, 3)}\\ \\text{m}} = ${fmt(al, 1)}\\ \\text{rad/s}^2`,
      'The linear acceleration is a_t = Δv/Δt = (' + fmt(vf, 1) + ' m/s)/(' + fmt(T, 2) + ' s) = ' + fmt(a, 2) + ' m/s², and it is the tangential acceleration of the rim of each wheel where it meets the road. The smaller the wheel, the larger the angular acceleration the same linear acceleration asks of it.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => dts.v / 5), draw });
})();
};
