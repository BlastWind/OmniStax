/* Figures for section 15.5 Triple Integrals in Cylindrical and Spherical Coordinates. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['15.5'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, register, tex, fmt, begin, axes, line, text } = F;
const SP = F.space;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const hue = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const n2 = (v, dec = 2) => fmt(v, dec);
const nt = (v) => String(+v.toFixed(2)).replace('-', '−');
const lab3 = (s, p, color) => ({ k: 'label', s, p, color });
const PI = Math.PI, TAU = 2 * PI;
const span = (a, b, n) => Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n);
const sph = (r, t, p) => [r * Math.sin(p) * Math.cos(t), r * Math.sin(p) * Math.sin(t), r * Math.cos(p)];
/* a still copy of a solid from its iterated-integral bounds, locked */
function solidCopy(id, box, E, labels, readout, o = {}) {
  const d = sim(id);
  const S = F.space3d(d, { box, h: o.h ?? 440, locked: true, turn: o.turn ?? -2.3, tilt: o.tilt ?? 0.4, fit: o.fit });
  still(d, () => {
    S.set('axes', SP.axes(box, { ticks: o.ticks ?? 1 }));
    S.set('solid', [...SP.solid(E, C('region'), { alpha: 0.42, n: 40 }), ...labels()]);
    if (readout) tex(d.readout, readout());
  });
}

/* Figure 15.50: the point P(r, θ, z) in cylindrical coordinates; box ±3.2 by ±3.2 by 0 to 3.2 */
(function () {
  const d = sim('sim-cylindrical-point');
  const box = [[-3.2, 3.2], [-3.2, 3.2], [0, 3.2]];
  const S = F.space3d(d, { box, h: 500, pitch: [0.1, 1.4], fit: 3.2 });
  const rs = ctl(d.controls, { label: 'r', cls: '', key: 'r', min: 0, max: 3, step: 0.05, value: 2, unit: '', dec: 2 });
  const ts = ctl(d.controls, { label: '\\ktheta', cls: 'angle', key: 'theta', min: 0, max: TAU, step: 0.01, value: PI / 3, unit: '', dec: 2 });
  const zs = ctl(d.controls, { label: 'z', cls: '', key: 'z', min: 0, max: 3, step: 0.05, value: 2, unit: '', dec: 2 });
  function draw() {
    const r = rs.v, t = ts.v, z = zs.v, x = r * Math.cos(t), y = r * Math.sin(t), A = C('angle');
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('point', [{ k: 'line', pts: [[0, 0, 0], [x, y, 0]], color: 'ink', w: 3 }, { k: 'line', pts: [[x, y, 0], [x, y, z]], color: 'guide', w: 2.5, dash: [4, 8] },
      { k: 'line', pts: span(0, t, 40).map((s) => [0.6 * Math.cos(s), 0.6 * Math.sin(s), 0]), color: A, w: 3 }, lab3('$\\ktheta$', [0.85 * Math.cos(t / 2), 0.85 * Math.sin(t / 2), 0], A),
      lab3('$r$', [x / 2, y / 2, 0.05], 'ink'), lab3('$z$', [x, y, z / 2], 'ink'), { k: 'dot', p: [x, y, 0], color: 'ink', r: 5 },
      ...SP.point([x, y, z], C('point'), { name: '$P(r,\\theta,z)$' })]);
    tex(d.readout, `x=r\\cos\\ktheta=${hue('point', nt(x))},\\quad y=r\\sin\\ktheta=${hue('point', nt(y))},\\quad z=${nt(z)}`);
  }
  still(d, draw);
})();

/* Figure 15.51: the cylindrical box 1 ≤ r ≤ 2, 0 ≤ θ ≤ π/2, 0 ≤ z ≤ 2 cut into l m n subboxes (a stand-in); box 0 to 2.3 by 0 to 2.3 by 0 to 2.3 */
(function () {
  const d = sim('sim-cylindrical-box');
  const a = 1, b = 2, al = 0, be = PI / 2, c = 0, dz = 2, box = [[0, 2.3], [0, 2.3], [0, 2.3]];
  const S = F.space3d(d, { box, h: 520, pitch: [0.1, 1.4] });
  const ls = ctl(d.controls, { label: 'l', cls: '', key: 'l', min: 1, max: 6, step: 1, value: 3, unit: '', dec: 0 });
  const ms = ctl(d.controls, { label: 'm', cls: '', key: 'm', min: 1, max: 6, step: 1, value: 4, unit: '', dec: 0 });
  const ns = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 6, step: 1, value: 2, unit: '', dec: 0 });
  function draw() {
    const l = ls.v, m = ms.v, n = ns.v, R = span(a, b, l), Th = span(al, be, m), Z = span(c, dz, n), segs = [];
    Z.forEach((z) => { R.forEach((r) => { const p = span(al, be, 24).map((t) => [r * Math.cos(t), r * Math.sin(t), z]); for (let i = 0; i < 24; i++) segs.push([p[i], p[i + 1]]); }); Th.forEach((t) => segs.push([[a * Math.cos(t), a * Math.sin(t), z], [b * Math.cos(t), b * Math.sin(t), z]])); });
    R.forEach((r) => Th.forEach((t) => segs.push([[r * Math.cos(t), r * Math.sin(t), c], [r * Math.cos(t), r * Math.sin(t), dz]])));
    const i = Math.min(1, l - 1), j = Math.min(1, m - 1), k = Math.min(0, n - 1);
    const r0 = R[i], r1 = R[i + 1], t0 = Th[j], t1 = Th[j + 1], z0 = Z[k], z1 = Z[k + 1], rm = (r0 + r1) / 2, tm = (t0 + t1) / 2;
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('box', [...SP.solid({ theta: [al, be], r: [a, b], z: [c, dz] }, C('region'), { alpha: 0.1 }), { k: 'segs', segs, color: C('region'), w: 1.5 }, lab3('$\\kB$', [0.2, 2.1, 2.1], C('region'))]);
    S.set('one', [...SP.solid({ theta: [t0, t1], r: [r0, r1], z: [z0, z1] }, C('integral'), { alpha: 0.75 }),
      lab3('$\\Delta r$', [rm * Math.cos(t0) + 0.1, rm * Math.sin(t0) - 0.12, z1 + 0.05], 'ink'), lab3('$r\\,\\Delta\\theta$', [r1 * Math.cos(tm) + 0.15, r1 * Math.sin(tm) + 0.1, z1 + 0.05], 'ink'), lab3('$\\Delta z$', [r1 * Math.cos(t0) + 0.15, r1 * Math.sin(t0), (z0 + z1) / 2], 'ink')]);
    const dV = rm * (r1 - r0) * (t1 - t0) * (z1 - z0), tot = 0.5 * (b * b - a * a) * (be - al) * (dz - c);
    tex(d.readout, `\\Delta V\\approx r_{ijk}^{*}\\,\\Delta r\\,\\Delta\\ktheta\\,\\Delta z=${n2(rm)}\\cdot ${n2(r1 - r0)}\\cdot ${n2(t1 - t0, 3)}\\cdot ${n2(z1 - z0)}=${hue('integral', n2(dV, 3))},\\qquad \\sum\\Delta V=${hue('integral', n2(tot, 3))}`);
  }
  still(d, draw);
})();

/* Figure 15.52, a still copy: Example 15.44's region inside r = 2 sin θ under the sphere of radius 4; box ±1.3 by 0 to 2.3 by 0 to 4.3 */
solidCopy('fig-cylinder-sphere', [[-1.3, 1.3], [0, 2.3], [0, 4.3]], { theta: [0, PI], r: [0, (t) => 2 * Math.sin(t)], z: [0, (t, r) => Math.sqrt(16 - r * r)] },
  () => [lab3('$r=2\\sin\\theta$', [1.1, 1.6, 0], C('surface')), lab3('$r^{2}+z^{2}=16$', [0, 1, 4.2], C('surface'))], null, { turn: -2.0 });

/* Figure 15.53, a still copy: Example 15.45's region between the cone z = r and the paraboloid z = 2 − r²; box ±1.3 by ±1.3 by 0 to 2.3 */
solidCopy('fig-cone-paraboloid', [[-1.3, 1.3], [-1.3, 1.3], [0, 2.3]], { theta: [0, TAU], r: [0, 1], z: [(t, r) => r, (t, r) => 2 - r * r] },
  () => [lab3('$z=2-x^{2}-y^{2}$', [0, 0, 2.2], C('surface')), lab3('$z=\\sqrt{x^{2}+y^{2}}$', [1, 0, 0.75], C('surface'))],
  () => `\\kV=\\int_{0}^{2\\pi}\\int_{0}^{1}\\int_{r}^{2-r^{2}}r\\,dz\\,dr\\,d\\ktheta`);

/* Figure 15.54, a still copy: Example 15.46's region inside the cylinder r = 1 under the sphere r² + z² = 4; box ±1.3 by ±1.3 by 0 to 2.3 */
solidCopy('fig-sphere-cylinder', [[-1.3, 1.3], [-1.3, 1.3], [0, 2.3]], { theta: [0, TAU], r: [0, 1], z: [0, (t, r) => Math.sqrt(4 - r * r)] },
  () => [lab3('$x^{2}+y^{2}+z^{2}=4$', [0, 0, 2.15], C('surface')), lab3('$x^{2}+y^{2}=1$', [1, 0, 0.9], C('surface'))],
  () => `\\kV=\\int_{0}^{2\\pi}\\int_{0}^{1}\\int_{0}^{\\sqrt{4-r^{2}}}r\\,dz\\,dr\\,d\\ktheta=${hue('integral', '2\\pi(\\tfrac{8}{3}-\\sqrt{3})')}`);

/* Figure 15.55: the point P(ρ, θ, φ) in spherical coordinates; box ±3.2 on each axis */
(function () {
  const d = sim('sim-spherical-point');
  const box = [[-3.2, 3.2], [-3.2, 3.2], [-3.2, 3.2]];
  const S = F.space3d(d, { box, h: 520, pitch: [-0.4, 1.4], fit: 3.0 });
  const rs = ctl(d.controls, { label: '\\rho', cls: '', key: 'rho', min: 0, max: 3, step: 0.05, value: 2.5, unit: '', dec: 2 });
  const ts = ctl(d.controls, { label: '\\ktheta', cls: 'angle', key: 'theta', min: 0, max: TAU, step: 0.01, value: PI / 4, unit: '', dec: 2 });
  const ps = ctl(d.controls, { label: '\\kphi', cls: 'angle', key: 'phi', min: 0, max: PI, step: 0.01, value: PI / 4, unit: '', dec: 2 });
  function draw() {
    const r = rs.v, t = ts.v, p = ps.v, P = sph(r, t, p), A = C('angle'), q = [P[0], P[1], 0];
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('point', [{ k: 'line', pts: [[0, 0, 0], P], color: 'ink', w: 3.5 }, { k: 'line', pts: [[0, 0, 0], q], color: 'guide', w: 2.5, dash: [4, 8] }, { k: 'line', pts: [q, P], color: 'guide', w: 2.5, dash: [4, 8] },
      { k: 'line', pts: span(0, t, 40).map((s) => [0.6 * Math.cos(s), 0.6 * Math.sin(s), 0]), color: A, w: 3 }, lab3('$\\ktheta$', [0.85 * Math.cos(t / 2), 0.85 * Math.sin(t / 2), 0], A),
      { k: 'line', pts: span(0, p, 40).map((s) => sph(0.8, t, s)), color: A, w: 3 }, lab3('$\\kphi$', sph(1.1, t, p / 2), A),
      lab3('$\\rho$', sph(r / 2, t, p).map((v, i) => v + (i === 2 ? 0.15 : 0)), 'ink'), ...SP.point(P, C('point'), { name: '$P(\\rho,\\theta,\\varphi)$' })]);
    tex(d.readout, `x=\\rho\\sin\\kphi\\cos\\ktheta=${hue('point', nt(P[0]))},\\quad y=\\rho\\sin\\kphi\\sin\\ktheta=${hue('point', nt(P[1]))},\\quad z=\\rho\\cos\\kphi=${hue('point', nt(P[2]))}`);
  }
  still(d, draw);
})();

/* Figure 15.56: the surfaces ρ = c, φ = c and θ = c; box ±2.6 on each axis */
(function () {
  const d = sim('sim-spherical-surfaces');
  const box = [[-2.6, 2.6], [-2.6, 2.6], [-2.6, 2.6]];
  const S = F.space3d(d, { box, h: 520, pitch: [-0.4, 1.4], fit: 2.8 });
  const RANGE = { rho: { min: 0.5, max: 2.5, step: 0.05, value: 2, unit: '', dec: 2 }, phi: { min: 0.15, max: PI - 0.15, step: 0.01, value: PI / 4, unit: '', dec: 2 }, theta: { min: 0, max: TAU, step: 0.01, value: PI / 3, unit: '', dec: 2 } };
  const cs = ctl(d.controls, { label: 'c', cls: '', key: 'c', ...RANGE.rho });
  const pick = choice(d.controls, { label: 'surface', options: [{ value: 'rho', label: 'ρ = c' }, { value: 'phi', label: 'φ = c' }, { value: 'theta', label: 'θ = c' }], value: 'rho', ms: 0, onInput: () => cs.range(RANGE[pick.value]) });
  function draw() {
    const c = cs.v, w = pick.value, sc = C('surface');
    S.set('axes', SP.axes(box, { ticks: 1 }));
    const surf = w === 'rho' ? SP.surface((u, v) => sph(c, u, v), [0, TAU], [0, PI], sc, { n: [48, 24], grid: 12, alpha: 0.45 })
      : w === 'phi' ? SP.surface((u, v) => sph(v, u, c), [0, TAU], [0, 2.4], sc, { n: [48, 12], grid: 12, alpha: 0.45 })
      : SP.surface((u, v) => [u * Math.cos(c), u * Math.sin(c), v], [0, 2.4], [-2.4, 2.4], sc, { n: [8, 8], grid: 8, alpha: 0.45 });
    const name = w === 'rho' ? `$\\rho=${nt(c)}$` : w === 'phi' ? `$\\varphi=${nt(c)}$` : `$\\theta=${nt(c)}$`;
    const at = w === 'rho' ? sph(c, PI / 4, PI / 4) : w === 'phi' ? sph(2.2, 0, c) : [2.2 * Math.cos(c), 2.2 * Math.sin(c), 2.2];
    S.set('surface', [...surf, lab3(name, at, sc)]);
    tex(d.readout, w === 'rho' ? `\\rho=${nt(c)}:\\;x^{2}+y^{2}+z^{2}=${nt(c * c)},\\;\\text{a sphere}` : w === 'phi' ? `\\kphi=${nt(c)}:\\;\\text{a half-cone about the }z\\text{-axis}` : `\\ktheta=${nt(c)}:\\;\\text{a half-plane through the }z\\text{-axis}`);
  }
  still(d, draw);
})();

/* Figure 15.57: the spherical box at (ρ, θ, φ) with Δρ = 0.4, Δθ = 0.5, Δφ = 0.4; box 0 to 2.8 on each axis */
(function () {
  const d = sim('sim-spherical-element');
  const box = [[-0.3, 2.8], [-0.3, 2.8], [-0.6, 2.8]], dr = 0.4, dt = 0.5, dp = 0.4, t0 = 0.45;
  const S = F.space3d(d, { box, h: 520, pitch: [0.1, 1.4], fit: 3.4 });
  const rs = ctl(d.controls, { label: '\\rho', cls: '', key: 'rho', min: 0.6, max: 2.2, step: 0.02, value: 1.6, unit: '', dec: 2 });
  const ps = ctl(d.controls, { label: '\\kphi', cls: 'angle', key: 'phi', min: 0.2, max: PI - 0.6, step: 0.01, value: 0.8, unit: '', dec: 2 });
  function draw() {
    const r = rs.v, p = ps.v, A = C('angle');
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('box', [...SP.solid({ theta: [t0, t0 + dt], phi: [p, p + dp], rho: [r, r + dr] }, C('integral'), { alpha: 0.6, n: 12 }),
      { k: 'line', pts: [[0, 0, 0], sph(r, t0, p)], color: 'guide', w: 2, dash: [4, 8] }, { k: 'line', pts: [[0, 0, 0], sph(r, t0, p + dp)], color: 'guide', w: 2, dash: [4, 8] },
      { k: 'line', pts: span(0, p, 30).map((s) => sph(0.5, t0, s)), color: A, w: 3 }, lab3('$\\kphi$', sph(0.7, t0, p / 2), A),
      lab3('$\\Delta\\rho$', sph(r + dr / 2, t0, p - 0.05), 'ink'), lab3('$\\rho\\,\\Delta\\varphi$', sph(r + dr + 0.15, t0, p + dp / 2), 'ink'), lab3('$\\rho\\sin\\varphi\\,\\Delta\\theta$', sph(r + dr + 0.15, t0 + dt / 2, p + dp), 'ink')]);
    const approx = r * r * Math.sin(p) * dr * dp * dt, exact = ((r + dr) ** 3 - r ** 3) / 3 * (Math.cos(p) - Math.cos(p + dp)) * dt;
    tex(d.readout, `\\Delta V\\approx (\\Delta\\rho)(\\rho\\,\\Delta\\kphi)(\\rho\\sin\\kphi\\,\\Delta\\ktheta)=\\rho^{2}\\sin\\kphi\\,\\Delta\\rho\\,\\Delta\\kphi\\,\\Delta\\ktheta=${hue('integral', n2(approx, 4))},\\qquad \\text{exactly }${hue('integral', n2(exact, 4))}`);
  }
  still(d, draw);
})();

/* Figure 15.58, a still copy: Example 15.48's region inside the cone φ = π/6 under the sphere ρ = 2; box ±1.3 by ±1.3 by 0 to 2.3 */
solidCopy('fig-cone-hemisphere', [[-1.3, 1.3], [-1.3, 1.3], [0, 2.3]], { theta: [0, TAU], phi: [0, PI / 6], rho: [0, 2] },
  () => [lab3('$z=\\sqrt{4-x^{2}-y^{2}}$', [0, 0, 2.2], C('surface')), lab3('$z=\\sqrt{3(x^{2}+y^{2})}$', [0.9, 0, 1.2], C('surface'))],
  () => `\\kV=\\int_{0}^{2\\pi}\\int_{0}^{\\pi/6}\\int_{0}^{2}\\rho^{2}\\sin\\kphi\\,d\\rho\\,d\\kphi\\,d\\ktheta`);

/* Figure 15.59, a still copy: Example 15.49's region inside the cone φ = π/4 and the sphere ρ = cos φ; box ±0.7 by ±0.7 by 0 to 1.1 */
solidCopy('fig-cone-sphere', [[-0.7, 0.7], [-0.7, 0.7], [0, 1.1]], { theta: [0, TAU], phi: [0, PI / 4], rho: [0, (t, p) => Math.cos(p)] },
  () => [lab3('$x^{2}+y^{2}+z^{2}=z$', [0, 0, 1.05], C('surface')), lab3('$z=\\sqrt{x^{2}+y^{2}}$', [0.5, 0, 0.35], C('surface'))],
  () => `\\kV=\\int_{0}^{2\\pi}\\int_{0}^{\\pi/4}\\int_{0}^{\\cos\\kphi}\\rho^{2}\\sin\\kphi\\,d\\rho\\,d\\kphi\\,d\\ktheta=${hue('integral', '\\tfrac{\\pi}{8}')}`, { ticks: 0.5 });

/* Figure 15.62, a still copy: the project's balloon, a half sphere of radius 28 ft on a frustum 44 ft tall from radius 28 ft down to 6 ft; box ±32 by ±32 by −46 to 32 */
solidCopy('fig-balloon-model', [[-32, 32], [-32, 32], [-46, 32]], { theta: [0, TAU], z: [-44, 28], r: [0, (t, z) => (z >= 0 ? Math.sqrt(Math.max(0, 784 - z * z)) : 6 + (22 * (z + 44)) / 44)] },
  () => [lab3('$28\\text{ ft}$', [0, 0, 30], 'ink'), lab3('$44\\text{ ft}$', [26, 0, -22], 'ink'), lab3('$12\\text{ ft}$', [0, 0, -47], 'ink')], null, { ticks: 0, h: 460, tilt: 0.25, fit: 3.0 });

/* Figure 15.63, a still copy: the balloon's cross section and the column 12 ft wide and 20 ft high above the burner; frame −45 to 55 by −52 to 36, in feet */
(function () {
  const H = 520, d = sim('fig-burner-column', H);
  still(d, () => {
    const { ctx } = begin(d.c), s = (H - 70) / 88, w = 100 * s;
    const ax = axes(ctx, { l: 700 - w / 2, r: 700 + w / 2, t: 30, b: 30 + 88 * s }, [-45, 55], [-52, 36], { xl: 'x', yl: 'z', nx: 0, ny: 0 });
    const sc = C('surface'), rc = C('region'), g = alpha(PAL.ink, 0.45);
    ctx.save(); ctx.strokeStyle = sc; ctx.lineWidth = 4; ctx.beginPath();
    span(0, PI, 60).forEach((t, i) => { const X = ax.X(28 * Math.cos(t)), Y = ax.Y(28 * Math.sin(t)); if (i) ctx.lineTo(X, Y); else ctx.moveTo(X, Y); });
    ctx.lineTo(ax.X(-6), ax.Y(-44)); ctx.lineTo(ax.X(6), ax.Y(-44)); ctx.lineTo(ax.X(28), ax.Y(0)); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.fillStyle = alpha(rc, 0.3); ctx.fillRect(ax.X(-6), ax.Y(-24), ax.X(6) - ax.X(-6), ax.Y(-44) - ax.Y(-24)); ctx.restore();
    ctx.save(); ctx.strokeStyle = rc; ctx.lineWidth = 3; ctx.strokeRect(ax.X(-6), ax.Y(-24), ax.X(6) - ax.X(-6), ax.Y(-44) - ax.Y(-24)); ctx.restore();
    line(ctx, ax.X(0), ax.Y(28), ax.X(45), ax.Y(28), g, 2, [6, 6]); line(ctx, ax.X(-40), ax.Y(-44), ax.X(50), ax.Y(-44), g, 2, [6, 6]); line(ctx, ax.X(-40), ax.Y(-24), ax.X(8), ax.Y(-24), g, 2, [6, 6]);
    F.arrow(ctx, ax.X(42), ax.Y(14), ax.X(42), ax.Y(28), PAL.ink, 2.5); F.arrow(ctx, ax.X(42), ax.Y(14), ax.X(42), ax.Y(0), PAL.ink, 2.5);
    F.arrow(ctx, ax.X(42), ax.Y(-22), ax.X(42), ax.Y(0), PAL.ink, 2.5); F.arrow(ctx, ax.X(42), ax.Y(-22), ax.X(42), ax.Y(-44), PAL.ink, 2.5);
    F.arrow(ctx, ax.X(-34), ax.Y(-34), ax.X(-34), ax.Y(-24), PAL.ink, 2.5); F.arrow(ctx, ax.X(-34), ax.Y(-34), ax.X(-34), ax.Y(-44), PAL.ink, 2.5);
    F.arrow(ctx, ax.X(0), ax.Y(-48), ax.X(-6), ax.Y(-48), PAL.ink, 2.5); F.arrow(ctx, ax.X(0), ax.Y(-48), ax.X(6), ax.Y(-48), PAL.ink, 2.5);
    const t = (s2, x, y, al = 'left') => text(ctx, s2, ax.X(x), ax.Y(y), PAL.ink, { size: 20, tex: true, bg: PAL.panel, align: al });
    t('$28\\text{ ft}$', 45, 14); t('$44\\text{ ft}$', 45, -22); t('$20\\text{ ft}$', -37, -34, 'right'); t('$12\\text{ ft}$', 0, -51.5, 'center');
  });
})();
};
