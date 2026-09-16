/* Figures for section 24.4 Energy in Electromagnetic Waves. The page binds
   intensity, electric-field, magnetic-field, velocity and power, which is what
   ch24/COLOR.md gives 24.4. The area a power is spread over, the permittivity and
   the permeability of free space, every length and every count are untyped and in
   ink, as are the oven, the frame of every figure and every name on it. Nothing
   here moves: the energy a wave carries, the intensity it delivers and the field
   strengths that follow from it are all states of the wave, with no period and no
   clock in them, so every figure registers no cycle, takes no transport and
   redraws on its sliders alone (root rule 14). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['24.4'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, topline, label, hbracket, vbracket, axes, curve, pinned, fitScale } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

const TAU = Math.PI * 2;
const CLIGHT = 3.00e8;                   /* the speed of light, in metres per second */
const EPS0 = 8.85e-12;                   /* the permittivity of free space */
const MU0 = 4 * Math.PI * 1e-7;          /* the permeability of free space */
/* the average intensity of a continuous sinusoidal wave of electric amplitude E0 */
const iave = (E0) => (CLIGHT * EPS0 * E0 * E0) / 2;

const SUPS = '\u2070\u00B9\u00B2\u00B3\u2074\u2075\u2076\u2077\u2078\u2079';
const supOf = (e) => String(e).replace(/-/g, '\u2212').replace(/[0-9]/g, (c) => SUPS[+c]);
/* a number as a × 10^b for the canvas, and the same for KaTeX */
function sci(x, dp) {
  if (!(Math.abs(x) > 0)) return '0';
  const e = Math.floor(Math.log10(Math.abs(x))), m = x / Math.pow(10, e);
  return fmt(m, dp ?? 2) + ' \u00D7 10' + supOf(e);
}
function sciTex(x, dp) {
  if (!(Math.abs(x) > 0)) return '0';
  const e = Math.floor(Math.log10(Math.abs(x))), m = x / Math.pow(10, e);
  return fmt(m, dp ?? 2) + ' \\times 10^{' + e + '}';
}
/* a curve drawn with a dash, which `curve` itself does not offer */
function dcurve(ctx, f, t0, t1, X, Y, color, w, n, dash) {
  ctx.save(); ctx.setLineDash(dash || [10, 10]);
  curve(ctx, f, t0, t1, X, Y, color, w, n);
  ctx.restore();
}
/* one horizontal bar on its own fixed scale: the track it runs along, the bar
   itself, and, where the value is past the end of the track, the bar run full
   length with a chevron saying so. The number is written at the end either way. */
function bar(ctx, x, y, len, v, vmax, color, valueText, valueColor) {
  line(ctx, x, y, x + len, y, alpha(PAL.ink, 0.18), 3);
  line(ctx, x + len, y - 9, x + len, y + 9, alpha(PAL.ink, 0.3), 2);
  const over = v > vmax, drawn = Math.max(0, Math.min(v, vmax)) / vmax * len;
  if (drawn > 0) line(ctx, x, y, x + drawn, y, color, 16);
  let end = x + drawn;
  if (over) { arrow(ctx, x + len + 6, y, x + len + 26, y, color, 4); end = x + len + 26; }
  text(ctx, valueText, end + 14, y, valueColor || color, { size: 20, weight: 600, align: 'left', bg: PAL.panel });
  return end;
}

/* =====================================================================
   FIGURE 24.22 · sim-amplitude-squared · still · flat, with the scene behind
   a view choice (archetype 10)
   The book prints one wave and a second of twice the amplitude carrying four
   times the energy, and asks the reader to take the squaring on trust. Here
   the second wave takes any amplitude the slider gives it and the two bars
   beneath answer, so the squaring is something to watch rather than to
   believe; the figure opens on the doubling the book draws. The flat view is
   the book's own oblique one, with the electric field in the upright plane
   and the magnetic field in the plane at right angles; the scene behind the
   view choice is the same two waves in space, where the amplitude of each
   field is a height that can be compared directly. The orbit is bounded to a
   yaw from -115° to +29° and a pitch within about ±70°, so the reader may
   turn from the book's own view round to looking straight down the beams but
   never round behind them, where one beam hides the other and the comparison
   the figure is for is lost.
   Scales: the electric field 140 units at 3000 V/m, the magnetic field 86
   units at 1.00 × 10⁻⁵ T, each to its own scale, as the figure says; the
   intensity bars 760 units at 11.9 kW/m², which is what 3000 V/m carries.
===================================================================== */
(function () {
  const THREE = window.THREE;
  /* whether the scene can be mounted is settled before the choice is made, since
     a browser with no WebGL is offered no view to switch to; a probe context is
     the honest test, and asking for one costs nothing */
  const hasGL = (() => {
    if (!THREE) return false;
    try { const p = document.createElement('canvas'); return !!(p.getContext('webgl') || p.getContext('experimental-webgl')); } catch (e) { return false; }
  })();
  const d = sim('sim-amplitude-squared', 840);
  const e1S = ctl(d.controls, { label: '\\kEfo', cls: 'electric-field', min: 400, max: 1500, step: 50, value: 1000, unit: 'V/m', dec: 0, aria: 'the maximum electric field strength of the first wave' });
  const e2S = ctl(d.controls, { label: '{\\kEfo}\'', cls: 'electric-field', min: 400, max: 3000, step: 50, value: 2000, unit: 'V/m', dec: 0, aria: 'the maximum electric field strength of the second wave' });
  const viewC = hasGL ? choice(d.controls, {
    label: '\\text{the view}',
    options: [{ value: '2d', label: '2D' }, { value: '3d', label: '3D' }],
    value: '2d', aria: 'whether the two waves are drawn flat or seen in space',
  }) : null;

  const E_MAX = 3000, B_MAX = E_MAX / CLIGHT, I_MAX = iave(E_MAX);
  const UPV = 140 / E_MAX, UPB = 86 / B_MAX;            /* canvas units per volt per metre, and per tesla */
  const BX0 = 340, BX1 = 1160, CYCLES = 2;
  const KX = -0.52, KY = 0.28;                          /* the oblique direction the magnetic plane runs in */
  const shape = (u) => Math.sin(TAU * CYCLES * u);
  const state = () => {
    const E1 = e1S.v, E2 = e2S.v;
    return { E1, E2, B1: E1 / CLIGHT, B2: E2 / CLIGHT, I1: iave(E1), I2: iave(E2), k: E2 / E1, mode: viewC ? viewC.value : '2d' };
  };

  /* ---------- the flat view, which is the one the book prints ---------- */
  function panel(ctx, y0, E0, B0, name, names) {
    const EC = C('electric-field'), BC = C('magnetic-field'), VC = C('velocity');
    const PT = (u, ey, bz) => [BX0 + u * (BX1 - BX0) + bz * KX, y0 - ey + bz * KY];
    const path = (f, color, w) => {
      ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath();
      for (let i = 0; i <= 160; i++) { const u = i / 160, p = f(u); if (i) ctx.lineTo(p[0], p[1]); else ctx.moveTo(p[0], p[1]); }
      ctx.stroke(); ctx.restore();
    };
    line(ctx, BX0 - 26, y0, BX1 + 40, y0, alpha(PAL.ink, 0.4), 2);
    path((u) => PT(u, E0 * UPV * shape(u), 0), EC, 5);
    path((u) => PT(u, 0, B0 * UPB * shape(u)), BC, 5);
    for (let i = 0; i < 12; i++) {
      const u = (i + 0.5) / 12, s = shape(u), a = PT(u, 0, 0);
      const e = PT(u, E0 * UPV * s, 0), b = PT(u, 0, B0 * UPB * s);
      if (Math.abs(E0 * UPV * s) > 5) arrow(ctx, a[0], a[1], e[0], e[1], alpha(EC, 0.5), 2.5);
      if (Math.abs(B0 * UPB * s) > 5) arrow(ctx, a[0], a[1], b[0], b[1], alpha(BC, 0.5), 2.5);
    }
    arrow(ctx, BX1 + 44, y0, BX1 + 96, y0, VC, 5);
    text(ctx, 'c', BX1 + 108, y0 - 12, VC, { size: 24, weight: 600, align: 'left' });
    text(ctx, name, BX0 - 40, y0, PAL.muted, { size: 19, align: 'right' });
    if (!names) return;
    /* the two fields are named once, on the first wave, since a kind is labelled
       once and on one representative (rule 26.7) */
    const uc = 1 / (4 * CYCLES);                        /* the first crest */
    const ec = PT(uc, E0 * UPV, 0), bc = PT(uc, 0, B0 * UPB);
    text(ctx, 'E', ec[0] - 16, ec[1] - 16, C('electric-field'), { size: 24, weight: 600, align: 'right', bg: PAL.panel });
    text(ctx, 'B', bc[0] - 16, bc[1] + 4, C('magnetic-field'), { size: 24, weight: 600, align: 'right', bg: PAL.panel });
  }

  function drawBars(ctx, st) {
    const IC = C('intensity'), BX = 420, LEN = 760;
    text(ctx, 'the energy each wave carries, as its average intensity', BX, 640, PAL.muted, { size: 19, align: 'left' });
    text(ctx, 'the first wave', BX - 22, 692, PAL.muted, { size: 18, align: 'right' });
    text(ctx, 'the second wave', BX - 22, 748, PAL.muted, { size: 18, align: 'right' });
    bar(ctx, BX, 692, LEN, st.I1, I_MAX, IC, fmt(st.I1, 0) + ' W/m\u00B2');
    bar(ctx, BX, 748, LEN, st.I2, I_MAX, IC, fmt(st.I2, 0) + ' W/m\u00B2');
  }

  function drawFlat(ctx, st) {
    panel(ctx, 200, st.E1, st.B1, 'the first wave', true);
    panel(ctx, 460, st.E2, st.B2, 'the second wave', false);
    drawBars(ctx, st);
    /* the two notes sit below the bars, where the deepest trough the sliders reach
       cannot come down on them */
    text(ctx, 'Each field is drawn to its own scale, since the magnetic field of a wave is the electric field divided by the speed of light.', 700, 794, PAL.muted, { size: 17, align: 'center' });
    if (!hasGL) text(ctx, 'This browser cannot show the waves in space, so they are drawn from the one viewpoint the book prints them from.', 700, 822, PAL.muted, { size: 17, align: 'center' });
  }

  /* ---------- the same two waves in space ---------- */
  let V = null, S = null, gA = null, gB = null, bar3 = null;
  const paint = [];
  const pmat = (col, extra) => { const m = F.mesh.mat(col(), extra); paint.push({ m, col }); return m; };
  function vec(g, col, r) {
    const shaft = new THREE.Mesh(F.mesh.geo().cyl, pmat(col)); shaft.scale.set(r, 1, r); g.add(shaft);
    const cone = new THREE.Mesh(F.mesh.geo().cone, pmat(col)); g.add(cone);
    return {
      set(a, b) {
        const A = new THREE.Vector3(a[0], a[1], a[2]), B = new THREE.Vector3(b[0], b[1], b[2]);
        const dd = B.clone().sub(A), L = dd.length();
        if (L < 0.03) { shaft.visible = cone.visible = false; return; }
        shaft.visible = cone.visible = true;
        const hl = Math.min(0.18, L * 0.45), u = dd.clone().normalize(), base = B.clone().sub(u.clone().multiplyScalar(hl));
        F.mesh.setStick(shaft, a, base.toArray());
        cone.position.copy(base).add(u.clone().multiplyScalar(hl / 2));
        cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), u);
        cone.scale.set(r * 3.3, hl, r * 3.3);
      },
      hide() { shaft.visible = cone.visible = false; },
    };
  }
  const SX0 = -2.5, SX1 = 2.5, SEP = 0.95;              /* the two beams, one above the other */
  const SE = 0.62 / E_MAX, SB = 0.40 / B_MAX;           /* scene units per volt per metre, and per tesla, each to its own scale as the flat view says */
  const N3 = 120, NC3 = 9;

  function beam(g, yOff, named) {
    const EC = () => C('electric-field'), BC = () => C('magnetic-field'), VC = () => C('velocity');
    const b = { yOff };
    const ax = F.mesh.polyline(g, [[SX0 - 0.3, yOff, 0], [SX1 + 0.55, yOff, 0]], PAL.rule);
    paint.push({ m: ax.material, col: () => PAL.rule });
    b.eLine = F.mesh.polyline(g, [[0, 0, 0], [0, 0, 0]], C('electric-field'));
    b.bLine = F.mesh.polyline(g, [[0, 0, 0], [0, 0, 0]], C('magnetic-field'));
    b.eLine.frustumCulled = false; b.bLine.frustumCulled = false;
    paint.push({ m: b.eLine.material, col: EC }); paint.push({ m: b.bLine.material, col: BC });
    b.eComb = []; b.bComb = [];
    for (let i = 0; i < NC3; i++) { b.eComb.push(vec(g, EC, 0.019)); b.bComb.push(vec(g, BC, 0.019)); }
    b.c = vec(g, VC, 0.021); b.c.set([SX1 + 0.2, yOff, 0], [SX1 + 0.62, yOff, 0]);
    b.name = V.label(named, [SX0 - 0.55, yOff - 0.58, 0], g, -4);
    b.name.style.background = 'transparent'; b.name.style.border = '0'; b.name.style.fontWeight = '500'; b.name.style.color = PAL.muted;
    return b;
  }

  function build() {
    if (!V || !V.scene || !gA) return;
    V.clear(); paint.length = 0;
    S = { a: beam(gA, SEP, 'the first wave'), b: beam(gA, -SEP, 'the second wave') };
    S.labE = V.label('E', [0, 0, 0], gA, 12);
    S.labB = V.label('B', [0, 0, 0], gA, 12);
    S.labE.style.color = C('electric-field'); S.labB.style.color = C('magnetic-field');
    V.invalidate();
  }

  function apply3d(st) {
    if (!S) return;
    paint.forEach((p) => { try { p.m.color.set(p.col()); } catch (e) { /* a palette value the renderer cannot read is left as it was */ } });
    S.labE.style.color = C('electric-field'); S.labB.style.color = C('magnetic-field');
    const put = (b, E0, B0) => {
      const ep = [], bp = [], kE = E0 * SE, kB = B0 * SB;
      for (let i = 0; i <= N3; i++) {
        const u = i / N3, x = SX0 + u * (SX1 - SX0), s = shape(u);
        ep.push(new THREE.Vector3(x, b.yOff + kE * s, 0));
        bp.push(new THREE.Vector3(x, b.yOff, kB * s));
      }
      b.eLine.geometry.setFromPoints(ep); b.bLine.geometry.setFromPoints(bp);
      for (let i = 0; i < NC3; i++) {
        const u = (i + 0.5) / NC3, x = SX0 + u * (SX1 - SX0), s = shape(u);
        if (Math.abs(kE * s) < 0.035) b.eComb[i].hide(); else b.eComb[i].set([x, b.yOff, 0], [x, b.yOff + kE * s, 0]);
        if (Math.abs(kB * s) < 0.035) b.bComb[i].hide(); else b.bComb[i].set([x, b.yOff, 0], [x, b.yOff, kB * s]);
      }
    };
    put(S.a, st.E1, st.B1); put(S.b, st.E2, st.B2);
    /* the two names ride on the second crest of the upper beam, in the right half
       of the stage, where neither the headline band above nor the beams' own names
       at the left can reach them */
    const uc = 1 - 3 / (4 * CYCLES), xc = SX0 + uc * (SX1 - SX0);
    V.move(S.labE, [xc, SEP + st.E1 * SE + 0.14, 0]);
    V.move(S.labB, [xc, SEP, st.B1 * SB + 0.14]);
    V.headline(`The second wave carries a field ${fmt(st.k, 2)} times the first wave\u2019s, so it carries ${fmt(st.k * st.k, 2)} times the energy: ${fmt(st.I2, 0)} W/m\u00B2 against ${fmt(st.I1, 0)} W/m\u00B2.`);
    V.invalidate();
  }

  function mount() {
    if (V || !hasGL) return;
    V = F.view3d(d.stage, {
      h: 700, dist: 7.0, tilt: 0.40, spin: 'off',
      views: [
        { label: 'three quarters', yaw: -0.40, pitch: 0.40 },
        { label: 'down the beams', yaw: -1.5708, pitch: 0.0 },
        { label: 'from the side', yaw: 0.0, pitch: 0.0 },
      ],
      pitch: [-1.22, 1.22], yaw: [-2.0, 0.5], zoomMin: 0.7, zoomMax: 2.4,
    });
    if (!V.scene) { V = null; return; }
    gA = V.part(0); gA.position.y = -0.22; V.setView(-0.40, 0.40);   /* the scene sits a little low, so no crest reaches the headline band */
    bar3 = d.stage.querySelector('.view3d-bar');
    try { build(); } catch (e) { console.error('sim-amplitude-squared: the scene could not be built', e); S = null; V = null; }
  }

  function show(mode) {
    if (mode === '3d') mount();
    const on3d = mode === '3d' && !!V;
    d.c.style.display = on3d ? 'none' : '';
    if (V) { V.wrap.style.display = on3d ? '' : 'none'; if (bar3) bar3.style.display = on3d ? '' : 'none'; }
  }

  function draw() {
    const st = state();
    show(st.mode);
    if (st.mode === '3d' && V) apply3d(st);
    else {
      const { ctx } = begin(d.c);
      topline(ctx, `The second wave carries a field ${fmt(st.k, 2)} times the first wave\u2019s, so it carries ${fmt(st.k * st.k, 2)} times the energy.`);
      drawFlat(ctx, st);
    }
    readout(d.readout,
      `\\frac{{\\kIave}'}{\\kIave} = \\left(\\frac{{\\kEfo}'}{\\kEfo}\\right)^2 = \\left(\\frac{${fmt(st.E2, 0)}\\ \\text{V/m}}{${fmt(st.E1, 0)}\\ \\text{V/m}}\\right)^2 = ${fmt(st.k * st.k, 2)}`,
      `A wave\u2019s energy is proportional to its amplitude squared, and for an electromagnetic wave the amplitude is the maximum field strength, so multiplying both fields by ${fmt(st.k, 2)} multiplies the energy the wave carries by ${fmt(st.k * st.k, 2)}. The magnetic amplitude follows the electric one, ${sci(st.B1, 2)} T on the first wave and ${sci(st.B2, 2)} T on the second, since each is its electric field divided by the speed of light.`);
  }

  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM · sim-intensity-three-ways · still · flat (root rule 28.1)
   The section writes the average intensity of a sinusoidal wave three ways
   and says that the three are one result. Here all three are worked at once
   on the same wave, so that the reader watches them land on one number
   rather than taking the algebra on trust, and the choice sets out whichever
   of the three the reader wants to read with its numbers. An intensity is a
   state of the wave and has no time in it, so the figure registers no cycle
   and takes no transport (rule 14).
   Scales: the two field bars 700 units at 4000 V/m and at the 1.33 × 10⁻⁵ T
   that 4000 V/m carries, each to its own scale; the graph fixed at 0 to
   4000 V/m across and 0 to 45 kW/m² up, which is above the 42.5 kW/m² the
   peak intensity reaches at the greatest field the slider gives.
===================================================================== */
(function () {
  const d = sim('sim-intensity-three-ways', 700);
  const eS = ctl(d.controls, { label: '\\kEfo', cls: 'electric-field', min: 200, max: 4000, step: 10, value: 2510, unit: 'V/m', dec: 0, aria: 'the maximum electric field strength of the wave' });
  const modeC = choice(d.controls, {
    label: '\\text{write the intensity from}',
    options: [
      { value: 'e', label: 'the electric amplitude' },
      { value: 'b', label: 'the magnetic amplitude' },
      { value: 'both', label: 'both amplitudes' },
    ],
    value: 'e', aria: 'which of the three expressions for the average intensity is worked through',
  });

  const E_MAX = 4000, B_MAX = E_MAX / CLIGHT, I_TOP = 45000;   /* the fixed ranges, from the slider's maximum */
  const BX = 430, LEN = 700;
  const state = () => ({ E0: eS.v, B0: eS.v / CLIGHT, I: iave(eS.v), mode: modeC.value });

  function draw() {
    const st = state();
    const { ctx } = begin(d.c);
    const EC = C('electric-field'), BC = C('magnetic-field'), IC = C('intensity');
    topline(ctx, `A peak electric field of ${fmt(st.E0, 0)} V/m carries ${fmt(st.I / 1000, 2)} kW/m\u00B2 on average and ${fmt(st.I / 500, 2)} kW/m\u00B2 at the crest.`);

    /* the two amplitudes, each on its own fixed scale */
    /* the amplitude the chosen expression does not use is drawn back a little, but
       never so far that its name or its number stops being readable (rule 26.6) */
    const dimE = st.mode === 'b' ? 0.55 : 1, dimB = st.mode === 'e' ? 0.55 : 1;
    text(ctx, 'E_0', BX - 22, 148, EC, { size: 24, weight: 600, align: 'right' });
    text(ctx, 'B_0', BX - 22, 208, BC, { size: 24, weight: 600, align: 'right' });
    bar(ctx, BX, 148, LEN, st.E0, E_MAX, alpha(EC, dimE), fmt(st.E0, 0) + ' V/m', EC);
    bar(ctx, BX, 208, LEN, st.B0, B_MAX, alpha(BC, dimB), sci(st.B0, 2) + ' T', BC);
    text(ctx, 'Each field is drawn to its own scale, so the two bars have the same length: the magnetic amplitude is the electric one divided by the speed of light.', 700, 258, PAL.muted, { size: 17, align: 'center' });

    /* the intensity against the electric amplitude */
    const box = { l: 200, r: 1230, t: 330, b: 610 };
    const { X, Y } = axes(ctx, box, [0, E_MAX], [0, I_TOP], {
      xl: 'peak electric field strength (V/m)', xc: EC,
      yl: 'intensity (kW/m\u00B2)', yc: IC,
      nx: 4, ny: 3, fx: (t) => fmt(t, 0), fy: (t) => fmt(t / 1000, 0),
    });
    dcurve(ctx, (E) => 2 * iave(E), 0, E_MAX, X, Y, alpha(IC, 0.7), 3, 160);
    curve(ctx, (E) => iave(E), 0, E_MAX, X, Y, IC, 5, 160);
    const pa = pinned(ctx, box, X, Y, st.E0, st.I, IC, fmt(st.I / 1000, 2) + ' kW/m\u00B2');
    const pp = pinned(ctx, box, X, Y, st.E0, 2 * st.I, IC, fmt(st.I / 500, 2) + ' kW/m\u00B2');
    line(ctx, pa.x, pa.y, pa.x, box.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
    label(ctx, 'I_ave', pa.x, pa.y, { side: 'right', color: IC, size: 20, gap: 26 });
    label(ctx, 'I_0, twice the average', pp.x, pp.y, { side: 'left', color: IC, size: 20, gap: 26 });

    const eTex = `\\kIave = \\frac{\\kc\\varepsilon_0\\kEfo^2}{2} = \\frac{(${sciTex(CLIGHT, 2)}\\ \\text{m/s})(${sciTex(EPS0, 2)}\\ \\text{C}^2/\\text{N}\\cdot\\text{m}^2)(${fmt(st.E0, 0)}\\ \\text{V/m})^2}{2} = ${sciTex(st.I, 2)}\\ \\text{W/m}^2`;
    const bTex = `\\kIave = \\frac{\\kc\\kBmago^2}{2\\mu_0} = \\frac{(${sciTex(CLIGHT, 2)}\\ \\text{m/s})(${sciTex(st.B0, 2)}\\ \\text{T})^2}{2(${sciTex(MU0, 2)}\\ \\text{T}\\cdot\\text{m/A})} = ${sciTex(st.I, 2)}\\ \\text{W/m}^2`;
    const abTex = `\\kIave = \\frac{\\kEfo\\kBmago}{2\\mu_0} = \\frac{(${fmt(st.E0, 0)}\\ \\text{V/m})(${sciTex(st.B0, 2)}\\ \\text{T})}{2(${sciTex(MU0, 2)}\\ \\text{T}\\cdot\\text{m/A})} = ${sciTex(st.I, 2)}\\ \\text{W/m}^2`;
    readout(d.readout, st.mode === 'e' ? eTex : st.mode === 'b' ? bTex : abTex,
      `The three expressions are different versions of one principle, that the energy in a wave is related to amplitude squared, and on this wave all three come to ${sci(st.I, 2)} W/m\u00B2. Because the expressions assume the wave is sinusoidal, the intensity at the crest is twice the average, which here is ${fmt(st.I / 500, 2)} kW/m\u00B2.`);
  }

  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM · sim-oven-intensity · still · flat (root rule 28.1)
   Example 24.4 takes one oven once: a power, an area, an intensity, and then
   both field amplitudes. The route is the section's skill and the common
   problem of its exercise set, so here the power and the two sides of the
   heated patch move and the three results answer, with the book's own
   1.00 kW over 30.0 by 40.0 cm as the state the figure opens on. The oven is
   a setting and not a motion, so the figure registers no cycle and takes no
   transport (rule 14). The oven, its floor and the two dimensions are untyped
   and drawn in ink; only the power arriving, the intensity on the patch and
   the two field amplitudes carry a hue.
   Scales: the floor 545 units to the metre, one fixed scale taken from the
   0.60 m the sliders reach; the three bars 420 units at 25 kW/m², at
   5.00 kV/m and at 1.67 × 10⁻⁵ T, which are the values the book's own oven
   sits in the middle of, and a value past the end of a track is drawn at the
   end with a chevron and its number written out.
===================================================================== */
(function () {
  const d = sim('sim-oven-intensity', 620);
  const pS = ctl(d.controls, { label: '\\kP', cls: 'power', min: 100, max: 2000, step: 50, value: 1000, unit: 'W', dec: 0, aria: 'the power the oven puts into the heated patch' });
  const wS = ctl(d.controls, { label: '\\text{width}', cls: '', min: 0.10, max: 0.60, step: 0.01, value: 0.40, unit: 'm', dec: 2, aria: 'the width of the heated patch' });
  const hS = ctl(d.controls, { label: '\\text{depth}', cls: '', min: 0.10, max: 0.60, step: 0.01, value: 0.30, unit: 'm', dec: 2, aria: 'the depth of the heated patch' });

  const BOX = { l: 170, r: 640, t: 150, b: 510 };
  const S = fitScale(BOX, { w: 0.72, h: 0.72 });        /* 500 units to the metre, fixed so the cavity is wider than the greatest patch the sliders reach */
  const CX = (BOX.l + BOX.r) / 2, CY = (BOX.t + BOX.b) / 2;
  const I_TOP = 25000, E_TOP = 5000, B_TOP = 5000 / CLIGHT;
  const BARX = 830, BARLEN = 420;
  const state = () => {
    const P = pS.v, w = wS.v, h = hS.v, A = w * h, I = P / A;
    return { P, w, h, A, I, E0: Math.sqrt((2 * I) / (CLIGHT * EPS0)), B0: Math.sqrt((2 * I) / (CLIGHT * EPS0)) / CLIGHT };
  };

  function drawOven(ctx, st) {
    const IC = C('intensity'), PC = C('power');
    /* the cavity floor, seen from above */
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.fillStyle = alpha(PAL.ink, 0.04);
    ctx.beginPath(); ctx.roundRect(CX - 0.36 * S, CY - 0.36 * S, 0.72 * S, 0.72 * S, 10); ctx.fill(); ctx.stroke(); ctx.restore();
    /* the magnetron behind the right wall, and the microwaves it sends in */
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.fillStyle = PAL.soft;
    ctx.beginPath(); ctx.roundRect(CX + 0.36 * S + 82, CY - 26, 44, 52, 6); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, 'the source', CX + 0.36 * S + 104, CY + 46, PAL.muted, { size: 17, align: 'center' });
    /* the heated patch */
    const pw = st.w * S, ph = st.h * S;
    ctx.save(); ctx.fillStyle = alpha(IC, 0.18); ctx.strokeStyle = IC; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.rect(CX - pw / 2, CY - ph / 2, pw, ph); ctx.fill(); ctx.stroke(); ctx.restore();
    /* the power comes in from the source outside the right wall, so the arrow and
       its reading never have to share the floor with the patch, however large it is */
    arrow(ctx, CX + 0.36 * S + 76, CY, CX + 0.36 * S + 10, CY, PC, 6);
    text(ctx, fmt(st.P, 0) + ' W', CX + 0.36 * S + 43, CY - 28, PC, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    const iTxt = fmt(st.I, 0) + ' W/m\u00B2';
    ctx.save(); ctx.font = '600 21px sans-serif'; const iW = ctx.measureText(iTxt).width; ctx.restore();
    hbracket(ctx, CX - pw / 2, CX + pw / 2, CY + ph / 2 + 26, PAL.muted, fmt(st.w, 2) + ' m', { side: 'below', size: 19 });
    /* the intensity sits in the patch where the patch is wide enough to hold it, and below the
       width bracket where it is not, so that it never runs over the depth bracket's number */
    if (pw > iW + 28) text(ctx, iTxt, CX, CY, IC, { size: 21, weight: 600, align: 'center', bg: PAL.panel });
    else text(ctx, iTxt, CX + pw / 2 + 12, CY, IC, { size: 21, weight: 600, align: 'left', bg: PAL.panel });
    vbracket(ctx, CX - pw / 2 - 26, CY - ph / 2, CY + ph / 2, PAL.muted, fmt(st.h, 2) + ' m', -1, { side: 'left', size: 19 });
    text(ctx, 'the oven floor, drawn to one fixed scale', CX, BOX.b + 74, PAL.muted, { size: 17, align: 'center' });
  }

  function drawBars(ctx, st) {
    const IC = C('intensity'), EC = C('electric-field'), BC = C('magnetic-field');
    const rows = [
      { y: 200, name: 'I_ave', color: IC, v: st.I, max: I_TOP, val: fmt(st.I, 0) + ' W/m\u00B2', end: '25 kW/m\u00B2' },
      { y: 320, name: 'E_0', color: EC, v: st.E0, max: E_TOP, val: fmt(st.E0, 0) + ' V/m', end: '5.00 kV/m' },
      { y: 440, name: 'B_0', color: BC, v: st.B0, max: B_TOP, val: sci(st.B0, 2) + ' T', end: '1.67 \u00D7 10\u207B\u2075 T' },
    ];
    rows.forEach((r) => {
      text(ctx, r.name, BARX - 20, r.y, r.color, { size: 24, weight: 600, align: 'right' });
      bar(ctx, BARX, r.y, BARLEN, r.v, r.max, r.color, r.val);
      text(ctx, r.end, BARX + BARLEN, r.y + 26, PAL.muted, { size: 17, align: 'center' });
    });
    /* the peak intensity, twice the average, marked on the first track */
    /* the tick stands above the track rather than across it, so it never runs
       through the number written at the end of the bar */
    const px = BARX + (Math.min(2 * st.I, I_TOP) / I_TOP) * BARLEN;
    line(ctx, px, 200 - 24, px, 200 - 8, alpha(IC, 0.75), 3, [6, 6]);
    text(ctx, 'I_0', px, 200 - 40, IC, { size: 19, weight: 600, align: 'center', bg: PAL.panel });
  }

  function draw() {
    const st = state();
    const { ctx } = begin(d.c);
    topline(ctx, `${fmt(st.P, 0)} W spread over ${fmt(st.A, 3)} m\u00B2 is ${fmt(st.I / 1000, 2)} kW/m\u00B2, and a wave of that intensity carries ${fmt(st.E0, 0)} V/m and ${sci(st.B0, 2)} T.`);
    drawOven(ctx, st);
    drawBars(ctx, st);
    readout(d.readout,
      `\\kIntens = \\frac{\\kP}{A} = \\frac{${fmt(st.P, 0)}\\ \\text{W}}{${fmt(st.A, 3)}\\ \\text{m}^2} = ${sciTex(st.I, 2)}\\ \\text{W/m}^2`,
      `Taking this as the average intensity and rearranging the first expression gives the electric amplitude, ${sci(st.E0, 2)} V/m, and dividing that by the speed of light gives the magnetic amplitude, ${sci(st.B0, 2)} T. The peak intensity is twice the average, ${sci(2 * st.I, 2)} W/m\u00B2. As always, a relatively strong electric field is accompanied by a relatively weak magnetic field, because the speed of light is a large number.`);
  }

  register(d.fig, { update: () => {}, draw });
})();
};
