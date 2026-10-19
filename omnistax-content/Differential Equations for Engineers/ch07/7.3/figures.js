/* Figures for section 7.3 Singular points and the method of Frobenius. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['7.3'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, drag, dot, label, headline, register, readout, fmt, hover, tangent } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
/* a number as short as it is exact: 0.5, 1, 0.0025 (for the slider's grid, whose values have at most dec places) */
const t = (v, dec = 4) => { const s = (+v.toFixed(dec)).toString(); return s.replace('-', '−'); };
const tx = (v, dec = 4) => t(v, dec).replace('−', '-');
const clip = (ctx, box, draw) => { ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip(); draw(); ctx.restore(); };

/* Sim, Examples 7.3.1 and 7.3.2: the leading behaviour of a Frobenius-type solution near the singular point
   x = 0, y = x^r or (the second solution of a double root) y = x^r ln x, on x > 0 only. The reader's point at x
   carries the tangent of slope y′(x). Axes x 0 to 3, y −2 to 3; the curve and tangent are clipped to the box and a
   point past it is pinned at the edge. y′ = r x^(r−1) and y′ = x^(r−1)(r ln x + 1). */
(function () {
  const d = sim('sim-frobenius-exponent', 560);
  const shape = choice(d.controls, { label: 'shape', key: 'shape', value: 'pow', options: [
    { value: 'pow', label: 'y = xʳ' }, { value: 'log', label: 'y = xʳ ln x' }] });
  const rs = ctl(d.controls, { label: '\\kr', cls: 'eigenvalue', key: 'r', min: -1, max: 2, step: 0.05, value: 0.5, unit: '', dec: 2,
    specials: [{ at: 0 }, { at: 0.5 }, { at: 1 }] });
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 0.05, max: 3, step: 0.01, value: 0.1, unit: '', dec: 2 });
  const Y = { pow: (r) => (x) => Math.pow(x, r), log: (r) => (x) => Math.pow(x, r) * Math.log(x) };
  const DY = { pow: (r) => (x) => r * Math.pow(x, r - 1), log: (r) => (x) => Math.pow(x, r - 1) * (r * Math.log(x) + 1) };
  const rNow = () => Math.round(rs.v * 100) / 100;
  const P = drag(d, { x: xs, y: (x) => Y[shape.value](rNow())(x) });
  const ro = readout(d);
  const BOX = { l: 200, r: 1240, t: 120, b: 470 };
  let hits = [];
  hover(d.stage, () => hits);
  /* what y and y′ do as x → 0⁺ */
  function verdict(kind, r) {
    if (kind === 'pow') {
      if (r < 0) return `$\\ky = x^{${tx(r, 2)}}$ itself blows up at $x = 0$.`;
      if (r === 0) return '$\\ky = x^{0} = 1$ and $\\kyprime = 0$: nothing blows up.';
      if (r < 1) return `$\\ky \\to 0$ at $x = 0$, but $\\kyprime = ${tx(r, 2)}\\,x^{${tx(r - 1, 2)}}$ blows up there.`;
      if (r === 1) return '$\\ky = x$ and $\\kyprime = 1$ both stay finite at $x = 0$.';
      return `$\\ky$ and $\\kyprime = ${tx(r, 2)}\\,x^{${tx(r - 1, 2)}}$ both go to $0$ at $x = 0$.`;
    }
    if (r <= 0) return '$\\ky$ falls to $-\\infty$ at $x = 0$.';
    if (r <= 1) return '$\\ky \\to 0$ at $x = 0$, but its slope $\\kyprime$ falls to $-\\infty$ there.';
    return '$\\ky$ and $\\kyprime$ both go to $0$ at $x = 0$.';
  }
  function formula(kind, r) {
    const rr = tx(r, 2), rm = tx(r - 1, 2);
    if (kind === 'pow') {
      if (r === 0) return '\\ky = x^{0} = 1,\\quad \\kyprime = 0';
      if (r === 1) return '\\ky = x,\\quad \\kyprime = 1';
      return `\\ky = x^{${rr}},\\quad \\kyprime = ${rr}\\,x^{${rm}}`;
    }
    if (r === 0) return '\\ky = \\ln x,\\quad \\kyprime = \\frac{1}{x}';
    if (r === 1) return '\\ky = x\\ln x,\\quad \\kyprime = \\ln x + 1';
    return `\\ky = x^{${rr}}\\ln x,\\quad \\kyprime = x^{${rm}}\\,(${rr}\\ln x + 1)`;
  }
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), dc = C('derivative'), pc = C('point');
    const r = rNow(), kind = shape.value, f = Y[kind](r), df = DY[kind](r), x0 = Math.round(xs.v * 100) / 100;
    const ax = axes(ctx, BOX, [0, 3], [-2, 3], { xl: 'x', yl: 'y', nx: 6, ny: 5, fx: (v) => fmt(v, 1) });
    /* the curve on x > 0, sampled densely near the singular point (x = s²) */
    clip(ctx, ax.box, () => shape.curve(ctx, (v) => (s) => Y[v](r)(s * s), Math.sqrt(0.0004), Math.sqrt(3), (s) => ax.X(s * s), ax.Y, fc, 5, 400));
    tangent(ctx, ax, f, x0, dc, { df, w: 3 });
    dot(ctx, ax.X(0), ax.Y(0), pc, true, 10);
    const at = P.draw(ctx, ax, fc);
    const y0 = f(x0), s0 = df(x0);
    hits = [{ x: ax.X(0), y: ax.Y(0), r: 16, name: 'x = 0, the singular point of the equation' }];
    if (at) hits.push({ x: at.x, y: at.y, r: 16, name: `(${fmt(x0, 2)}, ${fmt(y0, 2)}) on the solution` });
    [0.6, 1.5, 2.4].forEach((s) => { const v = f(s); if (v > -2 && v < 3) hits.push({ x: ax.X(s), y: ax.Y(v), r: 14, name: kind === 'pow' ? `y = x^${fmt(r, 2)}` : `y = x^${fmt(r, 2)} ln x` }); });
    const tx1 = Math.min(3, x0 + 0.35), ty1 = y0 + s0 * (tx1 - x0);
    if (ty1 > -2 && ty1 < 3) hits.push({ x: ax.X(tx1), y: ax.Y(ty1), r: 14, name: `the tangent at x = ${fmt(x0, 2)}, of slope y′ = ${fmt(s0, 2)}` });
    headline(ctx, `$\\kr = ${tx(r, 2)}$: ${verdict(kind, r)}`);
    ro.set(`${formula(kind, r)},\\quad \\ky(${n(x0)}) = ${n(y0)},\\quad \\kyprime(${n(x0)}) = ${n(s0)}`, undefined, { form: kind });
  }
  still(d, draw);
})();

/* Figure 7.4: the Bessel functions, from their series. Left, J_p and J_{p+1} (60 terms, exact on the window
   to 1e−13) with their partial sums through k = K, each term the last times −(x/2)²/(k(k + ν)). Right, the
   second solutions of orders p and p + 1: J_{−p} and J_{−p−1} for a non-integer p (the same recurrence from
   (x/2)^(−ν)/Γ(1 − ν)), Y_n and Y_{n+1} at an integer p = n from the standard series of Y_n, which the book does
   not print (checked against SciPy to 1e−12). Axes x 0 to 10 (the book's), y −0.5 to 1 left and −2 to 1 right,
   held for every p and K; what leaves a box is clipped. */
(function () {
  const d = sim('sim-bessel', 600);
  const ps = ctl(d.controls, { label: 'p', cls: '', key: 'p', min: 0, max: 3, step: 0.05, value: 0, unit: '', dec: 2,
    detents: [0.5, 1.5, 2.5], specials: [{ at: 0 }, { at: 1 }, { at: 2 }, { at: 3 }] });
  const ks = ctl(d.controls, { label: 'K', cls: '', key: 'K', min: 0, max: 20, step: 1, value: 20, unit: '', dec: 0 });
  const ro = readout(d);
  const LB = { l: 120, r: 650, t: 130, b: 500 }, RB = { l: 800, r: 1330, t: 130, b: 500 };
  const LANCZOS = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059,
    12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
  const gamma = (z) => {
    if (z < 0.5) return Math.PI / (Math.sin(Math.PI * z) * gamma(1 - z));
    z -= 1; let a = LANCZOS[0]; const tt = z + 7.5;
    for (let i = 1; i < 9; i++) a += LANCZOS[i] / (z + i);
    return Math.sqrt(2 * Math.PI) * Math.pow(tt, z + 0.5) * Math.exp(-tt) * a;
  };
  /* 1/Γ(z), zero at the nonpositive integers */
  const rgamma = (z) => (z <= 0 && Math.abs(z - Math.round(z)) < 1e-9 ? 0 : 1 / gamma(z));
  /* Σ_{k=0}^{K} (−1)^k/(k! Γ(k + ν + 1)) (x/2)^(2k+ν), by the recurrence; ν ≥ 0, or ν < 0 not an integer */
  const J = (nu, K) => (x) => {
    if (x < 0 || (nu < 0 && x === 0)) return NaN;
    const h = x / 2; let term = Math.pow(h, nu) * rgamma(nu + 1), s = term;
    for (let k = 1; k <= K; k++) { term *= -(h * h) / (k * (k + nu)); s += term; }
    return s;
  };
  const EULER = 0.5772156649015329;
  const harm = (m) => { let s = 0; for (let j = 1; j <= m; j++) s += 1 / j; return s; };
  const fact = (m) => { let s = 1; for (let j = 2; j <= m; j++) s *= j; return s; };
  /* Y_n(x) = (2/π) J_n ln(x/2) − (1/π) Σ_{k<n} (n−k−1)!/k! (x/2)^(2k−n) − (1/π) Σ_k (−1)^k (ψ(k+1) + ψ(n+k+1)) (x/2)^(2k+n)/(k!(n+k)!) */
  const Yn = (nn) => (x) => {
    if (!(x > 0)) return NaN;
    const h = x / 2; let s1 = 0, s2 = 0, term = Math.pow(h, nn) / fact(nn);
    for (let k = 0; k < nn; k++) s1 += (fact(nn - k - 1) / fact(k)) * Math.pow(h, 2 * k - nn);
    for (let k = 0; k <= 60; k++) { if (k) term *= -(h * h) / (k * (k + nn)); s2 += term * (-2 * EULER + harm(k) + harm(nn + k)); }
    return (2 / Math.PI) * J(nn, 60)(x) * Math.log(h) - s1 / Math.PI - s2 / Math.PI;
  };
  const sub = (v) => t(v, 2);
  /* a label spot on a curve: its highest point inside the frame between x = 0.8 and 9.6 */
  function spot(f, ax) {
    let best = null;
    for (let x = 0.8; x <= 9.6; x += 0.05) { const y = f(x); if (y > ax.yr[0] + 0.08 && y < ax.yr[1] - 0.12 && (!best || y > best[1])) best = [x, y]; }
    return best;
  }
  /* two label spots close enough to collide: the first label goes left of its peak and the second right of its own */
  const nearAt = (ax, at) => !!(at[0] && at[1] && Math.abs(ax.X(at[1][0]) - ax.X(at[0][0])) < 90 && Math.abs(ax.Y(at[1][1]) - ax.Y(at[0][1])) < 40);
  function labels(ctx, ax, list, color) {
    const at = list.map(([f]) => spot(f, ax));
    list.forEach(([, s], i) => {
      const p = at[i]; if (!p) return;
      const near = i > 0 && nearAt(ax, at);
      const side = near ? 'right' : list.length > 1 && i === 0 && nearAt(ax, at) ? 'left' : 'above';
      label(ctx, s, ax.X(p[0]), ax.Y(p[1]), { side, color, size: 22, weight: 600 });
    });
  }
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), sc = C('series');
    const p = Math.round(ps.v * 100) / 100, K = Math.round(ks.v), whole = Math.abs(p - Math.round(p)) < 1e-9;
    const nn = Math.round(p);
    const L = axes(ctx, LB, [0, 10], [-0.5, 1], { xl: 'x', yl: 'y', nx: 4, ny: 6, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 2) });
    const R = axes(ctx, RB, [0, 10], [-2, 1], { xl: 'x', yl: 'y', nx: 4, ny: 6, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 1) });
    const Ja = J(p, 60), Jb = J(p + 1, 60), Sa = J(p, K), Sb = J(p + 1, K);
    plot(ctx, L, Ja, fc, { w: 5 });
    plot(ctx, L, Jb, fc, { w: 5 });
    plot(ctx, L, Sa, sc, { w: 3 });
    plot(ctx, L, Sb, sc, { w: 3 });
    const Ua = whole ? Yn(nn) : J(-p, 60), Ub = whole ? Yn(nn + 1) : J(-(p + 1), 60);
    plot(ctx, R, Ua, fc, { w: 5 });
    plot(ctx, R, Ub, fc, { w: 5 });
    const nameA = `J_{${sub(p)}}`, nameB = `J_{${sub(p + 1)}}`;
    const nameU = whole ? `Y_{${nn}}` : `J_{−${sub(p)}}`, nameV = whole ? `Y_{${nn + 1}}` : `J_{−${sub(p + 1)}}`;
    labels(ctx, L, [[Ja, nameA], [Jb, nameB]], fc);
    labels(ctx, R, [[Ua, nameU], [Ub, nameV]], fc);
    /* how far the partial sums stay within 0.01 of both functions */
    let reach = 0;
    for (let x = 0.02; x <= 10.0001; x += 0.02) { if (Math.abs(Sa(x) - Ja(x)) >= 0.01 || Math.abs(Sb(x) - Jb(x)) >= 0.01) break; reach = x; }
    if (reach < 9.6) {
      const y = Math.max(-0.4, Math.min(0.9, Sa(reach)));
      label(ctx, 'partial sums', L.X(reach), L.Y(y), { side: y > 0.25 ? 'below' : 'above', color: sc, size: 20, weight: 600 });
    }
    hits = [];
    [2, 5, 8].forEach((x) => {
      [[Ja, `${nameA.replace(/[{}]/g, '')}, a Bessel function of the first kind`, L], [Jb, `${nameB.replace(/[{}]/g, '')}, a Bessel function of the first kind`, L],
        [Ua, whole ? `${nameU.replace(/[{}]/g, '')}, a Bessel function of the second kind` : `${nameU.replace(/[{}]/g, '')}, a Bessel function of the first kind of negative order`, R],
        [Ub, whole ? `${nameV.replace(/[{}]/g, '')}, a Bessel function of the second kind` : `${nameV.replace(/[{}]/g, '')}, a Bessel function of the first kind of negative order`, R]]
        .forEach(([f, name, ax]) => { const y = f(x); if (y > ax.yr[0] && y < ax.yr[1]) hits.push({ x: ax.X(x), y: ax.Y(y), r: 12, name }); });
      [[Sa, nameA], [Sb, nameB]].forEach(([f, nm]) => { const y = f(x); if (y > -0.5 && y < 1 && Math.abs(y - (nm === nameA ? Ja : Jb)(x)) > 0.03) hits.push({ x: L.X(x), y: L.Y(y), r: 12, name: `the partial sum of ${nm.replace(/[{}]/g, '')} through k = ${K}` }); });
    });
    const P = tx(p, 2), Q = tx(p + 1, 2), p2 = tx(p * p, 4);
    let head;
    if (whole && nn === 0) head = '$p = 0$: the roots $\\pm p$ of the indicial equation coincide, and $\\kY_{0}$, which falls to $-\\infty$ at $x = 0$, is the second solution.';
    else if (whole) head = `$p = ${nn}$: $\\kJ_{-${nn}} = ${nn % 2 ? '-' : ''}\\kJ_{${nn}}$ is no new solution; $\\kY_{${nn}}$, which falls to $-\\infty$ at $x = 0$, is.`;
    else head = `$p = ${P}$: $\\kJ_{-${P}}$ is unbounded at $x = 0$ and $\\kJ_{${P}}$ is not, so the two are linearly independent.`;
    headline(ctx, head);
    const eq = p === 0 ? 'x^2\\kydprime + x\\kyprime + x^2\\ky = 0' : `x^2\\kydprime + x\\kyprime + (x^2 - ${p2})\\ky = 0`;
    const second = whole ? `\\kY_{${nn}}(x)` : `\\kJ_{-${P}}(x)`;
    const plus = (v) => (v === 0 ? '' : `+${tx(v, 2)}`);
    const series = `\\kJ_{${P}}(x) \\approx \\sum_{k=0}^{${K}} \\frac{(-1)^k}{k!\\,\\kGamma(k${plus(p)}+1)}\\left(\\frac{x}{2}\\right)^{2k${plus(p)}}`;
    const far = reach >= 10 - 1e-9 ? 'over the whole window, $0 \\le x \\le 10$' : `out to about $x = ${fmt(reach, 2)}$`;
    ro.set(`${eq},\\quad \\ky = A\\kJ_{${P}}(x) + B${second}`,
      `$${series}$ and its partner for $\\kJ_{${Q}}$ stay within $0.01$ of the functions ${far}.`, { form: whole ? 'Y' : 'J' });
  }
  still(d, draw);
})();
};
