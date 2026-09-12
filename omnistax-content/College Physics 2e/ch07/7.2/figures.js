/* Figures for section 7.2 Kinetic Energy and the Work-Energy Theorem.
   Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['7.2'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, headline, hbracket, vbracket, axes, nice, block } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- helpers shared by the figures ---------- */
const TAU = 2 * Math.PI;
const commas = (s) => s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
/* a number with no trailing noise: three significant figures, grouped in thousands */
const sig3 = (x) => { const a = Math.abs(x); const s = a >= 1000 ? commas(String(Math.round(a))) : a.toPrecision(3); return (x < 0 ? '−' : '') + s; };
/* an energy stated in the unit that reads best at its size */
const joules = (j) => (Math.abs(j) >= 10000 ? sig3(j / 1000) + ' kJ' : sig3(j) + ' J');
/* the decimals a tick label needs for the step nice() chose */
const decs = (r) => { const st = (r.hi - r.lo) / r.n; return st >= 1 ? 0 : st >= 0.1 ? 1 : 2; };
/* a filled region under a straight force line, drawn in the energy hue */
function shade(ctx, x1, x2, y1, y2, yBase, color) {
  ctx.save(); ctx.fillStyle = alpha(color, 0.22); ctx.beginPath();
  ctx.moveTo(x1, yBase); ctx.lineTo(x1, y1); ctx.lineTo(x2, y2); ctx.lineTo(x2, yBase); ctx.closePath(); ctx.fill(); ctx.restore();
}
/* a roller belt running from x1 to x2 at the height y: a rail and its rollers */
function belt(ctx, x1, x2, y) {
  line(ctx, x1, y, x2, y, PAL.muted, 4);
  ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3;
  for (let x = x1 + 26; x < x2; x += 52) { ctx.beginPath(); ctx.arc(x, y + 17, 15, 0, TAU); ctx.stroke(); }
  ctx.restore();
  line(ctx, x1, y + 34, x2, y + 34, PAL.rule, 3);
}
/* a package of side w centred on (x, y), its flaps taped across the top */
function package_(ctx, x, y, w, h, color) {
  block(ctx, x, y, w, h, color);
  line(ctx, x - w / 2, y - h / 2 + 16, x + w / 2, y - h / 2 + 16, color, 3);
  line(ctx, x, y - h / 2, x, y - h / 2 + 16, color, 3);
}

/* =====================================================================
   FIGURE 7.3: the work as the area under the F cos θ against d graph.
   The idea has no time in it — the picture answers its three sliders and
   nothing travels — so it registers no cycle and carries no transport.
===================================================================== */
(function () {
  const d = sim('sim-area', 660);
  const f1 = ctl(d.controls, { label: '\\kF_{\\text{start}}', cls: 'force', min: 0, max: 200, step: 5, value: 115, unit: 'N', dec: 0, aria: 'the force component where the push begins' });
  const f2 = ctl(d.controls, { label: '\\kF_{\\text{end}}', cls: 'force', min: 0, max: 200, step: 5, value: 115, unit: 'N', dec: 0, aria: 'the force component where the push ends' });
  const dd = ctl(d.controls, { label: '\\kd', cls: 'position', min: 0.2, max: 2, step: 0.05, value: 0.8, unit: 'm', dec: 2, aria: 'the distance the force acts through' });
  const N = 8;                                   /* the strips the book's part (b) cuts the area into */
  function draw() {
    const { ctx } = begin(d.c);
    const Fa = f1.v, Fb = f2.v, D = dd.v, steady = Math.abs(Fb - Fa) < 1;
    const Fav = (Fa + Fb) / 2, W = Fav * D;
    const cF = C('force'), cE = C('energy'), cD = C('position');
    const box = { l: 180, r: 1280, t: 150, b: 520 };
    const g = axes(ctx, box, [0, 2], [0, 200], { xl: 'd (m)', xc: cD, yl: 'F cos θ (N)', yc: cF, nx: 4, ny: 4, fx: (v) => fmt(v, 1) });
    const Fat = (x) => Fa + ((Fb - Fa) * x) / D;
    /* the area under the line, whole when the force holds steady and in strips when it varies */
    if (steady) {
      shade(ctx, g.X(0), g.X(D), g.Y(Fa), g.Y(Fa), g.Y(0), cE);
      text(ctx, 'W = ' + sig3(W) + ' J', (g.X(0) + g.X(D)) / 2, (g.Y(0) + g.Y(Fa)) / 2, cE, { size: 26, weight: 600, align: 'center' });
    } else {
      for (let i = 0; i < N; i++) {
        const xa = (D * i) / N, xb = (D * (i + 1)) / N, h = Fat((xa + xb) / 2);
        shade(ctx, g.X(xa), g.X(xb), g.Y(h), g.Y(h), g.Y(0), cE);
        line(ctx, g.X(xb), g.Y(0), g.X(xb), g.Y(h), PAL.panel, 2);
      }
      const i = 4, xa = (D * i) / N, xb = (D * (i + 1)) / N, h = Fat((xa + xb) / 2);
      line(ctx, g.X(xa), g.Y(0), g.X(xa), g.Y(h), cE, 3);
      text(ctx, 'Wi', (g.X(xa) + g.X(xb)) / 2, g.Y(h) / 2 + g.Y(0) / 2, cE, { size: 20, weight: 600, align: 'center' });
      hbracket(ctx, g.X(xa), g.X(xb), g.Y(0) + 56, cD, 'di');
      text(ctx, 'W = ' + sig3(W) + ' J', g.X(D / 2), g.Y(Math.max(Fa, Fb)) - 40, cE, { size: 26, weight: 600, align: 'center' });
    }
    /* the force line itself, and the distance it acts through */
    line(ctx, g.X(0), g.Y(Fa), g.X(D), g.Y(Fb), cF, 5);
    dot(ctx, g.X(0), g.Y(Fa), cF, false, 10); dot(ctx, g.X(D), g.Y(Fb), cF, true, 10);
    line(ctx, g.X(D), g.Y(0), g.X(D), g.Y(Fb), PAL.muted, 2, [4, 8]);
    if (steady) hbracket(ctx, g.X(0), g.X(D), g.Y(0) + 92, cD, 'd = ' + fmt(D, 2) + ' m');
    else text(ctx, 'd = ' + fmt(D, 2) + ' m', g.X(D / 2), g.Y(0) + 102, cD, { weight: 600, align: 'center' });
    headline(ctx, steady
      ? 'F cos θ holds at ' + sig3(Fa) + ' N through ' + fmt(D, 2) + ' m, so the area under the line is W = ' + sig3(W) + ' J'
      : 'F cos θ ' + (Fb > Fa ? 'climbs from ' : 'falls from ') + sig3(Fa) + ' N to ' + sig3(Fb) + ' N over ' + fmt(D, 2) + ' m, and the eight strips add to W = ' + sig3(W) + ' J');
    readout(d.readout, steady
      ? `\\kW = (\\kF\\cos\\theta)\\kd = (${sig3(Fa)}\\ \\text{N})(${fmt(D, 2)}\\ \\text{m}) = ${sig3(W)}\\ \\text{J}`
      : `\\kW = \\sum_i (F\\cos\\theta)_{i(\\text{ave})}\\,d_i = ${N}\\times(${sig3(Fav)}\\ \\text{N})(${fmt(D / N, 3)}\\ \\text{m}) = ${sig3(W)}\\ \\text{J}`,
      steady
        ? 'The shaded rectangle is the work the force does, so widening it by pushing through a greater distance and raising it by pushing harder both put more energy into the system.'
        : 'The strips add to the same area as a rectangle of height ' + sig3(Fav) + ' N, so a force that climbs steadily does as much work as a steady force of its average value.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 7.4: the package on the roller belt. The net force accelerates
   it from v0 to v while the kinetic energy accumulates, so the idea has a
   time in it: the push runs once per loop and takes the scrubber.
===================================================================== */
(function () {
  const M = 30;                                  /* the book's 30.0-kg package */
  const d = sim('sim-package', 930);
  const fa = ctl(d.controls, { label: '\\kFa', cls: 'force', min: 40, max: 200, step: 5, value: 120, unit: 'N', dec: 0, onInput: reset, aria: 'the applied force' });
  const fr = ctl(d.controls, { label: '\\kff', cls: 'force', min: 0, max: 30, step: 0.5, value: 5, unit: 'N', dec: 2, onInput: reset, aria: 'the friction force' });
  const dd = ctl(d.controls, { label: '\\kd', cls: 'position', min: 0.2, max: 2, step: 0.05, value: 0.8, unit: 'm', dec: 2, onInput: reset, aria: 'the distance of the push' });
  const v0 = ctl(d.controls, { label: '\\kvo', cls: 'velocity', min: 0, max: 3, step: 0.1, value: 0.5, unit: 'm/s', dec: 2, aria: 'the initial speed' });
  /* the push: a constant net force from v0 through the distance d */
  const push = () => {
    const Fn = fa.v - fr.v, a = Fn / M, D = dd.v, u = v0.v;
    const vf = Math.sqrt(u * u + 2 * a * D), T = (vf - u) / a;
    return { Fn, a, D, u, vf, T, x: (t) => u * t + 0.5 * a * t * t, v: (t) => u + a * t };
  };
  const cy = cycle(() => push().T, 1.2);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const p = push(), t = cy.now(), done = t >= p.T - 1e-9;
    const x = Math.min(p.D, p.x(t)), v = p.v(t);
    const KE0 = 0.5 * M * p.u * p.u, KE = 0.5 * M * v * v, Wnet = p.Fn * x;
    const cF = C('force'), cE = C('energy'), cD = C('position'), cV = C('velocity');
    /* the scene: the belt, the package on it, and the four forces acting */
    const X = (m) => 340 + (m / p.D) * 760, yB = 330, px = X(x), py = yB - 36;
    belt(ctx, 200, 1240, yB);
    arrow(ctx, px - 26, yB - 4, px - 26, 214, cF, 5); text(ctx, 'N', px - 40, 208, cF, { size: 20, weight: 600, align: 'right' });
    arrow(ctx, px + 26, yB - 4, px + 26, 446, cF, 5); text(ctx, 'w', px + 40, 452, cF, { size: 20, weight: 600 });
    package_(ctx, px, py, 96, 72, PAL.ink);
    arrow(ctx, px + 48, py, px + 48 + fa.v * 1.6, py, cF, 5);
    text(ctx, 'Fapp = ' + sig3(fa.v) + ' N', px + 56 + fa.v * 0.8, py - 26, cF, { size: 20, weight: 600, align: 'center' });
    if (fr.v > 0.01) {
      arrow(ctx, px - 48, py + 26, px - 48 - fr.v * 1.6, py + 26, cF, 5);
      text(ctx, 'f = ' + sig3(fr.v) + ' N', px - 56 - fr.v * 1.6, py + 26, cF, { size: 20, weight: 600, align: 'right' });
    }
    arrow(ctx, px, py - 56, px + Math.max(24, v * 34), py - 56, cV, 5);
    text(ctx, 'v = ' + fmt(v, 2) + ' m/s', px + Math.max(24, v * 34) + 12, py - 56, cV, { size: 20, weight: 600 });
    dot(ctx, X(0), yB - 72, cD, false, 10);
    hbracket(ctx, X(0), Math.max(X(0) + 2, px), 500, cD, 'd = ' + fmt(x, 2) + ' m');
    text(ctx, 'the weight and the normal force are perpendicular to the motion, so neither does any work', 700, 552, PAL.muted, { size: 17, align: 'center' });
    /* the graph: the kinetic energy against the distance travelled */
    const KEf = KE0 + p.Fn * p.D, yr = nice(0, KEf * 1.12, 4), xr = nice(0, p.D, 4);
    const g = axes(ctx, { l: 220, r: 1240, t: 620, b: 850 }, [0, xr.hi], [0, yr.hi], { xl: 'd (m)', xc: cD, yl: 'KE (J)', yc: cE, nx: xr.n, ny: yr.n, fx: (u) => fmt(u, decs(xr)), fy: (u) => fmt(u, 0) });
    line(ctx, g.X(0), g.Y(KE0), g.X(p.D), g.Y(KEf), cE, 5);
    line(ctx, g.X(0), g.Y(KE0), g.X(xr.hi), g.Y(KE0), PAL.muted, 2, [10, 10]);
    dot(ctx, g.X(0), g.Y(KE0), cE, false, 10);
    /* the bracket waits until it is tall enough to hold its own label clear of the
       dashed line at the starting energy */
    if (x > 0.01 && g.Y(KE0) - g.Y(KE) > 28) vbracket(ctx, g.X(x) + 26, g.Y(KE0), g.Y(KE), cE, 'Wnet = ' + sig3(Wnet) + ' J', 1);
    line(ctx, g.X(x), g.Y(0), g.X(x), g.Y(KE), cD, 2, [4, 8]);
    dot(ctx, g.X(x), g.Y(KE), PAL.ink, true, 9);
    text(ctx, 'slope = Fnet = ' + sig3(p.Fn) + ' N', g.X(p.D * 0.42), g.Y(KE0 + p.Fn * p.D * 0.42) - 34, cF, { size: 18, weight: 600, align: 'center' });
    headline(ctx, t < 1e-9
      ? 'the package starts at ' + fmt(p.u, 2) + ' m/s and carries ' + sig3(KE0) + ' J before the push begins'
      : done
        ? 'd = ' + fmt(p.D, 2) + ' m · the net force has done ' + sig3(Wnet) + ' J, so the package leaves the push with ' + sig3(KE) + ' J and ' + fmt(v, 2) + ' m/s'
        : 'd = ' + fmt(x, 2) + ' m · the net force has done ' + sig3(Wnet) + ' J, so the package carries ' + sig3(KE) + ' J and moves at ' + fmt(v, 2) + ' m/s');
    readout(d.readout,
      `\\kWnet = \\tfrac{1}{2}m\\kv^2 - \\tfrac{1}{2}m\\kvo^2 = ${sig3(KE)}\\ \\text{J} - ${sig3(KE0)}\\ \\text{J} = ${sig3(Wnet)}\\ \\text{J}`,
      fr.v > 0.01
        ? 'Once the push stops, friction is the only horizontal force left, and it does negative work until the kinetic energy is gone: the package coasts a further ' + fmt(KE / fr.v, 1) + ' m before it comes to rest.'
        : 'With no friction the net force is the whole of the applied force, and once the push stops nothing removes the kinetic energy, so the package keeps its speed along the belt.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => push().T / 5), draw });
})();

/* =====================================================================
   SIM: kinetic energy against speed. Kinetic energy is a property of a
   speed rather than of a history, so nothing runs: the figure answers its
   two sliders and registers no cycle.
===================================================================== */
(function () {
  const d = sim('sim-ke', 640);
  const mm = ctl(d.controls, { label: 'm', cls: '', min: 10, max: 2000, step: 10, value: 900, unit: 'kg', dec: 0, aria: 'the mass' });
  const vv = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 0, max: 40, step: 0.2, value: 27.8, unit: 'm/s', dec: 1, aria: 'the speed' });
  function draw() {
    const { ctx } = begin(d.c);
    const m = mm.v, v = vv.v, cE = C('energy'), cV = C('velocity');
    const ke = (u) => 0.5 * m * u * u;
    const top = ke(40), kilo = top >= 10000, unit = kilo ? 'kJ' : 'J', K = kilo ? 1000 : 1;
    const yr = nice(0, top / K, 4);
    const box = { l: 200, r: 900, t: 150, b: 530 };
    const g = axes(ctx, box, [0, 40], [0, yr.hi], { xl: 'v (m/s)', xc: cV, yl: 'KE (' + unit + ')', yc: cE, nx: 4, ny: yr.n, fx: (u) => fmt(u, 0), fy: (u) => fmt(u, decs(yr)) });
    /* the parabola, with the set speed filled and half of it hollow */
    ctx.save(); ctx.strokeStyle = cE; ctx.lineWidth = 5; ctx.beginPath();
    for (let i = 0; i <= 80; i++) { const u = (40 * i) / 80; if (i) ctx.lineTo(g.X(u), g.Y(ke(u) / K)); else ctx.moveTo(g.X(u), g.Y(ke(u) / K)); }
    ctx.stroke(); ctx.restore();
    const half = v / 2;
    line(ctx, g.X(v), g.Y(0), g.X(v), g.Y(ke(v) / K), cV, 2, [4, 8]);
    line(ctx, g.X(half), g.Y(0), g.X(half), g.Y(ke(half) / K), cV, 2, [4, 8]);
    line(ctx, box.l, g.Y(ke(v) / K), g.X(v), g.Y(ke(v) / K), cE, 2, [10, 10]);
    line(ctx, box.l, g.Y(ke(half) / K), g.X(half), g.Y(ke(half) / K), cE, 2, [10, 10]);
    dot(ctx, g.X(half), g.Y(ke(half) / K), cE, false, 10);
    dot(ctx, g.X(v), g.Y(ke(v) / K), cE, true, 10);
    /* the same two energies as bars, so the factor of four can be seen at a glance */
    const bx = [1060, 1240], bw = 110, base = box.b, top2 = box.t;
    const H = (j) => base - ((j / K) / yr.hi) * (base - top2);
    [[half, 0], [v, 1]].forEach(([u, i]) => {
      const h = H(ke(u));
      ctx.save(); ctx.fillStyle = alpha(cE, i ? 0.85 : 0.35); ctx.fillRect(bx[i] - bw / 2, h, bw, base - h); ctx.restore();
      line(ctx, bx[i] - bw / 2, h, bx[i] + bw / 2, h, cE, 3);
      text(ctx, kilo ? sig3(ke(u) / 1000) + ' kJ' : sig3(ke(u)) + ' J', bx[i], h - 22, cE, { size: 20, weight: 600, align: 'center' });
      text(ctx, fmt(u, 1) + ' m/s', bx[i], base + 26, cV, { size: 18, weight: 600, align: 'center' });
    });
    line(ctx, 985, base, 1310, base, PAL.muted, 2);
    text(ctx, 'the same two energies side by side', 1148, base + 58, PAL.muted, { size: 17, align: 'center' });
    headline(ctx, v < 0.05
      ? 'a body at rest carries no kinetic energy at all, whatever its mass'
      : 'at ' + fmt(v, 1) + ' m/s a ' + sig3(m) + ' kg body carries ' + joules(ke(v)) + ', four times the ' + joules(ke(half)) + ' it carries at half that speed');
    readout(d.readout,
      `\\kKE = \\tfrac{1}{2}m\\kv^2 = \\tfrac{1}{2}(${sig3(m)}\\ \\text{kg})(${fmt(v, 1)}\\ \\text{m/s})^2 = ${kilo ? sig3(ke(v) / 1000) + '\\ \\text{kJ}' : sig3(ke(v)) + '\\ \\text{J}'}`,
      'The speed enters squared and the mass does not, so halving the speed leaves a quarter of the kinetic energy while halving the mass leaves half of it. That is why a car at 100 km/h carries four times the energy it carries at 50 km/h.');
  }
  register(d.fig, { update: () => {}, draw });
})();

};
