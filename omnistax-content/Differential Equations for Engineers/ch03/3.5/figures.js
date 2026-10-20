/* Figures for section 3.5 Two-dimensional systems and their vector fields. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.5'] = function (root, F) {
const { C, PAL, alpha, ctl, select, begin, axes, arrow, dot, line, text, headline, register, readout, hover, cycle, tween, presence, labeller, ease, REDUCED, space } = F;
const sim = (id, H) => F.sim(root, id, H);
const clamp01 = (k) => Math.max(0, Math.min(1, k));
const minus = (s) => s.replace(/-/g, '\u2212');

/* A number for the readout and the headline: rounded to `dec` places with trailing zeros dropped, and whether
   that rounding is exact (so the figure writes = where it is and ≈ where it is not). */
function num(v, dec = 2) {
  const r = Math.round(v * 10 ** dec) / 10 ** dec, exact = Math.abs(v - r) < 1e-9 * Math.max(1, Math.abs(v));
  let s = r.toFixed(dec); if (s.includes('.')) s = s.replace(/0+$/, '').replace(/\.$/, '');
  if (/^-0?$/.test(s) || s === '-0') s = '0';
  return { s, exact };
}

/* The plane system [x y]′ = P[x y] with P = [a b; c d]. Its eigenvalues are the roots of λ² − (a + d)λ + (ad − bc) = 0:
   tr = a + d, det = ad − bc, disc = (a − d)² + 4bc = tr² − 4 det. kind is the row of Table 3.1 the matrix falls in, or the
   two cases the table leaves out: a repeated eigenvalue (the book: still a source or a sink) and a singular P. */
function analyse(a, b, c, d) {
  const tr = a + d, det = a * d - b * c, disc = (a - d) * (a - d) + 4 * b * c;
  const eps = 1e-9 * Math.max(1, a * a + b * b + c * c + d * d);
  const o = { a, b, c, d, tr, det, disc, eps };
  if (Math.abs(det) < eps) {
    o.kind = 'singular'; o.real = true; o.rep = Math.abs(disc) < eps;
    o.l1 = Math.min(0, tr); o.l2 = Math.max(0, tr); if (Math.abs(tr) < eps) { o.l1 = 0; o.l2 = 0; o.rep = true; }
    return o;
  }
  if (Math.abs(disc) < eps) { o.real = true; o.rep = true; o.l1 = o.l2 = tr / 2; o.kind = tr > 0 ? 'source' : 'sink'; return o; }
  if (disc > 0) {
    const s = Math.sqrt(disc); o.real = true; o.l1 = (tr - s) / 2; o.l2 = (tr + s) / 2;
    o.kind = o.l1 > 0 ? 'source' : o.l2 < 0 ? 'sink' : 'saddle'; return o;
  }
  o.real = false; o.re = tr / 2; o.im = Math.sqrt(-disc) / 2;
  o.kind = Math.abs(tr) < eps ? 'center' : tr > 0 ? 'spiral source' : 'spiral sink'; return o;
}
/* An eigenvector of P for a real λ, scaled as the book writes them: first component 1 where it has one, else [0; 1];
   cut back to fit the window where that runs past 3. */
function eigvec(S, lam) {
  const { a, b, c, d, eps } = S;
  let v = Math.abs(b) > eps ? [b, lam - a] : Math.abs(c) > eps ? [lam - d, c] : Math.abs(a - lam) < Math.abs(d - lam) ? [1, 0] : [0, 1];
  v = Math.abs(v[0]) > 1e-9 ? [1, v[1] / v[0]] : [0, 1];
  const big = Math.max(Math.abs(v[0]), Math.abs(v[1])); if (big > 3) v = [v[0] * 3 / big, v[1] * 3 / big];
  return v;
}
/* e^{tP} in closed form: with m = tr/2 and N = P − mI, N² = qI where q = disc/4, so e^{tP} = e^{mt}(C(t)I + S(t)N). */
function expm(S, t) {
  const { a, b, c, d } = S, m = (a + d) / 2, q = S.disc / 4;
  let Cc, Sn;
  if (q > 1e-12) { const r = Math.sqrt(q); Cc = Math.cosh(r * t); Sn = Math.sinh(r * t) / r; }
  else if (q < -1e-12) { const r = Math.sqrt(-q); Cc = Math.cos(r * t); Sn = Math.sin(r * t) / r; }
  else { Cc = 1; Sn = t; }
  const e = Math.exp(m * t);
  return [e * (Cc + Sn * (a - m)), e * Sn * b, e * Sn * c, e * (Cc + Sn * (d - m))];
}

/* Figures 3.4–3.11: the vector field of [x y]′ = P[x y] on the book's window [−3, 3]², drawn at one scale both ways;
   the eigenvector lines with the eigenvectors in the real cases (Figures 3.4 and 3.5); a few solution curves through
   fixed seeds traced both ways in time (exactly, x⃗(t) = e^{tP}x⃗₀), with the state riding each one forward as the
   clock runs (moving tier: the dots are kinematic, the field's arrows symbolic); beside it, the eigenvalues in the
   complex plane, Re and Im −4 to 4 at one scale (a farther eigenvalue is pinned at the edge). The choice loads the
   book's matrix for each row of Table 3.1 (and Example 3.1.2's closed tanks with r/V = 1 for a singular P) and the
   entries glide there, so the picture morphs through every matrix between; the entries a, b, c, d run −4 to 4 with
   dashed circles where P turns singular, where its eigenvalue repeats and where it becomes a center. The flow is
   steady and endless: one model second takes 1/RATE real seconds. */
(function () {
  const d = sim('sim-portrait', 860);
  const BOOK = {
    source: [1, 1, 0, 2], sink: [-1, -1, 0, -2], saddle: [1, 1, 0, -2], center: [0, 1, -4, 0],
    'spiral source': [1, 1, -4, 1], 'spiral sink': [-1, -1, 4, -1], singular: [-1, 1, 1, -1],
  };
  const CASE = { source: 'Case 1', sink: 'Case 2', saddle: 'Case 3', center: 'Case 4', 'spiral source': 'Case 5', 'spiral sink': 'Case 6', singular: 'Example 3.1.2 with $r/V = 1$' };
  const KINDS = Object.keys(BOOK);
  const RATE = 0.6, TCAP = 12, LIM = 4;
  const BOX = { l: 96, r: 776, t: 112, b: 792 }, PLANE = { l: 906, r: 1316, t: 250, b: 660 };
  /* seeds of the solution curves: eight points, s and −s at one radius, so the picture keeps the symmetry x⃗ → −x⃗ */
  const SEEDS = Array.from({ length: 8 }, (_, k) => { const th = (k + 0.5) * Math.PI / 4, r = k % 2 ? 1.5 : 2.7; return [r * Math.cos(th), r * Math.sin(th)]; });

  let morph = null;   /* {from, to} while the entries glide to a book matrix */
  const glide = tween(d, 1);
  const stop = () => { if (morph) { morph = null; glide.set(1); } };
  const go = (v) => { morph = { from: [A.v, B.v, Cs.v, D.v], to: BOOK[v] }; glide.set(0); glide.to(1, 1500); };
  /* the behavior: seven states, so a dropdown (a row would wrap); it always names the behavior of the entries as they
     stand, and picking one glides them to the book's matrix for it */
  const pick = select(d.controls, {
    label: '', key: 'case', value: 'source', aria: 'the behavior, each with the book’s matrix for it',
    options: KINDS.map((k) => ({ value: k, label: k })), onInput: go,
  });
  const ent = () => [A.v, B.v, Cs.v, D.v];
  const live = (f) => () => { const [a, b, c, dd] = ent(); const x = f(a, b, c, dd); return x === null || !Number.isFinite(x) || Math.abs(x) > LIM ? null : x; };
  const sq = (x) => (x >= 0 ? Math.sqrt(x) : NaN);
  const SPEC = {
    a: [{ at: live((a, b, c, dd) => (dd ? (b * c) / dd : null)), label: 'singular' },
      { at: live((a, b, c, dd) => dd + 2 * sq(-b * c)), label: 'repeated' }, { at: live((a, b, c, dd) => dd - 2 * sq(-b * c)), label: 'repeated' },
      { at: live((a, b, c, dd) => (b * c < -dd * dd ? -dd : null)), label: 'center' }],
    b: [{ at: live((a, b, c, dd) => (c ? (a * dd) / c : null)), label: 'singular' }, { at: live((a, b, c, dd) => (c ? -((a - dd) ** 2) / (4 * c) : null)), label: 'repeated' }],
    c: [{ at: live((a, b, c, dd) => (b ? (a * dd) / b : null)), label: 'singular' }, { at: live((a, b, c, dd) => (b ? -((a - dd) ** 2) / (4 * b) : null)), label: 'repeated' }],
    d: [{ at: live((a, b, c, dd) => (a ? (b * c) / a : null)), label: 'singular' },
      { at: live((a, b, c, dd) => a + 2 * sq(-b * c)), label: 'repeated' }, { at: live((a, b, c, dd) => a - 2 * sq(-b * c)), label: 'repeated' },
      { at: live((a, b, c, dd) => (b * c < -a * a ? -a : null)), label: 'center' }],
  };
  const entry = (key, value) => ctl(d.controls, { label: key, cls: '', key, min: -LIM, max: LIM, step: 0.1, value, unit: '', dec: 1, aria: `the entry ${key} of P`, specials: SPEC[key], onInput: stop });
  const A = entry('a', 1), B = entry('b', 1), Cs = entry('c', 0), D = entry('d', 2);
  const ro = readout(d);
  const fade = presence(d);
  const open = tween(d, 0);
  let opened = false, ax = null, pl = null, hits = [];
  hover(d.stage, () => hits);
  const cy = cycle(() => Infinity, 0);

  /* one solution curve through s, traced back and forward in equal steps h of model time until it leaves the window,
     nears the origin, turns 5π about it or runs TCAP; closed (one period) for a center */
  function solution(S, s, rho) {
    if (!S.real && Math.abs(S.re) < S.eps) {
      const T = (2 * Math.PI) / S.im, n = 240, h = T / n, M = expm(S, h), pts = [s.slice()];
      for (let i = 0; i < n; i++) { const [x, y] = pts[i]; pts.push([M[0] * x + M[1] * y, M[2] * x + M[3] * y]); }
      return { pts, h, span: T, closed: true, tail: 0.03 / Math.max(1, rho) };
    }
    const h = Math.min(0.015 / rho, TCAP / 1200);
    const run = (dir) => {
      const M = expm(S, dir * h), out = [];
      let [x, y] = s, ang = 0;
      for (let i = 0; i < 2400; i++) {
        const nx = M[0] * x + M[1] * y, ny = M[2] * x + M[3] * y;
        ang += Math.abs(Math.atan2(x * ny - y * nx, x * nx + y * ny));
        x = nx; y = ny; out.push([x, y]);
        if (Math.max(Math.abs(x), Math.abs(y)) > 3.4 || Math.hypot(x, y) < 0.04 || Math.hypot(S.a * x + S.b * y, S.c * x + S.d * y) < 0.01 || (i + 1) * h > TCAP || ang > 5 * Math.PI) break;
      }
      return out;
    };
    const back = run(-1).reverse(), fwd = run(1), pts = [...back, s.slice(), ...fwd];
    return { pts, h, span: (pts.length - 1) * h, closed: false, tail: 0.03 / Math.max(1, rho) };
  }
  let cacheKey = '', cache = null;
  function picture(S) {
    const key = [S.a, S.b, S.c, S.d].join(',');
    if (key === cacheKey) return cache;
    const rho = Math.max(0.25, S.real ? Math.max(Math.abs(S.l1), Math.abs(S.l2)) : Math.hypot(S.re, S.im));
    const curves = SEEDS.map((s) => solution(S, s, rho));
    /* the eigenvector lines: each half a straight solution, out of the origin for λ > 0 and into it for λ < 0; for
       λ = 0 a line of critical points */
    const eig = [];
    if (S.real) {
      const lams = S.rep ? [S.l1] : [S.l1, S.l2];
      lams.forEach((lam) => {
        const v = eigvec(S, lam), u = Math.hypot(v[0], v[1]);
        const still = Math.abs(lam) < S.eps;
        eig.push({ lam, v, still, halves: still ? [] : [1, -1].map((sg) => solution(S, [sg * 2.2 * v[0] / u, sg * 2.2 * v[1] / u], rho)) });
      });
      if (S.rep && Math.abs(S.b) < S.eps && Math.abs(S.c) < S.eps && Math.abs(S.l1) > S.eps) {
        /* P = λI: every vector is an eigenvector; the two axes stand for them */
        eig.length = 0; [[1, 0], [0, 1]].forEach((v) => eig.push({ lam: S.l1, v, still: false, halves: [1, -1].map((sg) => solution(S, [sg * 2.2 * v[0], sg * 2.2 * v[1]], rho)) }));
      }
    }
    cacheKey = key; cache = { curves, eig, rho }; return cache;
  }
  /* the point of a curve at model time u along it, by its equal steps */
  function at(cv, u) {
    const f = Math.max(0, Math.min(cv.pts.length - 1, u / cv.h)), i = Math.min(cv.pts.length - 2, Math.floor(f)), k = f - i;
    const p = cv.pts[i], q = cv.pts[i + 1] ?? p;
    return [p[0] + (q[0] - p[0]) * k, p[1] + (q[1] - p[1]) * k];
  }
  const clipBox = (ctx) => { ctx.beginPath(); ctx.rect(BOX.l, BOX.t, BOX.r - BOX.l, BOX.b - BOX.t); ctx.clip(); };
  function stroke(ctx, pts, color, w, upto = 1) {
    const n = Math.max(2, Math.round(pts.length * upto)); if (pts.length < 2 || upto <= 0) return;
    ctx.save(); clipBox(ctx); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.lineCap = 'round'; ctx.beginPath();
    for (let i = 0; i < Math.min(n, pts.length); i++) { const X = ax.X(pts[i][0]), Y = ax.Y(Math.max(-9, Math.min(9, pts[i][1]))); if (i) ctx.lineTo(X, Y); else ctx.moveTo(X, Y); }
    ctx.stroke(); ctx.restore();
  }
  /* the state riding a curve: a dot with a short fading tail behind it */
  function rider(ctx, cv, u, color, a) {
    if (!(a > 0.02)) return null;
    const p = at(cv, u), X = ax.X(p[0]), Y = ax.Y(p[1]);
    if (X < BOX.l - 4 || X > BOX.r + 4 || Y < BOX.t - 4 || Y > BOX.b + 4) return null;
    ctx.save(); clipBox(ctx);
    let prev = [X, Y];
    for (let j = 1; j <= 6; j++) {
      const back = cv.closed ? (u - cv.tail * j + cv.span) % cv.span : Math.max(0, u - cv.tail * j), q = at(cv, back), Q = [ax.X(q[0]), ax.Y(q[1])];
      line(ctx, prev[0], prev[1], Q[0], Q[1], alpha(color, a * (1 - j / 7) * 0.8), 6 - 0.6 * j); prev = Q;
    }
    ctx.globalAlpha *= a; dot(ctx, X, Y, PAL.panel, true, 10); dot(ctx, X, Y, color, true, 6.5);
    ctx.restore();
    return { x: X, y: Y };
  }
  const EIG_TXT = (z) => (z.exact ? '=' : '\\approx');

  function draw() {
    if (!opened) { opened = true; open.to(1, 3600, ease.linear); }
    const k0 = open.v, grow = clamp01(k0 / 0.22), lines = clamp01((k0 - 0.18) / 0.22), field = clamp01((k0 - 0.38) / 0.22), sols = clamp01((k0 - 0.52) / 0.3), riders = clamp01((k0 - 0.8) / 0.2);
    /* the entries: the reader's, or on their way to a book matrix in steps of 0.01 */
    let E = ent();
    if (morph) {
      const g = glide.v;
      E = morph.from.map((x, i) => Math.round((x + (morph.to[i] - x) * g) * 100) / 100);
      [A, B, Cs, D].forEach((s, i) => { s.set(E[i]); s.refresh(); });
      if (g >= 1) { E = morph.to.slice(); morph = null; }
    }
    const [a, b, c, dd] = E, S = analyse(a, b, c, dd);
    if (!morph && pick.value !== S.kind) pick.set(S.kind);
    const { ctx, H } = begin(d.c), LW = 1400;
    const vf = C('vector-field'), cv = C('curve'), vc = C('vector'), ec = C('eigenvalue'), pc = C('point');
    hits = [];
    ax = axes(ctx, BOX, [-3, 3], [-3, 3], { xl: 'x', yl: 'y', nx: 6, ny: 6 });
    /* the vector field P[x y] */
    if (field > 0) F.faded(ctx, field, [0, 0], () => space.field2(ctx, ax, ([x, y]) => [a * x + b * y, c * x + dd * y], alpha(vf, 0.7), { n: [13, 13], w: 2.5 }));
    for (let i = -3; i <= 3; i += 1) for (let j = -3; j <= 3; j += 1) {
      if (!(i % 2 === 0 || j % 2 === 0)) continue;
      const u = a * i + b * j, w = c * i + dd * j;
      hits.push({ x: ax.X(i), y: ax.Y(j), r: 12, name: minus(`the vector field at (${i}, ${j}): P[${i}; ${j}] = (${num(u).s}, ${num(w).s})`) });
    }
    const pic = picture(S);
    /* the eigenvector lines (Figure 3.5): faded in and out as the eigenvalues turn real or complex */
    if (S.real) { fade.show('eig', true); picture.last = { S, pic }; } else fade.show('eig', false);
    const ea = fade.a('eig');
    const last = picture.last;
    const lab = labeller(ctx, H, { headline: 2 });
    lab.block(0, BOX.b + 4, LW, H); lab.block(0, BOX.t - 40, BOX.l - 4, BOX.b + 4); lab.block(PLANE.l - 70, PLANE.t - 50, LW, PLANE.b + 80);
    if (last && ea > 0.01 && lines > 0) {
      const LS = S.real ? S : last.S, LP = S.real ? pic : last.pic;
      LP.eig.forEach((e) => {
        const u = Math.hypot(e.v[0], e.v[1]), R = 4.5 / u, p = [e.v[0] * R, e.v[1] * R];
        ctx.save(); ctx.globalAlpha *= ea;
        if (e.still) {
          stroke(ctx, [[-p[0] * lines, -p[1] * lines], [p[0] * lines, p[1] * lines]], pc, 4);
          hits.push({ x: ax.X(1.6 * e.v[0] / u), y: ax.Y(1.6 * e.v[1] / u), r: 12, name: 'the line of the eigenvector for λ = 0: Px⃗ = 0 on it, so every point of it is a critical point' });
        } else {
          e.halves.forEach((h) => {
            /* each half drawn out from the origin, with an arrowhead the way its solution runs (Figure 3.5) */
            const out = e.lam > 0, ordered = out ? h.pts : h.pts.slice().reverse();
            stroke(ctx, ordered, cv, 4, lines);
            let m = 0; ordered.forEach((q, j) => { if (Math.abs(Math.hypot(q[0], q[1]) - 1.7) < Math.abs(Math.hypot(ordered[m][0], ordered[m][1]) - 1.7)) m = j; });
            const q = ordered[m], r = Math.hypot(q[0], q[1]);
            if (lines >= 1 && r > 1.2 && r < 2.2) {
              const ux = q[0] / r, uy = q[1] / r, s = out ? 1 : -1, X0 = ax.X(q[0]), Y0 = ax.Y(q[1]);
              const dx = (ax.X(ux) - ax.X(0)) / 100, dy = (ax.Y(uy) - ax.Y(0)) / 100, Ld = Math.hypot(dx, dy) || 1;
              arrow(ctx, X0 - (s * 13 * dx) / Ld, Y0 - (s * 13 * dy) / Ld, X0 + (s * 13 * dx) / Ld, Y0 + (s * 13 * dy) / Ld, cv, 4);
            }
            hits.push({ x: ax.X(q[0]), y: ax.Y(q[1]), r: 12, name: minus(`a straight solution on the line of the eigenvector for λ ${num(e.lam).exact ? '=' : '≈'} ${num(e.lam).s}: it moves ${out ? 'away from' : 'toward'} the origin`) });
          });
        }
        ctx.restore();
      });
    }
    /* the solution curves through the seeds */
    if (sols > 0) pic.curves.forEach((k, i) => {
      if (k.pts.length < 3) return;
      stroke(ctx, k.pts, alpha(cv, 0.85), 3.5, sols);
      const q = k.pts[Math.floor(k.pts.length * 0.5)];
      if (q && Math.abs(q[0]) < 3 && Math.abs(q[1]) < 3) hits.push({ x: ax.X(q[0]), y: ax.Y(q[1]), r: 12, name: minus(`a solution curve (trajectory), through (${num(SEEDS[i][0], 1).s}, ${num(SEEDS[i][1], 1).s})`) });
    });
    /* the eigenvectors themselves (Figure 3.4), grown from the origin */
    if (last && ea > 0.01 && grow > 0) {
      const LP = S.real ? pic : last.pic;
      ctx.save(); ctx.globalAlpha *= ea;
      LP.eig.forEach((e) => {
        const x2 = ax.X(e.v[0] * grow), y2 = ax.Y(e.v[1] * grow);
        arrow(ctx, ax.X(0), ax.Y(0), x2, y2, vc, 5);
        const L = Math.hypot(x2 - ax.X(0), y2 - ax.Y(0)) || 1;
        const z = num(e.lam), rel = z.exact ? '=' : '≈', vv = e.v.map((x) => num(x)), vrel = vv.every((x) => x.exact) ? '=' : '≈';
        if (S.real && grow >= 1 && L > 8) lab.beside({ x1: ax.X(0), y1: ax.Y(0), x2, y2 }, 'left', `λ ${rel} ${minus(z.s)}`, ec, 20, { offset: 0.85, gap: 20 });
        hits.push({ x: x2, y: y2, r: 14, name: minus(`the eigenvector v⃗ ${vrel} [${vv[0].s}; ${vv[1].s}] for the eigenvalue λ ${rel} ${z.s}`) });
      });
      ctx.restore();
    }
    /* the state, riding each curve forward in time */
    if (riders > 0) {
      const T = cy.now(), tm = (Number.isFinite(T) ? T : 0) * RATE;
      const ride = (k, K, a0) => {
        if (k.span < 1e-6 || k.pts.length < 3) return;
        for (let j = 0; j < K; j++) {
          const u = (((tm + (j * k.span) / K) % k.span) + k.span) % k.span, edge = Math.min(0.5, k.span * 0.12);
          const fa = k.closed ? 1 : clamp01(Math.min(u / edge, (k.span - u) / edge));
          const p = rider(ctx, k, u, cv, riders * fa * a0);
          if (p) hits.push({ x: p.x, y: p.y, r: 12, name: 'the state (x(t), y(t)), moving along its solution curve as t grows' });
        }
      };
      pic.curves.forEach((k) => ride(k, k.closed ? 3 : 2, 1));
      if (S.real) pic.eig.forEach((e) => e.halves.forEach((h) => ride(h, 1, ea)));
    }
    /* the critical point at the origin: hollow where solutions leave it, filled where they stay near it */
    const unstable = S.kind === 'source' || S.kind === 'saddle' || S.kind === 'spiral source';
    if (S.kind !== 'singular') dot(ctx, ax.X(0), ax.Y(0), pc, !unstable, 9);
    hits.push({ x: ax.X(0), y: ax.Y(0), r: 14, name: S.kind === 'singular' ? 'the origin, one of the critical points' : `the critical point at the origin, the only point where P[x; y] = 0` });

    /* the eigenvalue plane */
    pl = axes(ctx, PLANE, [-LIM, LIM], [-LIM, LIM], { xl: 'Re λ', yl: 'Im λ', xc: ec, yc: ec, nx: 8, ny: 8 });
    line(ctx, pl.X(0), PLANE.t, pl.X(0), PLANE.b, alpha(PAL.ink, 0.45), 2.5);
    const ga = clamp01(grow * 1.5);
    const pts = S.real ? (S.rep ? [[S.l1, 0]] : [[S.l1, 0], [S.l2, 0]]) : [[S.re, S.im], [S.re, -S.im]];
    ctx.save(); ctx.globalAlpha *= ga;
    pts.forEach(([re, im], i) => {
      const inside = Math.abs(re) <= LIM && Math.abs(im) <= LIM;
      const p = F.pinned(ctx, PLANE, pl.X, pl.Y, re, im, ec);
      let name;
      if (S.real) name = S.rep ? `${num(re).s}, repeated` : num(re).s;
      else { const r0 = num(re), i0 = num(Math.abs(im)), base = Math.abs(re) < S.eps ? '' : r0.s; name = `${base}${base ? (im > 0 ? ' + ' : ' − ') : (im > 0 ? '' : '−')}${i0.s === '1' ? '' : i0.s}i`; }
      name = name.replace(/-/g, '−');
      const above = S.real ? (pts.length === 2 && i === 0 && Math.abs(S.l1 - S.l2) < 1.6 ? 1 : -1) : (im > 0 ? -1 : 1);
      const ly = Math.max(PLANE.t + 14, Math.min(PLANE.b - 14, p.y + above * 30));
      text(ctx, name, Math.max(PLANE.l + 40, Math.min(PLANE.r - 40, p.x)), ly, ec, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
      const ex = S.real ? num(re).exact : num(re).exact && num(Math.abs(im)).exact;
      hits.push({ x: p.x, y: p.y, r: 16, name: `the eigenvalue λ ${ex ? '=' : '≈'} ${name}${inside ? '' : ' (off the plane, pinned at its edge)'}` });
    });
    ctx.restore();

    /* the headline names the case and the row of Table 3.1 */
    const book = KINDS.find((k) => BOOK[k].every((x, i) => Math.abs(x - E[i]) < 1e-9));
    const pre = book ? `${CASE[book]}: ` : '';
    const L1 = num(S.l1 ?? 0), L2 = num(S.l2 ?? 0), RE = num(S.re ?? 0), IM = num(S.im ?? 0);
    const lam = (z) => `$\\klambda ${EIG_TXT(z)} ${z.s}$`;
    const imag = (z) => (z.s === '1' ? 'i' : `${z.s}i`);
    let head;
    if (S.kind === 'singular') {
      head = Math.abs(a) + Math.abs(b) + Math.abs(c) + Math.abs(dd) < S.eps ? `${pre}$\\kP = 0$: every point of the plane is a critical point.`
        : S.rep ? `${pre}$\\klambda = 0$, repeated: $\\kP$ is singular, and every point on the line of its eigenvector is a critical point.`
          : `${pre}${lam(L1.s === '0' ? L2 : L1)} and $\\klambda = 0$: $\\kP$ is singular, and the line of the eigenvector for $0$ is all critical points.`;
    } else if (S.rep) head = `${pre}${lam(L1)}, repeated: where the ${S.kind} meets the spiral ${S.kind}, and still a ${S.kind}.`;
    else if (S.real) {
      const row = { source: 'real and both positive: a source', sink: 'real and both negative: a sink', saddle: 'real and opposite signs: a saddle' }[S.kind];
      head = `${pre}${lam(L1)} and ${lam(L2)}, ${row}.`;
    } else if (S.kind === 'center') head = `${pre}$\\klambda ${EIG_TXT(IM)} \\pm ${imag(IM)}$, purely imaginary: a center, ellipses.`;
    else head = `${pre}$\\klambda ${EIG_TXT(RE) === '=' && IM.exact ? '=' : '\\approx'} ${RE.s} \\pm ${imag(IM)}$, complex with ${S.tr > 0 ? 'positive' : 'negative'} real part: a ${S.kind}.`;
    const nl = headline(ctx, head.replace(/(\d)-/g, '$1−'));
    lab.flush();

    /* the readout: P with its numbers, its characteristic equation and its roots */
    const ns = E.map((x) => num(x)), pe = ns.every((z) => z.exact);
    const P = `\\begin{bmatrix} ${ns[0].s} & ${ns[1].s} \\\\ ${ns[2].s} & ${ns[3].s} \\end{bmatrix}`;
    const tr = num(S.tr, 4), de = num(S.det, 4);
    const co = (z) => { const t = z.s.replace('-', ''); return t === '1' ? '' : t; };
    const lin = Math.abs(S.tr) < S.eps ? '' : (S.tr > 0 ? ` - ${co(tr)}\\klambda` : ` + ${co(tr)}\\klambda`);
    const cst = Math.abs(S.det) < S.eps ? '' : (S.det > 0 ? ` + ${de.s}` : ` - ${de.s.replace('-', '')}`);
    let roots;
    if (S.real) roots = S.rep ? `\\klambda ${EIG_TXT(L1)} ${L1.s},\\ ${L1.s}` : `\\klambda ${L1.exact && L2.exact ? '=' : '\\approx'} ${L1.s},\\ ${L2.s}`;
    else roots = `\\klambda ${RE.exact && IM.exact ? '=' : '\\approx'} ${Math.abs(S.re) < S.eps ? '' : RE.s} \\pm ${imag(IM)}`;
    ro.set(`\\kP ${pe ? '=' : '\\approx'} ${P},\\quad \\det(\\kP - \\klambda\\kI) = \\klambda^2${lin}${cst} = 0,\\quad ${roots}`, undefined, { form: S.real ? (S.rep ? 'rep' : 'real') : 'complex' });
    void nl;
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
