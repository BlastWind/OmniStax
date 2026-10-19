/* Figures for section 4.4 Sine and cosine series. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.4'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, dot, line, text, label, headline, register, readout, fmt, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const PI = Math.PI;
const clip = (ctx, box, draw) => { ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip(); draw(); ctx.restore(); };
const nz = (v, dec) => (Math.abs(v) < 0.5 * Math.pow(10, -dec) ? 0 : v);
const cn = (v, dec = 2) => fmt(nz(v, dec), dec);                      /* canvas text, never −0.00 */
const tn = (v, dec = 2) => cn(v, dec).replace('−', '-');              /* the same for TeX */
const sig = (v, s = 3) => {                                           /* s significant figures, for TeX */
  if (Math.abs(v) < 1e-12) return '0';
  const dec = Math.max(0, s - 1 - Math.floor(Math.log10(Math.abs(v))));
  return tn(v, Math.min(dec, 6));
};
const dashed = (ctx, draw) => { ctx.save(); ctx.setLineDash([4, 8]); draw(); ctx.restore(); };
const seq = (s) => `\\htmlClass{kv-sequence}{${s}}`;

/* The functions on [0, L] the section and its exercises extend: the example's t(1 − t) on [0, 1] (Example
   4.4.1), (t − 1)² on [0, 1] (Exercises 4.4.4–4.4.5), t on [0, π] (4.4.6), sin t on [0, π] (4.4.7) and
   t² on [0, π] (Example 4.4.2). For each, the coefficients of its cosine series, a₀ = (2/L)∫₀ᴸ f and
   a_n = (2/L)∫₀ᴸ f cos(nπt/L), and of its sine series, b_n = (2/L)∫₀ᴸ f sin(nπt/L), in closed form (each
   checked with SymPy); `p` the power of n they fall like, `K` the constant of the leading term K/nᵖ, and
   `tail` what that power says about the extension. `yr` is the frame both extensions and every partial sum
   up to N = 30 fit in (the sine series of a jump overshoots it by about 9 % of the jump). */
const sgn = (n) => (n % 2 ? -1 : 1);                                   /* (−1)ⁿ */
const FUNCS = {
  par: { name: 't(1 − t)', tex: 't(1-t)', L: 1, Lname: '1', f: (t) => t * (1 - t), yr: [-0.3, 0.3], ny: 6,
    a0: 1 / 3, a: (n) => (-2 * (1 + sgn(n))) / (PI * PI * n * n), b: (n) => (4 * (1 - sgn(n))) / (PI ** 3 * n ** 3),
    cos: { p: 2, K: 4 / (PI * PI), tail: 'the even extension has corners at the integers but no jumps' },
    sin: { p: 3, K: 8 / PI ** 3, tail: 'the odd extension has neither jumps nor corners' } },
  sh: { name: '(t − 1)²', tex: '(t-1)^2', L: 1, Lname: '1', f: (t) => (t - 1) * (t - 1), yr: [-1.2, 1.2], ny: 6,
    a0: 2 / 3, a: (n) => 4 / (PI * PI * n * n), b: (n) => (2 * (2 * sgn(n) + PI * PI * n * n - 2)) / (PI ** 3 * n ** 3),
    cos: { p: 2, K: 4 / (PI * PI), tail: 'the even extension has corners but no jumps' },
    sin: { p: 1, K: 2 / PI, tail: 'the odd extension jumps at t = 0 and ±2, where f(0) = 1, and the sum overshoots beside each jump' } },
  lin: { name: 't', tex: 't', L: PI, Lname: 'π', f: (t) => t, yr: [-4, 4], ny: 4,
    a0: PI, a: (n) => (2 * (sgn(n) - 1)) / (PI * n * n), b: (n) => (-2 * sgn(n)) / n,
    cos: { p: 2, K: 4 / PI, tail: 'the even extension, |t| on [−π, π], has corners but no jumps' },
    sin: { p: 1, K: 2, tail: 'the odd extension jumps at t = ±π, and the sum overshoots beside each jump' } },
  sin: { name: 'sin t', tex: '\\sin t', L: PI, Lname: 'π', f: Math.sin, yr: [-1.2, 1.2], ny: 6 },
  sq: { name: 't²', tex: 't^2', L: PI, Lname: 'π', f: (t) => t * t, yr: [-12, 12], ny: 6,
    a0: (2 * PI * PI) / 3, a: (n) => (4 * sgn(n)) / (n * n), b: (n) => (-2 * sgn(n) * PI) / n + (4 * (sgn(n) - 1)) / (PI * n ** 3),
    cos: { p: 2, K: 4, tail: 'the even extension has corners but no jumps' },
    sin: { p: 1, K: 2 * PI, tail: 'the odd extension jumps at t = ±π, and the sum overshoots beside each jump' } },
};
/* t brought into (−L, L] one period 2L at a time */
const home = (t, L) => { const s = t - 2 * L * Math.round(t / (2 * L)); return s <= -L + 1e-12 ? s + 2 * L : s; };
const ext = (fn, odd) => (t) => { const s = home(t, fn.L); return s >= 0 ? fn.f(s) : odd ? -fn.f(-s) : fn.f(-s); };
/* x ticks at the multiples of L, named as the book names them */
const tickName = (fn) => (v) => {
  const m = Math.round(v / fn.L);
  if (m === 0) return '0';
  const s = fn.Lname === 'π' ? (Math.abs(m) === 1 ? 'π' : `${Math.abs(m)}π`) : String(Math.abs(m));
  return (m < 0 ? '−' : '') + s;
};
/* the jumps of an extension in [−2L, 2L]: where f(0) ≠ 0 (odd, at the even multiples of L) and where
   f(L) ≠ 0 (odd, at the odd multiples); the value taken there and the limit from the other side */
function jumps(fn, odd) {
  if (!odd) return { holes: [], dots: [] };
  const L = fn.L, holes = [], dots = [], f0 = fn.f(0), fL = fn.f(L);
  [-2, -1, 0, 1, 2].forEach((m) => {
    const x = m * L, even = m % 2 === 0;
    if (even && Math.abs(f0) > 1e-9) { dots.push([x, f0]); holes.push([x, -f0]); }
    if (!even && Math.abs(fL) > 1e-9) { dots.push([x, fL]); holes.push([x, -fL]); }
  });
  return { holes, dots };
}

/* Figure 4.12: the odd and the even periodic extension of one f on [0, L], side by side as the book prints
   them, t from −2L to 2L; f on its own interval [0, L] bold in both. The probe t (−2L to 2L) is brought
   home to s in (−L, L]; for s < 0 the extension takes −f(−s) or f(−s), so the point of f it copies, at
   |s| on the bold stretch, is marked hollow and joined to the probe's point by a dotted guide: a turn
   through the origin for the odd one, a mirror for the even one. Each pane's frame is the chosen f's,
   `yr` above; a change of f rescales it while the old curves fade. */
(function () {
  const d = sim('sim-extensions', 560);
  const KEYS = ['par', 'sh', 'lin', 'sin'];
  const pick = choice(d.controls, { label: 'f(t)', key: 'f', value: 'par', options: KEYS.map((k) => ({ value: k, label: FUNCS[k].name })),
    onInput: (v) => { const was = FUNCS[pick.from] || FUNCS.par, L = FUNCS[v].L; ts.range({ min: -2 * L, max: 2 * L, step: L / 100, value: (ts.v / was.L) * L, dec: 2 }); } });
  const ts = ctl(d.controls, { label: 't', cls: '', key: 't', min: -2, max: 2, step: 0.01, value: -0.3, unit: '', dec: 2 });
  const ro = readout(d);
  const PANES = [{ odd: true, box: { l: 150, r: 660, t: 150, b: 450 }, name: 'F_{odd}(t)' }, { odd: false, box: { l: 830, r: 1340, t: 150, b: 450 }, name: 'F_{even}(t)' }];
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), fn = FUNCS[pick.value], L = fn.L;
    const Lm = pick.mix((v) => FUNCS[v].L), yr = pick.mix((v) => FUNCS[v].yr);
    const t = Math.max(-2 * L, Math.min(2 * L, ts.v)), s = home(t, L), src = Math.abs(s), fs = fn.f(src);
    hits = [];
    PANES.forEach((P) => {
      const ax = axes(ctx, P.box, [-2 * Lm, 2 * Lm], yr, { xl: 't', nx: 4, ny: fn.ny, fx: tickName(fn), fy: (v) => cn(v, Math.abs(yr[1]) < 1 ? 1 : Math.abs(yr[1]) < 2 ? 1 : 0) });
      text(ctx, P.name, P.box.l, P.box.t - 26, fc, { size: 22, weight: 600 });
      [...new Set([pick.from, pick.value])].forEach((k) => pick.only(ctx, k, () => {
        const g = FUNCS[k], J = jumps(g, P.odd);
        plot(ctx, ax, ext(g, P.odd), alpha(fc, 0.75), { w: 3, x: [-2 * g.L, 2 * g.L], holes: J.holes, dots: J.dots });
        plot(ctx, ax, g.f, fc, { w: 6, x: [0, g.L] });
      }, [0, 0]));
      if (pick.k < 1) return;
      const F = P.odd ? (s >= 0 ? fs : -fs) : fs, px = ax.X(t), py = ax.Y(F);
      dashed(ctx, () => line(ctx, px, P.box.t, px, P.box.b, alpha(PAL.ink, 0.35), 2));
      if (Math.abs(src - t) > 1e-9) {
        const qx = ax.X(src), qy = ax.Y(fs);
        ctx.save(); ctx.setLineDash([2, 7]); line(ctx, px, py, qx, qy, alpha(PAL.ink, 0.55), 2); ctx.restore();
        dot(ctx, qx, qy, fc, false, 9);
        hits.push({ x: qx, y: qy, r: 14, name: `f(${cn(src)}) = ${cn(fs)}, the value of f the extension copies` });
      }
      dot(ctx, px, py, fc, true, 9);
      hits.push({ x: px, y: py, r: 14, name: `${P.odd ? 'F_odd' : 'F_even'}(${cn(t)}) = ${cn(F)}` });
      hits.push({ x: ax.X(L / 2), y: ax.Y(fn.f(L / 2)), r: 16, name: `f(t) = ${fn.name} on [0, ${fn.Lname}]` });
    });
    const Fo = s >= 0 ? fs : -fs;
    const J = jumps(fn, true).dots.length;
    headline(ctx, `f(t) = ${fn.name} on [0, ${fn.Lname}]: at t = ${cn(t)} the odd extension is ${cn(Fo)} and the even one ${cn(fs)}${J ? `; the odd one jumps where f is not 0 at an end.` : '.'}`);
    const shift = Math.abs(s - t) > 1e-9, at = (sym) => `${sym}(${tn(t)}) = ${shift ? `${sym}(${tn(s)}) = ` : ''}`;
    const oddTex = s >= 0 ? `${at('\\kFodd')}\\kf(${tn(src)}) = ${tn(fs)}` : `${at('\\kFodd')}-\\kf(${tn(src)}) = ${tn(-fs)}`;
    const evenTex = `${at('\\kFeven')}\\kf(${tn(src)}) = ${tn(fs)}`;
    ro.set(`${oddTex},\\quad ${evenTex}`);
  }
  still(d, draw);
})();

/* Sim: one f on [0, L] expanded both ways, its sine series closing on the odd extension or its cosine series
   on the even one, the extension drawn in `function` and the partial sum S_N in `series`, t from −2L to 2L.
   Beneath, |b_n| or |a_n| for n = 1 to 30 as bars, the first N solid (the terms S_N has added), the rest
   faint, scaled to the largest of the thirty, with the leading power K/nᵖ dashed over them: 1/n where the
   extension jumps, 1/n² where it has corners only, 1/n³ where it has neither. Example 4.4.2's t² on [0, π]
   with its cosine series and N = 3 is the opening state. */
(function () {
  const d = sim('sim-sine-cosine-series', 700);
  const KEYS = ['sq', 'par', 'sh', 'lin'];
  const pick = choice(d.controls, { label: 'f(t)', key: 'f', value: 'sq', options: KEYS.map((k) => ({ value: k, label: `${FUNCS[k].name} on [0, ${FUNCS[k].Lname}]` })) });
  const kind = choice(d.controls, { label: 'series', key: 'series', value: 'cos', options: [{ value: 'sin', label: 'sine series' }, { value: 'cos', label: 'cosine series' }] });
  const Ns = ctl(d.controls, { label: 'N', cls: '', key: 'N', min: 1, max: 30, step: 1, value: 3, unit: '', dec: 0 });
  const ro = readout(d);
  const TOP = { l: 150, r: 1340, t: 130, b: 400 }, BAR = { l: 150, r: 1340, t: 500, b: 620 };
  const MAXN = 30;
  const coef = (fn, k, n) => (k === 'cos' ? fn.a(n) : fn.b(n));
  const sum = (fn, k, N) => {
    const w = PI / fn.L, cs = Array.from({ length: N }, (_, i) => coef(fn, k, i + 1));
    return (t) => cs.reduce((acc, c, i) => acc + c * (k === 'cos' ? Math.cos((i + 1) * w * t) : Math.sin((i + 1) * w * t)), k === 'cos' ? fn.a0 / 2 : 0);
  };
  const trig = (fn, k, n) => `\\${k} ${n === 1 ? '' : n}${fn.L === 1 ? '\\pi ' : ''}t`;
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), sc = C('series'), qc = C('sequence');
    const fn = FUNCS[pick.value], k = kind.value, N = Math.round(Ns.v), L = fn.L;
    const Lm = pick.mix((v) => FUNCS[v].L), yr = pick.mix((v) => FUNCS[v].yr);
    const ax = axes(ctx, TOP, [-2 * Lm, 2 * Lm], yr, { xl: 't', nx: 4, ny: fn.ny, fx: tickName(fn), fy: (v) => cn(v, Math.abs(yr[1]) < 2 ? 1 : 0) });
    const states = [];
    [...new Set([pick.from, pick.value])].forEach((fv) => [...new Set([kind.from, kind.value])].forEach((kv) => states.push([fv, kv, pick.a(fv) * kind.a(kv)])));
    states.forEach(([fv, kv, a]) => F.faded(ctx, a, [0, 0], () => {
      const g = FUNCS[fv], J = jumps(g, kv === 'sin');
      plot(ctx, ax, ext(g, kv === 'sin'), alpha(fc, 0.6), { w: 3, x: [-2 * g.L, 2 * g.L], holes: J.holes, dots: J.dots });
      clip(ctx, TOP, () => plot(ctx, ax, sum(g, kv, N), sc, { w: 5, x: [-2 * g.L, 2 * g.L] }));
    }));
    const Fname = k === 'cos' ? 'F_{even}(t)' : 'F_{odd}(t)';
    text(ctx, Fname, TOP.l, TOP.t - 30, fc, { size: 22, weight: 600 });
    text(ctx, `S_{${N}}(t)`, TOP.l + 150, TOP.t - 30, sc, { size: 22, weight: 600 });
    /* the coefficient bars, |c_n| / max over n ≤ 30 */
    const cs = Array.from({ length: MAXN }, (_, i) => Math.abs(coef(fn, k, i + 1))), top = Math.max(...cs);
    const bx = axes(ctx, BAR, [0, MAXN + 0.5], [0, 1], { xl: 'n', nx: 0, ny: 0 });
    [1, 5, 10, 15, 20, 25, 30].forEach((n) => text(ctx, String(n), bx.X(n), BAR.b + 26, PAL.muted, { size: 17, align: 'center' }));
    text(ctx, k === 'cos' ? '|a_n|' : '|b_n|', BAR.l, BAR.t - 22, qc, { size: 22, weight: 600 });
    const bw = ((BAR.r - BAR.l) / (MAXN + 0.5)) * 0.56;
    hits = [];
    cs.forEach((c, i) => {
      const n = i + 1, x = bx.X(n), y = bx.Y(c / top);
      ctx.save(); ctx.fillStyle = n <= N ? qc : alpha(qc, 0.25); ctx.fillRect(x - bw / 2, y, bw, BAR.b - y); ctx.restore();
      hits.push({ x, y: Math.min(y, BAR.b - 8), r: 12, name: `${k === 'cos' ? 'a' : 'b'}_${n} = ${sig(coef(fn, k, n)).replace('-', '−')}` });
    });
    const D = fn[k], env = (n) => D.K / Math.pow(n, D.p) / top;
    ctx.save(); ctx.setLineDash([10, 10]);
    plot(ctx, bx, (n) => (n >= 1 ? env(n) : NaN), alpha(PAL.ink, 0.6), { w: 2, x: [1, MAXN] });
    ctx.restore();
    const pw = D.p === 1 ? 'n' : `n^${D.p}`;
    label(ctx, `falls like 1/${pw}`, bx.X(4), bx.Y(Math.min(env(4), 0.85)), { side: 'right', color: PAL.ink, size: 20, weight: 400 });
    hits.push({ x: ax.X(L / 2), y: ax.Y(fn.f(L / 2)), r: 16, name: `f(t) = ${fn.name} on [0, ${fn.Lname}]` });
    hits.push({ x: ax.X(-L / 2), y: ax.Y(sum(fn, k, N)(-L / 2)), r: 16, name: `the partial sum S_${N}(t) of the ${k === 'cos' ? 'cosine' : 'sine'} series` });
    const which = k === 'cos' ? 'Cosine' : 'Sine';
    headline(ctx, `${which} series of ${fn.name} on [0, ${fn.Lname}], N = ${N}: the coefficients fall like 1/${pw}, since ${D.tail}.`);
    /* the readout: S_N written out, its first four nonzero terms and the last */
    const terms = [];
    for (let n = 1; n <= N; n++) { const c = coef(fn, k, n); if (Math.abs(c) > 1e-12) terms.push([n, c]); }
    const termTex = ([n, c], first) => `${c < 0 ? '-' : first ? '' : '+'} ${sig(Math.abs(c))}\\,${trig(fn, k, n)}`;
    let body = k === 'cos' ? sig(fn.a0 / 2) : '';
    const shown = terms.length <= 5 ? terms : [...terms.slice(0, 4), null, terms[terms.length - 1]];
    shown.forEach((tm, i) => { body += tm ? ` ${termTex(tm, !body && i === 0)}` : ' + \\cdots '; });
    const head = k === 'cos' ? `\\frac{\\kazero}{2} + \\sum_{n=1}^{${N}} \\kan \\cos\\Bigl(\\frac{n\\pi}{L}t\\Bigr)` : `\\sum_{n=1}^{${N}} \\kbn \\sin\\Bigl(\\frac{n\\pi}{L}t\\Bigr)`;
    ro.set(`\\htmlClass{kv-series}{S_{${N}}}(t) = ${head} = ${body || '0'}`, undefined, { form: k });
  }
  still(d, draw);
})();

/* Figure 4.13 and Examples 4.4.3–4.4.4: x″ + λx = t on 0 < t < 1 solved by series. Dirichlet: f = t has the
   sine series c_n = 2(−1)ⁿ⁺¹/(nπ), and x = Σ b_n sin nπt with b_n = c_n/(λ − n²π²). Neumann: f = t has the
   cosine series c₀ = 1, c_n = 2((−1)ⁿ − 1)/(π²n²), and x = a₀/2 + Σ a_n cos nπt with λa₀ = c₀ and
   a_n = c_n/(λ − n²π²). Sixty terms are drawn (the terms fall like 1/n³ and 1/n⁴). λ runs −5 to 45 with
   the eigenvalues of the chosen problem as dashed circles: n²π² for Dirichlet (π², 4π²), 0 and n²π² for
   Neumann. On one, the factor λ − n²π² of a term is 0: where c_n ≠ 0 there is no solution, and at the
   Neumann λ = 4π², where c₂ = 0, a solution exists and any multiple of cos 2πt may be added. Frame t 0 to 1,
   x −0.2 to 0.4 (the book's −0.08 dip and the Neumann solution near 1/4 both readable); near an eigenvalue
   the curve leaves the frame and is clipped, its extremes written in the headline. */
(function () {
  const d = sim('sim-bvp-series', 560);
  const M = 60, PI2 = PI * PI;
  const cond = choice(d.controls, { label: 'conditions', key: 'bc', value: 'D', options: [{ value: 'D', label: 'Dirichlet x(0) = x(1) = 0' }, { value: 'N', label: 'Neumann x′(0) = x′(1) = 0' }] });
  const lam = ctl(d.controls, { label: '\\klambda', cls: 'eigenvalue', key: 'lambda', min: -5, max: 45, step: 0.05, value: 2, unit: '', dec: 2, detents: [2],
    specials: [{ at: () => (cond.value === 'N' ? 0 : null), label: 'λ = 0, an eigenvalue of the Neumann problem' }, { at: PI2, label: 'λ = π², an eigenvalue' }, { at: 4 * PI2, label: 'λ = 4π², an eigenvalue' }] });
  const ro = readout(d);
  const BOX = { l: 200, r: 1240, t: 130, b: 460 };
  const cD = (n) => (2 * -sgn(n)) / (n * PI);
  const cN = (n) => (2 * (sgn(n) - 1)) / (PI2 * n * n);
  const EIG = (v) => (v === 'N' ? [0, PI2, 4 * PI2] : [PI2, 4 * PI2]);
  const atEig = (v, l) => EIG(v).find((e) => Math.abs(l - e) < 1e-6);
  /* the series solution, or null where none exists; on the Neumann λ = 4π² the one with a₂ = 0 */
  function solution(v, l) {
    const e = atEig(v, l);
    if (e !== undefined && !(v === 'N' && Math.abs(e - 4 * PI2) < 1e-6)) return null;
    if (v === 'D') return (t) => { let s = 0; for (let n = 1; n <= M; n++) s += (cD(n) / (l - n * n * PI2)) * Math.sin(n * PI * t); return s; };
    return (t) => { let s = 1 / l / 2; for (let n = 1; n <= M; n += 2) s += (cN(n) / (l - n * n * PI2)) * Math.cos(n * PI * t); return s; };
  }
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), dc = C('derivative'), v = cond.value, l = lam.v;
    const ax = axes(ctx, BOX, [0, 1], [-0.2, 0.4], { xl: 't', yl: 'x', yc: fc, nx: 5, ny: 6, fx: (u) => cn(u, 1), fy: (u) => cn(u, 1) });
    hits = [];
    [...new Set([cond.from, cond.value])].forEach((w) => cond.only(ctx, w, () => {
      const x = solution(w, l);
      if (!x) return;
      if (w === 'N' && atEig('N', l) !== undefined) [-0.1, 0.1].forEach((Cc) => clip(ctx, BOX, () => plot(ctx, ax, (t) => x(t) + Cc * Math.cos(2 * PI * t), alpha(fc, 0.35), { w: 3, x: [0, 1] })));
      clip(ctx, BOX, () => plot(ctx, ax, x, fc, { w: 5, x: [0, 1] }));
      if (w === 'N') [0, 1].forEach((t0) => { const y = x(t0); if (y > -0.2 && y < 0.4) line(ctx, ax.X(t0) + (t0 ? -70 : 0), ax.Y(y), ax.X(t0) + (t0 ? 0 : 70), ax.Y(y), dc, 4); });
      else [0, 1].forEach((t0) => dot(ctx, ax.X(t0), ax.Y(0), fc, true, 10));
    }, [0, 0]));
    const x = solution(v, l), e = atEig(v, l);
    let head, tex;
    const ltex = e === undefined ? tn(l, 2) : e === 0 ? '0' : e < 2 * PI2 ? '\\pi^2' : '4\\pi^2';
    const lname = e === undefined ? cn(l, 2) : e === 0 ? '0' : e < 2 * PI2 ? 'π²' : '4π²';
    if (x) {
      let lo = Infinity, hi = -Infinity, tlo = 0, thi = 0;
      for (let i = 0; i <= 400; i++) { const t = i / 400, y = x(t); if (y < lo) { lo = y; tlo = t; } if (y > hi) { hi = y; thi = t; } }
      const big = Math.abs(lo) >= Math.abs(hi) ? [lo, tlo] : [hi, thi];
      if (big[0] > -0.2 && big[0] < 0.4) {
        const p = { x: ax.X(big[1]), y: ax.Y(big[0]) };
        dot(ctx, p.x, p.y, fc, true, 7);
        hits.push({ x: p.x, y: p.y, r: 14, name: `x(${cn(big[1])}) = ${cn(big[0], 3)}` });
      }
      for (let i = 1; i < 10; i++) { const t = i / 10, y = x(t); if (y > -0.2 && y < 0.4) hits.push({ x: ax.X(t), y: ax.Y(y), r: 12, name: `the solution x(t) of x″ + ${lname}x = t, ${v === 'D' ? 'Dirichlet' : 'Neumann'}` }); }
      if (v === 'D') {
        hits.push({ x: ax.X(0), y: ax.Y(0), r: 14, name: 'x(0) = 0' }, { x: ax.X(1), y: ax.Y(0), r: 14, name: 'x(1) = 0' });
        head = `λ = ${lname}, Dirichlet: x(t) ${big[0] < 0 ? 'dips' : 'rises'} to ${cn(big[0], 3)} at t = ${cn(big[1])} and meets x(0) = x(1) = 0.`;
        const c1 = cD(1), b1 = c1 / (l - PI2);
        tex = `\\kbn\\,(\\klambda - n^2\\pi^2) = \\kcn = \\frac{2(-1)^{n+1}}{n\\pi},\\quad ${seq('b_1')} = \\frac{${tn(c1, 4)}}{${ltex} - ${tn(PI2, 4)}} = ${sig(b1, 3)}`;
      } else {
        hits.push({ x: ax.X(0) + 35, y: ax.Y(x(0)), r: 14, name: 'x′(0) = 0, a flat start' }, { x: ax.X(1) - 35, y: ax.Y(x(1)), r: 14, name: 'x′(1) = 0, a flat end' });
        if (e !== undefined) {
          head = `λ = 4π² is an eigenvalue, but c₂ = 0: a solution exists, and adding any multiple of cos 2πt gives another, so it is not unique.`;
          tex = `${seq('a_2')}\\,(4\\pi^2 - 4\\pi^2) = 0 = ${seq('c_2')},\\quad \\kx(t) = \\frac{1}{8\\pi^2} + \\sum_{n\\ \\text{odd}} \\frac{\\kcn}{4\\pi^2 - n^2\\pi^2}\\cos(n\\pi t) + C\\cos(2\\pi t)`;
        } else {
          head = `λ = ${lname}, Neumann: x(t) stays between ${cn(lo, 3)} and ${cn(hi, 3)}, flat at both ends.`;
          const c1 = cN(1), a1 = c1 / (l - PI2);
          tex = `\\klambda\\,\\kazero = \\kczero,\\ \\ \\kan(\\klambda - n^2\\pi^2) = \\kcn,\\quad \\kazero = \\frac{1}{${ltex}} = ${sig(1 / l, 3)},\\ \\ ${seq('a_1')} = \\frac{${tn(c1, 4)}}{${ltex} - ${tn(PI2, 4)}} = ${sig(a1, 3)}`;
        }
      }
    } else {
      const n = e === 0 ? 0 : Math.round(Math.sqrt(e / PI2));
      const c = v === 'D' ? cD(n) : n === 0 ? 1 : cN(n);
      head = `λ = ${lname} is an eigenvalue: the factor λ − n²π² is 0 at n = ${n} while ${v === 'N' ? 'c' : 'c'}${['₀', '₁', '₂'][n]} = ${cn(c, 4)} is not, so no solution exists.`;
      tex = n === 0
        ? `\\klambda\\,\\kazero = 0\\cdot\\kazero = 0 \\neq \\kczero = 1`
        : `${seq(`${v === 'D' ? 'b' : 'a'}_${n}`)}\\,(${ltex} - ${n === 1 ? '' : n * n}\\pi^2) = 0 \\neq ${seq(`c_${n}`)} = ${tn(c, 4)}`;
    }
    headline(ctx, head);
    ro.set(tex, undefined, { form: `${v}${x ? (e === undefined ? '' : 'e') : 'x'}` });
  }
  still(d, draw);
})();
};
