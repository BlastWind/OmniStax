/* Figures for section 33.6 GUTs: The Unification of Forces.
   The page binds energy, position, time and velocity. Relative strength, h and
   counts are ink. Referents: the red down quark and the green strange quark of
   Figure 33.22(b) (down-quark, strange-quark), whose bodies wear their color
   charge as the fact and whose outlines and labels wear the referent hue; the
   four forces of Figure 33.24 (strong-force, em-force, weak-force, gravity).
   The electron and neutrino wear F.el; the Z⁰ and the quark flavors of 33.23
   are F.cat. Quark color charge is the field's own convention, drawn through
   F.fact as the named constants below and used for nothing else. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['33.6'] = function (root, F) {
const { fmt, C, PAL, alpha, choice, ctl, register, begin, line, arrow, text, topline, labeller, hover, readout, axes } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI;

/* the color charges: red, green and blue, and the anticolors cyan (antired),
   magenta (antigreen) and yellow (antiblue), which with white are the facts */
const COLOR = { R: '#e62828', G: '#28be3c', B: '#2850e6' };
const ANTI = { R: '#50ffff', G: '#ff78ff', B: '#ffe664' };
const WHITE = '#ffffff';
const NAME = { R: 'red', G: 'green', B: 'blue' };
const BAR = (c) => c + '̄';

function ball(ctx, x, y, r, fill, stroke, lw) {
  ctx.save(); ctx.fillStyle = fill; ctx.strokeStyle = stroke || alpha(PAL.ink, 0.55); ctx.lineWidth = lw || 1.5;
  ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
}
/* a time arrow partway along a world line, as the book marks its lines */
function midArrow(ctx, x1, y1, x2, y2, color, at) {
  const k0 = (at || 0.5) - 0.08, k1 = (at || 0.5) + 0.08;
  arrow(ctx, x1 + (x2 - x1) * k0, y1 + (y2 - y1) * k0, x1 + (x2 - x1) * k1, y1 + (y2 - y1) * k1, color, 4);
}
/* a gluon's line: a tight coil along the segment */
function coil(ctx, x1, y1, x2, y2, color, amp) {
  const L = Math.hypot(x2 - x1, y2 - y1); if (L < 2) return;
  const ux = (x2 - x1) / L, uy = (y2 - y1) / L, n = Math.max(8, Math.round(L / 2)), a0 = amp || 6;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.beginPath();
  for (let i = 0; i <= n; i++) { const s = (L * i) / n, a = a0 * Math.sin(s / 4); const px = x1 + ux * s - uy * a, py = y1 + uy * s + ux * a; i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); }
  ctx.stroke(); ctx.restore();
}
/* the corner axes of a Feynman diagram: t up, x across */
function cornerAxes(ctx, x0, y0, up, across) {
  arrow(ctx, x0, y0, x0, y0 - up, PAL.ink, 3);
  arrow(ctx, x0, y0, x0 + across, y0, PAL.ink, 3);
  text(ctx, 't', x0 - 16, y0 - up + 6, C('time'), { size: 24, weight: 600, align: 'right' });
  text(ctx, 'x', x0 + across, y0 + 24, C('position'), { size: 24, weight: 600, align: 'center' });
}
const along = (a, b, k) => ({ x: a.x + (b.x - a.x) * k, y: a.y + (b.y - a.y) * k });

/* =====================================================================
   FIGURE 33.21 · fig-z-exchange · faithful copy · still
   The book's diagram: an electron and an electron neutrino come in, exchange
   a virtual Z⁰ between two vertices, and leave. Time up, x across.
===================================================================== */
(function () {
  const H = 520;
  const d = sim('fig-z-exchange', H);
  let hits = [];
  hover(d.stage, () => hits);
  const V1 = { x: 640, y: 300 }, V2 = { x: 820, y: 268 };
  const E0 = { x: 520, y: 450 }, E1 = { x: 530, y: 80 }, N0 = { x: 940, y: 450 }, N1 = { x: 960, y: 80 };
  function draw() {
    const { ctx } = begin(d.c);
    const EC = F.el('e-'), NU = F.el('nu'), Z = F.cat(0);
    const lab = labeller(ctx, H);
    hits = [];
    cornerAxes(ctx, 420, 490, 420, 640);
    [[E0, V1], [V1, E1], [N0, V2], [V2, N1]].forEach(([a, b]) => { line(ctx, a.x, a.y, b.x, b.y, PAL.ink, 3.5); midArrow(ctx, a.x, a.y, b.x, b.y, PAL.ink, a === E0 || a === N0 ? 0.45 : 0.55); });
    line(ctx, V1.x, V1.y, V2.x, V2.y, Z, 4); midArrow(ctx, V1.x, V1.y, V2.x, V2.y, Z, 0.7);
    const zm = along(V1, V2, 0.42);
    ball(ctx, zm.x, zm.y, 8, Z);
    const e0 = along(E0, V1, 0.14), e1 = along(V1, E1, 0.82), n0 = along(N0, V2, 0.14), n1 = along(V2, N1, 0.82);
    ball(ctx, e0.x, e0.y, 18, EC); ball(ctx, e1.x, e1.y, 18, EC);
    ball(ctx, n0.x, n0.y, 12, NU); ball(ctx, n1.x, n1.y, 12, NU);
    lab.add('e⁻', e0.x - 20, e0.y, -1, 0, PAL.ink, 24, 14);
    lab.add('e⁻', e1.x - 10, e1.y, -0.8, -0.6, PAL.ink, 24, 30);
    lab.add('ν_{e}', n0.x + 14, n0.y, 1, 0, PAL.ink, 24, 14);
    lab.add('ν_{e}', n1.x + 10, n1.y, 1, 0, PAL.ink, 24, 24);
    lab.add('Z⁰', zm.x, zm.y + 10, 0, 1, PAL.ink, 24, 26);
    lab.flush();
    hits.push({ x: e0.x, y: e0.y, r: 22, name: 'the electron, coming in' }, { x: e1.x, y: e1.y, r: 22, name: 'the electron, after the exchange' },
      { x: n0.x, y: n0.y, r: 18, name: 'the electron neutrino, coming in' }, { x: n1.x, y: n1.y, r: 18, name: 'the electron neutrino, after the exchange' },
      { x: zm.x, y: zm.y, r: 16, name: 'the virtual Z⁰, the carrier of the weak nuclear force' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 33.22 · sim-gluon-exchange · still · flat (rule 28.1)
   (a) the eight gluons; (b) the exchange. A gluon XȲ leaves a quark of color X
   as Y (X → Y + XȲ) and is absorbed by a quark of color Y, which it turns X
   (XȲ + Y → X); so the down quark starts X and the strange quark Y, and the two
   swap colors. A white gluon carries no color and changes neither, drawn with
   the book's red down quark and green strange quark. The book's RḠ is the default.
===================================================================== */
(function () {
  const H = 600;
  const d = sim('sim-gluon-exchange', H);
  const ROW = [['R', 'G'], ['G', 'R'], ['B', 'R'], ['R', 'B'], ['G', 'B'], ['B', 'G'], null, null];
  const opts = ROW.slice(0, 6).map(([c, a]) => ({ value: c + a, label: c + BAR(a) })).concat([{ value: 'white', label: 'white' }]);
  const gl = choice(d.controls, { label: '\\text{Gluon}', options: opts, value: 'RG', aria: 'the gluon the down quark sends the strange quark', key: 'gluon' });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  /* the incoming and outgoing colors of the two quarks for a choice */
  const state = (v) => (v === 'white' ? { dIn: 'R', dOut: 'R', sIn: 'G', sOut: 'G' } : { dIn: v[0], dOut: v[1], sIn: v[1], sOut: v[0] });
  const GX = (i) => 196 + i * 64, GY = 330, GR = 25;
  const V1 = { x: 940, y: 335 }, V2 = { x: 1120, y: 312 };
  const D0 = { x: 830, y: 530 }, D1 = { x: 845, y: 110 }, S0 = { x: 1245, y: 530 }, S1 = { x: 1235, y: 110 };

  function gluonDisc(ctx, x, y, r, c, a) {
    ctx.save();
    if (!c) { ctx.fillStyle = F.fact(WHITE); ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); }
    else {
      ctx.fillStyle = F.fact(COLOR[c]); ctx.beginPath(); ctx.arc(x, y, r, Math.PI, TAU); ctx.closePath(); ctx.fill();
      ctx.fillStyle = F.fact(ANTI[a]); ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI); ctx.closePath(); ctx.fill();
      ctx.strokeStyle = alpha(PAL.ink, 0.7); ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(x - r, y); ctx.lineTo(x + r, y); ctx.stroke();
    }
    ctx.strokeStyle = alpha(PAL.ink, 0.7); ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.stroke();
    ctx.restore();
  }

  function draw() {
    const { ctx } = begin(d.c);
    const v = gl.value, st = state(v), white = v === 'white';
    const head = white ? 'A white gluon carries no color, so both quarks keep theirs.'
      : 'The $' + v[0] + '\\bar{' + v[1] + '}$ gluon leaves the down quark ' + NAME[v[1]] + ' and turns the strange quark ' + NAME[v[0]] + '.';
    const lab = labeller(ctx, H, { headline: topline(ctx, head) });
    hits = [];

    /* (a) the eight gluons */
    text(ctx, '(a)', 112, 150, PAL.muted, { size: 20, align: 'center' });
    text(ctx, 'color', GX(0) - GR - 12, GY - 11, PAL.ink, { size: 17, align: 'right' });
    text(ctx, 'anticolor', GX(0) - GR - 12, GY + 11, PAL.ink, { size: 17, align: 'right' });
    ROW.forEach((g, i) => {
      const x = GX(i), on = white ? !g : g && g[0] + g[1] === v;
      if (on) F.faded(ctx, gl.a(v), [0, 0], () => { ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(x, GY, GR + 8, 0, TAU); ctx.stroke(); ctx.restore(); });
      gluonDisc(ctx, x, GY, GR, g && g[0], g && g[1]);
      if (g) {
        text(ctx, g[0], x, GY - GR - 20, PAL.ink, { size: 20, weight: 600, align: 'center' });
        text(ctx, BAR(g[1]), x, GY + GR + 22, PAL.ink, { size: 20, weight: 600, align: 'center' });
        hits.push({ x, y: GY, r: GR + 4, name: 'the ' + NAME[g[0]] + '–anti' + NAME[g[1]] + ' gluon, ' + g[0] + BAR(g[1]) + ': it carries a color and an anticolor' });
      } else hits.push({ x, y: GY, r: GR + 4, name: 'a white gluon: it carries no color' });
    });
    text(ctx, 'white', (GX(6) + GX(7)) / 2, GY - GR - 20, PAL.ink, { size: 20, weight: 600, align: 'center' });

    /* (b) the exchange */
    text(ctx, '(b)', 700, 150, PAL.muted, { size: 20, align: 'center' });
    cornerAxes(ctx, 760, 560, 440, 580);
    [[D0, V1], [V1, D1], [S0, V2], [V2, S1]].forEach(([a, b]) => { line(ctx, a.x, a.y, b.x, b.y, PAL.ink, 3.5); midArrow(ctx, a.x, a.y, b.x, b.y, PAL.ink, a === D0 || a === S0 ? 0.55 : 0.4); });
    coil(ctx, V1.x, V1.y, V2.x, V2.y, alpha(PAL.ink, 0.75), 5);
    const gm = along(V1, V2, 0.5);
    gluonDisc(ctx, gm.x, gm.y, 19, white ? null : v[0], white ? null : v[1]);
    const DQ = F.ref('down-quark'), SQ = F.ref('strange-quark');
    const fill = (key) => gl.mixColor((x) => F.fact(COLOR[state(x)[key]]));
    const d0 = along(D0, V1, 0.13), d1 = along(V1, D1, 0.85), s0 = along(S0, V2, 0.13), s1 = along(V2, S1, 0.85);
    ball(ctx, d0.x, d0.y, 20, fill('dIn'), DQ, 4); ball(ctx, d1.x, d1.y, 20, fill('dOut'), DQ, 4);
    ball(ctx, s0.x, s0.y, 20, fill('sIn'), SQ, 4); ball(ctx, s1.x, s1.y, 20, fill('sOut'), SQ, 4);
    lab.add(NAME[st.dIn] + ' d', d0.x - 22, d0.y, -1, 0, DQ, 22, 16);
    lab.add(NAME[st.dOut] + ' d', d1.x - 22, d1.y, -1, 0, DQ, 22, 16);
    lab.add(NAME[st.sIn] + ' s', s0.x + 22, s0.y, 1, 0, SQ, 22, 16);
    lab.add(NAME[st.sOut] + ' s', s1.x + 22, s1.y, 1, 0, SQ, 22, 16);
    lab.add(white ? 'g, white' : 'g, ' + v[0] + BAR(v[1]), gm.x, gm.y + 20, 0, 1, PAL.ink, 22, 22);
    lab.flush();
    hits.push({ x: d0.x, y: d0.y, r: 24, name: 'the ' + NAME[st.dIn] + ' down quark, before it sends the gluon' },
      { x: d1.x, y: d1.y, r: 24, name: 'the down quark after the exchange, now ' + NAME[st.dOut] },
      { x: s0.x, y: s0.y, r: 24, name: 'the ' + NAME[st.sIn] + ' strange quark, before it absorbs the gluon' },
      { x: s1.x, y: s1.y, r: 24, name: 'the strange quark after the exchange, now ' + NAME[st.sOut] },
      { x: gm.x, y: gm.y, r: 22, name: white ? 'the exchanged gluon, white' : 'the exchanged gluon, ' + v[0] + BAR(v[1]) });

    const g = white ? '\\text{white}' : v[0] + '\\bar{' + v[1] + '}';
    ro.set(st.dIn + ' \\to ' + st.dOut + ' + ' + g + ',\\qquad ' + g + ' + ' + st.sIn + ' \\to ' + st.sOut);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 33.23 · sim-quark-pion-exchange · story · flat (rule 28.1)
   Diagram units: x from −1 to 1, t from 0 to 1. The hadrons' centres run on
   mirrored parabolas, closest at t = 0.46; each has three quark lines 0.075
   apart. The proton (d u u, left) loses its third u at t = 0.40, where a
   gluon creates d d̄: the d stays and the proton is a neutron (d u d); u and d̄
   cross as the π⁺. At t = 0.52 the d̄ annihilates the neutron's first d and
   the u takes its place: the neutron (d d u) is a proton (u d u). The story's
   value maps to the present time through the stops below; everything is a
   function of it.
===================================================================== */
(function () {
  const H = 700;
  const d = sim('sim-quark-pion-exchange', H);
  const sS = ctl(d.controls, { label: '\\text{step}', cls: '', min: 0, max: 4, step: 0.01, value: 0, unit: '', dec: 2, aria: 'how far the exchange has gone, from the approach through the pair created, the pion crossing and the annihilation to the new proton' });
  F.story(d, sS, { stops: [{ v: 0, label: 'approach' }, { v: 1, label: 'pair created' }, { v: 2, label: 'π⁺ crosses' }, { v: 3, label: 'annihilation' }, { v: 4, label: 'proton' }], ms: 1800, rest: 1200 });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  const X = (x) => 700 + 400 * x, Y = (t) => 640 - 480 * t;
  const TS = [0.33, 0.405, 0.47, 0.525, 0.95], TC = 0.40, TA = 0.52, DX = 0.075;
  const xc = (t, side) => side * (0.2 + 0.55 * ((t - 0.46) / 0.5) ** 2);
  const slot = (t, side, k) => xc(t, side) + (k - 1) * DX;
  const P = { x: slot(TC, -1, 2), t: TC }, A = { x: slot(TA, 1, 0), t: TA };
  const pionX = (t) => P.x + (A.x - P.x) * (t - TC) / (TA - TC);
  /* world lines: x(t) over [t0, t1], a flavor and whether it is the antiquark */
  const LINES = [
    { f: (t) => slot(t, -1, 0), t0: 0, t1: 0.95, q: 'd', who: 'the proton’s down quark, which stays in the new neutron' },
    { f: (t) => slot(t, -1, 1), t0: 0, t1: 0.95, q: 'u', who: 'the proton’s up quark, which stays in the new neutron' },
    { f: (t) => slot(t, -1, 2), t0: 0, t1: TC, q: 'u', who: 'the up quark that leaves the proton' },
    { f: (t) => slot(t, -1, 2), t0: TC, t1: 0.95, q: 'd', who: 'the d quark of the created pair, which stays behind' },
    { f: pionX, t0: TC, t1: TA, q: 'u', off: 1, who: 'the up quark of the π⁺' },
    { f: pionX, t0: TC, t1: TA, q: 'd', anti: true, off: -1, who: 'the d̄ antiquark of the π⁺' },
    { f: (t) => slot(t, 1, 0), t0: 0, t1: TA, q: 'd', who: 'the neutron’s down quark that the d̄ annihilates' },
    { f: (t) => slot(t, 1, 0), t0: TA, t1: 0.95, q: 'u', who: 'the up quark from the π⁺, which joins the neutron' },
    { f: (t) => slot(t, 1, 1), t0: 0, t1: 0.95, q: 'd', who: 'the neutron’s down quark, which stays in the new proton' },
    { f: (t) => slot(t, 1, 2), t0: 0, t1: 0.95, q: 'u', who: 'the neutron’s up quark, which stays in the new proton' },
  ];
  /* gluons inside the hadrons: side, the two slots, the time */
  const GLUE = [[-1, 0, 1, 0.1], [-1, 1, 2, 0.19], [-1, 0, 1, 0.28], [-1, 1, 2, 0.66], [-1, 0, 1, 0.8],
    [1, 1, 2, 0.08], [1, 0, 1, 0.17], [1, 1, 2, 0.3], [1, 0, 1, 0.7], [1, 1, 2, 0.86]];
  const HEADS = [
    'The quarks of the proton and the neutron move along together, exchanging gluons.',
    'As the $u$ quark leaves the proton, a gluon creates a $d$ quark and a $\\bar{d}$ antiquark.',
    'The $d$ stays behind and the proton is a neutron, while $u$ and $\\bar{d}$ move together as a $\\pi^{+}$.',
    'The $\\bar{d}$ annihilates a $d$ quark in the neutron, and the $u$ joins it.',
    'The neutron has become a proton: a pion has been exchanged and a force transmitted.',
  ];
  const RX = [
    '\\mk{p}{p\\,(uud)} + \\mk{n}{n\\,(udd)}',
    '\\mk{g}{g} \\to \\mk{d}{d} + \\mk{db}{\\bar{d}}',
    '\\mk{p}{p\\,(uud)} \\to \\mk{n2}{n\\,(udd)} + \\mk{pi}{\\pi^{+}\\,(u\\bar{d})}',
    '\\mk{pi}{\\pi^{+}\\,(u\\bar{d})} + \\mk{n}{n\\,(udd)} \\to \\mk{p2}{p\\,(uud)}',
    '\\mk{p}{p} + \\mk{n}{n} \\to \\mk{n2}{n} + \\mk{p2}{p}',
  ];
  const tOf = (s) => { const i = Math.min(3, Math.floor(s)), k = s - i; return TS[i] + (TS[i + 1] - TS[i]) * k; };
  const clamp = (x) => Math.max(0, Math.min(1, x));

  function draw() {
    const { ctx } = begin(d.c);
    const s = sS.v, tn = tOf(s), stage = Math.min(4, Math.floor(s + 0.001));
    const U = F.cat(0), Dq = F.cat(1), PI = F.cat(2), PR = F.el('p+'), NE = F.el('n0'), GL = alpha(PAL.ink, 0.6);
    const lab = labeller(ctx, H, { headline: topline(ctx, HEADS[stage]) });
    hits = [];
    cornerAxes(ctx, 150, 640, 110, 110);
    const col = (L) => (L.q === 'u' ? U : Dq);
    const offPt = (L, t) => {
      if (!L.off) return { x: X(L.f(t)), y: Y(t) };
      const dx = X(A.x) - X(P.x), dy = Y(A.t) - Y(P.t), n = Math.hypot(dx, dy);
      return { x: X(L.f(t)) + L.off * 6 * (-dy / n), y: Y(t) + L.off * 6 * (dx / n) };
    };

    /* gluons first, under the quark lines */
    GLUE.forEach(([side, a, b, t]) => { if (tn >= t) coil(ctx, X(slot(t, side, a)), Y(t), X(slot(t, side, b)), Y(t), GL, 4); });
    if (tn >= TC - 0.03) coil(ctx, X(slot(TC - 0.03, -1, 1)), Y(TC - 0.03), X(P.x), Y(P.t), GL, 4);

    /* the world lines, each traced up to the present */
    LINES.forEach((L) => {
      const t1 = Math.min(L.t1, tn); if (t1 <= L.t0) return;
      const n = Math.max(2, Math.round((t1 - L.t0) * 60));
      ctx.save(); ctx.strokeStyle = col(L); ctx.lineWidth = 3.5; if (L.anti) ctx.setLineDash([10, 7]);
      ctx.beginPath();
      for (let i = 0; i <= n; i++) { const p = offPt(L, L.t0 + (t1 - L.t0) * i / n); i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y); }
      ctx.stroke(); ctx.restore();
      [0.18, 0.8].forEach((ta) => {
        if (L.t0 < ta - 0.05 && L.t1 > ta + 0.05 && tn > ta + 0.05) { const a = offPt(L, ta - 0.02), b = offPt(L, ta + 0.02); arrow(ctx, a.x, a.y, b.x, b.y, col(L), 4); }
      });
    });

    /* the present, a level across the diagram */
    line(ctx, 260, Y(tn), 1140, Y(tn), alpha(C('time'), 0.55), 2, [10, 10]);

    /* the vertices once passed */
    if (tn >= TC) { ball(ctx, X(P.x), Y(P.t), 6, PAL.ink); hits.push({ x: X(P.x), y: Y(P.t), r: 14, name: 'where a gluon creates a d quark and a d̄ antiquark' }); }
    if (tn >= TA) { ball(ctx, X(A.x), Y(A.t), 6, PAL.ink); hits.push({ x: X(A.x), y: Y(A.t), r: 14, name: 'where the d̄ annihilates a d quark of the neutron' }); }

    /* the hadrons at the present, drawn round their quarks */
    const kL = clamp((tn - TC) / 0.03), kR = clamp((tn - TA) / 0.03);
    [[-1, F.mixColor(PR, NE, kL), kL < 0.5 ? 'the proton' : 'the neutron, which was the proton'], [1, F.mixColor(NE, PR, kR), kR < 0.5 ? 'the neutron' : 'the proton, which was the neutron']].forEach(([side, c, name]) => {
      const x = X(xc(tn, side)), y = Y(tn);
      ctx.save(); ctx.fillStyle = c; ctx.strokeStyle = c; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(x, y, 56, 0, TAU); ctx.globalAlpha *= 0.16; ctx.fill(); ctx.globalAlpha /= 0.16; ctx.stroke(); ctx.restore();
      hits.push({ x, y: y - 44, r: 14, name });
    });
    if (tn > TC && tn < TA) {
      const x = (X(pionX(tn))), y = Y(tn);
      ctx.save(); ctx.strokeStyle = PI; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.ellipse(x, y, 30, 24, 0, 0, TAU); ctx.stroke(); ctx.restore();
      hits.push({ x, y: y - 22, r: 10, name: 'the virtual π⁺, an up quark and a d̄ antiquark' });
    }
    LINES.forEach((L) => {
      if (tn < L.t0 || tn > L.t1 || (L.t1 < 0.95 && tn >= L.t1)) return;
      const p = offPt(L, tn);
      if (L.anti) ball(ctx, p.x, p.y, 8, PAL.panel, col(L), 3); else ball(ctx, p.x, p.y, 8, col(L));
      hits.push({ x: p.x, y: p.y, r: 11, name: L.who });
    });

    /* names where the lines start and, once reached, where they end */
    lab.add('proton', X(xc(0, -1)), Y(0) + 6, 0, 1, PAL.ink, 22, 24);
    lab.add('neutron', X(xc(0, 1)), Y(0) + 6, 0, 1, PAL.ink, 22, 24);
    if (tn >= 0.9) { lab.add('neutron', X(xc(0.95, -1)), Y(0.95), 0, -1, PAL.ink, 22, 74); lab.add('proton', X(xc(0.95, 1)), Y(0.95), 0, -1, PAL.ink, 22, 74); }
    if (tn >= TA + 0.01) { const m = { x: X((P.x + A.x) / 2), y: Y((P.t + A.t) / 2) }; lab.add('π⁺', m.x - 8, m.y - 10, -0.3, -1, PI, 24, 26); }
    lab.flush();

    /* the legend, bottom right */
    const LX = 1170, LY = 560;
    ball(ctx, LX, LY, 8, U); text(ctx, 'u quark', LX + 20, LY, PAL.ink, { size: 18 });
    ball(ctx, LX, LY + 30, 8, Dq); text(ctx, 'd quark', LX + 20, LY + 30, PAL.ink, { size: 18 });
    ball(ctx, LX, LY + 60, 8, PAL.panel, Dq, 3); text(ctx, 'd̄ antiquark', LX + 20, LY + 60, PAL.ink, { size: 18 });
    coil(ctx, LX - 12, LY + 90, LX + 12, LY + 90, GL, 4); text(ctx, 'gluon', LX + 20, LY + 90, PAL.ink, { size: 18 });

    ro.set(RX[stage], undefined, { form: stage });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 33.24 · sim-force-strengths · still · flat (rule 28.1)
   u = log₁₀(ΔE/GeV) on a fixed axis from −10 to 20; the slider runs −9 (a few
   eV) to 20. The book's strength axis has no scale, so the curves are its
   shapes: the strong force falling, the electromagnetic and weak forces
   joining it tangentially at u = 2 (EW), the strong force at 15 (GUT) and
   gravity at 19 (TOE). Past each join the merged curve is drawn in
   interleaved dashes of the forces it unites. The distance probed is
   d ≈ hc/4πΔE (33.1's range), h = 6.63 × 10⁻³⁴ J·s, c = 3.00 × 10⁸ m/s,
   1 GeV = 1.602 × 10⁻¹⁰ J, so 100 GeV probes 9.88 × 10⁻¹⁹ m; the top axis
   marks d = 10⁻¹⁰ to 10⁻³⁵ m where they fall. Accelerators reach about
   10⁴ GeV, the SSC's energy, which the text puts 10¹⁰ below 10¹⁴ GeV.
===================================================================== */
(function () {
  const H = 640, BOX = { l: 170, r: 1250, t: 160, b: 520 };
  const HC = 6.63e-34 * 3e8, GEV = 1.602e-10, K = HC / (4 * Math.PI * GEV), REACH = 4;
  const d = sim('sim-force-strengths', H);
  const U = ctl(d.controls, { label: '\\log_{10}(\\kdE/\\text{GeV})', cls: 'energy', min: -9, max: 20, step: 0.01, value: 2, unit: '', dec: 2, aria: 'the energy put into the system, on a logarithmic scale',
    specials: [{ at: 2, label: 'EW' }, { at: 15, label: 'GUT' }, { at: 19, label: 'TOE' }] });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);
  const ys = (u) => 0.36 + 0.58 * ((21 - u) / 31) ** 1.4;
  const yew = (u) => (u < 15 ? ys(u) - 0.3 * ((15 - u) / 25) ** 1.8 : ys(u));
  const yem = (u) => (u < 2 ? yew(u) + 0.06 * ((2 - u) / 12) ** 1.5 : yew(u));
  const yw = (u) => (u < 2 ? yew(u) - 0.42 * ((2 - u) / 12) ** 1.3 : yew(u));
  const yg = (u) => (u < 19 ? ys(u) - 0.89 * ((19 - u) / 29) ** 1.3 : ys(u));
  const FORCES = [
    { id: 'strong-force', name: 'strong', f: ys, end: 15 },
    { id: 'em-force', name: 'EM', f: yem, end: 2 },
    { id: 'weak-force', name: 'weak', f: yw, end: 2 },
    { id: 'gravity', name: 'gravity', f: yg, end: 19 },
  ];
  const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
  const pow = (n) => (n === 0 ? '1' : '10' + String(n).split('').map((ch) => SUP[ch]).join(''));
  const sci = (x) => { const e = Math.floor(Math.log10(x) + 1e-9); let m = x / 10 ** e; return fmt(m, 2) + '\\times 10^{' + e + '}'; };
  const sciE = (u) => { const e = Math.floor(u + 1e-9); return fmt(10 ** (u - e), 1) + '\\times 10^{' + e + '}'; };

  /* a run of curve, in one colour or, where forces are one, interleaved dashes of each */
  function run(ctx, f, u0, u1, Xs, Ys, cols, kArr) {
    const end = u0 + (u1 - u0) * kArr; if (end <= u0) return;
    const n = Math.max(2, Math.round((end - u0) * 8)), D = 16;
    cols.forEach((c, i) => {
      ctx.save(); ctx.strokeStyle = c; ctx.lineWidth = 5; ctx.lineCap = 'butt';
      if (cols.length > 1) { ctx.setLineDash([D, D * (cols.length - 1)]); ctx.lineDashOffset = -D * i; }
      ctx.beginPath();
      for (let j = 0; j <= n; j++) { const u = u0 + (end - u0) * j / n, x = Xs(u), y = Ys(f(u)); j ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
      ctx.stroke(); ctx.restore();
    });
  }

  function draw() {
    const { ctx } = begin(d.c);
    const u = U.v, E = 10 ** u, Es = sciE(u);
    const RC = Object.fromEntries(FORCES.map((g) => [g.id, F.ref(g.id)]));
    const head = u < 2 - 1e-6 ? 'At $\\kdE = ' + Es + '$ GeV all four forces are distinct, with greatly different strengths.'
      : u < 15 - 1e-6 ? 'At $\\kdE = ' + Es + '$ GeV the electromagnetic and weak forces have become one, the electroweak force.'
        : u < 19 - 1e-6 ? 'At $\\kdE = ' + Es + '$ GeV the strong and electroweak forces are identical, as a GUT predicts.'
          : 'At $\\kdE = ' + Es + '$ GeV gravity unifies with the other three forces, as a TOE predicts.';
    const lab = labeller(ctx, H, { headline: topline(ctx, head) });
    hits = [];

    /* the band accelerators reach, under everything */
    /* the axis runs in u + 10, so that it draws no zero line at 1 GeV */
    const A = axes(ctx, BOX, [0, 30], [0, 1], { nx: 6, ny: 1, fx: (v) => pow(Math.round(v) - 10), fy: () => '', xl: 'ΔE (GeV)', xc: C('energy'), yl: 'strength', yc: PAL.ink });
    const X = (v) => A.X(v + 10), Y = A.Y;
    ctx.save(); ctx.fillStyle = alpha(PAL.muted, 0.12); ctx.fillRect(X(-10), BOX.t, X(REACH) - X(-10), BOX.b - BOX.t); ctx.restore();
    text(ctx, 'reached by accelerators', (X(-10) + X(REACH)) / 2, BOX.b - 16, PAL.muted, { size: 17, align: 'center' });

    /* the distance each energy probes, along the top */
    line(ctx, BOX.l, BOX.t, BOX.r, BOX.t, alpha(PAL.ink, 0.5), 1.5);
    for (let k = -10; k >= -35; k -= 5) {
      const x = X(Math.log10(K) - k);
      line(ctx, x, BOX.t, x, BOX.t - 8, alpha(PAL.ink, 0.6), 2);
      text(ctx, pow(k), x, BOX.t - 24, PAL.muted, { size: 17, align: 'center' });
    }
    text(ctx, 'd (m)', BOX.r + 14, BOX.t - 24, C('position'), { size: 20, weight: 600 });

    /* the curves: each force alone, then the forces that have become one */
    const k = F.arrival(d), ka = (u0, u1) => clamp((k * 30 - (u0 + 10)) / (u1 - u0));
    FORCES.forEach((g) => run(ctx, g.f, -10, g.end, X, Y, [RC[g.id]], ka(-10, g.end)));
    run(ctx, yew, 2, 15, X, Y, [RC['em-force'], RC['weak-force']], ka(2, 15));
    run(ctx, ys, 15, 19, X, Y, [RC['strong-force'], RC['em-force'], RC['weak-force']], ka(15, 19));
    run(ctx, ys, 19, 20, X, Y, FORCES.map((g) => RC[g.id]), ka(19, 20));
    lab.block(X(u) - 8, BOX.t, X(u) + 8, BOX.b);
    [[2, yew(2), 'EW'], [15, ys(15), 'GUT'], [19, ys(19), 'TOE']].forEach(([uj, yj, name]) => {
      ball(ctx, X(uj), Y(yj), 7, PAL.ink, PAL.ink);
      const below = name === 'EW'; lab.add(name, X(uj), Y(yj) + (below ? 8 : -8), 0, below ? 1 : -1, PAL.ink, 20, 22);
    });
    FORCES.forEach((g) => lab.add(g.name, X(-6.5), Y(g.f(-6.5)) - 6, 0, -1, RC[g.id], 20, 16));
    lab.add('electroweak', X(8.5), Y(yew(8.5)) + 6, 0, 1, PAL.ink, 20, 18);

    /* the probe: the energy put in, and where it crosses each distinct force */
    line(ctx, X(u), BOX.b, X(u), BOX.t, alpha(C('energy'), 0.8), 2.5, [10, 10]);
    const pts = u < 2 ? [['strong-force', ys, 'the strong force'], ['em-force', yem, 'the electromagnetic force'], ['weak-force', yw, 'the weak force'], ['gravity', yg, 'gravity']]
      : u < 15 ? [['strong-force', ys, 'the strong force'], [null, yew, 'the electroweak force: the electromagnetic and weak forces as one'], ['gravity', yg, 'gravity']]
        : u < 19 ? [[null, ys, 'the strong and electroweak forces, now identical'], ['gravity', yg, 'gravity']]
          : [[null, ys, 'all four forces, unified']];
    pts.forEach(([id, f, name]) => {
      const y = Y(f(u));
      ball(ctx, X(u), y, 8, id ? RC[id] : PAL.ink, PAL.panel, 2);
      hits.push({ x: X(u), y, r: 12, name });
    });
    lab.flush();

    const EJ = E * GEV, dm = HC / (4 * Math.PI * EJ);
    const note = u > REACH + 0.5 ? 'This $\\kdE$ is about $10^{' + Math.round(u - REACH) + '}$ times the energy accelerators reach.' : '';
    ro.set('\\kd \\approx \\frac{h\\kc}{4\\pi\\kdE} = \\frac{(6.63\\times 10^{-34}\\;\\text{J}\\cdot\\text{s})(3.00\\times 10^{8}\\;\\text{m/s})}{4\\pi(' + sci(EJ) + '\\;\\text{J})} = ' + sci(dm) + '\\;\\text{m}', note);
  }
  const clamp = (x) => Math.max(0, Math.min(1, x));
  register(d.fig, { update: () => {}, draw });
})();
};
