/* Figures for section 16.8 Forced Oscillations and Resonance. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['16.8'] = function (root, F) {
const { el, fmt, tex, C, PAL, cat, alpha, REDUCED, ctl, choice, cycle, register, begin, line, dot, text, headline, hbracket, vbracket, axes, curve, pinned, scale, spring, block, fixed } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
/* a number in the book's own form, 1.20 × 10^3 */
function sci(v, dec) {
  if (v === 0) return '0';
  const e = Math.floor(Math.log10(Math.abs(v)));
  if (e >= -1 && e <= 3) return fmt(v, Math.max(0, dec - Math.max(0, e)));
  const SUP = { '-': '\u207b', 0: '\u2070', 1: '\u00b9', 2: '\u00b2', 3: '\u00b3', 4: '\u2074', 5: '\u2075', 6: '\u2076', 7: '\u2077', 8: '\u2078', 9: '\u2079' };
  return fmt(v / Math.pow(10, e), dec) + ' \u00d7 10' + String(e).split('').map((c) => SUP[c]).join('');
}
function sciTex(v, dec) {
  if (v === 0) return '0';
  const e = Math.floor(Math.log10(Math.abs(v)));
  if (e >= -1 && e <= 3) return fmt(v, Math.max(0, dec - Math.max(0, e)));
  return fmt(v / Math.pow(10, e), dec) + ' \\times 10^{' + e + '}';
}

/* =====================================================================
   SIM 1 (Figure 16.24 + 16.25): a finger drives a paddle ball on a
   rubber band at the frequency you choose, and the resonance curve
   beside the scene says how far the ball swings. The book draws the
   ball at three driving frequencies and plots the response separately;
   here one slider moves both. A steady driven oscillation, so it runs
   endlessly and takes the plain transport.
===================================================================== */
(function () {
  const d = sim('sim-resonance', 660);
  const F0 = 1.0;                       /* the natural frequency of the ball on its band, Hz */
  const XS = 1.0;                       /* the swing the same finger gives when moved very slowly, cm */
  const REG = [
    { value: 'small', label: 'small', b: 0.12 },
    { value: 'medium', label: 'medium', b: 0.30 },
    { value: 'heavy', label: 'heavy', b: 0.70 },
  ];
  const f = ctl(d.controls, { label: '\\kf', cls: 'frequency', min: 0.1, max: 2, step: 0.01, value: 1, unit: 'Hz', dec: 2, onInput: reset, aria: 'driving frequency' });
  const damp = choice(d.controls, { label: '\\text{damping}', options: REG, value: 'small', aria: 'amount of damping', onInput: reset });
  const cy = cycle(() => Infinity, 0);
  function reset() { cy.reset(); }
  const bOf = (v) => REG.find((r) => r.value === v).b;
  /* Amplitude of a driven oscillator: the same ball, the same finger, three amounts of
     damping. All three curves meet at the slow end, where the ball simply follows the
     finger, and fade together at the fast end, where it hardly moves at all. */
  const ampOf = (fr, b) => { const r = fr / F0; return XS / Math.sqrt((1 - r * r) * (1 - r * r) + b * b * r * r); };
  const lagOf = (fr, b) => { const r = fr / F0; return Math.atan2(b * r, 1 - r * r); };
  function draw() {
    const { ctx } = begin(d.c);
    const CF = C('frequency'), CX = C('position');     /* bound before cat(), so no curve takes a bound hue */
    const b = bOf(damp.value), X = ampOf(f.v, b), lag = lagOf(f.v, b);
    const t = REDUCED ? 0.25 / f.v : cy.now(), ph = 2 * Math.PI * f.v * t;
    /* ---- the scene, left: a finger, a rubber band and the paddle ball ---- */
    const cx = 330, ytop = 200, y0 = 480;
    const AF = 20;                                     /* the finger's own travel, drawn small */
    const yf = ytop + AF * Math.sin(ph);
    const PX = 11;                                     /* 1 cm of swing is 11 units of canvas */
    const yb = y0 - Math.min(X, 10) * PX * Math.sin(ph - lag);
    /* the hand: a fist gripping the top of the band, its forearm reaching back up and to the left */
    F.fist(ctx, cx + 38, yf + 10, -0.85, -0.53, 1);
    F.label(ctx, 'your finger', cx - 6, yf - 8, { side: 'left', color: PAL.muted, weight: 400, size: 20, gap: 18 });
    spring(ctx, cx + 38, yf + 10, cx + 38, yb - 34, 7, 16, PAL.ink, 3);
    text(ctx, 'rubber band', cx + 74, (yf + yb) / 2, PAL.muted, { size: 20 });
    ctx.save(); ctx.fillStyle = PAL.ink; ctx.beginPath(); ctx.arc(cx + 38, yb, 34, 0, Math.PI * 2); ctx.fill(); ctx.restore();
    text(ctx, 'paddle ball', cx + 84, yb + 4, PAL.muted, { size: 20 });
    line(ctx, cx - 180, y0, cx - 10, y0, PAL.muted, 2, [10, 10]);
    text(ctx, 'equilibrium', cx - 10, y0 + 22, PAL.muted, { size: 17, align: 'right' });
    const half = Math.min(X, 10) * PX;
    vbracket(ctx, cx - 150, y0 - half, y0 + half, CX, '2\u2009X = ' + fmt(2 * X, 1) + ' cm', -1);
    /* ---- the curve, beside the scene: amplitude against driving frequency ---- */
    /* Fixed and never rescaled: 0 to 2.00 Hz is the whole of the frequency slider, and 0 to
       10 cm holds the tallest peak the small-damping curve reaches, 8.3 cm. */
    const box = { l: 640, r: 1330, t: 190, b: 570 };
    const { X: Xa, Y: Ya } = axes(ctx, box, [0, 2], [0, 10], { xl: 'driving frequency f (Hz)', xc: CF, yl: 'amplitude X (cm)', yc: CX, nx: 4, ny: 5, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 0) });
    line(ctx, Xa(F0), box.t, Xa(F0), box.b, CF, 2, [8, 8]);
    text(ctx, 'f₀ = 1.00 Hz', Xa(F0) - 10, box.b - 24, CF, { size: 19, weight: 600, align: 'right' });
    REG.forEach((r, i) => {
      const on = r.value === damp.value;
      curve(ctx, (u) => Math.min(ampOf(u, r.b), 10), 0.02, 2, Xa, Ya, cat(i), on ? 6 : 3, 240);
    });
    REG.forEach((r, i) => {
      const ly = box.t + 26 + i * 28, lx = box.r - 210;
      line(ctx, lx, ly, lx + 40, ly, cat(i), r.value === damp.value ? 6 : 3);
      text(ctx, r.label + ' damping', lx + 50, ly + 1, PAL.ink, { size: 19, weight: r.value === damp.value ? 600 : 400, base: 'middle' });
    });
    const p = pinned(ctx, box, Xa, Ya, f.v, Math.min(X, 10), PAL.ink);
    dot(ctx, p.x, p.y, PAL.ink, true, 9);
    text(ctx, 'X = ' + fmt(X, 1) + ' cm', Math.min(p.x + 16, box.r - 160), Math.min(p.y + 28, box.b - 20), CX, { size: 20, weight: 600 });
    const near = Math.abs(f.v - F0) < 0.06;
    headline(ctx, near
      ? 'Your finger drives the ball at ' + fmt(f.v, 2) + ' Hz, which is its natural frequency, and the ball swings ' + fmt(X, 1) + ' cm either way'
      : 'Your finger drives the ball at ' + fmt(f.v, 2) + ' Hz, away from the natural frequency of 1.00 Hz, and the ball swings only ' + fmt(X, 1) + ' cm either way');
    readout(d.readout, `\\kf = ${fmt(f.v, 2)}\\ \\text{Hz},\\qquad \\kfo = 1.00\\ \\text{Hz},\\qquad \\kX = ${fmt(X, 1)}\\ \\text{cm}`,
      near ? 'At resonance the ball is a quarter of a cycle behind the finger, and the finger pushes it along through every part of its swing, which is why the response is greatest here. With ' + damp.value + ' damping the peak swing is ' + fmt(ampOf(F0, b), 1) + ' cm.'
           : 'The ball is ' + fmt((180 / Math.PI) * lag, 0) + '° behind the finger. Away from the natural frequency the finger is pushing while the ball is already coming back, energy is transferred less efficiently, and the swing is smaller.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   SIM 2 (Sim): how a driven oscillation settles at a constant
   amplitude. Soldiers marching across a suspension bridge at its
   natural frequency put in the same energy every second; the store in
   the bridge is (1/2)kX², so the amplitude climbs, and it stops
   climbing where the damping takes out each second what the marching
   puts in. The defaults are problem 5's numbers. A finite run, so it
   takes the scrubber.
===================================================================== */
(function () {
  const d = sim('sim-driven-energy', 700);
  const RUN = 1500;                      /* seconds of bridge time in one run */
  const X0 = 0.100;                      /* the amplitude the bridge starts at, m */
  const kk = ctl(d.controls, { label: '\\kk', cls: 'stiffness', min: 0.5, max: 2, step: 0.05, value: 1, unit: '× 10⁸ N/m', dec: 2, onInput: reset, aria: 'force constant' });
  const PP = ctl(d.controls, { label: '\\kP', cls: 'power', min: 2000, max: 20000, step: 500, value: 10000, unit: 'J each second', dec: 0, onInput: reset, aria: 'energy imparted each second' });
  const DD = ctl(d.controls, { label: '\\text{damping}', cls: '', min: 0, max: 12000, step: 250, value: 0, unit: 'J each second', dec: 0, onInput: reset, aria: 'amount of damping' });
  const cy = cycle(() => RUN, 1.6);
  function reset() { cy.reset(); }
  const K = () => kk.v * 1e8;
  /* (1/2)k dX²/dt = P − D(X/0.500)², so X² relaxes towards P(0.500)²/D and grows
     without bound when there is no damping at all. */
  const sqAt = (t) => {
    const u0 = X0 * X0;
    if (DD.v <= 0) return u0 + 2 * PP.v * t / K();
    const uss = PP.v * 0.25 / DD.v;
    return uss + (u0 - uss) * Math.exp(-8 * DD.v * t / K());
  };
  const XAt = (t) => Math.sqrt(Math.max(0, sqAt(t)));
  function draw() {
    const { ctx } = begin(d.c);
    const CX = C('position'), CT = C('time'), CE = C('energy'), CP = C('power'), CK = C('stiffness');
    const t = cy.now(), X = XAt(t), E = 0.5 * K() * X * X, Ein = PP.v * t, Xss = DD.v > 0 ? 0.5 * Math.sqrt(PP.v / DD.v) : 0;
    /* the headline first, so the label under it knows whether it took one line or two */
    const lines = headline(ctx, DD.v > 0
      ? 'After ' + fmt(t, 0) + ' s the marching has put in ' + sci(Ein, 3) + ' J, the damper has taken back all but ' + sci(E - 0.5 * K() * X0 * X0, 3) + ' J of it, and the swing is settling at ' + fmt(Xss, 3) + ' m'
      : 'After ' + fmt(t, 0) + ' s the marching has put in ' + sci(Ein, 3) + ' J and the bridge swings ' + fmt(X, 3) + ' m either way');
    /* ---- the scene: the deck, its towers and the soldiers on it ---- */
    const l = 220, r = 1180, yd = 230, PXm = 150;      /* 1 m of amplitude is 120 units, so the swing can be seen at all */
    const drawn = Math.min(X, 1) * PXm;
    fixed(ctx, l - 60, yd - 170, 40, 250); fixed(ctx, r + 20, yd - 170, 40, 250);
    const deck = (dy, col, w, dash) => {
      ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = w; if (dash) ctx.setLineDash(dash);
      ctx.beginPath();
      for (let i = 0; i <= 60; i++) { const g = i / 60, px = l + (r - l) * g, py = yd + dy * Math.sin(Math.PI * g); if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py); }
      ctx.stroke(); ctx.restore();
    };
    deck(-drawn, alpha(PAL.ink, 0.3), 3, [10, 10]);
    deck(drawn, PAL.ink, 5);
    line(ctx, l, yd, r, yd, PAL.muted, 2, [10, 10]);
    text(ctx, 'the deck at rest', r - 6, yd + 76, PAL.muted, { size: 17, align: 'right' });
    /* the swing is bracketed at midspan, where the deck moves the full amplitude, and named under
       the deck, where the name cannot climb into the headline however large the swing grows */
    vbracket(ctx, l + 480, yd - drawn, yd + drawn, CX);
    text(ctx, '2\u2009X = ' + fmt(2 * X, 3) + ' m', l + 480, yd + drawn + 30, CX, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    const march = (t * 0.6) % 1;
    [0.28, 0.42].forEach((g, i) => {
      const gg = (g + march) % 1, px = l + (r - l) * gg, py = yd + drawn * Math.sin(Math.PI * gg);
      F.silhouette(ctx, { x: px, y: py, s: 0.5, pose: 'walk', phase: (t * 2 + i * 0.5) % 1, face: 1, color: PAL.ink });
    });
    text(ctx, 'soldiers marching in step at the bridge’s natural frequency', l + 60, lines === 2 ? 112 : 86, PAL.muted, { size: 20, bg: PAL.panel });
    /* ---- the store of energy, right of the deck ---- */
    /* Fixed at 0 to 3 × 10⁷ J, which holds the fullest store the sliders reach at 1.00 m. */
    const EMAX = 3e7, bx = 1290, bt = 140, bb = 400;
    ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 2; ctx.strokeRect(bx, bt, 60, bb - bt); ctx.restore();
    const h = Math.min(1, E / EMAX) * (bb - bt);
    ctx.save(); ctx.fillStyle = CE; ctx.fillRect(bx, bb - h, 60, h); ctx.restore();
    text(ctx, 'E = ½kX²', bx + 30, bt - 40, CE, { size: 20, weight: 600, align: 'center' });
    text(ctx, sci(E, 3) + ' J', bx + 30, bb + 26, CE, { size: 19, align: 'center' });
    /* ---- the graph below: the amplitude as the store fills ---- */
    /* Fixed and never rescaled: 0 to 1500 s is the whole run and 0 to 1.00 m covers the
       book's bridge with room to spare; a softer, harder-driven bridge runs off the top
       and its live point is pinned at the edge. */
    const box = { l: 160, r: 1240, t: 440, b: 640 };
    const { X: Xa, Y: Ya } = axes(ctx, box, [0, RUN], [0, 1], { xl: 'time t (s)', xc: CT, yl: 'amplitude X (m)', yc: CX, nx: 5, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 2) });
    [0.1, 0.5].forEach((m) => { line(ctx, box.l, Ya(m), box.r, Ya(m), alpha(PAL.ink, 0.35), 2, [4, 8]); text(ctx, fmt(m, 3) + ' m', box.l + 8, Ya(m) - 10, CX, { size: 17 }); });
    if (DD.v > 0 && Xss < 1) { line(ctx, box.l, Ya(Xss), box.r, Ya(Xss), CX, 2, [10, 10]); text(ctx, 'steady amplitude ' + fmt(Xss, 3) + ' m', box.r - 8, Ya(Xss) - 12, CX, { size: 19, weight: 600, align: 'right' }); }
    curve(ctx, (u) => Math.min(XAt(u), 1), 0, Math.max(t, 1e-6), Xa, Ya, CX, 5, 180);
    const p = pinned(ctx, box, Xa, Ya, t, Math.min(X, 1), PAL.ink);
    dot(ctx, p.x, p.y, PAL.ink, true, 9);
    readout(d.readout, `\\kE = \\tfrac{1}{2}\\kk\\kX^2 = \\tfrac{1}{2}\\left(${sciTex(K(), 3)}\\ \\text{N/m}\\right)\\left(${fmt(X, 3)}\\ \\text{m}\\right)^2 = ${sciTex(E, 3)}\\ \\text{J}`,
      (DD.v > 0
        ? 'The damper takes out ' + fmt(DD.v * (X / 0.5) * (X / 0.5), 0) + ' J each second at this amplitude and the marching puts in ' + fmt(PP.v, 0) + ' J, so the swing grows until the two are equal, at ' + fmt(Xss, 3) + ' m. That is how a driven oscillation holds a constant amplitude.'
        : 'With no damping every joule stays in the bridge, so the store climbs by ' + fmt(PP.v, 0) + ' J each second and the amplitude with it: from 0.100 m to 0.500 m takes ' + fmt((0.5 * K() * (0.25 - 0.01)) / PP.v, 0) + ' s.')
      + ' The swing is drawn ' + fmt(PXm, 0) + ' units to the meter against a span of about a kilometer, so the picture exaggerates it about a thousandfold.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 250), draw });
})();
};
