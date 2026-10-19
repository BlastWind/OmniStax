/* Figures for section 4.9 Steady state temperature and the Laplacian. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.9'] = function (root, F) {
const { C, PAL, alpha, ctl, choice, begin, axes, plot, dot, line, text, headline, register, readout, fmt, hover, drag, space: SP } = F;
const sim = (id, H) => F.sim(root, id, H);
const n2 = (v, dec = 2) => fmt(v, dec).replace('−', '-');
const mark = (ctx, s, x, y, color, o = {}) => text(ctx, s, x, y, color, { size: 20, weight: 400, tex: true, bg: PAL.panel, ...o });

/* The temperature scale, cold to hot: a false-colour map of one scalar (root rule 7.1, book COLOR.md Facts),
   the same in both themes and drawn through F.fact. With facts switched off the plate is shaded from the
   panel to ink instead, so it still reads as one scale. */
const TEMPERATURE_SCALE = ['#313695', '#4575b4', '#74add1', '#abd9e9', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026'];
let probeCtx = null;
const rgbSeen = new Map();
function rgbOf(c) {
  if (rgbSeen.has(c)) return rgbSeen.get(c);
  probeCtx = probeCtx || document.createElement('canvas').getContext('2d', { willReadFrequently: true });
  probeCtx.clearRect(0, 0, 1, 1); probeCtx.fillStyle = '#000'; probeCtx.fillStyle = c; probeCtx.fillRect(0, 0, 1, 1);
  const d = probeCtx.getImageData(0, 0, 1, 1).data, v = [d[0], d[1], d[2]];
  rgbSeen.set(c, v); return v;
}
function stopsNow() {
  const st = TEMPERATURE_SCALE.map((h) => F.fact(h));
  if (st.every((c) => c === st[0])) {
    const a = rgbOf(PAL.panel), b = rgbOf(PAL.ink);
    return [0.12, 0.88].map((k) => a.map((v, i) => v + (b[i] - v) * k));
  }
  return st.map(rgbOf);
}
const ramp = (stops, t) => {
  const k = Math.min(1, Math.max(0, t)) * (stops.length - 1), i = Math.min(stops.length - 2, Math.floor(k)), f = k - i;
  return stops[i].map((v, j) => v + (stops[i + 1][j] - v) * f);
};
const hex = (c) => '#' + c.map((v) => Math.round(v).toString(16).padStart(2, '0')).join('');

/* Figure 4.25 (with the book's region image): the Dirichlet problem on the plate 0 < x < w = π, 0 < y < h,
   u = 0 on the left, top and right edges and u(x, 0) = f(x) on the bottom, solved by the boxed series
   u = Σ b_n sin(nx) sinh(n(h − y))/sinh(nh) (w = π, so nπ/w = n). The 2D view is the plate as a heat map on one
   temperature scale, the row through the probe graphed beside it against f, the scale's strip as the legend on
   the graph's own u axis; the 3D view (archetype 10, mounted on the first switch) is the surface u(x, y) over the
   plate, coloured on the same scale, its boundary wire in ink. Still: a steady state has no clock. Choice of f
   (π of Example 4.9.1, sin x of Exercise 4.9.1, sin x − sin 2x of Exercise 4.9.2 on this plate), h on a slider
   (π/4 to 3π/2, the square h = w = π a dashed special), the probe (x, y) dragged on the plate or in 3D. Axes:
   the plate x 0 to π, y 0 to 3π/2 at one scale; the row graph u from the scale's low end to its high end. */
(function () {
  const d = sim('sim-square-plate', 690);
  let settled = 0;   /* the probe's y slider eases into its new range [0, h]; the figure redraws once it has settled */
  const PI = Math.PI, HMAX = 1.5 * PI;
  const view = choice(d.controls, { label: 'view', key: 'view', options: [{ value: '2d', label: '2D' }, { value: '3d', label: '3D' }], value: '2d', aria: 'heat map or surface', ms: 0 });
  const fsel = choice(d.controls, { label: '\\kf(x)', key: 'f', options: [{ value: 'pi', label: 'π' }, { value: 'sin', label: 'sin x' }, { value: 'two', label: 'sin x − sin 2x' }], value: 'pi', aria: 'boundary data on the bottom edge' });
  const hs = ctl(d.controls, { label: 'h', cls: '', key: 'h', min: PI / 4, max: HMAX, step: PI / 100, value: PI, unit: '', dec: 2, specials: [{ at: PI, label: 'square, h = w' }], onInput: () => { ys.range({ min: 0, max: hs.v, step: 0.01, dec: 2 }); clearTimeout(settled); settled = setTimeout(() => d.fig.dispatchEvent(new Event('change')), 450); } });
  const xs = ctl(d.controls, { label: 'x', cls: '', key: 'x', min: 0, max: PI, step: PI / 100, value: PI / 2, unit: '', dec: 2 });
  const ys = ctl(d.controls, { label: 'y', cls: '', key: 'y', min: 0, max: PI, step: 0.01, value: 0.8, unit: '', dec: 2 });
  const ro = readout(d);
  const probe = drag(d, { x: xs, y: ys });

  /* the three boundary data: f itself, its sine coefficients b_n (index n), the scale's ends and how the readout writes it */
  const NB = 999;
  const coef = (k) => { const b = new Float64Array(NB + 1); if (k === 'pi') { for (let n = 1; n <= NB; n += 2) b[n] = 4 / n; } else { b[1] = 1; if (k === 'two') b[2] = -1; } return b; };
  const DATA = {
    pi: { f: () => PI, b: coef('pi'), lo: 0, hi: PI, tex: '\\pi' },
    sin: { f: (x) => Math.sin(x), b: coef('sin'), lo: 0, hi: 1, tex: '\\sin x' },
    two: { f: (x) => Math.sin(x) - Math.sin(2 * x), b: coef('two'), lo: -0.4, hi: 1.8, tex: '\\sin x - \\sin 2x' },
  };
  /* Y_n(y) = sinh(n(h − y))/sinh(nh), written so that large n neither overflows nor loses its digits */
  const Yn = (n, y, h) => (y >= h ? 0 : Math.exp(-n * y) * (1 - Math.exp(-2 * n * (h - y))) / (1 - Math.exp(-2 * n * h)));
  /* u at one point from coefficients b (the series), the bottom edge from f and the other three edges 0 */
  function uAt(D, x, y, h) {
    if (x <= 1e-12 || x >= PI - 1e-12 || y >= h - 1e-12) return 0;
    if (y <= 1e-12) return D.f(x);
    let s = 0;
    for (let n = 1; n <= NB; n++) { const b = D.b[n]; if (b) s += b * Math.sin(n * x) * Yn(n, y, h); }
    return s;
  }
  /* the probe's value to more terms than the drawing needs, for the readout (only π has more than two) */
  function uProbe(k, x, y, h) {
    if (k !== 'pi' || x <= 1e-12 || x >= PI - 1e-12 || y <= 1e-12 || y >= h - 1e-12) return uAt(DATA[k], x, y, h);
    let s = 0; for (let n = 1; n <= 8001; n += 2) s += (4 / n) * Math.sin(n * x) * Yn(n, y, h); return s;
  }
  /* the blend of two boundary data while the choice of f morphs: f, b_n and the scale's ends mix linearly */
  function mixed() {
    const A = DATA[fsel.from] ?? DATA[fsel.value], B = DATA[fsel.value], k = fsel.from === fsel.value ? 1 : F.ease.smooth(fsel.k);
    if (k >= 1) return B;
    const b = new Float64Array(NB + 1); for (let n = 1; n <= NB; n++) b[n] = A.b[n] + (B.b[n] - A.b[n]) * k;
    return { f: (x) => A.f(x) + (B.f(x) - A.f(x)) * k, b, lo: A.lo + (B.lo - A.lo) * k, hi: A.hi + (B.hi - A.hi) * k };
  }

  /* the heat map: u on a (NX + 1) by (NY + 1) grid over the plate, kept until f, h or the colours change */
  const NX = 120, NY = 120;
  const sinTab = []; for (let n = 0; n <= NB; n++) { const r = new Float64Array(NX + 1); for (let i = 0; i <= NX; i++) r[i] = Math.sin((n * PI * i) / NX); sinTab.push(r); }
  let img = null, imgKey = '';
  const off = document.createElement('canvas'); off.width = NX + 1; off.height = NY + 1;
  function grid(D, h) {
    const u = new Float64Array((NX + 1) * (NY + 1)), ns = [];
    for (let n = 1; n <= NB; n++) if (D.b[n]) ns.push(n);
    for (let j = 0; j <= NY; j++) {
      const y = (h * j) / NY;
      if (j === 0) { for (let i = 1; i < NX; i++) u[i] = D.f((PI * i) / NX); continue; }
      if (j === NY) continue;
      const row = j * (NX + 1);
      for (const n of ns) {
        const c = D.b[n] * Yn(n, y, h); if (Math.abs(c) < 1e-12) continue;
        const s = sinTab[n]; for (let i = 1; i < NX; i++) u[row + i] += c * s[i];
      }
    }
    return u;
  }
  function heatImage(D, h, stops) {
    const key = [fsel.value, fsel.from, fsel.k.toFixed(3), h.toFixed(6), stops.map(hex).join()].join('|');
    if (key === imgKey && img) return img;
    const u = grid(D, h), cx = off.getContext('2d'), im = cx.createImageData(NX + 1, NY + 1);
    for (let j = 0; j <= NY; j++) for (let i = 0; i <= NX; i++) {
      const c = ramp(stops, (u[j * (NX + 1) + i] - D.lo) / (D.hi - D.lo)), p = 4 * ((NY - j) * (NX + 1) + i);
      im.data[p] = c[0]; im.data[p + 1] = c[1]; im.data[p + 2] = c[2]; im.data[p + 3] = 255;
    }
    cx.putImageData(im, 0, 0); img = off; imgKey = key; return img;
  }

  /* the 3D view: the same u as a surface over the plate, its quads banded by the scale */
  const box3 = [[0, PI], [0, HMAX], [-0.5, 3.5]];
  let S = null, hits = [];
  hover(d.stage, () => hits, d.c);
  function mount3d() {
    S = F.space3d(d, { box: box3, h: 690, pitch: [0.12, 1.5], fit: 1.75, turn: -3.0, tilt: 0.55 });   /* above the plate: from beneath it shows nothing new */
    d.c.style.display = 'none';
    S.drag({ at: () => [xs.v, ys.v, uProbe(fsel.value, xs.v, ys.v, hs.v) + 0.04], on: 'pick', move: (q) => { xs.drive(q[0]); ys.drive(q[1]); } });
  }
  function unmount3d() {
    const w = S.v ? S.v.wrap : [...d.stage.querySelectorAll('canvas')].pop();
    S.v?.dispose(); if (w && w !== d.c) w.remove(); S = null;
    d.c.style.display = '';
  }
  const BANDS = 24, M = 48;
  function surface(D, h, stops) {
    const P = (i, j) => { const x = (PI * i) / M, y = (h * j) / M; return [x, y, uAt(D, x, y, h)]; };
    const pts = []; for (let j = 0; j <= M; j++) { const r = []; for (let i = 0; i <= M; i++) r.push(P(i, j)); pts.push(r); }
    const bins = Array.from({ length: BANDS }, () => []);
    for (let j = 0; j < M; j++) for (let i = 0; i < M; i++) {
      const q = [pts[j][i], pts[j][i + 1], pts[j + 1][i + 1], pts[j + 1][i]], m = (q[0][2] + q[1][2] + q[2][2] + q[3][2]) / 4;
      bins[Math.min(BANDS - 1, Math.max(0, Math.floor(((m - D.lo) / (D.hi - D.lo)) * BANDS)))].push(q);
    }
    return { pts, marks: bins.flatMap((faces, k) => (faces.length ? [{ k: 'faces', faces, color: hex(ramp(stops, (k + 0.5) / BANDS)), alpha: 1, name: 'the surface u(x, y): the rubber sheet stretched on its wire' }] : [])) };
  }

  /* layout of the flat view */
  const KP = 480 / HMAX, PL = { l: 230, r: 230 + PI * KP, t: 120, b: 600 };
  const GB = { l: 760, r: 1240, t: 150, b: 560 };
  function draw() {
    const fc = C('function'), rc = C('region'), stops = stopsNow(), D = mixed(), T = DATA[fsel.value];
    const h = hs.v, x0 = xs.v, y0 = Math.min(ys.v, h), u0 = uProbe(fsel.value, x0, y0, h);
    const where = x0 <= 1e-9 ? 'left' : x0 >= PI - 1e-9 ? 'right' : y0 >= h - 1e-9 ? 'top' : y0 <= 1e-9 ? 'bottom' : 'inside';
    const head = `$\\kf(x) = ${T.tex}$, $h = ${n2(h)}$: at $(${n2(x0)}, ${n2(y0)})$ the plate is at $\\ku = ${n2(u0)}$, and it is never hotter or colder inside than on its edges.`;
    if (view.value === '3d' && !S) mount3d();
    if (view.value === '2d' && S) unmount3d();
    if (S) {
      const sf = surface(D, h, stops);
      S.set('axes', SP.axes(box3, { ticks: [1, 1, 1], names: ['$x$', '$y$', '$\\ku$'] }));
      S.set('surf', sf.marks);
      S.set('pick', [{ k: 'sheet', rows: sf.pts, color: 'ink', alpha: 0, param: (s, t) => [PI * s, h * t] }]);
      const bottom = Array.from({ length: 121 }, (_, i) => { const x = (PI * i) / 120; return [x, 0, i === 0 || i === 120 ? 0 : D.f(x)]; });
      S.set('wire', [
        { k: 'line', pts: bottom, color: 'ink', w: 3.5, name: 'the wire on the bottom edge: u(x, 0) = f(x)' },
        { k: 'line', pts: [[0, 0, 0], [0, h, 0], [PI, h, 0], [PI, 0, 0]], color: 'ink', w: 3.5, name: 'the wire on the left, top and right edges: u = 0' },
      ]);
      /* the scale's strip stands upright beside the far end of the bottom edge, along u: a height and its colour side by side */
      const NS = 32, sx = [PI + 0.25, PI + 0.5], st3 = D.hi - D.lo > 2.5 ? 1 : 0.5;
      S.set('legend', [
        ...Array.from({ length: NS }, (_, i) => {
          const z0 = D.lo + ((D.hi - D.lo) * i) / NS, z1 = D.lo + ((D.hi - D.lo) * (i + 1)) / NS;
          return { k: 'faces', faces: [[[sx[0], 0, z0], [sx[1], 0, z0], [sx[1], 0, z1], [sx[0], 0, z1]]], color: hex(ramp(stops, (i + 0.5) / NS)), alpha: 1, name: `the temperature scale, u from ${n2(D.lo)} (cold) to ${n2(D.hi)} (hot)` };
        }),
        ...Array.from({ length: Math.floor((D.hi - D.lo) / st3 + 1e-9) + 1 }, (_, i) => Math.ceil(D.lo / st3 - 1e-9) * st3 + i * st3).filter((v) => v <= D.hi + 1e-9)
          .map((v) => ({ k: 'label', s: fmt(v + 0, st3 < 1 ? 1 : 0), p: [sx[1] + 0.3, 0, v], cls: 'tick' })),
      ]);
      S.set('probe', [{ k: 'dot', p: [x0, y0, u0 + 0.04], color: 'ink', r: 9, name: `the probe: u(${n2(x0)}, ${n2(y0)}) = ${n2(u0, 3)}` }]);
      S.headline(head);
    } else {
      const { ctx } = begin(d.c), k = F.arrival(d);
      hits = [];
      /* the plate: the heat map on the scale, filling from its outline as the figure arrives */
      const ax = axes(ctx, PL, [0, PI], [0, HMAX], { xl: 'x', yl: 'y', nx: 4, ny: 6, nice: true });
      const X0 = ax.X(0), X1 = ax.X(PI), Yh = ax.Y(h), Y0 = ax.Y(0);
      ctx.save(); ctx.globalAlpha *= F.ease.smooth(Math.min(1, Math.max(0, (k - 0.25) / 0.6)));
      ctx.imageSmoothingEnabled = true; ctx.drawImage(heatImage(D, h, stops), X0, Yh, X1 - X0, Y0 - Yh); ctx.restore();
      ctx.save(); ctx.strokeStyle = rc; ctx.lineWidth = 3; ctx.strokeRect(X0, Yh, X1 - X0, Y0 - Yh); ctx.restore();
      hits.push({ x: (X0 + X1) / 2, y: Y0, r: 16, name: 'the bottom edge, u(x, 0) = f(x)' },
        { x: X0, y: (Yh + Y0) / 2, r: 16, name: 'the left edge, u(0, y) = 0' }, { x: X1, y: (Yh + Y0) / 2, r: 16, name: 'the right edge, u(π, y) = 0' },
        { x: (X0 + X1) / 2, y: Yh, r: 16, name: `the top edge, u(x, ${n2(h)}) = 0` },
        { x: (X0 + X1) / 2, y: (Yh + Y0) / 2, r: 60, name: 'the plate 0 < x < π, 0 < y < h: the steady-state temperature u(x, y), coloured on the scale beside the graph' });
      mark(ctx, '$\\ku = 0$', (X0 + X1) / 2, Yh - 20, fc, { align: 'center' });
      mark(ctx, '$\\ku = 0$', X0 - 64, (Yh + Y0) / 2, fc, { align: 'right' });
      mark(ctx, '$\\ku = 0$', X1 + 14, (Yh + Y0) / 2, fc, { align: 'left' });
      mark(ctx, '$\\ku(x, 0) = \\kf(x)$', (X0 + X1) / 2, Y0 + 62, fc, { align: 'center' });
      /* the row through the probe, and the probe */
      if (y0 > 1e-9 && y0 < h - 1e-9) line(ctx, X0, ax.Y(y0), X1, ax.Y(y0), alpha(PAL.ink, 0.55), 2, [10, 10]);
      const pp = probe.draw(ctx, ax, PAL.ink);
      if (pp) hits.push({ x: pp.x, y: pp.y, r: 18, name: `the probe at (${n2(x0)}, ${n2(y0)}): u = ${n2(u0, 3)}; drag it over the plate` });
      /* the row graph: f dashed, u(x, y0) solid, on the scale's range; the scale's strip beside it as the legend */
      const g = axes(ctx, GB, [0, PI], [D.lo, D.hi], { xl: 'x', yl: 'u', yc: fc, nx: 4, ny: 6, nice: true });
      ctx.save(); ctx.setLineDash([10, 10]); plot(ctx, g, (x) => D.f(x), alpha(fc, 0.55), { w: 3, x: [1e-6, PI - 1e-6] }); ctx.restore();
      plot(ctx, g, (x) => uAt(D, x, y0, h), fc, { w: 5 });
      const yl = y0 <= 1e-9 ? 0 : y0;
      hits.push({ x: g.X(0.4), y: g.Y(D.f(0.4)), r: 14, name: 'the data on the bottom edge, f(x) = u(x, 0)' },
        { x: g.X(2.2), y: g.Y(uAt(D, 2.2, y0, h)), r: 14, name: `the row through the probe, u(x, ${n2(yl)})` });
      mark(ctx, '$\\kf(x)$', g.X(PI * 0.86), g.Y(D.f(PI * 0.86)) - 22, fc, { align: 'right' });
      mark(ctx, `$\\ku(x, ${n2(yl)})$`, g.X(0.5), Math.min(GB.b - 20, g.Y(uAt(D, 0.5, y0, h)) + 26), fc, { align: 'left' });
      if (x0 > 1e-9 && x0 < PI - 1e-9) dot(ctx, g.X(x0), g.Y(u0), fc, true, 9);
      const SX = GB.r + 22, SW = 20, NS = 64;
      for (let i = 0; i < NS; i++) {
        const t0 = i / NS, c = ramp(stops, (i + 0.5) / NS), ya = GB.b - (GB.b - GB.t) * t0, yb = GB.b - (GB.b - GB.t) * (t0 + 1 / NS);
        ctx.fillStyle = hex(c); ctx.fillRect(SX, yb - 0.5, SW, ya - yb + 1);
      }
      ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 1.5; ctx.strokeRect(SX, GB.t, SW, GB.b - GB.t); ctx.restore();
      const st = D.hi - D.lo > 2.5 ? 1 : 0.5;
      for (let v = Math.ceil(D.lo / st - 1e-9) * st; v <= D.hi + 1e-9; v += st) text(ctx, fmt(v + 0, st < 1 ? 1 : 0), SX + SW + 10, g.Y(v), PAL.muted, { size: 17, align: 'left' });
      mark(ctx, '$\\ku$', SX + SW / 2, GB.t - 24, fc, { align: 'center', weight: 600 });
      hits.push({ x: SX + SW / 2, y: (GB.t + GB.b) / 2, r: 18, name: `the temperature scale, u from ${n2(D.lo)} (cold) to ${n2(D.hi)} (hot)` });
      headline(ctx, head);
    }
    /* the readout: the boxed series with w = π at the probe, its terms adding to the value */
    const xs2 = n2(x0), ys2 = n2(y0), hy = n2(h - y0), hh = n2(h), v3 = (v) => n2(v, 3);
    const lhs = `\\ku(${xs2}, ${ys2})`;
    let tx;
    if (where === 'bottom') tx = `${lhs} = \\kf(${xs2}) = ${fsel.value === 'pi' ? '\\pi' : fsel.value === 'sin' ? `\\sin(${xs2})` : `\\sin(${xs2}) - \\sin(${n2(2 * x0)})`} = ${v3(u0)}`;
    else if (where !== 'inside') tx = `${lhs} = 0 \\quad \\text{(the ${where} edge)}`;
    else if (fsel.value === 'pi') {
      const t = [1, 3, 5, 7].map((n) => (4 / n) * Math.sin(n * x0) * Yn(n, y0, h));
      const terms = t.map((v, i) => (i === 0 ? v3(v) : `${v < 0 ? '-' : '+'} ${v3(Math.abs(v))}`)).join(' ');
      tx = `${lhs} = \\sum_{n\\ \\mathrm{odd}} \\frac{4}{n} \\sin(${xs2}\\,n)\\,\\frac{\\sinh(${hy}\\,n)}{\\sinh(${hh}\\,n)} = ${terms} + \\cdots = ${v3(u0)}`;
    } else if (fsel.value === 'sin') {
      const a = Math.sin(x0), y1 = Yn(1, y0, h);
      tx = `${lhs} = \\sin(${xs2})\\,\\frac{\\sinh(${hy})}{\\sinh(${hh})} = ${v3(a)} \\times ${v3(y1)} = ${v3(u0)}`;
    } else {
      const a = Math.sin(x0) * Yn(1, y0, h), b = -Math.sin(2 * x0) * Yn(2, y0, h);
      tx = `${lhs} = \\sin(${xs2})\\,\\frac{\\sinh(${hy})}{\\sinh(${hh})} - \\sin(${n2(2 * x0)})\\,\\frac{\\sinh(${n2(2 * (h - y0))})}{\\sinh(${n2(2 * h)})} = ${v3(a)} ${b < 0 ? '-' : '+'} ${v3(Math.abs(b))} = ${v3(u0)}`;
    }
    ro.set(tx);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
