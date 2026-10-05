/* Figures for section 34.5 Complexity and Chaos. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['34.5'] = function (root, F) {
const { fmt, tex, el, C, PAL, alpha, ctl, cycle, register, begin, line, dot, text, headline, axes, curve, angleArc, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
const DEG = Math.PI / 180;

/* =====================================================================
   SIM: two double pendulums released a hair apart. Equal arms of 0.5 m
   and equal bobs, integrated by RK4 from rest over 20 s; the graph
   follows each lower bob's horizontal position, and a row of marks gives
   the parting time for every start difference from 1° to 0.000001°.
===================================================================== */
(function () {
  const d = sim('sim-double-pendulums', 620);
  const th0 = ctl(d.controls, { label: '\\ktheta_{0}', cls: 'angle', min: 30, max: 150, step: 1, value: 120, unit: '°', dec: 0, onInput: reset, aria: 'release angle' });
  const lg = ctl(d.controls, { label: '\\log_{10}(\\Delta\\ktheta_{0}/1^{\\circ})', cls: 'angle', min: -6, max: 0, step: 1, value: -3, unit: '', dec: 0, onInput: reset, aria: 'start difference, as a power of ten of degrees' });
  const G = 9.8, L = 0.5, T = 20, H = 0.002, EVERY = 5, DT = H * EVERY, PART = 0.1, EXPS = [-6, -5, -4, -3, -2, -1, 0];
  const cy = cycle(() => T, 2);
  function reset() { cy.reset(); }
  /* θ1'' and θ2'' of a double pendulum with equal masses and equal arms */
  function deriv(s) {
    const [a1, a2, w1, w2] = s, dd = a1 - a2, den = L * (3 - Math.cos(2 * dd)), sd = Math.sin(dd), cd = Math.cos(dd);
    return [w1, w2,
      (-3 * G * Math.sin(a1) - G * Math.sin(a1 - 2 * a2) - 2 * sd * L * (w2 * w2 + w1 * w1 * cd)) / den,
      (2 * sd * (2 * L * w1 * w1 + 2 * G * Math.cos(a1) + L * w2 * w2 * cd)) / den];
  }
  function rk4(s) {
    const k1 = deriv(s), k2 = deriv(s.map((v, i) => v + H / 2 * k1[i])), k3 = deriv(s.map((v, i) => v + H / 2 * k2[i])), k4 = deriv(s.map((v, i) => v + H * k3[i]));
    return s.map((v, i) => v + H / 6 * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i]));
  }
  /* one run from rest with both arms at angle a, sampled every DT: the two angles */
  function run(a) {
    const n = Math.round(T / DT), A1 = new Float64Array(n + 1), A2 = new Float64Array(n + 1);
    let s = [a, a, 0, 0]; A1[0] = a; A2[0] = a;
    for (let i = 1; i <= n; i++) { for (let j = 0; j < EVERY; j++) s = rk4(s); A1[i] = s[0]; A2[i] = s[1]; }
    return { A1, A2 };
  }
  const xOf = (r, i) => L * (Math.sin(r.A1[i]) + Math.sin(r.A2[i]));
  function partAt(a, b) { for (let i = 0; i < a.A1.length; i++) if (Math.abs(xOf(a, i) - xOf(b, i)) > PART) return i * DT; return null; }
  /* every start difference is integrated once per release angle, so the slider of differences only picks */
  let cacheFor = null, base = null, runs = {}, parts = {};
  function ensure() {
    if (cacheFor === th0.v) return;
    cacheFor = th0.v; base = run(th0.v * DEG); runs = {}; parts = {};
    for (const e of EXPS) { runs[e] = run((th0.v + 10 ** e) * DEG); parts[e] = partAt(base, runs[e]); }
  }
  const at = (r, t, f) => { const u = Math.min(t / DT, r.A1.length - 1), i = Math.floor(u), j = Math.min(i + 1, r.A1.length - 1), k = u - i; return f(r, i) * (1 - k) + f(r, j) * k; };
  const ang = (r, t) => [at(r, t, (q, i) => q.A1[i]), at(r, t, (q, i) => q.A2[i])];
  const dstr = (e) => (e < 0 ? (10 ** e).toFixed(-e) : '1');
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    ensure();
    const { ctx } = begin(d.c);
    const tau = cy.now(), e = lg.v, other = runs[e], tp = parts[e];
    const c1 = F.ref('pendulum-1'), c2 = F.ref('pendulum-2');
    /* the scene: both arms reach 2L = 1.0 m, drawn 240 units, so every pose stays inside y = 100 to 580 */
    const px = 330, py = 340, S = 240;
    hits = [{ x: px, y: py, r: 14, name: 'the pivot' }];
    const ra = th0.v * DEG;
    line(ctx, px, py, px + S * Math.sin(ra), py + S * Math.cos(ra), alpha(PAL.ink, 0.3), 3, [10, 10]);
    angleArc(ctx, { x: px, y: py }, 64, -Math.PI / 2, ra - Math.PI / 2, '', null, C('angle'));
    /* a narrow angle leaves no room between its arms, so its name sits beside the vertical arm instead */
    const am = th0.v < 70 ? -20 * DEG : ra / 2;
    text(ctx, 'θ₀ = ' + fmt(th0.v, 0) + '°', px + 92 * Math.sin(am), py + 92 * Math.cos(am), C('angle'), { size: 20, weight: 600, align: th0.v < 70 ? 'right' : 'left', bg: PAL.panel });
    const pose = (r, color, rod, rb, who) => {
      const [a1, a2] = ang(r, tau), x1 = px + S / 2 * Math.sin(a1), y1 = py + S / 2 * Math.cos(a1), x2 = x1 + S / 2 * Math.sin(a2), y2 = y1 + S / 2 * Math.cos(a2);
      line(ctx, px, py, x1, y1, color, rod); line(ctx, x1, y1, x2, y2, color, rod);
      dot(ctx, x1, y1, color, true, rb); dot(ctx, x2, y2, color, true, rb);
      hits.push({ x: x1, y: y1, r: 16, name: who + ', upper bob' }, { x: x2, y: y2, r: 16, name: who + ', lower bob' });
    };
    pose(base, c1, 8, 14, 'the first pendulum');
    pose(other, c2, 3, 7, 'the second pendulum');
    dot(ctx, px, py, PAL.muted, true, 6);
    /* the graph: x of the lower bob, fixed at −1 to 1 m (the reach of both arms), against t, fixed at 0 to 20 s (the whole run) */
    const box = { l: 720, r: 1340, t: 150, b: 420 };
    const { X, Y } = axes(ctx, box, [0, T], [-1, 1], { xl: 'time t (s)', xc: C('time'), yl: 'x of the lower bob (m)', yc: C('position'), nx: 4, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 1) });
    const lx = (r) => (t) => at(r, t, xOf), n = Math.max(2, Math.ceil(tau / 0.02));
    if (tau > 0) { curve(ctx, lx(base), 0, tau, X, Y, c1, 6, n); curve(ctx, lx(other), 0, tau, X, Y, c2, 2.5, n); }
    dot(ctx, X(tau), Y(lx(base)(tau)), c1, true, 10); dot(ctx, X(tau), Y(lx(other)(tau)), c2, true, 6);
    /* the legend names both referent colours for the scene and the graph alike */
    [['first pendulum', c1, 6], ['second pendulum', c2, 2.5]].forEach(([s, c, w], i) => {
      const y = 562 + 30 * i;
      line(ctx, 20, y, 60, y, c, w); text(ctx, s, 72, y, PAL.ink, { size: 18, base: 'middle' });
    });
    if (tp !== null && tau >= tp) {
      line(ctx, X(tp), box.t, X(tp), box.b, alpha(PAL.ink, 0.4), 2, [10, 10]);
      text(ctx, 'part', X(tp) + 8, box.t + 18, PAL.muted, { size: 17, bg: PAL.panel });
    }
    /* the parting times of every start difference, under the time axis */
    const ly = box.b + 120;
    text(ctx, 'when the pendulums part, for each start difference from 1° to 0.000001°', box.l, ly - 32, PAL.muted, { size: 17 });
    line(ctx, X(0), ly, X(T), ly, PAL.rule, 2);
    for (const k of EXPS) {
      const t = parts[k]; if (t === null) continue;
      const cur = k === e;
      dot(ctx, X(t), ly, C('time'), cur, cur ? 9 : 7);
      hits.push({ x: X(t), y: ly, r: 12, name: 'started ' + dstr(k) + '° apart: part at ' + fmt(t, 1) + ' s' });
      if (cur) text(ctx, dstr(k) + '°', X(t), ly + 30, C('angle'), { size: 17, align: 'center' });
    }
    if (tp === null) text(ctx, 'no parting within 20 s', X(T), ly + 30, PAL.muted, { size: 17, align: 'right' });
    const ds = dstr(e) + '°';
    headline(ctx, tp === null ? 'Released at ' + fmt(th0.v, 0) + '° and ' + ds + ' apart, the two pendulums swing as one for all 20 s'
      : tau < tp ? 'Started ' + ds + ' apart, the two pendulums still swing as one at $\\kt$ = ' + fmt(tau, 1) + ' s'
        : 'Started only ' + ds + ' apart, the two pendulums part at $\\kt$ = ' + fmt(tp, 1) + ' s and then swing their own ways');
    const r2 = (v) => Math.round(v * 100) / 100, x1 = r2(lx(base)(tau)), x2 = r2(lx(other)(tau));
    const done = EXPS.filter((k) => parts[k] !== null);
    const note = done.length === EXPS.length
      ? 'A start difference $\\Delta\\ktheta_{0}$ ten times smaller delays the parting by only about ' + fmt((parts[-6] - parts[0]) / 6, 1) + ' s.'
      : done.length === 0 ? 'Released at $\\ktheta_{0}$ = ' + fmt(th0.v, 0) + '°, the motion is regular: no start difference up to 1° parts the pendulums within 20 s.'
        : 'Released at $\\ktheta_{0}$ = ' + fmt(th0.v, 0) + '°, only start differences of ' + dstr(Math.min(...done)) + '° or more part the pendulums within 20 s.';
    tex(d.readout, `\\Delta\\ktheta_{0} = ${dstr(e)}^{\\circ},\\quad \\kt = ${fmt(tau, 1)}\\ \\text{s}:\\quad |\\kx_{\\htmlData{ref=pendulum-1}{1}} - \\kx_{\\htmlData{ref=pendulum-2}{2}}| = |{${fmt(x1, 2)}} - ({${fmt(x2, 2)}})|\\ \\text{m} = ${fmt(Math.abs(x1 - x2), 2)}\\ \\text{m}`);
    const s = el('small', null, note); d.readout.appendChild(s); F.renderMath(s);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
