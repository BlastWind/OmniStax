/* Figures for section 4.10 Dirichlet problem in the circle and the Poisson kernel. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.10'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, shade, dot, line, text, label, headline, register, readout, fmt, hover, pinned, space: SP } = F;
const sim = (id, H) => F.sim(root, id, H);
const still = (d, draw) => register(d.fig, { update: () => {}, draw });
const n = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const TAU = 2 * Math.PI;
/* a value of any size for a readout: three significant figures, powers of ten below a thousandth */
function sig(v) {
  if (v === 0) return '0';
  const a = Math.abs(v);
  if (a >= 0.1) return n(v, 3);
  if (a >= 1e-3) return Number(v.toPrecision(3)).toString();
  const e = Math.floor(Math.log10(a)), m = v / Math.pow(10, e);
  return `${n(m, 2)} \\times 10^{${e}}`;
}
const piTick = (v) => ({ '-4': '−π', '-2': '−π/2', 0: '0', 2: 'π/2', 4: 'π' })[String(Math.round((4 * v) / TAU * 2))] ?? '';

/* The temperature scale (book COLOR.md, Facts): one false-colour scale from cold to hot, read back through a
   1-pixel canvas so the Facts switch reaches it; with Facts off the scale runs from the panel to ink, so the
   map still reads. */
const RAMP = [[59, 76, 192], [98, 130, 234], [141, 176, 254], [184, 208, 249], [221, 221, 221], [245, 196, 173], [244, 154, 123], [222, 96, 77], [180, 4, 38]];
const rampRGB = (k) => {
  const x = Math.min(1, Math.max(0, k)) * (RAMP.length - 1), i = Math.min(RAMP.length - 2, Math.floor(x)), f = x - i;
  return RAMP[i].map((c, j) => Math.round(c + (RAMP[i + 1][j] - c) * f));
};
const probeCanvas = document.createElement('canvas'); probeCanvas.width = probeCanvas.height = 1;
const pctx = probeCanvas.getContext('2d', { willReadFrequently: true });
const readRGB = (css) => { pctx.clearRect(0, 0, 1, 1); pctx.fillStyle = css; pctx.fillRect(0, 0, 1, 1); const p = pctx.getImageData(0, 0, 1, 1).data; return [p[0], p[1], p[2]]; };
let lut = null, lutSig = '';
function LUT() {
  const on = !!F.shown.facts, s = [on, PAL.ink, PAL.panel].join('|');
  if (lut && s === lutSig) return lut;
  lutSig = s; lut = new Uint8ClampedArray(256 * 3);
  for (let i = 0; i < 256; i++) {
    const k = i / 255, css = on ? F.fact(`rgb(${rampRGB(k).join(', ')})`) : F.mixColor(PAL.panel, PAL.ink, 0.12 + 0.7 * k);
    lut.set(readRGB(css), 3 * i);
  }
  return lut;
}
const tempCss = (k) => { const L = LUT(), i = 3 * Math.round(Math.min(1, Math.max(0, k)) * 255); return `rgb(${L[i]}, ${L[i + 1]}, ${L[i + 2]})`; };
/* a vertical or horizontal bar of the scale from lo to hi */
function scaleBar(ctx, x0, y0, x1, y1, vertical) {
  const m = 48;
  for (let i = 0; i < m; i++) {
    const k = (i + 0.5) / m; ctx.fillStyle = tempCss(k);
    if (vertical) { const ya = y0 + ((y1 - y0) * (m - i - 1)) / m, yb = y0 + ((y1 - y0) * (m - i)) / m; ctx.fillRect(x0, ya, x1 - x0, yb - ya + 0.6); }
    else { const xa = x0 + ((x1 - x0) * i) / m; ctx.fillRect(xa, y0, (x1 - x0) / m + 0.6, y1 - y0); }
  }
  ctx.strokeStyle = PAL.muted; ctx.lineWidth = 1.5; ctx.strokeRect(x0, y0, x1 - x0, y1 - y0);
}

/* The boundary data of the disc and the series solutions the section writes for them (r < 1; the rim r = 1 is
   g itself). cos(nθ): Example 4.10.1. rod: Example 4.10.2, 2 sin θ on the upper half of the rim and 0 on the
   lower, u = 2/π + r sin θ − Σ 4r^(2m) cos(2mθ)/(π(4m² − 1)). abs: |θ| of Exercise 4.10.2,
   u = π/2 − Σ_(n odd) 4rⁿ cos(nθ)/(πn²). The sums run through complex powers of re^(iθ). */
const wrapPi = (t) => t - TAU * Math.round(t / TAU);
const RODC = (m) => 4 / (Math.PI * (4 * m * m - 1));
function rodSum(r, t, N) {
  const wr = r * r * Math.cos(2 * t), wi = r * r * Math.sin(2 * t); let pr = wr, pi = wi, s = 0;
  for (let m = 1; m <= N; m++) { s += RODC(m) * pr; const q = pr * wr - pi * wi; pi = pr * wi + pi * wr; pr = q; }
  return s;
}
function absSum(r, t, K) {
  const zr = r * Math.cos(t), zi = r * Math.sin(t), z2r = zr * zr - zi * zi, z2i = 2 * zr * zi; let pr = zr, pi = zi, s = 0;
  for (let k = 0; k < K; k++) { const m = 2 * k + 1; s += (4 / (Math.PI * m * m)) * pr; const q = pr * z2r - pi * z2i; pi = pr * z2i + pi * z2r; pr = q; }
  return s;
}
const DATA = {
  cos: { lo: -1, hi: 1, ny: 4, g: (t, m) => Math.cos(m * t), u: (r, t, m) => (r >= 1 ? Math.cos(m * t) : Math.pow(r, m) * Math.cos(m * t)) },
  rod: { lo: 0, hi: 2, ny: 4, g: (t) => Math.max(0, 2 * Math.sin(t)), u: (r, t, m, N = 60) => (r >= 1 ? Math.max(0, 2 * Math.sin(t)) : 2 / Math.PI + r * Math.sin(t) - rodSum(r, t, N)) },
  abs: { lo: 0, hi: Math.PI, ny: 4, top: 3.2, g: (t) => Math.abs(wrapPi(t)), u: (r, t, m, N = 80) => (r >= 1 ? Math.abs(wrapPi(t)) : Math.PI / 2 - absSum(r, t, N)) },
};

/* Figure 4.26 + 4.27 (and the setup sketch): the Dirichlet problem (4.26) on the unit disc. 2D (the default): the
   disc as a heat map on the temperature scale, the rim held at g(θ), a probe (r, θ) the reader drags (held by
   the r and θ sliders), and beside it u along the ray through the probe from r = 0 to the rim, its u-axis
   carrying the scale. 3D (archetype 10, mounted on the first switch): the surface u over the disc in the same
   scale, the rim curve of the data in ink and the ray in function colour; free orbit kept above the disc
   (pitch 0.12 to 1.45), since from beneath the sheet shows nothing new. Still: a steady state has no clock.
   A change of g bends the heat map and the ray curve from the old solution into the new (choice morph);
   n shows only for cos(nθ). Axes: r 0 to 1; u over g's range (−1 to 1, 0 to 2, 0 to 3.2). */
(function () {
  const d = sim('sim-disc', 640);
  const view = choice(d.controls, { label: 'view', key: 'view', options: [{ value: '2d', label: '2D' }, { value: '3d', label: '3D' }], value: '2d', aria: 'heat map or surface', ms: 0 });
  const gp = choice(d.controls, { label: '\\kg(\\theta)', key: 'g', options: [{ value: 'cos', label: 'cos nθ' }, { value: 'rod', label: 'the rod' }, { value: 'abs', label: '|θ|' }], value: 'cos', aria: 'the boundary data' });
  const nS = ctl(d.controls, { label: 'n', cls: '', key: 'n', min: 1, max: 12, step: 1, value: 10, unit: '', dec: 0, detents: [10] });
  const rS = ctl(d.controls, { label: 'r', cls: '', key: 'r', min: 0, max: 1, step: 0.01, value: 0.5, unit: '', dec: 2, specials: [{ at: 0, label: 'centre' }, { at: 1, label: 'rim' }] });
  const tS = ctl(d.controls, { label: '\\theta', cls: '', key: 'theta', min: -3.14, max: 3.14, step: 0.01, value: 0, unit: '', dec: 2 });
  const grip = F.polar.grip(d, { t: tS, r: rS });
  const ro = readout(d);
  const CX = 400, CY = 362, RD = 218, CELL = 3, GN = Math.round((2 * RD) / CELL);
  const FR = { l: CX - 1.25 * RD, r: CX + 1.25 * RD, t: CY - 1.25 * RD, b: CY + 1.25 * RD };
  const FAX = { X: (v) => CX + v * RD, Y: (v) => CY - v * RD, box: FR, xr: [-1.25, 1.25], yr: [-1.25, 1.25] };
  const GB = { l: 880, r: 1236, t: 150, b: 560 };
  const off = document.createElement('canvas'); off.width = off.height = GN;
  const octx = off.getContext('2d'), img = octx.createImageData(GN, GN);
  const fields = new Map();
  const keyOf = (g) => (g === 'cos' ? `cos${nS.v}` : g);
  const uOf = (g) => (r, t) => DATA[g].u(r, t, nS.v);
  /* u at the centre of every cell of the disc's square, NaN outside the disc */
  function field(g) {
    const k = keyOf(g); if (fields.has(k)) return fields.get(k);
    const a = new Float32Array(GN * GN), u = uOf(g);
    for (let j = 0; j < GN; j++) for (let i = 0; i < GN; i++) {
      const x = ((i + 0.5) / GN) * 2 - 1, y = 1 - ((j + 0.5) / GN) * 2, r = Math.hypot(x, y);
      a[j * GN + i] = r <= 1 ? u(Math.min(r, 0.9999), Math.atan2(y, x)) : NaN;
    }
    if (fields.size > 16) fields.clear();
    fields.set(k, a); return a;
  }
  let S = null, s3key = '', hits = [];
  hover(d.stage, () => hits, d.c);
  function mount3d(g) {
    const D = DATA[g], keep = S?.v?.at;
    if (S) unmount3d();
    S = F.space3d(d, { box: [[-1.05, 1.05], [-1.05, 1.05], [D.lo, D.top ?? D.hi]], h: 640, pitch: [0.12, 1.45], fit: 1.75, turn: -0.62, tilt: 0.95 });
    if (keep && S.v) S.v.setView(keep.yaw, keep.pitch);
    S.g = g; s3key = '';
    d.c.style.display = 'none';
  }
  function unmount3d() {
    const w = S.v ? S.v.wrap : [...d.stage.querySelectorAll('canvas')].pop();
    S.v?.dispose(); if (w && w !== d.c) w.remove(); S = null;
    d.c.style.display = '';
  }
  /* the surface over a polar grid, its faces grouped into bands of the scale */
  function surfaceMarks(g) {
    const D = DATA[g], u = uOf(g), NR = 32, NT = g === 'cos' ? 12 * Math.max(12, nS.v) : 144, B = 48, bands = Array.from({ length: B }, () => []);
    const P = (i, j) => { const r = i / NR, t = -Math.PI + (TAU * j) / NT; return [r * Math.cos(t), r * Math.sin(t), u(r, t)]; };
    for (let i = 0; i < NR; i++) for (let j = 0; j < NT; j++) {
      const q = [P(i, j), P(i + 1, j), P(i + 1, j + 1), P(i, j + 1)], z = (q[0][2] + q[1][2] + q[2][2] + q[3][2]) / 4;
      bands[Math.min(B - 1, Math.max(0, Math.floor(((z - D.lo) / (D.hi - D.lo)) * B)))].push(q);
    }
    return bands.flatMap((faces, b) => (faces.length ? [{ k: 'faces', faces, color: tempCss((b + 0.5) / B), alpha: 1 }] : []));
  }
  function words(g, r, t, m) {
    const D = DATA[g], th = n(t);
    if (g === 'cos') {
      const v = D.u(r, t, m);
      return {
        head: `$\\kg = \\cos(${m}\\theta)$: at $r = ${n(r)}$ the solution swings by at most $r^{${m}} = ${sig(Math.pow(r, m))}$, against 1 on the rim.`,
        tex: r >= 1 ? `\\ku(1,\\theta) = \\kg(\\theta) = \\cos(${m}\\theta),\\quad \\ku(1, ${th}) = \\cos(${n(m * t)}) = ${sig(v)}`
          : `\\ku(r,\\theta) = r^{${m}}\\cos(${m}\\theta),\\quad \\ku(${n(r)}, ${th}) = ${n(r)}^{${m}}\\cos(${n(m * t)}) = ${sig(v)}`,
        v,
      };
    }
    if (g === 'rod') {
      if (r >= 1) { const v = D.g(t); return { v, tex: `\\ku(1,\\theta) = \\kg(\\theta),\\quad \\ku(1, ${th}) = ${t >= 0 ? `2\\sin(${th})` : '0'} = ${n(v, 3)}`, head: `The rod: on the rim at $\\theta = ${th}$ the temperature is the boundary value $\\kg = ${n(v, 3)}$; the centre holds the rim’s average $2/\\pi = 0.637$.` }; }
      const a = +n(2 / Math.PI, 3), b = +n(r * Math.sin(t), 3), c = +n(rodSum(r, t, 400), 3), v = a + b - c;
      return {
        v,
        tex: `\\ku(r,\\theta) = \\frac{2}{\\pi} + r\\sin\\theta - \\sum_{n=1}^{\\infty} \\frac{4r^{2n}}{\\pi(4n^2-1)}\\cos(2n\\theta),\\quad \\ku(${n(r)}, ${th}) = ${n(a, 3)} ${b < 0 ? '-' : '+'} ${n(Math.abs(b), 3)} ${c < 0 ? '+' : '-'} ${n(Math.abs(c), 3)} = ${n(v, 3)}`,
        head: `The rod: at $(r, \\theta) = (${n(r)}, ${th})$ the temperature is $\\ku = ${n(v, 3)}$; the centre holds the rim’s average $2/\\pi = 0.637$.`,
      };
    }
    if (r >= 1) { const v = D.g(t); return { v, tex: `\\ku(1,\\theta) = \\kg(\\theta) = \\lvert\\theta\\rvert,\\quad \\ku(1, ${th}) = ${n(v, 3)}`, head: `$\\kg = \\lvert\\theta\\rvert$: on the rim at $\\theta = ${th}$ the temperature is $\\kg = ${n(v, 3)}$; the centre holds the rim’s average $\\pi/2 = 1.571$.` }; }
    const a = +n(Math.PI / 2, 3), c = +n(absSum(r, t, 600), 3), v = a - c;
    return {
      v,
      tex: `\\ku(r,\\theta) = \\frac{\\pi}{2} - \\sum_{n\\ \\mathrm{odd}} \\frac{4}{\\pi n^2}\\, r^n\\cos(n\\theta),\\quad \\ku(${n(r)}, ${th}) = ${n(a, 3)} ${c < 0 ? '+' : '-'} ${n(Math.abs(c), 3)} = ${n(v, 3)}`,
      head: `$\\kg = \\lvert\\theta\\rvert$: at $(r, \\theta) = (${n(r)}, ${th})$ the temperature is $\\ku = ${n(v, 3)}$; the centre holds the rim’s average $\\pi/2 = 1.571$.`,
    };
  }
  function draw() {
    const g = gp.value, m = nS.v, r = rS.v, t = tS.v, fc = C('function');
    if (nS.shown !== (g === 'cos')) nS.show(g === 'cos');
    const W = words(g, r, t, m);
    if (view.value === '3d' && (!S || S.g !== g)) mount3d(g);
    if (view.value === '2d' && S) unmount3d();
    if (S) {
      LUT();
      const D = DATA[g], u = uOf(g), key = [keyOf(g), lutSig].join('|');
      if (key !== s3key) {
        s3key = key;
        S.set('axes', SP.axes(S.box, { ticks: [1, 1, g === 'abs' ? 1 : 0.5], names: ['$x$', '$y$', '$\\ku$'] }));
        S.set('surf', surfaceMarks(g));
        S.set('rim', [{ k: 'line', pts: Array.from({ length: 361 }, (_, i) => { const a = -Math.PI + (TAU * i) / 360; return [Math.cos(a), Math.sin(a), D.g(a, m)]; }), color: 'ink', w: 3, name: 'the rim r = 1, held at u = g(θ)' }]);
      }
      const ray = Array.from({ length: 61 }, (_, i) => { const q = i / 60; return [q * Math.cos(t), q * Math.sin(t), u(q, t) + 0.01]; });
      S.set('ray', [{ k: 'line', pts: ray, color: fc, w: 4.5, name: `u along the ray θ = ${n(t)}` },
        { k: 'dot', p: [r * Math.cos(t), r * Math.sin(t), W.v + 0.01], color: 'ink', r: 9, name: `the probe (r, θ) = (${n(r)}, ${n(t)}), u = ${n(W.v, 3)}` }]);
      S.headline(W.head);
      ro.set(W.tex, undefined, { form: g });
      return;
    }
    const { ctx } = begin(d.c);
    hits = [];
    /* the heat map: the old solution bent into the new while the choice settles */
    const k = gp.k, from = gp.from, mixing = k < 1 && from && from !== g;
    const [lo, hi] = mixing ? gp.mix((v) => [DATA[v].lo, DATA[v].hi]) : [DATA[g].lo, DATA[g].hi];
    const top = mixing ? gp.mix((v) => DATA[v].top ?? DATA[v].hi) : DATA[g].top ?? DATA[g].hi;
    const fa = field(g), fb = mixing ? field(from) : null, L = LUT();
    for (let p = 0; p < GN * GN; p++) {
      const v = fb ? (1 - k) * fb[p] + k * fa[p] : fa[p], o = 4 * p;
      if (Number.isNaN(v)) { img.data[o + 3] = 0; continue; }
      const q = 3 * Math.round(Math.min(1, Math.max(0, (v - lo) / (hi - lo))) * 255);
      img.data[o] = L[q]; img.data[o + 1] = L[q + 1]; img.data[o + 2] = L[q + 2]; img.data[o + 3] = 255;
    }
    octx.putImageData(img, 0, 0);
    ctx.save(); ctx.beginPath(); ctx.arc(CX, CY, RD, 0, TAU); ctx.clip(); ctx.imageSmoothingEnabled = true; ctx.drawImage(off, CX - RD, CY - RD, 2 * RD, 2 * RD); ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(CX, CY, RD, 0, TAU); ctx.stroke(); ctx.restore();
    [[0, '0'], [Math.PI / 2, 'π/2'], [Math.PI, 'π'], [-Math.PI / 2, '−π/2']].forEach(([a, s]) => text(ctx, s, CX + 1.11 * RD * Math.cos(a), CY - 1.11 * RD * Math.sin(a) + 6, PAL.muted, { size: 17, align: 'center' }));
    text(ctx, '$\\ku(1,\\theta) = \\kg(\\theta)$', CX - 0.74 * RD - 14, CY - 0.93 * RD, PAL.ink, { size: 20, tex: true, align: 'right', bg: PAL.panel });
    text(ctx, '$\\Delta \\ku = 0$', CX, CY + 0.62 * RD, PAL.ink, { size: 20, tex: true, align: 'center', bg: PAL.panel });
    hits.push({ x: CX, y: CY, r: 14, name: `the centre, where u is the average of g on the rim` });
    hits.push({ x: CX + RD * Math.cos(2.4), y: CY - RD * Math.sin(2.4), r: 16, name: 'the rim r = 1, held at u = g(θ)' });
    /* the ray through the probe, and the probe */
    line(ctx, CX, CY, CX + RD * Math.cos(t), CY - RD * Math.sin(t), alpha(PAL.panel, 0.7), 6);
    ctx.save(); ctx.setLineDash([4, 8]); line(ctx, CX, CY, CX + RD * Math.cos(t), CY - RD * Math.sin(t), PAL.ink, 2.5); ctx.restore();
    dot(ctx, CX + r * RD * Math.cos(t), CY - r * RD * Math.sin(t), PAL.panel, true, 13);
    const P = grip.draw(ctx, FAX, PAL.ink);
    if (P) hits.push({ x: P.x, y: P.y, r: 18, name: `the probe (r, θ) = (${n(r)}, ${n(t)}), u = ${n(W.v, 3)}` });
    /* u along the ray, its u-axis carrying the scale */
    const ny = DATA[g].ny, ax = axes(ctx, GB, [0, 1], [lo, top], { xl: 'r', yl: `u(r, θ) at θ = ${fmt(t, 2)}`, nx: 4, ny, fx: (v) => fmt(v, 2), fy: (v) => fmt(v, 1) });
    scaleBar(ctx, GB.r + 18, ax.Y(hi), GB.r + 38, ax.Y(lo), true);
    text(ctx, 'u', GB.r + 28, ax.Y(hi) - 14, PAL.ink, { size: 20, weight: 600, align: 'center' });
    hits.push({ x: GB.r + 28, y: (ax.Y(hi) + ax.Y(lo)) / 2, r: 18, name: `the temperature scale, from ${fmt(lo, 2)} (cold) to ${fmt(hi, 2)} (hot)` });
    const uf = uOf(g), ub = mixing ? uOf(from) : null, along = (q) => (ub ? (1 - k) * ub(q, t) + k * uf(q, t) : uf(q, t));
    plot(ctx, ax, along, fc, { x: [0, 1] });
    hits.push({ x: ax.X(0.8), y: ax.Y(along(0.8)), r: 14, name: `u(r, ${n(t)}) from the centre to the rim` });
    if (!mixing) {
      line(ctx, ax.X(r), ax.Y(W.v), ax.X(r), GB.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
      const q = pinned(ctx, GB, ax.X, ax.Y, r, W.v, fc);
      hits.push({ x: q.x, y: q.y, r: 14, name: `u(${n(r)}, ${n(t)}) = ${n(W.v, 3)}` });
      const gv = DATA[g].g(t, m);
      dot(ctx, ax.X(1), ax.Y(gv), fc, false, 10);
      hits.push({ x: ax.X(1), y: ax.Y(gv), r: 14, name: `the rim value g(${n(t)}) = ${n(gv, 3)}` });
    }
    headline(ctx, W.head);
    ro.set(W.tex, undefined, { form: g });
  }
  still(d, draw);
})();

/* Sim: the Poisson kernel. Left, the disc with the point (r, θ) (sliders r 0 to 0.95 and θ, Exercise 4.10.5's
   r = 1/2, θ = 0 the defaults) and the rim point (1, α) (slider α), both dragged on the canvas, the dashed radii
   r and 1 and the distance s between them, as the book's sketch draws them; the rim painted with the boundary
   data g on the temperature scale. Right, P(r, θ, α) = (1 − r²)/s² against α on [−π, π], g faint, and the
   area under P g shaded: (1/2π) times it is u(r, θ). P is 3 at α = θ and 1/3 opposite at the defaults; the
   peak (1 + r)/(1 − r) reaches 39 at r = 0.95 and is pinned at the top of the 0 to 8 frame. Still. */
(function () {
  const d = sim('sim-poisson-kernel', 620);
  const gp = choice(d.controls, { label: '\\kg(\\alpha)', key: 'g', options: [{ value: 'rod', label: 'the rod' }, { value: 'arc', label: '1 on |α| ≤ π/4' }], value: 'rod', aria: 'the boundary data' });
  const rS = ctl(d.controls, { label: 'r', cls: '', key: 'r', min: 0, max: 0.95, step: 0.01, value: 0.5, unit: '', dec: 2, specials: [{ at: 0, label: 'centre' }] });
  const tS = ctl(d.controls, { label: '\\theta', cls: '', key: 'theta', min: -3.14, max: 3.14, step: 0.01, value: 0, unit: '', dec: 2 });
  const aS = ctl(d.controls, { label: '\\alpha', cls: '', key: 'alpha', min: -3.14, max: 3.14, step: 0.01, value: 1.57, unit: '', dec: 2 });
  const inner = F.polar.grip(d, { t: tS, r: rS }), rim = F.polar.grip(d, { t: aS });
  const ro = readout(d);
  const GD = {
    rod: { max: 2, g: (a) => Math.max(0, 2 * Math.sin(a)), span: [0, Math.PI], name: 'the rod of Example 4.10.2: 2 sin α on the upper half of the rim, 0 on the lower' },
    arc: { max: 1, g: (a) => (Math.abs(wrapPi(a)) <= Math.PI / 4 ? 1 : 0), span: [-Math.PI / 4, Math.PI / 4], name: 'the data of Exercise 4.10.4: 1 for |α| ≤ π/4, 0 elsewhere' },
  };
  const Pk = (r, t, a) => (1 - r * r) / (1 - 2 * r * Math.cos(t - a) + r * r);
  /* (1/2π)∫ P g dα over the part of the rim where g is not zero, by Simpson's rule */
  function uAt(gk, r, t) {
    const G = GD[gk], [a0, a1] = G.span, M = 2048, h = (a1 - a0) / M; let s = 0;
    for (let i = 0; i <= M; i++) { const a = a0 + i * h, w = i === 0 || i === M ? 1 : i % 2 ? 4 : 2; s += w * Pk(r, t, a) * G.g(a); }
    return (s * h) / 3 / TAU;
  }
  const CX = 300, CY = 346, RD = 176;
  const FR = { l: CX - 1.3 * RD, r: CX + 1.3 * RD, t: CY - 1.3 * RD, b: CY + 1.3 * RD };
  const FAX = { X: (v) => CX + v * RD, Y: (v) => CY - v * RD, box: FR, xr: [-1.3, 1.3], yr: [-1.3, 1.3] };
  const GB = { l: 690, r: 1330, t: 130, b: 520 }, YT = 8;
  let hits = [];
  hover(d.stage, () => hits, d.c);
  function draw() {
    const { ctx } = begin(d.c);
    const gk = gp.value, G = GD[gk], r = rS.v, t = tS.v, a = aS.v, fc = C('function'), ic = C('integral');
    hits = [];
    /* the disc: the rim painted with g, the radii r and 1, and s */
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.04); ctx.beginPath(); ctx.arc(CX, CY, RD, 0, TAU); ctx.fill(); ctx.restore();
    const M = 240;
    for (let i = 0; i < M; i++) {
      const a0 = -Math.PI + (TAU * i) / M, a1 = a0 + TAU / M + 0.004;
      ctx.save(); ctx.strokeStyle = tempCss(G.g((a0 + a1) / 2) / G.max); ctx.lineWidth = 14; ctx.beginPath(); ctx.arc(CX, CY, RD + 7, -a1, -a0); ctx.stroke(); ctx.restore();
    }
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(CX, CY, RD, 0, TAU); ctx.stroke(); ctx.restore();
    hits.push({ x: CX + (RD + 7) * Math.cos(2.6), y: CY - (RD + 7) * Math.sin(2.6), r: 14, name: `the rim, painted with g: ${G.name}` });
    const px = CX + r * RD * Math.cos(t), py = CY - r * RD * Math.sin(t), qx = CX + RD * Math.cos(a), qy = CY - RD * Math.sin(a);
    const s2 = 1 - 2 * r * Math.cos(t - a) + r * r, s = Math.sqrt(s2);
    ctx.save(); ctx.setLineDash([10, 10]);
    line(ctx, CX, CY, px, py, alpha(PAL.ink, 0.7), 2.5); line(ctx, CX, CY, qx, qy, alpha(PAL.ink, 0.7), 2.5);
    ctx.restore();
    line(ctx, px, py, qx, qy, PAL.ink, 3.5);
    dot(ctx, CX, CY, PAL.ink, true, 5);
    /* a segment's name beside it at fraction f of its length, on the side away from the point (ax, ay) */
    const along = (x0, y0, x1, y1, f, str, awayX, awayY) => {
      const L = Math.hypot(x1 - x0, y1 - y0) || 1, nx = -(y1 - y0) / L, ny = (x1 - x0) / L, mx = x0 + f * (x1 - x0), my = y0 + f * (y1 - y0);
      const side = nx * (awayX - mx) + ny * (awayY - my) > 0 ? -1 : 1, gap = 16 + (F.measure(ctx, str, { size: 20, weight: 600 }) / 2) * Math.abs(nx) + 12 * Math.abs(ny);
      text(ctx, str, mx + side * gap * nx, my + side * gap * ny + 7, PAL.ink, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    };
    if (r > 0.3) along(CX, CY, px, py, 0.35, 'r', qx, qy);
    along(CX, CY, qx, qy, 0.3, '1', px, py);
    if (s > 0.25) along(px, py, qx, qy, 0.5, `s = ${fmt(s, 2)}`, CX, CY);
    hits.push({ x: (px + qx) / 2, y: (py + qy) / 2, r: 16, name: `s, the distance from (r, θ) to (1, α): s² = 1 − 2r cos(θ − α) + r² = ${fmt(s2, 3)}` });
    const Pp = inner.draw(ctx, FAX, PAL.ink), Pq = rim.draw(ctx, FAX, PAL.ink);
    /* the point's name in the widest gap between its two segments */
    const aQ = Math.atan2(qy - py, qx - px), aC = r > 0.02 ? Math.atan2(CY - py, CX - px) : aQ + Math.PI;
    let bis = (aQ + aC) / 2; const gapTo = (u, v) => Math.abs(Math.atan2(Math.sin(u - v), Math.cos(u - v)));
    if (gapTo(bis, aQ) < Math.PI / 2) bis += Math.PI;
    if (Pp) { text(ctx, '(r, θ)', Pp.x + 46 * Math.cos(bis), Pp.y + 40 * Math.sin(bis) + 7, PAL.ink, { size: 20, align: 'center', bg: PAL.panel }); hits.push({ x: Pp.x, y: Pp.y, r: 18, name: `the point (r, θ) = (${n(r)}, ${n(t)})` }); }
    if (Pq) { text(ctx, '(1, α)', CX + (RD + 46) * Math.cos(a), CY - (RD + 40) * Math.sin(a) + 7, PAL.ink, { size: 20, align: 'center', bg: PAL.panel }); hits.push({ x: Pq.x, y: Pq.y, r: 18, name: `the rim point (1, α), α = ${n(a)}, where g = ${fmt(G.g(a), 2)}` }); }
    /* the scale of g under the disc */
    scaleBar(ctx, CX - 130, 572, CX + 130, 586, false);
    text(ctx, '0', CX - 130, 610, PAL.muted, { size: 17, align: 'center' });
    text(ctx, fmt(G.max, 0), CX + 130, 610, PAL.muted, { size: 17, align: 'center' });
    text(ctx, '$\\kg$', CX - 150, 584, PAL.ink, { size: 20, tex: true, align: 'right' });
    /* the kernel against α, g faint, and the area under P g */
    const ax = axes(ctx, GB, [-Math.PI, Math.PI], [0, YT], { xl: 'α', yl: '', nx: 4, ny: 4, fx: piTick });
    text(ctx, '$\\kP(r,\\theta,\\alpha)$, $\\kg(\\alpha)$', GB.l, GB.t - 24, PAL.ink, { size: 20, tex: true, align: 'left' });
    const P = (q) => Pk(r, t, q);
    shade(ctx, ax, (q) => P(q) * G.g(q), 0, -Math.PI, Math.PI, ic, { alpha: 0.3 });
    plot(ctx, ax, G.g, alpha(fc, 0.5), { w: 3 });
    plot(ctx, ax, P, fc, { w: 5 });
    const pk = (1 + r) / (1 - r), far = (1 - r) / (1 + r), u = uAt(gk, r, t);
    const top = pinned(ctx, GB, ax.X, ax.Y, t, pk, fc, `peak ${fmt(pk, 1)}`);
    hits.push({ x: top.x, y: top.y, r: 16, name: `the peak of P at α = θ: (1 + r)/(1 − r) = ${fmt(pk, 2)}` });
    hits.push({ x: ax.X(wrapPi(t + Math.PI)), y: ax.Y(far), r: 16, name: `P on the far side, α = θ ± π: (1 − r)/(1 + r) = ${fmt(far, 2)}` });
    const gx = gk === 'rod' ? Math.PI / 2 : 0;
    hits.push({ x: ax.X(gx), y: ax.Y(G.g(gx)), r: 16, name: `g(α), ${G.name}` });
    hits.push({ x: ax.X(gk === 'rod' ? 2.2 : 0.4), y: ax.Y(0.3), r: 18, name: `the area under P g, 2π u(r, θ) = ${fmt(TAU * u, 3)}` });
    const pa = P(a);
    line(ctx, ax.X(a), GB.b, ax.X(a), ax.Y(Math.min(pa, YT)), alpha(PAL.ink, 0.5), 2, [4, 8]);
    const at = pinned(ctx, GB, ax.X, ax.Y, a, pa, fc);
    if (!at.out) label(ctx, `P = ${fmt(pa, 2)}`, at.x, at.y, { side: a > 2 ? 'left' : 'right', size: 20, color: fc, gap: 14 });
    hits.push({ x: at.x, y: at.y, r: 14, name: `P(r, θ, α) at α = ${n(a)}: ${fmt(pa, 2)}` });
    headline(ctx, r < 0.005
      ? `$r = 0$: the kernel is 1 at every $\\alpha$, and $\\ku(0,0) = ${n(u, 3)}$ is the plain average of $\\kg$.`
      : `$r = ${n(r)}$, $\\theta = ${n(t)}$: the kernel peaks at $(1+r)/(1-r) = ${n(pk)}$ over $\\alpha = \\theta$ and falls to $(1-r)/(1+r) = ${n(far)}$ on the far side, ${fmt(pk / far, 1)} times less.`);
    const num = +n(1 - r * r, 4), den = +n(s2, 4), pd = num / den;
    const diff = a < 0 ? `${n(t)} + ${n(-a)}` : `${n(t)} - ${n(a)}`;
    ro.set(`\\kP(r,\\theta,\\alpha) = \\frac{1-r^2}{s^2} = \\frac{1 - ${n(r)}^2}{1 - 2(${n(r)})\\cos(${diff}) + ${n(r)}^2} = \\frac{${n(num, 4)}}{${n(den, 4)}} = ${n(pd, 2)}`,
      `$\\ku(${n(r)}, ${n(t)}) = \\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi} \\kP\\,\\kg\\,d\\alpha = ${n(u, 3)}$`);
  }
  still(d, draw);
})();
};
