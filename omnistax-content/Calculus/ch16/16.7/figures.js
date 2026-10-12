/* Figures for section 16.7 Stokes' Theorem. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['16.7'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, cycle, register, tex, fmt } = F;
const SP = F.space;
const sim = (id, H) => F.sim(root, id, H);
const n2 = (v, dec = 2) => fmt(v, dec);
const hue = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const TAU = 2 * Math.PI, PI = Math.PI;
/* ∮ F · dr round a closed parameterized curve c(t), 0 ≤ t ≤ 2π, by the midpoint rule */
function circ(Fv, c, m = 720) { let s = 0; const h = TAU / m; for (let i = 0; i < m; i++) { const t = (i + 0.5) * h, p = c(t), a = c(t + 1e-5), b = c(t - 1e-5), v = Fv(p); s += (v[0] * (a[0] - b[0]) + v[1] * (a[1] - b[1]) + v[2] * (a[2] - b[2])) / 2e-5 * h; } return s; }

/* Figure 16.79 + 16.83: the surfaces z = c(4 − x² − y²) over the disk of radius 2, all bounded by the circle C of radius 2 in the
   xy-plane, oriented upward with C counterclockwise; ∮_C F · dr and ∬_S curl F · dS computed live. c = 1 is Example 16.73's
   paraboloid, c = 0 the disk. Box ±2.4 by −2.6 to 4.6. */
(function () {
  const d = sim('sim-stokes');
  const FIELDS = {
    ex: { F: ([x, y, z]) => [y, 2 * z, x * x], curl: ([x]) => [-2, -2 * x, -1], tex: '\\langle y,2z,x^{2}\\rangle', ctex: '\\langle -2,-2x,-1\\rangle' },
    spin: { F: ([x, y, z]) => [-y, x, z], curl: () => [0, 0, 2], tex: '\\langle -y,x,z\\rangle', ctex: '\\langle 0,0,2\\rangle' },
    tilt: { F: ([x, y, z]) => [z, x, y], curl: () => [1, 1, 1], tex: '\\langle z,x,y\\rangle', ctex: '\\langle 1,1,1\\rangle' },
  };
  const box = [[-2.4, 2.4], [-2.4, 2.4], [-2.6, 4.6]];
  const S = F.space3d(d, { box, h: 560, pitch: [-1.2, 1.4] });
  const pick = choice(d.controls, { label: 'F', key: 'field', options: [{ value: 'ex', label: '⟨y, 2z, x²⟩' }, { value: 'spin', label: '⟨−y, x, z⟩' }, { value: 'tilt', label: '⟨z, x, y⟩' }], value: 'ex', ms: 0 });
  const cs = ctl(d.controls, { label: 'c', cls: '', key: 'c', min: -0.6, max: 1.1, step: 0.01, value: 1, unit: '', dec: 2, specials: [{ at: 0 }, { at: 1 }] });
  const bd = (t) => [2 * Math.cos(t), 2 * Math.sin(t), 0];
  function draw() {
    const o = FIELDS[pick.value], c = cs.v, r = (p, t) => [p * Math.cos(t), p * Math.sin(t), c * (4 - p * p)], vf = C('vector-field');
    let flux = 0; const m = 40, k = 80;
    for (let i = 0; i < m; i++) for (let j = 0; j < k; j++) {
      const p = ((i + 0.5) * 2) / m, t = ((j + 0.5) * TAU) / k, q = r(p, t), w = o.curl(q), nn = [2 * c * p * p * Math.cos(t), 2 * c * p * p * Math.sin(t), p];
      flux += SP.dot(w, nn) * (2 / m) * (TAU / k);
    }
    const line = circ(o.F, bd);
    const curls = [];
    for (let i = 1; i <= 2; i++) for (let j = 0; j < 6; j++) { const p = 0.75 * i, t = (j * TAU) / 6 + i * 0.4, q = r(p, t); curls.push(...SP.vector(q, SP.add(q, SP.mul(SP.unit(o.curl(q)), 0.6)), vf, { w: 3.5 })); }
    S.set('axes', SP.axes(box, { ticks: 2 }));
    S.set('surface', SP.surface(r, [0, 2], [0, TAU], C('surface'), { n: [20, 48], grid: 6, alpha: 0.5 }));
    S.set('boundary', [...SP.curve(bd, [0, TAU], C('curve'), { w: 6 }), ...SP.vector(bd(0.9), SP.add(bd(0.9), [-0.6 * Math.sin(0.9), 0.6 * Math.cos(0.9), 0]), C('curve'), { w: 6 }), { k: 'label', s: '$\\kC$', p: [2.2, -1.2, 0] }, { k: 'label', s: '$\\kS$', p: r(0.9, 2.4) }]);
    S.set('curl', curls);
    const eq = Math.abs(line - flux) < 0.02 ? '=' : '\\approx';
    tex(d.readout, `\\oint_{\\kC}\\kvecF\\cdot d\\mathbf{r}=${hue('integral', n2(line))}\\;${eq}\\;${hue('integral', n2(flux))}=\\iint_{\\kS}\\kcurlF\\cdot d\\mathbf{S},\\quad \\kcurlF=${o.ctex}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* Figure 16.85 + 16.86: a disk D_r of radius r about the origin with unit normal N = ⟨0, sin α, cos α⟩ in F = ⟨z − (y + y³)/2, x/2, 0⟩, whose curl
   at the origin is ⟨0, 1, 1⟩; the circulation round C_r per unit area tends to curl F · N, largest when N points along the curl, and a
   paddlewheel on the disk turns at half that rate. Box ±1.6. */
(function () {
  const d = sim('sim-curl-circulation');
  const Fv = ([x, y, z]) => [z - (y + y ** 3) / 2, x / 2, 0], curl0 = [0, 1, 1];
  const box = [[-1.6, 1.6], [-1.6, 1.6], [-1.6, 1.6]];
  const S = F.space3d(d, { box, h: 540, pitch: [-1.4, 1.4] });
  const as = ctl(d.controls, { label: 'α', cls: 'angle', key: 'a', min: -90, max: 90, step: 1, value: 0, unit: '°', dec: 0, specials: [{ at: 45 }] });
  const rs = ctl(d.controls, { label: 'r', cls: '', key: 'r', min: 0.1, max: 1.4, step: 0.01, value: 1, unit: '', dec: 2 });
  const cy = cycle(() => 6, 0);
  let ang = 0;
  function draw() {
    const a = (as.v * PI) / 180, r = rs.v, N = [0, Math.sin(a), Math.cos(a)], u = [1, 0, 0], w = SP.cross(N, u);
    const ring = (t) => SP.add(SP.mul(u, r * Math.cos(t)), SP.mul(w, r * Math.sin(t)));
    const per = circ(Fv, ring) / (PI * r * r), lim = SP.dot(curl0, N);
    const blades = [0, 1, 2, 3].map((k) => { const q = ang + (k * PI) / 2; return [[0, 0, 0], ring(q)]; });
    S.set('axes', SP.axes(box, { ticks: 0 }));
    S.set('field', SP.field(Fv, box, alpha(C('vector-field'), 0.35), { n: [4, 4, 4] }));
    S.set('disk', [{ k: 'faces', faces: [Array.from({ length: 48 }, (_, i) => ring((i * TAU) / 48))], color: C('surface'), alpha: 0.35 },
      ...SP.curve(ring, [0, TAU], C('curve'), { w: 5 }), { k: 'segs', segs: blades, color: 'ink', w: 5 },
      ...SP.vector([0, 0, 0], N, C('vector'), { name: '$\\kvecN$', w: 5 }), ...SP.vector([0, 0, 0], SP.mul(SP.unit(curl0), 1.3), C('vector-field'), { name: '$\\kcurlF$', w: 4 })]);
    tex(d.readout, `\\frac{1}{\\pi r^{2}}\\oint_{\\kC_{r}}\\kvecF\\cdot d\\mathbf{r}=${hue('integral', n2(per, 3))}\\;\\to\\;\\kcurlF(P_{0})\\cdot\\kvecN=\\sin\\alpha+\\cos\\alpha=${hue('function', n2(lim, 3))}`);
  }
  register(d.fig, { update: (dt) => { cy.step(dt, () => 1); ang += (SP.dot(curl0, [0, Math.sin((as.v * PI) / 180), Math.cos((as.v * PI) / 180)]) / 2) * dt; }, draw });
})();
};
