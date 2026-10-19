/* Figures for section 4.1 Boundary value problems. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.1'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, shade, dot, line, arrow, text, label, vbracket, headline, register, readout, fmt, hover, cycle, tween } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const r2 = (v) => Math.round(v * 100) / 100;
const PI = Math.PI;
const dashed = (ctx, draw, pat = [12, 9]) => { ctx.save(); ctx.setLineDash(pat); draw(); ctx.restore(); };
/* a tick label in multiples of π where the value is one, as the book writes the interval's ends */
const piTick = (v) => {
  const q = v / PI, f = Math.round(q * 4);
  if (Math.abs(q * 4 - f) > 0.02) return fmt(v, 2);
  const names = { 0: '0', 1: 'π/4', 2: 'π/2', 3: '3π/4', 4: 'π' };
  const s = names[Math.abs(f)] ?? `${Math.abs(f) / 4}π`;
  return f < 0 ? '−' + s : s;
};

/* Sim: the hunt for eigenvalues. The three endpoint problems (4.1), (4.2) on [0, π] and (4.3) on [−π, π], as Examples
   4.1.3–4.1.5 set them, and λ on a slider. For (4.1) and (4.2) the condition at t = 0 leaves one candidate up to a
   multiple (B sin √λ t, B t, B sinh √−λ t; A cos √λ t, A, A cosh √−λ t), drawn scaled to reach ±1 on the interval;
   for (4.3) both cos and sin candidates are drawn. The far condition is read off at t = π. Axes t over the interval,
   x −1.6 to 1.6 (every candidate is scaled into ±1). */
(function () {
  const d = sim('sim-eigenvalue-hunt', 600);
  const prob = choice(d.controls, { label: 'problem', key: 'problem', value: 'd', options: [
    { value: 'd', label: '(4.1) x(0) = x(π) = 0' }, { value: 'n', label: '(4.2) x′(0) = x′(π) = 0' }, { value: 'p', label: '(4.3) periodic on [−π, π]' }] });
  const EIG = { d: [1, 4, 9], n: [0, 1, 4, 9], p: [0, 1, 4, 9] };
  const lam = ctl(d.controls, { label: '\\klambda', cls: 'eigenvalue', key: 'lambda', min: -2, max: 10, step: 0.01, value: 2, unit: '', dec: 2,
    aria: 'the constant λ', specials: [0, 1, 4, 9].map((e) => ({ at: () => (EIG[prob.value].includes(e) ? e : null), label: `λ = ${e}` })) });
  const ro = readout(d);
  const hit = tween(d, 0);
  let wasOn = null, hits = [];
  hover(d.stage, () => hits);
  const BOX = { l: 200, r: 1240, t: 130, b: 470 };
  /* the scaled candidates for each problem at λ: [{ f, df, name }] */
  const scaleOn = (f, a, b) => { let m = 0; for (let i = 0; i <= 200; i++) m = Math.max(m, Math.abs(f(a + ((b - a) * i) / 200))); return m > 1e-12 ? m : 1; };
  function candidates(p, L) {
    const a = p === 'p' ? -PI : 0, b = PI, s = Math.sqrt(Math.abs(L));
    const pos = L > 1e-9, zero = Math.abs(L) <= 1e-9;
    const make = (f, df, name) => { const m = scaleOn(f, a, b); return { f: (t) => f(t) / m, df: (t) => df(t) / m, name }; };
    const sin = make((t) => Math.sin(s * t), (t) => s * Math.cos(s * t), 'B sin(√λ t)');
    const cos = make((t) => Math.cos(s * t), (t) => -s * Math.sin(s * t), 'A cos(√λ t)');
    const sinh = make((t) => Math.sinh(s * t), (t) => s * Math.cosh(s * t), 'B sinh(√−λ t)');
    const cosh = make((t) => Math.cosh(s * t), (t) => s * Math.sinh(s * t), 'A cosh(√−λ t)');
    const lin = make((t) => t, () => 1, 'B t'), one = make(() => 1, () => 0, 'A');
    if (p === 'd') return [pos ? sin : zero ? { ...lin, name: 'A t' } : sinh];
    if (p === 'n') return [pos ? cos : zero ? one : cosh];
    return pos ? [cos, sin] : zero ? [{ ...one, name: 'B' }, { ...lin, name: 'A t' }] : [cosh, sinh];
  }
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), dc = C('derivative'), pc = C('point'), ink = PAL.ink, p = prob.value;
    const L = r2(lam.v), s = Math.sqrt(Math.abs(L)), pos = L > 1e-9, zero = Math.abs(L) <= 1e-9;
    const on = EIG[p].some((e) => Math.abs(L - e) < 1e-9);
    const key = `${p}|${on ? L : ''}`;
    if (on && key !== wasOn) { hit.set(0); hit.to(1, 900); }
    wasOn = on ? key : null;
    const xr = prob.mix((v) => (v === 'p' ? [-PI, PI] : [0, PI]));
    const ax = axes(ctx, BOX, xr, [-1.6, 1.6], { xl: 't', yl: 'x', yc: fc, nx: 4, ny: 4, fx: piTick, fy: (u) => fmt(u, 1) });
    const a = p === 'p' ? -PI : 0, b = PI, cs = candidates(p, L);
    hits = [];
    /* the candidates, the second of (4.3)'s pair dashed */
    cs.forEach((c, i) => {
      if (i === 0) plot(ctx, ax, c.f, fc, { x: [a, b] });
      else dashed(ctx, () => plot(ctx, ax, c.f, fc, { x: [a, b], w: 4 }));
      [0.3, 0.55, 0.8].forEach((u) => { const t = a + (b - a) * u; hits.push({ x: ax.X(t), y: ax.Y(c.f(t)), r: 14, name: `the candidate x = ${c.name}${cs.length > 1 ? (i ? ', dashed' : ', solid') : ''}` }); });
    });
    /* the end conditions: a value or a slope that must match its target */
    const tick = (t, f, df, color, w = 3) => { const h = 0.32, y = f(t), k = df(t); line(ctx, ax.X(t - h), ax.Y(y - k * h), ax.X(t + h), ax.Y(y + k * h), color, w); };
    const ring = (x, y) => { const k = F.ease.out(hit.v); if (on && k < 1) dot(ctx, x, y, alpha(pc, 1 - k), false, 10 + 26 * k); };
    if (p === 'd') {
      const c = cs[0], y = c.f(PI);
      dot(ctx, ax.X(0), ax.Y(0), pc, true, 10);
      dot(ctx, ax.X(PI), ax.Y(0), pc, on, 11);
      if (!on && Math.abs(y) > 0.04) vbracket(ctx, ax.X(PI) + 22, ax.Y(0), ax.Y(y), ink, 'x(π) ≠ 0', -1);
      dot(ctx, ax.X(PI), ax.Y(y), fc, true, 8);
      ring(ax.X(PI), ax.Y(0));
      hits.push({ x: ax.X(0), y: ax.Y(0), r: 16, name: 'the condition x(0) = 0, met' }, { x: ax.X(PI), y: ax.Y(0), r: 16, name: `the condition x(π) = 0, ${on ? 'met' : 'missed'}` });
    } else if (p === 'n') {
      const c = cs[0];
      tick(0, c.f, c.df, dc); tick(PI, c.f, c.df, dc, on ? 4 : 3);
      dashed(ctx, () => line(ctx, ax.X(PI - 0.32), ax.Y(c.f(PI)), ax.X(PI + 0.32), ax.Y(c.f(PI)), alpha(ink, 0.45), 2), [4, 8]);
      dot(ctx, ax.X(PI), ax.Y(c.f(PI)), pc, on, 10);
      ring(ax.X(PI), ax.Y(c.f(PI)));
      hits.push({ x: ax.X(0), y: ax.Y(c.f(0)), r: 16, name: 'the condition x′(0) = 0: a level tangent, met' }, { x: ax.X(PI), y: ax.Y(c.f(PI)), r: 16, name: `the condition x′(π) = 0: the tangent ${on ? 'is level' : 'is not level'}` });
    } else {
      cs.forEach((c, i) => {
        const ya = c.f(-PI), yb = c.f(PI);
        tick(-PI, c.f, c.df, dc); tick(PI, c.f, c.df, dc);
        dot(ctx, ax.X(-PI), ax.Y(ya), pc, true, 9); dot(ctx, ax.X(PI), ax.Y(yb), pc, on || Math.abs(yb - ya) < 1e-6, 9);
        if (!on && Math.abs(yb - ya) > 0.04) dashed(ctx, () => line(ctx, ax.X(-PI), ax.Y(ya), ax.X(PI), ax.Y(ya), alpha(ink, 0.4), 2), [4, 8]);
        ring(ax.X(PI), ax.Y(yb));
        hits.push({ x: ax.X(PI), y: ax.Y(yb), r: 16, name: `${c.name} at t = π: value ${fmt(yb, 2)}, slope ${fmt(c.df(PI), 2)} (at −π: ${fmt(ya, 2)}, ${fmt(c.df(-PI), 2)})` });
      });
    }
    /* headline and readout, the numbers rounded once and used everywhere */
    const sq = r2(s), lt = n(L);
    let head, tex;
    if (p === 'd') {
      if (pos) {
        const v = r2(Math.sin(s * PI));
        tex = `\\kx(\\pi) = B\\sin\\bigl(\\sqrt{\\klambda}\\,\\pi\\bigr) = B\\sin(${n(sq)}\\pi) = ${on ? '0' : `${n(v)}B`}`;
        head = on ? `$\\klambda = ${fmt(L, 0)}$ is an eigenvalue: $\\kx = \\sin ${fmt(s, 0) === '1' ? '' : fmt(s, 0)}t$ is zero at both ends.`
          : `$\\klambda = ${lt}$: $\\kx(\\pi) = ${n(v)}B$, so $B = 0$ and only $\\kx = 0$ solves the problem.`;
      } else if (zero) {
        tex = `\\kx = At + B,\\quad \\kx(0) = B = 0,\\quad \\kx(\\pi) = A\\pi = 0`;
        head = '$\\klambda = 0$: the line $\\kx = At + B$ through both zeros has $A = B = 0$, so 0 is no eigenvalue.';
      } else {
        const v = r2(Math.sinh(s * PI));
        tex = `\\kx(\\pi) = B\\sinh\\bigl(\\sqrt{-\\klambda}\\,\\pi\\bigr) = B\\sinh(${n(sq)}\\pi) = ${n(v, 2)}B`;
        head = `$\\klambda = ${lt}$: $B\\sinh(${n(sq)}t)$ is never zero again after $t = 0$, so $B = 0$.`;
      }
    } else if (p === 'n') {
      if (pos) {
        const v = r2(-s * Math.sin(s * PI));
        tex = `\\kxprime(\\pi) = -A\\sqrt{\\klambda}\\,\\sin\\bigl(\\sqrt{\\klambda}\\,\\pi\\bigr) = -${n(sq)}A\\sin(${n(sq)}\\pi) = ${on ? '0' : `${n(v)}A`}`;
        head = on ? `$\\klambda = ${fmt(L, 0)}$ is an eigenvalue: $\\kx = \\cos ${fmt(s, 0) === '1' ? '' : fmt(s, 0)}t$ is level at both ends.`
          : `$\\klambda = ${lt}$: $\\kxprime(\\pi) = ${n(v)}A$, so $A = 0$ and only $\\kx = 0$ solves the problem.`;
      } else if (zero) {
        tex = `\\kx = At + B,\\quad \\kxprime = A = 0,\\quad \\kx = B = 1`;
        head = '$\\klambda = 0$ is an eigenvalue: the constant $\\kx = 1$ is level at both ends.';
      } else {
        const v = r2(s * Math.sinh(s * PI));
        tex = `\\kxprime(\\pi) = A\\sqrt{-\\klambda}\\,\\sinh\\bigl(\\sqrt{-\\klambda}\\,\\pi\\bigr) = ${n(sq)}A\\sinh(${n(sq)}\\pi) = ${n(v)}A`;
        head = `$\\klambda = ${lt}$: the slope of $A\\cosh(${n(sq)}t)$ at $t = \\pi$ is $${n(v)}A$, so $A = 0$.`;
      }
    } else {
      if (pos) {
        const u = r2(2 * Math.sin(s * PI)), v = r2(-2 * s * Math.sin(s * PI));
        tex = `\\kx(\\pi) - \\kx(-\\pi) = 2B\\sin(${n(sq)}\\pi) = ${on ? '0' : `${n(u)}B`},\\quad \\kxprime(\\pi) - \\kxprime(-\\pi) = -2${n(sq)}A\\sin(${n(sq)}\\pi) = ${on ? '0' : `${n(v)}A`}`;
        head = on ? `$\\klambda = ${fmt(L, 0)}$ is an eigenvalue: both $\\cos ${fmt(s, 0) === '1' ? '' : fmt(s, 0)}t$ and $\\sin ${fmt(s, 0) === '1' ? '' : fmt(s, 0)}t$ match their values and slopes at $\\pm\\pi$.`
          : `$\\klambda = ${lt}$: the sine misses in value and the cosine in slope, so $A = B = 0$.`;
      } else if (zero) {
        tex = `\\kx = At + B,\\quad \\kx(\\pi) - \\kx(-\\pi) = 2\\pi A = 0,\\quad \\kx = B = 1`;
        head = '$\\klambda = 0$ is an eigenvalue: the line $At$ misses at $\\pm\\pi$, and the constant $\\kx = 1$ is left.';
      } else {
        const u = r2(2 * Math.sinh(s * PI)), v = r2(2 * s * Math.sinh(s * PI));
        tex = `\\kx(\\pi) - \\kx(-\\pi) = 2B\\sinh(${n(sq)}\\pi) = ${n(u)}B,\\quad \\kxprime(\\pi) - \\kxprime(-\\pi) = 2\\cdot${n(sq)}A\\sinh(${n(sq)}\\pi) = ${n(v)}A`;
        head = `$\\klambda = ${lt}$: the hyperbolic sine misses in value and the cosine in slope, so $A = B = 0$.`;
      }
    }
    headline(ctx, head);
    ro.set(tex, undefined, { form: `${p}|${pos ? 1 : zero ? 0 : -1}` });
  }
  still(d, draw);
})();

/* Sim: orthogonality as areas that cancel. The pair sin mt · sin nt, cos mt · cos nt or cos mt · sin nt on [−π, π]:
   the two eigenfunctions above (the second dashed), their product below with the area above the axis and the area
   below shaded. The integral is exact (0, or π for a square); the positive area is integrated numerically and the
   negative one written as their difference, so the readout adds up as printed. Axes t −π to π; top x −1.2 to 1.2,
   bottom −1.2 to 1.2 (a product of two functions bounded by 1). */
(function () {
  const d = sim('sim-orthogonality', 660);
  const pair = choice(d.controls, { label: 'product', key: 'pair', value: 'ss', options: [
    { value: 'ss', label: 'sin mt · sin nt' }, { value: 'cc', label: 'cos mt · cos nt' }, { value: 'cs', label: 'cos mt · sin nt' }] });
  const mS = ctl(d.controls, { label: 'm', cls: '', key: 'm', min: 1, max: 6, step: 1, value: 2, unit: '', dec: 0, specials: [{ at: () => nS.v, label: 'm = n' }] });
  const nS = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 6, step: 1, value: 3, unit: '', dec: 0, specials: [{ at: () => mS.v, label: 'n = m' }] });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  const TOP = { l: 200, r: 1240, t: 120, b: 260 }, BOT = { l: 200, r: 1240, t: 340, b: 600 };
  const FN = { ss: ['sin', 'sin'], cc: ['cos', 'cos'], cs: ['cos', 'sin'] };
  const f1 = (v, m) => (FN[v][0] === 'sin' ? (t) => Math.sin(m * t) : (t) => Math.cos(m * t));
  const f2 = (v, k) => (FN[v][1] === 'sin' ? (t) => Math.sin(k * t) : (t) => Math.cos(k * t));
  const posArea = (f) => { const N = 2400, h = (2 * PI) / N; let s = 0; for (let i = 0; i <= N; i++) { const w = i === 0 || i === N ? 1 : i % 2 ? 4 : 2; s += w * Math.max(0, f(-PI + i * h)); } return (s * h) / 3; };
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ic = C('integral'), v = pair.value, m = Math.round(mS.v), k = Math.round(nS.v);
    const g1 = f1(v, m), g2 = f2(v, k), prod = (t) => g1(t) * g2(t);
    const top = axes(ctx, TOP, [-PI, PI], [-1.2, 1.2], { xl: '', yl: 'eigenfunctions', yc: fc, nx: 4, ny: 2, fx: piTick, fy: (u) => fmt(u, 1) });
    plot(ctx, top, g1, fc, { w: 4 });
    dashed(ctx, () => plot(ctx, top, g2, fc, { w: 4 }));
    const bot = axes(ctx, BOT, [-PI, PI], [-1.2, 1.2], { xl: 't', yl: 'product', yc: ic, nx: 4, ny: 2, fx: piTick, fy: (u) => fmt(u, 1) });
    shade(ctx, bot, (t) => Math.max(0, prod(t)), 0, -PI, PI, ic, { alpha: 0.42 });
    shade(ctx, bot, (t) => Math.min(0, prod(t)), 0, -PI, PI, ic, { alpha: 0.16 });
    plot(ctx, bot, prod, fc, { w: 4 });
    const n1 = `${FN[v][0]} ${m === 1 ? '' : m}t`, n2 = `${FN[v][1]} ${k === 1 ? '' : k}t`;
    hits = [{ x: top.X(-PI / 2 - 0.3), y: top.Y(g1(-PI / 2 - 0.3)), r: 14, name: `x₁ = ${n1}, solid` }, { x: top.X(PI / 2 + 0.3), y: top.Y(g2(PI / 2 + 0.3)), r: 14, name: `x₂ = ${n2}, dashed` },
      { x: bot.X(0.4), y: bot.Y(prod(0.4)), r: 14, name: `the product ${n1} · ${n2}` }];
    const square = v !== 'cs' && m === k;
    const I = square ? PI : 0, P = posArea(prod), Pr = r2(P), Ir = r2(I), Nr = r2(Pr - Ir);
    const lhs = `\\int_{-\\pi}^{\\pi} \\${FN[v][0]}(${m}t)\\,\\${FN[v][1]}(${k}t)\\,dt`;
    ro.set(`${lhs} = ${n(Pr)} - ${n(Nr)} = ${square ? '\\pi' : '0'}`, undefined, { form: square ? 'sq' : 'zero' });
    const why = square ? `$\\${FN[v][0]}^2 ${m}t$ is never negative, so the integral is $\\pi$.`
      : v === 'cs' ? `$\\cos ${m === 1 ? '' : m}t \\cdot \\sin ${k === 1 ? '' : k}t$ is odd: the areas on either side of 0 cancel${m === k ? ', even with $m = n$' : ''}; the integral is 0.`
        : `$m \\neq n$: the area above the axis equals the area below, and the integral is 0.`;
    headline(ctx, why);
  }
  still(d, draw);
})();

/* Figure 4.1 + 4.2: the whirling string, Ty″ + ρω²y = 0, y(0) = y(L) = 0, with L = 2 m and ρ = 0.1 kg/m from
   Exercise 4.1.101 and the tension T and the angular velocity ω the reader's. The string lies on the x-axis unless
   ρω²/T = k²π²/L², when it pops out into B sin(kπx/L) with B = 0.3 m (a choice: the book says B cannot be found).
   The plane carrying it turns about the x-axis; a point at deflection y in the plane at angle φ sits at height
   y cos φ and depth y sin φ, drawn 0.25 of its depth to the right, so a circle about the axis is the book's narrow
   ellipse. Scene 480 units per metre along x and 300 per metre of deflection; the plane turns at ω/6 on screen.
   A steady rotation has no end state, so the loop is one turn with no hold. */
(function () {
  const d = sim('sim-whirling-string', 560);
  const LEN = 2, RHO = 0.1, BAMP = 0.3, SLOW = 6, KMAX = 6;
  const wk = (k, T) => (k * PI * Math.sqrt(T)) / (LEN * Math.sqrt(RHO));
  const Tk = (k, w) => (RHO * w * w * LEN * LEN) / (k * k * PI * PI);
  const KS = Array.from({ length: KMAX }, (_, i) => i + 1);
  const om = ctl(d.controls, { label: '\\komega', cls: 'frequency', key: 'omega', min: 0, max: 30, step: 0.05, value: wk(1, 3), unit: 'rad/s', dec: 2,
    aria: 'the angular velocity ω', specials: KS.map((k) => ({ at: () => wk(k, tS.v), label: `pops out, k = ${k}` })) });
  const tS = ctl(d.controls, { label: 'T', cls: '', key: 'T', min: 1, max: 6, step: 0.05, value: 3, unit: 'N', dec: 2,
    aria: 'the tension T', specials: KS.map((k) => ({ at: () => Tk(k, om.v), label: `pops out, k = ${k}` })) });
  om.set(wk(1, 3));   /* the range input rounds a value to its step before the circles free it; set the exact speed */
  const ro = readout(d);
  const amp = tween(d, 1);
  let shapeK = 1, onK = 1, hits = [];
  hover(d.stage, () => hits);
  const X0 = 210, SX = 480, AY = 300, SY = 300, DEPTH = 0.25;
  const P = (x, y, ph) => [X0 + x * SX + DEPTH * SY * y * Math.sin(ph), AY - SY * y * Math.cos(ph)];
  /* which eigenvalue ρω²/T sits on, if any */
  const which = (w, T) => { const lam = (RHO * w * w) / T; const k = Math.round((LEN * Math.sqrt(lam)) / PI); return k >= 1 && Math.abs(w - wk(k, T)) < 1e-6 ? k : 0; };
  const cy = cycle(() => 2 * PI, 0);
  register(d.fig, { update: (dt) => cy.step(dt, () => om.v / SLOW), draw });
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), ink = PAL.ink, mu = PAL.muted, w = om.v, T = tS.v, ph = cy.now();
    const k = which(w, T);
    if (k !== onK) { if (k) { shapeK = k; amp.set(0); amp.to(1, 900); } else amp.to(0, 600); onK = k; }
    const B = BAMP * amp.v, y = (x) => B * Math.sin((shapeK * PI * x) / LEN);
    /* the axes of the book's sketch: x along the string, y up in the turning plane's rest position */
    arrow(ctx, X0 - 60, AY, X0 + LEN * SX + 150, AY, mu, 3);
    line(ctx, X0, AY + 150, X0, AY - 170, mu, 3);
    text(ctx, 'x', X0 + LEN * SX + 162, AY, mu, { size: 22, italic: true });
    text(ctx, '$\\ky$', X0 - 14, AY - 184, fc, { size: 24, tex: true, align: 'right' });
    text(ctx, '0', X0 - 14, AY + 24, mu, { size: 20, align: 'right' });
    text(ctx, 'L = 2 m', X0 + LEN * SX, AY + 30, mu, { size: 20, align: 'center' });
    /* the surface the string sweeps, faint: its silhouette ±|y| and a few of its circles */
    if (B > 0.004) {
      ctx.save(); ctx.strokeStyle = alpha(ink, 0.18); ctx.lineWidth = 2;
      for (let i = 1; i < 12; i++) {
        const x = (LEN * i) / 12, r = Math.abs(y(x)); if (r < 0.01) continue;
        ctx.beginPath(); ctx.ellipse(X0 + x * SX, AY, DEPTH * SY * r, SY * r, 0, 0, 2 * PI); ctx.stroke();
      }
      ctx.restore();
      dashed(ctx, () => { [1, -1].forEach((sg) => { ctx.save(); ctx.strokeStyle = alpha(ink, 0.3); ctx.lineWidth = 2; ctx.beginPath(); for (let i = 0; i <= 160; i++) { const x = (LEN * i) / 160, py = AY - sg * SY * Math.abs(y(x)); if (i) ctx.lineTo(X0 + x * SX, py); else ctx.moveTo(X0 + x * SX, py); } ctx.stroke(); ctx.restore(); }); }, [4, 8]);
    }
    /* the turning indicator about the axis past x = L: the kinematic arrow, a narrow ellipse whose bright arc runs with the plane */
    const RX = X0 + LEN * SX + 70, RR = 70;
    ctx.save(); ctx.strokeStyle = alpha(ink, 0.25); ctx.lineWidth = 2; ctx.beginPath(); ctx.ellipse(RX, AY, DEPTH * RR, RR, 0, 0, 2 * PI); ctx.stroke(); ctx.restore();
    const arc = Array.from({ length: 13 }, (_, i) => { const a = ph - 1.1 + (1.1 * i) / 12; return [RX + DEPTH * RR * Math.sin(a), AY - RR * Math.cos(a)]; });
    ctx.save(); ctx.strokeStyle = ink; ctx.lineWidth = 3; ctx.beginPath(); arc.forEach(([x, yy], i) => (i ? ctx.lineTo(x, yy) : ctx.moveTo(x, yy))); ctx.stroke(); ctx.restore();
    const [ax2, ay2] = arc[11], [ax3, ay3] = arc[12];
    arrow(ctx, ax2, ay2, ax3 + (ax3 - ax2) * 1.5, ay3 + (ay3 - ay2) * 1.5, ink, 3);
    /* the string in the turning plane, brighter on the near side of the axis */
    const pts = Array.from({ length: 201 }, (_, i) => { const x = (LEN * i) / 200; return P(x, y(x), ph); });
    ctx.save(); ctx.globalAlpha *= 0.7 + 0.3 * Math.sin(ph); ctx.strokeStyle = fc; ctx.lineWidth = 5; ctx.beginPath();
    pts.forEach(([x, yy], i) => (i ? ctx.lineTo(x, yy) : ctx.moveTo(x, yy))); ctx.stroke(); ctx.restore();
    dot(ctx, X0, AY, ink, true, 10); dot(ctx, X0 + LEN * SX, AY, ink, true, 10);
    /* the deflection y at the first crest, as the book's sketch marks it */
    if (B > 0.02) {
      const xc = LEN / (2 * shapeK), [px, py] = P(xc, y(xc), ph), [bx, by] = P(xc, 0, ph);
      if (Math.abs(py - by) > 24) { arrow(ctx, bx, by, px, py, fc, 3); text(ctx, '$\\ky$', px + 16, (by + py) / 2, fc, { size: 24, tex: true, bg: PAL.panel }); }
    }
    hits = [{ x: X0, y: AY, r: 16, name: 'the end fixed at x = 0, y(0) = 0' }, { x: X0 + LEN * SX, y: AY, r: 16, name: 'the end fixed at x = L, y(L) = 0' },
      { x: RX, y: AY - RR, r: 22, name: `the string turns about the x-axis at ω = ${fmt(w, 2)} rad/s` }];
    if (B > 0.004) [0.25, 0.5, 0.75].forEach((u) => { const x = (LEN * u) / shapeK / 2 + (LEN * Math.floor(u * shapeK)) / shapeK; const q = P(x, y(x), ph); hits.push({ x: q[0], y: q[1], r: 14, name: `the string, y = ${fmt(B, 2)} sin(${shapeK}πx/2)` }); });
    else hits.push({ x: X0 + SX, y: AY, r: 14, name: 'the string, on the axis: y = 0' });
    /* headline and readout: ρω²/T against the ladder k²π²/L² */
    const lam = (RHO * w * w) / T, ladder = KS.map((j) => (j * j * PI * PI) / (LEN * LEN));
    if (k) {
      const cross = k === 1 ? 'with no crossing' : `crossing the axis ${k - 1} time${k === 2 ? '' : 's'}`;
      headline(ctx, `$\\komega = ${n(w)}$ rad/s, $T = ${n(T)}$ N: $\\rho\\komega^2/T = ${n(lam)} = ${k}^2\\pi^2/L^2$, and the string pops out ${cross}.`);
      ro.set(`\\frac{\\rho\\komega^2}{T} = \\frac{0.1\\cdot ${n(w)}^2}{${n(T)}} = ${n(lam)} = \\klambda = \\frac{${k}^2\\pi^2}{2^2}`, undefined, { form: 'on' });
    } else {
      const below = ladder.findIndex((v) => v > lam);
      const near = below < 0 ? '' : `, below the eigenvalue ${n(ladder[below])}`;
      headline(ctx, `$\\komega = ${n(w)}$ rad/s, $T = ${n(T)}$ N: $\\rho\\komega^2/T = ${n(lam)}$ is no eigenvalue${near}, so the string stays at $\\ky = 0$.`);
      ro.set(`\\frac{\\rho\\komega^2}{T} = \\frac{0.1\\cdot ${n(w)}^2}{${n(T)}} = ${n(lam)} \\neq \\frac{k^2\\pi^2}{2^2} = ${ladder.slice(0, 3).map((v) => n(v)).join(',\\ ')},\\ \\ldots`, undefined, { form: 'off' });
    }
  }
})();
};
