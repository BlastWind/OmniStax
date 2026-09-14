/* Figures for section 13.4 Kinetic Theory: Atomic and Molecular Explanation of Pressure and Temperature. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['13.4'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, cycle, register, begin, line, arrow, dot, text, topline, hbracket, axes, curve, labeller, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- constants and the gases the section names ---------- */
const TAU = 2 * Math.PI, KB = 1.38e-23, NA = 6.02e23;
const gasOf = (value, label, name, elm, M, atoms) => ({ value, label, name, el: elm, M, m: (M * 1e-3) / NA, atoms });
const HE = gasOf('He', 'He', 'helium atom', 'He', 4.0026, 1);
const N2 = gasOf('N2', 'N₂', 'nitrogen molecule', 'N', 2 * 14.0067, 2);
const O2 = gasOf('O2', 'O₂', 'oxygen molecule', 'O', 32.00, 2);
const H2 = gasOf('H2', 'H₂', 'hydrogen molecule', 'H', 2.016, 2);
const GASES = [HE, N2, O2];
const pick = (v) => GASES.find((g) => g.value === v) || N2;
const options = GASES.map((g) => ({ value: g.value, label: g.label }));
const vrms = (T, m) => Math.sqrt((3 * KB * T) / m);
const vp = (T, m) => Math.sqrt((2 * KB * T) / m);
const commas = (s) => s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
const sup = (n) => String(n).split('').map((c) => SUP[c] || c).join('');
/* a number in scientific form, for canvas text and for the readout's TeX */
const parts = (x, d) => { let e = Math.floor(Math.log10(Math.abs(x))); let man = x / Math.pow(10, e); if (+Math.abs(man).toFixed(d) >= 10) { e += 1; man = x / Math.pow(10, e); } return { man: man.toFixed(d), e }; };
const sciTxt = (x, d = 2) => { const p = parts(x, d); return p.man + ' × 10' + sup(p.e); };
const sciTex = (x, d = 2) => { const p = parts(x, d); return p.man + '\\times10^{' + p.e + '}'; };
/* a seeded generator and a unit gaussian from it, so a figure's scatter is the same on every load */
function rng(seed) { let s = seed >>> 0; return () => { s = (s + 0x6d2b79f5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const gauss = (r) => Math.sqrt(-2 * Math.log(1 - r())) * Math.cos(TAU * r());
/* a molecule at (x, y) in the element palette: one disc for an atom, two for a diatomic molecule */
function molecule(ctx, x, y, g, r, ang = 0) {
  const c = F.el(g.el);
  ctx.save(); ctx.fillStyle = c; ctx.strokeStyle = alpha(PAL.ink, 0.45); ctx.lineWidth = 1.5;
  const at = (px, py) => { ctx.beginPath(); ctx.arc(px, py, r, 0, TAU); ctx.fill(); ctx.stroke(); };
  if (g.atoms === 1) at(x, y); else { const dx = 0.62 * r * Math.cos(ang), dy = 0.62 * r * Math.sin(ang); at(x - dx, y - dy); at(x + dx, y + dy); }
  ctx.restore();
}
/* a square box of gas: ink walls, drawn in section */
function box(ctx, b) { ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.strokeRect(b.l, b.t, b.r - b.l, b.b - b.t); ctx.restore(); }
/* a vertical bar on a fixed scale with its cap, as a meter */
function meter(ctx, x, w, yb, yt, frac, color) {
  const h = Math.max(0, Math.min(1, frac)) * (yb - yt);
  ctx.save(); ctx.fillStyle = alpha(color, 0.25); ctx.fillRect(x, yb - h, w, h); ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.strokeRect(x, yt, w, yb - yt); ctx.restore();
  line(ctx, x, yb - h, x + w, yb - h, color, 4);
  if (frac > 1) arrow(ctx, x + w / 2, yt + 40, x + w / 2, yt + 8, color, 4);
}

/* =====================================================================
   FIGURE 13.21 + 13.22: the box of gas and the molecule at the wall. N
   molecules of the chosen gas fly about a box 10 nm on a side, drawn in
   section, with x and y velocity components drawn from the distribution
   at T; they bounce off the rigid walls and never touch one another, as
   the book assumes. One is followed: when it strikes the right wall its
   momentum change and the force on the wall flash up. A meter beside the
   wall reads the momentum the wall received per unit time over the last
   3 s of the animation against the average N m v_x²/l the derivation
   predicts. Moves endlessly: a gas has a clock and no end, so no scrubber.
   The animation runs 1.4 × 10⁻¹¹ model seconds per real second, so that a
   nitrogen molecule at room temperature crosses the box in about 1.4 s.
===================================================================== */
(function () {
  const d = sim('sim-box', 700);
  /* a change of temperature, count or gas restarts the meter's window, so it never averages over two states */
  const restart = () => { hits = []; winStart = clock; };
  const Ts = ctl(d.controls, { label: '\\kTemp', cls: 'temperature', min: 100, max: 1000, step: 1, value: 293, unit: 'K', dec: 0, aria: 'the temperature of the gas', detents: [{ v: 293, label: '293' }], snap: false, onInput: restart });
  const Ns = ctl(d.controls, { label: 'N', cls: '', min: 1, max: 60, step: 1, value: 25, unit: '', dec: 0, aria: 'the number of molecules in the box', onInput: restart });
  const gas = choice(d.controls, { label: '\\text{the gas}', options, value: 'N2', aria: 'the gas in the box', onInput: restart });
  const LAB = choice(d.controls, { label: '\\text{Labels}', options: [{ value: 'off', label: 'off' }, { value: 'on', label: 'on' }], value: 'off', aria: 'the names of the velocity and its components on the molecule followed' });
  const cy = cycle(() => Infinity, 0);
  const L = 10e-9, MODEL = 1.4e-11, MAXN = 60, R = 7, W = 3;         /* the side of the box, model seconds per real second, the most molecules, a molecule's radius, the meter's window */
  const B = { l: 150, t: 110, r: 630, b: 590 }, S = B.r - B.l;         /* the box in the canvas */
  const KV = (S / L) * MODEL;                                          /* canvas units per second, per m/s */
  const FMAX = 6.0e-11;                                                /* the meter's scale, N: fixed against the sliders, an arrow past the cap */
  /* the molecules: fixed gaussian components and starting places, and the signs the walls have flipped */
  const r0 = rng(1304), ux = [], uy = [], x0 = [], y0 = [];
  for (let i = 0; i < MAXN; i++) { ux.push(gauss(r0)); uy.push(gauss(r0)); x0.push(B.l + R + 6 + r0() * (S - 2 * R - 12)); y0.push(B.t + R + 6 + r0() * (S - 2 * R - 12)); }
  ux[0] = 1.1; uy[0] = 0.55;                                           /* the molecule followed sets off toward the right wall at a typical speed */
  let x = [], y = [], sx = [], sy = [], hits = [], clock = 0, winStart = 0, flash = 0, flashY = 0, lastNow = -1;
  function reset() { x = x0.slice(); y = y0.slice(); sx = x0.map(() => 1); sy = y0.map(() => 1); hits = []; clock = 0; winStart = 0; flash = 0; }
  reset();
  const sigma = () => Math.sqrt((KB * Ts.v) / pick(gas.value).m);      /* the rms of one velocity component, m/s */
  function update(dt) {
    cy.step(dt, () => 1);
    const g = pick(gas.value), sg = sigma(), N = Ns.v; clock += dt; flash = Math.max(0, flash - dt);
    for (let i = 0; i < N; i++) {
      const vx = sx[i] * ux[i] * sg, vy = sy[i] * uy[i] * sg;
      x[i] += vx * KV * dt; y[i] += vy * KV * dt;
      if (x[i] > B.r - R) { x[i] = 2 * (B.r - R) - x[i]; sx[i] = -sx[i]; hits.push({ t: clock, J: 2 * g.m * Math.abs(vx) }); if (i === 0) { flash = 0.6; flashY = y[i]; } }
      else if (x[i] < B.l + R) { x[i] = 2 * (B.l + R) - x[i]; sx[i] = -sx[i]; }
      if (y[i] > B.b - R) { y[i] = 2 * (B.b - R) - y[i]; sy[i] = -sy[i]; }
      else if (y[i] < B.t + R) { y[i] = 2 * (B.t + R) - y[i]; sy[i] = -sy[i]; }
    }
    while (hits.length && hits[0].t < clock - W) hits.shift();
  }
  let hitsList = [];
  hover(d.stage, () => hitsList);
  function draw() {
    const { ctx, H } = begin(d.c);
    const now = cy.now(); if (now === 0 && lastNow !== 0) reset(); lastNow = now;
    const lab = labeller(ctx, H); lab.block(0, 0, 1400, 92);
    const g = pick(gas.value), T = Ts.v, N = Ns.v, sg = sigma(), on = LAB.value === 'on';
    const V = L * L * L, P = (N * KB * T) / V, Fth = (N * KB * T) / L, Fm = clock - winStart > 0.2 ? hits.reduce((a, h) => a + h.J, 0) / (Math.min(W, clock - winStart) * MODEL) : Fth;
    const vr = vrms(T, g.m), vx0 = Math.abs(sx[0] * ux[0] * sg), vy0 = Math.abs(sy[0] * uy[0] * sg), v0 = Math.hypot(vx0, vy0), dt0 = (2 * L) / vx0, dp0 = 2 * g.m * vx0;
    const tc = C('temperature'), pc = C('pressure'), vc = C('velocity'), mc = C('momentum'), fc = C('force');
    /* the box, its axes and its size */
    box(ctx, B);
    text(ctx, 'y', B.l - 26, B.t + 10, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'x', B.r + 26, B.b - 8, PAL.ink, { size: 22, weight: 600, align: 'center' });
    hbracket(ctx, B.l, B.r, B.b + 34, PAL.ink); text(ctx, 'l = 10 nm', (B.l + B.r) / 2, B.b + 34 + 22, PAL.ink, { size: 18, weight: 600, align: 'center' });
    /* the molecules, clipped to the box; the one followed wears a ring and its velocity */
    ctx.save(); ctx.beginPath(); ctx.rect(B.l + 2, B.t + 2, S - 4, S - 4); ctx.clip();
    hitsList = [];
    for (let i = N - 1; i >= 0; i--) {
      const vx = sx[i] * ux[i] * sg, vy = sy[i] * uy[i] * sg, ang = Math.atan2(vy, vx);
      molecule(ctx, x[i], y[i], g, R, ang + Math.PI / 2);
      hitsList.push({ x: x[i], y: y[i], r: R + 6, name: i === 0 ? 'the ' + g.name + ' followed' : g.name });
    }
    { const vx = sx[0] * ux[0] * sg, vy = sy[0] * uy[0] * sg, k = 0.12, px = x[0], py = y[0], n = Math.hypot(vx, vy) || 1;
      dot(ctx, px, py, PAL.ink, false, R + 6);
      line(ctx, px, py, px + vx * k, py, alpha(vc, 0.55), 3, [6, 6]); line(ctx, px + vx * k, py, px + vx * k, py + vy * k, alpha(vc, 0.55), 3, [6, 6]);
      arrow(ctx, px, py, px + vx * k, py + vy * k, vc, 5);
      if (on) {   /* the labels sit on a moving molecule, so they are off by default (rule 26.7) */
        lab.add('v', px + vx * k, py + vy * k, vx / n, vy / n, vc, 22, 18);
        lab.add('v_x', px + vx * k * 0.5, py, 0, vy < 0 ? 1 : -1, vc, 20, 18);
        lab.add('v_y', px + vx * k, py + vy * k * 0.5, vx < 0 ? -1 : 1, 0, vc, 20, 18);
      }
    }
    ctx.restore();
    lab.flush();
    /* the strike on the right wall: the momentum change of the molecule and the force on the wall */
    if (flash > 0) {
      const a = Math.min(1, flash / 0.35), yw = flashY;
      ctx.save(); ctx.fillStyle = alpha(fc, 0.35 * a); ctx.beginPath(); ctx.arc(B.r, yw, 22, 0, TAU); ctx.fill(); ctx.restore();
      arrow(ctx, B.r - 8, yw, B.r - 8 - 70, yw, alpha(mc, a), 5);
      text(ctx, 'Δp = 2mv_x', B.r - 86, yw - 24, alpha(mc, a), { size: 20, weight: 600, align: 'right', bg: PAL.panel });
      arrow(ctx, B.r + 4, yw, B.r + 56, yw, alpha(fc, a), 5);
      text(ctx, 'F on the wall', B.r + 30, yw + 26, alpha(fc, a), { size: 18, weight: 600, align: 'center', bg: PAL.panel });
    }
    /* the meter beside the right wall */
    const MX = 760, MW = 44;
    meter(ctx, MX, MW, B.b, B.t, Fm / FMAX, fc);
    { const yt = Math.max(B.t, B.b - (Fth / FMAX) * (B.b - B.t)); line(ctx, MX - 12, yt, MX + MW + 12, yt, PAL.ink, 3, [8, 6]); text(ctx, 'N m v_x²/l', MX + MW + 18, yt, PAL.ink, { size: 17, weight: 600, align: 'left' }); }
    text(ctx, 'force on the', MX + MW / 2, B.t - 46, fc, { size: 18, weight: 600, align: 'center' });
    text(ctx, 'right wall', MX + MW / 2, B.t - 24, fc, { size: 18, weight: 600, align: 'center' });
    text(ctx, 'over the last 3 s: ' + sciTxt(Fm, 2) + ' N', MX + MW / 2, B.b + 30, fc, { size: 17, align: 'center' });
    text(ctx, 'predicted: ' + sciTxt(Fth, 2) + ' N', MX + MW / 2, B.b + 54, PAL.ink, { size: 17, align: 'center' });
    /* the numbers, on the right */
    const PX = 960, rows = [
      [null, g.name + ', m = ' + sciTxt(g.m, 2) + ' kg', PAL.ink],
      ['T = ' + T + ' K', null, tc],
      ['v_rms = ' + fmt(vr, 0) + ' m/s', null, vc],
      [null, 'the molecule followed:', PAL.ink],
      ['v = ' + fmt(v0, 0) + ' m/s, v_x = ' + fmt(vx0, 0) + ' m/s', null, vc],
      [null, 'it strikes the right wall every', PAL.ink],
      ['Δt = 2l/v_x = ' + sciTxt(dt0, 2) + ' s', null, PAL.ink],
      [null, 'and each strike delivers', PAL.ink],
      ['Δp = 2mv_x = ' + sciTxt(dp0, 2) + ' kg·m/s', null, mc],
    ];
    let yy = 150;
    if (true) { ctx.save(); ctx.fillStyle = F.el(g.el); ctx.beginPath(); ctx.arc(PX + 8, yy, 8, 0, TAU); ctx.fill(); ctx.restore(); }
    rows.forEach(([bold, plain, col], i) => { const s = bold || plain; text(ctx, s, PX + (i === 0 ? 26 : 0), yy, col, { size: bold ? 21 : 18, weight: bold ? 600 : 400 }); yy += bold ? 40 : 30; });
    text(ctx, 'P = ' + sciTxt(P, 2) + ' Pa', PX, B.b - 20, pc, { size: 26, weight: 600 });
    text(ctx, fmt(P / 1.013e5, 2) + ' atm', PX + 300, B.b - 20, pc, { size: 20, weight: 400 });
    topline(ctx, 'At ' + T + ' K ' + (N === 1 ? 'the one ' + g.name + ' presses' : 'the ' + N + ' ' + g.name + 's press') + ' on the walls of the box at ' + sciTxt(P, 2) + ' Pa, ' + (P > 0.95e5 && P < 1.07e5 ? 'about one atmosphere.' : fmt(P / 1.013e5, 2) + ' atmospheres.'));
    readout(d.readout, `\\kPr V = \\tfrac{1}{3}Nm\\overline{v^2} = Nk\\kTemp \\;\\Rightarrow\\; \\kPr = \\frac{(${N})(1.38\\times10^{-23}\\ \\text{J/K})(${T}\\ \\text{K})}{${sciTex(V, 1)}\\ \\text{m}^3} = ${sciTex(P, 2)}\\ \\text{Pa}`,
      'The box is a cube 10 nm on a side, V = ' + sciTxt(V, 1) + ' m³, seen in section; its molecules move in and out of the page as well, which is why only a third of the mean square speed, 3kT/m = ' + sciTxt(vr * vr, 2) + ' m²/s², pushes on the right wall. The molecule followed crosses the box and back in Δt = 2l/vₓ = ' + sciTxt(dt0, 2) + ' s and delivers Δp = 2mvₓ = ' + sciTxt(dp0, 2) + ' kg·m/s at each strike, so on average it alone pushes on the wall with F = mvₓ²/l = ' + sciTxt(g.m * vx0 * vx0 / L, 2) + ' N.');
  }
  register(d.fig, { update, draw });
})();

/* =====================================================================
   FIGURE 13.23: the box of molecules with their random velocities. Forty
   molecules of the chosen gas with velocity arrows drawn from the
   distribution at T; beside them the average kinetic energy as a bar and
   the rms speed as an arrow. Still: the drawing answers its sliders.
===================================================================== */
(function () {
  const d = sim('sim-speeds', 660);
  const Ts = ctl(d.controls, { label: '\\kTemp', cls: 'temperature', min: 100, max: 1500, step: 1, value: 293, unit: 'K', dec: 0, aria: 'the temperature of the gas', detents: [{ v: 293, label: '293' }], snap: false });
  const gas = choice(d.controls, { label: '\\text{the gas}', options, value: 'N2', aria: 'the gas in the box' });
  const B = { l: 140, t: 110, r: 560, b: 530 }, S = B.r - B.l, R = 7, NM = 40, KA = 0.1;   /* the box, a molecule's radius, the count, canvas units per m/s of arrow */
  const KEMAX = 1.5 * KB * 1500, VMAX = vrms(1500, HE.m);                                /* the bar and arrow scales, fixed against the slider maxima */
  const r0 = rng(1323), pts = [];
  for (let i = 0; i < NM; i++) pts.push({ x: B.l + R + 10 + r0() * (S - 2 * R - 20), y: B.t + R + 10 + r0() * (S - 2 * R - 20), ux: gauss(r0), uy: gauss(r0) });
  let hitsList = [];
  hover(d.stage, () => hitsList);
  function draw() {
    const { ctx } = begin(d.c);
    const g = pick(gas.value), T = Ts.v, sg = Math.sqrt((KB * T) / g.m), KE = 1.5 * KB * T, vr = vrms(T, g.m);
    const tc = C('temperature'), vc = C('velocity'), ec = C('energy');
    box(ctx, B);
    ctx.save(); ctx.beginPath(); ctx.rect(B.l + 2, B.t + 2, S - 4, S - 4); ctx.clip();
    hitsList = [];
    pts.forEach((p) => { const vx = p.ux * sg, vy = p.uy * sg; arrow(ctx, p.x, p.y, p.x + vx * KA, p.y + vy * KA, vc, 3); });
    pts.forEach((p) => { molecule(ctx, p.x, p.y, g, R, Math.atan2(p.uy, p.ux) + Math.PI / 2); hitsList.push({ x: p.x, y: p.y, r: R + 6, name: g.name + ' at ' + fmt(Math.hypot(p.ux, p.uy) * sg, 0) + ' m/s' }); });
    ctx.restore();
    /* the legend under the box: the gas and an arrow the length of the rms speed */
    ctx.save(); ctx.fillStyle = F.el(g.el); ctx.beginPath(); ctx.arc(B.l + 10, B.b + 34, 8, 0, TAU); ctx.fill(); ctx.restore();
    text(ctx, g.name + ', m = ' + sciTxt(g.m, 2) + ' kg', B.l + 28, B.b + 34, PAL.ink, { size: 18 });
    arrow(ctx, B.r - vr * KA, B.b + 34 + 26, B.r, B.b + 34 + 26, vc, 3);
    text(ctx, 'an arrow this long is v_rms = ' + fmt(vr, 0) + ' m/s', B.r - vr * KA - 12, B.b + 34 + 26, vc, { size: 17, weight: 600, align: 'right' });
    /* the average kinetic energy as a bar, the same for every gas, and the rms speed as an arrow, which is not */
    const MX = 760, MW = 56;
    meter(ctx, MX, MW, B.b, B.t, KE / KEMAX, ec);
    text(ctx, sciTxt(KE, 2) + ' J', MX + MW / 2, B.b + 30, ec, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'average kinetic energy', MX + MW / 2, B.b + 58, ec, { size: 18, weight: 600, align: 'center' });
    text(ctx, 'of one molecule', MX + MW / 2, B.b + 80, ec, { size: 18, weight: 600, align: 'center' });
    text(ctx, 'the same for every gas at ' + T + ' K', MX + MW / 2, B.b + 104, PAL.ink, { size: 16, align: 'center' });
    const AX = 1010, aLen = (vr / VMAX) * (B.b - B.t);
    line(ctx, AX, B.b, AX, B.t, PAL.rule, 1.5);
    arrow(ctx, AX, B.b, AX, B.b - aLen, vc, 6);
    text(ctx, fmt(vr, 0) + ' m/s', AX, B.b + 30, vc, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'rms speed', AX, B.b + 58, vc, { size: 18, weight: 600, align: 'center' });
    text(ctx, 'of a molecule', AX, B.b + 80, vc, { size: 18, weight: 600, align: 'center' });
    text(ctx, 'shorter for a heavier molecule', AX, B.b + 104, PAL.ink, { size: 16, align: 'center' });
    text(ctx, 'T = ' + T + ' K', 1220, B.t + 10, tc, { size: 24, weight: 600, align: 'center' });
    /* the three gases at this temperature, for comparison */
    let yy = B.t + 70;
    text(ctx, 'at this temperature', 1220, yy, PAL.ink, { size: 17, align: 'center' }); yy += 34;
    GASES.forEach((q) => { ctx.save(); ctx.fillStyle = F.el(q.el); ctx.beginPath(); ctx.arc(1130, yy, 7, 0, TAU); ctx.fill(); ctx.restore(); text(ctx, q.label + '  ' + fmt(vrms(T, q.m), 0) + ' m/s', 1150, yy, q === g ? vc : PAL.muted, { size: 18, weight: q === g ? 600 : 400 }); yy += 32; });
    topline(ctx, 'At ' + T + ' K a ' + g.name + ' has an average kinetic energy of ' + sciTxt(KE, 2) + ' J and an rms speed of ' + fmt(vr, 0) + ' m/s.');
    readout(d.readout, `\\begin{aligned}\\kKEbar &= \\tfrac{3}{2}k\\kTemp = \\tfrac{3}{2}(1.38\\times10^{-23}\\ \\text{J/K})(${T}\\ \\text{K}) = ${sciTex(KE, 2)}\\ \\text{J} \\\\ \\kvrms &= \\sqrt{\\frac{3k\\kTemp}{m}} = \\sqrt{\\frac{3(1.38\\times10^{-23}\\ \\text{J/K})(${T}\\ \\text{K})}{${sciTex(g.m, 2)}\\ \\text{kg}}} = ${fmt(vr, 0)}\\ \\text{m/s}\\end{aligned}`,
      'The molecules move in every direction alike, so their large speeds produce no wind, and each travels only a tiny distance between collisions. A sound wave through this gas travels at a speed set by these molecular speeds, about 340 m/s in air at room temperature, and faster in hot air and in a light gas such as helium, whose atoms move fastest of the three at any temperature.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 13.24 + 13.25: the Maxwell-Boltzmann distribution at two
   temperatures for the chosen gas, with the most probable and rms speeds
   marked on each curve. Still: the graph answers its sliders. The speed
   axis is fixed per gas from the slider maxima (0 to 2500 m/s for N₂ and
   O₂, 0 to 6000 m/s for He) and the probability axis from the lowest
   temperature, whose curve is the tallest.
===================================================================== */
(function () {
  const d = sim('sim-distribution', 620);
  const T1 = ctl(d.controls, { label: '\\kTempone', cls: 'temperature', min: 100, max: 1500, step: 1, value: 300, unit: 'K', dec: 0, aria: 'the first temperature', detents: [{ v: 300, label: '300' }], snap: false });
  const T2 = ctl(d.controls, { label: '\\kTemptwo', cls: 'temperature', min: 100, max: 1500, step: 1, value: 600, unit: 'K', dec: 0, aria: 'the second temperature', detents: [{ v: 600, label: '600' }], snap: false });
  const gas = choice(d.controls, { label: '\\text{the gas}', options, value: 'O2', aria: 'the gas' });
  const G = { l: 170, r: 1290, t: 110, b: 520 };
  const mb = (m, T) => { const a = m / (2 * KB * T); const k = 4 * Math.PI * Math.pow(a / Math.PI, 1.5); return (v) => k * v * v * Math.exp(-a * v * v); };
  function draw() {
    const { ctx, H } = begin(d.c);
    const g = pick(gas.value), ta = T1.v, tb = T2.v, same = ta === tb;
    const tc = C('temperature'), vc = C('velocity');
    const VX = g === HE ? 6000 : 2500, nx = g === HE ? 6 : 5;
    const fmax = mb(g.m, 100)(vp(100, g.m)) * 1.06;
    const A = axes(ctx, G, [0, VX], [0, fmax], { xl: 'speed v (m/s)', xc: vc, yl: 'probability', yc: PAL.ink, nx, ny: 4, fx: (v) => commas(fmt(v, 0)), fy: () => '' });
    const lab = labeller(ctx, H); lab.block(0, 0, 1400, 92);
    const curves = same ? [[ta, 'T₁ = T₂ = ' + ta + ' K']] : [[ta, 'T₁ = ' + ta + ' K'], [tb, 'T₂ = ' + tb + ' K']];
    curves.forEach(([T, name], i) => {
      const f = mb(g.m, T), pk = vp(T, g.m), rm = vrms(T, g.m);
      ctx.save(); if (i === 1) ctx.setLineDash([16, 10]); curve(ctx, f, 0, VX, A.X, A.Y, PAL.ink, 5, 200); ctx.restore();   /* the second temperature's curve is dashed: the same ink, told apart by decoration */
      /* the most probable speed at the peak, the rms speed a little to its right */
      line(ctx, A.X(pk), G.b, A.X(pk), A.Y(f(pk)), vc, 2.5, [10, 10]);
      line(ctx, A.X(rm), G.b, A.X(rm), A.Y(f(rm)), vc, 2.5, [4, 8]);
      dot(ctx, A.X(pk), A.Y(f(pk)), vc, false, 9); dot(ctx, A.X(rm), A.Y(f(rm)), vc, true, 9);
      lab.add(name, A.X(pk), A.Y(f(pk)), 0, -1, tc, 21, 26);
      /* the numbers of each curve, in a table at the top right, so that only the names sit on the graph */
      const ty = G.t + 60 + i * 30;
      text(ctx, name, G.r - 420, ty, tc, { size: 18, weight: 600, align: 'right' });
      text(ctx, 'v_p = ' + fmt(pk, 0) + ' m/s', G.r - 400, ty, vc, { size: 18, weight: 600, align: 'left' });
      text(ctx, 'v_rms = ' + fmt(rm, 0) + ' m/s', G.r - 200, ty, vc, { size: 18, weight: 600, align: 'left' });
    });
    lab.flush();
    ctx.save(); ctx.fillStyle = F.el(g.el); ctx.beginPath(); ctx.arc(G.r - 420 - 8, G.t + 24, 8, 0, TAU); ctx.fill(); ctx.restore();
    text(ctx, g.label + ', ' + g.name + 's', G.r - 400, G.t + 24, PAL.ink, { size: 19 });
    text(ctx, 'hollow: the most probable speed, at the peak; filled: the rms speed', G.r, G.t + 60 + curves.length * 30 + 4, vc, { size: 16, align: 'right' });
    const pa = vp(ta, g.m), ra = vrms(ta, g.m), pb = vp(tb, g.m), rb = vrms(tb, g.m);
    topline(ctx, same ? 'At ' + ta + ' K the most probable speed of ' + (g.atoms === 1 ? 'a helium atom' : 'an ' + g.name) + ' is ' + fmt(pa, 0) + ' m/s and its rms speed ' + fmt(ra, 0) + ' m/s; the two curves lie on one another.'
      : 'At ' + ta + ' K the most probable speed of ' + (g.atoms === 1 ? 'a helium atom' : 'an ' + g.name) + ' is ' + fmt(pa, 0) + ' m/s and its rms speed ' + fmt(ra, 0) + ' m/s; at ' + tb + ' K the curve moves to ' + fmt(pb, 0) + ' and ' + fmt(rb, 0) + ' m/s and ' + (tb > ta ? 'flattens.' : 'sharpens.'));
    readout(d.readout, `\\kvrms = \\sqrt{\\frac{3k\\kTempone}{m}} = \\sqrt{\\frac{3(1.38\\times10^{-23}\\ \\text{J/K})(${ta}\\ \\text{K})}{${sciTex(g.m, 2)}\\ \\text{kg}}} = ${fmt(ra, 0)}\\ \\text{m/s} \\qquad \\kvrms = \\sqrt{\\frac{3k\\kTemptwo}{m}} = ${fmt(rb, 0)}\\ \\text{m/s}`,
      'At each temperature the most probable speed, at the peak of the curve, lies below the rms speed, ' + fmt(pa, 0) + ' m/s against ' + fmt(ra, 0) + ' m/s at T₁, and the long tail on the right holds the few molecules moving at several times the rms speed. ' + (same ? 'Raise either temperature and its curve moves out to higher speeds and broadens.' : 'The higher temperature gives the broader curve, since the range of speeds widens as the speeds rise.'));
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: escape velocity against temperature. The rms speed of hydrogen,
   helium, nitrogen and oxygen molecules against T, with the escape
   velocity of Earth or the Moon as a level; the set T drops a line with a
   marker on each curve. Still: the graph answers its sliders. Axes fixed
   at 0 to 30,000 K and 0 to 15 km/s from the slider maximum.
===================================================================== */
(function () {
  const d = sim('sim-escape', 660);
  const Ts = ctl(d.controls, { label: '\\kTemp', cls: 'temperature', min: 100, max: 30000, step: 10, value: 19800, unit: 'K', dec: 0, aria: 'the temperature of the gas', detents: [{ v: 250, label: '250' }, { v: 19800, label: '19,800' }], snap: false });
  const world = choice(d.controls, { label: '\\text{the world}', options: [{ value: 'earth', label: 'Earth' }, { value: 'moon', label: 'the Moon' }], value: 'earth', aria: 'whose escape velocity is drawn' });
  const G = { l: 170, r: 1110, t: 110, b: 500 }, TX = 30000, VY = 15000, TBX = 1150;   /* the graph and the table beside it */
  const LIST = [H2, HE, N2, O2];
  const vesc = () => (world.value === 'moon' ? 2380 : 11100);
  const kms = () => (world.value === 'moon' ? '2.38' : '11.1');
  const whose = () => (world.value === 'moon' ? "the Moon's" : "Earth's");
  const tesc = (m, v) => (m * v * v) / (3 * KB);
  let hitsList = [];
  hover(d.stage, () => hitsList);
  function draw() {
    const { ctx, H } = begin(d.c);
    const T = Ts.v, ve = vesc(), tc = C('temperature'), vc = C('velocity');
    hitsList = [];
    text(ctx, 'at T = ' + commas(fmt(T, 0)) + ' K', TBX, G.t + 8, tc, { size: 19, weight: 600 });
    const A = axes(ctx, G, [0, TX], [0, VY], { xl: 'temperature T (K)', xc: tc, yl: 'rms speed (km/s)', yc: vc, nx: 6, ny: 3, fx: (t) => commas(fmt(t, 0)), fy: (v) => fmt(v / 1000, 0) });
    const lab = labeller(ctx, H); lab.block(0, 0, 1400, 92);
    /* the escape velocity as a level, and the set temperature as a drop line */
    line(ctx, G.l, A.Y(ve), G.r, A.Y(ve), vc, 3, [12, 10]);
    lab.add(whose() + ' escape velocity, ' + kms() + ' km/s', G.l + 30, A.Y(ve), 0.4, -1, vc, 18, 22);
    line(ctx, A.X(T), G.b, A.X(T), G.t, tc, 2.5, [4, 8]);
    lab.add('T = ' + commas(fmt(T, 0)) + ' K', A.X(T), G.t + 4, T > TX * 0.8 ? -1 : 1, 0.6, tc, 20, 22);
    /* the four gases */
    const speeds = {};
    LIST.forEach((g, i) => {
      const f = (t) => vrms(Math.max(t, 1), g.m);
      const tEnd = f(TX) > VY ? (VY * VY * g.m) / (3 * KB) : TX;   /* where the curve leaves the top of the graph */
      curve(ctx, f, 0, tEnd, A.X, A.Y, i === 1 ? PAL.ink : alpha(PAL.ink, 0.6), i === 1 ? 5 : 3.5, 160);
      const te = tesc(g.m, ve);
      if (te <= TX) dot(ctx, A.X(te), A.Y(ve), vc, false, 9);
      const v = f(T); speeds[g.value] = v;
      const p = F.pinned(ctx, G, A.X, A.Y, T, v, vc);
      hitsList.push({ x: p.x, y: p.y, r: 16, name: g.name + ', ' + fmt(v / 1000, 2) + ' km/s at ' + commas(fmt(T, 0)) + ' K' });
      /* the numbers, in the table beside the graph */
      const ty = G.t + 44 + i * 58;
      ctx.save(); ctx.fillStyle = F.el(g.el); ctx.beginPath(); ctx.arc(TBX + 8, ty, 7, 0, TAU); ctx.fill(); ctx.restore();
      text(ctx, g.label + '  ' + fmt(v / 1000, 2) + ' km/s', TBX + 24, ty, vc, { size: 19, weight: 600 });
      text(ctx, te <= TX ? 'reaches ' + kms() + ' km/s at ' + commas(fmt(te, 0)) + ' K' : 'reaches ' + kms() + ' km/s at ' + sciTxt(te, 2) + ' K', TBX, ty + 24, PAL.ink, { size: 15 });
      /* the name of each curve at its right end, or just inside the top where it leaves the graph */
      lab.add(g.label, A.X(tEnd), A.Y(Math.min(f(TX), VY)), tEnd < TX ? 1 : -1, tEnd < TX ? 0.6 : -0.6, PAL.ink, 19, 18);
    });
    lab.flush();
    ctx.save(); LIST.forEach((g, i) => { ctx.fillStyle = F.el(g.el); ctx.beginPath(); ctx.arc(G.l + 10 + i * 240, G.b + 96, 7, 0, TAU); ctx.fill(); text(ctx, g.label + ', m = ' + sciTxt(g.m, 2) + ' kg', G.l + 26 + i * 240, G.b + 96, PAL.ink, { size: 16 }); }); ctx.restore();
    text(ctx, 'hollow: where the rms speed reaches the escape velocity; filled: the rms speed at the set temperature', G.l + 10, G.b + 126, vc, { size: 16, align: 'left' });
    const he = speeds.He, tHe = tesc(HE.m, ve);
    topline(ctx, Math.abs(T - tHe) < 150 ? 'At ' + commas(fmt(T, 0)) + ' K the rms speed of helium reaches ' + whose() + ' escape velocity of ' + kms() + ' km/s, while nitrogen and oxygen are still far below it.'
      : 'At ' + commas(fmt(T, 0)) + ' K the rms speed of helium is ' + fmt(he / 1000, 2) + ' km/s, ' + (he > ve ? 'above' : 'below') + ' ' + whose() + ' escape velocity of ' + kms() + ' km/s; hydrogen is at ' + fmt(speeds.H2 / 1000, 2) + ', nitrogen at ' + fmt(speeds.N2 / 1000, 2) + ' and oxygen at ' + fmt(speeds.O2 / 1000, 2) + ' km/s.');
    readout(d.readout, `\\kTemp = \\frac{m\\overline{v^2}}{3k} = \\frac{(6.65\\times10^{-27}\\ \\text{kg})(${kms()}\\times10^{3}\\ \\text{m/s})^2}{3(1.38\\times10^{-23}\\ \\text{J/K})} = ${sciTex(tHe, 2)}\\ \\text{K}\\ \\text{for helium}`,
      (world.value === 'moon'
        ? 'The Moon’s escape velocity is so low that the rms speed of hydrogen reaches it at ' + commas(fmt(tesc(H2.m, ve), 0)) + ' K, that of helium at ' + commas(fmt(tHe, 0)) + ' K and even that of oxygen at ' + commas(fmt(tesc(O2.m, ve), 0)) + ' K, so at the temperature of its sunlit surface a far larger share of every gas lies in the tail above the escape velocity than on Earth, which is why the Moon has lost almost its entire atmosphere.'
        : 'At the top of the atmosphere the temperature is about 250 K, where the rms speed of helium is only ' + fmt(vrms(250, HE.m) / 1000, 2) + ' km/s; the atoms that leave are the few in the tail of the distribution whose speed at some instant exceeds 11.1 km/s. Oxygen would need ' + sciTxt(tesc(O2.m, ve), 2) + ' K for its rms speed to reach the escape velocity, so almost none of it is ever lost.'));
  }
  register(d.fig, { update: () => {}, draw });
})();
};
