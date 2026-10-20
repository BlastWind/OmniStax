/* Figures for section 3.4 The master equation.
   The book gives no numbers, so every rate and frequency is in units of γ and time in 1/γ;
   n̄ = 0, as Eq. (3.100) assumes. The levels |1⟩ and |2⟩ are the section's referents. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['3.4'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, choice, register, cycle, begin, line, arrow, dot, text, topline, label, axes, curve, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);

/* =====================================================================
   SIM · sim-damped-bloch · moving, mathematical 3D (rule 28.3), graphs below
   S = (−2 Re ρ₁₂, −2 Im ρ₁₂, ρ₂₂ − ρ₁₁) from Eqs. (3.86)–(3.89) at n̄ = 0, Ω real,
   with γ₂₁ = γ/2 + γ_d (Eq. 3.93) and γ = 1:
     ẋ = −γ₂₁x + δy,  ẏ = −γ₂₁y − δx + 2Ωw,  ẇ = −γ(w + 1) − 2Ωy,
   the precession about (−2Ω, 0, −δ) with the damping; x and y are reversed
   from 2Re ρ₁₂, 2Im ρ₁₂ so that the drive lies along −x, as in Figure 2.3. |S| = 1 on the sphere is
   |ρ₁₂|² = ρ₁₁ρ₂₂; inside it, |ρ₁₂|² < ρ₁₁ρ₂₂. Integrated by RK4 over 0–10/γ.
   Steady state from Eqs. (3.99)–(3.101). Bloch (x, y, z) is drawn as scene
   (y, z, x), a cyclic swap, so the handedness holds and z is up. Orbit free,
   no ground, no buttons. Graphs: ρ₂₂(t), 0–10/γ by 0–1, and steady ρ₂₂ against
   δ, −5…5 γ, on the same ρ₂₂ axis. Without WebGL a flat canvas draws the
   sphere from one fixed view.
===================================================================== */
(function () {
  const THREE = window.THREE;
  const glOk = () => { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch (e) { return false; } };
  const hasGL = !!(THREE && glOk());
  const d = sim('sim-damped-bloch', 0);
  const T = 10, RS = 1.55, N = 1000, DT = T / N;
  const cy = cycle(() => T, 1.2);
  const g21 = () => 0.5 + gd.v;
  const omSpecial = () => { const g = g21(), o = Math.sqrt((g * g + dl.v * dl.v) / (2 * g)); return o <= 3 ? o : null; };
  const om = ctl(d.controls, { label: '|\\kOmega|', cls: 'coupling', key: 'Omega', min: 0, max: 3, step: 0.01, value: 1, unit: 'γ', dec: 2,
    aria: 'the magnitude of the Rabi frequency, in units of gamma', onInput: () => cy.reset(),
    specials: [{ at: 0, label: 'no field' }, { at: omSpecial, label: 'R_opt = γ' }] });
  const dl = ctl(d.controls, { label: '\\kdelta', cls: 'frequency', key: 'delta', min: -5, max: 5, step: 0.01, value: 0, unit: 'γ', dec: 2,
    aria: 'the detuning delta, in units of gamma', onInput: () => cy.reset(), specials: [{ at: 0, label: 'resonance' }] });
  const gd = ctl(d.controls, { label: '\\kgammad', cls: 'rate', key: 'gamma_d', min: 0, max: 3, step: 0.01, value: 0, unit: 'γ', dec: 2,
    aria: 'the dephasing rate, in units of gamma', onInput: () => cy.reset(), specials: [{ at: 0, label: 'γ₂₁ = γ/2' }] });
  const start = choice(d.controls, { label: '\\text{start}', key: 'start', value: '1', ms: 0, aria: 'the state the atom starts in', onInput: () => cy.reset(),
    options: [{ value: '1', label: '|1⟩' }, { value: 'x', label: '(|1⟩ + |2⟩)/√2' }] });
  [['1', '|1\\rangle'], ['x', '(|1\\rangle + |2\\rangle)/\\sqrt{2}']].forEach(([v, t]) => { const btn = d.controls.querySelector(`.segbtn[data-value="${v}"]`); if (btn) F.tex(btn, t); });
  const ro = readout(d);

  /* steady ρ₂₂ = R/(γ + 2R), R = 2γ₂₁|Ω|²/(γ₂₁² + δ²), Eqs. (3.100)–(3.101) */
  const Ropt = (o, de, g) => (2 * g * o * o) / (g * g + de * de);
  const rss = (o, de, g) => { const R = Ropt(o, de, g); return R / (1 + 2 * R); };
  let solved = '', path = null, Sss = null;
  function solve() {
    const key = [om.v, dl.v, gd.v, start.value].join('|');
    if (key === solved) return; solved = key;
    const o = om.v, de = dl.v, g = g21();
    const f = ([x, y, w]) => [-g * x + de * y, -g * y - de * x + 2 * o * w, -(w + 1) - 2 * o * y];
    let s = start.value === '1' ? [0, 0, -1] : [-1, 0, 0];
    path = [s];
    for (let i = 0; i < N; i++) {
      const k1 = f(s), k2 = f(s.map((v, j) => v + (DT / 2) * k1[j])), k3 = f(s.map((v, j) => v + (DT / 2) * k2[j])), k4 = f(s.map((v, j) => v + DT * k3[j]));
      s = s.map((v, j) => v + (DT / 6) * (k1[j] + 2 * k2[j] + 2 * k3[j] + k4[j])); path.push(s);
    }
    const w = 2 * rss(o, de, g) - 1, D = g * g + de * de;
    Sss = [(2 * o * w * de) / D, (2 * o * w * g) / D, w];
  }
  const at = (t) => { const u = Math.max(0, Math.min(N, t / DT)), i = Math.min(N - 1, Math.floor(u)), k = u - i; return path[i].map((v, j) => v + (path[i + 1][j] - v) * k); };
  const p22 = (S) => (1 + S[2]) / 2;
  const f3 = (v) => fmt(v, v < 0.1 ? 3 : 2);
  const scene = (b, k = RS) => [b[1] * k, b[2] * k, b[0] * k];

  /* ---------- the sphere: rebuilt when a slider or a colour changes ---------- */
  let V = null, g3 = null, sig = '', shaft = null, cone = null, flat = null;
  function build() {
    V.clear(); const g = g3, ink = PAL.muted, cS = C('state'), cO = C('coupling');
    g.add(new THREE.Mesh(new THREE.SphereGeometry(RS, 48, 32), F.mesh.mat(PAL.soft, { transparent: true, opacity: 0.16, depthWrite: false })));
    const ring = (fn) => F.mesh.polyline(g, Array.from({ length: 97 }, (_, i) => scene(fn((2 * Math.PI * i) / 96))), ink);
    ring((a) => [Math.cos(a), Math.sin(a), 0]); ring((a) => [Math.cos(a), 0, Math.sin(a)]); ring((a) => [0, Math.cos(a), Math.sin(a)]);
    [[[1, 0, 0], 'x'], [[0, 1, 0], 'y'], [[0, 0, 1], 'z']].forEach(([u, nm]) => {
      F.mesh.stick(g, scene(u.map((x) => -x), 1.0 * RS), scene(u, 1.18 * RS), 0.008, ink);
      const l = V.label(`<i>${nm}</i>`, scene(u, 1.18 * RS), g, 0); l.style.color = PAL.muted; l.style.transform = nm === 'z' ? 'translate(40%,-100%)' : 'translate(-50%,-50%)';
    });
    const l2 = V.label('', scene([0, 0, 1], 1.0 * RS), g, 0); F.tex(l2, '|2\\rangle'); l2.style.color = F.ref('lvl-2'); l2.style.transform = 'translate(-130%,-50%)';
    const l1 = V.label('', scene([0, 0, -1], 1.0 * RS), g, 0); F.tex(l1, '|1\\rangle'); l1.style.color = F.ref('lvl-1'); l1.style.transform = 'translate(-130%,-50%)';
    V.pickable(F.mesh.sphere(g, scene([0, 0, 1]), 0.05, F.ref('lvl-2')), 'the excited state |2⟩, at the top');
    V.pickable(F.mesh.sphere(g, scene([0, 0, -1]), 0.05, F.ref('lvl-1')), 'the ground state |1⟩, at the bottom');
    const W = [-2 * om.v, 0, -dl.v], w = Math.hypot(...W);
    if (w > 1e-9) {
      const n = W.map((x) => x / w);
      F.mesh.arrow(g, [0, 0, 0], scene(n, 1.32 * RS), 0.03, cO);
      const tip = V.label('<b>Ω</b>', scene(n, 1.32 * RS), g, 0); tip.style.color = cO; tip.style.transform = 'translate(25%,-110%)';
    }
    const pts = path.filter((_, i) => i % 4 === 0).map((b) => new THREE.Vector3(...scene(b)));
    const tube = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 400, 0.01, 6, false), F.mesh.mat(cS, { transparent: true, opacity: 0.45 }));
    g.add(tube); V.pickable(tube, 'the path of the Bloch vector');
    V.pickable(F.mesh.sphere(g, scene(Sss), 0.06, cS, { transparent: true, opacity: 0.6 }), `the steady state, ρ₂₂ = ${fmt(p22(Sss), 2)}`);
    shaft = F.mesh.stick(g, [0, 0, 0], [0, -RS, 0], 0.035, cS); V.pickable(shaft, 'the Bloch vector of the atom');
    cone = new THREE.Mesh(new THREE.ConeGeometry(1, 1, 18), F.mesh.mat(cS)); g.add(cone); V.pickable(cone, 'the Bloch vector of the atom');
  }
  function place(S) {
    const tip = scene(S), L = Math.hypot(...tip);
    if (L < 1e-3) { shaft.visible = false; cone.visible = false; V.invalidate(); return; }
    shaft.visible = true; cone.visible = true;
    const u = tip.map((x) => x / L), hl = Math.min(0.26, 0.5 * L), base = tip.map((x, i) => x - u[i] * hl);
    F.mesh.setStick(shaft, [0, 0, 0], base);
    cone.position.set(base[0] + (u[0] * hl) / 2, base[1] + (u[1] * hl) / 2, base[2] + (u[2] * hl) / 2);
    cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(...u)); cone.scale.set(0.1, hl, 0.1);
    V.invalidate();
  }

  /* ---------- the flat view, where there is no WebGL ---------- */
  const YAW = 0.55, PIT = 0.32, FC = [700, 300], FK = 210;
  const proj = (b) => { const [x, y, z] = scene(b, 1); const x1 = x * Math.cos(YAW) + z * Math.sin(YAW), z1 = -x * Math.sin(YAW) + z * Math.cos(YAW); const y1 = y * Math.cos(PIT) - z1 * Math.sin(PIT); return [FC[0] + FK * x1, FC[1] - FK * y1]; };
  function drawFlat(S, now) {
    const { ctx } = begin(flat), ink = PAL.muted, cS = C('state'), cO = C('coupling');
    ctx.save(); ctx.strokeStyle = ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(FC[0], FC[1], FK, 0, 2 * Math.PI); ctx.stroke();
    ctx.strokeStyle = alpha(ink, 0.7); ctx.lineWidth = 1.5; ctx.beginPath();
    for (let i = 0; i <= 96; i++) { const a = (2 * Math.PI * i) / 96, [x, y] = proj([Math.cos(a), Math.sin(a), 0]); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
    ctx.stroke(); ctx.restore();
    [[[1, 0, 0], 'x'], [[0, 1, 0], 'y'], [[0, 0, 1], 'z']].forEach(([u, nm]) => { const [a, b] = proj(u.map((x) => -x)), [c, e] = proj(u.map((x) => 1.15 * x)); line(ctx, a, b, c, e, alpha(ink, 0.7), 1.5); text(ctx, nm, c + 10, e, ink, { size: 20 }); });
    const [tx, ty] = proj([0, 0, 1]), [bx, by] = proj([0, 0, -1]);
    text(ctx, '|2⟩', tx, ty - 26, F.ref('lvl-2'), { size: 22, weight: 600, align: 'center' });
    text(ctx, '|1⟩', bx, by + 26, F.ref('lvl-1'), { size: 22, weight: 600, align: 'center' });
    const W = [-2 * om.v, 0, -dl.v], w = Math.hypot(...W);
    if (w > 1e-9) { const [ox, oy] = proj(W.map((x) => (1.3 * x) / w)); arrow(ctx, FC[0], FC[1], ox, oy, cO, 4); label(ctx, 'Ω', ox, oy, { side: 'right', color: cO, gap: 14 }); }
    ctx.save(); ctx.strokeStyle = alpha(cS, 0.45); ctx.lineWidth = 2; ctx.beginPath();
    path.forEach((b, i) => { const [x, y] = proj(b); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }); ctx.stroke(); ctx.restore();
    const [qx, qy] = proj(Sss); dot(ctx, qx, qy, cS, false, 10);
    const [sx, sy] = proj(S); if (Math.hypot(sx - FC[0], sy - FC[1]) > 6) arrow(ctx, FC[0], FC[1], sx, sy, cS, 5);
  }

  if (hasGL) {
    V = F.view3d(d.stage, { h: 560, dist: 7.4, tilt: 0.3, spin: 'off', yaw: 'free', pitch: [-Math.PI / 2, Math.PI / 2] });
    if (!V.scene) V = null; else { g3 = V.part(0); V.look({ yaw: -0.6, pitch: 0.3, zoom: 0.82, target: [0, 0.18, 0] }); }
  }
  if (!V) flat = F.makeCanvas(d.stage, 600);

  /* ---------- the graphs: ρ₂₂(t) and the steady ρ₂₂ against δ, one ρ₂₂ axis ---------- */
  const strip = F.makeCanvas(d.stage, 330);
  const hits = []; hover(d.stage, () => hits, strip);
  const LB = { l: 150, r: 770, t: 100, b: 260 }, RB = { l: 900, r: 1300, t: 100, b: 260 };
  function bound(S) {
    const c2 = (S[0] * S[0] + S[1] * S[1]) / 4, pp = (1 - S[2] * S[2]) / 4, len = Math.hypot(...S);
    return { c2, pp, len, pure: pp - c2 < 5e-4 };
  }
  function draw() {
    solve();
    const now = cy.now(), S = at(now), o = om.v, de = dl.v, g = g21(), R = Ropt(o, de, g), ss = R / (1 + 2 * R), b = bound(S);
    const head = b.pure
      ? `On the sphere, a pure state: $|\\krhoonetwo|^2$ = $\\krhooneone\\krhotwotwo$ = ${f3(b.pp)}.`
      : `Inside the sphere, a mixed state: $|\\krhoonetwo|^2$ = ${f3(b.c2)} < $\\krhooneone\\krhotwotwo$ = ${f3(b.pp)}.`;
    if (V) {
      const key = [solved, C('state'), C('coupling'), PAL.muted, PAL.soft, F.ref('lvl-1'), F.ref('lvl-2')].join('|');
      if (key !== sig) { sig = key; build(); }
      place(S); V.headline(head);
    } else drawFlat(S, now);
    const { ctx } = begin(strip); hits.length = 0;
    const pop = C('population'), cS = C('state'), fq = C('frequency');
    if (!V) topline(ctx, head);
    const A = axes(ctx, LB, [0, T], [0, 1], { nx: 5, ny: 2, xl: 't (1/γ)', xc: C('time'), fy: (v) => fmt(v, 1) });
    const B = axes(ctx, RB, [-5, 5], [0, 1], { nx: 2, ny: 2, xc: fq, fy: (v) => fmt(v, 1) });
    text(ctx, '$\\kdelta$ (γ)', RB.r, RB.b + 58, fq, { size: 20, weight: 600, align: 'right', tex: true });
    text(ctx, '$\\krhotwotwo$', LB.l, LB.t - 26, pop, { size: 22, weight: 600, tex: true });
    text(ctx, 'steady $\\krhotwotwo$', RB.l, RB.t - 26, pop, { size: 22, weight: 600, tex: true });
    [A, B].forEach((G, i) => { const bx = i ? RB : LB; line(ctx, bx.l, G.Y(0.5), bx.r, G.Y(0.5), alpha(PAL.ink, 0.35), 2, [10, 10]); });
    text(ctx, '½', RB.r + 12, B.Y(0.5), PAL.muted, { size: 17 });
    line(ctx, LB.l, A.Y(ss), LB.r, A.Y(ss), alpha(pop, 0.6), 2, [10, 10]); line(ctx, RB.l, B.Y(ss), B.X(de), B.Y(ss), alpha(pop, 0.6), 2, [10, 10]);
    const p = (t) => p22(at(t));
    ctx.save(); ctx.globalAlpha *= 0.25; curve(ctx, p, 0, T, A.X, A.Y, pop, 3, 500); ctx.restore();
    curve(ctx, p, 0, now, A.X, A.Y, pop, 5, 500);
    dot(ctx, A.X(now), A.Y(p(now)), pop);
    curve(ctx, (x) => rss(o, x, g), -5, 5, B.X, B.Y, pop, 5, 300);
    dot(ctx, B.X(de), B.Y(ss), pop, true, 10);
    hits.push({ x: A.X(now), y: A.Y(p(now)), r: 18, name: `the population ρ₂₂ of |2⟩ now, ${fmt(p(now), 2)}` },
      { x: B.X(de), y: B.Y(ss), r: 18, name: `the steady population ρ₂₂ at δ = ${fmt(de, 2)} γ, ${fmt(ss, 2)}` },
      { x: LB.r - 20, y: A.Y(ss), r: 16, name: `the steady value ρ₂₂ = R_opt/(γ + 2R_opt) = ${fmt(ss, 2)}` },
      { x: RB.r - 20, y: B.Y(0.5), r: 16, name: 'the saturated value ½' });
    line(ctx, LB.l, 30, LB.l + 40, 30, cS, 5); text(ctx, 'the Bloch vector', LB.l + 52, 30, cS, { size: 18 });
    dot(ctx, LB.l + 260, 30, cS, false, 10); text(ctx, 'its steady state', LB.l + 280, 30, cS, { size: 18 });
    ro.set(`\\krhotwotwo = \\frac{\\kRopt}{\\kgamma + 2\\kRopt} = \\frac{${fmt(R, 2)}\\kgamma}{\\kgamma + ${fmt(2 * R, 2)}\\kgamma} = ${fmt(ss, 2)}`,
      `with $\\kgammatwoone = \\kgamma/2 + \\kgammad = ${fmt(g, 2)}\\kgamma$ and $\\kRopt = 2\\kgammatwoone|\\kOmega/\\kGammatwoone|^2 = ${fmt(R, 2)}\\kgamma$.`, { form: 'ss' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 6), draw });
})();

};
