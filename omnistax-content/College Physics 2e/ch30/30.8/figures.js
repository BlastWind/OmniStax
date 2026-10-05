/* Figures for section 30.8 Quantum Numbers and Rules.
   The page binds angular-momentum (L, L_z), angle (θ) and position (the
   clouds' scale bar). The three orientations of L for l = 1 are the section's
   referents; the cones of m_l = ±2, ±3 are unnamed instances. The electron's
   positions are F.el('e-'). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['30.8'] = function (root, F) {
const { fmt, C, PAL, alpha, choice, select, register, cycle, begin, line, arrow, dot, text, topline, label, angleArc, hbracket, readout } = F;
const sim = (id, H) => F.sim(root, id, H);

/* h/2π in J·s */
const HBAR = 1.0546e-34;
const sciTex = (x) => { let e = Math.floor(Math.log10(x)), m = x / Math.pow(10, e); if (+m.toFixed(2) >= 10) { m /= 10; e++; } return fmt(m, 2) + '\\times 10^{' + e + '}'; };
const signed = (m) => (m > 0 ? '+' + m : m < 0 ? '−' + -m : '0');
const signedTex = (m) => (m > 0 ? '+' + m : String(m));

/* =====================================================================
   FIGURE 30.52 · sim-allowed-directions · still · mathematical 3D (rule 28.3)
   The physical z-axis is the scene's vertical. L is drawn U scene units per
   h/2π, so it grows with l, and the camera's zoom glides with l so the
   largest cone stays framed. Every L stands at the same azimuth, the book's
   side view; the cone round it is the set of directions it may take. Orbit
   free (no ground); snap views across and along z. Without WebGL the canvas
   draws the book's side view.
===================================================================== */
(function () {
  const THREE = window.THREE;
  const glOk = () => { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch (e) { return false; } };
  const hasGL = !!(THREE && glOk());
  const d = sim('sim-allowed-directions', hasGL ? 0 : 600);
  const U = 0.62;
  const REFS = { 1: 'ml-plus-one', 0: 'ml-zero', '-1': 'ml-minus-one' };
  const CATS = { 2: 0, '-2': 1, 3: 2, '-3': 3 };
  const colOf = (m) => (REFS[m] ? F.ref(REFS[m]) : F.cat(CATS[m]));
  const camFor = (l) => { const e = U * Math.sqrt(Math.max(l, 1) * (Math.max(l, 1) + 1)); return { zoom: (0.66 * 1.876) / (e + 0.45), target: [0, 0.2 + 0.25 * e, 0] }; };

  let V = null, g3 = null, sig = '';
  const onAxis = [];
  const lPick = choice(d.controls, { label: 'l', key: 'l', ms: 0, value: '1', aria: 'the angular momentum quantum number l',
    options: ['0', '1', '2', '3'].map((v) => ({ value: v, label: v })), onInput: onL });
  const mPick = choice(d.controls, { label: 'm_l', key: 'm_l', ms: 0, value: '1', aria: 'the angular momentum projection quantum number m sub l',
    options: [-3, -2, -1, 0, 1, 2, 3].map((m) => ({ value: String(m), label: signed(m) })), onInput: onM });
  const mButtons = [...d.controls.querySelectorAll('.ctl-seg')[1].querySelectorAll('.segbtn')];
  /* only −l to l is offered; a step past either end wraps round to the other */
  function showM() { const l = +lPick.value; mButtons.forEach((b) => { b.style.display = Math.abs(+b.dataset.value) <= l ? '' : 'none'; }); }
  function onM(v) { const l = +lPick.value, m = +v; if (m > l) mPick.set(String(-l)); else if (m < -l) mPick.set(String(l)); }
  function onL(v) {
    const l = +v, m = +mPick.value;
    if (Math.abs(m) > l) mPick.set(String(Math.sign(m) * l));
    showM();
    if (V) V.glide(camFor(l), 900);
  }
  showM();
  const ro = readout(d);

  const state = () => {
    const l = +lPick.value, m = +mPick.value, L = Math.sqrt(l * (l + 1));
    return { l, m, L, th: l ? (Math.acos(m / L) * 180) / Math.PI : 0 };
  };

  /* ---------- the scene, rebuilt when the state or a colour changes ---------- */
  function dashes(g, a, b, r, col) {
    const n = Math.max(2, Math.round(Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]) / 0.11));
    for (let i = 0; i < n; i++) {
      const p = (k) => a.map((x, j) => x + (b[j] - x) * k);
      F.mesh.stick(g, p(i / n), p((i + 0.55) / n), r, col);
    }
  }
  function build(st) {
    V.clear(); onAxis.length = 0;
    const g = g3, AM = C('angular-momentum'), AN = C('angle');
    const ext = U * Math.max(st.L, 1.2), top = ext + 0.5, bot = -(ext + 0.35);
    F.mesh.arrow(g, [0, bot, 0], [0, top, 0], 0.012, PAL.ink);
    const zl = V.label('<i>z</i>-axis', [0, top, 0], g, 4); onAxis.push(zl);
    if (!st.l) {
      F.mesh.sphere(g, [0, 0, 0], 0.05, AM);
      const lab = V.label('<i>L</i> = 0', [0, 0, 0], g, 10); lab.style.color = AM;
      V.invalidate(); return;
    }
    for (let m = -st.l; m <= st.l; m++) {
      const on = m === st.m, lz = m * U, rho = Math.sqrt(st.L * st.L - m * m) * U, c = colOf(m);
      const deg = fmt((Math.acos(m / st.L) * 180) / Math.PI, 1);
      const name = `the cone of directions L may take with m_l = ${signed(m)}, at ${deg}° to the z-axis`;
      const sheet = m === 0 ? new THREE.CircleGeometry(rho, 72) : new THREE.ConeGeometry(rho, Math.abs(lz), 72, 1, true);
      const surf = new THREE.Mesh(sheet, F.mesh.mat(c, { transparent: true, opacity: on ? 0.3 : 0.1, side: THREE.DoubleSide, depthWrite: false }));
      if (m === 0) surf.rotation.x = -Math.PI / 2;
      else { surf.position.y = lz / 2; if (lz > 0) surf.rotation.x = Math.PI; }
      g.add(surf); V.pickable(surf, name);
      const rim = new THREE.Mesh(new THREE.TorusGeometry(rho, on ? 0.022 : 0.011, 8, 120), F.mesh.mat(c));
      rim.rotation.x = Math.PI / 2; rim.position.y = lz; g.add(rim); V.pickable(rim, name);
      F.mesh.arrow(g, [0, 0, 0], [rho, lz, 0], on ? 0.028 : 0.014, AM);
      if (!on) continue;
      const out = 1 + 0.34 / (st.L * U), tip = V.label('<i>L</i>', [rho * out, lz * out, 0], g, 0); tip.style.color = AM; tip.style.transform = 'translate(-50%,-50%)';
      const ml = V.label(`<i>m<sub>l</sub></i> = ${signed(m)}`, [-rho, lz, 0], g, m < 0 ? -12 : 8); ml.style.color = c;
      if (m < 0) ml.style.transform = 'translate(-50%,0)';
      if (m) {
        dashes(g, [0, 0, 0], [0, lz - Math.sign(lz) * 0.16, 0], 0.024, AM);
        F.mesh.arrow(g, [0, lz - Math.sign(lz) * 0.2, 0], [0, lz, 0], 0.024, AM);
        dashes(g, [0, lz, 0], [rho, lz, 0], 0.006, PAL.muted);
        const lzl = V.label('<i>L<sub>z</sub></i>', [-0.12, lz * 0.5, 0], g, 0); lzl.style.color = AM; lzl.style.transform = 'translate(-100%,-50%)'; onAxis.push(lzl);
      }
      const t = (Math.acos(m / st.L)), R = Math.min(0.42, 0.5 * st.L * U), pts = [];
      for (let i = 0; i <= 32; i++) { const a = (t * i) / 32; pts.push([R * Math.sin(a), R * Math.cos(a), 0]); }
      for (let i = 0; i < 32; i++) F.mesh.stick(g, pts[i], pts[i + 1], 0.009, AN);
      const th = V.label(`θ = ${deg}°`, [(R + 0.2) * Math.sin(t / 2), (R + 0.2) * Math.cos(t / 2), 0], g, -10);
      th.style.color = AN; th.style.transform = 'translate(0,-50%)'; onAxis.push(th);
    }
    V.invalidate();
  }
  function apply(st) {
    const key = [st.l, st.m, C('angular-momentum'), C('angle'), PAL.ink, PAL.muted, ...[-3, -2, -1, 0, 1, 2, 3].map(colOf)].join('|');
    if (key !== sig) { sig = key; build(st); }
    V.headline(st.l
      ? `With $l = ${st.l}$ there are ${2 * st.l + 1} allowed angles; $m_l = ${signedTex(st.m)}$ puts $\\kL$ at ${fmt(st.th, 1)}° to the $z$-axis, anywhere around its cone.`
      : 'With $l = 0$ the angular momentum is zero and has no direction, as in hydrogen’s ground state.');
  }

  /* ---------- the book's side view, where there is no WebGL for the scene ---------- */
  function drawFlat(ctx, st) {
    const cx = 640, cy = 330, K = 200 / Math.max(st.L, 1.414), AM = C('angular-momentum');
    arrow(ctx, cx, cy + K * Math.max(st.L, 1.2) + 40, cx, cy - K * Math.max(st.L, 1.2) - 50, PAL.ink, 2);
    text(ctx, 'z-axis', cx + 12, cy - K * Math.max(st.L, 1.2) - 46, PAL.ink, { size: 20, align: 'left' });
    for (let m = -st.l; m <= st.l; m++) {
      const on = m === st.m, y = cy - m * K, rx = Math.sqrt(st.L * st.L - m * m) * K, ry = rx * 0.16, c = colOf(m);
      for (let i = 0; i < 48; i++) {
        const a0 = (i / 48) * 2 * Math.PI, a1 = ((i + 1) / 48) * 2 * Math.PI;
        line(ctx, cx + rx * Math.cos(a0), y + ry * Math.sin(a0), cx + rx * Math.cos(a1), y + ry * Math.sin(a1), c, on ? 4 : 2);
      }
      arrow(ctx, cx, cy, cx + rx, y, AM, on ? 5 : 3);
      if (!on) continue;
      if (m) line(ctx, cx, cy, cx, y, AM, 4, [10, 8]);
      angleArc(ctx, { x: cx, y: cy }, 56, Math.PI / 2, Math.atan2(m, Math.sqrt(st.L * st.L - m * m)), `θ = ${fmt(st.th, 1)}°`, undefined, C('angle'));
      label(ctx, 'L', cx + rx, y, { side: 'right', color: AM });
      label(ctx, `m_{l} = ${signed(m)}`, cx - rx, y, { side: 'left', color: c });
    }
    topline(ctx, st.l
      ? `With l = ${st.l} there are ${2 * st.l + 1} allowed angles; m_{l} = ${signed(st.m)} puts L at ${fmt(st.th, 1)}° to the z-axis.`
      : 'With l = 0 the angular momentum is zero and has no direction.');
  }

  function draw() {
    const st = state();
    if (V) apply(st);
    else if (d.c) { const { ctx } = begin(d.c); drawFlat(ctx, st); }
    if (!st.l) { ro.set('\\kL = \\sqrt{0(0+1)}\\,\\frac{h}{2\\pi} = 0', '', { form: 'zero' }); return; }
    const L2 = st.l * (st.l + 1);
    ro.set(`\\ktheta = \\cos^{-1}\\frac{\\kLz}{\\kL} = \\cos^{-1}\\frac{m_l}{\\sqrt{l(l+1)}} = \\cos^{-1}\\frac{${st.m}}{\\sqrt{${L2}}} = ${fmt(st.th, 1)}^\\circ`,
      `Every arrow has the same length, $\\kL = \\sqrt{${L2}}\\,h/2\\pi = ${sciTex(st.L * HBAR)}\\ \\text{J}\\cdot\\text{s}$.`, { form: 'angle' });
  }

  if (hasGL) {
    V = F.view3d(d.stage, {
      h: 620, dist: 7, tilt: 0.3, spin: 'off',
      views: [{ label: 'across z', yaw: 0, pitch: 0.3 }, { label: 'along z', yaw: 0, pitch: Math.PI / 2 }],
      pitch: [-Math.PI / 2, Math.PI / 2], yaw: 'free', zoomMin: 0.4, zoomMax: 2.6,
      onRender: () => { const along = V && Math.abs(V.at.pitch) > 1.2; onAxis.forEach((e) => { e.style.visibility = along ? 'hidden' : ''; }); },
    });
    if (!V.scene) V = null;
    else { g3 = V.part(0); V.look({ yaw: 0, pitch: 0.3, ...camFor(1) }); }
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 30.53 · sim-probability-clouds · moving · flat (rule 28.1)
   A slice through the z-axis, x across and z up, at one scale for every
   state: ±24 a_B across the 510-unit square. Each state's 4000 positions are
   drawn once from |ψ|² on the slice with a seeded generator, so the clock
   only decides how many are shown and scrubbing back is exact.
===================================================================== */
(function () {
  const d = sim('sim-probability-clouds', 640);
  const N = 4000, T = 5, CX = 700, CY = 360, HALF = 255, S = HALF / 24;
  const ex = (r, n) => Math.exp(-r / n);
  const STATES = {
    '1,0,0': { lab: '(1, 0, 0)', l: 0, R: 5, f: (x, z, r) => ex(r, 1) },
    '2,0,0': { lab: '(2, 0, 0)', l: 0, R: 14, f: (x, z, r) => (2 - r) * ex(r, 2) },
    '2,1,0': { lab: '(2, 1, 0)', l: 1, R: 14, f: (x, z, r) => z * ex(r, 2) },
    '2,1,1': { lab: '(2, 1, ±1)', l: 1, R: 14, f: (x, z, r) => x * ex(r, 2) },
    '3,0,0': { lab: '(3, 0, 0)', l: 0, R: 24, f: (x, z, r) => (27 - 18 * r + 2 * r * r) * ex(r, 3) },
    '3,1,0': { lab: '(3, 1, 0)', l: 1, R: 24, f: (x, z, r) => (6 - r) * z * ex(r, 3) },
    '3,1,1': { lab: '(3, 1, ±1)', l: 1, R: 24, f: (x, z, r) => (6 - r) * x * ex(r, 3) },
    '3,2,0': { lab: '(3, 2, 0)', l: 2, R: 24, f: (x, z, r) => (3 * z * z - r * r) * ex(r, 3) },
    '3,2,1': { lab: '(3, 2, ±1)', l: 2, R: 24, f: (x, z, r) => x * z * ex(r, 3) },
    '3,2,2': { lab: '(3, 2, ±2)', l: 2, R: 24, f: (x, z, r) => x * x * ex(r, 3) },
  };
  const cy = cycle(() => T, 1.2);
  const pick = select(d.controls, { label: '(n,\\,l,\\,m_l)', key: 'state', value: '3,2,1', aria: 'the state, its quantum numbers n, l and m sub l',
    options: Object.keys(STATES).map((k) => ({ value: k, label: STATES[k].lab })), onInput: () => cy.reset() });
  const ro = readout(d);

  const cache = {};
  function samples(key) {
    if (cache[key]) return cache[key];
    const { f, R } = STATES[key];
    let seed = [...key].reduce((a, ch) => a * 31 + ch.charCodeAt(0), 7) >>> 0;
    const rnd = () => { seed = (seed + 0x6d2b79f5) >>> 0; let t = seed; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
    const p = (x, z) => { const v = f(x, z, Math.hypot(x, z)); return v * v; };
    let top = 0;
    for (let i = 0; i <= 200; i++) for (let j = 0; j <= 200; j++) top = Math.max(top, p(-R + (2 * R * i) / 200, -R + (2 * R * j) / 200));
    top *= 1.1;
    const out = [];
    while (out.length < N) {
      const x = (2 * rnd() - 1) * R, z = (2 * rnd() - 1) * R;
      if (rnd() * top < p(x, z)) out.push([x, z]);
    }
    return (cache[key] = out);
  }

  function draw() {
    const { ctx } = begin(d.c);
    const st = STATES[pick.value], pts = samples(pick.value);
    const k = Math.max(1, Math.round((N * Math.min(cy.now(), T)) / T));
    const E = F.el('e-'), dotC = alpha(E, 0.55);
    line(ctx, CX, CY - HALF - 4, CX, CY - HALF + 22, PAL.ink, 2);
    line(ctx, CX, CY + HALF - 22, CX, CY + HALF + 4, PAL.ink, 2);
    text(ctx, 'z', CX + 14, CY - HALF + 8, PAL.ink, { size: 22, align: 'left' });
    for (let i = 0; i < k; i++) dot(ctx, CX + pts[i][0] * S, CY - pts[i][1] * S, dotC, true, 2.2);
    hbracket(ctx, 1080, 1080 + 10 * S, CY + HALF - 6, C('position'), '10 a_{B}');
    dot(ctx, 90, CY + HALF - 6, E, true, 5);
    text(ctx, 'one measurement of the electron’s position', 106, CY + HALF - 6, PAL.ink, { size: 18, align: 'left' });
    topline(ctx, `After ${k} measurements in the ${st.lab} state, the dots crowd where the electron is most often found.`);
    const l = st.l;
    ro.set(l
      ? `\\kL = \\sqrt{l(l+1)}\\,\\frac{h}{2\\pi} = \\sqrt{${l}(${l}+1)}\\,\\frac{h}{2\\pi} = ${sciTex(Math.sqrt(l * (l + 1)) * HBAR)}\\ \\text{J}\\cdot\\text{s}`
      : '\\kL = \\sqrt{l(l+1)}\\,\\frac{h}{2\\pi} = \\sqrt{0(0+1)}\\,\\frac{h}{2\\pi} = 0', '', { form: 'L' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

};
