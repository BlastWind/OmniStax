/* Figures for section 6.2 Transforms of derivatives and ODEs. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['6.2'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, dot, line, arrow, text, label, hbracket, headline, register, readout, fmt, hover, cycle, spring, fixed, cart, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const guide = () => alpha(PAL.ink, 0.35);
const clip = (ctx, box, draw) => { ctx.save(); ctx.beginPath(); ctx.rect(box.l - 6, box.t - 6, box.r - box.l + 12, box.b - box.t + 12); ctx.clip(); draw(); ctx.restore(); };
const PI = Math.PI;
/* a constant as the TeX writes it: π where the slider sits on π, else the value to two decimals with trailing zeros dropped */
const num = (v) => (Math.abs(v - PI) < 0.005 ? '\\pi' : String(+v.toFixed(2)));
const isPi = (v) => Math.abs(v - PI) < 0.005;
/* t − a written out: t for a = 0 */
const tm = (a) => (Math.abs(a) < 0.005 ? 't' : `t - ${num(a)}`);
/* the factor e^(−as): nothing for a = 0, e^{-s} for a = 1 */
const ex = (a) => (Math.abs(a) < 0.005 ? '' : Math.abs(a - 1) < 0.005 ? 'e^{-s}' : `e^{-${num(a)}${isPi(a) ? " " : ""}s}`);

/* Figure 6.1: the unit step u(t − a) under a slider for a (0 to 4, the book's u(t) at a = 0), and a choice of
   what steps build: the step itself; the window u(t − a) − u(t − b) (b on a second slider, shown only here; the
   book's [1, 2) at a = 1, b = 2, and b < a gives −1 on [b, a), which the same formula transforms); the signal
   u(t − a) sin t switched on at a (the book's π a detent); the book's tent t(u(t) − u(t − 1)) + (−t + 2)(u(t − 1)
   − u(t − 2)) slid to start at a. The readout writes each one's transform by (6.1): e^(−as)/s,
   (e^(−as) − e^(−bs))/s, e^(−as) ℒ{sin(t + a)} = e^(−as)(cos a + s sin a)/(s² + 1), e^(−as)(1 − 2e^(−s) + e^(−2s))/s²
   (each checked by SymPy). Graph t −1 to 7 by y −1.5 to 1.5; the jump drawn honestly, open below and filled
   above; faint behind each, the function before it is slid or switched on (u(t), sin t, the tent at 0). Still: the
   graph answers its controls; a change of choice bends one function into the next. */
(function () {
  const d = sim('sim-heaviside', 560);
  const pick = choice(d.controls, { label: 'build', key: 'build', value: 'step', aria: 'what the steps build', options: [
    { value: 'step', label: 'step' }, { value: 'window', label: 'window' }, { value: 'signal', label: 'signal' }, { value: 'tent', label: 'tent' }],
  });
  const aS = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: 0, max: 4, step: 0.01, value: 0, unit: '', dec: 2, aria: 'the switch-on time a', detents: [0, 1, { v: PI, label: 'π' }] });
  const bS = ctl(d.controls, { label: 'b', cls: '', key: 'b', min: 0, max: 6.5, step: 0.01, value: 2, unit: '', dec: 2, aria: 'the switch-off time b of the window', detents: [2] });
  bS.show(false, { ms: 0 });
  const ro = readout(d);
  const BOX = { l: 150, r: 1300, t: 130, b: 470 }, T0 = -1, T1 = 7;
  const step = (a) => (t) => (t >= a ? 1 : 0);
  const tentAt = (a) => (t) => (t < a || t > a + 2 ? 0 : t <= a + 1 ? t - a : a + 2 - t);
  /* the function each choice builds, for the morph between choices */
  const fOf = (v) => {
    const a = aS.v, b = bS.v;
    if (v === 'step') return step(a);
    if (v === 'window') return (t) => step(a)(t) - step(b)(t);
    if (v === 'signal') return (t) => step(a)(t) * Math.sin(t);
    return tentAt(a);
  };
  let hits = [];
  hover(d.stage, () => hits);
  still(d, () => {
    const { ctx } = begin(d.c);
    const fc = C('function'), a = aS.v, b = bS.v, v = pick.value;
    if (bS.shown !== (v === 'window')) bS.show(v === 'window');
    const ax = axes(ctx, BOX, [T0, T1], [-1.5, 1.5], { xl: 't', nx: 8, ny: 6, fx: (u) => fmt(u, 0), fy: (u) => fmt(u, 1) });
    line(ctx, ax.box.l, ax.Y(0), ax.box.r, ax.Y(0), guide(), 2);
    hits = [];
    /* where the steps switch: a dashed guide at t = a (and t = b for the window), named at the top of the frame */
    const mark = (x, s) => {
      line(ctx, ax.X(x), ax.box.t, ax.X(x), ax.box.b, guide(), 2, [4, 8]);
      text(ctx, s, ax.X(x) + 8, ax.box.t + 14, PAL.muted, { size: 20, align: 'left', italic: true });
    };
    if (a > 0.005) mark(a, 'a');
    if (v === 'window' && b > 0.005 && Math.abs(b - a) > 0.005) mark(b, 'b');
    /* faint behind: the function before it is slid or switched on */
    const faint = alpha(fc, 0.3);
    if (v === 'step' && a > 0.005) {
      plot(ctx, ax, [{ f: () => 0, x: [T0, 0], ends: '-)' }, { f: () => 1, x: [0, T1], ends: '[-' }], faint, { w: 3 });
      hits.push({ x: ax.X(-0.5), y: ax.Y(0), r: 14, name: 'u(t), the step at t = 0, before it is slid' });
    }
    if (v === 'signal') {
      plot(ctx, ax, Math.sin, faint, { w: 3 });
      hits.push({ x: ax.X(-0.6), y: ax.Y(Math.sin(-0.6)), r: 14, name: 'sin t, before it is switched on' });
    }
    if (v === 'tent' && a > 0.005) plot(ctx, ax, tentAt(0), faint, { w: 3 });
    /* the function: mid-change it bends from the last choice into this one; at rest it is drawn with its jumps */
    if (pick.k < 1) clip(ctx, ax.box, () => pick.curve(ctx, fOf, T0, T1, ax.X, ax.Y, fc, 5, 640));
    else {
      let pieces;
      if (v === 'step') pieces = [{ f: () => 0, x: [T0, a], ends: '-)' }, { f: () => 1, x: [a, T1], ends: '[-' }];
      else if (v === 'window') {
        const lo = Math.min(a, b), hi = Math.max(a, b), h = b >= a ? 1 : -1;
        pieces = Math.abs(b - a) < 0.005 ? [{ f: () => 0, x: [T0, T1] }]
          : [{ f: () => 0, x: [T0, lo], ends: '-)' }, { f: () => h, x: [lo, hi], ends: '[)' }, { f: () => 0, x: [hi, T1], ends: '[-' }];
      } else if (v === 'signal') {
        const jump = Math.abs(Math.sin(a)) > 0.02;
        pieces = [{ f: () => 0, x: [T0, a], ends: jump ? '-)' : '' }, { f: Math.sin, x: [a, T1], ends: jump ? '[-' : '' }];
      } else pieces = [{ f: tentAt(a), x: [T0, T1] }];
      plot(ctx, ax, pieces, fc, { w: 5 });
    }
    /* the formula on the graph, and hover names on the pieces */
    const fx = fOf(v);
    if (v === 'step') {
      headline(ctx, `$\\ku(${tm(a)})$ is $0$ for $t < ${num(a)}$ and $1$ for $t \\geq ${num(a)}$.`);
      hits.push({ x: ax.X(Math.min(T1 - 0.3, a + 0.6)), y: ax.Y(1), r: 16, name: `u(t − ${fmt(a, 2)}) = 1 for t ≥ ${fmt(a, 2)}` },
        { x: ax.X(a), y: ax.Y(0), r: 12, name: `open: u(t − a) is not 0 at t = a` }, { x: ax.X(a), y: ax.Y(1), r: 12, name: `filled: u(t − a) = 1 at t = a` });
      ro.set(`\\mathcal{L}\\bigl\\{\\ku(${tm(a)})\\bigr\\} = \\frac{${ex(a) || '1'}}{s}`, undefined, { form: 'step' });
    } else if (v === 'window') {
      const lo = Math.min(a, b), hi = Math.max(a, b);
      const what = Math.abs(b - a) < 0.005 ? 'is $0$ everywhere: the two steps cancel'
        : b > a ? `is $1$ on $[${num(a)}, ${num(b)})$ and $0$ elsewhere` : `is $-1$ on $[${num(b)}, ${num(a)})$ and $0$ elsewhere, since $b < a$`;
      headline(ctx, `$\\ku(${tm(a)}) - \\ku(${tm(b)})$ ${what}.`);
      hits.push({ x: ax.X((lo + hi) / 2), y: ax.Y(fx((lo + hi) / 2)), r: 16, name: `u(t − a) − u(t − b) = ${fx((lo + hi) / 2)} on [${fmt(lo, 2)}, ${fmt(hi, 2)})` });
      const top = Math.abs(b - a) < 0.005 ? '0' : `\\frac{${ex(a) || '1'} - ${ex(b) || '1'}}{s}`;
      ro.set(`\\mathcal{L}\\bigl\\{\\ku(${tm(a)}) - \\ku(${tm(b)})\\bigr\\} = ${top}`, undefined, { form: 'window' });
    } else if (v === 'signal') {
      headline(ctx, `$\\ku(${tm(a)})\\sin t$: the signal $\\sin t$, received from $t = ${num(a)}$ on.`);
      hits.push({ x: ax.X(Math.min(T1 - 0.3, a + 1.2)), y: ax.Y(Math.sin(Math.min(T1 - 0.3, a + 1.2))), r: 16, name: `u(t − a) sin t, switched on at t = ${fmt(a, 2)}` });
      /* ℒ{u(t − a) sin t} = e^(−as) ℒ{sin(t + a)}, sin(t + a) = cos a sin t + sin a cos t */
      const c = isPi(a) ? -1 : Math.abs(a) < 0.005 ? 1 : +Math.cos(a).toFixed(2), sn = isPi(a) || Math.abs(a) < 0.005 ? 0 : +Math.sin(a).toFixed(2);
      const top = [c !== 0 ? n(c, isPi(a) || !a ? 0 : 2) : '', sn !== 0 ? `${c !== 0 ? (sn < 0 ? ' - ' : ' + ') : sn < 0 ? '-' : ''}${n(Math.abs(sn))}s` : ''].join('') || '0';
      const lt = Math.abs(a) < 0.005 ? '\\mathcal{L}\\{\\sin t\\}' : `${ex(a)}\\,\\mathcal{L}\\bigl\\{\\sin(t + ${num(a)})\\bigr\\}`;
      const rhs = Math.abs(a) < 0.005 ? '\\frac{1}{s^2+1}' : `${ex(a)}\\,\\frac{${top}}{s^2+1}`;
      ro.set(`\\mathcal{L}\\bigl\\{\\ku(${tm(a)})\\sin t\\bigr\\} = ${lt} = ${rhs}`, undefined, { form: 'signal' });
    } else {
      const p1 = num(a + 1), p2 = num(a + 2), up = Math.abs(a) < 0.005 ? 't' : `(t - ${num(a)})`, dn = Math.abs(a) < 0.005 ? '(-t+2)' : `(${p2} - t)`;
      headline(ctx, `$\\kf(t) = ${up}\\bigl(\\ku(${tm(a)}) - \\ku(t-${p1})\\bigr) + ${dn}\\bigl(\\ku(t-${p1}) - \\ku(t-${p2})\\bigr)$: up from $t = ${num(a)}$ to $1$ at $t = ${p1}$, down to $0$ at $t = ${p2}$.`);
      hits.push({ x: ax.X(a + 1), y: ax.Y(1), r: 16, name: `the tent's peak, f = 1 at t = ${fmt(a + 1, 2)}` });
      if (a > 0.005) hits.push({ x: ax.X(1), y: ax.Y(1), r: 14, name: 'the book’s tent, starting at t = 0' });
      const e = ex(a);
      ro.set(`\\mathcal{L}\\bigl\\{\\kf(t)\\bigr\\} = ${e ? `${e}\\,` : ''}\\frac{1 - 2e^{-s} + e^{-2s}}{s^2}`, undefined, { form: 'tent' });
    }
  });
})();

/* Figure 6.2: Example 6.2.2's mass on its spring, x″ + x = f(t), x(0) = x′(0) = 0, with a rocket on the cart firing
   with force 1 from t = a to t = a + T (the book's a = 1, T = 4: f = u(t − 1) − u(t − 5)). The solution is the
   book's, x = (1 − cos(t − a))u(t − a) − (1 − cos(t − a − T))u(t − a − T), checked against the ODE numerically;
   after the burn x = cos(t − a − T) − cos(t − a), of amplitude 2|sin(T/2)|, dashed (0 at the special T = 2π: the
   mass stops dead). The cart moves (the motion is the idea), the thrust arrow is symbolic and drawn only while the
   rocket fires; the flame is drawn in a flame's colours (rule 7, facts). Scene 110 units per unit of x about the
   rest position at 700; strip of f(t) 0 to 1; graph t 0 to 20 by x −2.4 to 2.4 (the book's window, ticks at the
   integers; |x| ≤ 2 for every a and T). The clock runs t 0 to 20 in 6 s. */
(function () {
  const d = sim('sim-rocket', 780);
  const aS = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: 0, max: 6, step: 0.05, value: 1, unit: 's', dec: 2, aria: 'the time a the rocket fires', detents: [1], onInput: () => cy.reset() });
  const TS = ctl(d.controls, { label: 'T', cls: '', key: 'T', min: 0, max: 8, step: 0.05, value: 4, unit: 's', dec: 2, aria: 'how long T the rocket fires', detents: [4], specials: [{ at: 2 * PI, label: 'one period: the mass is left at rest' }], onInput: () => cy.reset() });
  const ro = readout(d);
  const FLAME_OUT = '#f2a33a', FLAME_IN = '#ffd166';   /* the rocket's flame, in a flame's own colours (rule 7, facts) */
  const X0 = 700, SC = 110, FY = 262, WX = 150, TMAX = 20;
  const STRIP = { l: 170, r: 1300, t: 345, b: 395 }, BOX = { l: 170, r: 1300, t: 450, b: 710 };
  let hits = [];
  hover(d.stage, () => hits);
  const xOf = (a, T) => (t) => (t >= a ? 1 - Math.cos(t - a) : 0) - (t >= a + T ? 1 - Math.cos(t - a - T) : 0);
  const fOf = (a, T) => (t) => (t >= a && t < a + T ? 1 : 0);

  /* the rocket on the cart's roof at (x, y), nozzle to the left: while it fires, the flame blows left and drives the cart right */
  function rocket(ctx, x, y, firing, t) {
    const l = x - 44, r = x + 26, h = 26, cy0 = y - 8 - h / 2;
    ctx.save(); ctx.lineWidth = 3; ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.panel; ctx.lineJoin = 'round';
    line(ctx, x - 20, y, x - 20, cy0 + h / 2, PAL.ink, 3); line(ctx, x + 10, y, x + 10, cy0 + h / 2, PAL.ink, 3);
    ctx.beginPath(); ctx.moveTo(l, cy0 - h / 2); ctx.lineTo(r, cy0 - h / 2); ctx.quadraticCurveTo(r + 30, cy0, r, cy0 + h / 2);
    ctx.lineTo(l, cy0 + h / 2); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(l, cy0 - 7); ctx.lineTo(l - 14, cy0 - 12); ctx.lineTo(l - 14, cy0 + 12); ctx.lineTo(l, cy0 + 7); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.restore();
    if (!firing) return { x: x - 10, y: cy0, flame: null };
    const k = 1 + 0.12 * Math.sin(37 * t) + 0.06 * Math.sin(91 * t), L = 70 * k, bx = l - 15;
    ctx.save();
    ctx.fillStyle = F.fact(FLAME_OUT); ctx.beginPath(); ctx.moveTo(bx, cy0 - 11);
    ctx.bezierCurveTo(bx - L * 0.35, cy0 - 17, bx - L * 0.7, cy0 - 8, bx - L, cy0); ctx.bezierCurveTo(bx - L * 0.7, cy0 + 8, bx - L * 0.35, cy0 + 17, bx, cy0 + 11); ctx.closePath(); ctx.fill();
    ctx.fillStyle = F.fact(FLAME_IN); ctx.beginPath(); ctx.moveTo(bx, cy0 - 6);
    ctx.bezierCurveTo(bx - L * 0.2, cy0 - 9, bx - L * 0.4, cy0 - 4, bx - L * 0.55, cy0); ctx.bezierCurveTo(bx - L * 0.4, cy0 + 4, bx - L * 0.2, cy0 + 9, bx, cy0 + 6); ctx.closePath(); ctx.fill();
    ctx.restore();
    return { x: x - 10, y: cy0, flame: { x: bx - L / 2, y: cy0 } };
  }

  function draw(t) {
    const { ctx } = begin(d.c);
    const fc = C('function'), ink = PAL.ink, a = aS.v, T = TS.v, x = xOf(a, T), f = fOf(a, T), xt = x(t), on = f(t) === 1;
    const amp = 2 * Math.abs(Math.sin(T / 2)), end = a + T;
    hits = [];
    /* the scene: the wall, the floor, the spring, the cart and its rocket, the thrust while it fires */
    const cw = 130, ch = 70, r = 12, cyy = FY - ch / 2 - 2 * r, cx = X0 + xt * SC;
    fixed(ctx, WX - 24, FY - 170, 24, 170);
    line(ctx, WX, FY, 1300, FY, ink, 3);
    line(ctx, X0, FY - 175, X0, FY + 12, guide(), 2, [4, 8]);
    text(ctx, 'x = 0', X0 + 8, FY - 168, PAL.muted, { size: 17, align: 'left' });
    spring(ctx, WX, cyy, cx - cw / 2, cyy, 9, 16, ink, 3);
    cart(ctx, cx, cyy, cw, ch, ink);
    text(ctx, 'm', cx, cyy, ink, { size: 24, align: 'center', italic: true });
    const rk = rocket(ctx, cx, cyy - ch / 2, on, t);
    if (on) {
      const fx = cx + cw / 2;
      arrow(ctx, fx, cyy, fx + 100, cyy, fc, 5);
      label(ctx, 'f = 1', fx + 106, cyy, { side: 'right', color: fc, size: 20, weight: 600, gap: 4 });
      hits.push({ x: fx + 50, y: cyy, r: 20, name: 'the thrust f(t) = 1 while the rocket fires' });
    }
    if (Math.abs(cx - X0) > 12) hbracket(ctx, X0, cx, FY + 26, fc, `x = ${fmt(xt, 2)}`, { side: 'below', size: 18 });
    hits.push(
      { x: cx, y: cyy, r: 50, name: 'the mass, m = 1' },
      { x: (WX + cx - cw / 2) / 2, y: cyy, r: 24, name: 'the spring, k = 1, no damping' },
      { x: rk.x, y: rk.y, r: 26, name: on ? `the rocket, firing until t = ${fmt(end, 2)}` : t < a ? `the rocket, to fire from t = ${fmt(a, 2)} for ${fmt(T, 2)} s` : 'the rocket, burned out' },
      { x: X0, y: FY - 140, r: 18, name: 'the rest position x = 0' },
    );
    if (rk.flame) hits.push({ x: rk.flame.x, y: rk.flame.y, r: 28, name: 'the exhaust, blowing left and pushing the cart right' });

    /* the thrust f(t) on its strip, the burn shaded on strip and graph */
    const aF = axes(ctx, STRIP, [0, TMAX], [0, 1], { yl: 'f(t)', yc: fc, nx: 0, ny: 1, fy: (v) => fmt(v, 0) });
    const ax = axes(ctx, BOX, [0, TMAX], [-2.4, 2.4], { xl: 't', yl: 'x', yc: fc, nx: 10, ny: 8, nice: true, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0) });
    const burn = (A) => {
      const l = A.X(Math.min(a, TMAX)), rr = A.X(Math.min(end, TMAX));
      if (rr > l) { ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.06); ctx.fillRect(l, A.box.t, rr - l, A.box.b - A.box.t); ctx.restore(); }
    };
    burn(aF); burn(ax);
    plot(ctx, aF, f, alpha(fc, 0.3), { w: 3 });
    if (t > 0) plot(ctx, aF, f, fc, { w: 4, x: [0, t] });
    dot(ctx, aF.X(t), aF.Y(f(t)), fc, true, 7);
    hits.push({ x: aF.X(t), y: aF.Y(f(t)), r: 14, name: `f(${fmt(t, 1)}) = ${f(t)}` });
    if (T > 0 && a < TMAX) hits.push({ x: aF.X(Math.min(a + T / 2, TMAX - 0.2)), y: aF.Y(0.5), r: 16, name: `the burn, from t = ${fmt(a, 2)} to t = ${fmt(end, 2)}` });

    line(ctx, ax.box.l, ax.Y(0), ax.box.r, ax.Y(0), guide(), 2);
    /* during the burn the mass swings about x = 1, after it about 0 within ±2|sin(T/2)| (dashed) */
    if (T > 0 && a < TMAX) {
      line(ctx, ax.X(a), ax.Y(1), ax.X(Math.min(end, TMAX)), ax.Y(1), alpha(fc, 0.45), 2, [4, 8]);
      hits.push({ x: ax.X(Math.min(a + T / 2, TMAX - 0.2)), y: ax.Y(1), r: 12, name: 'x = 1, where the spring balances the thrust' });
    }
    if (T > 0 && end < TMAX) {
      for (const sg of [1, -1]) line(ctx, ax.X(end), ax.Y(sg * amp), ax.box.r, ax.Y(sg * amp), alpha(fc, 0.6), 2, [10, 10]);
      hits.push({ x: ax.X((end + TMAX) / 2), y: ax.Y(amp), r: 12, name: `the amplitude after the burn, ${fmt(amp, 2)}` });
    }
    plot(ctx, ax, x, alpha(fc, 0.3), { w: 3 });
    if (t > 0) plot(ctx, ax, x, fc, { w: 5, x: [0, t] });
    const P = pinned(ctx, ax.box, ax.X, ax.Y, t, xt, fc);
    hits.push({ x: P.x, y: P.y, r: 14, name: `x(${fmt(t, 2)}) = ${fmt(xt, 2)}` });

    const when = t < a ? `the rocket waits for $t = ${num(a)}$` : on ? `the rocket fires until $t = ${num(end)}$` : `the rocket burned out at $t = ${num(end)}$`;
    headline(ctx, `$t = ${n(t)}$: ${when}; the mass is at $\\kx = ${n(xt)}$.`);
    const term = (s) => `\\bigl(1 - \\cos(${tm(s)})\\bigr)\\,\\ku(${tm(s)})`;
    const tail = T < 0.005 ? 'The rocket never fires, and the two terms cancel: the mass stays at rest.'
      : Math.abs(T - 2 * PI) < 1e-6 ? `From $t = ${num(end)}$ on, $\\kx(t) = \\cos(${tm(end)}) - \\cos(${tm(a)}) = 0$: the burn lasts one period and leaves the mass at rest.`
        : `From $t = ${num(end)}$ on, $\\kx(t) = \\cos(${tm(end)}) - \\cos(${tm(a)})$, which swings with amplitude ${fmt(amp, 2)}.`;
    ro.set(`\\kx(t) = ${term(a)} - ${term(end)}`, tail);
  }
  const cy = cycle(() => TMAX, 1.2);
  register(d.fig, { update: (dt) => cy.step(dt, () => TMAX / 6), draw: () => draw(cy.now()) });
})();
};
