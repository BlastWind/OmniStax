/* Figures for section 16.8 The Divergence Theorem. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['16.8'] = function (root, F) {
const { C, alpha, ctl, choice, select, register, tex, fmt } = F;
const SP = F.space;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n2 = (v, dec = 2) => fmt(v, dec);
const hue = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const TAU = 2 * Math.PI, PI = Math.PI;
const mid = (n, f) => { let s = 0; for (let i = 0; i < n; i++) s += f((i + 0.5) / n); return s / n; };
const mid2 = (n, f) => mid(n, (a) => mid(n, (b) => f(a, b)));
const mid3 = (n, f) => mid(n, (a) => mid(n, (b) => mid(n, (c) => f(a, b, c))));

/* The closed surfaces of the divergence theorem, each a list of faces r(s, t) on [0, 1]² with their outward cross products and a
   map of the unit cube onto the solid with its Jacobian; size a and centre c. */
const SOLIDS = {
  ball: (c, a) => ({
    faces: [{ r: (s, t) => [c[0] + a * Math.sin(PI * s) * Math.cos(TAU * t), c[1] + a * Math.sin(PI * s) * Math.sin(TAU * t), c[2] + a * Math.cos(PI * s)], n: (s, t) => { const p = PI * s, q = TAU * t, k = a * a * Math.sin(p) * PI * TAU; return [k * Math.sin(p) * Math.cos(q), k * Math.sin(p) * Math.sin(q), k * Math.cos(p)]; } }],
    vol: (u, v, w) => { const r = a * u, p = PI * v, q = TAU * w; return [[c[0] + r * Math.sin(p) * Math.cos(q), c[1] + r * Math.sin(p) * Math.sin(q), c[2] + r * Math.cos(p)], r * r * Math.sin(p) * a * PI * TAU]; },
    volume: (4 / 3) * PI * a ** 3 }),
  cyl: (c, a) => {
    const h = a, R = a / 2, z0 = c[2] - a / 2;
    return {
      faces: [
        { r: (s, t) => [c[0] + R * Math.cos(TAU * s), c[1] + R * Math.sin(TAU * s), z0 + h * t], n: (s) => [R * Math.cos(TAU * s) * TAU * h, R * Math.sin(TAU * s) * TAU * h, 0] },
        { r: (s, t) => [c[0] + R * s * Math.cos(TAU * t), c[1] + R * s * Math.sin(TAU * t), z0 + h], n: (s) => [0, 0, R * R * s * TAU] },
        { r: (s, t) => [c[0] + R * s * Math.cos(TAU * t), c[1] + R * s * Math.sin(TAU * t), z0], n: (s) => [0, 0, -R * R * s * TAU] },
      ],
      vol: (u, v, w) => { const r = R * u, q = TAU * v; return [[c[0] + r * Math.cos(q), c[1] + r * Math.sin(q), z0 + h * w], r * R * TAU * h]; },
      volume: PI * R * R * h };
  },
  box: (c, a) => {
    const L = (i, s) => c[i] - a / 2 + a * s, A = a * a;
    return {
      faces: [
        { r: (s, t) => [L(0, 1), L(1, s), L(2, t)], n: () => [A, 0, 0] }, { r: (s, t) => [L(0, 0), L(1, t), L(2, s)], n: () => [-A, 0, 0] },
        { r: (s, t) => [L(0, t), L(1, 1), L(2, s)], n: () => [0, A, 0] }, { r: (s, t) => [L(0, s), L(1, 0), L(2, t)], n: () => [0, -A, 0] },
        { r: (s, t) => [L(0, s), L(1, t), L(2, 1)], n: () => [0, 0, A] }, { r: (s, t) => [L(0, t), L(1, s), L(2, 0)], n: () => [0, 0, -A] },
      ],
      vol: (u, v, w) => [[L(0, u), L(1, v), L(2, w)], a ** 3], volume: a ** 3 };
  },
};

/* Figure 16.87: the flux of F out of a closed surface S and the triple integral of div F over the solid E inside it, computed live as the
   solid is moved up and down or resized; the presets are Example 16.78's cylinder, Example 16.77's field (div F = 2), Example 16.79's
   cube in ⟨−y/z, x/z, 0⟩ and the inverse-square field F_r, whose two sides disagree when S encloses the origin. */
(function () {
  const d = sim('sim-divergence-theorem');
  const PRESETS = [
    { label: '⟨x³/3 + yz, y³/3 − sin(xz), z − x − y⟩', F: ([x, y, z]) => [x ** 3 / 3 + y * z, y ** 3 / 3 - Math.sin(x * z), z - x - y], div: ([x, y]) => x * x + y * y + 1, dtex: '(x^{2}+y^{2}+1)', solid: 'cyl', c: [0, 0, 1], a: 2, box: [[-2, 2], [-2, 2], [-2.5, 3.5]] },
    { label: '⟨x − y, x + z, z − y⟩', F: ([x, y, z]) => [x - y, x + z, z - y], div: () => 2, dtex: '2', solid: 'ball', c: [0, 0, 0], a: 1, box: [[-2.5, 2.5], [-2.5, 2.5], [-2.5, 2.5]] },
    { label: '⟨−y/z, x/z, 0⟩', F: ([x, y, z]) => [-y / z, x / z, 0], div: () => 0, dtex: '0', solid: 'box', c: [2.5, 3.5, 2.5], a: 3, box: [[0, 5], [0, 6], [0, 5]], zmin: true },
    { label: 'F_r = ⟨x, y, z⟩/r³', F: ([x, y, z]) => { const r = Math.hypot(x, y, z); return [x / r ** 3, y / r ** 3, z / r ** 3]; }, div: () => 0, dtex: '0', solid: 'ball', c: [0, 0, 1.8], a: 1, box: [[-2.5, 2.5], [-2.5, 2.5], [-2.5, 3.5]], hole: true },
  ];
  const pick = select(d.controls, { label: 'F', key: 'preset', options: PRESETS.map((p, i) => ({ value: String(i), label: p.label })), value: '0', ms: 0, onInput: () => apply() });
  const shape = choice(d.controls, { label: 'E', key: 'solid', options: [{ value: 'ball', label: 'ball' }, { value: 'cyl', label: 'cylinder' }, { value: 'box', label: 'cube' }], value: 'cyl', ms: 0 });
  const as = ctl(d.controls, { label: 'size', cls: '', key: 'a', min: 0.4, max: 3, step: 0.05, value: 2, unit: '', dec: 2 });
  const zs = ctl(d.controls, { label: 'z₀', cls: '', key: 'z', min: -1.5, max: 2.5, step: 0.05, value: 1, unit: '', dec: 2 });
  function apply() { const p = PRESETS[+pick.value]; shape.set(p.solid); as.drive(p.a); zs.drive(p.c[2]); }
  let S = null, at = '';
  function draw() {
    const p = PRESETS[+pick.value], c = [p.c[0], p.c[1], p.zmin ? Math.max(as.v / 2 + 0.2, zs.v) : zs.v], E = SOLIDS[shape.value](c, as.v);
    if (at !== pick.value) { at = pick.value; S?.v?.dispose?.(); d.stage.replaceChildren(); S = F.space3d(d, { box: p.box, h: 560, pitch: [-1.4, 1.4] }); }
    const flux = E.faces.reduce((s, f) => s + mid2(48, (a, b) => SP.dot(p.F(f.r(a, b)), f.n(a, b))), 0);
    const inner = mid3(24, (u, v, w) => { const [q, J] = E.vol(u, v, w); return p.div(q) * J; });
    S.set('axes', SP.axes(p.box, { ticks: 1 }));
    S.set('field', SP.field((q) => { const v = p.F(q); return v.every(Number.isFinite) && Math.hypot(...v) < 40 ? v : [0, 0, 0]; }, p.box, alpha(C('vector-field'), 0.4), { n: [4, 4, 4] }));
    S.set('solid', E.faces.flatMap((f) => SP.surface(f.r, [0, 1], [0, 1], C('surface'), { n: [24, 12], grid: 4, alpha: 0.4 })));
    const eq = Math.abs(flux - inner) < 0.03 * Math.max(1, Math.abs(flux)) ? '=' : '\\ne';
    tex(d.readout, `\\iint_{\\kS}\\kvecF\\cdot d\\mathbf{S}=${hue('integral', n2(flux))}\\;${eq}\\;${hue('integral', n2(inner))}=\\iiint_{\\kE}${p.dtex}\\,dV` + (p.hole && eq !== '=' ? `,\\quad\\text{the origin, where}\\;\\kvecF_{r}\\;\\text{is undefined, lies inside}\\;\\kS` : ''));
  }
  still(d, draw);
})();

/* Figure 16.89: the ball B_r of radius r about P = (1, 0, 0.5) in F = ⟨x³, y, z²⟩, whose divergence there is 3x² + 1 + 2z = 5; the
   outward flux across S_r per unit volume tends to div F(P). Box −0.8 to 2.8 by ±1.8 by −1.3 to 2.3. */
(function () {
  const d = sim('sim-div-ball');
  const P = [1, 0, 0.5], Fv = ([x, y, z]) => [x ** 3, y, z * z], box = [[-0.8, 2.8], [-1.8, 1.8], [-1.3, 2.3]];
  const S = F.space3d(d, { box, h: 520, pitch: [-1.4, 1.4] });
  const rs = ctl(d.controls, { label: 'r', cls: '', key: 'r', min: 0.05, max: 1.5, step: 0.01, value: 1.2, unit: '', dec: 2 });
  function draw() {
    const r = rs.v, E = SOLIDS.ball(P, r), flux = mid2(64, (a, b) => SP.dot(Fv(E.faces[0].r(a, b)), E.faces[0].n(a, b)));
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('field', SP.field(Fv, box, alpha(C('vector-field'), 0.45), { n: [4, 4, 4] }));
    S.set('ball', [...SP.surface(E.faces[0].r, [0, 1], [0, 1], C('surface'), { n: [24, 32], grid: 6, alpha: 0.4 }), ...SP.point(P, C('point'), { name: '$P$' })]);
    tex(d.readout, `\\frac{1}{V(B_{r})}\\iint_{S_{r}}\\kvecF\\cdot d\\mathbf{S}=${hue('integral', n2(flux / E.volume, 3))}\\;\\to\\;\\kdivF(P)=3x^{2}+1+2z=${hue('function', '5')}`);
  }
  still(d, draw);
})();

/* Figure 16.90: Example 16.79's v = ⟨−y/z, x/z, 0⟩ and the cube 1 ≤ x ≤ 4, 2 ≤ y ≤ 5, 1 ≤ z ≤ 4 in it; box [0, 5] × [0, 6] × [0.5, 5] */
(function () {
  const d = sim('sim-swirl-cube');
  const Fv = ([x, y, z]) => [-y / z, x / z, 0], box = [[0, 5], [0, 6], [0.5, 5]];
  const S = F.space3d(d, { box, h: 520, pitch: [-1.4, 1.4] });
  function draw() {
    const E = SOLIDS.box([2.5, 3.5, 2.5], 3);
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('field', SP.field(Fv, box, C('vector-field'), { n: [5, 5, 4] }));
    S.set('cube', E.faces.flatMap((f) => SP.surface(f.r, [0, 1], [0, 1], C('surface'), { n: [2, 2], grid: 0, alpha: 0.25 })));
    tex(d.readout, `\\operatorname{div}\\kvecv=\\frac{\\partial}{\\partial x}\\left(-\\frac{y}{z}\\right)+\\frac{\\partial}{\\partial y}\\left(\\frac{x}{z}\\right)+0=0`);
  }
  still(d, draw);
})();
};
