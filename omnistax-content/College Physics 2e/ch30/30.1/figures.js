/* Figures for section 30.1 Discovery of the Atom.
   The page binds no type: the sim counts hits, which are untyped. Water
   molecules wear the element palette, F.el('O') and F.el('H'); the pollen grain
   wears its own yellow through F.fact, as the book draws it. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['30.1'] = function (root, F) {
const { fmt, PAL, alpha, ctl, register, cycle, begin, line, text, topline, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI;
const POLLEN = '#E0A43A';
function rng(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }

/* =====================================================================
   FIGURE 30.2 · sim-brownian-motion · moving · flat (rule 28.1)
   N water molecules and one pollen grain in a circular field of view, the
   molecules striking the grain elastically and reflecting off the edge. The
   water's total mass and thermal energy are fixed, so a molecule's mass falls
   as 1/N while its speed does not, and the grain's wandering shrinks as N
   grows. The run is stepped from its seed, so any time on the scrubber is
   reached by replaying from the start. The grain is marked every INT of model
   time; the tally counts the hits on each side of it between marks.
===================================================================== */
(function () {
  const R = 300, CX = 700, CY = 430, RG = 48;            /* field of view and grain, logical units */
  const FILL = 0.25, MTOT = 1, MG = 0.12, SIG = 500;     /* molecules cover a quarter of the view; masses relative; speed per component */
  const DT = 1 / 240, INT = 0.5, WARM = 0.5, T = 6, SEED = 11;
  const d = sim('sim-brownian-motion', 770);
  const nMol = ctl(d.controls, { label: '\\text{molecules}', cls: '', min: 150, max: 1200, step: 50, value: 300, unit: '', dec: 0, onInput: reset, aria: 'the number of water molecules in view' });
  const cy = cycle(() => T, 1.2);
  const ro = readout(d);
  let run = null;
  function reset() { cy.reset(); run = null; }

  function start(N) {
    const r = Math.sqrt(FILL * R * R / N), m = MTOT / N, rnd = rng(SEED);
    const gauss = () => Math.sqrt(-2 * Math.log(1 - rnd())) * Math.cos(TAU * rnd());
    const x = new Float64Array(N), y = new Float64Array(N), vx = new Float64Array(N), vy = new Float64Array(N), tilt = new Float64Array(N);
    for (let i = 0; i < N; i++) {
      let a, b;
      do { a = (2 * rnd() - 1) * R; b = (2 * rnd() - 1) * R; } while (a * a + b * b > (R - r) ** 2 || a * a + b * b < (RG + r) ** 2);
      x[i] = a; y[i] = b; vx[i] = SIG * gauss(); vy[i] = SIG * gauss(); tilt[i] = TAU * rnd();
    }
    return { N, r, m, x, y, vx, vy, tilt, g: { x: 0, y: 0, vx: 0, vy: 0 }, t: -WARM, next: 0, L: 0, Rt: 0, tally: [], marks: [], path: [], n: 0 };
  }
  function step(s) {
    const g = s.g, lim = R - s.r, cd = RG + s.r, gl = R - RG, m = s.m;
    g.x += g.vx * DT; g.y += g.vy * DT;
    const gr = Math.hypot(g.x, g.y);
    if (gr > gl) { const nx = g.x / gr, ny = g.y / gr, un = g.vx * nx + g.vy * ny; if (un > 0) { g.vx -= 2 * un * nx; g.vy -= 2 * un * ny; } g.x = nx * gl; g.y = ny * gl; }
    for (let i = 0; i < s.N; i++) {
      s.x[i] += s.vx[i] * DT; s.y[i] += s.vy[i] * DT;
      const d2 = s.x[i] * s.x[i] + s.y[i] * s.y[i];
      if (d2 > lim * lim) {
        const q = Math.sqrt(d2), nx = s.x[i] / q, ny = s.y[i] / q, un = s.vx[i] * nx + s.vy[i] * ny;
        if (un > 0) { s.vx[i] -= 2 * un * nx; s.vy[i] -= 2 * un * ny; }
        s.x[i] = nx * lim; s.y[i] = ny * lim;
      }
      const dx = s.x[i] - g.x, dy = s.y[i] - g.y, e2 = dx * dx + dy * dy;
      if (e2 < cd * cd) {
        const e = Math.sqrt(e2), nx = dx / e, ny = dy / e, un = (s.vx[i] - g.vx) * nx + (s.vy[i] - g.vy) * ny;
        if (un < 0) {
          const J = 2 * m * MG / (m + MG) * un;
          s.vx[i] -= J / m * nx; s.vy[i] -= J / m * ny; g.vx += J / MG * nx; g.vy += J / MG * ny;
          if (nx < 0) s.L++; else s.Rt++;
        }
        s.x[i] = g.x + nx * cd; s.y[i] = g.y + ny * cd;
      }
    }
    s.t += DT; s.n++;
    if (s.t >= 0 && s.n % 2 === 0) s.path.push([g.x, g.y]);
    if (s.t >= s.next - 1e-9) { s.tally.push([s.L, s.Rt]); s.marks.push([g.x, g.y]); s.L = 0; s.Rt = 0; s.next += INT; }
  }
  function at(t) {
    const N = Math.round(nMol.v);
    if (!run || run.N !== N || t < run.t - DT) run = start(N);
    while (run.t < t - DT / 2) step(run);
    return run;
  }

  function water(ctx, s, k) {
    const ro = 0.78 * s.r, hr = ro * 0.55, hd = ro * 0.95;
    ctx.save(); ctx.lineWidth = 1; ctx.strokeStyle = alpha(PAL.ink, 0.6);
    ctx.fillStyle = F.el('H'); ctx.beginPath();
    for (let i = 0; i < k; i++) {
      const x = CX + s.x[i], y = CY + s.y[i];
      for (const a of [s.tilt[i] - 0.91, s.tilt[i] + 0.91]) { const hx = x + hd * Math.sin(a), hy = y - hd * Math.cos(a); ctx.moveTo(hx + hr, hy); ctx.arc(hx, hy, hr, 0, TAU); }
    }
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = F.el('O'); ctx.beginPath();
    for (let i = 0; i < k; i++) { const x = CX + s.x[i], y = CY + s.y[i]; ctx.moveTo(x + ro, y); ctx.arc(x, y, ro, 0, TAU); }
    ctx.fill(); ctx.restore();
  }
  function pollen(ctx, x, y, rg, a) {
    const S = 22;
    ctx.save(); ctx.globalAlpha *= a; ctx.fillStyle = F.fact(POLLEN); ctx.strokeStyle = alpha(PAL.ink, 0.55); ctx.lineWidth = 1.5;
    ctx.beginPath();
    for (let j = 0; j < 2 * S; j++) { const q = j * Math.PI / S, rr = j % 2 ? rg : rg - 7; ctx.lineTo(x + rr * Math.cos(q), y + rr * Math.sin(q)); }
    ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
  }
  function head(ctx, x1, y1, x2, y2) {
    const L = Math.hypot(x2 - x1, y2 - y1);
    if (L < 30) return;
    const ux = (x2 - x1) / L, uy = (y2 - y1) / L, mx = (x1 + x2) / 2 + ux * 7, my = (y1 + y2) / 2 + uy * 7;
    ctx.save(); ctx.fillStyle = PAL.ink; ctx.beginPath();
    ctx.moveTo(mx, my); ctx.lineTo(mx - 15 * ux + 6 * uy, my - 15 * uy - 6 * ux); ctx.lineTo(mx - 15 * ux - 6 * uy, my - 15 * uy + 6 * ux);
    ctx.closePath(); ctx.fill(); ctx.restore();
  }

  let hits = [];
  hover(d.stage, () => hits);

  function draw() {
    const { ctx } = begin(d.c);
    const s = at(cy.now()), N = s.N;

    /* the field of view */
    ctx.save(); ctx.fillStyle = alpha(PAL.soft, 0.45); ctx.beginPath(); ctx.arc(CX, CY, R + 6, 0, TAU); ctx.fill(); ctx.restore();
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.5); ctx.lineWidth = 2;
    for (const rr of [R + 6, R + 12]) { ctx.beginPath(); ctx.arc(CX, CY, rr, 0, TAU); ctx.stroke(); }
    ctx.restore();

    const mk = s.marks, first = mk[0];
    if (first) pollen(ctx, CX + first[0], CY + first[1], RG, 0.3);
    water(ctx, s, N);
    pollen(ctx, CX + s.g.x, CY + s.g.y, RG, 1);

    /* the true path, faint, then the marked positions joined by straight segments */
    if (s.path.length > 1) {
      ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.5); ctx.lineWidth = 2; ctx.lineJoin = 'round'; ctx.beginPath();
      s.path.forEach(([px, py], j) => { if (j) ctx.lineTo(CX + px, CY + py); else ctx.moveTo(CX + px, CY + py); });
      ctx.stroke(); ctx.restore();
    }
    for (let j = 1; j < mk.length; j++) {
      const [ax, ay] = mk[j - 1], [bx, by] = mk[j];
      line(ctx, CX + ax, CY + ay, CX + bx, CY + by, PAL.ink, 3);
      head(ctx, CX + ax, CY + ay, CX + bx, CY + by);
    }
    mk.forEach(([px, py]) => F.dot(ctx, CX + px, CY + py, PAL.ink, true, 5));

    hits = mk.map(([px, py], j) => ({ x: CX + px, y: CY + py, r: 8, name: j ? 'a marked position of the grain' : 'the grain’s first marked position' }));
    hits.push({ x: CX + s.g.x, y: CY + s.g.y, r: RG, name: 'the pollen grain' });
    for (let i = 0; i < N; i++) hits.push({ x: CX + s.x[i], y: CY + s.y[i], r: Math.max(6, s.r), name: 'a water molecule' });

    /* legend */
    const LX = 70;
    text(ctx, 'In view', LX, 290, PAL.muted, { size: 17 });
    const oneMol = { r: 9, x: new Float64Array([LX + 18 - CX]), y: new Float64Array([340 - CY]), tilt: new Float64Array([0]) };
    water(ctx, oneMol, 1);
    text(ctx, 'water molecule', LX + 50, 340, PAL.ink, { size: 20, base: 'middle' });
    pollen(ctx, LX + 18, 400, 20, 1);
    text(ctx, 'pollen grain', LX + 50, 400, PAL.ink, { size: 20, base: 'middle' });
    line(ctx, LX, 460, LX + 36, 460, PAL.ink, 3); F.dot(ctx, LX, 460, PAL.ink, true, 5); F.dot(ctx, LX + 36, 460, PAL.ink, true, 5);
    text(ctx, 'marked positions', LX + 50, 460, PAL.ink, { size: 20, base: 'middle' });
    line(ctx, LX, 510, LX + 36, 510, alpha(PAL.ink, 0.5), 2);
    text(ctx, 'path between marks', LX + 50, 510, PAL.ink, { size: 20, base: 'middle' });

    /* the tally of the interval that ended at the last mark */
    const [nl, nr] = s.tally[s.tally.length - 1] ?? [0, 0];
    const TX = 1060, BW = 270, full = Math.max(10, 0.13 * N);
    text(ctx, 'Hits in the last interval', TX, 290, PAL.muted, { size: 17 });
    [['from the left', nl, 340], ['from the right', nr, 430]].forEach(([name, n, y]) => {
      text(ctx, name, TX, y, PAL.ink, { size: 20 });
      ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.5); ctx.fillRect(TX, y + 16, BW * Math.min(1, n / full), 26); ctx.restore();
      line(ctx, TX, y + 12, TX, y + 46, PAL.muted, 2);
      text(ctx, String(n), TX + BW * Math.min(1, n / full) + 10, y + 29, PAL.ink, { size: 20, weight: 600, base: 'middle' });
    });

    topline(ctx, N + ' molecules strike the pollen grain, a few more on one side than the other, and push it first this way, then that.');
    const share = nl + nr ? 100 * (nl - nr) / (nl + nr) : 0;
    ro.set('\\frac{N_{\\text{left}} - N_{\\text{right}}}{N_{\\text{left}} + N_{\\text{right}}} = \\frac{' + nl + ' - ' + nr + '}{' + nl + ' + ' + nr + '} = ' + (share > 0 ? '+' : share < 0 ? '-' : '') + fmt(Math.abs(share), 0) + '\\,\\%', undefined, { form: 'b' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
