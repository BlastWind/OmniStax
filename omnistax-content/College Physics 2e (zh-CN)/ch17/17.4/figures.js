/* Figures for section 17.4 Doppler Effect and Sonic Booms. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['17.4'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, topline, axes, pinned, labeller, silhouette, car, plane } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) { const n = el('small', null, small); host.appendChild(n); F.renderMath(n); } }

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
  const vs = ctl(d.controls, { label: '\\kvs', cls: 'velocity', min: 0, max: 170, step: 5, value: 100, unit: 'm/s', dec: 0, onInput: reset, aria: '汽车的速度' });
  const vo = ctl(d.controls, { label: '\\kvobs', cls: 'velocity', min: -80, max: 80, step: 5, value: 0, unit: 'm/s', dec: 0, onInput: reset, aria: '观察者的速度，向右为正' });
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
    car(ctx, cx, ROAD - 12, F.ref('car'), 1.1);
    /* the observers as filled bodies, 143 units tall; a walker strides once every four periods of the horn */
    const walk = vo.v !== 0, ph = ((t / T) * 0.25) % 1;
    const oX = F.ref('observer-x'), oY = F.ref('observer-y');
    if (walk) { silhouette(ctx, { x: xX, y: ROAD, s: 0.95, pose: 'walk', phase: ph, face: Math.sign(vo.v), color: oX }); silhouette(ctx, { x: xY, y: ROAD, s: 0.95, pose: 'walk', phase: ph, face: Math.sign(vo.v), color: oY }); }
    else { silhouette(ctx, { x: xX, y: ROAD, s: 0.95, pose: 'stand', face: 1, color: oX }); silhouette(ctx, { x: xY, y: ROAD, s: 0.95, pose: 'stand', face: -1, color: oY }); }
    text(ctx, 'X', xX, ROAD + 34, oX, { size: 24, weight: 600, align: 'center' });
    text(ctx, 'Y', xY, ROAD + 34, oY, { size: 24, weight: 600, align: 'center' });
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
    const dir = vo.v > 0 ? '右' : '左';
    topline(ctx, vs.v === 0 && vo.v === 0 ? '汽车和两名观察者都静止，所以 X 和 Y 收到的喇叭声频率都是 150 Hz，即喇叭发声时的频率。'
      : vs.v === 0 ? '汽车静止，观察者向' + dir + '走，速率为 ' + Math.abs(vo.v) + ' m/s，所以' + (vo.v > 0 ? '走向汽车的 X 收到 ' + sig3(fX) + ' Hz，远离汽车的 Y 收到 ' + sig3(fY) + ' Hz。' : '走向汽车的 Y 收到 ' + sig3(fY) + ' Hz，远离汽车的 X 收到 ' + sig3(fX) + ' Hz。')
      : vo.v === 0 ? '汽车以 ' + vs.v + ' m/s 的速率驶向 Y、驶离 X，喇叭发声的频率为 150 Hz，Y 收到 ' + sig3(fY) + ' Hz，X 收到 ' + sig3(fX) + ' Hz。'
      : '汽车的速率为 ' + vs.v + ' m/s，观察者向' + dir + '走，速率为 ' + Math.abs(vo.v) + ' m/s，喇叭发声的频率为 150 Hz，所以 Y 收到 ' + sig3(fY) + ' Hz，X 收到 ' + sig3(fX) + ' Hz。');
    /* the readout writes the equation that applies to Y, and the small line says what X receives */
    const sO = vo.v < 0 ? '+' : '-', sS = '-';
    const main = vs.v === 0 && vo.v === 0 ? `\\kfobs = \\kfsrc = 150\\ \\text{Hz}`
      : vs.v === 0 ? `\\kfobs = \\kfsrc\\left(\\frac{\\kvw ${sO} \\kvobs}{\\kvw}\\right) = (150\\ \\text{Hz})\\left(\\frac{340 ${sO} ${Math.abs(vo.v)}}{340}\\right) = ${sig3(fY)}\\ \\text{Hz}`
      : vo.v === 0 ? `\\kfobs = \\kfsrc\\left(\\frac{\\kvw}{\\kvw ${sS} \\kvs}\\right) = (150\\ \\text{Hz})\\left(\\frac{340}{340 - ${vs.v}}\\right) = ${sig3(fY)}\\ \\text{Hz}`
      : `\\kfobs = \\left[\\kfsrc\\left(\\frac{\\kvw ${sO} \\kvobs}{\\kvw}\\right)\\right]\\left(\\frac{\\kvw}{\\kvw ${sS} \\kvs}\\right) = (150\\ \\text{Hz})\\left(\\frac{340 ${sO} ${Math.abs(vo.v)}}{340}\\right)\\left(\\frac{340}{340 - ${vs.v}}\\right) = ${sig3(fY)}\\ \\text{Hz}`;
    readout(d.readout, main, vs.v === 0 && vo.v === 0 ? '声速为 340 m/s。'
      : '这是 Y 收到的频率，声速取 340 m/s；对 X 而言，正负号相反。');
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
  const v = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 0, max: 330, step: 1, value: 35, unit: 'm/s', dec: 1, aria: '运动声源或观察者的速率' });
  const fs = ctl(d.controls, { label: '\\kfsrc', cls: 'frequency', min: 50, max: 200, step: 1, value: 150, unit: 'Hz', dec: 0, aria: '声源的频率' });
  const box = { l: 130, r: 1110, t: 135, b: 425 }, XR = [0, 350], YR = [0, 600];
  const srcT = (s) => fs.v * VW / (VW - s), srcA = (s) => fs.v * VW / (VW + s), obsT = (s) => fs.v * (VW + s) / VW, obsA = (s) => fs.v * (VW - s) / VW;
  /* a curve clipped to the graph box, since the source's curve climbs without limit */
  function clipped(ctx, f, s0, s1, X, Y, color, dash) {
    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
    ctx.strokeStyle = color; ctx.lineWidth = 4; if (dash) ctx.setLineDash(dash); ctx.beginPath();
    for (let i = 0; i <= 160; i++) { const s = s0 + ((s1 - s0) * i) / 160, y = f(s); if (!isFinite(y)) break; if (i) ctx.lineTo(X(s), Y(y)); else ctx.moveTo(X(s), Y(y)); }
    ctx.stroke(); ctx.restore();
  }
  const pts = [];
  F.hover(d.stage, () => pts);
  function draw() {
    const { ctx } = begin(d.c);
    const { X, Y } = axes(ctx, box, XR, YR, { xl: '运动声源或观察者的速率 (m/s)', xc: C('velocity'), yl: '观测频率 f_obs (Hz)', yc: C('frequency'), nx: 7, ny: 6 });
    /* the asymptote at the speed of sound */
    line(ctx, X(VW), box.t, X(VW), box.b, alpha(C('velocity'), 0.6), 2.5, [10, 10]);
    text(ctx, 'v_w = 340 m/s', X(VW) + 8, box.t + 16, C('velocity'), { size: 18, weight: 600, bg: PAL.panel });
    const FQ = C('frequency');
    clipped(ctx, srcT, 0, VW - 0.5, X, Y, FQ); clipped(ctx, srcA, 0, XR[1], X, Y, FQ);
    clipped(ctx, obsT, 0, XR[1], X, Y, FQ, [12, 10]); clipped(ctx, obsA, 0, VW, X, Y, FQ, [12, 10]);
    /* the curves named at their right-hand ends, the source's climbing curve where it leaves the box */
    const lab = labeller(ctx, H);
    lab.block(box.l, 0, 1400, box.t - 4);
    lab.block(0, box.b + 8, 1400, box.b + 74);      /* the tick labels and the axis title keep their band */
    lab.block(X(VW), box.t, 1400, box.t + 30);
    const sExit = VW * (1 - fs.v / YR[1]);          /* where f_s v_w/(v_w − s) reaches the top of the box */
    lab.add('声源靠近', X(sExit) - 6, box.t + 24, -1, 0.15, FQ, 18, 20);
    lab.add('观察者靠近', box.r + 8, Y(obsT(XR[1])), 1, -0.3, FQ, 18, 10);
    lab.add('声源远离', box.r + 8, Y(srcA(XR[1])), 1, -0.2, FQ, 18, 10);
    lab.add('观察者远离', box.r + 8, Y(Math.max(0, obsA(XR[1]))), 1, 0.4, FQ, 18, 10);
    /* the current speed and its four values */
    line(ctx, X(v.v), box.b, X(v.v), box.t, alpha(C('velocity'), 0.5), 2, [4, 8]);
    text(ctx, 'v = ' + fmt(v.v, 1) + ' m/s', Math.max(box.l + 150, Math.min(X(v.v), box.r - 60)), box.t - 18, C('velocity'), { size: 18, weight: 600, align: 'center', bg: PAL.panel });
    /* the four values: the headline states them, and the points carry them as hover names, since four labels crowd where the curves meet */
    pts.length = 0;
    [[srcT, '声源靠近'], [obsT, '观察者靠近'], [srcA, '声源远离'], [obsA, '观察者远离']].forEach(([fn, nm]) => {
      const f = fn(v.v), p = pinned(ctx, box, X, Y, v.v, f, FQ);
      pts.push({ x: p.x, y: p.y, r: 14, name: nm + '，' + sig3(f) + ' Hz' });
    });
    lab.flush();
    const sT = srcT(v.v), sA = srcA(v.v), oT = obsT(v.v), oA = obsA(v.v);
    topline(ctx, v.v === 0 ? '静止时没有频移，每个观察者收到的都是声源发出的 ' + fs.v + ' Hz。'
      : '速率为 ' + fmt(v.v, 1) + ' m/s 时，声源运动，则 ' + fs.v + ' Hz 的声源在靠近时被收到的频率为 ' + sig3(sT) + ' Hz，在远离时为 ' + sig3(sA) + ' Hz；改为观察者运动，则分别为 ' + sig3(oT) + ' Hz 和 ' + sig3(oA) + ' Hz。');
    readout(d.readout, `\\kfobs = \\kfsrc\\left(\\frac{\\kvw}{\\kvw \\mp \\kvs}\\right) = (${fs.v}\\ \\text{Hz})\\left(\\frac{340}{340 \\mp ${fmt(v.v, 1)}}\\right) = ${sig3(sT)}\\ \\text{Hz（靠近）},\\ ${sig3(sA)}\\ \\text{Hz（远离）}`,
      '声源静止、观察者以相同的速率运动时，$\\kfobs = \\kfsrc(\\kvw \\pm \\kvobs)/\\kvw$，其中 $\\kvw = 340$ m/s。');
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
  const vs = ctl(d.controls, { label: '\\kvs', cls: 'velocity', min: 200, max: 1000, step: 10, value: 800, unit: 'm/s', dec: 0, onInput: reset, aria: '声源的速率', specials: [{ at: VW, label: '声速' }] });
  const ro = F.readout(d);
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
        ctx.strokeStyle = C('angle'); ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(xs, Y0, R, Math.PI - a, Math.PI + a); ctx.stroke();
        text(ctx, 'θ = ' + fmt(theta, 0) + '°', xs - R - 14, Y0 - 24, C('angle'), { size: 22, weight: 600, align: 'right', bg: PAL.panel });
      }
      ctx.restore();
    }
    /* the source and its velocity */
    dot(ctx, xs, Y0, F.ref('source'), true, 8);
    const aEnd = Math.min(1180, xs + 40 + 0.16 * vs.v);
    arrow(ctx, xs, Y0, aEnd, Y0, C('velocity'), 5);
    text(ctx, 'v_s = ' + vs.v + ' m/s', Math.min(1390, aEnd + 12), Y0 - 26, C('velocity'), { size: 20, weight: 600, align: 'right', bg: PAL.panel });
    text(ctx, '每个波前以 v_w = 340 m/s 扩展', 1390, H - 24, PAL.muted, { size: 17, align: 'right' });
    topline(ctx, M > 1.02 ? '速率为 ' + vs.v + ' m/s 时，声源超过了自己发出的声音，其速率是波前的 ' + fmt(M, 2) + ' 倍，波前堆积在夹角为 ' + fmt(theta, 0) + '° 的两条线上。'
      : M >= 1 ? '速率为 340 m/s 时，声源与自己发出的声音并驾齐驱，每个波前都在声源前方相切，那里的观测频率将为无穷大。'
      : '速率为 ' + vs.v + ' m/s 时，声源比自己发出的声音慢，所以各波前彼此套叠，在声源前方挤在一起，如图 17.14 所示。');
    /* past the speed of sound the cone's angle appears, and v_s and v_w move into the arcsine */
    ro.set(M >= 1
      ? `\\mk{th}{\\ktheta} = 2\\arcsin\\frac{\\mk{vw}{\\kvw}}{\\mk{vs}{\\kvs}} = 2\\arcsin\\frac{\\mk{wv}{340\\ \\text{m/s}}}{\\mk{vv}{${vs.v}\\ \\text{m/s}}} = \\mk{tv}{${fmt(theta, 0)}^\\circ}`
      : `\\mk{vs}{\\kvs} = \\mk{vv}{${vs.v}\\ \\text{m/s}} = \\mk{M}{${fmt(M, 2)}}\\,\\mk{vw}{\\kvw}`, M >= 1 ? '当声源越过它发出某个波前的位置 $\\kvs t$ 远时，该波前已扩展到 $\\kvw t$，所以 $\\sin(\\ktheta/2) = \\kvw/\\kvs = ' + fmt(1 / M, 3) + '$。'
        : '低于声速时没有波前被追上，前方的频率为 $\\kfsrc\\kvw/(\\kvw - \\kvs) = ' + fmt(1 / (1 - M), 2) + '\\,\\kfsrc$。');
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
  const vs = ctl(d.controls, { label: '\\kvs', cls: 'velocity', min: 400, max: 1000, step: 10, value: 600, unit: 'm/s', dec: 0, onInput: reset, aria: '飞机的速率' });
  const h = ctl(d.controls, { label: 'h', cls: '', min: 500, max: 2000, step: 50, value: 1000, unit: 'm', dec: 0, onInput: reset, aria: '飞机的高度' });
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
    plane(ctx, nose - 44 * SPR, py, F.ref('aircraft'), SPR);
    const vEnd = Math.min(1250, nose + 60 + 0.12 * vs.v);
    if (vEnd > nose + 30) arrow(ctx, nose + 10, py - 52, vEnd, py - 52, C('velocity'), 5);
    text(ctx, 'v_s = ' + vs.v + ' m/s', Math.min(1390, vEnd + 12), Math.max(118, py - 78), C('velocity'), { size: 20, weight: 600, align: 'right', bg: PAL.panel });
    /* the altitude, bracketed in ink below the first observer's left */
    line(ctx, 60, GY, 60, py, PAL.muted, 2, [4, 8]); text(ctx, 'h = ' + h.v + ' m', 72, (GY + py) / 2, PAL.ink, { size: 19, weight: 600, bg: PAL.panel });
    /* the observers: each is passed by the aircraft, then swept by the nose boom and the tail boom */
    OBS.forEach((x, i) => {
      const headY = GY - 112;
      silhouette(ctx, { x, y: GY, s: 0.85, pose: 'stand', face: 1, color: F.ref('observers') });
      const sinceN = (gN - x) / (S * vs.v), sinceT = (gT - x) / (S * vs.v);   /* seconds since each boom swept this observer */
      const flash = (since) => since >= 0 && since < 0.6;
      if (flash(sinceN)) burst(ctx, x, headY, sinceN / 0.6, PAL.ink);
      if (flash(sinceT)) burst(ctx, x, headY, sinceT / 0.6, PAL.ink);
      const state = sinceT >= 0.6 ? '两声声爆都已听到' : flash(sinceT) ? '第二声声爆' : flash(sinceN) ? '第一声声爆' : nose > x ? '无声飞过' : '尚未听到任何声音';
      text(ctx, state, x, GY + 36, PAL.ink, { size: 18, align: 'center' });
    });
    const dGround = h.v / tanA, tLag = dGround / vs.v, dt = LEN / vs.v;
    const reached = OBS.filter((x) => gN >= x).length;
    topline(ctx, reached === 0 ? '飞机距第一名观察者的声爆还差 ' + fmt(dGround / 1000, 2) + ' km，声爆将在飞机飞过他头顶 ' + fmt(tLag, 1) + ' s 后到达他。'
      : '飞机飞过第' + ['一', '二', '三'][reached - 1] + '名观察者头顶 ' + fmt(tLag, 1) + ' s 后，其第一声声爆到达他，此时飞机已在他前方 ' + fmt(dGround / 1000, 2) + ' km 处。');
    readout(d.readout, `\\kvs = ${vs.v}\\ \\text{m/s} = ${fmt(M, 2)}\\,\\kvw, \\qquad \\ktheta = ${fmt(theta, 0)}^\\circ`,
      '声爆落在飞机后方 $\\kd = h/\\tan(\\ktheta/2)$ 处，在飞机飞过头顶后 $\\kd/\\kvs$ 到达；两次声爆相隔 ' + fmt(dt * 1000, 0) + ' ms（按飞机长 ' + LEN + ' m 计），图中飞机画成了真实大小的 ' + fmt(DRAWN / (LEN * S), 0) + ' 倍。');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => (RUN / vs.v) / 5), draw });
})();
};
