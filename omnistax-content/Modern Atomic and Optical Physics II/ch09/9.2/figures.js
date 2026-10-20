/* Figures for section 9.2 Interactions between a single-mode radiation field and a two level atom.
   Time is gt, so g sets only the scale. The two coherent components |αe^{±igt/2√n̄}⟩ of
   (9.76)–(9.79) are the section's referents, one group. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['9.2'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, register, cycle, begin, line, arrow, dot, text, topline, axes, curve, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);

/* =====================================================================
   FIGURE 9.3 · sim-collapse-revival · moving, 2D, three views of one clock
   Exact, from (9.65): p₂(t) = Σₙ pₙ cos²(g√(n+1)t), pₙ = e^{−n̄}n̄ⁿ/n!.
   Dial: hand n at θₙ = 2gt(√(n+1) − √(n̄+1)), the frame turning with n̄;
   their sum S = Σ pₙe^{iθₙ} has p₂ = ½ + ½Re(e^{2igt√(n̄+1)}S), so ½|S| is
   the envelope. Phase space: the field's ⟨β|ρ̂|β⟩/π, ρ̂ = |F₁⟩⟨F₁| + |F₂⟩⟨F₂|
   with F₂ = Σ cₙcos φₙ|n⟩, F₁ = iΣ cₙsin φₙ|n+1⟩, drawn at x̂ = √2 Re β,
   p̂ = √2 Im β (9.13–9.14), α real. Axes fixed: gt 0–40 (the largest
   revival, n̄ = 25, is at 31.4), p₂ 0–1; x̂, p̂ ±9 (the farthest blob,
   √50 = 7.1, plus two of its widths).
===================================================================== */
(function () {
  const d = sim('sim-collapse-revival', 890);
  const T = 40, NS = 1600, G = 64, XM = 9;
  const cy = cycle(() => T, 1.2);
  let cache = null;
  const nb = ctl(d.controls, { label: '\\knbar = |\\kalphacoh|^2', cls: '', key: 'nbar', min: 0, max: 25, step: 0.1, value: 16, unit: '', dec: 1,
    aria: 'the mean photon number of the coherent field', onInput: () => { cache = null; cy.reset(); },
    specials: [{ at: 0, label: 'vacuum' }], detents: [{ v: 16, label: 'α = 4' }] });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);

  function model(n) {
    const N = Math.max(2, Math.ceil(n + 6 * Math.sqrt(n) + 8)), p = new Float64Array(N);
    p[0] = Math.exp(-n); for (let k = 1; k < N; k++) p[k] = (p[k - 1] * n) / k;
    const rt = Float64Array.from({ length: N + 1 }, (_, k) => Math.sqrt(k + 1)), inv = rt.map((r) => 1 / r), w0 = Math.sqrt(n + 1);
    const pmax = Math.max(...p), P2 = new Float64Array(NS + 1), ENV = new Float64Array(NS + 1);
    const sum = (t) => { let re = 0, im = 0; for (let k = 0; k < N; k++) { const th = 2 * t * (rt[k] - w0); re += p[k] * Math.cos(th); im += p[k] * Math.sin(th); } return [re, im]; };
    for (let i = 0; i <= NS; i++) {
      const t = (T * i) / NS; let s = 0;
      for (let k = 0; k < N; k++) s += p[k] * Math.cos(rt[k] * t) ** 2;
      P2[i] = s; ENV[i] = Math.hypot(...sum(t));
    }
    return { n, N, p, rt, inv, pmax, P2, ENV, sum, w0 };
  }
  const at = (arr, t) => { const x = Math.max(0, Math.min(NS, (t / T) * NS)), i = Math.min(NS - 1, Math.floor(x)); return arr[i] + (arr[i + 1] - arr[i]) * (x - i); };
  const p2At = (m, t) => { let s = 0; for (let k = 0; k < m.N; k++) s += m.p[k] * Math.cos(m.rt[k] * t) ** 2; return s; };

  /* the field's distribution on a G × G grid, painted into a small canvas the stage smooths up */
  const off = document.createElement('canvas'); off.width = off.height = G;
  const octx = off.getContext('2d'), img = octx.createImageData(G, G);
  const rgbOf = (c) => { const h = /^#([0-9a-f]{6})$/i.exec(c); if (h) { const v = parseInt(h[1], 16); return [(v >> 16) & 255, (v >> 8) & 255, v & 255]; } const m = /(\d+)\D+(\d+)\D+(\d+)/.exec(c); return m ? [+m[1], +m[2], +m[3]] : [128, 128, 128]; };
  function field(m, t, col) {
    const a = new Float64Array(m.N), b = new Float64Array(m.N), [cr, cg, cb] = rgbOf(col);
    for (let k = 0; k < m.N; k++) { const c = Math.sqrt(m.p[k]), ph = m.rt[k] * t; a[k] = c * Math.cos(ph); b[k] = c * Math.sin(ph); }
    for (let j = 0; j < G; j++) for (let i = 0; i < G; i++) {
      const br = (-XM + (2 * XM * (i + 0.5)) / G) / Math.SQRT2, bi = (XM - (2 * XM * (j + 0.5)) / G) / Math.SQRT2;
      let ur = Math.exp(-(br * br + bi * bi) / 2), ui = 0, s2r = 0, s2i = 0, s1r = 0, s1i = 0;
      for (let k = 0; k < m.N; k++) {
        s2r += a[k] * ur; s2i += a[k] * ui;
        const q = m.inv[k], nr = (ur * br + ui * bi) * q, ni = (ui * br - ur * bi) * q; ur = nr; ui = ni;
        s1r += b[k] * ur; s1i += b[k] * ui;
      }
      const v = Math.min(1, s2r * s2r + s2i * s2i + s1r * s1r + s1i * s1i), o = 4 * (j * G + i);
      img.data[o] = cr; img.data[o + 1] = cg; img.data[o + 2] = cb; img.data[o + 3] = Math.round(255 * 0.92 * Math.sqrt(v));
    }
    octx.putImageData(img, 0, 0);
  }

  const PS = { l: 110, r: 490, t: 130, b: 510 }, DC = [880, 320], DR = 165, GB = { l: 150, r: 1300, t: 620, b: 800 };
  const deg = (r) => fmt((r * 180) / Math.PI, 0);
  function draw() {
    if (!cache || cache.n !== nb.v) cache = model(nb.v);
    const m = cache, n = m.n, now = cy.now(), vac = n < 0.05;
    const { ctx } = begin(d.c); hits.length = 0;
    const pop = C('population'), tm = C('time'), quad = C('quadrature'), st = C('state'), rp = F.ref('comp-plus'), rm = F.ref('comp-minus');

    /* ---------- phase space ---------- */
    const P = axes(ctx, PS, [-XM, XM], [-XM, XM], { nx: 6, ny: 6 });
    text(ctx, 'x̂', PS.r, PS.b + 58, quad, { size: 22, weight: 600, align: 'right' });
    text(ctx, 'p̂', PS.l, PS.t - 24, quad, { size: 22, weight: 600 });
    text(ctx, 'the field', (PS.l + PS.r) / 2, PS.t - 24, PAL.muted, { size: 17, align: 'center' });
    field(m, now, st);
    ctx.save(); ctx.imageSmoothingEnabled = true; ctx.globalAlpha *= F.arrival(d); ctx.drawImage(off, P.X(-XM), P.Y(XM), P.X(XM) - P.X(-XM), P.Y(-XM) - P.Y(XM)); ctx.restore();
    /* the scale of the shading */
    const LG = { x: 520, t: 170, b: 470, w: 16 };
    const grad = ctx.createLinearGradient(0, LG.b, 0, LG.t); for (let i = 0; i <= 10; i++) grad.addColorStop(i / 10, alpha(st, 0.92 * Math.sqrt(i / 10)));
    ctx.save(); ctx.fillStyle = grad; ctx.fillRect(LG.x, LG.t, LG.w, LG.b - LG.t); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 1.5; ctx.strokeRect(LG.x, LG.t, LG.w, LG.b - LG.t); ctx.restore();
    text(ctx, '$1/\\pi$', LG.x + LG.w + 8, LG.t, PAL.muted, { size: 17, tex: true });
    text(ctx, '0', LG.x + LG.w + 8, LG.b, PAL.muted, { size: 17 });
    text(ctx, '$\\langle\\beta|\\krhohat|\\beta\\rangle$', LG.x - 6, LG.t - 26, st, { size: 18, weight: 600, tex: true });
    hits.push({ x: LG.x + LG.w / 2, y: (LG.t + LG.b) / 2, r: 30, name: 'the scale of the shading, the field’s overlap ⟨β|ρ̂|β⟩ with the coherent state |β⟩, from 0 to 1/π' });
    if (!vac && n >= 1) {
      const R0 = Math.SQRT2 * Math.sqrt(n), sc = P.X(1) - P.X(0), th = now / (2 * Math.sqrt(n));
      ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.3); ctx.lineWidth = 2; ctx.setLineDash([4, 8]); ctx.beginPath(); ctx.arc(P.X(0), P.Y(0), R0 * sc, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
      [[th, rp, 'the component |αe^{+igt/2√n̄}⟩, turned +'], [-th, rm, 'the component |αe^{−igt/2√n̄}⟩, turned −']].forEach(([a, c, name]) => {
        const x = P.X(R0 * Math.cos(a)), y = P.Y(R0 * Math.sin(a));
        ctx.save(); ctx.strokeStyle = c; ctx.lineWidth = 3; ctx.setLineDash([6, 6]); ctx.beginPath(); ctx.arc(x, y, sc / Math.SQRT2, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
        hits.push({ x, y, r: 22, name: name + deg(Math.abs(a)) + '°' });
      });
    }

    /* ---------- the dial of Fock components ---------- */
    text(ctx, 'the Fock components $|n\\rangle$', DC[0], PS.t - 24, PAL.muted, { size: 17, align: 'center', tex: true });
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.3); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(DC[0], DC[1], DR, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
    line(ctx, DC[0] + DR + 6, DC[1], DC[0] + DR + 22, DC[1], alpha(PAL.ink, 0.4), 2);
    const order = Array.from({ length: m.N }, (_, k) => k).filter((k) => m.p[k] >= 0.01 * m.pmax).sort((i, j) => m.p[i] - m.p[j]);
    order.forEach((k) => {
      const th = 2 * now * (m.rt[k] - m.w0), w = m.p[k] / m.pmax, x = DC[0] + DR * Math.cos(th), y = DC[1] - DR * Math.sin(th), c = alpha(PAL.ink, 0.12 + 0.78 * w);
      line(ctx, DC[0], DC[1], x, y, c, 3); dot(ctx, x, y, c, true, 5);
      hits.push({ x, y, r: 12, name: `the Fock component |${k}⟩, weight ${fmt(m.p[k], 3)}` });
    });
    const [sr, si] = m.sum(now), sx = DC[0] + DR * sr, sy = DC[1] - DR * si, A = Math.hypot(sr, si);
    if (A > 0.02) arrow(ctx, DC[0], DC[1], sx, sy, pop, 5); else dot(ctx, DC[0], DC[1], pop, true, 6);
    hits.push({ x: sx, y: sy, r: 16, name: `the weighted sum of the hands, length ${fmt(A, 2)}: p₂ swings ±${fmt(A / 2, 2)} about ½` });
    /* legend */
    const LX = 1110; let ly = 170;
    const key = (draw, s) => { draw(ly); text(ctx, s, LX + 44, ly, PAL.ink, { size: 18, tex: true }); ly += 44; };
    key((y) => { line(ctx, LX, y, LX + 30, y, alpha(PAL.ink, 0.6), 3); dot(ctx, LX + 30, y, alpha(PAL.ink, 0.6), true, 5); }, 'a component $|n\\rangle$');
    key((y) => arrow(ctx, LX, y, LX + 32, y, pop, 5), 'their weighted sum');
    if (!vac && n >= 1) {
      [[rp, '$|\\kalphacoh e^{+i\\kg\\kt/2\\sqrt{\\knbar}}\\rangle$'], [rm, '$|\\kalphacoh e^{-i\\kg\\kt/2\\sqrt{\\knbar}}\\rangle$']].forEach(([c, s]) =>
        key((y) => { ctx.save(); ctx.strokeStyle = c; ctx.lineWidth = 3; ctx.setLineDash([5, 5]); ctx.beginPath(); ctx.arc(LX + 15, y, 12, 0, 2 * Math.PI); ctx.stroke(); ctx.restore(); }, s));
    }

    /* ---------- p₂ against gt ---------- */
    const { X, Y } = axes(ctx, GB, [0, T], [0, 1], { nx: 8, ny: 2, fy: (v) => fmt(v, 1) });
    text(ctx, '$\\kg\\kt$', GB.r, GB.b + 58, tm, { size: 20, weight: 600, align: 'right', tex: true });
    text(ctx, '$\\kptwo$', GB.l - 14, GB.t - 30, pop, { size: 22, weight: 600, align: 'right', tex: true });
    if (!vac) {
      ctx.save(); ctx.setLineDash([10, 10]);
      curve(ctx, (t) => 0.5 + at(m.ENV, t) / 2, 0, T, X, Y, alpha(pop, 0.55), 2, 400);
      curve(ctx, (t) => 0.5 - at(m.ENV, t) / 2, 0, T, X, Y, alpha(pop, 0.55), 2, 400);
      ctx.restore();
    }
    ctx.save(); ctx.globalAlpha *= 0.22; curve(ctx, (t) => at(m.P2, t), 0, T, X, Y, pop, 2.5, NS); ctx.restore();
    curve(ctx, (t) => at(m.P2, t), 0, now, X, Y, pop, 3.5, Math.max(2, Math.ceil((NS * now) / T)));
    const p2 = p2At(m, now);
    line(ctx, X(now), GB.t, X(now), GB.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    dot(ctx, X(now), Y(p2), pop);
    hits.push({ x: X(now), y: Y(p2), r: 18, name: `the probability p₂ that the atom is excited, ${fmt(p2, 2)} at gt = ${fmt(now, 1)}` });
    const tR = 2 * Math.PI * Math.sqrt(n);
    if (!vac && n >= 1) {
      const mark = (tv, s, align, name) => {
        const x = X(tv); arrow(ctx, x, GB.t - 40, x, GB.t - 6, tm, 3);
        text(ctx, s, x + (align === 'left' ? -6 : 6), GB.t - 54, tm, { size: 20, weight: 600, align: align === 'left' ? 'right' : 'left', tex: true, bg: PAL.panel });
        hits.push({ x, y: GB.t - 24, r: 18, name });
      };
      mark(1, '$\\ktaucollapse$', 'right', 'the collapse time, about 1/g');
      if (tR <= T) mark(tR, '$\\ktaurevival$', tR > 30 ? 'left' : 'right', `the revival time, about 2π√n̄/g = ${fmt(tR, 1)}/g`);
    }

    /* ---------- words ---------- */
    const th = (now / (2 * Math.sqrt(Math.max(n, 1e-9)))) % (2 * Math.PI), td = (th * 180) / Math.PI;
    const g = fmt(now, 1);
    topline(ctx, vac ? `In the empty cavity one photon goes back and forth: at $\\kg\\kt$ = ${g}, $\\kptwo = \\cos^2 \\kg\\kt$ = ${fmt(p2, 2)}, and the swing never fades.`
      : Math.abs(td - 180) < 25 ? `At $\\kg\\kt$ = ${g} the two field components meet behind the origin, and $\\kptwo$ swings ±${fmt(A / 2, 2)} about ½ again.`
      : Math.abs(td - 90) < 8 ? `At $\\kg\\kt$ = ${g} the field components stand at $\\pm i\\kalphacoh$, a Schrödinger cat, and $\\kptwo$ swings ±${fmt(A / 2, 2)} about ½.`
      : `At $\\kg\\kt$ = ${g} the two field components have turned ±${fmt(td, 0)}°, and $\\kptwo$ swings ±${fmt(A / 2, 2)} about ½.`);
    ro.set(`\\kptwo = \\sum_n e^{-\\knbar}\\frac{\\knbar^{\\,n}}{n!}\\cos^2\\left(\\kg\\sqrt{n+1}\\,\\kt\\right) = ${fmt(p2, 2)}`,
      vac ? 'With $\\knbar = 0$ only $n = 0$ is left: $\\kptwo = \\cos^2 \\kg\\kt$, the vacuum Rabi oscillation of (9.62).'
        : `$\\kg\\ktauRabi \\sim 1/\\sqrt{\\knbar} = ${fmt(1 / Math.sqrt(n), 2)}$, $\\kg\\ktaucollapse \\sim 1$ and $\\kg\\ktaurevival \\sim 2\\pi\\sqrt{\\knbar} = ${fmt(tR, 1)}$.`, { form: 'p2' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 16), draw });
})();

};
