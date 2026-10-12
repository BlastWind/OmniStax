/* Figures for section 12.7 Cylindrical and Spherical Coordinates. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['12.7'] = function (root, F) {
const { C, ctl, choice, register, tex, fmt } = F;
const SP = F.space;
const sim = (id) => F.sim(root, id);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec);
const PITCH = [-0.2, 1.4], PI = Math.PI, TAU = 2 * PI;
const label = (s, p, color) => ({ k: 'label', s, p, color });
const seg = (a, b, color, w = 2.5, dash) => ({ k: 'line', pts: [a, b], color, w, dash });
const live = (d, box, o = {}) => F.space3d(d, { box, h: 540, pitch: PITCH, fit: 3, ...o });
const locked = (d, box, o = {}) => F.space3d(d, { box, h: 460, locked: true, fit: 3.2, ...o });
/* an arc of radius R about the origin from direction a toward direction b */
function arc(a, b, R, m = 32) {
  const ua = SP.unit(a), ub = SP.unit(b), c = Math.max(-1, Math.min(1, SP.dot(ua, ub))), th = Math.acos(c);
  if (th < 1e-6) return [];
  const w = SP.unit(SP.sub(ub, SP.mul(ua, c))), out = [];
  for (let i = 0; i <= m; i++) { const t = (i / m) * th; out.push(SP.mul(SP.add(SP.mul(ua, Math.cos(t)), SP.mul(w, Math.sin(t))), R)); }
  return out;
}
/* the floor arc of θ from the positive x-axis, counterclockwise through θ in [0, 2π) */
const floorArc = (th, R) => { const out = []; for (let i = 0; i <= 48; i++) { const t = (i / 48) * th; out.push([R * Math.cos(t), R * Math.sin(t), 0]); } return out; };
const piTex = (t) => { const q = t / PI; for (const den of [1, 2, 3, 4, 6]) { const num = Math.round(q * den); if (Math.abs(q * den - num) < 1e-6) return num === 0 ? '0' : `${num === 1 ? '' : num === -1 ? '-' : num}\\pi${den === 1 ? '' : '/' + den}`.replace(/^(-?)\\pi\/(\d)$/, '$1\\frac{\\pi}{$2}'); } return n(t, 3); };

/* Figures 12.89 + 12.90 + 12.93: the point (r, θ, z), its projection (r, θ) in the xy-plane, and the right triangle there. */
(function () {
  const d = sim('sim-cylindrical');
  const box = [[-6, 6], [-6, 6], [-4, 4]];
  const S = live(d, box, { fit: 3.3 });
  const rs = ctl(d.controls, { label: 'r', cls: '', key: 'r', min: 0, max: 6, step: 0.1, value: 4, unit: '', dec: 1 });
  const ts = ctl(d.controls, { label: '\\ktheta', cls: 'angle', key: 'theta', min: 0, max: TAU, step: PI / 36, value: (2 * PI) / 3, unit: '', dec: 2, detents: [0, PI / 6, PI / 3, PI / 2, (2 * PI) / 3, (5 * PI) / 6, PI, (7 * PI) / 6, (4 * PI) / 3, (3 * PI) / 2, (5 * PI) / 3, (11 * PI) / 6] });
  const zs = ctl(d.controls, { label: 'z', cls: '', key: 'z', min: -4, max: 4, step: 0.1, value: -2, unit: '', dec: 1 });
  still(d, () => {
    const r = rs.v, th = ts.v, z = zs.v, x = r * Math.cos(th), y = r * Math.sin(th), p = [x, y, z], q = [x, y, 0], ang = C('angle');
    S.set('axes', SP.axes(box, { ticks: 2 }));
    S.set('pt', [seg([0, 0, 0], q, 'ink', 4), label('$r$', SP.mul(q, 0.55), 'ink'), seg(q, p, 'guide', 2.5, [4, 8]), label('$z$', SP.add(q, [0, 0, z / 2]), 'ink'),
      seg([x, 0, 0], q, 'guide', 2, [4, 8]), ...(th > 0.02 ? [{ k: 'line', pts: floorArc(th, Math.min(1.4, Math.max(0.6, r * 0.4))), color: ang, w: 3.5 }, label('$\\ktheta$', [1.8 * Math.cos(th / 2), 1.8 * Math.sin(th / 2), 0], ang)] : []),
      ...SP.point(q, C('point'), { r: 6 }), ...SP.point(p, C('point'), { name: `$(${n(r, 1)},${piTex(th)},${n(z, 1)})$` })]);
    tex(d.readout, `x=r\\cos\\ktheta=${n(r, 1)}\\cos(${piTex(th)})=${n(x, 2)},\\quad y=r\\sin\\ktheta=${n(y, 2)},\\quad z=${n(z, 1)}`);
  });
})();

/* Figures 12.91 + 12.92 + 12.99: hold one coordinate of a system constant and see the surface it leaves. Box ±3.5. */
(function () {
  const d = sim('sim-coordinate-surfaces');
  const box = [[-3.5, 3.5], [-3.5, 3.5], [-3.5, 3.5]];
  const S = live(d, box, { fit: 2.8 });
  const OPT = { rect: [['x', 'x = c'], ['y', 'y = c'], ['z', 'z = c']], cyl: [['r', 'r = c'], ['th', 'θ = c'], ['z', 'z = c']], sph: [['rho', 'ρ = c'], ['th', 'θ = c'], ['phi', 'φ = c']] };
  const RANGE = { x: [-3, 3, 1], y: [-3, 3, 1], z: [-3, 3, 1], r: [0.5, 3, 2], th: [0, TAU, PI / 4], rho: [0.5, 3, 2], phi: [0.1, PI - 0.1, PI / 4] };
  const opts = (k) => OPT[k].map(([value, label]) => ({ value, label }));
  const setRange = (c) => { const [a, b, v] = RANGE[c]; cs.range({ min: a, max: b, step: 0.01, value: v, dec: 2 }); };
  const sys = choice(d.controls, { label: '', key: 'system', options: [{ value: 'rect', label: 'rectangular' }, { value: 'cyl', label: 'cylindrical' }, { value: 'sph', label: 'spherical' }], value: 'rect', aria: 'coordinate system', ms: 0,
    onInput: (k) => { coord.options(opts(k), OPT[k][0][0]); setRange(coord.value); } });
  const coord = choice(d.controls, { label: '', key: 'coord', options: opts('rect'), value: 'x', aria: 'coordinate held constant', ms: 0, onInput: (c) => setRange(c) });
  const cs = ctl(d.controls, { label: 'c', cls: '', key: 'c', min: -3, max: 3, step: 0.01, value: 1, unit: '', dec: 2 });
  still(d, () => {
    const k = coord.value, c = cs.v, pl = C('plane'), sf = C('surface'), o = { n: [36, 18], grid: 6, alpha: 0.45 };
    let marks, say;
    if (k === 'x' || k === 'y' || k === 'z') { const N = { x: [1, 0, 0], y: [0, 1, 0], z: [0, 0, 1] }[k]; marks = SP.plane(SP.mul(N, c), N, pl, { box, alpha: 0.4 }); say = `$${k}=${n(c, 2)}$ is a plane parallel to the $${{ x: 'yz', y: 'xz', z: 'xy' }[k]}$-plane.`; }
    if (k === 'r') { marks = SP.surface((u, v) => [c * Math.cos(u), c * Math.sin(u), v], [0, TAU], [-3, 3], sf, o); say = `$r=${n(c, 2)}$ is a vertical cylinder of radius ${n(c, 2)}.`; }
    if (k === 'th') { marks = SP.surface((s, v) => [s * Math.cos(c), s * Math.sin(c), v], [0, 3.3], [-3, 3], pl, { n: [6, 6], grid: 4, alpha: 0.45 }); say = `$\\theta=${n(c, 2)}$ is a half-plane at angle ${n(c, 2)} from the $x$-axis.`; }
    if (k === 'rho') { marks = SP.surface((u, v) => [c * Math.sin(v) * Math.cos(u), c * Math.sin(v) * Math.sin(u), c * Math.cos(v)], [0, TAU], [0.001, PI - 0.001], sf, o); say = `$\\rho=${n(c, 2)}$ is a sphere of radius ${n(c, 2)}.`; }
    if (k === 'phi') { const R = Math.min(4, 3.3 / Math.max(Math.abs(Math.cos(c)), Math.sin(c))); marks = SP.surface((u, t) => [t * Math.sin(c) * Math.cos(u), t * Math.sin(c) * Math.sin(u), t * Math.cos(c)], [0, TAU], [0, R], sf, o); say = `$\\varphi=${n(c, 2)}$ is a half-cone at angle ${n(c, 2)} from the positive $z$-axis.`; }
    S.set('axes', SP.axes(box, { ticks: 1 }));
    S.set('surf', marks);
    S.headline(say);
    tex(d.readout, `\\text{${{ rect: 'rectangular', cyl: 'cylindrical', sph: 'spherical' }[sys.value]} coordinates: }${{ x: 'x', y: 'y', z: 'z', r: 'r', th: '\\ktheta', rho: '\\rho', phi: '\\kphi' }[k]}=${n(c, 2)}`);
  });
})();

/* Figures 12.94, 12.95, 12.96, 12.101, 12.102, 12.103, faithful copies of Examples 12.62 and 12.65's surfaces. */
function still3(id, box, marks, o = {}) {
  const d = sim(id);
  const S = locked(d, box, o);
  still(d, () => { S.set('axes', SP.axes(box, { ticks: o.ticks ?? 1 })); S.set('s', marks()); });
}
const halfPlane = (t) => () => SP.surface((s, v) => [s * Math.cos(t), s * Math.sin(t), v], [0, 3], [0, 3], C('plane'), { n: [6, 6], grid: 4, alpha: 0.5 });
const sphereR = (R) => () => SP.surface((u, v) => [R * Math.sin(v) * Math.cos(u), R * Math.sin(v) * Math.sin(u), R * Math.cos(v)], [0, TAU], [0.001, PI - 0.001], C('surface'), { n: [36, 18], grid: 6, alpha: 0.55 });
still3('fig-half-plane-quarter', [[0, 3.5], [0, 3.5], [0, 3.5]], halfPlane(PI / 4));
still3('fig-sphere-3', [[-4, 4], [-4, 4], [-4, 4]], sphereR(3));
still3('fig-cone-z-r', [[-4, 4], [-4, 4], [-4, 4]], () => SP.surface((u, t) => [t * Math.cos(u), t * Math.sin(u), t], [0, TAU], [-3, 3], C('surface'), { n: [36, 12], grid: 6, alpha: 0.5 }));
still3('fig-half-plane-third', [[0, 3.5], [0, 3.5], [0, 3.5]], halfPlane(PI / 3));
still3('fig-half-cone', [[-3, 3], [-3, 3], [-5, 1]], () => SP.surface((u, t) => [t * Math.sin((5 * PI) / 6) * Math.cos(u), t * Math.sin((5 * PI) / 6) * Math.sin(u), t * Math.cos((5 * PI) / 6)], [0, TAU], [0, 5], C('surface'), { n: [36, 10], grid: 6, alpha: 0.5 }));
still3('fig-sphere-6', [[-7, 7], [-7, 7], [-7, 7]], sphereR(6), { ticks: 2 });

/* Figures 12.97 + 12.98 + 12.100: the point (ρ, θ, φ), with r = ρ sin φ in the xy-plane and z = ρ cos φ. Box ±10. */
(function () {
  const d = sim('sim-spherical');
  const box = [[-10, 10], [-10, 10], [-10, 10]];
  const S = live(d, box, { fit: 3.4 });
  const ps = ctl(d.controls, { label: '\\rho', cls: '', key: 'rho', min: 0.5, max: 10, step: 0.1, value: 8, unit: '', dec: 1 });
  const ts = ctl(d.controls, { label: '\\ktheta', cls: 'angle', key: 'theta', min: 0, max: TAU, step: PI / 36, value: PI / 3, unit: '', dec: 2, detents: [0, PI / 6, PI / 3, PI / 2, (2 * PI) / 3, PI, (4 * PI) / 3, (3 * PI) / 2, (5 * PI) / 3] });
  const fs = ctl(d.controls, { label: '\\kphi', cls: 'angle', key: 'phi', min: 0, max: PI, step: PI / 36, value: PI / 6, unit: '', dec: 2, detents: [0, PI / 6, PI / 4, PI / 3, PI / 2, (2 * PI) / 3, (3 * PI) / 4, (5 * PI) / 6, PI] });
  still(d, () => {
    const rho = ps.v, th = ts.v, ph = fs.v, r = rho * Math.sin(ph), z = rho * Math.cos(ph), x = r * Math.cos(th), y = r * Math.sin(th), p = [x, y, z], q = [x, y, 0], ang = C('angle');
    const marks = [seg([0, 0, 0], p, 'ink', 4), label('$\\rho$', SP.mul(p, 0.55), 'ink'), seg([0, 0, 0], q, 'ink', 3), label('$r$', SP.mul(q, 0.55), 'ink'), seg(q, p, 'guide', 2.5, [4, 8]),
      ...SP.point(p, C('point'), { name: `$(${n(rho, 1)},${piTex(th)},${piTex(ph)})$` })];
    if (th > 0.02 && r > 0.05) marks.push({ k: 'line', pts: floorArc(th, 2.2), color: ang, w: 3.5 }, label('$\\ktheta$', [2.9 * Math.cos(th / 2), 2.9 * Math.sin(th / 2), 0], ang));
    const fa = arc([0, 0, 1], p, 2.6); if (fa.length) marks.push({ k: 'line', pts: fa, color: ang, w: 3.5 }, label('$\\kphi$', fa[Math.floor(fa.length / 2)], ang));
    S.set('axes', SP.axes(box, { ticks: 5 }));
    S.set('pt', marks);
    tex(d.readout, `x=\\rho\\sin\\kphi\\cos\\ktheta=${n(x, 2)},\\ y=\\rho\\sin\\kphi\\sin\\ktheta=${n(y, 2)},\\ z=\\rho\\cos\\kphi=${n(z, 2)};\\quad r=\\rho\\sin\\kphi=${n(r, 2)}`);
  });
})();

/* Figure 12.104: a point on a sphere of radius 4000 mi by its latitude and longitude; the scene draws 1000 mi a unit. */
(function () {
  const d = sim('sim-latitude-longitude');
  const box = [[-5.5, 5.5], [-5.5, 5.5], [-5.5, 5.5]], R = 4;
  const S = live(d, box, { fit: 3.4 });
  const la = ctl(d.controls, { label: 'latitude', cls: 'angle', key: 'lat', min: -90, max: 90, step: 1, value: 40, unit: '°', dec: 0 });
  const lo = ctl(d.controls, { label: 'longitude', cls: 'angle', key: 'lon', min: -180, max: 180, step: 1, value: -83, unit: '°', dec: 0 });
  still(d, () => {
    const D = PI / 180, phi = (90 - la.v) * D, th = lo.v * D, p = [R * Math.sin(phi) * Math.cos(th), R * Math.sin(phi) * Math.sin(th), R * Math.cos(phi)], eq = [R * Math.cos(th), R * Math.sin(th), 0], ang = C('angle'), cv = C('curve');
    const ring = (f) => { const pts = []; for (let i = 0; i <= 96; i++) pts.push(f((i / 96) * TAU)); return pts; };
    S.set('axes', SP.axes(box, { ticks: 0 }));
    S.set('globe', [...SP.surface((u, v) => [R * Math.sin(v) * Math.cos(u), R * Math.sin(v) * Math.sin(u), R * Math.cos(v)], [0, TAU], [0.001, PI - 0.001], C('surface'), { n: [36, 18], grid: 0, alpha: 0.18 }),
      { k: 'line', pts: ring((t) => [R * Math.cos(t), R * Math.sin(t), 0]), color: cv, w: 3 }, label('equator', [R * Math.cos(0.9), R * Math.sin(0.9), 0], cv),
      { k: 'line', pts: ring((t) => [R * Math.sin(t), 0, R * Math.cos(t)]), color: cv, w: 3 }, label('prime meridian', [R * Math.sin(2.3), 0, R * Math.cos(2.3)], cv)]);
    const fa = arc([0, 0, 1], p, 1.6), ta = [];
    for (let i = 0; i <= 32; i++) ta.push([1.8 * Math.cos((i / 32) * th), 1.8 * Math.sin((i / 32) * th), 0]);
    S.set('pt', [seg([0, 0, 0], p, 'ink', 3.5), seg([0, 0, 0], eq, 'guide', 2.5, [4, 8]), ...SP.point(p, C('point')),
      ...(Math.abs(th) > 0.02 ? [{ k: 'line', pts: ta, color: ang, w: 3.5 }, label('$\\ktheta$', [2.4 * Math.cos(th / 2), 2.4 * Math.sin(th / 2), 0], ang)] : []),
      ...(fa.length ? [{ k: 'line', pts: fa, color: ang, w: 3.5 }, label('$\\kphi$', fa[Math.floor(fa.length / 2)], ang)] : [])]);
    S.headline(`${Math.abs(la.v)}° ${la.v >= 0 ? 'N' : 'S'}, ${Math.abs(lo.v)}° ${lo.v >= 0 ? 'E' : 'W'}: $(\\rho,\\theta,\\varphi)=(4000,${lo.v}^{\\circ},${90 - la.v}^{\\circ})$`);
    tex(d.readout, `\\ktheta=\\text{longitude}=${lo.v}^{\\circ},\\quad \\kphi=90^{\\circ}-\\text{latitude}=${90 - la.v}^{\\circ}`);
  });
})();
};
