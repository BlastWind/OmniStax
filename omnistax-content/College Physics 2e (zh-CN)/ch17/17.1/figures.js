/* Figures for section 17.1 Sound. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['17.1'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, REDUCED, ctl, cycle, register, begin, line, arrow, dot, text, topline, hbracket, axes, curve, fixed, labeller, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
const TAU = 2 * Math.PI;
const commas = (s) => s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
/* a signed number for the canvas and the readout, with a true minus sign */
const signed = (v, d) => (v < -1e-9 ? '−' : v > 1e-9 ? '+' : '') + fmt(Math.abs(v), d);
/* a number in scientific notation for the readout, 4.4 × 10⁻⁵ */
function sci(v, d = 1) { const e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e); return `${fmt(m, d)}\\times10^{${e}}`; }
/* the same number in plain text for the canvas and the headline, 4.4 × 10⁻⁵ */
const SUP = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
function sciTxt(v, d = 1) { const e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e); return fmt(m, d) + ' × 10' + String(e).split('').map((c) => SUP[c]).join(''); }
const V = 343;            /* the speed of sound in air at room temperature, m/s */
const PATM = 101300;      /* atmospheric pressure, Pa */

/* =====================================================================
   FIGURE 17.3 + 17.4 + 17.5: the vibrating string. The string starts from
   rest at its left extreme and swings; the air is a field of ink dots that
   crowd where the pressure is high, and the gauge-pressure graph below
   draws the same wave against the distance from the string. One run is one
   crossing of the 3.0 m scene by the wave front, so the three book figures
   are three moments of it. Finite, so it gets the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-string', 880);
  const f = ctl(d.controls, { label: '\\kf', cls: 'frequency', min: 200, max: 1000, step: 10, value: 440, unit: 'Hz', dec: 0, onInput: reset, aria: '弦的频率' });
  const dp = ctl(d.controls, { label: '\\kdpamp', cls: 'pressure', min: 0.2, max: 2, step: 0.1, value: 1, unit: 'Pa', dec: 1, onInput: reset, aria: '压强振幅' });
  /* the scene: the string at X0, 3.0 m of air to its right and what fits to its left, at SC canvas units per metre */
  const X0 = 330, LEN = 3.0, SC = 1030 / LEN, TOP = 150, BOT = 450, MID = (TOP + BOT) / 2;
  const T = () => 1 / f.v, lam = () => V / f.v, run = () => LEN / V;
  const cy = cycle(run, 1.2);
  function reset() { cy.reset(); }
  /* the air at rest: rows of dots offset by half a spacing, each nudged by a fixed pseudo-random amount so the air is not a lattice */
  const DOTS = (() => {
    const out = []; let seed = 7;
    const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647 - 0.5; };
    for (let row = 0, y = TOP - 4; y <= BOT + 4; row++, y += 15) {
      for (let x = 52 + (row % 2) * 7.5; x <= 1352; x += 15) {
        const px = x + 3 * rnd(), py = y + 3 * rnd();
        out.push({ x: px, y: py });
      }
    }
    return out;
  })();
  /* the displacement of the air at x metres from the string (signed, right positive) at model time t, in metres of the
     drawing's exaggerated amplitude S; zero ahead of the wave front on either side */
  const shift = (xm, t, S, w) => {
    const a = Math.abs(xm); if (a > V * t) return 0;
    const phi = w * (t - a / V);
    return S * (1 - Math.cos(phi));
  };
  /* the gauge pressure at x metres to the right of the string at model time t */
  const press = (xm, t, w) => (xm > V * t ? 0 : dp.v * Math.sin(w * (t - xm / V)));
  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), w = TAU * f.v, Tp = T(), L = lam();
    /* the drawn crowding: a fraction of the wavelength that grows with the pressure amplitude, far larger than the air's own motion */
    const S = (0.06 + 0.06 * dp.v / 2) * L;
    const U = S * SC;                                  /* the string's swing, the same as the air beside it, so the air moves with the string */
    const u = -U * Math.cos(w * tau), vel = Math.sin(w * tau);
    /* the air */
    ctx.save(); ctx.fillStyle = PAL.ink;
    for (const p of DOTS) {
      if (Math.abs(p.x - (X0 - U)) < 9) continue;
      const xm = (p.x - X0) / SC, sx = shift(xm, tau, S, w) * SC;
      ctx.beginPath(); ctx.arc(p.x + sx, p.y, 3, 0, TAU); ctx.fill();
    }
    ctx.restore();
    /* the string between its clamps, its two extremes as faint guides */
    fixed(ctx, X0 - 30, TOP - 26, 60, 22); fixed(ctx, X0 - 30, BOT + 4, 60, 22);
    const bow = (amp, color, wd, dash) => {
      ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = wd; if (dash) ctx.setLineDash(dash); ctx.beginPath();
      for (let i = 0; i <= 40; i++) { const y = TOP + ((BOT - TOP) * i) / 40, x = X0 + amp * Math.sin((Math.PI * i) / 40); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
      ctx.stroke(); ctx.restore();
    };
    bow(-U, alpha(PAL.ink, 0.25), 2, [6, 8]); bow(U, alpha(PAL.ink, 0.25), 2, [6, 8]);
    bow(u, F.ref('string'), 5);
    if (Math.abs(vel) > 0.15 && tau < run()) arrow(ctx, X0 + u + Math.sign(vel) * 12, MID, X0 + u + Math.sign(vel) * (12 + 30 * Math.abs(vel)), MID, PAL.ink, 3);
    text(ctx, '弦', X0, TOP - 40, F.ref('string'), { size: 20, weight: 600, align: 'center' });
    /* the wave front on the right, while it is in the scene */
    const xf = V * tau;
    if (xf > 0.05 && xf < LEN - 0.02) {
      const px = X0 + xf * SC;
      line(ctx, px, TOP - 10, px, BOT + 10, alpha(PAL.ink, 0.6), 3, [4, 8]);
      text(ctx, '波前', px + 10, TOP - 22, PAL.muted, { size: 17, bg: PAL.panel });
    }
    /* the wavelength: from the first full compression behind the front to the next one, once both are in the scene */
    const x1 = xf - L / 4, x2 = xf - 5 * L / 4;
    if (x2 >= 0) {
      const a = X0 + Math.min(x1, LEN) * SC, b = X0 + x2 * SC;
      hbracket(ctx, b, a, BOT + 52, C('position'), 'λ = ' + fmt(L, 3) + ' m');
    }
    /* the legend of the frame */
    text(ctx, '挤在一起的点是密部，即压强高的区域；分散开的点是疏部，即压强低的区域。', 52, 540, PAL.muted, { size: 17 });
    /* the graph: gauge pressure against distance from the string, its distance axis the scene's own 3.0 m and its
       pressure axis fixed at ±2 Pa, the slider's maximum, so a louder sound grows the curve and never rescales it */
    const box = { l: X0, r: X0 + LEN * SC, t: 600, b: 800 };
    const { X, Y } = axes(ctx, box, [0, LEN], [-2, 2], { xl: '到弦的距离 (m)', xc: C('position'), yl: '表压强 (Pa)', yc: C('pressure'), nx: 3, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => (v < 0 ? '−' : '') + fmt(Math.abs(v), 0) });
    const reach = Math.min(LEN, xf);
    if (reach > 0) curve(ctx, (xm) => press(xm, tau, w), 0, reach, X, Y, C('pressure'), 4, Math.max(60, Math.round(reach / L * 40)));
    if (reach < LEN) line(ctx, X(reach), Y(0), X(LEN), Y(0), C('pressure'), 4);
    /* the headline follows the run: the first half-swing, the swing back, then the trail of compressions */
    const n = tau / Tp, done = tau >= run() - 1e-9;
    topline(ctx, tau < Tp / 2 ? '弦向右运动，压缩它前方的空气，并使它后方的空气膨胀。'
      : tau < Tp ? '弦向左移回，产生另一个密部和疏部，而第一对正离开弦远去。'
      : done ? '经过 ' + fmt(n, 1) + ' 次振动后，波前已经越过 3.0 m，一系列密部和疏部作为声波从弦向外传播。'
      : '经过 ' + fmt(n, 1) + ' 次振动后，一系列密部和疏部正从弦向外传播，每摆动一次产生一个密部。');
    readout(d.readout, `\\kf_{\\text{wave}} = \\kf_{\\text{string}} = ${fmt(f.v, 0)}\\ \\text{Hz}, \\qquad \\klam = ${fmt(L, 3)}\\ \\text{m}`,
      '表压强仅在 101,300 Pa 的大气压上下变化 ±' + fmt(dp.v, 1) + ' Pa，即 ' + commas(String(Math.round(PATM / dp.v))) + ' 分之一，而点的拥挤程度画得比在空气中大得多。');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => run() / 5), draw });
})();

/* =====================================================================
   FIGURE 17.6: the ear and the eardrum. Compressions and rarefactions
   arrive as arcs, travel up the ear canal as plane fronts and reach the
   eardrum, which bows inward under each compression and outward under
   each rarefaction while the one force arrow flips with the sign of the
   gauge pressure. A steady wave, so the cycle is endless.
===================================================================== */
(function () {
  const d = sim('sim-eardrum', 640);
  const dp = ctl(d.controls, { label: '\\kdpamp', cls: 'pressure', min: 0.2, max: 2, step: 0.1, value: 1, unit: 'Pa', dec: 1, aria: '压强振幅' });
  const A = ctl(d.controls, { label: '\\karea', cls: 'area', min: 0.3, max: 1, step: 0.05, value: 0.5, unit: 'cm²', dec: 2, aria: '鼓膜的面积' });
  const cy = cycle(() => Infinity, 0);
  const TD = 3;                                  /* the drawn period of the wave, real seconds at 1× */
  const SP = 150;                                /* the drawn spacing of the compression fronts */
  const CX = -150, CYY = 331;                    /* the centre the arcs spread from, off the left edge */
  const MOUTH = 700, DRUM = 1010, CT = 302, CB = 360;   /* the canal from the pinna to the eardrum, its top and bottom */
  const FMAX = 2 * 1e-4;                         /* the largest force the sliders reach, 2 Pa on 1 cm² */
  hover(d.stage, () => [{ x: 650, y: 320, r: 70, name: '耳郭，即外耳' }, { x: (MOUTH + DRUM) / 2, y: 331, r: 40, name: '外耳道' },
    { x: DRUM, y: 331, r: 34, name: '鼓膜，面积 ' + fmt(A.v, 2) + ' cm²' }, { x: 1080, y: 316, r: 44, name: '中耳的锤骨、砧骨和镫骨' }, { x: 1200, y: 350, r: 46, name: '内耳的耳蜗' }]);
  /* the head in section: skin, the pinna, the canal, the middle ear and the cochlea, all in ink */
  function head(ctx, bulge) {
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2.5; ctx.lineJoin = 'round';
    /* the side of the head cut in section: the skull runs down to the top of the ear, the pinna stands out
       from it as a helix that curls round to a lobe, and the jaw and the neck run on below */
    ctx.beginPath();
    ctx.moveTo(1400, 100); ctx.lineTo(880, 100);
    ctx.bezierCurveTo(800, 100, 748, 150, 740, 236);
    ctx.bezierCurveTo(736, 190, 690, 168, 650, 176);
    ctx.bezierCurveTo(590, 190, 574, 270, 590, 330);
    ctx.bezierCurveTo(602, 380, 630, 440, 676, 466);
    ctx.bezierCurveTo(704, 482, 740, 470, 744, 440);
    ctx.bezierCurveTo(752, 520, 776, 590, 810, 640);
    ctx.lineTo(1400, 640); ctx.closePath(); ctx.fill(); ctx.stroke();
    /* the folds of the pinna: the inner rim of the helix, the bowl that leads into the canal, and the lobe */
    ctx.beginPath(); ctx.moveTo(660, 200); ctx.bezierCurveTo(620, 214, 606, 280, 620, 336); ctx.bezierCurveTo(632, 380, 658, 420, 692, 440); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(704, 258); ctx.bezierCurveTo(660, 288, 660, 356, 702, 396); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(668, 432); ctx.bezierCurveTo(690, 450, 720, 450, 738, 434); ctx.stroke();
    /* the canal, open to the air at its mouth */
    ctx.fillStyle = PAL.panel; ctx.beginPath();
    ctx.moveTo(MOUTH - 28, CT - 14); ctx.lineTo(DRUM, CT); ctx.lineTo(DRUM, CB); ctx.lineTo(MOUTH - 28, CB + 14); ctx.closePath(); ctx.fill();
    const cc = F.ref('ear-canal');
    line(ctx, MOUTH - 28, CT - 14, DRUM, CT, cc, 2.5); line(ctx, MOUTH - 28, CB + 14, DRUM, CB, cc, 2.5);
    /* the middle ear behind the eardrum, at atmospheric pressure, and the bones that carry the vibration on */
    ctx.fillStyle = PAL.panel; ctx.beginPath(); ctx.ellipse(1078, 331, 68, 62, 0, 0, TAU); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(DRUM + bulge, 331); ctx.lineTo(1050, 300); ctx.lineTo(1088, 318); ctx.lineTo(1118, 322); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(1118, 310); ctx.lineTo(1118, 334); ctx.stroke();
    ctx.fillStyle = PAL.ink; [[1050, 300], [1088, 318]].forEach(([x, y]) => { ctx.beginPath(); ctx.arc(x, y, 4, 0, TAU); ctx.fill(); });
    /* the cochlea */
    ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.beginPath();
    for (let i = 0; i <= 120; i++) { const a = (i / 120) * 2.6 * TAU, r = 6 + (a / (2.6 * TAU)) * 40; const x = 1200 + r * Math.cos(a), y = 350 + r * Math.sin(a); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
    ctx.stroke();
    ctx.beginPath(); ctx.arc(1180, 292, 26, Math.PI * 0.9, Math.PI * 2.1); ctx.stroke();
    ctx.beginPath(); ctx.arc(1214, 300, 22, Math.PI * 1.1, Math.PI * 2.3); ctx.stroke();
    ctx.restore();
  }
  /* one wavefront whose reach along the canal's axis is x: an arc in the open air, a plane front inside the canal */
  function front(ctx, x, solid) {
    ctx.save(); ctx.strokeStyle = solid ? PAL.ink : alpha(PAL.ink, 0.6); ctx.lineWidth = solid ? 3 : 2.5; if (!solid) ctx.setLineDash([9, 9]);
    if (x < MOUTH - 20) {
      const R = x - CX; if (R > 40) {
        ctx.beginPath(); ctx.rect(40, 130, 560, 460); ctx.clip();
        const th = Math.min(Math.PI / 2, Math.asin(Math.min(1, 235 / R)));
        ctx.beginPath(); ctx.arc(CX, CYY, R, -th, th); ctx.stroke();
      }
    } else if (x < DRUM - 6) {
      const k = (x - (MOUTH - 28)) / (DRUM - (MOUTH - 28)), t = CT - 14 + 14 * k, b = CB + 14 - 14 * k;
      ctx.beginPath(); ctx.moveTo(x, t + 4); ctx.lineTo(x, b - 4); ctx.stroke();
    }
    ctx.restore();
  }
  function draw() {
    const { ctx, H } = begin(d.c);
    const tau = REDUCED ? TD / 8 : cy.now(), frac = (tau / TD) % 1;
    const p0 = dp.v * Math.cos(TAU * frac), p = Math.abs(p0) < 0.005 ? 0 : p0;   /* the gauge pressure at the eardrum */
    const Fn = p * A.v * 1e-4;                                  /* the net force, inward positive */
    const D = 8 + 14 * dp.v / 2, bulge = D * Math.cos(TAU * frac);   /* the drum's bow, drawn far larger than it is */
    head(ctx, bulge);
    /* the fronts: the leading compression is at the drum when the pressure there peaks, the rest follow at the spacing */
    for (let n = 0; n < 12; n++) {
      const xc = DRUM + SP * frac - n * SP; front(ctx, xc, true); front(ctx, xc - SP / 2, false);
    }
    /* the eardrum */
    ctx.save(); ctx.strokeStyle = F.ref('eardrum'); ctx.lineWidth = 5; ctx.beginPath();
    ctx.moveTo(DRUM, CT - 2); ctx.quadraticCurveTo(DRUM + 2 * bulge, 331, DRUM, CB + 2); ctx.stroke(); ctx.restore();
    /* the force on the drum, inward under a compression and outward under a rarefaction */
    const lab = labeller(ctx, H);
    lab.block(0, 0, 1400, 96); lab.block(MOUTH - 10, CB + 26, MOUTH + 130, CB + 58); lab.block(DRUM - 190, CT - 50, DRUM, CT - 18);
    text(ctx, 'P = ' + signed(p, 2) + ' Pa', DRUM - 16, CT - 34, C('pressure'), { size: 20, weight: 600, align: 'right', bg: PAL.panel });
    text(ctx, '外耳道', MOUTH + 10, CB + 42, F.ref('ear-canal'), { size: 20, weight: 600, bg: PAL.panel });
    text(ctx, '耳郭', 626, 500, PAL.ink, { size: 19, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, '耳蜗', 1200, 416, PAL.muted, { size: 18, align: 'center', bg: PAL.panel });
    if (Math.abs(p) > 0.12 * dp.v) {
      const s = Math.sign(p), Lp = 30 + 150 * Math.abs(Fn) / FMAX, x0 = DRUM + bulge;
      arrow(ctx, x0, 331, x0 + s * Lp, 331, C('force'), 5);
      lab.add('F = PA = ' + (Fn < 0 ? '−' : '+') + sciTxt(Math.abs(Fn)) + ' N', x0 + s * Lp / 2, 331, 0, 1, C('force'), 20, 64);
    }
    lab.add('鼓膜，面积 A = ' + fmt(A.v, 2) + ' cm²', DRUM + 4, CB + 6, 0.5, 1, F.ref('eardrum'), 20, 60);
    lab.add('鼓膜后方的大气压', 1090, 395, 0.15, 1, PAL.muted, 18, 44);
    lab.flush();
    text(ctx, '实线弧是密部，虚线弧是疏部。', 52, 614, PAL.muted, { size: 17 });
    topline(ctx, p > 0.35 * dp.v ? '一个密部到达了鼓膜，以 ' + sciTxt(Math.abs(Fn)) + ' N 的合力把它向内推。'
      : p < -0.35 * dp.v ? '一个疏部到达了鼓膜，其后方的大气压以 ' + sciTxt(Math.abs(Fn)) + ' N 的合力把它向外推。'
      : '鼓膜处的表压强正在经过零，有那么一瞬间，它几乎没有受到合力。');
    readout(d.readout, `\\kF = \\kPr \\karea = (${signed(p, 2)}\\ \\text{Pa})(${sci(A.v * 1e-4, 1)}\\ \\text{m}^2) = ${p === 0 ? '0' : (Fn < 0 ? '-' : '+') + sci(Math.abs(Fn), 1)}\\ \\text{N}`,
      '鼓膜的摆动画得比实际大得多。');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
