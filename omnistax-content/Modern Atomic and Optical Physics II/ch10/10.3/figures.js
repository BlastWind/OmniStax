/* Figures for section 10.3 Quantum state engineering.
   The book draws none. One Sim walks the procedure of 10.3.1 backwards, as the book does,
   from a target |ψ⟩ cut at N = 4 down to |g⟩|0⟩. The levels |g⟩, |e⟩ and the two tunings
   (bare resonance, red sideband) are the section's referents, one group, with 10.2's ids. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['10.3'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, choice, register, begin, line, arrow, text, topline, axes, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);

/* =====================================================================
   SIM · sim-state-prep · story slider (one stop per pulse), 2D, graph beside
   Amplitudes on |g⟩|n⟩, |e⟩|n⟩, n = 0…4. A red-sideband pulse of area θ on
   its top pair |g⟩|m⟩ ↔ |e⟩|m−1⟩ turns every pair n by θ√(n/m) (coupling
   ηΩ√n); a bare-resonance pulse turns every |g⟩|n⟩ ↔ |e⟩|n⟩ by θ. Each pair:
   a' = cos θ a − i sin θ e^{−iφ} b, b' = cos θ b − i sin θ e^{iφ} a, so full
   transfer is θ = π/2 (the π pulse in the book's convention of 2.1). Fitted
   pulses take θ, φ that empty the pair's target amplitude (Law and Eberly);
   "π pulses" fix the red pulse at θ = π/2, φ = 0. Area axis fixed 0…π/2,
   the largest area either mode reaches.
===================================================================== */
(function () {
  const d = sim('sim-state-prep', 640);
  const N = 4, PI = Math.PI;
  const fact = (n) => (n < 2 ? 1 : n * fact(n - 1));
  const norm = (c) => { const s = Math.sqrt(c.reduce((a, x) => a + x * x, 0)); return c.map((x) => x / s); };
  const coh = (a) => Array.from({ length: N + 1 }, (_, n) => a ** n / Math.sqrt(fact(n)));
  const TARGETS = {
    fock: [0, 0, 0, 0, 1],
    coherent: norm(coh(1)),
    cat: norm(coh(1.2).map((x, n) => (n % 2 ? 0 : x))),
    squeezed: norm([0, 1, 2].flatMap((m) => [(-Math.tanh(0.6)) ** m * Math.sqrt(fact(2 * m)) / (2 ** m * fact(m)), 0]).slice(0, N + 1)),
  };
  /* complex numbers as [re, im] */
  const mul = (a, b) => [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
  const add = (a, b) => [a[0] + b[0], a[1] + b[1]];
  const sc = (a, k) => [a[0] * k, a[1] * k];
  const cis = (x) => [Math.cos(x), Math.sin(x)];
  const abs2 = (a) => a[0] * a[0] + a[1] * a[1];
  const arg = (a) => Math.atan2(a[1], a[0]);
  const rot = (a, b, th, ph) => [add(sc(a, Math.cos(th)), mul(cis(-ph - PI / 2), sc(b, Math.sin(th)))),
    add(sc(b, Math.cos(th)), mul(cis(ph - PI / 2), sc(a, Math.sin(th))))];
  /* apply one pulse at fraction f of its area to a state {g, e} */
  function apply(st, p, f) {
    const g = st.g.slice(), e = st.e.slice();
    if (p.kind === 'red') {
      for (let n = 1; n <= N; n++) { const r = rot(g[n], e[n - 1], p.th * f * Math.sqrt(n / p.n), p.ph); g[n] = r[0]; e[n - 1] = r[1]; }
    } else {
      for (let n = 0; n <= N; n++) { const r = rot(g[n], e[n], p.th * f, p.ph); g[n] = r[0]; e[n] = r[1]; }
    }
    return { g, e };
  }
  /* the pulses and the state before each, for one target and one way of choosing the red pulse */
  function plan(target, mode) {
    let st = { g: TARGETS[target].map((x) => [x, 0]), e: Array.from({ length: N + 1 }, () => [0, 0]) };
    const pulses = [], states = [st];
    for (let n = N; n >= 1; n--) {
      const a = st.g[n], b = st.e[n - 1];
      const red = mode === 'pi' ? { kind: 'red', n, th: PI / 2, ph: 0 }
        : { kind: 'red', n, th: Math.atan2(Math.sqrt(abs2(a)), Math.sqrt(abs2(b))), ph: PI / 2 + arg(b) - arg(a) };
      st = apply(st, red, 1); pulses.push(red); states.push(st);
      const g = st.g[n - 1], e = st.e[n - 1];
      const bare = { kind: 'bare', n: n - 1, th: Math.atan2(Math.sqrt(abs2(e)), Math.sqrt(abs2(g))), ph: arg(e) - arg(g) - PI / 2 };
      st = apply(st, bare, 1); pulses.push(bare); states.push(st);
    }
    return { pulses, states };
  }
  const PLANS = {};
  Object.keys(TARGETS).forEach((t) => ['fit', 'pi'].forEach((m) => { PLANS[t + '/' + m] = plan(t, m); }));
  const M = 2 * N;
  const stateAt = (P, s) => { const i = Math.min(M - 1, Math.floor(s)); return s >= M ? P.states[M] : apply(P.states[i], P.pulses[i], s - i); };
  const pops = (P, s) => { const st = stateAt(P, s); return [...st.g.map(abs2), ...st.e.map(abs2)]; };
  const wrap = (x) => { const y = ((x / PI) % 2 + 2) % 2; return y > 1.995 ? 0 : y; };

  const target = choice(d.controls, { label: '|\\kpsi\\rangle', key: 'target', value: 'coherent', aria: 'the motional state to start from',
    options: [{ value: 'fock', label: 'Fock |4⟩' }, { value: 'coherent', label: 'coherent' }, { value: 'cat', label: 'cat' }, { value: 'squeezed', label: 'squeezed' }] });
  const mode = choice(d.controls, { label: '\\text{red pulse}', key: 'mode', value: 'fit', aria: 'how the area of each red-sideband pulse is chosen',
    options: [{ value: 'fit', label: 'from the state' }, { value: 'pi', label: 'π pulse' }] });
  const step = ctl(d.controls, { label: '\\text{step}', cls: '', key: 'step', min: 0, max: M, step: 0.01, value: 0, unit: '', dec: 2,
    aria: 'how many of the eight pulses have acted' });
  const STOPS = [{ v: 0, label: '|ψ⟩' }];
  for (let n = N; n >= 1; n--) STOPS.push({ v: STOPS.length, label: 'red ' + n }, { v: STOPS.length + 1, label: 'bare ' + (n - 1) });
  F.story(d, step, { stops: STOPS, ms: 1600, rest: 900, ease: F.ease.linear });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);

  const GX = [190, 440], EX = [620, 870], BW = 250, Yn = (n) => 530 - n * 88;
  const BOX = { l: 1000, r: 1340, t: 190, b: 500 };
  const ket = (l, n) => '|' + l + '⟩|' + n + '⟩';
  const both = (ctx, x1, y1, x2, y2, col, w) => { const mx = (x1 + x2) / 2, my = (y1 + y2) / 2; arrow(ctx, mx, my, x1, y1, col, w); arrow(ctx, mx, my, x2, y2, col, w); };

  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const s = step.v, P = PLANS[target.value + '/' + mode.value];
    const pp = target.mix((t) => mode.mix((m) => pops(PLANS[t + '/' + m], s)));
    const rg = F.ref('lvl-g'), re = F.ref('lvl-e'), rr = C('frequency'), rc = rr, pop = C('population'), cpl = C('coupling');
    const i = s >= M - 1e-9 ? -1 : Math.min(M - 1, Math.floor(s + 1e-9));

    /* the pulse acting now: every pair it couples, its top pair bold */
    if (i >= 0) {
      const p = P.pulses[i], col = p.kind === 'red' ? rr : rc;
      /* pairs above the top one are empty at this round and are not drawn */
      for (let n = p.kind === 'red' ? 1 : 0; n <= p.n; n++) {
        const y1 = Yn(n), y2 = Yn(p.kind === 'red' ? n - 1 : n), top = n === p.n;
        const x1 = GX[1] + 14, x2 = EX[0] - 14;
        ctx.save(); if (!top) ctx.globalAlpha *= 0.45; both(ctx, x1, y1, x2, y2, col, top ? 5 : 3); ctx.restore();
        if (top) {
          const lab = p.kind === 'red' ? `$\\eta\\kOmega\\sqrt{${n}}$` : '$\\kOmega$';
          text(ctx, lab, (x1 + x2) / 2, (y1 + y2) / 2 - 24, cpl, { size: 22, weight: 600, align: 'center', tex: true, bg: PAL.panel });
          hits.push({ x: (x1 + x2) / 2, y: (y1 + y2) / 2, r: 22, name: p.kind === 'red'
            ? `the red sideband, ${ket('g', n)} ↔ ${ket('e', n - 1)}, at ηΩ√${n}` : `the bare resonance, ${ket('g', n)} ↔ ${ket('e', n)}, at Ω` });
        }
      }
    }

    /* the ladder: rungs in their level's colour, the population a bar on each */
    text(ctx, 'n', 120, Yn(N) - 52, PAL.muted, { size: 20, align: 'center' });
    text(ctx, '|g⟩|n⟩', (GX[0] + GX[1]) / 2, Yn(N) - 52, rg, { size: 24, weight: 600, align: 'center' });
    text(ctx, '|e⟩|n⟩', (EX[0] + EX[1]) / 2, Yn(N) - 52, re, { size: 24, weight: 600, align: 'center' });
    for (let n = 0; n <= N; n++) {
      const y = Yn(n);
      text(ctx, String(n), 120, y, PAL.muted, { size: 20, align: 'center' });
      [[GX, rg, 'g', pp[n]], [EX, re, 'e', pp[N + 1 + n]]].forEach(([X, col, l, v]) => {
        ctx.save(); ctx.fillStyle = alpha(pop, 0.85); ctx.fillRect(X[0], y - 24, BW * Math.min(1, v), 22); ctx.restore();
        line(ctx, X[0], y, X[1], y, col, 4);
        hits.push({ x: (X[0] + X[1]) / 2, y: y - 12, r: 26, name: `${ket(l, n)}, population ${fmt(v, 2)}` });
      });
    }
    [GX, EX].forEach((X) => {
      const y = Yn(0) + 40;
      line(ctx, X[0], y, X[1], y, alpha(PAL.ink, 0.4), 2);
      [[X[0], '0'], [X[1], '1']].forEach(([x, s0]) => { line(ctx, x, y - 6, x, y + 6, alpha(PAL.ink, 0.4), 2); text(ctx, s0, x, y + 22, PAL.muted, { size: 17, align: 'center' }); });
      text(ctx, 'population', (X[0] + X[1]) / 2, y + 22, pop, { size: 17, weight: 600, align: 'center' });
    });

    /* the pulse areas: done filled, the current one filling, the rest hollow */
    const { X, Y } = axes(ctx, BOX, [0.5, M + 0.5], [0, 0.5], { nx: 0, ny: 2, yc: C('phase'),
      fy: (v) => (v < 1e-9 ? '0' : Math.abs(v - 0.25) < 1e-9 ? 'π/4' : Math.abs(v - 0.5) < 1e-9 ? 'π/2' : fmt(v, 2)) });
    text(ctx, '$\\int|\\kOmega|d\\kt$', BOX.l, BOX.t - 30, C('phase'), { size: 20, weight: 600, tex: true });
    line(ctx, BOX.l, Y(0.5), BOX.r, Y(0.5), alpha(PAL.ink, 0.4), 2, [10, 10]);
    text(ctx, 'π pulse', BOX.r, Y(0.5) - 16, PAL.muted, { size: 17, align: 'right' });
    const areas = target.mix((t) => mode.mix((m) => PLANS[t + '/' + m].pulses.map((q) => q.th / PI)));
    P.pulses.forEach((q, k) => {
      const col = q.kind === 'red' ? rr : rc, x = X(k + 1), w = 26, h = Y(0) - Y(areas[k]);
      const done = Math.max(0, Math.min(1, s - k));
      ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 2; ctx.strokeRect(x - w / 2, Y(areas[k]), w, h);
      ctx.fillStyle = alpha(col, 0.85); ctx.fillRect(x - w / 2, Y(0) - h * done, w, h * done); ctx.restore();
      text(ctx, q.kind === 'red' ? '−ν' : '0', x, Y(areas[k]) - 14, col, { size: 17, weight: 600, align: 'center' });
      text(ctx, String(k + 1), x, BOX.b + 22, k === i ? PAL.ink : PAL.muted, { size: 17, weight: k === i ? 600 : 400, align: 'center' });
      hits.push({ x, y: Y(areas[k] / 2), r: 18, name: `pulse ${k + 1}, ${q.kind === 'red' ? 'red sideband on ' + ket('g', q.n) + ' ↔ ' + ket('e', q.n - 1) : 'bare resonance on ' + ket('g', q.n) + ' ↔ ' + ket('e', q.n)}, area ${fmt(q.th / PI, 2)}π, phase ${fmt(wrap(q.ph), 2)}π` });
    });
    text(ctx, 'pulse', (BOX.l + BOX.r) / 2, BOX.b + 50, PAL.muted, { size: 17, align: 'center' });

    /* headline and readout: the pulse acting now, or where the run ends */
    let head, tex;
    if (i < 0) {
      const p0 = P.states[M].g[0], q0 = abs2(p0);
      head = q0 > 0.995 ? 'All the population is in |g⟩|0⟩; the eight pulses run in reverse build $|\\kpsi\\rangle$ from it.'
        : `Only ${fmt(q0, 2)} of the population reaches |g⟩|0⟩: π pulses leave ${fmt(1 - q0, 2)} higher on the ladder.`;
      tex = `|\\langle g|\\langle 0|\\,U_8\\cdots U_1\\,|\\kpsi\\rangle|^2 = ${fmt(q0, 2)}`;
    } else {
      const p = P.pulses[i], st = P.states[i], k = i + 1;
      if (p.kind === 'red') {
        const a = abs2(st.g[p.n]), b = abs2(st.e[p.n - 1]);
        head = b < 0.005 ? `Pulse ${k} of 8, red sideband: a π pulse empties ${ket('g', p.n)} into the empty ${ket('e', p.n - 1)}.`
          : mode.value === 'pi' ? `Pulse ${k} of 8: a π pulse on the red sideband swaps ${ket('g', p.n)} with ${ket('e', p.n - 1)}, which already holds ${fmt(b, 2)}.`
          : `Pulse ${k} of 8, red sideband: ${ket('e', p.n - 1)} already holds ${fmt(b, 2)}, so a shorter pulse at a chosen phase empties ${ket('g', p.n)} (${fmt(a, 2)}).`;
        tex = `U_{${k}}:\\ \\eta\\kOmega\\sqrt{${p.n}}\\,\\kt = ${fmt(p.th / PI, 2)}\\pi,\\quad \\kphi = ${fmt(wrap(p.ph), 2)}\\pi`;
      } else {
        head = `Pulse ${k} of 8, bare resonance: a pulse of chosen length and phase empties ${ket('e', p.n)} (${fmt(abs2(st.e[p.n]), 2)}) into ${ket('g', p.n)} (${fmt(abs2(st.g[p.n]), 2)}).`;
        tex = `U_{${k}}:\\ \\kOmega\\kt = ${fmt(p.th / PI, 2)}\\pi,\\quad \\kphi = ${fmt(wrap(p.ph), 2)}\\pi`;
      }
    }
    topline(ctx, head);
    ro.set(tex, '', { form: i < 0 ? 'end' : P.pulses[i].kind });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
