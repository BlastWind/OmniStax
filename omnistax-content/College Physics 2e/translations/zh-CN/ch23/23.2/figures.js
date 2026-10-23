/* Figures for section 23.2 Faraday's Law of Induction: Lenz's Law. Boots against
   the section's text article.
   The page binds magnetic-flux, magnetic-field, voltage, current and time, which
   is what ch23/COLOR.md gives it. The flux never wears the field's hue: the lines
   the magnet throws into the space around it are drawn in the field hue, and the
   count of them that passes through the coil's opening is drawn in the flux hue,
   because the whole difficulty of the section is that a field can be strong while
   the flux through a coil is not changing at all. The number of turns, the coil's
   magnet's travel and every axis title are in ink. The single loop of the sim
   and the bar magnet and coil of Figure 23.7 are the section's referents and are
   drawn in their referent colours through F.ref, the magnet with N and S
   lettered on its ends; the angle in the sim's slider wears the angle hue.
   Figure 23.7 moves, because induction is a rate and the dwell in the middle of
   its cycle is the lesson. The sim of Faraday's three factors is still: a before
   and an after is not a process with a clock, and it answers its sliders alone. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['23.2'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, cycle, register, begin, line, arrow, dot, text, topline, label, vbracket, axes, curve, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) { const n = el('small', null, small); host.appendChild(n); F.renderMath(n); } }

const PI = Math.PI;
/* a value that rounds to nothing at d decimals is nothing, so that no reading shows a signed zero */
const eps = (v, d) => (Math.abs(v) < 0.5 * Math.pow(10, -d) ? 0 : v);
/* the same number set in math, where a minus is written as a minus sign */
const mnum = (v, d) => { const x = eps(v, d); return (x < 0 ? '-' : '') + fmt(Math.abs(x), d); };
/* a number in scientific notation, for an area or a flux */
function sciTex(x, dp) {
  if (x === 0) return '0';
  const e = Math.floor(Math.log10(Math.abs(x))), m = x / Math.pow(10, e);
  return `${fmt(m, dp)}\\times 10^{${e}}`;
}

/* a bar magnet: an outline in its referent colour with a rule across its middle and
   a letter in each half. (cx, cy) is the centre and `right` the letter on its right-hand end. */
function barMagnet(ctx, cx, cy, L, T, right) {
  ctx.save(); ctx.lineWidth = 4; ctx.strokeStyle = F.ref('lenz-magnet'); ctx.fillStyle = PAL.panel;
  ctx.beginPath(); ctx.rect(cx - L / 2, cy - T / 2, L, T); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(cx, cy - T / 2); ctx.lineTo(cx, cy + T / 2); ctx.stroke();
  ctx.restore();
  text(ctx, right === 'N' ? 'S' : 'N', cx - L * 0.25, cy, PAL.ink, { size: 28, weight: 700, align: 'center' });
  text(ctx, right, cx + L * 0.25, cy, PAL.ink, { size: 28, weight: 700, align: 'center' });
}

/* a coil of n turns seen from the side, drawn as a helix: the half of each turn
   that runs behind the axis is faint and the half that runs in front of it is
   solid, so that which way the current goes round the coil can be read off the
   near wire. Returns where the coil begins and ends, and where each front arc sits. */
function solenoid(ctx, cx, cy, n, pitch, b, color) {
  const x0 = cx - (n * pitch) / 2 + pitch / 2;
  ctx.save(); ctx.lineJoin = 'round';
  ctx.strokeStyle = alpha(color, 0.45); ctx.lineWidth = 3;
  for (let k = 0; k < n; k++) { ctx.beginPath(); ctx.ellipse(x0 + k * pitch, cy, pitch / 2, b, 0, PI / 2, 3 * PI / 2); ctx.stroke(); }
  ctx.strokeStyle = color; ctx.lineWidth = 5;
  for (let k = 0; k < n; k++) { ctx.beginPath(); ctx.ellipse(x0 + (k + 0.5) * pitch, cy, pitch / 2, b, 0, -PI / 2, PI / 2); ctx.stroke(); }
  ctx.restore();
  return { l: x0 - pitch / 2, r: x0 + n * pitch, front: (k) => x0 + (k + 0.5) * pitch };
}

/* =====================================================================
   SIM: Faraday's three factors, on the numbers of Example 23.1. One loop
   lies face-on to a field that is raised from one value to another, and
   the flux through it is shaded on its face and drawn again below as a
   ramp against time whose slope is what the emf measures. Still: a before
   and an after is not a process with a clock, so the figure registers no
   cycle and answers its sliders alone (root rule 14).
===================================================================== */
(function () {
  const d = sim('sim-faraday', 880);
  const nS = ctl(d.controls, { label: 'N', cls: '', min: 1, max: 10, step: 1, value: 1, unit: '匝', dec: 0, aria: '线圈的匝数' });
  const bS = ctl(d.controls, { label: '\\Delta(\\kBmag\\cos\\ktheta)', cls: 'magnetic-field', min: 0.05, max: 0.4, step: 0.01, value: 0.2, unit: 'T', dec: 2, aria: '穿过线圈的磁场变化了多少' });
  const tS = ctl(d.controls, { label: '\\kdt', cls: 'time', min: 0.02, max: 0.35, step: 0.01, value: 0.1, unit: 's', dec: 2, aria: '变化所用的时间' });

  const R = 0.0600, A = PI * R * R;                 /* the example's loop: 6.00 cm of radius, 1.13 × 10⁻² m² */
  const B0 = 0.0500;                                /* the field through the loop before the change */
  /* The flux axis runs to 6.0 mWb, above the 5.09 mWb that A(0.0500 T + 0.400 T)
     comes to, and the time axis to 0.40 s, past the longest change the slider
     allows. Neither is ever rescaled. */
  const PHIAX = 6.0, TAX = 0.40;
  const CX = [340, 1060], CY = 244, RD = 108, SPAN = 300;
  const BOX = { l: 130, r: 1330, t: 576, b: 782 };

  /* the loop, drawn as a flat spiral of n turns so that the turns can be counted */
  function spiral(ctx, cx, cy, n) {
    ctx.save(); ctx.strokeStyle = F.ref('faraday-loop'); ctx.lineWidth = 2.5; ctx.beginPath();
    const step = 6.5;
    for (let i = 0; i <= n * 72; i++) {
      const a = (i / 72) * 2 * PI, rr = RD - (i / 72) * step;
      const x = cx + rr * Math.cos(a), y = cy + rr * Math.sin(a);
      if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y);
    }
    ctx.stroke(); ctx.restore();
  }
  /* the field out of the page, drawn as a grid of dotted circles whose spacing
     closes up as the field rises. The ones that pass through the loop's face are
     the flux and wear the flux hue; the rest are the field and wear the field hue. */
  function fieldGrid(ctx, cx, cy, B) {
    const k = Math.max(3, Math.round(2 + 14 * B)), gap = SPAN / k;
    const fc = C('magnetic-field'), pc = C('magnetic-flux');
    for (let i = 0; i < k; i++) for (let j = 0; j < k; j++) {
      const x = cx - SPAN / 2 + gap * (i + 0.5), y = cy - SPAN / 2 + gap * (j + 0.5);
      const col = Math.hypot(x - cx, y - cy) < RD - 6 ? pc : fc;
      dot(ctx, x, y, col, false, 8); dot(ctx, x, y, col, true, 2.6);
    }
  }

  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('magnetic-field'), pc = C('magnetic-flux'), tc = C('time');
    const N = nS.v, dB = bS.v, dt = tS.v;
    const Bf = B0 + dB, phiI = A * B0, phiF = A * Bf, dPhi = A * dB, emf = (N * dPhi) / dt;

    /* the loop before the change and after it */
    [[0, B0, phiI, '之前'], [1, Bf, phiF, '之后']].forEach(([i, B, ph, nm]) => {
      const cx = CX[i];
      ctx.save(); ctx.fillStyle = alpha(pc, 0.10 + 0.34 * ((ph * 1e3) / PHIAX));
      ctx.beginPath(); ctx.arc(cx, CY, RD, 0, 2 * PI); ctx.fill(); ctx.restore();
      spiral(ctx, cx, CY, N);
      fieldGrid(ctx, cx, CY, B);
      text(ctx, nm, cx, 406, PAL.muted, { size: 20, align: 'center', bg: PAL.panel });
      text(ctx, 'B cos θ = ' + fmt(B, 4) + ' T', cx, 436, fc, { size: 21, weight: 600, align: 'center', bg: PAL.panel });
      text(ctx, 'Φ = ' + fmt(ph * 1e3, 2) + ' mWb', cx, 464, pc, { size: 21, weight: 600, align: 'center', bg: PAL.panel });
    });
    /* how long the change takes, and how many turns are wound on the loop */
    arrow(ctx, 530, CY, 870, CY, tc, 5);
    text(ctx, 'Δt = ' + fmt(dt, 2) + ' s', 700, CY - 28, tc, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, N === 1 ? '一匝导线' : N + ' 匝导线', 700, CY + 34, PAL.muted, { size: 20, align: 'center' });

    /* the flux against the time: a ramp from the first value to the second, whose
       slope is what Faraday's law multiplies by the number of turns */
    const { X, Y } = axes(ctx, BOX, [0, TAX], [0, PHIAX], { xl: 't (s)', xc: tc, yl: 'Φ (mWb)', yc: pc, nx: 4, ny: 6, fx: (v) => fmt(v, 2), fy: (v) => fmt(v, 0) });
    const yi = Y(phiI * 1e3), yf = Y(phiF * 1e3), xd = X(dt);
    line(ctx, X(0), yi, xd, yi, PAL.muted, 3, [10, 10]);
    line(ctx, xd, yi, xd, yf, PAL.muted, 3, [10, 10]);
    curve(ctx, (t) => (t <= dt ? (phiI + ((phiF - phiI) * t) / dt) * 1e3 : phiF * 1e3), 0, TAX, X, Y, pc, 5, 200);
    F.hbracket(ctx, X(0), xd, 518, tc, 'Δt = ' + fmt(dt, 2) + ' s');
    vbracket(ctx, xd, yf, yi, pc, 'ΔΦ = ' + fmt(dPhi * 1e3, 2) + ' mWb', 1);
    dot(ctx, X(0), yi, pc, false, 10);
    pinned(ctx, BOX, X, Y, dt, phiF * 1e3, pc);

    topline(ctx, `在 ${fmt(dt, 2)} s 内使穿过线圈的磁场升高 ${fmt(dB, 2)} T，磁通量就改变 ${fmt(dPhi * 1e3, 2)} mWb，此时${N === 1 ? '单匝' : N + ' 匝'}导线产生 ${fmt(emf * 1e3, 1)} mV 的电动势。`);
    readout(d.readout,
      `\\kemf = N\\frac{\\kdPhi}{\\kdt} = (${N})\\frac{(${sciTex(A, 2)}\\ \\text{m}^2)(${fmt(dB, 2)}\\ \\text{T})}{${fmt(dt, 2)}\\ \\text{s}} = ${fmt(emf * 1e3, 1)}\\ \\text{mV}`,
      '默认值取自例题 23.1：半径为 6.00 cm 的线圈，其 $\\kBmag\\cos\\ktheta$ 在 0.100 s 内由 0.0500 T 升到 0.250 T。');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 23.7: the bar magnet thrust into the coil. The book prints three
   panels, a north pole moving in, a north pole moving out and a south pole
   moving in; they are one scene here, since they are three states of one
   thing and sub-figures printed under one number are never a fold (the
   book's rules). Moving: the magnet travels in over 1.6 s, is held still
   inside for 0.9 s, travels back out over 1.6 s and is then held still far
   away, and the dwell is the point — a magnet held still inside a coil
   induces nothing, however strong it is. Flat, because a magnet on the
   axis of a coil is an arrangement along one line and no depth is hidden
   by drawing it so (root rule 28.1).
===================================================================== */
(function () {
  const d = sim('sim-lenz', 790);
  const poleC = choice(d.controls, { label: '\\text{朝向线圈的磁极}', options: [{ value: 'N', label: '北' }, { value: 'S', label: '南' }], value: 'N', aria: '磁体的哪个磁极朝向线圈' });
  const nS = ctl(d.controls, { label: 'N', cls: '', min: 1, max: 12, step: 1, value: 8, unit: '匝', dec: 0, aria: '线圈的匝数' });
  const bS = ctl(d.controls, { label: '\\kBmag', cls: 'magnetic-field', min: 0.05, max: 0.3, step: 0.01, value: 0.25, unit: 'T', dec: 2, aria: '磁体穿过线圈的最强磁场' });

  const T = 5.0;                                    /* in over 1.6 s, held 0.9 s, out over 1.6 s, held 0.9 s */
  const cy = cycle(() => T, 1.2);
  const RC = 0.0300, A = PI * RC * RC;              /* the coil: 3.00 cm of radius, 2.83 × 10⁻³ m² */
  const SMAX = 24, AA = 6.0;                        /* the magnet starts 24 cm out; the field falls off over 6 cm */
  const sm = (u) => u * u * (3 - 2 * u);            /* a smooth start and a smooth stop, so that the rate has no jumps */
  function sOf(t) {
    const u = ((t % T) + T) % T;
    if (u < 1.6) return SMAX * (1 - sm(u / 1.6));
    if (u < 2.5) return 0;
    if (u < 4.1) return SMAX * sm((u - 2.5) / 1.6);
    return SMAX;
  }
  const sgn = () => poleC.mix((p) => (p === 'N' ? 1 : -1)); /* the flux points toward the coil when the north pole faces it; turned round, every curve bends through zero to its mirror */
  const phiOf = (t) => (sgn() * bS.v * A) / Math.pow(1 + Math.pow(sOf(t) / AA, 2), 1.5);
  const rateOf = (t) => (phiOf(t + 0.004) - phiOf(t - 0.004)) / 0.008;
  const emfOf = (t) => -nS.v * rateOf(t);
  /* 0.848 mWb is the most flux the sliders reach, 0.300 T through 2.83 × 10⁻³ m²,
     and 23.5 mV the largest emf, twelve turns at that field. Both axes are fixed
     just above those, rounded to a tick, and neither is ever rescaled. */
  const PHIAX = 0.9, EAX = 30;
  const CYA = 272, MX = 1000, ML = 200, MT = 48, PITCH = 26, BORE = 100, CMU = 19;   /* 19 units to the centimetre, so the magnet's travel spans the width the graphs leave */
  const BOXP = { l: 116, r: 636, t: 512, b: 692 }, BOXE = { l: 820, r: 1340, t: 512, b: 692 };
  const SLOT = [-36, -54, -72, -90];                /* where the lines the coil catches are drawn, clear of the magnet */

  /* the lines the magnet throws into the space around it: out of the north face,
     round, and back into the south face. More of them where the magnet is stronger. */
  function magnetField(ctx, mx, right, B) {
    const p = right === 'N' ? 1 : -1, nx = mx + (p * ML) / 2, sx = mx - (p * ML) / 2;
    const n = Math.max(1, Math.round(1 + (3 * (B - 0.05)) / 0.25)), col = C('magnetic-field');
    const arm = (h) => 150 + 1.4 * h, rise = (h) => h * 1.35;
    /* one point of the line that leaves the north face at a height h and comes
       back into the south face, so that an arrowhead can be set on the line itself */
    const at = (h, u, t) => {
      const k = 1 - t, c1 = nx + p * arm(h), c2 = sx - p * arm(h), cyv = CYA + u * rise(h);
      return {
        x: k * k * k * nx + 3 * k * k * t * c1 + 3 * k * t * t * c2 + t * t * t * sx,
        y: k * k * k * CYA + 3 * k * k * t * cyv + 3 * k * t * t * cyv + t * t * t * CYA,
      };
    };
    ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 2.5;
    for (let i = 0; i < n; i++) {
      const h = 40 + i * 27;
      for (const u of [-1, 1]) {
        ctx.beginPath(); ctx.moveTo(nx, CYA);
        ctx.bezierCurveTo(nx + p * arm(h), CYA + u * rise(h), sx - p * arm(h), CYA + u * rise(h), sx, CYA);
        ctx.stroke();
      }
    }
    ctx.restore();
    for (const u of [-1, 1]) { const a = at(40, u, 0.2), b = at(40, u, 0.3); arrow(ctx, a.x, a.y, b.x, b.y, col, 4); }
  }

  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('magnetic-field'), pc = C('magnetic-flux'), vc = C('voltage'), ic = C('current'), tc = C('time');
    const t = cy.now(), s = sOf(t), phi = phiOf(t), rate = rateOf(t), emf = emfOf(t);
    const r2 = Number(mnum(rate * 1e3, 2)), e2 = eps(-nS.v * r2, 2);   /* the emf shown is the rate shown times the turns, so the readout adds up */
    const N = nS.v, mx = MX - s * CMU;
    const PHIFULL = 0.3 * A;                        /* the flux a 0.300 T magnet puts through the coil at its closest */
    const share = Math.min(1, Math.abs(phi) / PHIFULL), lit = Math.round(SLOT.length * share);
    const moving = Math.abs(emf) > 1e-4;
    const bdir = emf > 0 ? 1 : -1;                  /* the induced field points the way the induced emf drives it */

    /* the legend, so that no name has to ride on the magnet as it travels */
    [[fc, '磁体自身的磁场'], [pc, '线圈所截获的磁通量'], [ic, '线圈所载的电流']].forEach(([col, nm], i) => {
      const y = 108 + i * 30;
      line(ctx, 40, y, 92, y, col, 4);
      text(ctx, nm, 102, y, PAL.muted, { size: 18 });
    });

    /* the magnet turned round: the two ends trade letters and the field its direction, one fading out as the other arrives */
    const poles = ['N', 'S'].filter((p) => poleC.a(p) > 0);
    poles.forEach((p) => { ctx.save(); ctx.globalAlpha = poleC.a(p); magnetField(ctx, mx, p, bS.v); ctx.restore(); });
    /* the flux: the shaded opening of the coil, and the lines that pass through it */
    ctx.save(); ctx.fillStyle = alpha(pc, 0.07 + 0.25 * share);
    ctx.fillRect(MX - 34, CYA - BORE, 68, 2 * BORE); ctx.restore();
    for (let i = 0; i < lit; i++) {
      const dir = phi >= 0 ? 1 : -1;
      arrow(ctx, MX - dir * 30, CYA + SLOT[i], MX + dir * 30, CYA + SLOT[i], pc, 4);
    }
    /* the coil, and the magnet on its axis */
    const coil = solenoid(ctx, MX, CYA, N, PITCH, BORE, F.ref('lenz-coil'));
    poles.forEach((p) => { ctx.save(); ctx.globalAlpha = poles.length > 1 ? poleC.a(p) : 1; barMagnet(ctx, mx, CYA, ML, MT, p); ctx.restore(); });
    /* the field the coil raises against the change, and the current that raises it */
    if (moving) {
      const y = CYA + 56;
      arrow(ctx, MX - bdir * 76, y, MX + bdir * 76, y, fc, 5);
      label(ctx, 'B_线圈', Math.max(coil.r, MX + 76) + 4, y, { side: 'right', color: fc, gap: 10, size: 21, leader: false });
      const xf = coil.front(Math.floor(N / 2)), rx = PITCH / 2;
      for (const th of [-0.95, 0.95]) {
        const px = xf + rx * Math.cos(th), py = CYA + BORE * Math.sin(th);
        const ux = -rx * Math.sin(th), uy = BORE * Math.cos(th), L = Math.hypot(ux, uy);
        const k = (bdir > 0 ? 1 : -1) / L;          /* a field toward the right runs the current down the near wire */
        arrow(ctx, px - ux * k * 24, py - uy * k * 24, px + ux * k * 26, py + uy * k * 26, ic, 5);
      }
      label(ctx, 'I', xf, CYA - BORE - 4, { side: 'above', color: ic, gap: 8, size: 22, leader: false });
    }
    text(ctx, N === 1 ? '线圈，一匝' : '线圈，' + N + ' 匝', MX, CYA + BORE + 40, F.ref('lenz-coil'), { size: 19, align: 'center' });
    text(ctx, s > 0.05 ? fmt(s, 1) + ' cm（与线圈的距离）' : '静止在线圈内', mx, CYA + BORE + 76, PAL.muted, { size: 19, align: 'center', bg: PAL.panel });

    /* the flux and the emf against the same time axis */
    const gp = axes(ctx, BOXP, [0, T], [-PHIAX, PHIAX], { xl: 't (s)', xc: tc, yl: 'Φ (mWb)', yc: pc, nx: 5, ny: 6, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 1) });
    curve(ctx, (u) => phiOf(u) * 1e3, 0, T, gp.X, gp.Y, pc, 5, 240);
    line(ctx, gp.X(t), BOXP.t, gp.X(t), BOXP.b, PAL.rule, 2, [4, 8]);
    pinned(ctx, BOXP, gp.X, gp.Y, t, phi * 1e3, pc);
    const ge = axes(ctx, BOXE, [0, T], [-EAX, EAX], { xl: 't (s)', xc: tc, yl: '电动势 (mV)', yc: vc, nx: 5, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    curve(ctx, (u) => emfOf(u) * 1e3, 0, T, ge.X, ge.Y, vc, 5, 240);
    line(ctx, ge.X(t), BOXE.t, ge.X(t), BOXE.b, PAL.rule, 2, [4, 8]);
    pinned(ctx, BOXE, ge.X, ge.Y, t, emf * 1e3, vc);

    const growing = rate > 0 === phi > 0;             /* the flux is growing when it is changing the way it already points */
    topline(ctx, !moving
      ? (s < 0.05
        ? '磁体静止在线圈内。穿过线圈的磁通量已达最大，但它没有变化，所以根本没有电动势，也没有电流。'
        : '磁体静止在远离线圈处。几乎没有磁通量穿过线圈，而穿过的那一点也没有变化，所以什么也没有被感应出来。')
      : `穿过线圈的磁通量的方向${phi > 0 ? '向右' : '向左'}，并以每秒 ${fmt(Math.abs(rate) * 1e3, 2)} mWb 的速率${growing ? '增大' : '逐渐消失'}，所以${N === 1 ? '单匝' : N + ' 匝'}线圈产生 ${fmt(Math.abs(e2), 2)} mV 的电动势，而线圈产生自己的磁场，方向${bdir > 0 ? '向右' : '向左'}，与这一变化相对抗。`);
    readout(d.readout,
      `\\kemf = -N\\frac{\\kdPhi}{\\kdt} = -(${N})(${mnum(rate * 1e3, 2)}\\ \\text{mWb/s}) = ${mnum(e2, 2)}\\ \\text{mV}`,
      !moving
        ? '法拉第定律由磁通量的变化率决定电动势，而不是由磁通量的大小决定。'
        : `负号就是楞次定律。感应电流沿线圈的近侧导线${bdir > 0 ? '向下' : '向上'}流动，它产生的磁场${bdir > 0 ? '向右' : '向左'}，${growing ? '这与正在增大的磁通量相对抗' : '这维持了正在消失的磁通量'}，因此阻碍了这一变化。`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
