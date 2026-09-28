/* Figures for section 28.3 Length Contraction. The page binds position (L_0, L),
   velocity (v, c) and time (Δt, Δt_0), as ch28/COLOR.md gives 28.3; the proper
   value of each is its dashed variant. γ and v/c are untyped and in ink. The two
   frames are told apart by F.cat(0) for the Earth and F.cat(1) for the traveler. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['28.3'] = function (root, F) {
const { fmt, tex, C, PAL, alpha, ctl, cycle, register, begin, line, arrow, dot, text, topline, label, hbracket } = F;
const sim = (id, H) => F.sim(root, id, H);

const gammaOf = (b) => 1 / Math.sqrt(1 - b * b);
const sig = (n, k) => {
  if (!n) return fmt(0, k - 1);
  const e = Math.floor(Math.log10(Math.abs(n)));
  return fmt(n, Math.max(0, k - 1 - e));
};

function cloud(ctx, x, y) {
  ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.12); ctx.strokeStyle = alpha(PAL.ink, 0.45); ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(x - 22, y + 6, 18, 0, 2 * Math.PI); ctx.arc(x, y - 6, 24, 0, 2 * Math.PI); ctx.arc(x + 24, y + 6, 17, 0, 2 * Math.PI);
  ctx.fill(); ctx.restore();
  ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.45); ctx.lineWidth = 2;
  [[x - 22, y + 6, 18], [x, y - 6, 24], [x + 24, y + 6, 17]].forEach(([a, b, r]) => { ctx.beginPath(); ctx.arc(a, b, r, 0, 2 * Math.PI); ctx.stroke(); });
  ctx.restore();
}

/* a clock face whose hand has run through the fraction k of one turn; a proper time has a dashed hand */
function clock(ctx, x, y, r, k, proper, caption) {
  const T = C('time');
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = alpha(PAL.ink, 0.6); ctx.lineWidth = 3;
  ctx.beginPath(); ctx.arc(x, y, r, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
  for (let i = 0; i < 12; i++) {
    const a = i * Math.PI / 6;
    line(ctx, x + Math.cos(a) * r * 0.78, y + Math.sin(a) * r * 0.78, x + Math.cos(a) * r * 0.92, y + Math.sin(a) * r * 0.92, alpha(PAL.ink, 0.45), 2);
  }
  const a = -Math.PI / 2 + 2 * Math.PI * k;
  line(ctx, x, y, x + Math.cos(a) * r * 0.8, y + Math.sin(a) * r * 0.8, T, 4, proper ? [7, 5] : undefined);
  dot(ctx, x, y, T, true, 4);
  text(ctx, caption, x, y + r + 22, T, { size: 20, weight: 600, align: 'center' });
}

function ship(ctx, x, y, s) {
  const L = 90 * s, h = 16 * s;
  ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.85); ctx.beginPath();
  ctx.moveTo(x, y); ctx.lineTo(x - 28 * s, y - h); ctx.lineTo(x - L, y - h);
  ctx.lineTo(x - L - 14 * s, y - h - 12 * s); ctx.lineTo(x - L - 14 * s, y + h + 12 * s);
  ctx.lineTo(x - L, y + h); ctx.lineTo(x - 28 * s, y + h); ctx.closePath(); ctx.fill(); ctx.restore();
}

function planet(ctx, x, y) {
  ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.18); ctx.strokeStyle = alpha(PAL.ink, 0.7); ctx.lineWidth = 3;
  ctx.beginPath(); ctx.arc(x, y, 22, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
}

function star(ctx, x, y) {
  for (let i = 0; i < 8; i++) {
    const a = i * Math.PI / 4, r1 = i % 2 ? 12 : 16, r2 = i % 2 ? 22 : 30;
    line(ctx, x + Math.cos(a) * r1, y + Math.sin(a) * r1, x + Math.cos(a) * r2, y + Math.sin(a) * r2, alpha(PAL.ink, 0.75), 3);
  }
  dot(ctx, x, y, PAL.ink, true, 10);
}

/* a bracket for a proper length (dashed) or a contracted one (solid) */
function span(ctx, x1, x2, y, proper, name) {
  ctx.save(); if (proper) ctx.setLineDash([10, 7]);
  hbracket(ctx, Math.min(x1, x2), Math.max(x1, x2), y, C('position'), name, { side: 'below' });
  ctx.restore();
}

function frameTag(ctx, s, y, i) {
  text(ctx, s, 60, y, F.cat(i), { size: 20, weight: 600, align: 'left', bg: PAL.panel });
}

/* =====================================================================
   Figure 28.10 · sim-muon-frames · moving · flat (root rule 28.1)
   One muon trip from production to decay, in the Earth's frame (above) and
   in the muon's (below), both driven by the same fraction p of the trip.
   The muon's proper lifetime is the section's 2.20 μs. Fixed scale 200 units
   per km: at the slider's 0.990c, L_0 = 4.63 km reaches x = 1126.
===================================================================== */
(function () {
  const d = sim('sim-muon-frames', 520);
  const vS = ctl(d.controls, { label: '\\kv/\\kc', cls: 'velocity', min: 0.5, max: 0.99, step: 0.001, value: 0.95, unit: '', dec: 3, onInput: reset,
    aria: 'the speed of the muon as a fraction of the speed of light', specials: [{ at: 0.95, label: '0.950c' }] });
  const cy = cycle(() => 1, 1.2);
  function reset() { cy.reset(); }

  const X0 = 200, PER_KM = 200, TAU0 = 2.20e-6, CL = 3.00e8;
  const A = { tag: 96, cloud: 140, path: 185, ground: 215, span: 238 };
  const B = { tag: 318, cloud: 362, path: 407, ground: 437, span: 460 };

  function draw() {
    const { ctx } = begin(d.c);
    const b = vS.v, g = gammaOf(b), p = cy.now();
    const L0km = b * CL * g * TAU0 / 1000, Lkm = L0km / g, dtus = g * TAU0 * 1e6;
    const L0 = L0km * PER_KM, L = Lkm * PER_KM;

    topline(ctx, 'At ' + fmt(b, 3) + 'c the Earth measures ' + sig(L0km, 3) + ' km in ' + sig(dtus, 3) + ' μs; the muon measures ' + sig(Lkm, 3) + ' km in 2.20 μs.');

    frameTag(ctx, 'Earth’s frame', A.tag, 0);
    line(ctx, 60, A.ground, 1200, A.ground, alpha(PAL.ink, 0.3), 2);
    [X0, X0 + L0].forEach((x) => { cloud(ctx, x, A.cloud); line(ctx, x, A.cloud + 24, x, A.ground, alpha(PAL.ink, 0.35), 2, [4, 8]); });
    span(ctx, X0, X0 + L0, A.span, true, 'L_{0} = ' + sig(L0km, 3) + ' km');
    const xm = X0 + L0 * p;
    if (p < 1) {
      dot(ctx, xm, A.path, PAL.ink, true, 9);
      arrow(ctx, xm + 14, A.path, xm + 14 + 90 * b, A.path, C('velocity'), 4);
      text(ctx, 'v', xm + 14 + 45 * b, A.path - 20, C('velocity'), { size: 22, weight: 600, bg: PAL.panel, align: 'center' });
    } else dot(ctx, xm, A.path, PAL.ink, false, 11);
    clock(ctx, 1260, 150, 38, p, false, 'Δt = ' + sig(dtus * p, 3) + ' μs');

    frameTag(ctx, 'muon’s frame', B.tag, 1);
    line(ctx, 60, B.ground, 1200, B.ground, alpha(PAL.ink, 0.3), 2);
    const xa = X0 - L * p, xb = X0 + L * (1 - p);
    [xa, xb].forEach((x) => { cloud(ctx, x, B.cloud); line(ctx, x, B.cloud + 24, x, B.ground, alpha(PAL.ink, 0.35), 2, [4, 8]); });
    span(ctx, xa, xb, B.span, false, 'L = ' + sig(Lkm, 3) + ' km');
    dot(ctx, X0, B.path, PAL.ink, p < 1, p < 1 ? 9 : 11);
    label(ctx, 'muon', X0, B.path, { side: 'right', gap: 22, size: 20 });
    arrow(ctx, 1100, B.ground - 18, 1100 - 90 * b, B.ground - 18, C('velocity'), 4);
    text(ctx, 'v', 1100 - 45 * b, B.ground - 38, C('velocity'), { size: 22, weight: 600, bg: PAL.panel, align: 'center' });
    clock(ctx, 1260, 372, 38, p, true, 'Δt_{0} = ' + sig(2.20 * p, 3) + ' μs');

    tex(d.readout, '\\kLrel = \\kLo\\sqrt{1 - \\frac{\\kv^{2}}{\\kc^{2}}} = (' + sig(L0km, 3) + '\\;\\text{km})\\sqrt{1 - ' + fmt(b, 3) + '^{2}} = ' + sig(Lkm, 3) + '\\;\\text{km}');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1 / 5), draw });
})();

/* =====================================================================
   Figure 28.11 · sim-alpha-centauri · moving · flat
   The Earth to Alpha Centauri, L_0 = 4.300 ly drawn 950 units long from
   x = 180. Above, the ship crosses it in Δt = L_0/v; below, the Earth and the
   star slide past the ship through L = L_0/γ in Δt_0 = Δt/γ. The special at
   √(1 − 1/900) is the example's γ = 30.00.
===================================================================== */
(function () {
  const d = sim('sim-alpha-centauri', 520);
  const B30 = Math.sqrt(1 - 1 / 900);
  const vS = ctl(d.controls, { label: '\\kv/\\kc', cls: 'velocity', min: 0.05, max: 0.9999, step: 0.0000001, value: B30, unit: '', dec: 5, onInput: reset,
    aria: 'the speed of the ship as a fraction of the speed of light', specials: [{ at: B30, label: 'γ = 30.00' }, { at: 0.95, label: '0.950c' }] });
  const cy = cycle(() => 1, 1.2);
  function reset() { cy.reset(); }

  const X0 = 180, L0LY = 4.3, PX = 950 / L0LY;
  const A = { tag: 80, body: 160, ground: 200, span: 226 };
  const B = { tag: 302, body: 382, ground: 422, span: 448 };

  function draw() {
    const { ctx } = begin(d.c);
    const b = vS.v, g = gammaOf(b), p = cy.now();
    const Lly = L0LY / g, dt = L0LY / b, dt0 = dt / g;
    const L0 = L0LY * PX, L = Lly * PX;

    topline(ctx, 'At γ = ' + sig(g, 4) + ' the astronaut measures ' + sig(Lly, 4) + ' ly between the Earth and Alpha Centauri, not 4.300 ly.');

    frameTag(ctx, 'Earth’s frame', A.tag, 0);
    line(ctx, 60, A.ground, 1240, A.ground, alpha(PAL.ink, 0.18), 2);
    planet(ctx, X0, A.body); star(ctx, X0 + L0, A.body);
    text(ctx, "Earth", X0, A.body + 44, PAL.ink, { size: 20, bg: PAL.panel, align: 'center' });
    text(ctx, "Alpha Centauri", X0 + L0 + 20, A.body + 46, PAL.ink, { size: 20, bg: PAL.panel, align: 'right' });
    span(ctx, X0, X0 + L0, A.span, true, 'L_{0} = 4.300 ly');
    const xs = X0 + 30 + (L0 - 60) * p;
    ship(ctx, xs, A.body - 44, 0.7);
    if (p < 1) {
      arrow(ctx, xs + 10, A.body - 44, xs + 10 + 80 * b, A.body - 44, C('velocity'), 4);
      text(ctx, 'v', xs + 10 + 40 * b, A.body - 64, C('velocity'), { size: 22, weight: 600, bg: PAL.panel, align: 'center' });
    }
    clock(ctx, 1260, 150, 34, p, false, 'Δt = ' + sig(dt * p, 4) + ' y');

    frameTag(ctx, 'ship’s frame', B.tag, 1);
    line(ctx, 60, B.ground, 1240, B.ground, alpha(PAL.ink, 0.18), 2);
    const xe = X0 - L * p, xa = X0 + L * (1 - p);
    if (xe > 20) planet(ctx, xe, B.body);
    star(ctx, xa, B.body);
    span(ctx, Math.max(xe, 16), xa, B.span, false, 'L = ' + sig(Lly, 4) + ' ly');
    ship(ctx, X0 + 90, B.body - 42, 0.7);
    label(ctx, 'ship', X0 + 90, B.body - 42, { side: 'right', gap: 24, size: 20 });
    arrow(ctx, 1100, B.ground - 16, 1100 - 90 * b, B.ground - 16, C('velocity'), 4);
    text(ctx, 'v', 1100 - 45 * b, B.ground - 36, C('velocity'), { size: 22, weight: 600, bg: PAL.panel, align: 'center' });
    clock(ctx, 1260, 372, 34, p, true, 'Δt_{0} = ' + sig(dt0 * p, 4) + ' y');

    tex(d.readout, '\\kLrel = \\frac{\\kLo}{\\gamma} = \\frac{4.300\\;\\text{ly}}{' + sig(g, 4) + '} = ' + sig(Lly, 4) + '\\;\\text{ly}');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1 / 5), draw });
})();

/* =====================================================================
   Figure 28.12 · sim-contracted-field · still · flat
   The field lines of an electron moving along a pipe. A line leaving at θ_0
   in the rest pattern leaves at θ with tan θ = γ tan θ_0 in the lab, which is
   the rest pattern contracted along the motion by 1/γ. 24 lines, 175 units
   long; the electron at (520, 280), the coil at x = 1080.
===================================================================== */
(function () {
  const d = sim('sim-contracted-field', 520);
  const vS = ctl(d.controls, { label: '\\kv/\\kc', cls: 'velocity', min: 0, max: 0.99, step: 0.001, value: 0.95, unit: '', dec: 3,
    aria: 'the speed of the electron as a fraction of the speed of light', specials: [{ at: 0.95, label: '0.950c' }] });

  const EX = 520, EY = 285, R = 175, PIPE = 42, N = 24;

  function draw() {
    const { ctx } = begin(d.c);
    const b = vS.v, g = gammaOf(b), k = Math.sqrt(1 - b * b);

    topline(ctx, 'At ' + fmt(b, 3) + 'c the field pattern is ' + fmt(k, 3) + ' of its rest length along the pipe.');

    line(ctx, 60, EY - PIPE, 1340, EY - PIPE, alpha(PAL.ink, 0.5), 3);
    line(ctx, 60, EY + PIPE, 1340, EY + PIPE, alpha(PAL.ink, 0.5), 3);
    text(ctx, 'beam pipe', 120, EY - PIPE - 18, PAL.muted, { size: 17 });

    for (let i = 0; i < N; i++) {
      const a0 = (i + 0.5) * 2 * Math.PI / N;
      const ux = Math.cos(a0) / g, uy = Math.sin(a0), n = Math.hypot(ux, uy);
      line(ctx, EX + (ux / n) * 18, EY + (uy / n) * 18, EX + (ux / n) * R, EY + (uy / n) * R, alpha(PAL.ink, 0.75), 2.5);
      const hx = EX + (ux / n) * (R * 0.7), hy = EY + (uy / n) * (R * 0.7), px = -uy / n, py = ux / n;
      ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.75); ctx.beginPath();
      ctx.moveTo(hx - (ux / n) * 10 + px * 6, hy - (uy / n) * 10 + py * 6); ctx.lineTo(hx, hy); ctx.lineTo(hx - (ux / n) * 10 - px * 6, hy - (uy / n) * 10 - py * 6);
      ctx.closePath(); ctx.fill(); ctx.restore();
    }
    text(ctx, 'field lines', EX + 150, EY - R + 10, PAL.muted, { size: 17, align: 'left', bg: PAL.panel });

    dot(ctx, EX, EY, F.el('e-'), true, 14);
    label(ctx, 'electron', EX, EY + 14, { side: 'below', gap: 20, size: 20 });
    if (b > 0.005) {
      arrow(ctx, 170, EY, 170 + 150 * b, EY, C('velocity'), 5);
      text(ctx, 'v', 170 + 75 * b, EY - 22, C('velocity'), { size: 22, weight: 600, bg: PAL.panel, align: 'center' });
    }

    const CX = 1080;
    for (let j = 0; j < 6; j++) {
      ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.7); ctx.lineWidth = 3;
      ctx.beginPath(); ctx.ellipse(CX + j * 22, EY, 14, PIPE + 26, 0, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
    }
    text(ctx, 'coil', CX + 55, EY + PIPE + 50, PAL.ink, { size: 20, bg: PAL.panel, align: 'center' });

    tex(d.readout, '\\kLrel = \\kLo\\sqrt{1 - \\frac{\\kv^{2}}{\\kc^{2}}} = ' + fmt(k, 3) + '\\,\\kLo,\\quad \\gamma = ' + sig(g, 3));
  }
  register(d.fig, { update: () => {}, draw });
})();
};
