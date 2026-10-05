/* Figures for section 24.4 Energy in Electromagnetic Waves. Intensity, the two
   fields, velocity, power, the sides of the heated patch and its area wear their
   category hues; the two waves of Figure 24.22 and the oven of Example 24.4 are
   the section's referents. The permittivity and the permeability of free space
   and every count are in ink, as are the frame of every figure. Nothing
   here moves: the energy a wave carries, the intensity it delivers and the field
   strengths that follow from it are all states of the wave, with no period and no
   clock in them, so every figure registers no cycle, takes no transport and
   redraws on its sliders alone (root rule 14). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['24.4'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, topline, label, hbracket, vbracket, axes, curve, pinned, fitScale } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) { const n = el('small', null, small); host.appendChild(n); F.renderMath(n); } }

const TAU = Math.PI * 2;
const CLIGHT = 3.00e8;                   /* the speed of light, in metres per second */
const EPS0 = 8.85e-12;                   /* the permittivity of free space */
const MU0 = 4 * Math.PI * 1e-7;          /* the permeability of free space */
/* the average intensity of a continuous sinusoidal wave of electric amplitude E0 */
const iave = (E0) => (CLIGHT * EPS0 * E0 * E0) / 2;

const SUPS = '\u2070\u00B9\u00B2\u00B3\u2074\u2075\u2076\u2077\u2078\u2079';
const supOf = (e) => String(e).replace(/-/g, '\u207B').replace(/[0-9]/g, (c) => SUPS[+c]);
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
   FIGURE 24.22 · sim-amplitude-squared · still · flat (root rule 28.1)
   The book prints one wave and a second of twice the amplitude carrying four
   times the energy, and asks the reader to take the squaring on trust. Here
   the second wave takes any amplitude the slider gives it and the two bars
   beneath answer, so the squaring is something to watch rather than to
   believe; the figure opens on the doubling the book draws, and the doubling
   is a dashed circle on the second slider wherever the first stands. The view
   is the book's own oblique one, with the electric field in the upright plane
   and the magnetic field in the plane at right angles; the same arrangement
   in space is Figure 24.7's, so no scene is mounted here (root rule 28.5).
   Scales: the electric field 140 units at 3000 V/m, the magnetic field 86
   units at 1.00 × 10⁻⁵ T, each to its own scale, as the figure says; the
   intensity bars 760 units at 11.9 kW/m², which is what 3000 V/m carries.
===================================================================== */
(function () {
  const d = sim('sim-amplitude-squared', 840);
  const e1S = ctl(d.controls, { label: '\\kEfo', cls: 'electric-field', min: 400, max: 1500, step: 50, value: 1000, unit: 'V/m', dec: 0, aria: 'the maximum electric field strength of the first wave' });
  const e2S = ctl(d.controls, { label: '{\\kEfo}\'', cls: 'electric-field', min: 400, max: 3000, step: 50, value: 2000, unit: 'V/m', dec: 0, aria: 'the maximum electric field strength of the second wave',
    specials: [{ at: () => 2 * e1S.v, label: 'twice' }] });

  const E_MAX = 3000, B_MAX = E_MAX / CLIGHT, I_MAX = iave(E_MAX);
  const UPV = 140 / E_MAX, UPB = 86 / B_MAX;            /* canvas units per volt per metre, and per tesla */
  const BX0 = 340, BX1 = 1160, CYCLES = 2;
  const KX = -0.52, KY = 0.28;                          /* the oblique direction the magnetic plane runs in */
  const shape = (u) => Math.sin(TAU * CYCLES * u);
  const state = () => {
    const E1 = e1S.v, E2 = e2S.v;
    return { E1, E2, B1: E1 / CLIGHT, B2: E2 / CLIGHT, I1: iave(E1), I2: iave(E2), k: E2 / E1 };
  };

  function panel(ctx, y0, E0, B0, name, names, rc) {
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
    text(ctx, name, BX0 - 40, y0, rc, { size: 19, align: 'right' });
    if (!names) return;
    /* the two fields are named once, on the first wave, since a kind is labelled
       once and on one representative (rule 26.7) */
    const uc = 1 / (4 * CYCLES);                        /* the first crest */
    const ec = PT(uc, E0 * UPV, 0), bc = PT(uc, 0, B0 * UPB);
    text(ctx, 'E', ec[0] - 16, ec[1] - 16, C('electric-field'), { size: 24, weight: 600, align: 'right', bg: PAL.panel });
    text(ctx, 'B', bc[0], bc[1] + 26, C('magnetic-field'), { size: 24, weight: 600, align: 'center', bg: PAL.panel });
  }

  function drawBars(ctx, st) {
    const IC = C('intensity'), W1 = F.ref('wave-1'), W2 = F.ref('wave-2'), BX = 420, LEN = 760;
    text(ctx, 'the energy each wave carries, as its average intensity', BX, 640, IC, { size: 19, align: 'left' });
    text(ctx, 'the first wave', BX - 22, 692, W1, { size: 18, align: 'right' });
    text(ctx, 'the second wave', BX - 22, 748, W2, { size: 18, align: 'right' });
    bar(ctx, BX, 692, LEN, st.I1, I_MAX, W1, fmt(st.I1, 0) + ' W/m\u00B2', IC);
    bar(ctx, BX, 748, LEN, st.I2, I_MAX, W2, fmt(st.I2, 0) + ' W/m\u00B2', IC);
  }

  function drawFlat(ctx, st) {
    panel(ctx, 200, st.E1, st.B1, 'the first wave', true, F.ref('wave-1'));
    panel(ctx, 460, st.E2, st.B2, 'the second wave', false, F.ref('wave-2'));
    drawBars(ctx, st);
  }

  function draw() {
    const st = state();
    const { ctx } = begin(d.c);
    topline(ctx, `The second wave carries a field ${fmt(st.k, 2)} times the first wave\u2019s, so it carries ${fmt(st.k * st.k, 2)} times the energy.`);
    drawFlat(ctx, st);
    readout(d.readout,
      `\\frac{{\\kIave}'}{\\kIave} = \\left(\\frac{{\\kEfo}'}{\\kEfo}\\right)^2 = \\left(\\frac{${fmt(st.E2, 0)}\\ \\text{V/m}}{${fmt(st.E1, 0)}\\ \\text{V/m}}\\right)^2 = ${fmt(st.k * st.k, 2)}`,
      `$\\kBmago$ follows $\\kEfo$: $${sciTex(st.B1, 2)}\\ \\text{T}$ on the first wave and $${sciTex(st.B2, 2)}\\ \\text{T}$ on the second.`);
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
  /* the three expressions are one quantity rewritten, so the readout bends from one into the next:
     the amplitude term the new form uses in place of the old one bends into it, and a constant with
     no counterpart fades out as the other arrives */
  const { formula: fx, note } = F.readout(d);
  let shown = '', form = 'e';
  const SWAP = { 'e>b': { E: 'B' }, 'b>e': { B: 'E' } };

  function draw() {
    const st = state();
    const { ctx } = begin(d.c);
    const EC = C('electric-field'), BC = C('magnetic-field'), IC = C('intensity');
    topline(ctx, `A peak electric field of ${fmt(st.E0, 0)} V/m carries ${fmt(st.I / 1000, 2)} kW/m\u00B2 on average and ${fmt(st.I / 500, 2)} kW/m\u00B2 at the crest.`);

    /* the two amplitudes, each on its own fixed scale */
    /* the amplitude the chosen expression does not use is drawn back a little, but
       never so far that its name or its number stops being readable (rule 26.6) */
    const dimE = modeC.mix((m) => (m === 'b' ? 0.55 : 1)), dimB = modeC.mix((m) => (m === 'e' ? 0.55 : 1));
    text(ctx, 'E_0', BX - 22, 148, EC, { size: 24, weight: 600, align: 'right' });
    text(ctx, 'B_0', BX - 22, 208, BC, { size: 24, weight: 600, align: 'right' });
    bar(ctx, BX, 148, LEN, st.E0, E_MAX, alpha(EC, dimE), fmt(st.E0, 0) + ' V/m', EC);
    bar(ctx, BX, 208, LEN, st.B0, B_MAX, alpha(BC, dimB), sci(st.B0, 2) + ' T', BC);
    text(ctx, 'The magnetic amplitude is the electric one divided by the speed of light, so on their own scales the two bars are one length.', 700, 258, PAL.muted, { size: 17, align: 'center' });

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
    if (pa.y - pp.y < 44) {
      /* near the origin the two points sit together, so both names go up and to the right, clear of the axis */
      line(ctx, pp.x + 6, pp.y - 6, pp.x + 24, pp.y - 56, alpha(IC, 0.5), 1.5, [5, 6]);
      text(ctx, 'I_0, twice the average', pp.x + 30, pp.y - 64, IC, { size: 20, weight: 600, bg: PAL.panel });
      text(ctx, 'I_ave', pa.x + 30, pa.y - 28, IC, { size: 20, weight: 600, bg: PAL.panel });
    } else {
      label(ctx, 'I_ave', pa.x, pa.y, { side: 'right', color: IC, size: 20, gap: 26 });
      label(ctx, 'I_0, twice the average', pp.x, pp.y, { side: 'left', color: IC, size: 20, gap: 26 });
    }

    const mk = (k, x) => `\\mk{${k}}{${x}}`;
    const res = mk('res', `${sciTex(st.I, 2)}\\ \\text{W/m}^2`), I = mk('I', '\\kIave'), two = mk('two', '2'), mu = mk('mu', '\\mu_0'), c = mk('c', '\\kc');
    const muN = `(${sciTex(MU0, 2)}\\ \\text{T}\\cdot\\text{m/A})`, cN = `(${sciTex(CLIGHT, 2)}\\ \\text{m/s})`;
    const F3 = {
      e: `${I} = \\frac{${c}${mk('eps', '\\varepsilon_0')}${mk('E', '\\kEfo^2')}}{${two}} = ${mk('ne', `\\frac{${cN}(${sciTex(EPS0, 2)}\\ \\text{C}^2/\\text{N}\\cdot\\text{m}^2)(${fmt(st.E0, 0)}\\ \\text{V/m})^2}{2}`)} = ${res}`,
      b: `${I} = \\frac{${c}${mk('B', '\\kBmago^2')}}{${two}${mu}} = ${mk('nb', `\\frac{${cN}(${sciTex(st.B0, 2)}\\ \\text{T})^2}{2${muN}}`)} = ${res}`,
      both: `${I} = \\frac{${mk('E', '\\kEfo')}${mk('B', '\\kBmago')}}{${two}${mu}} = ${mk('nab', `\\frac{(${fmt(st.E0, 0)}\\ \\text{V/m})(${sciTex(st.B0, 2)}\\ \\text{T})}{2${muN}}`)} = ${res}`,
    };
    const f = F3[st.mode];
    if (f !== shown) { const km = SWAP[form + '>' + st.mode]; shown = f; F.morph(fx, f, km ? { keyMap: km } : {}); form = st.mode; }
    note.textContent = '';
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
   transport (rule 14). The oven is the section's referent; the power
   arriving, the two sides of the patch, the intensity on it and the two field
   amplitudes wear their category hues.
   Scales: the floor 545 units to the metre, one fixed scale taken from the
   0.60 m the sliders reach; the three bars 420 units at 25 kW/m², at
   5.00 kV/m and at 1.67 × 10⁻⁵ T, which are the values the book's own oven
   sits in the middle of, and a value past the end of a track is drawn at the
   end with a chevron and its number written out.
===================================================================== */
(function () {
  const d = sim('sim-oven-intensity', 620);
  const pS = ctl(d.controls, { label: '\\kP', cls: 'power', min: 100, max: 2000, step: 50, value: 1000, unit: 'W', dec: 0, aria: 'the power the oven puts into the heated patch' });
  const wS = ctl(d.controls, { label: '\\text{width}', cls: 'position', min: 0.10, max: 0.60, step: 0.01, value: 0.40, unit: 'm', dec: 2, aria: 'the width of the heated patch' });
  const hS = ctl(d.controls, { label: '\\text{depth}', cls: 'position', min: 0.10, max: 0.60, step: 0.01, value: 0.30, unit: 'm', dec: 2, aria: 'the depth of the heated patch' });

  const BOX = { l: 170, r: 640, t: 150, b: 510 };
  const S = fitScale(BOX, { w: 0.72, h: 0.72 });        /* 500 units to the metre, fixed so the cavity is wider than the greatest patch the sliders reach */
  const CX = (BOX.l + BOX.r) / 2, CY = (BOX.t + BOX.b) / 2;
  const I_TOP = 25000, E_TOP = 5000, B_TOP = 5000 / CLIGHT;
  const BARX = 830, BARLEN = 340;
  const state = () => {
    const P = pS.v, w = wS.v, h = hS.v, A = w * h, I = P / A;
    return { P, w, h, A, I, E0: Math.sqrt((2 * I) / (CLIGHT * EPS0)), B0: Math.sqrt((2 * I) / (CLIGHT * EPS0)) / CLIGHT };
  };

  function drawOven(ctx, st) {
    const IC = C('intensity'), PC = C('power'), XC = C('position'), OC = F.ref('oven');
    /* the cavity floor, seen from above */
    ctx.save(); ctx.strokeStyle = OC; ctx.lineWidth = 3; ctx.fillStyle = alpha(PAL.ink, 0.04);
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
    const iW = F.measure(ctx, iTxt, { size: 21, weight: 600 });
    /* the two sides are measured outside the cavity walls, so neither bracket nor its number crosses a wall */
    const yb = CY + 0.36 * S + 20, xb = CX - 0.36 * S - 20;
    line(ctx, CX - pw / 2, CY + ph / 2, CX - pw / 2, yb, alpha(XC, 0.4), 2, [4, 8]); line(ctx, CX + pw / 2, CY + ph / 2, CX + pw / 2, yb, alpha(XC, 0.4), 2, [4, 8]);
    line(ctx, CX - pw / 2, CY - ph / 2, xb, CY - ph / 2, alpha(XC, 0.4), 2, [4, 8]); line(ctx, CX - pw / 2, CY + ph / 2, xb, CY + ph / 2, alpha(XC, 0.4), 2, [4, 8]);
    hbracket(ctx, CX - pw / 2, CX + pw / 2, yb, XC, fmt(st.w, 2) + ' m', { side: 'below', size: 19 });
    /* the intensity sits in the patch where the patch is wide enough to hold it, and below the
       width bracket where it is not, so that it never runs over the depth bracket's number */
    if (pw > iW + 28) text(ctx, iTxt, CX, CY, IC, { size: 21, weight: 600, align: 'center', bg: PAL.panel });
    else text(ctx, iTxt, CX + pw / 2 + 12, CY, IC, { size: 21, weight: 600, align: 'left', bg: PAL.panel });
    vbracket(ctx, xb, CY - ph / 2, CY + ph / 2, XC, fmt(st.h, 2) + ' m', -1, { side: 'left', size: 19 });
    text(ctx, 'the oven floor, seen from above', CX, BOX.b + 74, OC, { size: 17, align: 'center' });
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
    line(ctx, px, 200 - 34, px, 200 - 18, alpha(IC, 0.75), 3, [6, 6]);
    text(ctx, 'I_0', px, 200 - 50, IC, { size: 19, weight: 600, align: 'center', bg: PAL.panel });
  }

  function draw() {
    const st = state();
    const { ctx } = begin(d.c);
    topline(ctx, `${fmt(st.P, 0)} W spread over ${fmt(st.A, 3)} m\u00B2 is ${fmt(st.I / 1000, 2)} kW/m\u00B2, and a wave of that intensity carries ${fmt(st.E0, 0)} V/m and ${sci(st.B0, 2)} T.`);
    drawOven(ctx, st);
    drawBars(ctx, st);
    readout(d.readout,
      `\\kIntens = \\frac{\\kP}{\\karea} = \\frac{${fmt(st.P, 0)}\\ \\text{W}}{${fmt(st.A, 3)}\\ \\text{m}^2} = ${sciTex(st.I, 2)}\\ \\text{W/m}^2`,
      `The peak intensity is twice the average, $${sciTex(2 * st.I, 2)}\\ \\text{W/m}^2$.`);
  }

  register(d.fig, { update: () => {}, draw });
})();
};
