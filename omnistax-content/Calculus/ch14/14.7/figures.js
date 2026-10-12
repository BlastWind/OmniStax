/* Figures for section 14.7 Maxima/Minima Problems. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['14.7'] = function (root, F) {
const { C, ctl, choice, register, tex, fmt } = F;
const SP = F.space;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec);
const hue = (type, s) => `\\htmlClass{kv-${type}}{${s}}`;
const TAU = 2 * Math.PI;
/* axes whose z ticks read K times the drawn height */
function scaledAxes(box, K, step) {
  const org = box.map(([a, b]) => (a <= 0 && b >= 0 ? 0 : a));
  const out = SP.axes(box, { ticks: [box[0][1] - box[0][0] > 12 ? 10 : 1, box[1][1] - box[1][0] > 12 ? 5 : 1, 0] });
  const dx = (box[0][1] - box[0][0]) * 0.03;
  for (let v = Math.ceil(box[2][0] / step) * step; v < box[2][1] - step * 0.3; v += step) {
    if (Math.abs(v) < 1e-9) continue;
    out.push({ k: 'segs', segs: [[[org[0] - dx / 2, org[1], v], [org[0] + dx / 2, org[1], v]]], color: 'muted', w: 2 });
    out.push({ k: 'label', s: String(Math.round(v * K)).replace('-', '−'), p: [org[0] - dx * 2, org[1], v], cls: 'tick' });
  }
  return out;
}
/* a graph at 1/K of its scale over a region, with its marked points [x, y, name, type] and optional extra marks */
function marked(S, o) {
  const fs = (x, y) => o.f(x, y) / o.K;
  S.set('axes', scaledAxes(o.box, o.K, o.step));
  S.set('graph', SP.graph(fs, o.R, C('surface'), { n: o.n ?? 36, grid: 8, alpha: 0.55 }));
  S.set('points', o.pts.flatMap(([x, y, name, big]) => [...SP.point([x, y, fs(x, y)], C('point'), { name, r: big ? 10 : 6 }), { k: 'segs', segs: [[[x, y, o.box[2][0]], [x, y, fs(x, y)]]], color: 'guide', w: 2 }]));
  if (o.extra) S.set('extra', o.extra(fs));
}

/* Figure 14.46: g = x² + 2xy − 4y² + 4x − 6y + 4 over [−4, 2]², heights at 1/10, painted from the opening view. */
(function () {
  const d = sim('sim-critical-g');
  const g = (x, y) => x * x + 2 * x * y - 4 * y * y + 4 * x - 6 * y + 4;
  const S = F.space3d(d, { box: [[-4, 2], [-4, 2], [-4.6, 1]], h: 480, locked: true });
  still(d, () => {
    marked(S, { f: g, K: 10, box: [[-4, 2], [-4, 2], [-4.6, 1]], step: 1, R: { x: [-4, 2], y: [-4, 2] }, pts: [[-1, -1, '$(-1,-1,5)$', true]] });
    tex(d.readout, `\\kgx=2x+2y+4=0,\\;\\kgy=2x-8y-6=0\\;\\Rightarrow\\;(x,y)=(-1,-1),\\;\\kg(-1,-1)=${hue('function', '5')}`);
  });
})();

/* Figure 14.47: z = √(16 − x² − y²) over the disk of radius 4, painted: the maximum at the top, the minimum all round the rim. */
(function () {
  const d = sim('sim-hemisphere-extrema');
  const f = (x, y) => Math.sqrt(Math.max(0, 16 - x * x - y * y)), box = [[-4.5, 4.5], [-4.5, 4.5], [0, 4.5]];
  const S = F.space3d(d, { box, h: 460, locked: true });
  still(d, () => {
    S.set('axes', SP.axes(box, { ticks: 2 }));
    S.set('graph', SP.graph(f, { theta: [0, TAU], r: [0, 4] }, C('surface'), { n: 36, grid: 8, alpha: 0.55 }));
    S.set('pts', [...SP.point([0, 0, 4], C('point'), { name: 'maximum $(0,0,4)$', r: 10 }), ...SP.curve((t) => [4 * Math.cos(t), 4 * Math.sin(t), 0], [0, TAU], C('curve'), { w: 5 }),
      { k: 'label', s: 'minimum on $x^{2}+y^{2}=16$', p: [3.4, -3.4, 0], color: C('curve') }]);
    tex(d.readout, `z=\\sqrt{16-x^{2}-y^{2}}:\\;\\text{maximum }4\\text{ at }(0,0),\\;\\text{minimum }0\\text{ on the circle }x^{2}+y^{2}=16`);
  });
})();

/* Figure 14.48 + 14.49: f = (Ax² + 2Bxy + Cy²)/2 over the disk of radius 1.4 (box ±1.6 by ±4); D = AC − B², dashed circles
   where D = 0. */
(function () {
  const d = sim('sim-second-derivative-test');
  const box = [[-1.6, 1.6], [-1.6, 1.6], [-4, 4]];
  const S = F.space3d(d, { box, h: 540 });
  const sp = (fn) => [{ at: fn, label: 'D = 0' }];
  const safe = (v) => (Number.isFinite(v) && Math.abs(v) <= 2 ? v : null);
  const A = ctl(d.controls, { label: 'A', cls: 'derivative', key: 'A', min: -2, max: 2, step: 0.01, value: 2, unit: '', dec: 2, specials: sp(() => (Math.abs(C_.v) > 1e-6 ? safe((B.v * B.v) / C_.v) : null)) });
  const B = ctl(d.controls, { label: 'B', cls: 'derivative', key: 'B', min: -2, max: 2, step: 0.01, value: 0, unit: '', dec: 2, specials: [{ at: () => (A.v * C_.v >= 0 ? safe(Math.sqrt(A.v * C_.v)) : null), label: 'D = 0' }, { at: () => (A.v * C_.v >= 0 ? safe(-Math.sqrt(A.v * C_.v)) : null), label: 'D = 0' }] });
  const C_ = ctl(d.controls, { label: 'C', cls: 'derivative', key: 'C', min: -2, max: 2, step: 0.01, value: -2, unit: '', dec: 2, specials: sp(() => (Math.abs(A.v) > 1e-6 ? safe((B.v * B.v) / A.v) : null)) });
  function draw() {
    const a = A.v, b = B.v, c = C_.v, D = a * c - b * b, f = (x, y) => (a * x * x + 2 * b * x * y + c * y * y) / 2;
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('graph', SP.graph(f, { theta: [0, TAU], r: [0, 1.4] }, C('surface'), { n: 40, grid: 8, alpha: 0.6 }));
    S.set('traces', [...SP.curve((t) => [t, 0, f(t, 0)], [-1.4, 1.4], C('curve'), { w: 3 }), ...SP.curve((t) => [0, t, f(0, t)], [-1.4, 1.4], C('curve'), { w: 3 }), { k: 'dot', p: [0, 0, 0], color: C('point'), r: 9 }]);
    const what = Math.abs(D) < 1e-6 ? '\\text{inconclusive}' : D < 0 ? '\\text{a saddle point}' : a > 0 ? '\\text{a local minimum}' : '\\text{a local maximum}';
    tex(d.readout, `D=\\kfxx\\kfyy-(\\kfxy)^{2}=(${n(a)})(${n(c)})-(${n(b)})^{2}=${n(D, 3)}:\\;${what}`);
  }
  still(d, draw);
})();

/* Figure 14.50 + 14.51: Example 14.39's two functions, heights at 1/10, a new scene per choice. */
(function () {
  const d = sim('sim-local-extrema');
  const EX = {
    f: { f: (x, y) => 4 * x * x + 9 * y * y + 8 * x - 36 * y + 24, R: { x: [-3, 1], y: [0, 4] }, box: [[-3, 1], [0, 4], [-1.8, 3.8]],
         pts: [[-1, 2, '$(-1,2,-16)$', true]], ro: '\\kfx=8x+8=0,\\;\\kfy=18y-36=0:\\;D=(8)(18)-0^{2}=144\\gt 0,\\;\\kfxx\\gt 0:\\;\\text{local minimum }(-1,2,-16)' },
    g: { f: (x, y) => x ** 3 / 3 + y * y + 2 * x * y - 6 * x - 3 * y + 4, R: { x: [-2, 4], y: [-3, 3.5] }, box: [[-2, 4], [-3, 3.5], [-1, 4.4]],
         pts: [[3, -1.5, '$(3,-\\frac{3}{2},-\\frac{29}{4})$', true], [-1, 2.5, '$(-1,\\frac{5}{2},\\frac{41}{12})$', true]], ro: 'D=4x_{0}-4:\\;D(-1,\\tfrac{5}{2})=-8\\lt 0\\;\\text{saddle point};\\;D(3,-\\tfrac{3}{2})=8\\gt 0,\\;\\kgxx\\gt 0\\;\\text{local minimum}' },
  };
  const pick = choice(d.controls, { label: 'function', options: [{ value: 'f', label: 'f(x, y), Example 14.39a' }, { value: 'g', label: 'g(x, y), Example 14.39b' }], value: 'f', ms: 0 });
  let S = null, at = '';
  function draw() {
    const o = EX[pick.value];
    if (at !== pick.value) { at = pick.value; S?.v?.dispose?.(); d.stage.replaceChildren(); S = F.space3d(d, { box: o.box, h: 520 }); }
    marked(S, { ...o, K: 10, step: 1 });
    tex(d.readout, o.ro);
  }
  still(d, draw);
})();

/* Figure 14.52 + 14.53: Example 14.40a on [0, 4] × [0, 2], heights at 1/10; the rectangle on the floor, the boundary on the
   graph and the candidates. */
(function () {
  const d = sim('sim-extrema-rectangle');
  const f = (x, y) => x * x - 2 * x * y + 4 * y * y - 4 * x - 2 * y + 24, box = [[0, 4.4], [0, 2.4], [0, 4]];
  const S = F.space3d(d, { box, h: 520 });
  const rect = [[0, 0, 0], [4, 0, 0], [4, 2, 0], [0, 2, 0], [0, 0, 0]];
  still(d, () => {
    marked(S, { f, K: 10, box, step: 1, R: { x: [0, 4], y: [0, 2] },
      pts: [[3, 1, 'min $17$', true], [0, 2, 'max $36$', true], [2, 0, '', false], [4, 1.25, '', false], [0, 0.25, '', false], [0, 0, '', false], [4, 0, '', false], [4, 2, '', false]],
      extra: (fs) => [{ k: 'faces', faces: [rect], color: C('region'), alpha: 0.25 }, { k: 'line', pts: rect, color: C('region'), w: 3 },
        ...[[[0, 0], [4, 0]], [[4, 0], [4, 2]], [[4, 2], [0, 2]], [[0, 2], [0, 0]]].flatMap(([p, q]) => SP.curve((t) => { const x = p[0] + t * (q[0] - p[0]), y = p[1] + t * (q[1] - p[1]); return [x, y, fs(x, y)]; }, [0, 1], C('curve'), { w: 4 }))] });
    tex(d.readout, `\\text{candidates: }17\\,(3,1),\\;20\\,(2,0),\\;17.75\\,(4,\\tfrac{5}{4}),\\;20\\,(4,2),\\;23.75\\,(0,\\tfrac{1}{4}),\\;24,\\;24,\\;${hue('point', '36\\,(0,2)')}`);
  });
})();

/* Figure 14.54 + 14.55: Example 14.40b on the disk of radius 4, heights at 1/6. */
(function () {
  const d = sim('sim-extrema-disk');
  const g = (x, y) => x * x + y * y + 4 * x - 6 * y, box = [[-4.5, 4.5], [-4.5, 4.5], [-2.4, 7.8]], r13 = Math.sqrt(13);
  const S = F.space3d(d, { box, h: 540 });
  const rim = Array.from({ length: 97 }, (_, i) => [4 * Math.cos((i / 96) * TAU), 4 * Math.sin((i / 96) * TAU), box[2][0]]);
  still(d, () => {
    marked(S, { f: g, K: 6, box, step: 1, R: { theta: [0, TAU], r: [0, 4] },
      pts: [[-2, 3, 'min $-13$', true], [(8 * r13) / 13, (-12 * r13) / 13, 'max $\\approx 44.844$', true], [(-8 * r13) / 13, (12 * r13) / 13, '', false]],
      extra: (fs) => [{ k: 'faces', faces: [rim], color: C('region'), alpha: 0.2 }, { k: 'line', pts: rim, color: C('region'), w: 3 },
        ...SP.curve((t) => [4 * Math.cos(t), 4 * Math.sin(t), fs(4 * Math.cos(t), 4 * Math.sin(t))], [0, TAU], C('curve'), { w: 4 })] });
    tex(d.readout, `h(t)=16+16\\cos t-24\\sin t:\\;\\text{boundary values }\\tfrac{208\\mp 104\\sqrt{13}}{13};\\;\\text{absolute minimum }${hue('point', '-13')}\\text{ at }(-2,3)`);
  });
})();

/* Figure 14.57 + 14.58: the golf-ball profit on [0, 50] × [0, 25], heights at 1/150 (box z −39.2 to 5). */
(function () {
  const d = sim('sim-golf-profit');
  const f = (x, y) => 48 * x + 96 * y - x * x - 2 * x * y - 9 * y * y, box = [[0, 52], [0, 27], [-39.2, 5]];
  const S = F.space3d(d, { box, h: 540 });
  still(d, () => {
    marked(S, { f, K: 150, box, step: 10, n: 40, R: { x: [0, 50], y: [0, 25] },
      pts: [[21, 3, 'max $(21,3,648)$', true], [24, 0, '', false], [0, 16 / 3, '', false]],
      extra: () => { const r = [[0, 0, -39.2], [50, 0, -39.2], [50, 25, -39.2], [0, 25, -39.2], [0, 0, -39.2]]; return [{ k: 'faces', faces: [r], color: C('region'), alpha: 0.2 }, { k: 'line', pts: r, color: C('region'), w: 3 }]; } });
    tex(d.readout, `\\kf(21,3)=48(21)+96(3)-21^{2}-2(21)(3)-9(3)^{2}=${hue('function', '648')}\\;\\text{thousand dollars}`);
  });
})();
};
