/* Figures for section 4.6 Problem-Solving Strategies. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.6'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, register, begin, line, arrow, dot, text, headline, fixed } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
const G = 9.80;                       /* the acceleration due to gravity, as the chapter takes it */
const RAD = Math.PI / 180;

/* =====================================================================
   FIGURE 4.20: Tarzan on his vine, the four panels of the book under one
   number. (a) the sketch, (b) every force as an arrow, (c) the man alone
   as the system of interest, (d) the two remaining forces added head to
   tail. The mass sets every arrow's length and the acceleration pulls the
   tension away from the weight, which is what "T = -w, if Tarzan is
   stationary" means. Nothing here has a time in it, so the figure is still.
===================================================================== */
(function () {
  const H = 740;
  const d = sim('sim-tarzan', H);
  const M = ctl(d.controls, { label: '\\km', cls: 'mass', min: 40, max: 100, step: 5, value: 80, unit: 'kg', dec: 0, aria: 'mass of the man' });
  const A = ctl(d.controls, { label: '\\ka', cls: 'acceleration', min: -2.5, max: 2.5, step: 0.25, value: 0, unit: 'm/s²', dec: 2, aria: 'vertical acceleration',
    specials: [{ at: 0, label: 'stationary' }] });
  const ro = F.readout(d);
  const K = 0.16;                     /* units per newton: the largest tension, 1230 N, draws 197 long */
  const PX = [30, 370, 710, 1050], PW = 310;
  const LAB = ['(a)', '(b)', '(c)', '(d)'];
  const PHR = ['the situation sketched', 'every force as an arrow', 'the system of interest', 'the forces added head to tail'];
  const S = 1.6, GRIP = 300;          /* the silhouette's scale and the height of the upper hand on the vine */
  const HANDS = [{ x: -1, y: -178 }, { x: 1, y: -170 }];
  const STOM = GRIP + (178 - 74) * S, FEET = GRIP + 178 * S, BASE = 560;
  const OFF = 28;                     /* the arrows stand this far beside the body's line */
  const lead = (ctx, x1, y, x2) => line(ctx, x1, y, x2, y, alpha(C('force'), 0.5), 2, [4, 5]);
  function man(ctx, cx) {
    F.silhouette(ctx, { x: cx, y: FEET, s: S, color: F.ref('tarzan'), hip: { x: 0, y: -74 }, shoulder: { x: 0, y: -118 }, head: { x: 12, y: -138 },
      feet: [{ x: 4, y: 0 }, { x: -4, y: 0 }], hands: HANDS, elbowSide: -1 });
    /* the library's hands closed on the vine, the far one first */
    [1, 0].forEach((k) => F.hand(ctx, cx + HANDS[k].x * S, FEET + HANDS[k].y * S, { aim: [0, -1], view: 'side', curl: 1, thumb: 'along', right: k === 0, s: 0.42, color: F.ref('tarzan'), ink: F.ref('tarzan') }));
  }
  function draw() {
    const { ctx } = begin(d.c);
    const m = M.v, a = A.v, still = Math.abs(a) < 1e-9, w = m * G, T = m * (G + a), lw = K * w, lt = K * T, gap = T - w;
    const lines = headline(ctx, still
      ? `Tarzan hangs still, so the tension $\\kTf$ of ${fmt(T, 0)} N is exactly his weight $\\kwgt$ of ${fmt(w, 0)} N`
      : `Tarzan accelerates ${a > 0 ? 'upward' : 'downward'} at ${fmt(Math.abs(a), 2)} m/s², so the tension $\\kTf$ of ${fmt(T, 0)} N is ${fmt(Math.abs(gap), 0)} N ${a > 0 ? 'more' : 'less'} than his weight $\\kwgt$`);
    const lab = F.labeller(ctx, H, { headline: lines });
    PX.forEach((px, i) => {
      const cx = px + PW / 2;
      text(ctx, LAB[i], cx, H - 54, PAL.ink, { size: 22, weight: 600, align: 'center' });
      text(ctx, PHR[i], cx, H - 28, PAL.muted, { size: 17, align: 'center' });
      if (i < 3) {
        const rope = F.ref('vine');
        if (i === 0) fixed(ctx, px, 112, PW, 22);
        line(ctx, cx, i === 0 ? 134 : 150, cx, GRIP + (HANDS[1].y - HANDS[0].y) * S + 6, rope, 5);
        man(ctx, cx);
      }
      if (i === 2) {                               /* the boundary of the system of interest */
        ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.setLineDash([12, 10]);
        ctx.strokeRect(cx - 92, GRIP - 18, 184, FEET - GRIP + 34); ctx.restore();
      }
      if (i === 1 || i === 2) {                    /* the tension up from the hands, the weight down from the middle of the body, both on the open side */
        const xl = cx - OFF;
        lead(ctx, xl, GRIP, cx - 6); arrow(ctx, xl, GRIP, xl, GRIP - lt, C('force'), 5);
        lab.beside({ x1: xl, y1: GRIP, x2: xl, y2: GRIP - lt }, 'left', 'T', C('force'), 24, { offset: 0.6, gap: 20 });
        lead(ctx, xl, STOM, cx - 8); arrow(ctx, xl, STOM, xl, STOM + lw, C('force'), 5);
        lab.beside({ x1: xl, y1: STOM, x2: xl, y2: STOM + lw }, 'right', 'w', C('force'), 24, { offset: 0.6, gap: 20 });
      }
      if (i === 1) {                               /* his pull on the vine, down from the hands, clear of the head */
        const xr = cx + 52;
        lead(ctx, cx + 6, GRIP, xr); arrow(ctx, xr, GRIP, xr, GRIP + lt, C('force'), 5);
        lab.beside({ x1: xr, y1: GRIP, x2: xr, y2: GRIP + lt }, 'left', 'F_T', C('force'), 24, { offset: 0.5, gap: 20 });
      }
      if (i === 3) {                               /* the two forces head to tail, the second set beside the first so both read */
        const end = BASE - lt + lw;
        line(ctx, cx - 110, BASE, cx + 110, BASE, PAL.rule, 2, [8, 8]);
        arrow(ctx, cx - 22, BASE, cx - 22, BASE - lt, C('force'), 5);
        line(ctx, cx - 22, BASE - lt, cx + 22, BASE - lt, PAL.rule, 2, [6, 6]);
        arrow(ctx, cx + 22, BASE - lt, cx + 22, end, C('force'), 5);
        dot(ctx, cx - 22, BASE, PAL.ink, false, 10);
        dot(ctx, cx + 22, end, PAL.ink, true, 10);
        lab.beside({ x1: cx - 22, y1: BASE, x2: cx - 22, y2: BASE - lt }, 'left', 'T = ' + fmt(T, 0) + ' N', C('force'), 20, { gap: 18 });
        lab.beside({ x1: cx + 22, y1: BASE - lt, x2: cx + 22, y2: end }, 'left', 'w = ' + fmt(w, 0) + ' N', C('force'), 20, { gap: 18 });
        text(ctx, still ? 'the sum comes back to the start'
          : 'the sum ends ' + fmt(Math.abs(gap), 0) + ' N ' + (gap > 0 ? 'above' : 'below') + ' the start', cx, 650, PAL.muted, { size: 17, align: 'center' });
      }
    });
    d.fig.dataset.missed = lab.flush().join(',');
    ro.set(still
      ? `\\mk{T}{\\kTf} = \\mk{w}{\\kwgt} = \\mk{m}{\\km}\\mk{g}{\\kg} = (\\mk{nm}{${fmt(m, 0)}}\\ \\text{kg})(\\mk{ng}{${fmt(G, 2)}}\\ \\text{m/s}^2) = \\mk{nT}{${fmt(T, 0)}}\\ \\text{N}`
      : `\\mk{T}{\\kTf} = \\mk{w}{\\kwgt} \\mk{ma}{{}+ \\km\\ka} = \\mk{m}{\\km}(\\mk{g}{\\kg} \\mk{a}{{}+ \\ka}) = (\\mk{nm}{${fmt(m, 0)}}\\ \\text{kg})(\\mk{ng}{${fmt(G, 2)}} \\mk{na}{{}${a < 0 ? '-' : '+'} ${fmt(Math.abs(a), 2)}})\\ \\text{m/s}^2 = \\mk{nT}{${fmt(T, 0)}}\\ \\text{N}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: the axes a force problem is written along. A block rests on a
   frictionless incline; the reader turns the pair of axes and watches
   the weight and the normal force be projected onto them and the
   acceleration split between them. Turned to the angle of the slope,
   the acceleration across the slope falls to zero and so does the net
   force across it, which is what the boxed note asks the reader to
   settle before writing any equation. The choice of axes has no time in
   it, so the figure is still.
===================================================================== */
(function () {
  const d = sim('sim-axes', 780);
  const TH = ctl(d.controls, { label: '\\ktheta', cls: 'angle', min: 5, max: 40, step: 1, value: 25, unit: '°', dec: 0, aria: 'angle of the incline' });
  const PH = ctl(d.controls, { label: '\\htmlClass{kv-angle}{\\varphi}', cls: 'angle', min: 0, max: 45, step: 1, value: 0, unit: '°', dec: 0, aria: 'angle the axes are turned through',
    specials: [{ at: () => TH.v, label: 'along the slope' }] });
  const M = ctl(d.controls, { label: '\\km', cls: 'mass', min: 10, max: 100, step: 5, value: 40, unit: 'kg', dec: 0, aria: 'mass of the block' });
  const GY = 440, X0 = 90, L = 430;           /* the ground, the foot of the incline and the length of its face */
  const WLEN = 115;                           /* the weight always draws this long, so the picture reads at every mass */
  const O = [900, 320];                       /* the centre of the free-body diagram */
  const num = (v, dp) => fmt(v, dp).replace('-', '\u2212');
  const dotp = (v, u) => v[0] * u[0] + v[1] * u[1];
  const at = (p, u, s) => [p[0] + u[0] * s, p[1] + u[1] * s];
  const ray = (ctx, p, u, s, color, width) => arrow(ctx, p[0], p[1], p[0] + u[0] * s, p[1] + u[1] * s, color, width);

  function draw() {
    const { ctx } = begin(d.c);
    const th = TH.v * RAD, ph = PH.v * RAD, m = M.v;
    const w = m * G, N = m * G * Math.cos(th), aMag = G * Math.sin(th);
    const ux = [Math.cos(ph), Math.sin(ph)], uy = [Math.sin(ph), -Math.cos(ph)];     /* the chosen axes */
    const nrm = [Math.sin(th), -Math.cos(th)], dwn = [Math.cos(th), Math.sin(th)];   /* away from the slope, and down it */
    const wV = [0, w], nV = [N * nrm[0], N * nrm[1]], aV = [aMag * dwn[0], aMag * dwn[1]];
    const wx = dotp(wV, ux), wy = dotp(wV, uy), nx = dotp(nV, ux), ny = dotp(nV, uy);
    const ax = dotp(aV, ux), ay = dotp(aV, uy);
    const kF = WLEN / w, kA = 230 / G;         /* one scale for the forces, a longer one of its own for the acceleration */
    const along = Math.abs(TH.v - PH.v) < 0.5;

    /* the incline, the block and the three vectors on it */
    const yTop = GY - L * Math.sin(th), xR = X0 + L * Math.cos(th);
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.06); ctx.beginPath();
    ctx.moveTo(X0, yTop); ctx.lineTo(xR, GY); ctx.lineTo(X0, GY); ctx.closePath(); ctx.fill(); ctx.restore();
    line(ctx, X0, yTop, xR, GY, PAL.muted, 3);
    line(ctx, X0 - 20, GY, xR + 40, GY, PAL.muted, 3);
    ctx.save(); ctx.strokeStyle = C('angle'); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(xR, GY, 52, Math.PI, Math.PI + th); ctx.stroke(); ctx.restore();
    const wide = TH.v >= 12;                  /* a narrow wedge has no room for the label inside it */
    text(ctx, 'θ = ' + fmt(TH.v, 0) + '°', wide ? xR - 92 * Math.cos(th / 2) : xR + 18, wide ? GY - 92 * Math.sin(th / 2) : GY - 18, C('angle'), { size: 17, align: wide ? 'center' : 'left', bg: PAL.panel });
    const P = [X0 + 0.45 * L * Math.cos(th), yTop + 0.45 * L * Math.sin(th)], B = at(P, nrm, 24);
    ctx.save(); ctx.translate(B[0], B[1]); ctx.rotate(th); ctx.fillStyle = PAL.panel; ctx.strokeStyle = F.ref('block'); ctx.lineWidth = 4;
    ctx.fillRect(-22, -22, 44, 44); ctx.strokeRect(-22, -22, 44, 44); ctx.restore();
    ray(ctx, B, [0, 1], WLEN, C('force'), 5);
    text(ctx, 'w', B[0] - 14, B[1] + WLEN / 2, C('force'), { size: 24, weight: 600, align: 'right' });
    ray(ctx, B, nrm, kF * N, C('force'), 5);
    text(ctx, 'N', B[0] + nrm[0] * (kF * N + 22), B[1] + nrm[1] * (kF * N + 22), C('force'), { size: 24, weight: 600, align: 'center' });
    const aFoot = at(B, dwn, 28), aTip = at(aFoot, dwn, kA * aMag);
    ray(ctx, aFoot, dwn, kA * aMag, C('acceleration'), 5);
    text(ctx, 'a', aTip[0] + nrm[0] * 24 + dwn[0] * 14, aTip[1] + nrm[1] * 24 + dwn[1] * 14, C('acceleration'), { size: 24, weight: 600, align: 'center' });
    text(ctx, 'the block on the incline', 300, 560, F.ref('block'), { size: 17, align: 'center' });

    /* the free-body diagram: only the forces, on the axes the reader chose */
    line(ctx, ...at(O, ux, -210), ...at(O, ux, 210), PAL.muted, 2, [12, 10]);
    line(ctx, ...at(O, uy, -70), ...at(O, uy, 200), PAL.muted, 2, [12, 10]);
    text(ctx, 'x′', ...at(O, ux, 228), PAL.muted, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'y′', ...at(O, uy, 218), PAL.muted, { size: 20, weight: 600, align: 'center' });
    if (PH.v >= 1) {
      ctx.save(); ctx.strokeStyle = C('angle'); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(O[0], O[1], 44, 0, ph); ctx.stroke(); ctx.restore();
      text(ctx, 'φ = ' + fmt(PH.v, 0) + '°', O[0] + 76 * Math.cos(ph / 2), O[1] + 76 * Math.sin(ph / 2), C('angle'), { size: 17, align: 'left' });
    }
    [[wV, 'w', wx, wy], [nV, 'N', nx, ny]].forEach(([V, name, cx0, cy0]) => {
      const head = at(O, V, kF), mag = Math.hypot(V[0], V[1]);
      const px = at(O, ux, kF * cx0), py = at(O, uy, kF * cy0);
      if (Math.abs(kF * cx0) > 4 && Math.abs(kF * cy0) > 4) {     /* off both axes: show the parallelogram */
        line(ctx, head[0], head[1], px[0], px[1], PAL.rule, 2, [6, 8]);
        line(ctx, head[0], head[1], py[0], py[1], PAL.rule, 2, [6, 8]);
        if (Math.abs(kF * cx0) > 12) ray(ctx, O, ux, kF * cx0, alpha(C('force'), 0.7), 4);
        if (Math.abs(kF * cy0) > 12) ray(ctx, O, uy, kF * cy0, alpha(C('force'), 0.7), 4);
      }
      arrow(ctx, O[0], O[1], head[0], head[1], C('force'), 5);
      const off = 22 / mag;
      text(ctx, name, head[0] + V[0] * off, head[1] + V[1] * off, C('force'), { size: 24, weight: 600, align: 'center' });
    });
    dot(ctx, O[0], O[1], F.ref('block'), true, 9);
    text(ctx, 'the free-body diagram on the chosen axes', O[0], 560, PAL.muted, { size: 17, align: 'center' });

    /* the ledger: what each force contributes along each axis, and what the mass times the acceleration comes to */
    const col = (x, title, rows) => {
      text(ctx, title, x, 600, PAL.ink, { size: 22, weight: 600, align: 'left' });
      rows.forEach(([label, value], i) => {
        const y = 640 + i * 34 + (i >= 2 ? 14 : 0);
        text(ctx, label, x, y, PAL.muted, { size: 20, align: 'left' });
        text(ctx, num(value, 0) + ' N', x + 420, y, C('force'), { size: 20, weight: 600, align: 'right' });
      });
      line(ctx, x, 692, x + 420, 692, PAL.rule, 2);
    };
    col(120, 'along the x′ axis', [['the weight', wx], ['the normal force', nx], ['the net force', wx + nx], ['mass × acceleration', m * ax]]);
    col(800, 'along the y′ axis', [['the weight', wy], ['the normal force', ny], ['the net force', wy + ny], ['mass × acceleration', m * ay]]);

    headline(ctx, along
      ? 'With one axis along the slope the block accelerates at ' + num(ax, 2) + ' m/s² along it and not at all across it'
      : 'Turned ' + fmt(Math.abs(TH.v - PH.v), 0) + '° from the slope, the axes split the acceleration into ' + num(ax, 2) + ' and ' + num(ay, 2) + ' m/s²');
    readout(d.readout, `\\kFnety = \\km\\ka_{y'} = ${num(wy + ny, 0)}\\ \\text{N}`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
