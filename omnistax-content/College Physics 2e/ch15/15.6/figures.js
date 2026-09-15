/* Figures for section 15.6 Entropy and the Second Law of Thermodynamics: Disorder and the Unavailability of Energy.
   Boots against the section's text article. Every figure here compares two
   end states, two paths or two accounts of one heat transfer, and none of
   that runs on a clock, so every figure is a still picture: none registers a
   cycle, none carries a transport, and a slider's input alone redraws it.
   The page binds entropy, energy and temperature: a heat transfer is an
   arrow in the energy hue as wide as the energy it carries, a temperature
   wears its hue on the label of the reservoir that holds it, and an entropy
   change is a bar or a gauge in the entropy hue, a loss told from a gain by
   its sign and direction and never by a second hue. Reservoirs, states,
   engines, the Sun and the Earth are ink. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['15.6'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, hover, register, begin, line, arrow, dot, text, topline, axes } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const TAU = 2 * Math.PI;
/* a value that rounds to nothing at d decimals is nothing, so that no reading shows a signed zero */
const eps = (v, d) => (Math.abs(v) < 0.5 * Math.pow(10, -d) ? 0 : v);
/* a number with the typographic minus, and one that always carries its sign */
const num = (v, d) => { const x = eps(v, d); return (x < 0 ? '−' : '') + fmt(Math.abs(x), d); };
const plus = (v, d) => { const x = eps(v, d); return (x === 0 ? '' : x < 0 ? '−' : '+') + fmt(Math.abs(x), d); };
const texnum = (v, d) => { const x = eps(v, d); return (x < 0 ? '-' : '') + fmt(Math.abs(x), d); };
/* three significant figures, the way the book writes 6.67 J/K and 16.0 J/K */
const sig3 = (v) => { const a = Math.abs(v); if (a < 1e-9) return '0'; const d = Math.max(0, 2 - Math.floor(Math.log10(a))); return (v < 0 ? '−' : '') + fmt(a, Math.min(d, 4)); };
const sig3tex = (v) => sig3(v).replace('−', '-');
const plus3 = (v) => (eps(v, 2) > 0 ? '+' : '') + sig3(v);
/* a number in the book's scientific form, 3.34 × 10⁵, on the canvas and in LaTeX */
const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
function sci(v) {
  const a = Math.abs(v); if (a < 1e-9) return '0'; if (a < 1000) return sig3(v);
  const e = Math.floor(Math.log10(a)), m = a / Math.pow(10, e);
  return (v < 0 ? '−' : '') + fmt(m, 2) + ' × 10' + String(e).split('').map((c) => SUP[c]).join('');
}
function scitex(v) {
  const a = Math.abs(v); if (a < 1e-9) return '0'; if (a < 1000) return sig3tex(v);
  const e = Math.floor(Math.log10(a)), m = a / Math.pow(10, e);
  return (v < 0 ? '-' : '') + fmt(m, 2) + '\\times10^{' + e + '}';
}
/* a seeded generator, so a scatter is the same on every redraw */
function rng(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
/* a bold arrow in the style of the book's: a shaft of width w and a head a little wider,
   drawn as one filled shape from (x1, y1) to the tip at (x2, y2) */
function fatArrow(ctx, x1, y1, x2, y2, w, color) {
  const L = Math.hypot(x2 - x1, y2 - y1); if (L < 4) return;
  const ux = (x2 - x1) / L, uy = (y2 - y1) / L, px = -uy, py = ux;
  const hl = Math.min(L * 0.5, w + 26), hw = w / 2 + 12, sw = w / 2;
  const bx = x2 - ux * hl, by = y2 - uy * hl;
  ctx.save(); ctx.fillStyle = color; ctx.beginPath();
  ctx.moveTo(x1 + px * sw, y1 + py * sw); ctx.lineTo(bx + px * sw, by + py * sw); ctx.lineTo(bx + px * hw, by + py * hw);
  ctx.lineTo(x2, y2); ctx.lineTo(bx - px * hw, by - py * hw); ctx.lineTo(bx - px * sw, by - py * sw); ctx.lineTo(x1 - px * sw, y1 - py * sw);
  ctx.closePath(); ctx.fill(); ctx.restore();
}
/* the width of an arrow for the energy it carries: a hairline for nothing, and never fatter than the cap */
const wOf = (v, k, cap = 58) => (v <= 0 ? 0 : Math.min(cap, 6 + k * v));
/* a heat reservoir: a box in ink, named at the top, its temperature written in the temperature hue beneath the name */
function reservoir(ctx, x1, y1, x2, y2, name, temp) {
  ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3.5; ctx.fillRect(x1, y1, x2 - x1, y2 - y1); ctx.strokeRect(x1, y1, x2 - x1, y2 - y1); ctx.restore();
  const cx = (x1 + x2) / 2, cy = (y1 + y2) / 2;
  text(ctx, name, cx, cy - 16, PAL.ink, { size: 20, align: 'center' });
  text(ctx, temp, cx, cy + 16, C('temperature'), { size: 22, weight: 600, align: 'center' });
}
/* a Carnot engine: a circle in ink filled the colour of the page, named beneath */
function engine(ctx, cx, cy, r, name) {
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(cx, cy, r, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
  text(ctx, name, cx, cy, PAL.ink, { size: 20, align: 'center' });
}
/* a bar of an entropy change on a fixed axis: filled for a gain, hatched for a loss, its value written at its end */
function bar(ctx, xc, w, Y, v, color, lo, hi) {
  const y0 = Y(0), yv = Y(Math.min(hi, Math.max(lo, v))), clipped = v > hi || v < lo;
  const top = Math.min(y0, yv), h = Math.abs(yv - y0);
  if (h >= 1) {
    ctx.save(); ctx.beginPath(); ctx.rect(xc - w / 2, top, w, h); ctx.clip();
    if (v > 0) { ctx.fillStyle = alpha(color, 0.55); ctx.fillRect(xc - w / 2, top, w, h); }
    else { ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.beginPath(); for (let s = -h; s < w; s += 12) { ctx.moveTo(xc - w / 2 + s, top + h); ctx.lineTo(xc - w / 2 + s + h, top); } ctx.stroke(); }
    ctx.restore();
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.strokeRect(xc - w / 2, top, w, h); ctx.restore();
  }
  return { y: yv, clipped };
}
/* a sun in ink, its rays drawn as strokes, and an earth in ink with a meridian and a parallel */
function sunSprite(ctx, x, y, r) {
  ctx.save(); ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.panel; ctx.lineWidth = 3.5;
  ctx.beginPath(); for (let i = 0; i < 16; i++) { const a = (i / 16) * TAU; ctx.moveTo(x + (r + 8) * Math.cos(a), y + (r + 8) * Math.sin(a)); ctx.lineTo(x + (r + 30) * Math.cos(a), y + (r + 30) * Math.sin(a)); } ctx.stroke();
  ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke();
  ctx.restore();
}
function earthSprite(ctx, x, y, r) {
  ctx.save(); ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.panel; ctx.lineWidth = 3.5;
  ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke();
  ctx.lineWidth = 2; ctx.beginPath(); ctx.ellipse(x, y, r * 0.45, r, 0, 0, TAU); ctx.stroke();
  ctx.beginPath(); ctx.ellipse(x, y, r, r * 0.35, 0, 0, TAU); ctx.stroke();
  ctx.restore();
}

/* =====================================================================
   FIGURE 15.32: state 1 to state 2 by a reversible and an irreversible
   path. Each state carries a gauge of its entropy; the reversible path
   carries a heat transfer Q at a temperature T, and the level in state 2
   stands above or below the level in state 1 by Q/T. The irreversible path
   loops beneath and arrives at the same level, because entropy is a
   property of state. Still: two end states have no clock between them.
===================================================================== */
(function () {
  const d = sim('sim-state-paths', 600);
  const q = ctl(d.controls, { label: '\\kQh', cls: 'energy', min: -8000, max: 8000, step: 100, value: 4000, unit: 'J', dec: 0, aria: 'the heat transfer along the reversible path, positive into the system' });
  const t = ctl(d.controls, { label: '\\kTemp', cls: 'temperature', min: 100, max: 1000, step: 10, value: 250, unit: 'K', dec: 0, aria: 'the absolute temperature at which the reversible process takes place' });
  const X1 = 330, X2 = 1070, CY = 300, R = 150, GW = 90, GH = 170, KG = 1.0;   /* the gauge holds −80 to +80 J/K about its base, one unit a joule per kelvin */
  function state(ctx, cx, name) {
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(cx, CY, R, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, name, cx, CY - R + 28, PAL.ink, { size: 22, weight: 600, align: 'center' });
  }
  /* a tank of entropy: filled to its level; the base level dashed where it differs, the change outlined */
  function gauge(ctx, cx, level, base, color, label) {
    const x = cx - GW / 2, top = CY - 64, bot = top + GH;
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2.5; ctx.fillRect(x, top, GW, GH); ctx.strokeRect(x, top, GW, GH); ctx.restore();
    ctx.save(); ctx.fillStyle = alpha(color, 0.35); ctx.fillRect(x + 2, level, GW - 4, bot - level - 2); ctx.restore();
    if (Math.abs(level - base) >= 1) {
      const t0 = Math.min(level, base), h = Math.abs(level - base);
      ctx.save(); ctx.beginPath(); ctx.rect(x + 2, t0, GW - 4, h); ctx.clip();
      if (level < base) { ctx.fillStyle = alpha(color, 0.6); ctx.fillRect(x, t0, GW, h); }
      else { ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.beginPath(); for (let s = -h; s < GW; s += 12) { ctx.moveTo(x + s, t0 + h); ctx.lineTo(x + s + h, t0); } ctx.stroke(); }
      ctx.restore();
      line(ctx, x - 8, base, x + GW + 8, base, color, 2.5, [8, 8]);
    }
    line(ctx, x, level, x + GW, level, color, 4);
    text(ctx, label, cx, top - 26, color, { size: 20, weight: 600, align: 'center' });
  }
  function draw() {
    const { ctx } = begin(d.c);
    const sc = C('entropy'), ec = C('energy'), tc = C('temperature');
    const Q = q.v, T = t.v, dS = Q / T;
    const base = CY + 26, level2 = base - dS * KG;   /* the base sits so that ±80 J/K fills the tank exactly */
    /* the reversible path, straight across, carrying its heat transfer at its temperature */
    const y = CY - 30;
    arrow(ctx, X1 + R + 6, y, X2 - R - 6, y, PAL.ink, 5);
    text(ctx, 'reversible process', 700, y - 34, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'Q = ' + num(Q, 0) + ' J', 640, y + 34, ec, { size: 22, weight: 600, align: 'right' });
    text(ctx, 'at  T = ' + fmt(T, 0) + ' K', 660, y + 34, tc, { size: 22, weight: 600, align: 'left' });
    /* the irreversible path, looping beneath and arriving at the same state */
    const yb = 540;
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 5; ctx.beginPath();
    ctx.moveTo(X1, CY + R); ctx.bezierCurveTo(X1, yb, X1 + 120, yb, 700, yb); ctx.bezierCurveTo(X2 - 120, yb, X2, yb, X2, CY + R + 40); ctx.stroke(); ctx.restore();
    arrow(ctx, X2, CY + R + 40, X2, CY + R + 6, PAL.ink, 5);
    text(ctx, 'irreversible process, the same ΔS', 700, yb + 32, PAL.ink, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    /* the two states with their gauges */
    state(ctx, X1, 'state 1'); state(ctx, X2, 'state 2');
    gauge(ctx, X1, base, base, sc, 'S_1');
    gauge(ctx, X2, level2, base, sc, 'S_2 = S_1 ' + (eps(dS, 2) >= 0 ? '+ ' : '− ') + sig3(Math.abs(dS)) + ' J/K');
    const verb = eps(dS, 2) > 0 ? 'raises the entropy by ' + sig3(dS) + ' J/K' : eps(dS, 2) < 0 ? 'lowers the entropy by ' + sig3(-dS) + ' J/K' : 'leaves the entropy unchanged';
    topline(ctx, (eps(Q, 0) === 0 ? 'No heat transfer along the reversible path at ' + fmt(T, 0) + ' K ' : 'A reversible heat transfer of ' + num(Q, 0) + ' J at ' + fmt(T, 0) + ' K ') + verb + ', and the irreversible path ends at the same entropy.');
    readout(d.readout, `\\kdS = \\left(\\frac{\\kQh}{\\kTemp}\\right)_{\\text{rev}} = \\frac{${texnum(Q, 0)}\\ \\text{J}}{${fmt(T, 0)}\\ \\text{K}} = ${sig3tex(dS)}\\ \\text{J/K} = S_2 - S_1`,
      'Entropy is a property of state, like internal energy: the entropy of state 2 is what it is however the system got there. The irreversible path may have involved a quite different heat transfer along the way, but it ends at the same S<sub>2</sub>, so its change in entropy is the one the reversible path gives.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 15.33: heat transfer from a hot reservoir to a cold one, either
   directly, which is irreversible, or by two reversible processes that
   produce the same end states. Beside the reservoirs, three bars: the hot
   reservoir's loss −Q/T_h, the cold reservoir's gain Q/T_c, and the total,
   which is positive because the same heat makes a larger change at the
   lower temperature. Still: two reservoirs at fixed temperatures have no
   clock, and the book's two panels are two accounts of one end state.
===================================================================== */
(function () {
  const d = sim('sim-irreversible-transfer', 640);
  const how = choice(d.controls, { label: '\\text{the process}', options: [{ value: 'direct', label: 'direct' }, { value: 'rev', label: 'reversible' }], value: 'direct', aria: 'whether the heat transfer is direct or by two reversible processes' });
  const q = ctl(d.controls, { label: '\\kQh', cls: 'energy', min: 0, max: 8000, step: 100, value: 4000, unit: 'J', dec: 0, aria: 'the heat transfer from the hot reservoir to the cold one' });
  const th = ctl(d.controls, { label: '\\kTemph', cls: 'temperature', min: 300, max: 1000, step: 10, value: 600, unit: 'K', dec: 0, aria: 'the temperature of the hot reservoir' });
  const tc = ctl(d.controls, { label: '\\kTempc', cls: 'temperature', min: 100, max: 1000, step: 10, value: 250, unit: 'K', dec: 0, aria: 'the temperature of the cold reservoir' });
  const BX1 = 170, BX2 = 560, HY1 = 110, HY2 = 220, CY1 = 440, CY2 = 550, MX = (BX1 + BX2) / 2, K = 0.0085;
  const box = { l: 800, r: 1320, t: 135, b: 520 }, LO = -40, HI = 80;   /* the entropy axis is fixed at −40 to 80 J/K: 8000 J at 100 K is 80 J/K */
  function draw() {
    const { ctx } = begin(d.c);
    const sc = C('entropy'), ec = C('energy');
    const Q = q.v, Th = th.v, Tc = tc.v, dSh = -Q / Th, dSc = Q / Tc, tot = dSh + dSc, w = wOf(Q, K);
    const rev = how.value === 'rev';
    /* the two reservoirs, the hot one above */
    reservoir(ctx, BX1, HY1, BX2, HY2, 'hot reservoir', 'T_h = ' + fmt(Th, 0) + ' K');
    reservoir(ctx, BX1, CY1, BX2, CY2, 'cold reservoir', 'T_c = ' + fmt(Tc, 0) + ' K');
    if (w > 0) {
      if (!rev) {
        fatArrow(ctx, MX, HY2 + 2, MX, CY1 - 2, w, ec);
        text(ctx, 'Q = ' + fmt(Q, 0) + ' J', MX + w / 2 + 22, 330, ec, { size: 22, weight: 600, align: 'left' });
        text(ctx, 'direct from T_h to T_c', MX + w / 2 + 22, 360, PAL.muted, { size: 17, align: 'left' });
      } else {
        fatArrow(ctx, MX + 30, HY2 + 2, MX + 130, HY2 + 96, w, ec);
        fatArrow(ctx, MX - 130, CY1 - 96, MX - 30, CY1 - 2, w, ec);
        text(ctx, 'Q = ' + fmt(Q, 0) + ' J out', MX + 130 + w / 2 + 4, HY2 + 96, ec, { size: 22, weight: 600, align: 'left' });
        text(ctx, 'reversible process', MX + 130 + w / 2 + 4, HY2 + 124, PAL.muted, { size: 17, align: 'left' });
        text(ctx, 'Q = ' + fmt(Q, 0) + ' J in', MX - 130 - w / 2 - 4, CY1 - 96, ec, { size: 22, weight: 600, align: 'right' });
        text(ctx, 'reversible process', MX - 130 - w / 2 - 4, CY1 - 124, PAL.muted, { size: 17, align: 'right' });
      }
    } else {
      line(ctx, MX, HY2, MX, CY1, alpha(ec, 0.35), 2, [6, 8]);
      text(ctx, 'no heat transfer', MX + 22, 330, PAL.muted, { size: 17, align: 'left' });
    }
    text(ctx, rev ? 'two reversible processes' : 'irreversible', MX, CY2 + 40, PAL.ink, { size: 20, align: 'center' });
    /* the bars on a fixed axis */
    const { Y } = axes(ctx, box, [0, 3], [LO, HI], { yl: 'ΔS (J/K)', yc: sc, nx: 3, ny: 6, fx: () => '' });
    const cols = [['ΔS_h', dSh, 'hot reservoir'], ['ΔS_c', dSc, 'cold reservoir'], ['ΔS_tot', tot, 'total']];
    cols.forEach(([nm, v, who], i) => {
      const xc = box.l + ((i + 0.5) / 3) * (box.r - box.l), bw = 90;
      const { y } = bar(ctx, xc, bw, Y, v, sc, LO, HI);
      const above = v >= 0;
      text(ctx, plus3(v) + ' J/K', xc, above ? y - 24 : y + 24, sc, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
      text(ctx, nm, xc, box.b + 28, sc, { size: 22, weight: 600, align: 'center' });
      text(ctx, who, xc, box.b + 56, PAL.muted, { size: 17, align: 'center' });
    });
    const backwards = Tc > Th, level = Tc === Th;
    topline(ctx, eps(Q, 0) === 0 ? 'With no heat transfer neither reservoir changes its entropy.'
      : 'Heat transfer of ' + fmt(Q, 0) + ' J from ' + fmt(Th, 0) + ' K to ' + fmt(Tc, 0) + ' K takes ' + sig3(-dSh) + ' J/K from the hot reservoir and gives ' + sig3(dSc) + ' J/K to the cold one, '
        + (level ? 'and the total does not change.' : backwards ? 'a decrease of ' + sig3(-tot) + ' J/K, which the second law forbids.' : 'an increase of ' + sig3(tot) + ' J/K.'));
    readout(d.readout, `\\kdStot = -\\frac{\\kQH}{\\kTemph} + \\frac{\\kQC}{\\kTempc} = -\\frac{${fmt(Q, 0)}\\ \\text{J}}{${fmt(Th, 0)}\\ \\text{K}} + \\frac{${fmt(Q, 0)}\\ \\text{J}}{${fmt(Tc, 0)}\\ \\text{K}} = ${sig3tex(tot)}\\ \\text{J/K}`,
      backwards ? 'The reservoir named hot is now the colder of the two, so this transfer would run from cold to hot and lower the total entropy. That never happens spontaneously, which is the second law stated in terms of entropy.'
        : level ? 'With the two reservoirs at the same temperature the loss and the gain are equal and the total change is zero, as it is for every reversible process.'
          : (rev ? 'Each reversible process changes one reservoir by Q/T at that reservoir\u2019s own temperature, and the two together leave the reservoirs exactly as the direct transfer does, so the entropy changes are the same. '
            : 'The direct transfer is irreversible, but the same heat leaving the hot reservoir and entering the cold one by two reversible processes produces the same end states, so its change in entropy can be found from them. ')
            + 'Because the same heat makes a larger change at the lower temperature, the cold reservoir gains more than the hot one loses; bring the temperatures together and the difference shrinks toward zero, the reversible limit.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 15.34: two Carnot engines fed the same heat transfer, one straight
   from the hot reservoir and one after the heat has fallen irreversibly
   to a colder reservoir. Each arrow is as wide as the energy it carries;
   the second work arrow is the thinner by ΔS·T_0. Still: two engines
   compared by their work per cycle have no time in them.
===================================================================== */
(function () {
  const d = sim('sim-two-engines', 750);
  const qh = ctl(d.controls, { label: '\\kQH', cls: 'energy', min: 1000, max: 8000, step: 100, value: 4000, unit: 'J', dec: 0, aria: 'the heat transfer fed to each engine' });
  const th = ctl(d.controls, { label: '\\kTemph', cls: 'temperature', min: 400, max: 1000, step: 10, value: 600, unit: 'K', dec: 0, aria: 'the temperature of the hot reservoir' });
  const tm = ctl(d.controls, { label: '\\kTemphprime', cls: 'temperature', min: 150, max: 1000, step: 10, value: 250, unit: 'K', dec: 0, aria: 'the temperature of the colder reservoir the heat falls to before the second engine' });
  const tc = ctl(d.controls, { label: '\\kTempc', cls: 'temperature', min: 50, max: 400, step: 10, value: 100, unit: 'K', dec: 0, aria: 'the temperature of the cold reservoir' });
  const K = 0.0085, RY1 = 150, RY2 = 240, CY1 = 600, CY2 = 690, EY = 420, ER = 88;
  function panel(ctx, x1, x2, Qh, W, Qc, tag) {
    const cx = (x1 + x2) / 2;
    engine(ctx, cx, EY, ER, 'Carnot engine');
    const wq = wOf(Qh, K), ww = wOf(W, K), wc = wOf(Qc, K);
    fatArrow(ctx, cx, RY2 + 2, cx, EY - ER - 2, wq, C('energy'));
    text(ctx, 'Q_h = ' + fmt(Qh, 0) + ' J', cx - wq / 2 - 14, (RY2 + EY - ER) / 2, C('energy'), { size: 21, weight: 600, align: 'right' });
    if (ww > 0) fatArrow(ctx, cx + ER + 2, EY, cx + ER + 190, EY, ww, C('energy')); else line(ctx, cx + ER, EY, cx + ER + 190, EY, alpha(C('energy'), 0.35), 2, [6, 8]);
    text(ctx, 'W = ' + fmt(W, 0) + ' J', cx + ER + 96, EY - ww / 2 - 26, C('energy'), { size: 21, weight: 600, align: 'center' });
    if (wc > 0) fatArrow(ctx, cx, EY + ER + 2, cx, CY1 - 2, wc, C('energy')); else line(ctx, cx, EY + ER, cx, CY1, alpha(C('energy'), 0.35), 2, [6, 8]);
    text(ctx, 'Q_c = ' + fmt(Qc, 0) + ' J', cx - wc / 2 - 14, (EY + ER + CY1) / 2, C('energy'), { size: 21, weight: 600, align: 'right' });
    text(ctx, tag, cx, CY2 + 36, PAL.ink, { size: 20, align: 'center' });
  }
  function draw() {
    const { ctx } = begin(d.c);
    const sc = C('entropy'), ec = C('energy');
    const Qh = qh.v, Th = th.v, Tm = tm.v, Tc = tc.v;
    const effA = Math.max(0, 1 - Tc / Th), effB = Math.max(0, 1 - Tc / Tm);
    const WA = effA * Qh, WB = effB * Qh, dS = -Qh / Th + Qh / Tm, T0 = Tc, Wun = dS * T0, falls = Tm < Th;
    /* (a): the engine fed straight from the hot reservoir */
    reservoir(ctx, 200, RY1, 460, RY2, 'hot reservoir', 'T_h = ' + fmt(Th, 0) + ' K');
    reservoir(ctx, 200, CY1, 460, CY2, 'cold reservoir', 'T_c = ' + fmt(Tc, 0) + ' K');
    panel(ctx, 200, 460, Qh, WA, Qh - WA, '(a) fed directly');
    /* (b): the heat falls first to a colder reservoir, then feeds the engine */
    reservoir(ctx, 660, RY1, 860, RY2, 'hot reservoir', 'T_h = ' + fmt(Th, 0) + ' K');
    reservoir(ctx, 940, RY1, 1200, RY2, 'colder reservoir', 'T′_h = ' + fmt(Tm, 0) + ' K');
    reservoir(ctx, 940, CY1, 1200, CY2, 'cold reservoir', 'T_c = ' + fmt(Tc, 0) + ' K');
    const wf = wOf(Qh, K), ym = (RY1 + RY2) / 2;
    if (falls) fatArrow(ctx, 862, ym, 938, ym, wf, ec); else line(ctx, 862, ym, 938, ym, alpha(ec, 0.35), 2, [6, 8]);
    text(ctx, fmt(Qh, 0) + ' J', 900, RY1 - 24, ec, { size: 21, weight: 600, align: 'center' });
    text(ctx, falls ? 'entropy increases by ' + sig3(dS) + ' J/K' : 'no heat falls to a hotter reservoir', 760, RY2 + 28, falls ? sc : PAL.muted, { size: 18, weight: falls ? 600 : 400, align: 'center', bg: PAL.panel });
    panel(ctx, 940, 1200, Qh, WB, Qh - WB, '(b) fed after the heat has fallen to ' + fmt(Tm, 0) + ' K');
    const lost = WA - WB;
    topline(ctx, 'Fed directly from ' + fmt(Th, 0) + ' K the engine does ' + fmt(WA, 0) + ' J of work; fed after the ' + fmt(Qh, 0) + ' J has fallen to ' + fmt(Tm, 0) + ' K it does ' + fmt(WB, 0) + ' J, '
      + (falls ? 'and ' + fmt(lost, 0) + ' J can no longer be done.' : 'which is no less, because the heat has not fallen.'));
    readout(d.readout, `\\kWunavail = \\kdS \\cdot \\kTempo = (${sig3tex(dS)}\\ \\text{J/K})(${fmt(T0, 0)}\\ \\text{K}) = ${texnum(Wun, 0)}\\ \\text{J} = ${fmt(WA, 0)}\\ \\text{J} - ${fmt(WB, 0)}\\ \\text{J}`,
      falls ? 'Engine (a) works at the Carnot efficiency 1 − ' + fmt(Tc, 0) + ' K/' + fmt(Th, 0) + ' K = ' + fmt(effA, 3) + ' and does ' + fmt(WA, 0) + ' J; engine (b), fed after the heat has fallen to ' + fmt(Tm, 0) + ' K, works at 1 − ' + fmt(Tc, 0) + ' K/' + fmt(Tm, 0) + ' K = ' + fmt(effB, 3) + ' and does ' + fmt(WB, 0) + ' J. The fall raised the entropy by ' + sig3(dS) + ' J/K, and the work lost is that increase times the lowest temperature used, ' + fmt(T0, 0) + ' K. The energy is not lost; it can no longer be turned into work.'
        : 'Heat does not transfer spontaneously to a reservoir at the same or a higher temperature, so nothing falls, the entropy does not increase, and both engines are fed the same heat at the same temperature. Set T′<sub>h</sub> below T<sub>h</sub> to see the work the fall costs.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 15.35: ice melting from order to disorder. The molecules of the
   ice sit in a hexagonal lattice, each in a fixed place with a fixed
   orientation; the ones that have melted take random positions and
   orientations in the liquid. The heat transfer mL_f enters at 273 K, and
   the bar shows the entropy the water gains. Still: the comparison of the
   two arrangements is the idea, and the fraction melted is what the reader
   sets; molecules jittering to look warm would be a dummy loop.
===================================================================== */
(function () {
  const d = sim('sim-melting-ice', 620);
  const m = ctl(d.controls, { label: 'm', cls: '', min: 0.1, max: 5, step: 0.05, value: 1, unit: 'kg', dec: 2, aria: 'the mass of ice' });
  const f = ctl(d.controls, { label: '\\text{fraction melted}', cls: '', min: 0, max: 100, step: 1, value: 100, unit: '%', dec: 0, aria: 'the fraction of the ice that has melted' });
  const LF = 334000, T = 273, ICX = 330, ICY = 340, A = 34;
  /* the hexagonal lattice, sorted outward, so the molecules leave from the outside in */
  const lattice = [];
  for (let i = -8; i <= 8; i++) for (let j = -8; j <= 8; j++) { const x = A * (i + j / 2), y = A * 0.866 * j; if (Math.hypot(x, y) <= 190) lattice.push({ x, y, r: Math.hypot(x, y) }); }
  lattice.sort((a, b) => a.r - b.r);
  /* the liquid's slots: a jittered grid shuffled once, so a molecule keeps its place as more melt */
  const LB = { l: 730, r: 1050, t: 130, b: 550 };
  const slots = []; const rand = rng(1506);
  for (let i = 0; i < 9; i++) for (let j = 0; j < 11; j++) slots.push({ x: LB.l + 22 + i * 34.5 + (rand() - 0.5) * 16, y: LB.t + 24 + j * 36 + (rand() - 0.5) * 16, a: rand() * TAU });
  for (let i = slots.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [slots[i], slots[j]] = [slots[j], slots[i]]; }
  /* a water molecule: one oxygen and two hydrogens in the element palette, pointing the way a */
  function water(ctx, x, y, a) {
    const hx = (s) => x + 11 * Math.cos(a + s * 0.92), hy = (s) => y + 11 * Math.sin(a + s * 0.92);
    ctx.save(); ctx.lineWidth = 1.5; ctx.strokeStyle = PAL.ink;
    for (const s of [-1, 1]) { ctx.fillStyle = F.el('H'); ctx.beginPath(); ctx.arc(hx(s), hy(s), 4.5, 0, TAU); ctx.fill(); ctx.stroke(); }
    ctx.fillStyle = F.el('O'); ctx.beginPath(); ctx.arc(x, y, 7.5, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
  }
  const hits = [];
  hover(d.stage, () => hits);
  const BX = 1230, BT = 130, BB = 540, SMAX = 6500;   /* the bar holds 0 to 6.5 × 10³ J/K: 5.00 kg of ice is 6.12 × 10³ */
  function draw() {
    const { ctx } = begin(d.c);
    const sc = C('entropy'), ec = C('energy'), tc = C('temperature');
    const M = m.v, fr = f.v / 100, N = Math.min(lattice.length, Math.round(30 + 10 * M)), n = Math.round(fr * N);
    const Q = fr * M * LF, dS = Q / T;
    hits.length = 0;
    /* the crystal: the innermost N − n molecules stay, all oriented alike */
    for (let i = 0; i < N - n; i++) { const p = lattice[i]; water(ctx, ICX + p.x, ICY + p.y, -Math.PI / 2); hits.push({ x: ICX + p.x, y: ICY + p.y, r: 14, name: 'a water molecule held in the ice crystal' }); }
    /* the places the melted molecules have left, as faint rings, so the crystal's shape is still read */
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.22); ctx.lineWidth = 1.5;
    for (let i = N - n; i < N; i++) { const p = lattice[i]; ctx.beginPath(); ctx.arc(ICX + p.x, ICY + p.y, 7.5, 0, TAU); ctx.stroke(); hits.push({ x: ICX + p.x, y: ICY + p.y, r: 12, name: 'the place a molecule held in the crystal before it melted' }); }
    ctx.restore();
    /* the liquid: the n that have melted, each at its own slot and orientation */
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.setLineDash([6, 8]); ctx.strokeRect(LB.l, LB.t, LB.r - LB.l, LB.b - LB.t); ctx.restore();
    for (let i = 0; i < n; i++) { const s = slots[i % slots.length]; water(ctx, s.x, s.y, s.a); hits.push({ x: s.x, y: s.y, r: 14, name: 'a water molecule in the liquid, with no fixed position or orientation' }); }
    text(ctx, 'order', ICX, 104, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'ice, ' + fmt(M * (1 - fr), 2) + ' kg', ICX, 576, PAL.ink, { size: 20, align: 'center' });
    text(ctx, 'disorder', (LB.l + LB.r) / 2, 104, PAL.ink, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'water, ' + fmt(M * fr, 2) + ' kg', (LB.l + LB.r) / 2, 576, PAL.ink, { size: 20, align: 'center' });
    /* the melting, with its heat transfer and temperature */
    arrow(ctx, 560, 340, 700, 340, PAL.ink, 4);
    text(ctx, 'melting', 630, 300, PAL.ink, { size: 20, align: 'center' });
    text(ctx, 'Q = ' + sci(Q) + ' J', 630, 376, ec, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'at T = 273 K', 630, 404, tc, { size: 20, weight: 600, align: 'center' });
    /* the entropy gained, as one bar on a fixed scale */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(BX - 45, BT, 90, BB - BT); ctx.restore();
    line(ctx, BX - 45, BB, BX + 45, BB, PAL.muted, 2);
    const h = ((BB - BT) * Math.min(dS, SMAX)) / SMAX;
    if (h >= 1) { ctx.save(); ctx.fillStyle = alpha(sc, 0.55); ctx.fillRect(BX - 45, BB - h, 90, h); ctx.strokeStyle = sc; ctx.lineWidth = 3; ctx.strokeRect(BX - 45, BB - h, 90, h); ctx.restore(); }
    text(ctx, 'ΔS = ' + (eps(dS, 0) > 0 ? '+' : '') + sci(dS) + ' J/K', BX, BB - h - 26, sc, { size: 21, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'entropy gained', BX, BB + 28, sc, { size: 20, weight: 600, align: 'center' });
    topline(ctx, fr === 0 ? 'None of the ' + fmt(M, 2) + ' kg of ice has melted, so no heat transfer has entered it and its entropy is unchanged.'
      : 'Melting ' + (fr === 1 ? '' : fmt(f.v, 0) + '% of ') + fmt(M, 2) + ' kg of ice at 0 °C takes ' + sci(Q) + ' J of heat transfer and raises its entropy by ' + sci(dS) + ' J/K.');
    const frac = fr === 1 ? '' : `(${fmt(fr, 2)})`;
    readout(d.readout, `\\kdS = \\frac{\\kQh}{\\kTemp} = \\frac{${frac}mL_{\\text{f}}}{\\kTemp} = \\frac{${frac}(${fmt(M, 2)}\\ \\text{kg})(334\\ \\text{kJ/kg})}{273\\ \\text{K}} = ${scitex(dS)}\\ \\text{J/K}`,
      'The heat transfer into the ice does not raise its temperature; it breaks the crystal, and each molecule that leaves it takes no fixed position or orientation. The entropy the water gains is the measure of that disorder.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 15.36: the Sun, the Earth and deep space. A heat transfer leaves
   the Sun and ends in deep space at 3 K; the Earth in its path keeps a
   small part and may lower its own entropy. Three bars beneath show the
   Sun's small loss, the Earth's decrease and deep space's enormous gain,
   and their total stays positive. Still: the account of one transfer.
===================================================================== */
(function () {
  const d = sim('sim-sun-earth', 720);
  const q = ctl(d.controls, { label: '\\kQh', cls: 'energy', min: 400, max: 2000, step: 10, value: 1000, unit: 'J', dec: 0, aria: 'the heat transfer from the Sun into deep space' });
  const th = ctl(d.controls, { label: '\\kTemph', cls: 'temperature', min: 3000, max: 8000, step: 1, value: 5773, unit: 'K', dec: 0, aria: 'the temperature of the Sun' });
  const ds = ctl(d.controls, { label: '\\kdSsyst', cls: 'entropy', min: -100, max: 20, step: 1, value: -50, unit: 'J/K', dec: 0, aria: 'the change in entropy of the Earth' });
  const TC = 3, SX = 150, SY = 200, EX = 760, K = 0.03;
  const box = { l: 200, r: 1300, t: 400, b: 640 }, LO = -100, HI = 700;   /* the entropy axis is fixed at −100 to 700 J/K: 2000 J into deep space at 3 K is 667 J/K */
  function draw() {
    const { ctx } = begin(d.c);
    const sc = C('entropy'), ec = C('energy'), tc = C('temperature');
    const Q = q.v, Th = th.v, dSs = ds.v, dSsun = -Q / Th, dSspace = Q / TC, dSenv = dSsun + dSspace, tot = dSs + dSenv;
    /* the heat transfer, as wide as the energy it carries, from the Sun past the Earth to deep space */
    const w = wOf(Q, K, 80);
    fatArrow(ctx, SX + 92, SY, 1330, SY, w, alpha(ec, 0.55));
    sunSprite(ctx, SX, SY, 58);
    text(ctx, 'Sun', SX, SY + 112, PAL.ink, { size: 20, align: 'center' });
    text(ctx, 'T_h = ' + fmt(Th, 0) + ' K', SX, SY + 140, tc, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'Q = ' + fmt(Q, 0) + ' J', 430, SY - w / 2 - 26, ec, { size: 22, weight: 600, align: 'center' });
    /* the Earth, keeping a small part of it */
    fatArrow(ctx, EX - 150, SY + 6, EX - 46, SY + 6, 12, ec);
    text(ctx, 'ΔE_int', EX - 100, SY - 26, ec, { size: 20, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    earthSprite(ctx, EX, SY, 42);
    text(ctx, 'Earth', EX, SY + 72, PAL.ink, { size: 20, align: 'center', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'ΔS_syst = ' + plus(dSs, 0) + ' J/K', EX, SY - 76, sc, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'deep space', 1230, SY + 84, PAL.ink, { size: 20, align: 'center' });
    text(ctx, 'T_c = ' + fmt(TC, 0) + ' K', 1230, SY + 112, tc, { size: 22, weight: 600, align: 'center' });
    /* the bars on a fixed axis */
    const { Y } = axes(ctx, box, [0, 4], [LO, HI], { yl: 'ΔS (J/K)', yc: sc, nx: 4, ny: 8, fx: () => '' });
    const cols = [['Sun', dSsun, '−Q/T_h'], ['Earth', dSs, 'ΔS_syst'], ['deep space', dSspace, '+Q/T_c'], ['total', tot, 'ΔS_tot']];
    cols.forEach(([who, v, nm], i) => {
      const xc = box.l + ((i + 0.5) / 4) * (box.r - box.l);
      const { y } = bar(ctx, xc, 110, Y, v, sc, LO, HI);
      text(ctx, (Math.abs(v) < 1 ? plus(v, 2) : plus(v, 0)) + ' J/K', xc, v >= 0 ? y - 24 : Y(0) - 24, sc, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
      text(ctx, nm, xc, box.b + 28, sc, { size: 22, weight: 600, align: 'center' });
      text(ctx, who, xc, box.b + 56, PAL.muted, { size: 17, align: 'center' });
    });
    topline(ctx, 'Of ' + fmt(Q, 0) + ' J leaving the Sun at ' + fmt(Th, 0) + ' K the Earth keeps a little and ' + (eps(dSs, 0) < 0 ? 'lowers its entropy by ' + fmt(-dSs, 0) : eps(dSs, 0) > 0 ? 'raises its entropy by ' + fmt(dSs, 0) : 'leaves its entropy unchanged at 0')
      + ' J/K, ' + (eps(dSs, 0) < 0 ? 'but' : 'and') + ' deep space gains ' + fmt(dSspace, 0) + ' J/K, so the total rises by ' + fmt(tot, 0) + ' J/K.');
    readout(d.readout, `\\kdStot = \\kdSsyst + \\kdSenvir = ${texnum(dSs, 0)}\\ \\text{J/K} + \\left(-\\frac{${fmt(Q, 0)}\\ \\text{J}}{${fmt(Th, 0)}\\ \\text{K}} + \\frac{${fmt(Q, 0)}\\ \\text{J}}{${fmt(TC, 0)}\\ \\text{K}}\\right) = ${texnum(tot, 0)}\\ \\text{J/K} > 0`,
      'The Earth is a heat engine of high complexity between a hot reservoir supplied by the Sun and a cold reservoir supplied by dark outer space. It keeps only a small part of the heat transfer, so nearly all of it reaches deep space, where at 3 K it makes an enormous change in entropy; the Sun at ' + fmt(Th, 0) + ' K barely notices its loss. Whatever the Earth sheds locally is a small part of that gain, and the total never goes below zero.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
