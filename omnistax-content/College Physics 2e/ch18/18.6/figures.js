/* Figures for section 18.6 Electric Forces in Biology. Boots against the section's text article.
   The page binds charge, force and electric field, as its plan records: every
   figure here draws a Coulomb force arrow, and the screening sim draws field
   lines as well. A charge's sign is told by the +, −, δ⁺ and δ⁻ marks and by
   the direction of the arrows, never by a hue; oxygen, hydrogen and the sodium
   ion are the element palette. The separations, the counts and the nanometre
   scales are untyped and stay in ink. Nothing in this section has a clock in
   it, so no figure registers a cycle and none carries a transport. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['18.6'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, topline, axes, curve, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- numbers and small helpers shared by the three figures ---------- */
const TAU = 2 * Math.PI, RAD = Math.PI / 180;
const K = 8.99e9;                                   /* Coulomb's constant, N·m²/C² */
const QE = 1.60e-19;                                /* the elementary charge, C */
const NM = 1e-9;                                    /* one nanometre, in metres */
const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
/* a positive number in scientific notation, for the canvas and for the readout */
function sci(v, d) {
  if (!v) return '0';
  const e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e);
  return fmt(m, d) + ' × 10' + String(e).split('').map((c) => SUP[c]).join('');
}
function sciTex(v, d) {
  if (!v) return '0';
  const e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e);
  return `${fmt(m, d)} \\times 10^{${e}}`;
}
/* the Coulomb force between two charges of size q1 and q2, r apart in metres */
const coulomb = (q1, q2, r) => (K * Math.abs(q1 * q2)) / (r * r);
/* a label kept inside the canvas whatever the sliders do */
const clampX = (x, half) => Math.min(Math.max(x, half + 16), 1400 - half - 16);

/* a centre of charge drawn as a ring in ink with its sign inside it, so that
   the drawing stays legible with the type hues turned off */
function signRing(ctx, x, y, sign, r) {
  ctx.save(); ctx.lineWidth = 3; ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.panel;
  ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
  text(ctx, sign, x, y + 1, PAL.ink, { size: r * 1.7, weight: 700, align: 'center' });
}
/* the lightness of a colour, so that a symbol written on a filled atom is
   taken from whichever of the page's two grounds reads against it: hydrogen
   is nearly white in both themes and oxygen is a mid red, and neither can
   carry the same lettering */
function lum(c) {
  const m = /^#([0-9a-f]{6})$/i.exec(String(c).trim()); if (!m) return 0.5;
  const v = parseInt(m[1], 16), f = (k) => ((v >> k) & 255) / 255;
  return 0.2126 * f(16) + 0.7152 * f(8) + 0.0722 * f(0);
}
const onColor = (fill) => (Math.abs(lum(fill) - lum(PAL.ink)) >= Math.abs(lum(fill) - lum(PAL.bg)) ? PAL.ink : PAL.bg);
/* an atom of the element palette: a filled disc outlined in ink with its symbol on it */
function atom(ctx, x, y, r, symbol, label) {
  const fill = F.el(symbol);
  ctx.save(); ctx.fillStyle = fill; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
  if (label) text(ctx, label, x, y + 1, onColor(fill), { size: r * 1.05, weight: 700, align: 'center' });
}

/* =====================================================================
   FIGURE 18.24: the DNA double helix, and the Coulomb force between two of
   its charged sites. The book's rendering says that the molecule is charged;
   what the passage turns on is that the force between two charges falls as
   1/r², so that the atoms within a base pair, 0.3 nm apart, are held while
   the two strands, 1 nm apart, are barely pulled together at all. Still: two
   charged sites held at a separation the reader chooses have no time in
   them, so the figure answers its sliders and registers no cycle.
===================================================================== */
(function () {
  const d = sim('sim-dna', 700);
  const rs = ctl(d.controls, { label: 'r', cls: '', min: 0.1, max: 2, step: 0.05, value: 0.3, unit: 'nm', dec: 2, aria: 'the distance between the two charged sites' });
  const ns = ctl(d.controls, { label: '\\kq', cls: 'charge', min: 1, max: 4, step: 1, value: 2, unit: 'q_e', dec: 0, aria: 'the number of elementary charges at each site' });
  /* the graph's ranges are fixed from the sliders and never rescaled: the
     force at the closest separation the slider reaches is far above the top
     of the box, and goes through pinned() */
  const XR = [0, 2], YR = [0, 2e-8];
  const BOX = { l: 620, r: 1330, t: 360, b: 600 };
  function draw() {
    const { ctx } = begin(d.c);
    const qc = C('charge'), fc = C('force');
    const r = rs.v, n = ns.v, q = n * QE;
    const Fv = coulomb(q, q, r * NM), F1 = coulomb(q, q, NM);
    topline(ctx, `Two charges of ${fmt(n, 0)} q_e set ${fmt(r, 2)} nm apart attract each other with ${sci(Fv, 2)} N.`);

    /* ---- the double helix, drawn upright on the left ---- */
    const cx = 210, y0 = 110, y1 = 552, A = 74, LAM = 226;
    const sx = (y, k) => cx + A * Math.sin((TAU * (y - y0)) / LAM + k * Math.PI);
    ctx.save(); ctx.lineWidth = 6; ctx.strokeStyle = PAL.ink;
    for (let k = 0; k < 2; k++) {
      ctx.beginPath();
      for (let y = y0; y <= y1; y += 4) { const x = sx(y, k); if (y === y0) ctx.moveTo(x, y); else ctx.lineTo(x, y); }
      ctx.stroke();
    }
    ctx.restore();
    const PAIRS = ['C–G', 'A–T', 'A–T', 'G–C', 'T–A', 'C–G', 'G–C', 'A–T'];
    for (let i = 0; i < PAIRS.length; i++) {
      const y = y0 + 26 + i * 56, xa = sx(y, 0), xb = sx(y, 1);
      line(ctx, xa, y, xb, y, PAL.muted, 3);
      text(ctx, PAIRS[i], (xa + xb) / 2, y - 1, PAL.muted, { size: 17, align: 'center', bg: alpha(PAL.panel, 0.9) });
      dot(ctx, xa, y, PAL.ink, true, 6); dot(ctx, xb, y, PAL.ink, true, 6);
    }
    text(ctx, 'the two strands, about 1 nm apart', cx, y1 + 44, PAL.muted, { size: 18, align: 'center' });
    text(ctx, 'about 2 q_e per 0.3 nm of each strand', cx, y1 + 78, qc, { size: 19, weight: 600, align: 'center' });

    /* ---- the two charged sites, set r apart, with the force on each ---- */
    const SC = 300;                                   /* 300 units to the nanometre */
    const midx = 950, y = 175, half = Math.max(70, Math.min(r * SC, 600)) / 2;
    const xa = midx - half, xb = midx + half, R = 26;
    line(ctx, xa, y + 58, xb, y + 58, PAL.muted, 2);
    line(ctx, xa, y + 48, xa, y + 68, PAL.muted, 2); line(ctx, xb, y + 48, xb, y + 68, PAL.muted, 2);
    text(ctx, 'r = ' + fmt(r, 2) + ' nm', midx, y + 90, PAL.muted, { size: 19, align: 'center' });
    signRing(ctx, xa, y, '−', R); signRing(ctx, xb, y, '+', R);
    text(ctx, fmt(n, 0) + ' q_e', xa, y - 52, qc, { size: 21, weight: 600, align: 'center' });
    text(ctx, fmt(n, 0) + ' q_e', xb, y - 52, qc, { size: 21, weight: 600, align: 'center' });
    /* each charge is pulled towards the other: the arrows stand in the gap
       between them, shortened where the gap is small so that they never cross */
    const gap = xb - xa - 2 * R, L = Math.max(24, Math.min(gap / 2 - 10, 150 * Math.pow(0.3 / r, 0.6)));
    arrow(ctx, xa + R + 6, y, xa + R + 6 + L, y, fc, 5);
    arrow(ctx, xb - R - 6, y, xb - R - 6 - L, y, fc, 5);
    text(ctx, 'F = ' + sci(Fv, 2) + ' N', clampX(midx, 150), y - 92, fc, { size: 21, weight: 600, align: 'center' });
    text(ctx, 'two charged sites of the molecule', clampX(midx, 200), y + 132, PAL.muted, { size: 18, align: 'center' });

    /* ---- the force against the separation ---- */
    const { X, Y } = axes(ctx, BOX, XR, YR, {
      xl: 'r (nm)', yl: 'F (10⁻⁸ N)', xc: PAL.ink, yc: fc, nx: 4, ny: 4,
      fx: (v) => fmt(v, 1), fy: (v) => fmt(v / 1e-8, 1),
    });
    /* the curve is drawn only where it lies inside the fixed box, so nothing is stroked above the frame */
    const rTop = Math.sqrt((K * q * q) / YR[1]) / NM;
    curve(ctx, (t) => coulomb(q, q, t * NM), rTop, XR[1], X, Y, fc, 5, 160);
    [[0.3, 'within a base'], [1, 'across the strands']].forEach(([v, name]) => {
      line(ctx, X(v), BOX.t, X(v), BOX.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
      text(ctx, name, X(v) + 8, BOX.t + (v === 0.3 ? 24 : 56), PAL.muted, { size: 17, align: 'left', bg: alpha(PAL.panel, 0.85) });
    });
    pinned(ctx, BOX, X, Y, r, Fv, fc, sci(Fv, 2) + ' N');

    readout(d.readout, `\\kF = \\dfrac{k\\lvert \\kqone \\kqtwo\\rvert}{r^2} = \\dfrac{(8.99 \\times 10^{9})(${fmt(n, 0)} \\kqe)^2}{(${fmt(r, 2)}\\ \\text{nm})^2} = ${sciTex(Fv, 2)}\\ \\text{N}`,
      `At the 1 nm that separates the two strands the same two charges pull on each other with only ${sci(F1, 2)} N, which is why the atoms of a base pair must sit as close together as they do.`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 18.25: two water molecules, each a dipole. The book draws one
   arrangement, an oxygen facing a hydrogen, and the reader is asked to take
   on trust that this is what water settles into. Here the second molecule is
   turned about, so that the same two centres of charge attract or repel
   according to which ends face each other. Still: the reader turns the
   molecule and reads the force; a molecule set spinning would be a dummy
   loop, which rule 14 forbids.
===================================================================== */
(function () {
  const d = sim('sim-water', 560);
  const ds = ctl(d.controls, { label: 'd', cls: '', min: 0.2, max: 0.8, step: 0.02, value: 0.3, unit: 'nm', dec: 2, aria: 'the distance between the two nearest centers of charge' });
  const qs = ctl(d.controls, { label: '\\delta', cls: 'charge', min: 0.1, max: 0.6, step: 0.01, value: 0.33, unit: 'q_e', dec: 2, aria: 'the charge at each center, as a fraction of the elementary charge' });
  const face = F.select(d.controls, {
    label: '\\text{the ends that face}',
    options: [{ value: 'OH', label: 'O to H' }, { value: 'HH', label: 'H to H' }, { value: 'OO', label: 'O to O' }],
    value: 'OH', aria: 'which ends of the two molecules face each other',
  });
  const BOND = 66, HALF = 52.25;                      /* the drawn O–H length, and half the bond angle */
  /* one water molecule: its oxygen at (x, y), its first hydrogen along `a`
     degrees and its second at a + 104.5°, with δ⁻ on the oxygen and δ⁺ on
     each hydrogen */
  function water(ctx, x, y, a, qc, dlab) {
    const hs = [a - HALF, a + HALF].map((t) => ({ x: x + BOND * Math.cos(t * RAD), y: y + BOND * Math.sin(t * RAD) }));
    hs.forEach((h) => line(ctx, x, y, h.x, h.y, PAL.ink, 5));
    hs.forEach((h) => {
      atom(ctx, h.x, h.y, 22, 'H', 'H');
      const a = Math.atan2(h.y - y, h.x - x);
      text(ctx, dlab + '⁺', h.x + 50 * Math.cos(a), h.y + 50 * Math.sin(a), qc, { size: 19, weight: 600, align: 'center' });
    });
    atom(ctx, x, y, 34, 'O', 'O');
    /* the oxygen's mark sits on its far side, away from the two hydrogens */
    const back = (a + 180) * RAD;
    text(ctx, dlab + '⁻', x + 56 * Math.cos(back), y + 56 * Math.sin(back), qc, { size: 19, weight: 600, align: 'center' });
    return hs;
  }
  function draw() {
    const { ctx } = begin(d.c);
    const qc = C('charge'), fc = C('force');
    const dist = ds.v, del = qs.v, q = del * QE, mode = face.value;
    const Fv = coulomb(q, q, dist * NM), pull = mode === 'OH';
    topline(ctx, pull
      ? `The hydrogen end of one molecule and the oxygen end of the other, ${fmt(dist, 2)} nm apart, attract with ${sci(Fv, 2)} N.`
      : `Two ${mode === 'HH' ? 'hydrogen' : 'oxygen'} ends ${fmt(dist, 2)} nm apart carry the same sign, so they push each other apart with ${sci(Fv, 2)} N.`);

    const SC = 470;                                   /* 470 units to the nanometre */
    const y = 300, gap = dist * SC;
    /* which centre of each molecule sits on the axis, and how each is turned */
    const A_H = mode !== 'OO', B_H = mode === 'HH';    /* a hydrogen faces the gap, or the oxygen does */
    const aA = A_H ? -HALF : 180, aB = B_H ? 180 + HALF : 0;
    const offA = A_H ? BOND : 0, offB = B_H ? BOND : 0;
    const mid = 700, xa = mid - gap / 2 - offA, xb = mid + gap / 2 + offB;
    /* the two nearest centres, and the dashed line between them */
    const na = { x: mid - gap / 2, y }, nb = { x: mid + gap / 2, y };
    line(ctx, na.x, y, nb.x, y, alpha(PAL.ink, 0.4), 2.5, [10, 10]);
    water(ctx, xa, y, aA, qc, 'δ'); water(ctx, xb, y, aB, qc, 'δ');
    /* the force on each molecule, towards the other when the ends are unlike */
    const L = Math.max(44, Math.min(130, 130 * Math.pow(0.3 / dist, 0.6))), s = pull ? 1 : -1;
    arrow(ctx, xa - 92, y + 124, xa - 92 + s * L, y + 124, fc, 5);
    arrow(ctx, xb + 92, y + 124, xb + 92 - s * L, y + 124, fc, 5);
    text(ctx, 'F = ' + sci(Fv, 2) + ' N', clampX(mid, 150), y + 162, fc, { size: 21, weight: 600, align: 'center' });
    /* the separation of the two nearest centres */
    line(ctx, na.x, y - 130, nb.x, y - 130, PAL.muted, 2);
    line(ctx, na.x, y - 140, na.x, y - 120, PAL.muted, 2); line(ctx, nb.x, y - 140, nb.x, y - 120, PAL.muted, 2);
    text(ctx, 'd = ' + fmt(dist, 2) + ' nm', (na.x + nb.x) / 2, y - 160, PAL.muted, { size: 19, align: 'center', bg: alpha(PAL.panel, 0.9) });
    text(ctx, 'each center carries ' + fmt(del, 2) + ' q_e', 700, 500, qc, { size: 20, weight: 600, align: 'center' });
    text(ctx, pull ? 'unlike ends: the molecules are drawn together' : 'like ends: the molecules are pushed apart', 700, 534, PAL.muted, { size: 18, align: 'center' });

    readout(d.readout, `\\kF = \\dfrac{k\\lvert \\kqone \\kqtwo\\rvert}{r^2} = \\dfrac{(8.99 \\times 10^{9})(${fmt(del, 2)} \\kqe)^2}{(${fmt(dist, 2)}\\ \\text{nm})^2} = ${sciTex(Fv, 2)}\\ \\text{N}, \\quad \\text{${pull ? 'an attraction' : 'a repulsion'}}`,
      'The ten electrons of the molecule remain closer to the oxygen nucleus than to the hydrogen nuclei, which is what leaves the oxygen end negative and the hydrogen ends positive.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: screening. The section says that the centres of charge of a water
   molecule terminate some of the field lines coming from a free charge, and
   draws nothing. Here a charged site on a DNA strand sends twelve lines out
   towards a sodium ion, and each water molecule put in the way turns its
   negative end to the charge and takes one line out of the count. Still: the
   reader adds molecules and carries the ion off, and reads what gets
   through; the settling of the molecules is not the idea.
===================================================================== */
(function () {
  const d = sim('sim-screening', 660);
  const ns = ctl(d.controls, { label: '\\text{water}', cls: '', min: 0, max: 8, step: 1, value: 4, unit: 'molecules', dec: 0, aria: 'the number of water molecules between the charge and the ion' });
  const rs = ctl(d.controls, { label: 'r', cls: '', min: 0.5, max: 4, step: 0.1, value: 2, unit: 'nm', dec: 1, aria: 'the distance of the ion from the charged strand' });
  const LINES = 8, QS = 2 * QE;                       /* the eight lines drawn, and the 2 q_e of the site */
  const XL = 200, SC = 260;                           /* the strand, and 260 units to the nanometre */
  /* a water molecule drawn small, its negative end towards the strand */
  function dipole(ctx, x, y, qc, k = 1) {
    line(ctx, x, y, x + 20 * k, y - 14 * k, PAL.ink, 3 * k); line(ctx, x, y, x + 20 * k, y + 14 * k, PAL.ink, 3 * k);
    atom(ctx, x + 20 * k, y - 14 * k, 9 * k, 'H'); atom(ctx, x + 20 * k, y + 14 * k, 9 * k, 'H');
    atom(ctx, x, y, 14 * k, 'O');
    if (k > 0.8) text(ctx, 'δ⁻', x - 22, y, qc, { size: 15, weight: 600, align: 'center' });
  }
  function draw() {
    const { ctx } = begin(d.c);
    const qc = C('charge'), ec = C('electric-field'), fc = C('force');
    const n = Math.min(ns.v, LINES), r = rs.v;
    const through = LINES - n, ratio = through / LINES;
    const E0 = (K * QS) / Math.pow(r * NM, 2), E = ratio * E0, Fv = QE * E;
    topline(ctx, n === 0
      ? `With no water in the way all ${LINES} lines reach the ion, which feels the whole field of ${sci(E0, 2)} N/C.`
      : `${n} water ${n === 1 ? 'molecule takes one of the ' + LINES + ' lines' : 'molecules take ' + n + ' of the ' + LINES + ' lines'}, so the ion feels ${fmt(ratio * 100, 0)}% of the field it would feel in empty space.`);

    const yc = 300, xi = Math.min(XL + r * SC, 1230);
    /* the charged site on the strand */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.roundRect(XL - 54, yc - 170, 46, 340, 12); ctx.fill(); ctx.stroke(); ctx.restore();
    for (let i = 0; i < 5; i++) text(ctx, '−', XL - 31, yc - 130 + i * 65, PAL.ink, { size: 26, weight: 700, align: 'center' });
    signRing(ctx, XL, yc, '−', 30);
    text(ctx, '2 q_e on the strand', XL - 20, yc - 210, qc, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'a charged site of the DNA', XL - 20, yc + 204, PAL.muted, { size: 18, align: 'center' });

    /* the field lines, fanning out towards the ion; the first n are taken by water */
    const span = 200;
    /* the lines the water takes are spread evenly through the fan rather than
       taken from one side, and the molecules stand at two depths so that they
       never sit on top of one another */
    /* the molecules are drawn smaller where the gap is narrow, so that eight of them
       still stand between the strand and the ion at the shortest distance */
    const k = Math.max(0.5, Math.min(1, (xi - XL - 120) / 360));
    const takenIdx = new Set();
    for (let k = 0; k < n; k++) takenIdx.add(n === 1 ? (LINES - 1) / 2 | 0 : Math.round((k * (LINES - 1)) / (n - 1)));
    for (let i = 0; i < LINES; i++) {
      const t = (i - (LINES - 1) / 2) / ((LINES - 1) / 2), y2 = yc + t * span;
      const taken = takenIdx.has(i), f = 0.62 + 0.12 * (i % 2);
      const x0 = XL + 32, xm = x0 + (xi - 40 - x0) * (taken ? f : 1);
      const ym = yc + (y2 - yc) * (taken ? f : 1);
      arrow(ctx, x0, yc + t * 26, xm, ym, taken ? alpha(ec, 0.45) : ec, taken ? 3 : 4);
      if (taken) dipole(ctx, xm + 20 * k, ym, qc, k);
    }
    /* the ion, and the force on it */
    atom(ctx, xi, yc, 30, 'Na');
    text(ctx, 'Na⁺', xi, yc + 58, PAL.ink, { size: 20, weight: 600, align: 'center' });
    if (through > 0) {
      const L = Math.min(40 + 90 * ratio, xi - 36 - XL - 44);
      arrow(ctx, xi - 36, yc, xi - 36 - L, yc, fc, 5);
      text(ctx, 'F = ' + sci(Fv, 2) + ' N', clampX(xi, 120), yc - 66, fc, { size: 20, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.9) });
    } else {
      text(ctx, 'no line reaches the ion', clampX(xi, 140), yc - 86, PAL.muted, { size: 20, align: 'center' });
    }
    line(ctx, XL, yc + 246, xi, yc + 246, PAL.muted, 2);
    line(ctx, XL, yc + 236, XL, yc + 256, PAL.muted, 2); line(ctx, xi, yc + 236, xi, yc + 256, PAL.muted, 2);
    text(ctx, 'r = ' + fmt(r, 1) + ' nm', (XL + xi) / 2, yc + 278, PAL.muted, { size: 19, align: 'center' });
    text(ctx, through + ' of the ' + LINES + ' lines get through', 700, yc + 330, ec, { size: 21, weight: 600, align: 'center' });

    readout(d.readout, `\\kEf = \\dfrac{${through}}{${LINES}}\\,\\dfrac{k\\kQch}{r^2} = \\dfrac{${through}}{${LINES}}\\,\\dfrac{(8.99 \\times 10^{9})(2\\kqe)}{(${fmt(r, 1)}\\ \\text{nm})^2} = ${sciTex(E, 2)}\\ \\text{N/C}`,
      `The sodium ion carries one elementary charge, so the force on it is ${sci(Fv, 2)} N, and it falls away both with the distance and with every molecule of water that stands between.`);
  }
  register(d.fig, { update: () => {}, draw });
})();

};
