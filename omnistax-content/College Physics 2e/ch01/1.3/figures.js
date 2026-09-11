/* Figures for section 1.3 Accuracy, Precision, and Significant Figures. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['1.3'] = function (root, F) {
const { el, fmt, tex, PAL, alpha, REDUCED, ctl, cycle, register, begin, line, dot, text, headline, hbracket, vbracket, strip, nice, FONT } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- helpers for the whole section ---------- */
/* The significant figures of a number written with dec decimals: start at the first nonzero digit on the left and count through the last digit written on the right. */
function sigfigs(x, dec) { return Math.abs(x).toFixed(dec).replace('.', '').replace(/^0+/, '').length; }
/* A number rounded to n significant figures, as a string: plain digits where they fit, and JavaScript's e-notation where the number has more digits before the point than n. */
function roundSig(x, n) { return Number(x).toPrecision(Math.max(1, n)); }
const SUP = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
/* The rounded string for the canvas ("4.0 × 10²") and for KaTeX ("4.0 \times 10^{2}"). */
const plainSig = (s) => (s.includes('e') ? s.split('e')[0] + ' × 10' + s.split('e')[1].replace('+', '').split('').map((c) => SUP[c]).join('') : s);
const texSig = (s) => (s.includes('e') ? s.split('e')[0] + ' \\times 10^{' + s.split('e')[1].replace('+', '') + '}' : s);
const WORDS = ['no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const words = (n) => WORDS[n] ?? String(n);
/* A fixed set of eight offsets for the GPS attempts, so the picture is the same on every visit. They sum to zero, so the hollow marker sits exactly where the offset slider puts it, and their root-mean-square distance is one, so the spread slider reads in rings. */
const ATTEMPTS = (() => {
  const raw = [[-1.2, 0.5], [0.9, -1.1], [0.3, 1.3], [-0.6, -0.9], [1.4, 0.4], [-1.1, -0.3], [0.5, 0.2], [-0.2, -0.1]];
  const rms = Math.sqrt(raw.reduce((s, [x, y]) => s + x * x + y * y, 0) / raw.length);
  return raw.map(([x, y]) => ({ x: x / rms, y: y / rms }));
})();
/* sprites */
function house(ctx, x, y, color) {
  ctx.save(); ctx.fillStyle = color; ctx.beginPath(); ctx.moveTo(x - 16, y + 12); ctx.lineTo(x - 16, y - 4); ctx.lineTo(x, y - 18); ctx.lineTo(x + 16, y - 4); ctx.lineTo(x + 16, y + 12); ctx.closePath(); ctx.fill();
  ctx.fillStyle = PAL.panel; ctx.fillRect(x - 4, y, 8, 12); ctx.restore();
}
function bar(ctx, x, y, w, h, filled) {
  ctx.save(); ctx.lineWidth = 3; ctx.strokeStyle = PAL.ink; ctx.fillStyle = filled ? PAL.ink : PAL.panel; ctx.fillRect(x, y - h / 2, w, h); ctx.strokeRect(x, y - h / 2, w, h); ctx.restore();
}
/* one line of text in several colours: runs of [string, colour, weight], left-aligned at x */
function runs(ctx, parts, x, y, size) {
  ctx.save(); ctx.textAlign = 'left'; ctx.textBaseline = 'middle'; let cx = x;
  for (const [s, c, w] of parts) { ctx.font = `${w || 400} ${size}px ${FONT}`; ctx.fillStyle = c; ctx.fillText(s, cx, y); cx += ctx.measureText(s).width; }
  ctx.restore();
}

/* =====================================================================
   FIGURE 1.23: the bull's-eye. Eight GPS attempts scatter about a centre
   that the offset slider moves away from the restaurant, with a spread
   the spread slider sets. Nothing moves; the picture answers the sliders.
===================================================================== */
(function () {
  const d = sim('sim-target', 620);
  const S = ctl(d.controls, { label: '\\text{spread}', cls: '', min: 0.1, max: 3, step: 0.1, value: 2, unit: 'rings', dec: 1, aria: 'spread of the attempts' });
  const O = ctl(d.controls, { label: '\\text{offset}', cls: '', min: 0, max: 3, step: 0.1, value: 0.3, unit: 'rings', dec: 1, aria: 'offset of the centre of the attempts' });
  /* a still picture: it registers no cycle, so it gets no transport, and a slider's input alone redraws it */
  const CX = 400, CY = 340, RING = 44, ANG = (-25 * Math.PI) / 180;
  function draw() {
    const { ctx } = begin(d.c);
    const lowP = S.v >= 1, lowA = O.v >= 1;
    /* the target: five rings about the restaurant */
    for (let i = 5; i >= 1; i--) { ctx.save(); ctx.beginPath(); ctx.arc(CX, CY, i * RING, 0, Math.PI * 2); ctx.fillStyle = i % 2 ? PAL.soft : PAL.panel; ctx.fill(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 2; ctx.stroke(); ctx.restore(); }
    line(ctx, CX - 5 * RING - 16, CY, CX + 5 * RING + 16, CY, PAL.rule, 1.5); line(ctx, CX, CY - 5 * RING - 16, CX, CY + 5 * RING + 16, PAL.rule, 1.5);
    house(ctx, CX, CY, PAL.ink);
    text(ctx, 'the restaurant', CX, CY + 5 * RING + 40, PAL.muted, { size: 17, align: 'center' });
    /* the attempts about their centre, and the centre against the restaurant */
    const mx = CX + O.v * RING * Math.cos(ANG), my = CY + O.v * RING * Math.sin(ANG);
    line(ctx, mx, my, CX, CY, PAL.muted, 2, [6, 8]);
    for (const p of ATTEMPTS) dot(ctx, mx + S.v * RING * p.x, my + S.v * RING * p.y, PAL.ink, true, 9);
    dot(ctx, mx, my, PAL.ink, false, 11);
    /* the legend */
    const lx = 790;
    text(ctx, lowP ? 'low precision' : 'high precision', lx, 170, PAL.ink, { size: 44, weight: 700 });
    text(ctx, lowP ? 'the attempts are spread far apart from one another' : 'the attempts agree closely with one another', lx, 214, PAL.muted, { size: 20 });
    text(ctx, lowA ? 'low accuracy' : 'high accuracy', lx, 300, PAL.ink, { size: 44, weight: 700 });
    text(ctx, lowA ? 'their centre is far from the restaurant' : 'their centre is close to the restaurant', lx, 344, PAL.muted, { size: 20 });
    dot(ctx, lx + 10, 440, PAL.ink, true, 9); text(ctx, 'one attempt of the GPS to locate the restaurant', lx + 34, 440, PAL.muted, { size: 20 });
    dot(ctx, lx + 10, 482, PAL.ink, false, 11); text(ctx, 'the centre of the eight attempts', lx + 34, 482, PAL.muted, { size: 20 });
    line(ctx, lx, 524, lx + 20, 524, PAL.muted, 2, [6, 8]); text(ctx, 'from that centre to the restaurant', lx + 34, 524, PAL.muted, { size: 20 });
    headline(ctx, 'a spread of ' + fmt(S.v, 1) + ' rings means ' + (lowP ? 'low' : 'high') + ' precision, and an offset of ' + fmt(O.v, 1) + ' rings means ' + (lowA ? 'low' : 'high') + ' accuracy');
    readout(d.readout, `\\text{spread} = ${fmt(S.v, 1)}\\ \\text{rings}, \\quad \\text{offset of the centre} = ${fmt(O.v, 1)}\\ \\text{rings}`,
      'Precision is about how closely the attempts agree with one another, and accuracy about how close they are to the correct value. A system can have either without the other.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: percent uncertainty. The four weekly weights of Example 1.2 on a
   number line, the average with its band A ± δA, and beneath it a bag
   half as heavy with the same δA. Nothing moves.
===================================================================== */
(function () {
  const d = sim('sim-percent', 560);
  const A = ctl(d.controls, { label: 'A', cls: '', min: 1, max: 10, step: 0.1, value: 5.1, unit: 'lb', dec: 1, aria: 'average weight' });
  const dA = ctl(d.controls, { label: '\\delta A', cls: '', min: 0.1, max: 1, step: 0.1, value: 0.4, unit: 'lb', dec: 1, aria: 'uncertainty in the weight' });
  /* a still picture: it registers no cycle, so it gets no transport, and a slider's input alone redraws it */
  const WEEKS = [4.8, 5.3, 4.9, 5.4];
  const pct = (a, u) => Math.round((100 * u) / a);
  function draw() {
    const { ctx } = begin(d.c);
    const half = A.v / 2, p = pct(A.v, dA.v), ph = pct(half, dA.v);
    const span = nice(Math.min(half - dA.v, 4.8) - 0.3, Math.max(A.v + dA.v, 5.4) + 0.3, 6), step = (span.hi - span.lo) / span.n;
    const L = 180, R = 1300, X = (w) => L + ((R - L) * (w - span.lo)) / (span.hi - span.lo);
    const lines = [{ y: 210, a: A.v, dec: 1, title: 'the bag of apples', weeks: true }, { y: 430, a: half, dec: 2, title: 'a bag half as heavy, with the same uncertainty', weeks: false }];
    for (const ln of lines) {
      const { y, a } = ln;
      text(ctx, ln.title, L, y - 104, PAL.ink, { size: 22, weight: 600 });
      ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.1); ctx.fillRect(X(a - dA.v), y - 16, X(a + dA.v) - X(a - dA.v), 32); ctx.restore();
      line(ctx, L, y, R, y, PAL.muted, 3);
      for (let m = span.lo; m <= span.hi + 1e-9; m += step) { line(ctx, X(m), y - 8, X(m), y + 8, PAL.muted, 2); text(ctx, fmt(m, 0) + ' lb', X(m), y + 28, PAL.muted, { size: 17, align: 'center' }); }
      if (ln.weeks) {
        WEEKS.slice().sort((u, v) => u - v).forEach((w, i) => { line(ctx, X(w), y - 28, X(w), y - 4, PAL.ink, 3); text(ctx, fmt(w, 1) + ' lb', X(w), y - (i % 2 ? 66 : 42), PAL.ink, { size: 17, align: 'center' }); });
        text(ctx, 'the four weekly weights of Example 1.2', R, y - 104, PAL.muted, { size: 17, align: 'right' });
      }
      dot(ctx, X(a), y, PAL.ink, true, 10);
      hbracket(ctx, X(a - dA.v), X(a + dA.v), y + 84, PAL.ink, fmt(a, ln.dec) + ' lb ± ' + fmt(dA.v, 1) + ' lb, which is ± ' + pct(a, dA.v) + '%');
    }
    headline(ctx, fmt(A.v, 1) + ' lb ± ' + fmt(dA.v, 1) + ' lb is ' + fmt(A.v, 1) + ' lb ± ' + p + '%');
    readout(d.readout, `\\%\\,\\text{unc} = \\frac{\\delta A}{A} \\times 100\\% = \\frac{${fmt(dA.v, 1)}\\ \\text{lb}}{${fmt(A.v, 1)}\\ \\text{lb}} \\times 100\\% = ${p}\\%`,
      'The same uncertainty on a bag half as heavy, ' + fmt(half, 2) + ' lb ± ' + fmt(dA.v, 1) + ' lb, is ' + ph + '%, so the lighter the bag, the larger the share of it the uncertainty is.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: the floor. The 4.00 m by 3.00 m floor to scale, the largest and
   smallest floors the uncertainties allow as dashed outlines about the
   same centre, and the ring between them shaded. Nothing moves.
===================================================================== */
(function () {
  const d = sim('sim-area', 620);
  const pL = ctl(d.controls, { label: '\\text{length}', cls: '', min: 0, max: 10, step: 0.5, value: 2, unit: '%', dec: 1, aria: 'percent uncertainty in the length' });
  const pW = ctl(d.controls, { label: '\\text{width}', cls: '', min: 0, max: 10, step: 0.5, value: 1, unit: '%', dec: 1, aria: 'percent uncertainty in the width' });
  /* a still picture: it registers no cycle, so it gets no transport, and a slider's input alone redraws it */
  const LEN = 4, WID = 3, K = 130, CX = 420, CY = 330;
  const pc = (p) => (Number.isInteger(p) ? fmt(p, 0) : fmt(p, 1)) + '%';
  const pcTex = (p) => (Number.isInteger(p) ? fmt(p, 0) : fmt(p, 1)) + '\\%';
  function outline(ctx, w, h, width, dash) { ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = width; if (dash) ctx.setLineDash(dash); ctx.strokeRect(CX - w / 2, CY - h / 2, w, h); ctx.restore(); }
  function draw() {
    const { ctx } = begin(d.c);
    const a = LEN * (1 + pL.v / 100), b = WID * (1 + pW.v / 100), a2 = LEN * (1 - pL.v / 100), b2 = WID * (1 - pW.v / 100);
    const pA = pL.v + pW.v, dArea = (LEN * WID * pA) / 100;
    /* the ring between the largest and the smallest floor */
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.1); ctx.beginPath(); ctx.rect(CX - (a * K) / 2, CY - (b * K) / 2, a * K, b * K); ctx.rect(CX - (a2 * K) / 2, CY - (b2 * K) / 2, a2 * K, b2 * K); ctx.fill('evenodd'); ctx.restore();
    outline(ctx, a * K, b * K, 2.5, [10, 10]); outline(ctx, a2 * K, b2 * K, 2.5, [10, 10]); outline(ctx, LEN * K, WID * K, 4);
    text(ctx, '12.0 m²', CX, CY, PAL.ink, { size: 26, weight: 600, align: 'center' });
    const bot = CY + (b * K) / 2, rgt = CX + (a * K) / 2;
    hbracket(ctx, CX - (LEN * K) / 2, CX + (LEN * K) / 2, bot + 50, PAL.ink, '4.00 m ± ' + pc(pL.v));
    vbracket(ctx, rgt + 40, CY - (WID * K) / 2, CY + (WID * K) / 2, PAL.ink, '3.00 m ± ' + pc(pW.v), 1);
    /* the key */
    const px = 930;
    const row = (y, swatch, head, val) => { swatch(y); text(ctx, head, px + 44, y, PAL.muted, { size: 20, weight: 600 }); text(ctx, val, px + 44, y + 34, PAL.ink, { size: 22 }); };
    const dashed = (y) => line(ctx, px, y, px + 30, y, PAL.ink, 2.5, [8, 8]);
    row(150, (y) => line(ctx, px, y, px + 30, y, PAL.ink, 4), 'the floor as measured', '4.00 m by 3.00 m, 12.0 m²');
    row(250, dashed, 'the largest floor allowed', '(' + fmt(a, 2) + ' m)(' + fmt(b, 2) + ' m) = ' + fmt(a * b, 1) + ' m²');
    row(350, dashed, 'the smallest floor allowed', '(' + fmt(a2, 2) + ' m)(' + fmt(b2, 2) + ' m) = ' + fmt(a2 * b2, 1) + ' m²');
    row(450, (y) => { ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.1); ctx.fillRect(px, y - 12, 30, 24); ctx.restore(); }, 'the uncertainty in the area', '± ' + pc(pA) + ' of 12.0 m², or ± ' + fmt(dArea, 1) + ' m²');
    headline(ctx, 'a floor 4.00 m by 3.00 m, known to ' + pc(pL.v) + ' and ' + pc(pW.v) + ', has an area of 12.0 m² known to ' + pc(pA));
    readout(d.readout, `12.0\\ \\text{m}^2 \\pm ${pcTex(pA)} = 12.0\\ \\text{m}^2 \\pm ${fmt(dArea, 1)}\\ \\text{m}^2`,
      'The largest floor the uncertainties allow is (' + fmt(a, 2) + ' m)(' + fmt(b, 2) + ' m) = ' + fmt(a * b, 1) + ' m² and the smallest (' + fmt(a2, 2) + ' m)(' + fmt(b2, 2) + ' m) = ' + fmt(a2 * b2, 1) + ' m², so '
      + (pA <= 5 ? 'adding the percents is very nearly exact when the uncertainties are small.' : 'adding the percents is only an approximation, which serves well when the uncertainties are a few percent or less.'));
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: the ruler. A stick of true length L on a strip; a ruler slides in
   from the left over four seconds and stops with its zero at the stick's
   left end. Beneath, a magnified view of the end of the stick against
   the ruler's marks at the chosen division, with the two marks the end
   lies between bracketed as the estimated digit. Finite, so it gets the
   scrubber; reduced motion draws it aligned.
===================================================================== */
(function () {
  const d = sim('sim-ruler', 500);
  const Lc = ctl(d.controls, { label: '\\text{length}', cls: '', min: 10, max: 50, step: 0.01, value: 36.71, unit: 'cm', dec: 2, onInput: reset, aria: 'true length of the stick' });
  const Dv = ctl(d.controls, { label: '\\text{division}', cls: '', min: 0, max: 2, step: 1, value: 1, unit: '', dec: 0, onInput: reset, aria: 'smallest division of the ruler' });
  const divVal = d.controls.lastElementChild ? d.controls.lastElementChild.querySelector('.ctl-val') : null;
  if (divVal) divVal.textContent = '1 mm';
  const DIVS = [{ cm: 1, dec: 0, name: 'centimeter divisions', label: '1 cm' }, { cm: 0.1, dec: 1, name: 'millimeter divisions', label: '1 mm' }, { cm: 0.01, dec: 2, name: '0.1 mm divisions', label: '0.1 mm' }];
  const T = 4;
  const cy = cycle(() => T, 1.5);
  function reset() { cy.reset(); }
  const ease = (u) => 1 - Math.pow(1 - u, 3);
  const X0 = 200, K = 22, YS = 140, SLIDE = 760;
  const BOX = { l: 175, r: 1225, t: 262, b: 470 }, WIN = 1.5, KM = (BOX.r - BOX.l) / WIN;
  function draw() {
    const { ctx } = begin(d.c);
    const dv = DIVS[Dv.v] ?? DIVS[1]; if (divVal) divVal.textContent = dv.label;
    const u = REDUCED ? 1 : ease(Math.min(1, cy.now() / T)), aligned = u >= 1 - 1e-6;
    const L = Lc.v, reading = L.toFixed(dv.dec), n = sigfigs(L, dv.dec), last = reading[reading.length - 1];
    const slide = -(1 - u) * SLIDE, sw = slide / K;
    /* the scene: the stick on a strip, the ruler sliding in beneath it */
    strip(ctx, 60, 1340, YS, 44);
    bar(ctx, X0, YS - 2, L * K, 20, true);
    text(ctx, 'the stick, ' + fmt(L, 2) + ' cm long', X0, 104, PAL.muted, { size: 17 });
    const rx = X0 + slide, rt = YS + 30;
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.fillRect(rx, rt, 50 * K + 36, 50); ctx.strokeRect(rx, rt, 50 * K + 36, 50); ctx.restore();
    for (let c = 0; c <= 50; c++) { const len = c % 10 ? (c % 5 ? 12 : 18) : 26; line(ctx, rx + c * K, rt, rx + c * K, rt + len, PAL.ink, c % 10 ? 1.5 : 2.5); if (c % 10 === 0) text(ctx, String(c), rx + c * K, rt + 38, PAL.ink, { size: 17, align: 'center' }); }
    text(ctx, 'cm', rx + 50 * K + 22, rt + 38, PAL.ink, { size: 17, align: 'center' });
    /* the magnifier: from the end of the stick down to the box */
    const xe = X0 + L * K;
    line(ctx, xe, YS + 8, BOX.l, BOX.t, PAL.rule, 1.5); line(ctx, xe, YS + 8, BOX.r, BOX.t, PAL.rule, 1.5);
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.rule; ctx.lineWidth = 2; ctx.fillRect(BOX.l, BOX.t, BOX.r - BOX.l, BOX.b - BOX.t); ctx.strokeRect(BOX.l, BOX.t, BOX.r - BOX.l, BOX.b - BOX.t); ctx.restore();
    const w0 = Math.floor(L) - 0.25, Xm = (c) => BOX.l + (c - w0) * KM;
    ctx.save(); ctx.beginPath(); ctx.rect(BOX.l, BOX.t, BOX.r - BOX.l, BOX.b - BOX.t); ctx.clip();
    text(ctx, 'under a magnifier, the end of the stick against a ruler with ' + dv.name, BOX.l + 16, BOX.t + 20, PAL.muted, { size: 17 });
    bar(ctx, Xm(w0) - 20, 360, Xm(L) - Xm(w0) + 20, 26, true);
    /* the ruler's marks where the ruler is */
    const lo = Math.max(w0, sw), hi = Math.min(w0 + WIN, 50 + sw);
    if (hi > lo) {
      ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.fillRect(Xm(lo), 390, Xm(hi) - Xm(lo), 72); ctx.strokeRect(Xm(lo), 390, Xm(hi) - Xm(lo), 72); ctx.restore();
      const dcm = dv.cm, i0 = Math.ceil((lo - sw) / dcm - 1e-9), i1 = Math.floor((hi - sw) / dcm + 1e-9);
      for (let i = Math.max(0, i0); i <= i1; i++) {
        const c = i * dcm, x = Xm(c + sw), labelled = dcm === 1 || i % 10 === 0, medium = i % 5 === 0;
        line(ctx, x, 390, x, 390 + (labelled ? 34 : medium ? 24 : 14), PAL.ink, labelled ? 3 : medium ? 2.5 : 1.5);
        if (labelled) text(ctx, dcm === 0.01 ? fmt(c, 1) : String(Math.round(c)), x, 446, PAL.ink, { size: 17, align: 'center' });
      }
    }
    /* the estimated digit, once the ruler is aligned */
    if (aligned) {
      const m0 = Math.floor(L / dv.cm + 1e-6) * dv.cm, m1 = m0 + dv.cm, x0 = Xm(m0), x1 = Xm(m1);
      hbracket(ctx, x0, x1, 330, PAL.ink);
      const lx = Math.min(Math.max((x0 + x1) / 2, BOX.l + 250), BOX.r - 250);
      text(ctx, 'the last digit is estimated between these two marks', lx, 308, PAL.ink, { size: 20, weight: 600, align: 'center' });
      text(ctx, 'the person writes down ' + reading + ' cm', BOX.r - 16, BOX.t + 20, PAL.ink, { size: 20, weight: 600, align: 'right' });
    }
    ctx.restore();
    headline(ctx, aligned ? 'with ' + dv.name + ' the stick reads ' + reading + ' cm, ' + words(n) + ' figures, and the ' + last + ' is estimated'
      : 'the ruler slides under the stick until its zero mark meets the stick’s left end');
    readout(d.readout, `L = ${reading}\\ \\text{cm}`,
      'The last digit written down is the first with some uncertainty. A ruler marked in centimeters gives ' + L.toFixed(0) + ' cm, ' + words(sigfigs(L, 0)) + ' figures, and a caliper reading to 0.1 mm gives ' + L.toFixed(2) + ' cm, ' + words(sigfigs(L, 2)) + '.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   SIM: the two rules. Two measured lengths a and b, each known to its
   own decimals, laid end to end for the sum and set as the sides of a
   rectangle for the product; the calculator's result for each is printed
   with the rejected digits in muted type. Nothing moves.
===================================================================== */
(function () {
  const d = sim('sim-calc', 560);
  const a0 = ctl(d.controls, { label: 'a', cls: '', min: 1, max: 20, step: 0.01, value: 7.56, unit: '', dec: 2, aria: 'length a' });
  const da = ctl(d.controls, { label: '\\text{decimals of } a', cls: '', min: 0, max: 3, step: 1, value: 2, unit: '', dec: 0, aria: 'decimals of a' });
  const b0 = ctl(d.controls, { label: 'b', cls: '', min: 1, max: 20, step: 0.001, value: 6.052, unit: '', dec: 3, aria: 'length b' });
  const db = ctl(d.controls, { label: '\\text{decimals of } b', cls: '', min: 0, max: 3, step: 1, value: 3, unit: '', dec: 0, aria: 'decimals of b' });
  /* a still picture: it registers no cycle, so it gets no transport, and a slider's input alone redraws it */
  const PLACES = ['whole units', 'tenths', 'hundredths', 'thousandths'];
  /* the raw digits split after the nth significant one */
  function splitSig(raw, n) {
    let seen = 0, started = false, i = 0;
    for (; i < raw.length; i++) { const ch = raw[i]; if (ch === '.') continue; if (ch !== '0') started = true; if (started && ++seen === n) { i++; break; } }
    return [raw.slice(0, i), raw.slice(i)];
  }
  function draw() {
    const { ctx } = begin(d.c);
    const A = +a0.v.toFixed(da.v), B = +b0.v.toFixed(db.v), As = A.toFixed(da.v), Bs = B.toFixed(db.v);
    const na = sigfigs(A, da.v), nb = sigfigs(B, db.v), n = Math.min(na, nb), dec = Math.min(da.v, db.v);
    /* the sum: the calculator's digits, and the written answer to the fewer decimals */
    const rawSum = (A + B).toFixed(Math.max(da.v, db.v)), sumKept = (A + B).toFixed(dec);
    const intLen = rawSum.indexOf('.') < 0 ? rawSum.length : rawSum.indexOf('.'), keepLen = intLen + (dec > 0 ? dec + 1 : 0);
    const sumShow = rawSum.slice(0, keepLen), sumCut = rawSum.slice(keepLen);
    /* the product: the calculator's digits, and the written answer to the fewer significant figures */
    const rawP = (A * B).toFixed(da.v + db.v), [pShow, pCut] = splitSig(rawP, n), pRound = roundSig(A * B, n);
    /* the scene: the sticks end to end, then as the sides of a rectangle */
    const k = Math.min(1100 / (A + B), 220 / B, 480 / A), x0 = 150, wa = A * k, wb = B * k, hb = B * k;
    const ys = 140, yt = 262;
    text(ctx, 'sum', 60, ys, PAL.muted, { size: 20, weight: 600 });
    bar(ctx, x0, ys, wa, 26, true); bar(ctx, x0 + wa, ys, wb, 26, false);
    text(ctx, 'a = ' + As, x0 + wa / 2, ys - 30, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'b = ' + Bs, x0 + wa + wb / 2, ys - 30, PAL.ink, { size: 22, weight: 600, align: 'center' });
    hbracket(ctx, x0, x0 + wa + wb, ys + 52, PAL.ink, 'a + b = ' + sumKept);
    text(ctx, 'product', 60, yt + hb / 2, PAL.muted, { size: 20, weight: 600 });
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.08); ctx.fillRect(x0, yt, wa, hb); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.strokeRect(x0, yt, wa, hb); ctx.restore();
    hbracket(ctx, x0, x0 + wa, yt - 16, PAL.ink, 'a = ' + As);
    vbracket(ctx, x0 + wa + 24, yt, yt + hb, PAL.ink, 'b = ' + Bs, 1);
    text(ctx, 'a × b = ' + plainSig(pRound), x0, yt + hb + 34, PAL.ink, { size: 22, weight: 600 });
    /* the calculator's results, the rejected digits muted */
    const px = 820;
    text(ctx, 'the sum keeps the ' + PLACES[dec] + ' of ' + (da.v === db.v ? 'both' : da.v < db.v ? 'a' : 'b'), px, 120, PAL.muted, { size: 20, weight: 600 });
    runs(ctx, [[As + ' + ' + Bs + ' = ', PAL.ink], [sumShow, PAL.ink, 600], [sumCut, PAL.muted]], px, 160, 26);
    text(ctx, 'which is written ' + sumKept, px, 196, PAL.ink, { size: 20 });
    text(ctx, 'the product keeps ' + words(n) + ' significant figures', px, 300, PAL.muted, { size: 20, weight: 600 });
    runs(ctx, [[As + ' × ' + Bs + ' = ', PAL.ink], [pShow, PAL.ink, 600], [pCut, PAL.muted]], px, 340, 26);
    text(ctx, 'which is written ' + plainSig(pRound) + ', since ' + (na === nb ? 'both have ' : (na < nb ? 'a' : 'b') + ' has only ') + words(n), px, 376, PAL.ink, { size: 20 });
    headline(ctx, da.v === db.v
      ? As + ' + ' + Bs + ' = ' + rawSum + ', and nothing is rounded off because both are known to ' + PLACES[dec]
      : As + ' + ' + Bs + ' = ' + rawSum + ', which is written ' + sumKept + ' because ' + (da.v < db.v ? As : Bs) + ' is known only to ' + PLACES[dec]);
    const sumTex = rawSum === sumKept ? rawSum : rawSum + ' = ' + sumKept, pTex = rawP === pRound ? rawP : rawP + ' = ' + texSig(pRound);
    readout(d.readout, `\\begin{aligned} a + b &= ${As} + ${Bs} = ${sumTex} \\\\ a \\times b &= ${As} \\times ${Bs} = ${pTex} \\end{aligned}`,
      'For addition and subtraction the answer keeps the decimal places of the least precise measurement, and for multiplication and division it keeps the significant figures of the quantity with the fewest.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
