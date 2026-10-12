/* Figures for section 3.6 The Chain Rule. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.6'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, line, dot, text, headline, register, readout, fmt, hover, nice } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');

/* Sim: h(x) = f(g(x)) as three number lines, x, u = g(x) and y = f(u), for sin(x³), (3x² + 1)^(−2) (Example 3.48)
   and cos(5x²) (Example 3.52); the interval [x, x + Δx] and its images under g and then f. Each line's range is
   fixed per choice from the slider's reach, x on −1.5 to 1.5 and Δx up to 0.5. */
(function () {
  const d = sim('sim-chain-stretch', 560);
  const CH = {
    sin: { g: (x) => x ** 3, dg: (x) => 3 * x * x, f: Math.sin, df: Math.cos, xr: [-1.5, 2], ur: [-4, 8], yr: [-1, 1],
      tex: ['\\kg(x) = x^{3}', '\\kf(u) = \\sin u'] },
    inv: { g: (x) => 3 * x * x + 1, dg: (x) => 6 * x, f: (u) => u ** -2, df: (u) => -2 * u ** -3, xr: [-1.5, 2], ur: [0, 13], yr: [0, 1],
      tex: ['\\kg(x) = 3x^{2}+1', '\\kf(u) = u^{-2}'] },
    cos: { g: (x) => 5 * x * x, dg: (x) => 10 * x, f: Math.cos, df: (u) => -Math.sin(u), xr: [-1.5, 2], ur: [0, 20], yr: [-1, 1],
      tex: ['\\kg(x) = 5x^{2}', '\\kf(u) = \\cos u'] },
  };
  const which = choice(d.controls, { label: 'h(x)', options: [{ value: 'sin', label: 'sin(x³)' }, { value: 'inv', label: '(3x² + 1)⁻²' }, { value: 'cos', label: 'cos(5x²)' }], value: 'sin', aria: 'composite function' });
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: -1.5, max: 1.5, step: 0.01, value: 1, unit: '', dec: 2, detents: [0, 1] });
  const ds = ctl(d.controls, { label: 'Δx', cls: '', key: 'dx', min: 0.01, max: 0.5, step: 0.01, value: 0.1, unit: '', dec: 2, detents: [0.01, 0.1, 0.3] });
  const ro = readout(d);
  const L = 250, R = 1210, ROW = [150, 300, 450];
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('function'), dc = C('derivative');
    const c = CH[which.value], x = xs.v, dx = ds.v;
    const u0 = c.g(x), u1 = c.g(x + dx), y0 = c.f(u0), y1 = c.f(u1);
    const gp = c.dg(x), fp = c.df(u0), hp = fp * gp, ratio = (y1 - y0) / dx;
    const ranges = [c.xr, c.ur, c.yr];
    const Xs = ranges.map(([a, b]) => (v) => L + ((v - a) / (b - a)) * (R - L));
    const clampX = (k, v) => Math.min(R + 30, Math.max(L - 30, Xs[k](v)));
    ranges.forEach(([a, b], k) => {
      const nn = nice(a, b, 8), step = (nn.hi - nn.lo) / nn.n, dec = Math.max(0, -Math.floor(Math.log10(step) + 1e-9));
      line(ctx, L, ROW[k], R, ROW[k], PAL.muted, 2.5);
      for (let v = Math.ceil(a / step - 1e-9) * step; v <= b + 1e-9; v += step) {
        line(ctx, Xs[k](v), ROW[k] - 8, Xs[k](v), ROW[k] + 8, PAL.muted, 2);
        text(ctx, fmt(Math.abs(v) < 1e-12 ? 0 : v, dec), Xs[k](v), ROW[k] + 28, PAL.muted, { size: 17, align: 'center' });
      }
    });
    text(ctx, 'x', L - 40, ROW[0], PAL.ink, { size: 24, weight: 600, align: 'right' });
    text(ctx, '$u = \\kg(x)$', L - 40, ROW[1], fc, { size: 24, weight: 600, align: 'right', tex: true });
    text(ctx, '$y = \\kf(u)$', L - 40, ROW[2], fc, { size: 24, weight: 600, align: 'right', tex: true });
    const segs = [[x, x + dx], [u0, u1], [y0, y1]];
    /* the maps between the lines: the band each interval sweeps onto the next */
    [0, 1].forEach((k) => {
      const [a0, a1] = segs[k], [b0, b1] = segs[k + 1];
      ctx.save(); ctx.globalAlpha *= 0.14; ctx.fillStyle = PAL.ink; ctx.beginPath();
      ctx.moveTo(clampX(k, a0), ROW[k] + 8); ctx.lineTo(clampX(k, a1), ROW[k] + 8); ctx.lineTo(clampX(k + 1, b1), ROW[k + 1] - 8); ctx.lineTo(clampX(k + 1, b0), ROW[k + 1] - 8); ctx.closePath(); ctx.fill(); ctx.restore();
      line(ctx, clampX(k, a0), ROW[k] + 8, clampX(k + 1, b0), ROW[k + 1] - 8, alpha(PAL.ink, 0.45), 2, [6, 6]);
      line(ctx, clampX(k, a1), ROW[k] + 8, clampX(k + 1, b1), ROW[k + 1] - 8, alpha(PAL.ink, 0.45), 2, [6, 6]);
    });
    segs.forEach(([a, b], k) => {
      line(ctx, clampX(k, a), ROW[k], clampX(k, b), ROW[k], k ? fc : PAL.ink, 7);
      dot(ctx, clampX(k, a), ROW[k], k ? fc : PAL.ink, true, 7); dot(ctx, clampX(k, b), ROW[k], k ? fc : PAL.ink, false, 7);
    });
    const mid = (k) => (clampX(k, segs[k][0]) + clampX(k, segs[k][1])) / 2;
    text(ctx, `$\\times\\,\\kgprime(x) = ${n(gp)}$`, Math.max(mid(0), mid(1)) + 70, (ROW[0] + ROW[1]) / 2, dc, { size: 22, weight: 600, align: 'left', tex: true, bg: PAL.panel });
    text(ctx, `$\\times\\,\\kfprime(u) = ${n(fp, 3)}$`, Math.max(mid(1), mid(2)) + 70, (ROW[1] + ROW[2]) / 2, dc, { size: 22, weight: 600, align: 'left', tex: true, bg: PAL.panel });
    text(ctx, `$${c.tex[0]}$`, L - 40, ROW[1] + 34, fc, { size: 20, weight: 600, align: 'right', tex: true });
    text(ctx, `$${c.tex[1]}$`, L - 40, ROW[2] + 34, fc, { size: 20, weight: 600, align: 'right', tex: true });
    hits = [
      { x: mid(0), y: ROW[0], r: 20, name: `[x, x + Δx] = [${fmt(x, 2)}, ${fmt(x + dx, 2)}], length ${fmt(dx, 2)}` },
      { x: mid(1), y: ROW[1], r: 20, name: `from g(x) = ${fmt(u0, 3)} to g(x + Δx) = ${fmt(u1, 3)}, Δu = ${fmt(u1 - u0, 3)}` },
      { x: mid(2), y: ROW[2], r: 20, name: `from f(u) = ${fmt(y0, 3)} to ${fmt(y1, 3)}, Δy = ${fmt(y1 - y0, 3)}` },
    ];
    headline(ctx, `x = ${fmt(x, 2)}: g′(x) = ${fmt(gp, 2)}, f′(u) = ${fmt(fp, 3)}, so h′(x) = ${fmt(hp, 3)}; with Δx = ${fmt(dx, 2)}, Δy/Δx = ${fmt(ratio, 3)}.`);
    ro.set(`\\khprime(${n(x)}) = \\kfprime(\\kg(${n(x)}))\\,\\kgprime(${n(x)}) = (${n(fp, 3)})(${n(gp)}) = ${n(hp, 3)},\\qquad \\frac{\\Delta y}{\\Delta x} = ${n(ratio, 3)}`, undefined, { form: which.value });
  }
  still(d, draw);
})();
};
