/* Figures for section 17.4 Doppler Effect and Sonic Booms. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['17.4'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, topline, axes, pinned, labeller, silhouette, car, plane } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- shared numbers and helpers ---------- */
const TAU = 2 * Math.PI, DEG = 180 / Math.PI;
const VW = 340;                     /* the speed of sound of Example 17.4, m/s */
const sig3 = (x) => { const s = Math.abs(x).toPrecision(3); return (x < 0 ? '−' : '') + (Math.abs(x) >= 1000 ? String(Math.round(Number(s))) : s); };
/* a circle, stroked, clipped by whatever clip the caller has set */
function ring(ctx, x, y, r, color, w = 2.5) { if (r <= 0) return; ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.stroke(); ctx.restore(); }
/* a road or a piece of ground: a soft strip with a rule along its top */
function ground(ctx, x1, x2, y, h) { ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(x1, y, x2 - x1, h); ctx.restore(); line(ctx, x1, y, x2, y, PAL.muted, 3); }
/* a burst of short rays at (x, y), f from 0 to 1 as it opens and fades */
function burst(ctx, x, y, f, color) {
  const r = 18 + 26 * f;
  ctx.save(); ctx.strokeStyle = alpha(color, 0.9 - 0.6 * f); ctx.lineWidth = 3;
  for (let i = 0; i < 8; i++) { const a = (i * TAU) / 8 + 0.4; ctx.beginPath(); ctx.moveTo(x + 8 * Math.cos(a), y + 8 * Math.sin(a)); ctx.lineTo(x + r * Math.cos(a), y + r * Math.sin(a)); ctx.stroke(); }
  ctx.restore();
}

/* =====================================================================
   FIGURE 17.13 + 17.14 + 17.15: the car, its horn and the two observers.
   Every period the horn emits a wavefront that spreads at the speed of
   sound from the point where the car was; the car moves on at v_s and the
   observers walk at v_obs. Twelve periods per loop, then the hold, so the
   last frame is the book's picture. Moving, so it gets the transport.
===================================================================== */
(function () {
  const H = 560, ROAD = 470, S = 40;          /* S: canvas units per metre, so one wavelength at rest is 91 units */
  const FS = 150, T = 1 / FS, N = 12, D = N * T;   /* the horn of Example 17.4; N periods per loop */
  const d = sim('sim-doppler', H);
  const vs = ctl(d.controls, { label: '\\kvs', cls: 'velocity', min: 0, max: 170, step: 5, value: 100, unit: 'm/s', dec: 0, onInput: reset, aria: 'velocity of the car' });
  const vo = ctl(d.controls, { label: '\\kvobs', cls: 'velocity', min: -80, max: 80, step: 5, value: 0, unit: 'm/s', dec: 0, onInput: reset, aria: 'velocity of the observers, positive to the right' });
  const cy = cycle(() => D, 1.2);
  function reset() { cy.reset(); }
  /* positions in metres along the road, the car centred over its run and each observer over theirs */
  const carX = (t) => S * (vs.v * (t - D / 2));
  const obsX = (t, side) => side * 480 + S * (vo.v * (t - D / 2));
  function draw() {
    const { ctx } = begin(d.c);
    const t = cy.now(), cx = 700 + carX(t), hornY = ROAD - 34;
    const xX = 700 + obsX(t, -1), xY = 700 + obsX(t, 1);
    const fY = FS * (VW - vo.v) / (VW - vs.v), fX = FS * (VW + vo.v) / (VW + vs.v);
    ground(ctx, 0, 1400, ROAD, 14);
    /* the car and the observers, in ink; an observer faces the way they walk, or the car when still */
    car(ctx, cx, ROAD - 12, PAL.ink, 1.1);
    /* the observers as filled bodies, 143 units tall; a walker strides once every four periods of the horn */
    const walk = vo.v !== 0, ph = ((t / T) * 0.25) % 1;
    if (walk) { silhouette(ctx, { x: xX, y: ROAD, s: 0.95, pose: 'walk', phase: ph, face: Math.sign(vo.v), color: PAL.ink }); silhouette(ctx, { x: xY, y: ROAD, s: 0.95, pose: 'walk', phase: ph, face: Math.sign(vo.v), color: PAL.ink }); }
    else { silhouette(ctx, { x: xX, y: ROAD, s: 0.95, pose: 'stand', face: 1, color: PAL.ink }); silhouette(ctx, { x: xY, y: ROAD, s: 0.95, pose: 'stand', face: -1, color: PAL.ink }); }
    text(ctx, 'X', xX, ROAD + 34, PAL.ink, { size: 24, weight: 600, align: 'center' });
    text(ctx, 'Y', xY, ROAD + 34, PAL.ink, { size: 24, weight: 600, align: 'center' });
    /* the wavefronts, each centred on the point where it was emitted, clipped to the scene above the road */
    ctx.save(); ctx.beginPath(); ctx.rect(0, 92, 1400, ROAD + 14 - 92); ctx.clip();
    const fronts = [];
    for (let k = 0; k <= N; k++) {
      const tk = k * T; if (t < tk) break;
      const xk = 700 + carX(tk), r = S * VW * (t - tk);
      fronts.push({ xk, r });
      ring(ctx, xk, hornY, r, alpha(PAL.ink, 0.55));
      dot(ctx, xk, hornY, PAL.ink, true, 3.5);
    }
    ctx.restore();
    /* a pulse at an observer's head as a wavefront passes it */
    const earY = ROAD - 126;
    for (const [xo, side] of [[xX, -1], [xY, 1]]) {
      for (const w of fronts) { const dist = Math.hypot(xo - w.xk, earY - hornY); if (Math.abs(w.r - dist) < 9) ring(ctx, xo + side * 4, earY, 16, C('frequency'), 4); }
    }
    /* the wavelength ahead and behind, bracketed on the road between two consecutive fronts */
    const grown = fronts.filter((w) => w.r > 40);
    if (grown.length >= 2) {
      const a = grown[grown.length - 2], b = grown[grown.length - 1];
      const brk = (x1, x2, lam) => {
        const y = ROAD + 40; line(ctx, x1, y, x2, y, C('position'), 3); line(ctx, x1, y - 9, x1, y + 9, C('position'), 3); line(ctx, x2, y - 9, x2, y + 9, C('position'), 3);
        text(ctx, 'λ = ' + fmt(lam, 2) + ' m', (x1 + x2) / 2, y + 26, C('position'), { size: 20, weight: 600, align: 'center', bg: PAL.panel });
      };
      const lamA = (VW - vs.v) / FS, lamB = (VW + vs.v) / FS;
      const fa1 = b.xk + b.r, fa2 = a.xk + a.r; if (fa2 < 1380 && fa1 > cx + 30) brk(fa1, fa2, lamA);
      const fb1 = a.xk - a.r, fb2 = b.xk - b.r; if (fb1 > 20 && fb2 < cx - 30) brk(fb1, fb2, lamB);
    }
    /* velocities as arrows in the velocity hue, and the frequency each observer receives in the frequency hue */
    if (vs.v > 0) { arrow(ctx, cx, ROAD - 66, cx + 1.3 * vs.v, ROAD - 66, C('velocity'), 5); text(ctx, 'v_s = ' + vs.v + ' m/s', cx + 0.65 * vs.v, ROAD - 90, C('velocity'), { size: 20, weight: 600, align: 'center', bg: PAL.panel }); }
    if (vo.v !== 0) {
      /* both observers walk at the same velocity, so the arrow is named once, on the one that points into the scene */
      const L = 1.2 * vo.v;
      for (const xo of [xX, xY]) arrow(ctx, xo, ROAD - 92, xo + L, ROAD - 92, C('velocity'), 4);
      const xo = vo.v > 0 ? xX : xY;
      text(ctx, 'v_obs = ' + Math.abs(vo.v) + ' m/s', xo + L + Math.sign(vo.v) * 12, ROAD - 92, C('velocity'), { size: 20, weight: 600, align: vo.v > 0 ? 'left' : 'right', bg: PAL.panel });
    }
    const clampX = (x) => Math.min(1300, Math.max(100, x));
    text(ctx, 'f_obs = ' + sig3(fX) + ' Hz', clampX(xX), ROAD - 172, C('frequency'), { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'f_obs = ' + sig3(fY) + ' Hz', clampX(xY), ROAD - 172, C('frequency'), { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    const dir = vo.v > 0 ? 'right' : 'left';
    topline(ctx, vs.v === 0 && vo.v === 0 ? 'The car and both observers are at rest, so X and Y both receive the horn at 150 Hz, the frequency it sounds at.'
      : vs.v === 0 ? 'The car is at rest and the observers walk to the ' + dir + ' at ' + Math.abs(vo.v) + ' m/s, so ' + (vo.v > 0 ? 'X, walking toward it, receives ' + sig3(fX) + ' Hz and Y, walking away, ' + sig3(fY) + ' Hz.' : 'Y, walking toward it, receives ' + sig3(fY) + ' Hz and X, walking away, ' + sig3(fX) + ' Hz.')
      : vo.v === 0 ? 'The car moves at ' + vs.v + ' m/s toward Y, who receives ' + sig3(fY) + ' Hz, and away from X, who receives ' + sig3(fX) + ' Hz, from a horn that sounds at 150 Hz.'
      : 'The car moves at ' + vs.v + ' m/s and the observers walk to the ' + dir + ' at ' + Math.abs(vo.v) + ' m/s, so Y receives ' + sig3(fY) + ' Hz and X ' + sig3(fX) + ' Hz from a horn that sounds at 150 Hz.');
    /* the readout writes the equation that applies to Y, and the small line says what X receives */
    const sO = vo.v < 0 ? '+' : '-', sS = '-';
    const main = vs.v === 0 && vo.v === 0 ? `\\kfobs = \\kfsrc = 150\\ \\text{Hz}`
      : vs.v === 0 ? `\\kfobs = \\kfsrc\\left(\\frac{\\kvw ${sO} \\kvobs}{\\kvw}\\right) = (150\\ \\text{Hz})\\left(\\frac{340 ${sO} ${Math.abs(vo.v)}}{340}\\right) = ${sig3(fY)}\\ \\text{Hz}`
      : vo.v === 0 ? `\\kfobs = \\kfsrc\\left(\\frac{\\kvw}{\\kvw ${sS} \\kvs}\\right) = (150\\ \\text{Hz})\\left(\\frac{340}{340 - ${vs.v}}\\right) = ${sig3(fY)}\\ \\text{Hz}`
      : `\\kfobs = \\left[\\kfsrc\\left(\\frac{\\kvw ${sO} \\kvobs}{\\kvw}\\right)\\right]\\left(\\frac{\\kvw}{\\kvw ${sS} \\kvs}\\right) = (150\\ \\text{Hz})\\left(\\frac{340 ${sO} ${Math.abs(vo.v)}}{340}\\right)\\left(\\frac{340}{340 - ${vs.v}}\\right) = ${sig3(fY)}\\ \\text{Hz}`;
    readout(d.readout, main, vs.v === 0 && vo.v === 0 ? 'The speed of sound is 340 m/s, and with nothing moving neither observer receives a shifted frequency.'
      : 'This is what Y receives, with the speed of sound 340 m/s. For X the signs are the other way, so X receives ' + sig3(fX) + ' Hz.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => D / 5), draw });
})();

/* =====================================================================
   SIM: the observed frequency against speed, for a moving source and for a
   moving observer, toward and away. Nothing has a clock; it redraws on
   input. Axes fixed at 0 to 350 m/s by 0 to 600 Hz.
===================================================================== */
(function () {
  const H = 520;
  const d = sim('sim-shift', H);
  const v = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 0, max: 330, step: 1, value: 35, unit: 'm/s', dec: 1, aria: 'speed of the moving source or observer' });
  const fs = ctl(d.controls, { label: '\\kfsrc', cls: 'frequency', min: 50, max: 200, step: 1, value: 150, unit: 'Hz', dec: 0, aria: 'frequency of the source' });
  const box = { l: 130, r: 1110, t: 135, b: 425 }, XR = [0, 350], YR = [0, 600];
  const srcT = (s) => fs.v * VW / (VW - s), srcA = (s) => fs.v * VW / (VW + s), obsT = (s) => fs.v * (VW + s) / VW, obsA = (s) => fs.v * (VW - s) / VW;
  /* a curve clipped to the graph box, since the source's curve climbs without limit */
  function clipped(ctx, f, s0, s1, X, Y, color, dash) {
    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
    ctx.strokeStyle = color; ctx.lineWidth = 4; if (dash) ctx.setLineDash(dash); ctx.beginPath();
    for (let i = 0; i <= 160; i++) { const s = s0 + ((s1 - s0) * i) / 160, y = f(s); if (!isFinite(y)) break; if (i) ctx.lineTo(X(s), Y(y)); else ctx.moveTo(X(s), Y(y)); }
    ctx.stroke(); ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const { X, Y } = axes(ctx, box, XR, YR, { xl: 'speed of the moving source or observer (m/s)', xc: C('velocity'), yl: 'f_obs (Hz)', yc: C('frequency'), nx: 7, ny: 6 });
    /* the asymptote at the speed of sound */
    line(ctx, X(VW), box.t, X(VW), box.b, alpha(C('velocity'), 0.6), 2.5, [10, 10]);
    text(ctx, 'v_w = 340 m/s', X(VW) - 10, box.b - 18, C('velocity'), { size: 18, weight: 600, align: 'right', bg: PAL.panel });
    const FQ = C('frequency');
    clipped(ctx, srcT, 0, VW - 0.5, X, Y, FQ); clipped(ctx, srcA, 0, XR[1], X, Y, FQ);
    clipped(ctx, obsT, 0, XR[1], X, Y, FQ, [12, 10]); clipped(ctx, obsA, 0, VW, X, Y, FQ, [12, 10]);
    /* the curves named at their right-hand ends, the source's climbing curve where it leaves the box */
    const lab = labeller(ctx, H);
    lab.block(box.l, 0, 1400, box.t - 4);
    lab.block(0, box.b + 8, 1400, box.b + 74);      /* the tick labels and the axis title keep their band */
    const sExit = VW * (1 - fs.v / YR[1]);          /* where f_s v_w/(v_w − s) reaches the top of the box */
    lab.add('source moving toward', X(sExit) - 6, box.t + 24, -1, 0.15, FQ, 18, 20);
    lab.add('observer moving toward', box.r + 8, Y(obsT(XR[1])), 1, -0.3, FQ, 18, 10);
    lab.add('source moving away', box.r + 8, Y(srcA(XR[1])), 1, -0.2, FQ, 18, 10);
    lab.add('observer moving away', box.r + 8, Y(Math.max(0, obsA(XR[1]))), 1, 0.4, FQ, 18, 10);
    /* the current speed and its four values */
    line(ctx, X(v.v), box.b, X(v.v), box.t, alpha(C('velocity'), 0.5), 2, [4, 8]);
    text(ctx, 'v = ' + fmt(v.v, 1) + ' m/s', Math.max(box.l + 150, Math.min(X(v.v), box.r - 60)), box.t - 18, C('velocity'), { size: 18, weight: 600, align: 'center', bg: PAL.panel });
    /* the four values, written to the left of the drop line so that they never reach the curve names on the right */
    const mid = (box.t + box.b) / 2, side = X(v.v) < box.l + 170 ? 1 : -1;   /* to the left of the drop line, or to the right where the axis leaves no room */
    lab.block(0, box.t, box.l - 2, box.b);
    for (const f of [srcT(v.v), obsT(v.v), srcA(v.v), obsA(v.v)]) {
      const p = pinned(ctx, box, X, Y, v.v, f, FQ);
      lab.add(sig3(f) + ' Hz', p.x + side * 8, p.y, side, (p.y > mid ? -0.45 : 0.45), FQ, 18, 18);   /* the label leans toward the middle of the box, never into the frame */
    }
    lab.flush();
    const sT = srcT(v.v), sA = srcA(v.v), oT = obsT(v.v), oA = obsA(v.v);
    topline(ctx, v.v === 0 ? 'At rest nothing is shifted, and every observer receives the ' + fs.v + ' Hz the source sounds at.'
      : 'At ' + fmt(v.v, 1) + ' m/s a ' + fs.v + ' Hz source is received at ' + sig3(sT) + ' Hz coming and ' + sig3(sA) + ' Hz going when it moves, and at ' + sig3(oT) + ' Hz and ' + sig3(oA) + ' Hz when the observer moves instead.');
    readout(d.readout, `\\kfobs = \\kfsrc\\left(\\frac{\\kvw}{\\kvw \\mp \\kvs}\\right) = (${fs.v}\\ \\text{Hz})\\left(\\frac{340}{340 \\mp ${fmt(v.v, 1)}}\\right) = ${sig3(sT)}\\ \\text{Hz toward},\\ ${sig3(sA)}\\ \\text{Hz away}`,
      'With the observer moving at the same speed and the source at rest, f_obs = f_s (v_w ± v_obs)/v_w gives ' + sig3(oT) + ' Hz toward and ' + sig3(oA) + ' Hz away. The shift for the source is the larger one toward and the smaller one away, and the speed of sound is 340 m/s.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 17.16: the source and its wavefronts, from below the speed of
   sound to beyond it. Six wavefronts leave the source one period apart and
   grow from their emission points; past the speed of sound the source
   outruns them and they pile up along two lines. Moving, with the transport.
===================================================================== */
(function () {
  const H = 560, Y0 = 310, X0 = 330, G = 60;   /* G: how far a wavefront grows in one period, in canvas units */
  const NP = 5.5;                              /* periods per loop: six wavefronts, the last just born */
  const d = sim('sim-sonic-boom', H);
  const vs = ctl(d.controls, { label: '\\kvs', cls: 'velocity', min: 200, max: 1000, step: 10, value: 800, unit: 'm/s', dec: 0, onInput: reset, aria: 'speed of the source', detents: [{ v: VW, label: 'v_w' }], snap: true });
  const cy = cycle(() => NP, 1.2);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), M = vs.v / VW, step = G * M;      /* the source moves step units per period */
    const xs = X0 + step * tau;
    line(ctx, 0, Y0, 1400, Y0, PAL.muted, 2);
    /* the wavefronts and their emission points, numbered in the order they left */
    ctx.save(); ctx.beginPath(); ctx.rect(0, 92, 1400, H - 92); ctx.clip();
    for (let k = 0; k < 6; k++) { if (tau < k) break; const xk = X0 + step * k; ring(ctx, xk, Y0, G * (tau - k), alpha(PAL.ink, 0.6)); }
    ctx.restore();
    for (let k = 0; k < 6; k++) { if (tau < k) break; const xk = X0 + step * k; dot(ctx, xk, Y0, PAL.ink, true, 5); text(ctx, String(k + 1), xk, Y0 + 26, PAL.ink, { size: 19, weight: 600, align: 'center' }); }
    /* past the speed of sound, the two lines every wavefront is tangent to, and the angle between them */
    let theta = null;
    if (M >= 1) {
      const a = Math.asin(1 / M); theta = 2 * a * DEG;
      const L = 1500;
      ctx.save(); ctx.beginPath(); ctx.rect(0, 92, 1400, H - 92); ctx.clip();
      line(ctx, xs, Y0, xs - L * Math.cos(a), Y0 - L * Math.sin(a), PAL.ink, 3.5);
      line(ctx, xs, Y0, xs - L * Math.cos(a), Y0 + L * Math.sin(a), PAL.ink, 3.5);
      const R = Math.min(xs - 70, 300);
      if (R > 60) {
        ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(xs, Y0, R, Math.PI - a, Math.PI + a); ctx.stroke();
        text(ctx, 'θ = ' + fmt(theta, 0) + '°', xs - R - 14, Y0, PAL.ink, { size: 22, weight: 600, align: 'right', bg: PAL.panel });
      }
      ctx.restore();
    }
    /* the source and its velocity */
    dot(ctx, xs, Y0, PAL.ink, true, 8);
    const aEnd = Math.min(1180, xs + 40 + 0.16 * vs.v);
    arrow(ctx, xs, Y0, aEnd, Y0, C('velocity'), 5);
    text(ctx, 'v_s = ' + vs.v + ' m/s', Math.min(1390, aEnd + 12), Y0 - 26, C('velocity'), { size: 20, weight: 600, align: 'right', bg: PAL.panel });
    text(ctx, 'each wavefront grows at v_w = 340 m/s', 1390, H - 24, PAL.muted, { size: 17, align: 'right' });
    topline(ctx, M > 1.02 ? 'At ' + vs.v + ' m/s the source outruns its own sound, ' + fmt(M, 2) + ' times faster than the wavefronts, and they pile up along two lines ' + fmt(theta, 0) + '° apart.'
      : M >= 1 ? 'At 340 m/s the source keeps pace with its own sound, and every wavefront is tangent at its front, where the observed frequency would be infinite.'
      : 'At ' + vs.v + ' m/s the source is slower than its sound, so the wavefronts nest inside one another, bunched ahead of it as in Figure 17.14.');
    readout(d.readout, M >= 1 ? `\\kvs = ${vs.v}\\ \\text{m/s} = ${fmt(M, 2)}\\,\\kvw, \\qquad \\theta = ${fmt(theta, 0)}^\\circ` : `\\kvs = ${vs.v}\\ \\text{m/s} = ${fmt(M, 2)}\\,\\kvw < \\kvw`,
      M >= 1 ? 'By the time the source is a distance v_s t beyond the point where it emitted a wavefront, that wavefront has grown to a radius v_w t, so the lines tangent to every wavefront make half the angle θ with the path, with sin(θ/2) = v_w / v_s = ' + fmt(1 / M, 3) + '.'
        : 'Below the speed of sound no wavefront is overtaken, and there is no line along which they arrive together; the frequency ahead is f_s v_w/(v_w − v_s) = ' + fmt(1 / (1 - M), 2) + ' f_s.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => NP / 5), draw });
})();

/* =====================================================================
   FIGURE 17.17: the two booms of an aircraft, from its nose and its tail,
   sweeping over three observers after it has passed. Moving, with the
   transport: one crossing of the frame per loop.
===================================================================== */
(function () {
  const H = 620, GY = 540, S = 0.2;            /* S: canvas units per metre of altitude and of ground */
  const RUN = 1450 / S;                        /* metres the aircraft covers in one crossing of the frame */
  const LEN = 37, SPR = 1.1, DRAWN = 102 * SPR;   /* the aircraft's true length, the sprite's scale and its drawn length in units */
  const OBS = [250, 550, 850];
  const d = sim('sim-two-booms', H);
  const vs = ctl(d.controls, { label: '\\kvs', cls: 'velocity', min: 400, max: 1000, step: 10, value: 600, unit: 'm/s', dec: 0, onInput: reset, aria: 'speed of the aircraft' });
  const h = ctl(d.controls, { label: 'h', cls: '', min: 500, max: 2000, step: 50, value: 1000, unit: 'm', dec: 0, onInput: reset, aria: 'altitude of the aircraft' });
  const cy = cycle(() => RUN / vs.v, 1.2);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const t = cy.now(), M = vs.v / VW, a = Math.asin(1 / M), theta = 2 * a * DEG, tanA = Math.tan(a);
    const py = GY - h.v * S, nose = -150 + S * vs.v * t, tail = nose - DRAWN;
    const dBack = (py, x) => x - (GY - py) / tanA;     /* where a cone from (x, py) meets the ground */
    const gN = dBack(py, nose), gT = dBack(py, tail);
    /* the two cones, shaded, clipped to the sky */
    ctx.save(); ctx.beginPath(); ctx.rect(0, 92, 1400, GY - 92); ctx.clip();
    const cone = (x, fill) => { ctx.fillStyle = fill; ctx.beginPath(); ctx.moveTo(x, py); ctx.lineTo(x - 3000, py - 3000 * tanA); ctx.lineTo(-3000, py - 3000 * tanA); ctx.lineTo(-3000, py + 3000 * tanA); ctx.lineTo(x - 3000, py + 3000 * tanA); ctx.closePath(); ctx.fill(); };
    cone(nose, alpha(PAL.ink, 0.04)); cone(tail, alpha(PAL.ink, 0.05));
    for (const x of [nose, tail]) { line(ctx, x, py, x - 3000, py - 3000 * tanA, PAL.ink, 3); line(ctx, x, py, x - 3000, py + 3000 * tanA, PAL.ink, 3); }
    ctx.restore();
    ground(ctx, 0, 1400, GY, 16);
    plane(ctx, nose - 44 * SPR, py, PAL.ink, SPR);
    const vEnd = Math.min(1250, nose + 60 + 0.12 * vs.v);
    if (vEnd > nose + 30) arrow(ctx, nose + 10, py - 52, vEnd, py - 52, C('velocity'), 5);
    text(ctx, 'v_s = ' + vs.v + ' m/s', Math.min(1390, vEnd + 12), Math.max(118, py - 78), C('velocity'), { size: 20, weight: 600, align: 'right', bg: PAL.panel });
    /* the altitude, bracketed in ink below the first observer's left */
    line(ctx, 60, GY, 60, py, PAL.muted, 2, [4, 8]); text(ctx, 'h = ' + h.v + ' m', 72, (GY + py) / 2, PAL.ink, { size: 19, weight: 600, bg: PAL.panel });
    /* the observers: each is passed by the aircraft, then swept by the nose boom and the tail boom */
    OBS.forEach((x, i) => {
      const headY = GY - 112;
      silhouette(ctx, { x, y: GY, s: 0.85, pose: 'stand', face: 1, color: PAL.ink });
      const sinceN = (gN - x) / (S * vs.v), sinceT = (gT - x) / (S * vs.v);   /* seconds since each boom swept this observer */
      const flash = (since) => since >= 0 && since < 0.6;
      if (flash(sinceN)) burst(ctx, x, headY, sinceN / 0.6, PAL.ink);
      if (flash(sinceT)) burst(ctx, x, headY, sinceT / 0.6, PAL.ink);
      const state = sinceT >= 0.6 ? 'both booms heard' : flash(sinceT) ? 'second boom' : flash(sinceN) ? 'first boom' : nose > x ? 'passed in silence' : 'hears nothing yet';
      text(ctx, state, x, GY + 36, PAL.ink, { size: 18, align: 'center' });
    });
    const dGround = h.v / tanA, tLag = dGround / vs.v, dt = LEN / vs.v;
    const reached = OBS.filter((x) => gN >= x).length;
    topline(ctx, reached === 0 ? 'The aircraft is ' + fmt(dGround / 1000, 2) + ' km short of the first observer\u2019s boom, which will reach him ' + fmt(tLag, 1) + ' s after it passes overhead.'
      : 'The aircraft is ' + fmt(dGround / 1000, 2) + ' km beyond the ' + ['first', 'second', 'third'][reached - 1] + ' observer, ' + fmt(tLag, 1) + ' s after passing over him, as its first boom reaches him.');
    readout(d.readout, `\\kvs = ${vs.v}\\ \\text{m/s} = ${fmt(M, 2)}\\,\\kvw, \\qquad \\theta = ${fmt(theta, 0)}^\\circ`,
      'The shock wave reaches the ground d = h / tan(θ/2) = ' + fmt(dGround, 0) + ' m behind the aircraft, so the first boom arrives t = d / v_s = ' + fmt(tLag, 1) + ' s after it passes overhead. The two booms are L / v_s = ' + fmt(dt * 1000, 0) + ' ms apart for an aircraft ' + LEN + ' m long; it is drawn ' + fmt(DRAWN / (LEN * S), 0) + ' times its true size so that the two cones can be seen apart.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => (RUN / vs.v) / 5), draw });
})();
};
