/* Figures for section 2.5 The Precise Definition of a Limit. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['2.5'] = function (root, F) {
const { C, PAL, ctl, begin, axes, plot, band, judge, dot, text, label, headline, register, readout, fmt, hover } = F;
const BOX = { l: 140, r: 1250, t: 112, b: 440 };
/* a number set inside TeX: a minus as TeX writes one */
const n = (v, dec = 2) => fmt(v, dec).replace('\u2212', '-');
const typed = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;

/* What the δ slider finds against the target: the headline's verdict. */
function verdict(v, dl, what) {
  const ds = `$\\delta = ${n(dl, 3)}$`;
  if (!Number.isFinite(v.best)) return `Every $\\delta$ here works for ${what}`;
  if (v.ok && fmt(dl, 3) === fmt(v.best, 3)) return `${ds} is the largest $\\delta$ that works for ${what}`;
  if (v.ok) return `${ds} works for ${what}; the largest that does is ${fmt(v.best, 3)}`;
  return `${ds} is too wide for ${what}; the largest that works is ${fmt(v.best, 3)}`;
}

/* One ε–δ picture: f on axes fixed per figure (ranges hold the band at the tolerance slider's
   reach), the target strip in limit, the δ window in ink, and the δ slider's dashed circle at
   the largest δ that works (judge's best), with the example's own δ as a second circle. */
function epsDelta(id, o) {
  const d = F.sim(root, id, 500);
  const side = o.side ?? 0;
  const reach = Math.max(side > 0 ? 0 : o.a - o.x[0], side < 0 ? 0 : o.x[1] - o.a);
  const tol = ctl(d.controls, o.tol);
  const target = () => o.target(tol.v);
  const best = () => judge(o.f, o.a, 0, target(), side, reach).best;
  const specials = [{ at: best, label: 'the largest δ that works' }];
  if (o.choice) specials.push({ at: () => o.choice(tol.v), label: 'the example’s δ' });
  const delta = ctl(d.controls, { label: 'δ', cls: '', key: 'delta', step: 0.001, dec: 3, unit: '', ...o.delta, value: o.delta.value ?? best(), specials });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), lc = C('limit');
    const ax = axes(ctx, BOX, o.x, o.y, { xl: 'x', yl: 'y', nx: o.nx, ny: o.ny, nice: true });
    plot(ctx, ax, o.curve ?? o.f, fc, o.plot);
    const t = target(), dl = delta.v, v = band(ctx, ax, o.f, o.a, t, dl, lc, { side, reach });
    /* the strip's edges named past the box's right end, pushed apart where the strip is thin */
    const clampY = (y) => Math.min(ax.box.b - 12, Math.max(ax.box.t + 12, y));
    const strip = (s, y) => text(ctx, s, ax.box.r + 12, y, lc, { size: 22, weight: 600, align: 'left', base: 'middle', tex: true });
    if ('L' in t) {
      const yt = clampY(ax.Y(t.L + t.eps)), yb = clampY(ax.Y(t.L - t.eps)), push = Math.max(0, (30 - (yb - yt)) / 2);
      strip('$\\kL + \\varepsilon$', yt - push); strip('$\\kL - \\varepsilon$', yb + push);
    } else strip('$y = M$', clampY(ax.Y(t.M)));
    const extra = o.marks ? o.marks(ctx, ax, dl, t) : [];
    const s = o.say(v, tol.v, dl);
    headline(ctx, s.head);
    ro.set(s.ro, s.note ?? '');
    const edges = [side > 0 ? null : -1, side < 0 ? null : 1].filter((k) => k !== null);
    hits = [
      ...[[-1, v.left], [1, v.right]].filter(([, r]) => Number.isFinite(r) && r < reach).map(([k, r]) => {
        const x = o.a + k * r; return { x: ax.X(x), y: ax.Y(o.f(x)), r: 16, name: `the graph leaves the target at x = ${fmt(x, 3)}` };
      }),
      ...edges.map((k) => ({ x: ax.X(o.a + k * dl), y: ax.box.b - 24, r: 16, name: `${k < 0 ? 'a − δ' : 'a + δ'} = ${fmt(o.a + k * dl, 3)}` })),
      ...extra,
    ];
  }
  register(d.fig, { update: () => {}, draw });
}

/* the definition's implication with the numbers: window ⇒ target, or ⇏ when δ is too wide */
const implies = (v, win, goal) => `${win} \\;${v.ok ? '\\Rightarrow' : '\\not\\Rightarrow'}\\; ${goal}`;
const epsTarget = (L) => (e) => ({ L, eps: e });
const epsSlider = (max, value = 1) => ({ label: 'ε', cls: '', key: 'eps', min: 0.1, max, step: 0.01, value, unit: '', dec: 2 });
/* readout for |x − a| < δ ⇒ |f(x) − L| < ε, f and L in their type colours */
const twoSided = (v, win, fx, L, e, dl) => implies(v, `0 \\lt ${win} \\lt ${n(dl, 3)}`, `|${typed('function', fx)} - ${typed('limit', L)}| \\lt ${n(e)}`);

/* Figure 2.39: the book's decreasing, concave-down sketch, stood in for by f(x) = 5 − x² at a = 1,
   L = 4; the left and right distances differ, so δ is the smaller. y 0 to 6 holds 4 ± 1.5. */
epsDelta('sim-epsilon-delta', {
  f: (x) => 5 - x * x, a: 1, x: [0, 2.2], y: [0, 6], nx: 5, ny: 6,
  tol: epsSlider(1.5), target: epsTarget(4), delta: { min: 0.01, max: 1.2 },
  say: (v, e, dl) => ({ head: verdict(v, dl, `$\\varepsilon = ${n(e)}$`), ro: twoSided(v, '|x - 1|', '\\kf(x)', '4', e, dl) }),
});

/* Figure 2.40 (Example 2.39): 2x + 1 at 1, L = 3; the crossings at 1 ± ε/2. y 0 to 6 holds 3 ± 2. */
epsDelta('sim-delta-linear', {
  f: (x) => 2 * x + 1, a: 1, x: [0, 2], y: [0, 6], nx: 4, ny: 6,
  tol: epsSlider(2), target: epsTarget(3), delta: { min: 0.01, max: 1 },
  say: (v, e, dl) => ({ head: verdict(v, dl, `$\\varepsilon = ${n(e)}$`), ro: twoSided(v, '|x - 1|', '(2x + 1)', '3', e, dl), note: `$\\delta = \\varepsilon/2 = ${n(e / 2, 3)}$` }),
});

/* Figure 2.41 (Example 2.41): x² at 2, L = 4, ε up to the example's bound 4. y 0 to 9 holds 4 ± 4. */
const sqLeft = (e) => 2 - Math.sqrt(4 - e), sqRight = (e) => Math.sqrt(4 + e) - 2;
epsDelta('sim-delta-square', {
  f: (x) => x * x, a: 2, x: [-1, 3], y: [0, 9], nx: 4, ny: 5,
  tol: epsSlider(4), target: epsTarget(4), delta: { min: 0.01, max: 1 },
  say: (v, e, dl) => ({
    head: verdict(v, dl, `$\\varepsilon = ${n(e)}$`), ro: twoSided(v, '|x - 2|', 'x^2', '4', e, dl),
    note: `$\\delta = \\min\\{2 - \\sqrt{4 - \\varepsilon},\\ \\sqrt{4 + \\varepsilon} - 2\\} = \\min\\{${n(sqLeft(e), 3)},\\ ${n(sqRight(e), 3)}\\} = ${n(Math.min(sqLeft(e), sqRight(e)), 3)}$`,
  }),
});

/* Example 2.42, a Sim: x² − 2x + 3 at −1, L = 6, with the example's δ = min{1, ε/5} beside the
   largest δ. y 0 to 18 holds 6 ± 10; x −3 to 1.5 holds the left crossing at 1 − √(4 + ε). */
const algebraic = (e) => Math.min(1, e / 5);
epsDelta('sim-delta-algebraic', {
  f: (x) => x * x - 2 * x + 3, a: -1, x: [-3, 1.5], y: [0, 18], nx: 5, ny: 6,
  tol: epsSlider(10), target: epsTarget(6), delta: { min: 0.01, max: 2, value: 0.2 }, choice: algebraic,
  say: (v, e, dl) => ({
    head: verdict(v, dl, `$\\varepsilon = ${n(e)}$`), ro: twoSided(v, '|x + 1|', '(x^2 - 2x + 3)', '6', e, dl),
    note: `$\\delta = \\min\\{1, \\varepsilon/5\\} = ${n(algebraic(e), 3)}$`,
  }),
});

/* Example 2.43, a Sim: |x|/x at 0 with the example's ε = 1/2 and a candidate L on its own slider;
   no L works, and the example's x = −δ/2 (L ≥ 0) or δ/2 (L < 0) is dotted. */
const sgn = (x) => Math.abs(x) / x;
epsDelta('sim-no-limit', {
  f: sgn, a: 0, x: [-2, 2], y: [-2, 2], nx: 4, ny: 4,
  curve: [{ f: () => -1, x: [-2, 0], ends: '-)' }, { f: () => 1, x: [0, 2], ends: '(-' }],
  tol: { label: 'L', cls: 'limit', key: 'L', min: -1.5, max: 1.5, step: 0.01, value: 0, unit: '', dec: 2 },
  target: (L) => ({ L, eps: 0.5 }), delta: { min: 0.05, max: 1.5, step: 0.01, dec: 2, value: 0.5 },
  marks: (ctx, ax, dl, t) => {
    const x = t.L >= 0 ? -dl / 2 : dl / 2, y = sgn(x), fc = C('function');
    [-1, 1].forEach((h) => { dot(ctx, ax.X(0), ax.Y(h), PAL.panel, true, 9); dot(ctx, ax.X(0), ax.Y(h), fc, false, 9); });
    dot(ctx, ax.X(x), ax.Y(y), PAL.ink, true, 9);
    label(ctx, t.L >= 0 ? 'x = −δ/2' : 'x = δ/2', ax.X(x), ax.Y(y), { side: t.L >= 0 ? 'below' : 'above', gap: 30 });
    return [{ x: ax.X(x), y: ax.Y(y), r: 16, name: `x = ${fmt(x, 3)}, f(x) = ${fmt(y, 0)}` }];
  },
  say: (v, L, dl) => {
    const neg = L < 0, x = neg ? dl / 2 : -dl / 2, gap = neg ? 1 - L : 1 + L;
    return {
      head: `No $\\delta$ works for $\\kL = ${n(L)}$: $x = ${n(x, 3)}$ is within $\\delta$ of 0 and $\\kf(x)$ escapes`,
      ro: `|x - 0| = ${n(dl / 2, 3)} \\lt \\delta, \\quad |\\kf(x) - \\kL| = |${neg ? '1' : '-1'} - ${typed('limit', n(L))}| = ${n(gap)} \\ge \\tfrac{1}{2} = \\varepsilon`,
    };
  },
});

/* Figure 2.42 (Example 2.44): √(x − 4) from the right of 4, L = 0; the crossing of y = ε at
   4 + ε², so δ = ε². y −2 to 2 holds 0 ± 1.5; x 3 to 7 holds 4 + 1.5². */
epsDelta('sim-one-sided-delta', {
  f: (x) => Math.sqrt(x - 4), a: 4, side: 1, x: [3, 7], y: [-2, 2], nx: 4, ny: 4,
  tol: epsSlider(1.5), target: epsTarget(0), delta: { min: 0.01, max: 2.5 },
  say: (v, e, dl) => ({
    head: verdict(v, dl, `$\\varepsilon = ${n(e)}$`),
    ro: implies(v, `0 \\lt x - 4 \\lt ${n(dl, 3)}`, `|${typed('function', '\\sqrt{x - 4}')} - ${typed('limit', '0')}| \\lt ${n(e)}`),
    note: `$\\delta = \\varepsilon^{2} = ${n(e * e, 3)}$`,
  }),
});

/* Figure 2.43: two branches about the asymptote x = 1, the left 1.5/(x − 1)² and the right
   1/(x − 1)², so the right crossing of y = M is the nearer. y 0 to 110 holds M up to 100. */
epsDelta('sim-infinite-delta', {
  f: (x) => (x < 1 ? 1.5 : 1) / ((x - 1) * (x - 1)), a: 1, x: [-1, 3], y: [0, 110], nx: 4, ny: 6, plot: { poles: [1] },
  tol: { label: 'M', cls: '', key: 'M', min: 10, max: 100, step: 1, value: 25, unit: '', dec: 0 },
  target: (M) => ({ M }), delta: { min: 0.01, max: 0.6 },
  say: (v, M, dl) => ({
    head: verdict(v, dl, `$M = ${n(M, 0)}$`),
    ro: implies(v, `0 \\lt |x - 1| \\lt ${n(dl, 3)}`, `${typed('function', '\\kf(x)')} \\gt ${n(M, 0)}`),
  }),
});
};
