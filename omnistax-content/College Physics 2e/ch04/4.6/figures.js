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
   as the system of interest, (d) the two remaining forces compared. The
   mass sets every arrow's length and the acceleration pulls the tension
   away from the weight, which is what "T = -w, if Tarzan is stationary"
   means. Nothing here has a time in it: Tarzan hangs, and the panels
   answer the sliders, so the figure registers no cycle and carries no
   transport.
===================================================================== */
(function () {
  const d = sim('sim-tarzan', 700);
  const M = ctl(d.controls, { label: 'm', cls: '', min: 40, max: 100, step: 5, value: 80, unit: 'kg', dec: 0, aria: 'mass of the man' });
  const A = ctl(d.controls, { label: '\\ka', cls: 'acceleration', min: -2.5, max: 2.5, step: 0.25, value: 0, unit: 'm/s²', dec: 2, aria: 'vertical acceleration' });
  const K = 0.20;                     /* logical units per newton, so an 80 kg weight draws 157 units long */
  const PX = [30, 370, 710, 1050], PW = 310;
  const LAB = ['(a)', '(b)', '(c)', '(d)'];
  const PHR = ['the situation sketched', 'every force as an arrow', 'the system of interest', 'the forces added head to tail'];
  const GRIP = 380, STOM = 462, BASE = 600;

  /* a man hanging by his hands, the grip at (x, y): head, two arms, a trunk and two legs */
  function man(ctx, x, y) {
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.ink; ctx.lineWidth = 5;
    ctx.beginPath(); ctx.arc(x, y + 34, 13, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath();
    ctx.moveTo(x, y); ctx.lineTo(x - 20, y + 46);
    ctx.moveTo(x, y); ctx.lineTo(x + 20, y + 46);
    ctx.moveTo(x, y + 50); ctx.lineTo(x, y + 104);
    ctx.moveTo(x, y + 104); ctx.lineTo(x - 18, y + 150);
    ctx.moveTo(x, y + 104); ctx.lineTo(x + 18, y + 150);
    ctx.stroke(); ctx.restore();
  }
  /* the branch and the vine the man hangs from; only the sketch shows the branch, so the tension arrow of the
     other panels has clear room above the hand */
  function vine(ctx, i, cx) {
    if (i === 0) { fixed(ctx, PX[i], 296, PW, 22); line(ctx, cx - 5, 318, cx + 4, 350, PAL.muted, 5); }
    if (i < 2) line(ctx, cx + (i === 0 ? 4 : 0), 350, cx, GRIP, PAL.muted, 5);
  }
  function draw() {
    const { ctx } = begin(d.c);
    const m = M.v, a = A.v, w = m * G, T = m * (G + a), lw = K * w, lt = K * T, gap = T - w;
    PX.forEach((px, i) => {
      const cx = px + PW / 2;
      text(ctx, LAB[i], cx, 88, PAL.ink, { size: 22, weight: 600, align: 'center' });
      text(ctx, PHR[i], cx, 112, PAL.muted, { size: 17, align: 'center' });
      if (i < 3) { vine(ctx, i, cx); man(ctx, cx, GRIP); }
      if (i === 2) {                               /* the boundary of the system of interest */
        ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.setLineDash([12, 10]);
        ctx.strokeRect(cx - 66, 350, 132, 186); ctx.restore();
      }
      if (i === 1 || i === 2) {                    /* the forces on the man, with his pull on the vine only in (b) */
        arrow(ctx, cx, GRIP, cx, GRIP - lt, C('force'), 5);
        text(ctx, 'T', cx - 14, GRIP - lt / 2, C('force'), { size: 24, weight: 600, align: 'right' });
        arrow(ctx, cx, STOM, cx, STOM + lw, C('force'), 5);
        text(ctx, 'w', cx - 30, STOM + lw / 2 + 8, C('force'), { size: 24, weight: 600, align: 'right', bg: PAL.panel });
      }
      if (i === 1) {
        arrow(ctx, cx + 34, GRIP, cx + 34, GRIP + lt, C('force'), 5);
        text(ctx, 'F_T', cx + 48, GRIP + lt / 2, C('force'), { size: 24, weight: 600, align: 'left' });
      }
      if (i === 3) {                               /* the two forces added head to tail, the second set beside the first so both read */
        const end = BASE - lt + lw;
        line(ctx, cx - 110, BASE, cx + 110, BASE, PAL.rule, 2, [8, 8]);
        arrow(ctx, cx - 22, BASE, cx - 22, BASE - lt, C('force'), 5);
        line(ctx, cx - 22, BASE - lt, cx + 22, BASE - lt, PAL.rule, 2, [6, 6]);
        arrow(ctx, cx + 22, BASE - lt, cx + 22, end, C('force'), 5);
        dot(ctx, cx - 22, BASE, PAL.ink, false, 10);
        dot(ctx, cx + 22, end, PAL.ink, true, 10);
        text(ctx, 'T = ' + fmt(T, 0) + ' N', cx - 36, BASE - lt / 2, C('force'), { size: 18, weight: 600, align: 'right' });
        text(ctx, 'w = ' + fmt(w, 0) + ' N', cx + 36, (BASE - lt + end) / 2, C('force'), { size: 18, weight: 600, align: 'left' });
        text(ctx, Math.abs(gap) < 1 ? 'the sum comes back to the start'
          : 'the sum ends ' + fmt(Math.abs(gap), 0) + ' N ' + (gap > 0 ? 'above' : 'below') + ' the start', cx, 654, PAL.muted, { size: 17, align: 'center' });
      }
    });
    headline(ctx, Math.abs(a) < 1e-9
      ? 'Tarzan hangs still, so the tension of ' + fmt(T, 0) + ' N is exactly his weight of ' + fmt(w, 0) + ' N'
      : 'Tarzan accelerates ' + (a > 0 ? 'upward' : 'downward') + ' at ' + fmt(Math.abs(a), 2) + ' m/s², so the tension of ' + fmt(T, 0) + ' N is ' + fmt(Math.abs(gap), 0) + ' N ' + (a > 0 ? 'more' : 'less') + ' than his weight');
    readout(d.readout, `\\kTf = \\kwgt + m\\ka = m(\\kg + \\ka) = (${fmt(m, 0)}\\ \\text{kg})(${fmt(G, 2)} + ${fmt(a, 2)})\\ \\text{m/s}^2 = ${fmt(T, 0)}\\ \\text{N}`,
      Math.abs(a) < 1e-9
        ? 'The acceleration along the vertical axis is zero, so the net force along that axis is zero and the tension is exactly the weight, as the fourth panel shows.'
        : 'The acceleration along the vertical axis is ' + fmt(Math.abs(a), 2) + ' m/s², so the net force along that axis is ' + fmt(Math.abs(gap), 0) + ' N and the tension no longer matches the weight.');
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
  const TH = ctl(d.controls, { label: '\\theta', cls: '', min: 5, max: 40, step: 1, value: 25, unit: '°', dec: 0, aria: 'angle of the incline' });
  const PH = ctl(d.controls, { label: '\\varphi', cls: '', min: 0, max: 45, step: 1, value: 0, unit: '°', dec: 0, aria: 'angle the axes are turned through' });
  const M = ctl(d.controls, { label: 'm', cls: '', min: 10, max: 100, step: 5, value: 40, unit: 'kg', dec: 0, aria: 'mass of the block' });
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
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(xR, GY, 52, Math.PI, Math.PI + th); ctx.stroke(); ctx.restore();
    const wide = TH.v >= 12;                  /* a narrow wedge has no room for the label inside it */
    text(ctx, 'θ = ' + fmt(TH.v, 0) + '°', wide ? xR - 92 * Math.cos(th / 2) : xR + 18, wide ? GY - 92 * Math.sin(th / 2) : GY - 18, PAL.muted, { size: 17, align: wide ? 'center' : 'left' });
    const P = [X0 + 0.45 * L * Math.cos(th), yTop + 0.45 * L * Math.sin(th)], B = at(P, nrm, 24);
    ctx.save(); ctx.translate(B[0], B[1]); ctx.rotate(th); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
    ctx.fillRect(-22, -22, 44, 44); ctx.strokeRect(-22, -22, 44, 44); ctx.restore();
    ray(ctx, B, [0, 1], WLEN, C('force'), 5);
    text(ctx, 'w', B[0] - 14, B[1] + WLEN / 2, C('force'), { size: 24, weight: 600, align: 'right' });
    ray(ctx, B, nrm, kF * N, C('force'), 5);
    text(ctx, 'N', B[0] + nrm[0] * (kF * N + 22), B[1] + nrm[1] * (kF * N + 22), C('force'), { size: 24, weight: 600, align: 'center' });
    const aFoot = at(B, dwn, 28), aTip = at(aFoot, dwn, kA * aMag);
    ray(ctx, aFoot, dwn, kA * aMag, C('acceleration'), 5);
    text(ctx, 'a', aTip[0] + nrm[0] * 24 + dwn[0] * 14, aTip[1] + nrm[1] * 24 + dwn[1] * 14, C('acceleration'), { size: 24, weight: 600, align: 'center' });
    text(ctx, 'the block on the incline', 300, 560, PAL.muted, { size: 17, align: 'center' });

    /* the free-body diagram: only the forces, on the axes the reader chose */
    line(ctx, ...at(O, ux, -210), ...at(O, ux, 210), PAL.muted, 2, [12, 10]);
    line(ctx, ...at(O, uy, -70), ...at(O, uy, 200), PAL.muted, 2, [12, 10]);
    text(ctx, 'x′', ...at(O, ux, 228), PAL.muted, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'y′', ...at(O, uy, 218), PAL.muted, { size: 20, weight: 600, align: 'center' });
    if (PH.v >= 1) {
      ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(O[0], O[1], 44, 0, ph); ctx.stroke(); ctx.restore();
      text(ctx, 'φ = ' + fmt(PH.v, 0) + '°', O[0] + 76 * Math.cos(ph / 2), O[1] + 76 * Math.sin(ph / 2), PAL.muted, { size: 17, align: 'left' });
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
    dot(ctx, O[0], O[1], PAL.ink, true, 9);
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
      ? 'along the slope the block accelerates at ' + num(ax, 2) + ' m/s² and not at all across it'
      : 'turned ' + fmt(Math.abs(TH.v - PH.v), 0) + '° from the slope, the axes split the acceleration into ' + num(ax, 2) + ' and ' + num(ay, 2) + ' m/s²');
    readout(d.readout, `\\kFnetx = m\\ka_{x'} = ${num(wx + nx, 0)}\\ \\text{N} \\qquad \\kFnety = m\\ka_{y'} = ${num(wy + ny, 0)}\\ \\text{N}`,
      along
        ? 'With one axis along the slope the block accelerates along x′ alone, so the acceleration across the slope is zero and the net force across it is zero as well, and only the weight is left to resolve.'
        : 'These axes leave the block accelerating along both of them, so neither net force is zero and both the weight and the normal force have to be resolved. Turn the axes to ' + fmt(TH.v, 0) + '°, the angle of the slope, and the second equation becomes zero.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
