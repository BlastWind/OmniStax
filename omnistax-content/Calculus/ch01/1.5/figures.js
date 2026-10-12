/* Figures for section 1.5 Exponential and Logarithmic Functions. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['1.5'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, tangent, drag, dot, line, text, label, headline, register, readout, vbracket, fmt } = F;
const sim = (id, H) => F.sim(root, id, H);
const drop = (ctx, x1, y1, x2, y2) => line(ctx, x1, y1, x2, y2, alpha(PAL.ink, 0.4), 2.5, [4, 8]);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
/* a number as TeX writes it, trailing zeros dropped: 2, 2.37, -0.77 */
const q = (v, dec = 2) => String(+v.toFixed(dec)).replace(/^-0$/, '0');
/* the same for a headline, with a true minus */
const qh = (v, dec = 2) => q(v, dec).replace('-', '−');
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;

/* Figure 1.43: xᵇ against bˣ on one base. Axes fixed at −3 to 8 by 0 to 70, which hold every crossing for b in [1.5, 3]. */
(function () {
  const d = sim('sim-power-exponential', 540);
  const b = ctl(d.controls, { label: 'b', cls: '', key: 'b', min: 1.5, max: 3, step: 0.01, value: 2, unit: '', dec: 2, detents: [2, 3] });
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: -3, max: 8, step: 0.01, value: 5, unit: '', dec: 2 });
  const P = drag(d, { x: xs });
  const ro = readout(d);
  const BOX = { l: 200, r: 1260, t: 90, b: 450 }, TOP = 70;
  const pw = (x) => Math.pow(x, b.v), ex = (x) => Math.pow(b.v, x);
  /* where xᵇ = bˣ: sign changes of the difference, refined by bisection */
  const crossings = () => {
    const g = (x) => pw(x) - ex(x), out = [], N = 1100;
    let x0 = -3, g0 = g(x0);
    for (let i = 1; i <= N; i++) {
      const x1 = -3 + (11 * i) / N, g1 = g(x1);
      if (Number.isFinite(g0) && Number.isFinite(g1)) {
        if (g1 === 0) out.push(x1);
        else if (g0 * g1 < 0) { let a = x0, c = x1; for (let k = 0; k < 50; k++) { const m = (a + c) / 2; if (g(a) * g(m) <= 0) c = m; else a = m; } out.push((a + c) / 2); }
      }
      x0 = x1; g0 = g1;
    }
    return out.filter((x, i) => i === 0 || x - out[i - 1] > 1e-6);
  };
  /* where a rising curve leaves the box: its top edge, or the right edge */
  const exit = (f) => { for (let x = 8; x >= -3; x -= 0.01) { const y = f(x); if (Number.isFinite(y) && y <= TOP) return [x, y]; } return [8, 0]; };
  function draw() {
    const { ctx } = begin(d.c);
    const cp = F.ref('power-curve'), ce = F.ref('exp-curve'), pc = C('point'), B = b.v, x = xs.v, yp = pw(x), ye = ex(x);
    const ax = axes(ctx, BOX, [-3, 8], [0, TOP], { xl: 'x', yl: 'y', nx: 11, ny: 7 });
    plot(ctx, ax, pw, cp);
    plot(ctx, ax, ex, ce);
    const [px, py] = exit(pw), [qx, qy] = exit(ex);
    label(ctx, `x^{${q(B)}}`, ax.X(px), ax.Y(py), { side: 'right', color: cp, size: 24 });
    label(ctx, `${q(B)}^x`, ax.X(qx), ax.Y(qy), { side: 'left', color: ce, size: 24 });
    const cs = crossings();
    cs.forEach((c) => { const y = ex(c); if (y <= TOP) dot(ctx, ax.X(c), ax.Y(y), pc, true, 8); });
    line(ctx, ax.X(x), BOX.t, ax.X(x), BOX.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    if (Number.isFinite(yp) && yp <= TOP) dot(ctx, ax.X(x), ax.Y(yp), cp, true, 9);
    if (ye <= TOP) dot(ctx, ax.X(x), ax.Y(ye), ce, true, 9);
    P.draw(ctx, ax, PAL.ink);
    const pwS = `${qh(x)}^{${q(B)}}`, exS = `${q(B)}^{${qh(x)}}`;
    headline(ctx, !Number.isFinite(yp)
      ? `$x = ${qh(x)}$: $x^{${q(B)}}$ is not defined for $x \\lt 0$, while $${exS} = ${qh(ye)}$.`
      : Math.abs(yp - ye) < 0.005 ? `$x = ${qh(x)}$: the curves cross, $${pwS} = ${exS} = ${qh(ye)}$.`
        : `$x = ${qh(x)}$: $${ye > yp ? exS : pwS} = ${qh(Math.max(yp, ye))}$ is larger than $${ye > yp ? pwS : exS} = ${qh(Math.min(yp, ye))}$.`);
    ro.set(cs.length ? `x^{${q(B)}} = ${q(B)}^{x}\\ \\text{at}\\ x = ${cs.map((c) => q(c)).join(',\\ ')}` : `x^{${q(B)}} \\ne ${q(B)}^{x}\\ \\text{for every}\\ x`);
  }
  still(d, draw);
})();

/* Figure 1.44: bˣ for a base on a slider, the book's four bases drawn faint. The book's axes, −3 to 3 by 0 to 4. */
(function () {
  const d = sim('sim-exponential-base', 520);
  const b = ctl(d.controls, { label: 'b', cls: '', key: 'b', min: 0.2, max: 5, step: 0.01, value: 2, unit: '', dec: 2, detents: [0.25, 0.5, 2, 4], specials: [{ at: 1 }] });
  const ro = readout(d);
  const BOX = { l: 330, r: 1070, t: 80, b: 450 };
  const BOOK = [[4, '4^x'], [2, '2^x'], [0.5, '(1/2)^x'], [0.25, '(1/4)^x']];
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), B = b.v, one = Math.abs(B - 1) < 0.005;
    const ax = axes(ctx, BOX, [-3, 3], [0, 4], { xl: 'x', yl: 'y', nx: 6, ny: 4 });
    BOOK.forEach(([k, name]) => {
      plot(ctx, ax, (x) => k ** x, alpha(fc, 0.3), { w: 3 });
      const xe = Math.log(3.6) / Math.log(k);
      label(ctx, name, ax.X(xe), ax.Y(3.6), { side: k > 1 ? 'right' : 'left', color: PAL.muted, size: 18, leader: false });
    });
    plot(ctx, ax, (x) => B ** x, fc);
    dot(ctx, ax.X(0), ax.Y(1), C('point'), true, 9);
    label(ctx, '(0, 1)', ax.X(0), ax.Y(1), { side: 'below', gap: 26 });
    const all = typed('set', '(-\\infty, \\infty)'), pos = typed('set', '(0, \\infty)');
    headline(ctx, one ? '$b = 1$: $1^{x} = 1$ for every $x$, a constant, so $1$ is not a base.'
      : B > 1 ? `$b = ${q(B)} \\gt 1$: $${q(B)}^{x}$ is increasing on $${all}$.` : `$0 \\lt b = ${q(B)} \\lt 1$: $${q(B)}^{x}$ is decreasing on $${all}$.`);
    ro.set(one ? `1^{x} = 1:\\quad \\text{range}\\ ${typed('set', '\\{1\\}')}` : `\\kf(x) = ${q(B)}^{x}:\\quad \\text{domain}\\ ${all},\\ \\text{range}\\ ${pos}`, undefined, { form: one ? 'one' : B > 1 ? 'up' : 'down' });
  }
  still(d, draw);
})();

/* Figure 1.45: the tangent to bˣ at (0, 1), whose slope is 1 only at b = e. The book's axes, −3 to 3 by 0 to 4. */
(function () {
  const d = sim('sim-e-tangent', 520);
  const b = ctl(d.controls, { label: 'b', cls: '', key: 'b', min: 1.5, max: 4, step: 0.01, value: Math.E, unit: '', dec: 2, specials: [{ at: Math.E, label: 'e' }] });
  const ro = readout(d);
  const BOX = { l: 330, r: 1070, t: 80, b: 450 };
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), lc = C('line'), dc = C('derivative'), B = b.v, isE = Math.abs(B - Math.E) < 0.004, name = isE ? 'e' : q(B);
    const f = (x) => B ** x;
    const ax = axes(ctx, BOX, [-3, 3], [0, 4], { xl: 'x', yl: 'y', nx: 6, ny: 4 });
    plot(ctx, ax, f, fc);
    const m = tangent(ctx, ax, f, 0, lc, { df: (x) => Math.log(B) * B ** x });
    line(ctx, ax.X(0), ax.Y(1), ax.X(1), ax.Y(1), dc, 3);
    line(ctx, ax.X(1), ax.Y(1), ax.X(1), ax.Y(1 + m), dc, 4);
    text(ctx, '1', ax.X(0.5), ax.Y(1) + 22, dc, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, isE ? '1' : fmt(m, 2), ax.X(1) + 16, ax.Y(1 + m / 2), dc, { size: 22, weight: 600, bg: PAL.panel });
    dot(ctx, ax.X(0), ax.Y(1), C('point'), true, 9);
    label(ctx, '(0, 1)', ax.X(0), ax.Y(1), { side: 'left', gap: 24 });
    const xe = Math.log(3.7) / Math.log(B);
    label(ctx, `y = ${name}^x`, ax.X(xe), ax.Y(3.7), { side: 'left', color: fc, size: 24 });
    headline(ctx, isE ? 'At $x = 0$ the tangent to $e^{x}$ has slope $1$.' : `At $x = 0$ the tangent to $${name}^{x}$ has slope $${fmt(m, 2)}$, ${m < 1 ? 'less' : 'more'} than $1$.`);
    ro.set(`\\text{slope of the tangent to}\\ ${name}^{x}\\ \\text{at}\\ ${typed('point', '(0, 1)')} ${isE ? '=' : '\\approx'} ${typed('derivative', isE ? '1' : fmt(m, 2))}`, undefined, { form: isE });
  }
  still(d, draw);
})();

/* Figure 1.46: a point on eˣ and its mirror on ln x. Square axes, −3 to 4 each way, so y = x runs at 45°. */
(function () {
  const d = sim('sim-exp-ln-mirror', 660);
  const a = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: -3, max: 1.38, step: 0.01, value: 1, unit: '', dec: 2 });
  const P = drag(d, { x: a, y: Math.exp });
  const ro = readout(d);
  const BOX = { l: 455, r: 945, t: 95, b: 585 };
  function draw() {
    const { ctx } = begin(d.c);
    const ce = F.ref('exp-e'), cl = F.ref('ln'), lc = C('line'), pc = C('point'), av = a.v, ea = Math.exp(av);
    const ax = axes(ctx, BOX, [-3, 4], [-3, 4], { xl: 'x', yl: 'y', nx: 7, ny: 7 });
    line(ctx, ax.X(-3), ax.Y(-3), ax.X(4), ax.Y(4), lc, 3, [10, 10]);
    plot(ctx, ax, Math.exp, ce);
    plot(ctx, ax, Math.log, cl);
    label(ctx, 'y = e^x', ax.X(0.9), ax.Y(Math.exp(0.9)), { side: 'left', color: ce, size: 22, gap: 90 });
    label(ctx, 'y = ln x', ax.X(3.2), ax.Y(Math.log(3.2)), { side: 'below', color: cl, size: 22, gap: 110 });
    label(ctx, 'y = x', ax.X(-2.4), ax.Y(-2.4), { side: 'right', color: lc, size: 22, gap: 24 });
    const A = [ax.X(av), ax.Y(ea)], B = [ax.X(ea), ax.Y(av)], M = [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2];
    line(ctx, A[0], A[1], B[0], B[1], alpha(PAL.ink, 0.5), 2.5, [10, 10]);
    const s = 13 / Math.SQRT2, toB = Math.sign(B[0] - A[0]) || 1;
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.6); ctx.lineWidth = 2; ctx.beginPath();
    ctx.moveTo(M[0] + s, M[1] - s); ctx.lineTo(M[0] + s + toB * s, M[1] - s + toB * s); ctx.lineTo(M[0] + toB * s, M[1] + toB * s); ctx.stroke(); ctx.restore();
    dot(ctx, B[0], B[1], pc, true, 9);
    P.draw(ctx, ax, pc);
    label(ctx, `(${qh(av)}, ${qh(ea)})`, A[0], A[1], { side: av > 0.6 ? 'right' : 'above', gap: 28 });
    label(ctx, `(${qh(ea)}, ${qh(av)})`, B[0], B[1], { side: av < -1.5 ? 'right' : 'below', gap: 28 });
    headline(ctx, `$(${qh(av)}, ${qh(ea)})$ on $y = e^{x}$ mirrors $(${qh(ea)}, ${qh(av)})$ on $y = \\ln x$.`);
    ro.set(`e^{${q(av)}} = ${q(ea)} \\iff \\ln ${q(ea)} = ${q(av)}`);
  }
  still(d, draw);
})();

/* Figure 1.47: log₂, ln and log₁₀ read at one x. Axes fixed at 0 to 10 by −3 to 4. */
(function () {
  const d = sim('sim-log-bases', 540);
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 0.1, max: 10, step: 0.01, value: 8, unit: '', dec: 2, specials: [{ at: 1 }, { at: 2 }, { at: Math.E, label: 'e' }, { at: 10 }] });
  const P = drag(d, { x: xs });
  const ro = readout(d);
  const BOX = { l: 200, r: 1200, t: 90, b: 470 };
  const LOGS = [['log-2', 2, 'log_2 x'], ['ln', Math.E, 'ln x'], ['log-10', 10, 'log_{10} x']];
  function draw() {
    const { ctx } = begin(d.c);
    const x = xs.v, isE = Math.abs(x - Math.E) < 0.004;
    const ax = axes(ctx, BOX, [0, 10], [-3, 4], { xl: 'x', yl: 'y', nx: 10, ny: 7 });
    line(ctx, ax.X(x), BOX.t, ax.X(x), BOX.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    LOGS.forEach(([id, base, name]) => {
      const c = F.ref(id), f = (t) => Math.log(t) / Math.log(base);
      plot(ctx, ax, f, c);
      label(ctx, name, ax.X(10), ax.Y(f(10)), { side: 'right', color: c, size: 22, gap: 18, leader: false });
      const y = f(x);
      if (y >= -3 && y <= 4) dot(ctx, ax.X(x), ax.Y(y), c, true, 9);
    });
    P.draw(ctx, ax, PAL.ink);
    const xt = isE ? 'e' : q(x), xh = isE ? 'e' : qh(x), [l2, ln, l10] = LOGS.map(([, base]) => Math.log(x) / Math.log(base));
    headline(ctx, `$x = ${xh}$: $\\log_2 ${xh} = ${qh(l2)}$, $\\ln ${xh} = ${qh(ln)}$, $\\log_{10} ${xh} = ${qh(l10)}$`);
    ro.set(`\\log_2 ${xt} = \\dfrac{\\ln ${xt}}{\\ln 2} = \\dfrac{${q(ln, 3)}}{${q(Math.LN2, 3)}} = ${q(l2, 3)}`);
  }
  still(d, draw);
})();

/* Example 1.39: two seismograph traces on one amplitude scale, the stronger at full height. */
(function () {
  const d = sim('sim-richter', 540);
  const r1 = ctl(d.controls, { label: 'R_1', cls: '', key: 'R1', min: 4, max: 10, step: 0.1, value: 9, unit: '', dec: 1 });
  const r2 = ctl(d.controls, { label: 'R_2', cls: '', key: 'R2', min: 4, max: 10, step: 0.1, value: 7.3, unit: '', dec: 1 });
  const ro = readout(d);
  const L = 250, R = 1150, ROWS = [190, 400], FULL = 95;
  /* one recorded quake: quiet, a sharp arrival, then a ringing decay */
  const wave = (t) => {
    const env = t < 0.18 ? 0.04 : Math.exp(-(t - 0.18) * 5.5) * (1 - Math.exp(-(t - 0.18) * 60));
    return env * (0.62 * Math.sin(97 * t) + 0.28 * Math.sin(173 * t + 1.1) + 0.1 * Math.sin(311 * t + 0.4));
  };
  const PEAK = (() => { let m = 0; for (let i = 0; i <= 2000; i++) m = Math.max(m, Math.abs(wave(i / 2000))); return m; })();
  const ratioTex = (r) => (r >= 1000 ? Math.round(r).toLocaleString('en-US').replace(/,/g, '{,}') : String(+r.toPrecision(3)));
  function draw() {
    const { ctx } = begin(d.c);
    const R1 = r1.v, R2 = r2.v, diff = +(R1 - R2).toFixed(1), ratio = 10 ** diff;
    const amps = diff >= 0 ? [FULL, FULL / ratio] : [FULL * ratio, FULL];
    [[F.ref('quake-1'), ROWS[0], amps[0], `R_1 = ${fmt(R1, 1)}`, 'A_1'], [F.ref('quake-2'), ROWS[1], amps[1], `R_2 = ${fmt(R2, 1)}`, 'A_2']].forEach(([c, y, A, name, an]) => {
      line(ctx, L, y, R, y, PAL.rule, 1.5);
      ctx.save(); ctx.strokeStyle = c; ctx.lineWidth = 2.5; ctx.lineJoin = 'round'; ctx.beginPath();
      for (let i = 0; i <= 900; i++) { const t = i / 900, px = L + (R - L) * t, py = y - (A * wave(t)) / PEAK; if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py); }
      ctx.stroke(); ctx.restore();
      text(ctx, name, L - 24, y, c, { size: 24, weight: 600, align: 'right' });
      vbracket(ctx, R + 40, y - Math.max(A, 1), y + Math.max(A, 1), c, an, 1);
    });
    const rt = ratioTex(diff >= 0 ? ratio : 1 / ratio);
    headline(ctx, diff === 0 ? 'Equal magnitudes: $A_1 = A_2$, and the two earthquakes are equally intense.'
      : diff > 0 ? `$A_1/A_2 = 10^{${q(diff, 1)}} \\approx ${rt}$: the first earthquake is about ${rt.replaceAll('{,}', ',')} times as intense.`
        : `$A_2/A_1 = 10^{${q(-diff, 1)}} \\approx ${rt}$: the second earthquake is about ${rt.replaceAll('{,}', ',')} times as intense.`);
    ro.set(`R_1 - R_2 = ${q(R1, 1)} - ${q(R2, 1)} = ${q(diff, 1)} = \\log_{10}\\left(\\dfrac{A_1}{A_2}\\right)`);
  }
  still(d, draw);
})();

/* The hanging chain h(x) = a cosh(x/a) + c between supports at x = ±4, 5 high; c keeps the ends on them.
   One scale both ways, −5 to 5 by 0 to 6, so the chain hangs in its true shape. */
(function () {
  const d = sim('sim-catenary', 600);
  const a = ctl(d.controls, { label: 'a', cls: '', key: 'a', min: 2.2, max: 10, step: 0.01, value: 3, unit: '', dec: 2 });
  const ro = readout(d);
  const BOX = { l: 350, r: 1050, t: 100, b: 520 }, HALF = 4, TALL = 5;
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), A = a.v, c = TALL - A * Math.cosh(HALF / A), h = (x) => A * Math.cosh(x / A) + c, low = A + c;
    const ax = axes(ctx, BOX, [-5, 5], [0, 6], { xl: 'x', yl: 'y', nx: 10, ny: 6 });
    [-HALF, HALF].forEach((x) => { ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.75); ctx.fillRect(ax.X(x) - 7, ax.Y(TALL) - 4, 14, ax.Y(0) - ax.Y(TALL) + 4); ctx.restore(); });
    plot(ctx, ax, h, fc, { x: [-HALF, HALF] });
    drop(ctx, ax.X(0), ax.Y(low), ax.X(0), ax.Y(TALL));
    line(ctx, ax.X(-HALF), ax.Y(TALL), ax.X(HALF), ax.Y(TALL), alpha(PAL.ink, 0.3), 2, [10, 10]);
    vbracket(ctx, ax.X(0) + 60, ax.Y(TALL), ax.Y(low), PAL.muted, `${fmt(TALL - low, 2)}`, 1);
    dot(ctx, ax.X(0), ax.Y(low), C('point'), true, 9);
    label(ctx, `(0, ${fmt(low, 2)})`, ax.X(0), ax.Y(low), { side: 'left', gap: 26 });
    headline(ctx, `$a = ${qh(A)}$: the chain sags $${qh(TALL - low)}$ below the supports, its low point at $h(0) = ${qh(low)}$.`);
    ro.set(`h(x) = ${q(A)}\\cosh\\left(\\dfrac{x}{${q(A)}}\\right) ${c < 0 ? '-' : '+'} ${q(Math.abs(c))},\\quad h(\\pm 4) = 5`);
  }
  still(d, draw);
})();

/* Figure 1.50: (cosh t, sinh t) on the right branch of x² − y² = 1. One scale both ways, −1 to 4 by −4 to 4. */
(function () {
  const d = sim('sim-unit-hyperbola', 590);
  const t = ctl(d.controls, { label: 't', cls: '', key: 't', min: -2, max: 2, step: 0.01, value: 1, unit: '', dec: 2, specials: [{ at: 0 }] });
  const ro = readout(d);
  const BOX = { l: 575, r: 825, t: 100, b: 500 };
  function draw() {
    const { ctx } = begin(d.c);
    const pc = C('point'), tv = t.v, X0 = Math.cosh(tv), Y0 = Math.sinh(tv);
    const ax = axes(ctx, BOX, [-1, 4], [-4, 4], { xl: 'x', yl: 'y', nx: 5, ny: 8 });
    ctx.save(); ctx.beginPath(); ctx.rect(BOX.l, BOX.t, BOX.r - BOX.l, BOX.b - BOX.t); ctx.clip();
    F.curve(ctx, Math.sinh, -2.2, 2.2, (s) => ax.X(Math.cosh(s)), ax.Y, PAL.ink, 5, 160);
    ctx.restore();
    label(ctx, 'x^2 − y^2 = 1', ax.X(Math.cosh(-1)), ax.Y(Math.sinh(-1)), { side: 'right', size: 22, gap: 100 });
    drop(ctx, ax.X(X0), ax.Y(Y0), ax.X(X0), ax.Y(0));
    drop(ctx, ax.X(X0), ax.Y(Y0), ax.X(0), ax.Y(Y0));
    const up = Y0 >= 0 ? -1 : 1;
    text(ctx, 'cosh t', ax.X(X0) + 10, ax.Y(0) + up * 18, PAL.ink, { size: 20, weight: 600, bg: PAL.panel });
    text(ctx, 'sinh t', ax.X(0) + 10, ax.Y(Y0) + up * 18, PAL.ink, { size: 20, weight: 600, bg: PAL.panel });
    dot(ctx, ax.X(X0), ax.Y(Y0), pc, true, 9);
    label(ctx, '(cosh t, sinh t)', ax.X(X0), ax.Y(Y0), { side: 'right', gap: 24 });
    const c2 = X0 * X0, s2 = Y0 * Y0;
    const arg = tv < 0 ? `(${qh(tv)})` : qh(tv);
    headline(ctx, `$t = ${qh(tv)}$: $(\\cosh ${arg}, \\sinh ${arg}) = (${qh(X0)}, ${qh(Y0)})$`);
    ro.set(`\\cosh^2(${q(tv)}) - \\sinh^2(${q(tv)}) = ${c2.toFixed(3)} - ${s2.toFixed(3)} = 1`);
  }
  still(d, draw);
})();

/* Figure 1.51: the six hyperbolic functions, one at a time with their guides. The book's axes, −3 to 3 by −4 to 4. */
(function () {
  const d = sim('sim-hyperbolic-graphs', 540);
  const E = Math.exp;
  const FN = {
    cosh: { f: Math.cosh, tex: '\\cosh', def: '\\dfrac{e^{X} + e^{-X}}{2}', num: (p, m) => `\\dfrac{${p} + ${m}}{2}`, guides: [[(x) => E(x) / 2, '½e^x', 1.95, 'right'], [(x) => E(-x) / 2, '½e^{−x}', -1.95, 'left']] },
    sinh: { f: Math.sinh, tex: '\\sinh', def: '\\dfrac{e^{X} - e^{-X}}{2}', num: (p, m) => `\\dfrac{${p} - ${m}}{2}`, guides: [[(x) => E(x) / 2, '½e^x', 1.95, 'right'], [(x) => -E(-x) / 2, '−½e^{−x}', -1.95, 'left']] },
    sech: { f: (x) => 1 / Math.cosh(x), tex: '\\operatorname{sech}', def: '\\dfrac{2}{e^{X} + e^{-X}}', num: (p, m) => `\\dfrac{2}{${p} + ${m}}`, guides: [] },
    csch: { f: (x) => 1 / Math.sinh(x), tex: '\\operatorname{csch}', def: '\\dfrac{2}{e^{X} - e^{-X}}', num: (p, m) => `\\dfrac{2}{${p} - ${m}}`, guides: [], poles: [0] },
    tanh: { f: Math.tanh, tex: '\\tanh', def: '\\dfrac{e^{X} - e^{-X}}{e^{X} + e^{-X}}', num: (p, m) => `\\dfrac{${p} - ${m}}{${p} + ${m}}`, guides: [], levels: true },
    coth: { f: (x) => Math.cosh(x) / Math.sinh(x), tex: '\\coth', def: '\\dfrac{e^{X} + e^{-X}}{e^{X} - e^{-X}}', num: (p, m) => `\\dfrac{${p} + ${m}}{${p} - ${m}}`, guides: [], poles: [0], levels: true },
  };
  const pick = choice(d.controls, { label: '', options: Object.keys(FN).map((k) => ({ value: k, label: k })), value: 'cosh', aria: 'which hyperbolic function' });
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: -3, max: 3, step: 0.01, value: 1, unit: '', dec: 2 });
  const P = drag(d, { x: xs, y: (x) => FN[pick.value].f(x) });
  const ro = readout(d);
  const BOX = { l: 330, r: 1070, t: 50, b: 450 };
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), lc = C('line');
    const ax = axes(ctx, BOX, [-3, 3], [-4, 4], { xl: 'x', yl: 'y', nx: 6, ny: 8 });
    [...new Set([pick.from, pick.value])].forEach((v) => pick.only(ctx, v, () => {
      const g = FN[v];
      g.guides.forEach(([gf, name, gx, side]) => { ctx.save(); ctx.setLineDash([10, 10]); plot(ctx, ax, gf, alpha(fc, 0.6), { w: 3 }); ctx.restore(); label(ctx, name, ax.X(gx), ax.Y(gf(gx)), { side, color: PAL.muted, size: 20, leader: false }); });
      if (g.levels) [1, -1].forEach((k) => { line(ctx, BOX.l, ax.Y(k), BOX.r, ax.Y(k), lc, 3, [10, 10]); label(ctx, k > 0 ? 'y = 1' : 'y = −1', ax.X(k > 0 ? -2.5 : 2.5), ax.Y(k), { side: k > 0 ? 'above' : 'below', color: lc, size: 20, leader: false }); });
      plot(ctx, ax, g.f, fc, g.poles ? { poles: g.poles } : {});
    }));
    const g = FN[pick.value], x = xs.v, y = g.f(x), ok = Number.isFinite(y);
    if (ok) { drop(ctx, ax.X(x), ax.Y(Math.max(-4, Math.min(4, y))), ax.X(x), ax.Y(0)); P.draw(ctx, ax, C('point')); }
    else dot(ctx, ax.X(x), ax.Y(0), PAL.ink, false, 10);
    const X = q(x), negX = x < 0 ? q(-x) : x === 0 ? '0' : `-${X}`, p = q(E(x), 3), m = q(E(-x), 3);
    const def = g.def.replaceAll('e^{-X}', `e^{${negX}}`).replaceAll('e^{X}', `e^{${X}}`);
    ro.set(ok ? `${g.tex}(${X}) = ${def} = ${g.num(p, m)} = ${q(y, 3)}` : `${g.tex}(0)\\ \\text{is undefined}:\\ e^{0} - e^{0} = 0`, undefined, { form: pick.value });
  }
  still(d, draw);
})();

/* Table 1.12 as money: 1 dollar at 100% for one year, compounded n times, against eᵗ. Axes 0 to 1 year by 0 to 3 dollars. */
(function () {
  const d = sim('sim-compounding', 550);
  const N = { 1: 'annually', 2: 'twice a year', 4: 'quarterly', 12: 'monthly', 365: 'daily', inf: 'continuously' };
  const pick = choice(d.controls, { label: '', options: Object.entries(N).map(([value, lab]) => ({ value, label: lab })), value: '1', aria: 'how often the interest is compounded' });
  const ro = readout(d);
  const BOX = { l: 200, r: 1150, t: 115, b: 475 };
  const A = (v) => (v === 'inf' ? Math.exp : (t) => (1 + 1 / +v) ** Math.floor(+v * t + 1e-9));
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), lim = C('limit'), pc = C('point'), v = pick.value, k = pick.k, fa = A(pick.from), fb = A(v);
    const end = v === 'inf' ? Math.E : (1 + 1 / +v) ** +v;
    const ax = axes(ctx, BOX, [0, 1], [0, 3], { xl: 't, years', yl: 'A(t), dollars', nx: 4, ny: 3, fx: (u) => fmt(u, 2) });
    line(ctx, BOX.l, ax.Y(Math.E), BOX.r, ax.Y(Math.E), lim, 3, [10, 10]);
    text(ctx, 'e ≈ 2.718', BOX.r + 14, ax.Y(Math.E), lim, { size: 22, weight: 600 });
    plot(ctx, ax, Math.exp, alpha(fc, 0.3), { w: 3 });
    plot(ctx, ax, (t) => fa(t) + (fb(t) - fa(t)) * k, fc);
    drop(ctx, ax.X(1), ax.Y(end), ax.X(0), ax.Y(end));
    dot(ctx, ax.X(1), ax.Y(end), pc, true, 9);
    label(ctx, fmt(end, 4), ax.X(1), ax.Y(end), { side: end > 2.6 ? 'below' : 'above', gap: 26 });
    headline(ctx, v === 'inf' ? 'Compounded continuously, 1 dollar grows to $e \\approx 2.7183$ dollars in a year.' : `Compounded ${N[v]}, 1 dollar grows to ${fmt(end, 4)} dollars in a year.`);
    ro.set(v === 'inf' ? 'A(1) = e^{1} \\approx 2.7183' : `A(1) = \\left(1 + \\tfrac{1}{${v}}\\right)^{${v}} = ${fmt(end, 4)}`, undefined, { form: v === 'inf' });
  }
  still(d, draw);
})();
};
