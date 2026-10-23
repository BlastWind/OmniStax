/* Figures for section 18.2 Conductors and Insulators. Boots against the section's text article.
   Four of the five simulations carry a charge slider and every one of them
   states a charge in its readout. The piece, the electroscope and its
   leaves, the rods, spheres, wire and earth the text names are referents
   and wear their referent colours on outline and name. Electrons and
   ions are the element palette's particles; a sign is told by the book's +
   and − marks and by which way an arrow points, never by a hue. Three
   figures register no cycle, and two of them tell the book's panels as a
   story on a slider; the spreading charge
   of the opening simulation and the induction of Figure 18.12 have a clock
   in them and move. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['18.2'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, cycle, line, arrow, dot, text, topline, labeller, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) { const n = el('small', null, small); host.appendChild(n); F.renderMath(n); } }

/* ---------- small helpers shared by the figures ---------- */
const TAU = 2 * Math.PI, RAD = Math.PI / 180;
/* a number that always carries its sign, with the typographic minus */
const plus = (v, d) => (v === 0 ? '' : v < 0 ? '−' : '+') + fmt(Math.abs(v), d);
/* the same in LaTeX */
const texSign = (v, d) => (v < 0 ? '-' : '+') + fmt(Math.abs(v), d);
/* a particle of the element palette: a filled ball with its sign drawn on it */
function particle(ctx, x, y, kind, r, glyphOverride) {
  const hue = F.el(kind);
  ctx.save(); ctx.lineWidth = 2.5; ctx.strokeStyle = hue; ctx.fillStyle = hue;
  ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
  const glyph = glyphOverride !== undefined ? glyphOverride : (kind === 'e-' ? '−' : kind === 'p+' ? '+' : '');
  if (glyph) text(ctx, glyph, x, y + 1, PAL.panel, { size: r * 1.6, weight: 700, align: 'center' });
}
/* one row of a legend: a particle and its name */
function legendRow(ctx, x, y, kind, name, glyph) { particle(ctx, x, y, kind, 11, glyph); text(ctx, name, x + 24, y, PAL.ink, { size: 18 }); }
/* a closed body in ink, its points given about (cx, cy) */
function body(ctx, cx, cy, pts, fill) {
  ctx.save(); ctx.translate(cx, cy); ctx.fillStyle = fill; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
  ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
}
/* a rounded rectangle, outlined in ink unless a stroke is given */
function panel(ctx, x, y, w, h, r, fill, stroke = PAL.ink) {
  ctx.save(); ctx.fillStyle = fill; ctx.strokeStyle = stroke; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
  ctx.fill(); ctx.stroke(); ctx.restore();
}
/* a circle, outlined in ink unless a stroke is given */
function circle(ctx, x, y, r, fill, stroke = PAL.ink) {
  ctx.save(); ctx.fillStyle = fill; ctx.strokeStyle = stroke; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
}
/* the book's + and − marks, drawn in ink at the points given */
function marks(ctx, pts, sign, size) { pts.forEach(([x, y]) => text(ctx, sign, x, y + 1, PAL.ink, { size: size || 24, weight: 700, align: 'center' })); }
/* the rod the book draws: a rounded bar of length L and thickness T, held horizontally with its near end at (x, y) */
function rod(ctx, x, y, L, T, sign, n, stroke = PAL.ink) {
  panel(ctx, x, y - T / 2, L, T, T / 2, PAL.soft, stroke);
  const pts = []; for (let i = 0; i < n; i++) pts.push([x + 30 + (i / Math.max(1, n - 1)) * (L - 60), y]);
  marks(ctx, pts, sign, 22);
}

/* =====================================================================
   SIM: a patch of extra charge placed on one end of a piece of material.
   Moving: a conductor is a material charge moves through, and the section
   gives the difference as a rate, so the idea has a clock in it. The drift
   in the insulator is drawn far faster than it is and the readout says so.
===================================================================== */
(function () {
  const d = sim('sim-conductor-insulator', 560);
  const T = 5;
  const cy = cycle(() => T, 1.2);
  const mat = choice(d.controls, { label: '\\text{材料}', options: [
    { value: 'copper', label: '铜' }, { value: 'brine', label: '盐水' }, { value: 'glass', label: '玻璃' }], value: 'copper', aria: '放置电荷的材料', onInput: () => cy.reset() });
  const qs = ctl(d.controls, { label: '\\kq', cls: 'charge', min: 1, max: 20, step: 1, value: 10, unit: 'nC', dec: 0, aria: '放在材料左端的电荷' });
  const X0 = 190, X1 = 1215, YC = 300, HT = 180;
  /* how far the excess charge has spread by the model time t, 0 at the left end and 1 across the whole piece */
  const SPEED = { copper: 4.2, brine: 0.9, glass: 0.012 };
  const spreadOf = (kind, t) => 1 - Math.exp(-SPEED[kind] * t);
  /* the fixed background of each material: what is there before any charge is placed */
  function background(ctx, kind) {
    if (kind === 'copper') {
      for (let r = 0; r < 3; r++) for (let c = 0; c < 17; c++) {
        const x = X0 + 46 + c * 56, y = YC - 58 + r * 58;
        circle(ctx, x, y, 12, PAL.soft); text(ctx, '+', x, y + 1, PAL.ink, { size: 17, weight: 700, align: 'center' });
      }
    } else if (kind === 'brine') {
      for (let i = 0; i < 20; i++) {
        const x = X0 + 56 + ((i * 7919) % 940), y = YC - 60 + ((i * 6151) % 120);
        particle(ctx, x, y, i % 2 ? 'Na' : 'Cl', 13, i % 2 ? '+' : '−');
      }
    } else {
      for (let r = 0; r < 3; r++) for (let c = 0; c < 12; c++) {
        const x = X0 + 66 + c * 80, y = YC - 58 + r * 58;
        circle(ctx, x, y, 15, PAL.soft); text(ctx, '+', x - 5, y + 1, PAL.ink, { size: 16, weight: 700, align: 'center' });
        particle(ctx, x + 17, y, 'e-', 9);
      }
    }
  }
  let hits = [];
  function draw() {
    const { ctx, H } = begin(d.c);
    const qc = C('charge'), kind = mat.value, q = qs.v, t = cy.now();
    const s = spreadOf(kind, t);
    const n = Math.max(3, Math.round(q / 2) + 2);
    hits = [];
    /* the piece of material */
    const pcR = F.ref('piece');
    panel(ctx, X0, YC - HT / 2, X1 - X0, HT, 14, PAL.panel, pcR);
    background(ctx, kind);
    /* the excess charge: n carriers that begin bunched at the left end and spread to the right */
    /* the patch of extra charge is at least 150 units wide, so that the carriers never pile on one another */
    const left = X0 + 46, right = left + Math.max(150, s * (X1 - X0 - 92));
    const rows = 3;
    for (let i = 0; i < n; i++) {
      const f = n <= rows ? 0 : Math.floor(i / rows) / Math.ceil(n / rows - 1 || 1);
      const x = left + f * (right - left);
      const y = YC - 62 + (i % rows) * 62;
      const key = kind === 'brine' ? 'Cl' : 'e-';
      /* a ring in ink marks the charge that was placed, so it is not taken for one of the material's own carriers */
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(x, y, 22, 0, TAU); ctx.stroke(); ctx.restore();
      particle(ctx, x, y, key, 15, '−');
      hits.push({ x, y, r: 22, name: kind === 'brine' ? '携带了所放置电荷的一部分的氯离子' : '放在左端的多余电子之一' });
    }
    const Lb = labeller(ctx, H); Lb.block(0, 0, 1400, 96);
    /* what each half of the piece holds */
    const share = Math.min(1, s);
    text(ctx, '左端', X0 + 90, YC + HT / 2 + 34, PAL.ink, { size: 20, align: 'center' });
    text(ctx, '远端', X1 - 90, YC + HT / 2 + 34, PAL.ink, { size: 20, align: 'center' });
    text(ctx, plus(-q * (1 - share / 2), 1) + ' nC', X0 + 90, YC + HT / 2 + 66, qc, { size: 22, weight: 600, align: 'center' });
    text(ctx, plus(-q * (share / 2), 1) + ' nC', X1 - 90, YC + HT / 2 + 66, qc, { size: 22, weight: 600, align: 'center' });
    const names = { copper: '铜，一种导体', brine: '盐水，一种导体', glass: '玻璃，一种绝缘体' };
    Lb.add(names[kind], X1 - 30, YC - HT / 2 - 6, -0.6, -1, pcR, 21, 18);
    /* the legend */
    const LY = H - 34;
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(200, LY, 22, 0, TAU); ctx.stroke(); ctx.restore();
    particle(ctx, 200, LY, kind === 'brine' ? 'Cl' : 'e-', 11, '−');
    text(ctx, kind === 'brine' ? '带圈的离子携带所放置的电荷' : '带圈的电子是所放置电荷的一部分', 234, LY, PAL.ink, { size: 18 });
    if (kind === 'copper') { circle(ctx, 790, LY, 11, PAL.soft); text(ctx, '+', 790, LY + 1, PAL.ink, { size: 16, weight: 700, align: 'center' }); text(ctx, '自由电子在其间运动的固定铜离子', 814, LY, PAL.ink, { size: 18 }); }
    else if (kind === 'brine') legendRow(ctx, 790, LY, 'Na', '盐中可以自由漂移的钠离子', '+');
    else text(ctx, '玻璃中的其他电子都被各自的原子束缚着', 770, LY, PAL.muted, { size: 18 });
    const pct = Math.round(s * 100);
    const lines = {
      copper: `${fmt(q, 0)} nC 的额外电荷被放在铜的左端：它的自由电子把电荷带过金属，电荷已扩散到整块材料的 ${pct}%。`,
      brine: `${fmt(q, 0)} nC 的额外电荷被放在盐水的左端：自由离子在其中漂移，把电荷带过了整块材料的 ${pct}%。`,
      glass: `${fmt(q, 0)} nC 的额外电荷被放在玻璃的左端：它的电子被束缚在结构中，所以经过同样的时间后，电荷只扩散到整块材料的 ${pct}%，并停留在被放置的地方。`,
    };
    topline(ctx, lines[kind]);
    Lb.flush();
    const qL = -q * (1 - share / 2), qF = -q * (share / 2);
    readout(d.readout, `\\kq_{\\text{左}} + \\kq_{\\text{远}} = (${texSign(qL, 1)}\\ \\text{nC}) + (${texSign(qF, 1)}\\ \\text{nC}) = ${texSign(-q, 0)}\\ \\text{nC}`,
      kind === 'glass' ? '在真实的玻璃中，电荷根本不会明显移动：图中画出的漂移约比实际快 $10^{23}$ 倍。' : undefined);
  }
  hover(d.stage, () => hits);
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 18.11: the electroscope charged by contact. A story: the book's
   three panels are three stops of one slider (the rod brought near, the
   rod touching the ball, the rod removed), and the rod, the charges and
   the leaves are functions of it, so every position between two panels is
   exact in either direction. Each stop is a settled state, the leaves
   hanging where the electrostatic force and their weight hold them.
===================================================================== */
(function () {
  const d = sim('sim-electroscope', 620);
  const qs = ctl(d.controls, { label: '\\kq', cls: 'charge', min: 1, max: 12, step: 0.5, value: 6, unit: 'nC', dec: 1, aria: '玻璃棒所带的电荷' });
  const ss = ctl(d.controls, { label: '\\text{步骤}', cls: '', min: 0, max: 2, step: 0.01, value: 0, unit: '', dec: 2, aria: '起电的步骤：棒靠近、接触金属球、移开' });
  F.story(d, ss, { stops: [{ v: 0, label: '靠近' }, { v: 1, label: '接触' }, { v: 2, label: '移开' }] });
  const CX = 560, BALL = 186, RB = 42, STEM = 232, JX = 330, JY = 232, JW = 460, JH = 350;
  const sm = F.ease.smooth, clamp = (x) => Math.min(1, Math.max(0, x));
  function draw() {
    const { ctx, H } = begin(d.c);
    const qc = C('charge'), q = qs.v, s = ss.v, st = ['near', 'touch', 'away'][Math.round(s)];
    const esc = F.ref('electroscope'), lfc = F.ref('leaves'), grc = F.ref('glass-rod');
    /* the rod closes in over the first stretch and touches at 1; the charge passes as it touches; it leaves after */
    const u = sm(clamp((s - 0.75) / 0.25)), gone = sm(clamp(s - 1));
    const qScope = q * 0.45 * u, qRod = q - qScope, qLeaves = q * (0.45 - 0.15 * u);
    const ang = 26 * (1 - Math.exp(-(qLeaves * qLeaves) / 6)) * RAD;
    /* the glass-walled container */
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.45); ctx.lineWidth = 3; ctx.strokeRect(JX, JY, JW, JH); ctx.restore();
    text(ctx, '玻璃壁容器', JX + JW / 2, JY + JH + 30, PAL.muted, { size: 18, align: 'center' });
    /* the ball, the stem and the two leaves */
    line(ctx, CX, BALL, CX, BALL + STEM, esc, 8);
    circle(ctx, CX, BALL, RB, PAL.soft, esc);
    const LY0 = BALL + STEM, LL = 130;
    [-1, 1].forEach((sgn) => {
      const a = sgn * ang;
      const x = CX + LL * Math.sin(a), y = LY0 + LL * Math.cos(a);
      /* a leaf is a thin foil: a tapered strip hung from the foot of the stem, its outer face marked */
      const nx = Math.cos(a), ny = -Math.sin(a);                  /* across the leaf */
      ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = lfc; ctx.lineWidth = 2.5; ctx.lineJoin = 'round';
      ctx.beginPath(); ctx.moveTo(CX - nx * 3, LY0 - ny * 3); ctx.lineTo(CX + nx * 3, LY0 + ny * 3);
      ctx.lineTo(x + nx * 11, y + ny * 11); ctx.lineTo(x - nx * 11, y - ny * 11); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
      if (qLeaves > 0.05) for (const f of [0.45, 0.72]) {
        const mx = CX + (LL * f) * Math.sin(a), my = LY0 + (LL * f) * Math.cos(a);
        text(ctx, '+', mx + sgn * 22, my, PAL.ink, { size: 22, weight: 700, align: 'center' });
      }
    });
    /* the electrons drawn up to the top of the ball */
    const nE = Math.max(1, Math.round(q / 2) - (u > 0.5 ? Math.max(1, Math.round(q / 4)) : 0)), span = Math.min(150, (nE - 1) * 30) * RAD;
    F.faded(ctx, 1 - gone, [0, 0], () => { for (let i = 0; i < nE; i++) {
      const a = 270 * RAD - span / 2 + (nE > 1 ? (i / (nE - 1)) * span : 0);
      particle(ctx, CX + RB * Math.cos(a), BALL + RB * Math.sin(a), 'e-', 10);
    } });
    /* the rod, held to the right of the ball: it closes the gap, touches, and is carried off to the right */
    const gap = 110 * (1 - sm(clamp(s / 0.75))) + 900 * gone;
    if (gone < 1) {
      ctx.save(); ctx.globalAlpha = 1 - gone;
      rod(ctx, CX + RB + gap, BALL, 380, 34, '+', Math.max(2, Math.round(qRod / 2)), grc);
      /* the electrons that passed to the rod at the touch ride on it */
      if (u > 0) { ctx.globalAlpha *= u; for (let i = 0; i < Math.max(1, Math.round(q / 4)); i++) particle(ctx, CX + 70 + gap + i * 34, BALL + 46, 'e-', 11); }
      ctx.restore();
    }
    const Lb = labeller(ctx, H); Lb.block(0, 0, 1400, 150);
    Lb.add('金属球', CX - RB, BALL - 10, -1, 0, esc, 20, 22);
    Lb.add('导电杆', CX, BALL + 130, -1, 0, esc, 20, 24);
    Lb.add('金箔片', CX + LL * Math.sin(-ang) * 0.9 - 8, LY0 + LL * 0.9, -1, 0.3, lfc, 20, 30);
    if (gone < 0.5) Lb.add('玻璃棒，一种绝缘体', CX + 330 + gap, BALL, 0.3, 1, grc, 20, 34);
    /* the tally at the right */
    const TX = 1010;
    text(ctx, '金箔片张开 ' + fmt(2 * ang / RAD, 0) + '°', TX, 300, C('angle'), { size: 20 });
    const lines = {
      near: `一根带有 ${plus(q, 1)} nC 的玻璃棒被移近金属球：电子被吸引到验电器的顶部，金箔片上共留下 ${plus(qLeaves, 1)} nC，而同号电荷相互排斥，所以它们张开 ${fmt(2 * ang / RAD, 0)}°。`,
      touch: `棒与金属球接触：因为玻璃是绝缘体，必须接触才能转移电荷，被吸引到顶部的一些电子转移到棒上，使验电器本身带有 ${plus(qScope, 1)} nC。`,
      away: `棒已被移开：留下的过剩电荷 ${plus(qScope, 1)} nC 均匀分布在杆和金箔片上，金箔片仍张开 ${fmt(2 * ang / RAD, 0)}°。`,
    };
    topline(ctx, lines[st]);
    Lb.flush();
    readout(d.readout, `\\kq_{\\text{验电器}} = \\kq - \\kq_{\\text{棒}} = ${fmt(q, 1)}\\ \\text{nC} - ${fmt(qRod, 1)}\\ \\text{nC} = ${qScope < 0.05 ? '0' : texSign(qScope, 1) + '\\ \\text{nC}'}`,
      st === 'near' ? '棒只是使电荷在验电器内移动：整个仪器仍是电中性的。'
        : st === 'touch' ? '电荷是被转移的，不是被产生的：验电器得到的，正是棒失去的。' : undefined);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 18.12: two touching spheres charged by induction. Moving: the
   book's four panels are four moments of one event, the charge crosses
   from one sphere to the other and the spheres are parted in a particular
   order, so the idea has a clock in it, as ch18/config.md allows here
   because the transfer is the idea.
===================================================================== */
(function () {
  const d = sim('sim-induction-spheres', 560);
  const T = 6;
  const cy = cycle(() => T, 1.2);
  const qs = ctl(d.controls, { label: '\\kq', cls: 'charge', min: 1, max: 12, step: 0.5, value: 6, unit: 'nC', dec: 1, aria: '玻璃棒所带的电荷' });
  const AX = 590, BX0 = 770, R = 90, YC = 340;
  function draw() {
    const { ctx, H } = begin(d.c);
    const qc = C('charge'), q = qs.v, t = cy.now();
    const qi = q * 0.6;
    /* the four moments of the book's figure, run as one event */
    let phase, rodX, gap = 0, cross = 0;
    if (t < 1.2) { phase = 'a'; rodX = 40 + (t / 1.2) * 140; }
    else if (t < 2.6) { phase = 'b'; rodX = 180; cross = Math.min(1, (t - 1.2) / 1.0); }
    else if (t < 4.0) { phase = 'c'; rodX = 180; cross = 1; gap = Math.min(1, (t - 2.6) / 1.0) * 150; }
    else { phase = 'd'; cross = 1; gap = 150; rodX = 180 - Math.min(1, (t - 4.0) / 1.4) * 150; }
    const BX = BX0 + gap;
    const held = cross * qi;
    /* the rod */
    const irc = F.ref('inducing-rod'), nsc = F.ref('near-sphere'), fsc = F.ref('far-sphere');
    rod(ctx, rodX, YC, 300, 34, '+', Math.max(2, Math.round(q / 2)), irc);
    /* the two spheres */
    circle(ctx, AX, YC, R, PAL.soft, nsc); circle(ctx, BX, YC, R, PAL.soft, fsc);
    /* the marks: the near sphere's negative charge gathers on its near face, the far sphere's positive on its far face */
    const nm = Math.max(1, Math.round(qi / 1.5));
    for (let i = 0; i < nm; i++) {
      const a = (180 - 34 + (i / Math.max(1, nm - 1 || 1)) * 68) * RAD;
      if (cross > 0.05) text(ctx, '−', AX + (R - 24) * Math.cos(a), YC + (R - 24) * Math.sin(a) + 1, PAL.ink, { size: 22, weight: 700, align: 'center' });
      const b = (-34 + (i / Math.max(1, nm - 1 || 1)) * 68) * RAD;
      if (cross > 0.05) text(ctx, '+', BX + (R - 24) * Math.cos(b), YC + (R - 24) * Math.sin(b) + 1, PAL.ink, { size: 22, weight: 700, align: 'center' });
    }
    /* the electrons crossing from the far sphere to the near one */
    if (phase === 'b') {
      const nC2 = 4;
      for (let i = 0; i < nC2; i++) {
        const f = Math.max(0, Math.min(1, cross * 1.4 - i * 0.12));
        const x = BX0 - 20 + (AX - 40 - (BX0 - 20)) * f, y = YC - 40 + i * 30;
        particle(ctx, x, y, 'e-', 12);
      }
      arrow(ctx, BX0 + 10, YC + 70, AX - 10, YC + 70, PAL.ink, 4);
      text(ctx, '电子越过', (AX + BX0) / 2, YC + 104, PAL.ink, { size: 19, align: 'center' });
    }
    const Lb = labeller(ctx, H); Lb.block(0, 0, 1400, 150);
    Lb.add('带电的棒', rodX + 150, YC + 20, 0, 1, irc, 20, 30);
    Lb.add('较近的球', AX, YC - R, 0, -1, nsc, 20, 22);
    Lb.add('较远的球', BX, YC - R, 0, -1, fsc, 20, 22);
    if (gap > 8) text(ctx, '棒仍在时将两球分开', (AX + BX) / 2, YC + R + 116, PAL.muted, { size: 18, align: 'center' });
    text(ctx, held === 0 ? '0 nC' : plus(-held, 1) + ' nC', AX, YC + R + 56, qc, { size: 22, weight: 600, align: 'center' });
    text(ctx, held === 0 ? '0 nC' : plus(held, 1) + ' nC', BX, YC + R + 56, qc, { size: 22, weight: 600, align: 'center' });
    const lines = {
      a: '两个电中性的金属球相互接触并与其他一切绝缘，一根带正电的棒被移近左边那个球。',
      b: `棒在附近，两个球的电子都跑向较近的那个球：左边的球留下 ${plus(-held, 1)} nC，右边的球留下 ${plus(held, 1)} nC，但两者合起来仍是电中性的。`,
      c: '棒仍在时两个球被分开，所以跑到左边球上的电荷无法再跑回去。',
      d: `棒被移开，它自己的电荷一点也没有损失：每个球保留各自所带的电荷，分别为 ${plus(-qi, 1)} nC 和 ${plus(qi, 1)} nC，而它们从未被带电体接触过。`,
    };
    topline(ctx, lines[phase]);
    Lb.flush();
    readout(d.readout, held === 0 ? `\\kq_{\\text{近}} + \\kq_{\\text{远}} = 0 + 0 = 0`
      : `\\kq_{\\text{近}} + \\kq_{\\text{远}} = (${texSign(-held, 1)}\\ \\text{nC}) + (${texSign(held, 1)}\\ \\text{nC}) = 0`,
      '在两个球分开之前先让棒离开，电子就会跑回去，使两个球重新变为电中性。');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 18.13: one sphere charged by induction through a ground wire.
   A story: the book's four panels are four stops of one slider, and the
   rod, the wire, the electrons in it and the charge on the sphere are
   functions of it. The order of the last two steps is the reader's
   choice; changing it blends one sequence into the other at the same
   point of the story.
===================================================================== */
(function () {
  const d = sim('sim-induction-ground', 620);
  const order = choice(d.controls, { label: '\\text{移开}', options: [
    { value: 'book', label: '先移开接地线' }, { value: 'other', label: '先移开棒' }], value: 'book', aria: '接地线和棒被移开的先后顺序' });
  const qs = ctl(d.controls, { label: '\\kq', cls: 'charge', min: 1, max: 12, step: 0.5, value: 6, unit: 'nC', dec: 1, aria: '玻璃棒所带的电荷' });
  const ss = ctl(d.controls, { label: '\\text{步骤}', cls: '', min: 0, max: 3, step: 0.01, value: 0, unit: '', dec: 2, aria: '起电的步骤' });
  F.story(d, ss, { stops: [{ v: 0, label: '棒靠近' }, { v: 1, label: '接地' }, { v: 2, label: '先移开一个' }, { v: 3, label: '再移开另一个' }] });
  const CX = 660, YC = 300, R = 105, GY = 500, WX = CX + 250;
  const sm = F.ease.smooth, clamp = (x) => Math.min(1, Math.max(0, x));
  /* the scene at story position s, for one order: how present the rod and the wire are (0 to 1), the
     fraction of the induced charge on the sphere, and the electrons' way along the wire (+1 up, −1 down) */
  function state(s, book) {
    const on = sm(clamp(s / 0.6)), up = sm(clamp((s - 0.3) / 0.7));
    return book
      ? { rod: 1 - sm(clamp(s - 2)), wire: on * (1 - sm(clamp(s - 1))), cut: sm(clamp(s - 1)) * (1 - sm(clamp(s - 2))), held: up, flow: s < 1 ? 1 : 0 }
      : { rod: 1 - sm(clamp(s - 1)), wire: on * (1 - sm(clamp(s - 2))), cut: 0, held: up * (1 - sm(clamp(s - 1))), flow: s < 1 ? 1 : s < 2 ? -1 : 0 };
  }
  function draw() {
    const { ctx, H } = begin(d.c);
    const qc = C('charge'), q = qs.v, s = ss.v, st = 'abcd'[Math.round(s)], bookOrder = order.value === 'book';
    const g = order.mix((v) => { const o = state(s, v === 'book'); return [o.rod, o.wire, o.cut, o.held]; });
    const [rodA, wireA, cutA, heldF] = g, flow = state(s, bookOrder).flow;
    const held = q * 0.6 * heldF;
    const spc = F.ref('sphere'), rdc = F.ref('rod'), wrc = F.ref('ground-wire'), ec = F.ref('earth');
    /* the sphere on its insulating stand */
    circle(ctx, CX, YC, R, PAL.soft, spc);
    panel(ctx, CX - 34, YC + R, 68, GY - YC - R, 8, PAL.soft);
    text(ctx, '绝缘支架', CX, GY + 40, PAL.muted, { size: 18, align: 'center' });
    /* the marks on the sphere: polarized while the rod is near, spread evenly once it has gone */
    const nm = Math.max(2, Math.round(q / 1.5));
    const markAt = (sign, deg) => text(ctx, sign, CX + (R - 26) * Math.cos(deg * RAD), YC + (R - 26) * Math.sin(deg * RAD) + 1, PAL.ink, { size: 22, weight: 700, align: 'center' });
    F.faded(ctx, rodA, [0, 0], () => {
      for (let i = 0; i < nm; i++) markAt('−', 180 - 36 + (i / Math.max(1, nm - 1)) * 72);
      const nf = Math.max(heldF > 0.5 ? 1 : 0, Math.round(nm * (1 - (2 / 3) * heldF)));
      for (let i = 0; i < nf; i++) markAt('+', -36 + (i / Math.max(1, nf - 1 || 1)) * 72);
    });
    if (heldF > 0.05) F.faded(ctx, (1 - rodA) * heldF, [0, 0], () => { for (let i = 0; i < nm; i++) markAt('−', (i / nm) * 360); });
    /* the rod, held to the left of the sphere, carried off to the left as it goes */
    F.faded(ctx, rodA, [0, 0], () => rod(ctx, 120 - 260 * (1 - rodA), YC, 350, 34, '+', Math.max(2, Math.round(q / 2)), rdc));
    /* the earth, and the ground wire when it is attached */
    line(ctx, 100, GY, 1300, GY, ec, 4);
    for (let x = 122; x < 1300; x += 46) line(ctx, x, GY, x - 22, GY + 24, alpha(PAL.ink, 0.5), 3);
    text(ctx, '大地，一个巨大的电荷库', 1290, GY + 40, ec, { size: 18, align: 'right' });
    const wirePath = () => { ctx.beginPath(); ctx.moveTo(CX + R - 12, YC + 24); ctx.lineTo(WX, YC + 24); ctx.lineTo(WX, GY); ctx.stroke(); };
    F.faded(ctx, wireA, [0, 0], () => {
      ctx.strokeStyle = wrc; ctx.lineWidth = 4; wirePath();
      text(ctx, '接地线', WX - 10, YC + 4, wrc, { size: 19, align: 'center' });
    });
    /* the electrons in the wire, carried up out of the earth as the sphere is grounded, or back down when the rod leaves first */
    const moving = flow === 1 ? clamp((s - 0.3) / 0.7) : flow === -1 ? clamp(s - 1) : 0;
    if (flow && moving > 0 && moving < 1) F.faded(ctx, wireA, [0, 0], () => {
      for (let i = 0; i < 3; i++) { const f = (moving + i / 3) % 1, y = flow > 0 ? GY - f * (GY - YC - 24) : YC + 24 + f * (GY - YC - 24); particle(ctx, WX, y, 'e-', 12); }
      if (flow > 0) arrow(ctx, WX + 58, GY - 24, WX + 58, YC + 48, PAL.ink, 4); else arrow(ctx, WX + 58, YC + 48, WX + 58, GY - 24, PAL.ink, 4);
      text(ctx, flow > 0 ? '电子从大地升上来' : '电子流回大地', WX + 76, (GY + YC) / 2, PAL.ink, { size: 19 });
    });
    F.faded(ctx, cutA, [0, 0], () => {
      ctx.strokeStyle = alpha(wrc, 0.4); ctx.lineWidth = 4; ctx.setLineDash([8, 10]); wirePath();
      text(ctx, '接地连接已断开', WX + 24, YC + 160, PAL.muted, { size: 18 });
    });
    const Lb = labeller(ctx, H); Lb.block(0, 0, 1400, 150);
    Lb.add('金属球', CX, YC - R, 0, -1, spc, 20, 24);
    if (rodA > 0.5) Lb.add('带电的棒', 300 - 260 * (1 - rodA), YC, 0, 1, rdc, 20, 32);
    const lines = {
      a: `一根带有 ${plus(q, 1)} nC 的棒被移近电中性的金属球并使它极化：负电荷被吸引到近侧，正电荷留在远侧，而球本身仍不带净电荷。`,
      b: `棒在附近时球被接地：电子通过接地线从大地充足的供应中被吸引上来，球现在带有 ${plus(-held, 1)} nC。`,
      c: bookOrder
        ? `棒仍在附近时接地连接被断开：从大地上来的电子无路可退，球保留 ${plus(-held, 1)} nC。`
        : '棒先被移开，而导线仍连着：没有什么东西把多余的电子留在球上，所以它们沿导线跑回大地，球变为电中性。',
      d: bookOrder
        ? `棒被移开，${plus(-held, 1)} nC 的感生电荷均匀分布在球上：球在从未被接触的情况下起了电，而棒没有损失它自己的任何电荷。`
        : '接地连接最后才断开，已没有任何东西留住多余的电荷：球最终是电中性的，这就是为什么必须先移开导线再移开棒。',
    };
    topline(ctx, lines[st]);
    Lb.flush();
    readout(d.readout, `\\kq_{\\text{球}} = ${held < 0.05 ? '0' : texSign(-held, 1) + '\\ \\text{nC}'}`,
      '大地很大，而且大部分地面是良导体，所以它可以轻易地提供或接受过剩电荷。');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 18.14: a charged rod near a neutral insulator and near a neutral
   conductor. Still: a polarized molecule has turned as far as the rod
   turns it and stays there, so the figure answers its controls and
   registers no cycle.
===================================================================== */
(function () {
  const d = sim('sim-polarization', 600);
  const panelSel = choice(d.controls, { label: '\\text{情形}', options: [
    { value: 'pos', label: '带正电的棒，绝缘体' }, { value: 'neg', label: '带负电的棒，绝缘体' }, { value: 'cond', label: '带电的棒，导体' }], value: 'pos', aria: '图中显示的是书中三种情形中的哪一种' });
  const ds = ctl(d.controls, { label: '\\text{距离}', cls: 'position', min: 2, max: 10, step: 0.5, value: 4, unit: 'cm', dec: 1, aria: '棒离电中性物体有多远' });
  const qs = ctl(d.controls, { label: '\\kq', cls: 'charge', min: 1, max: 12, step: 0.5, value: 6, unit: 'nC', dec: 1, aria: '棒所带的电荷' });
  const RX = 250, YC = 330, OBW = 460, OBH = 250, S = 26;   /* 26 units to the centimetre */
  /* a molecule: two lobes, its negative end turned by the angle th (0 toward the rod on the left, π away) and pulled apart by the fraction f */
  function molecule(ctx, x, y, r, th, f) {
    const sep = 13 + 7 * f, cx = Math.cos(th) * sep, cy = Math.sin(th) * sep * 0.6;
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.beginPath(); ctx.ellipse(x, y, sep + r + 6, r + 7, Math.atan2(cy, cx), 0, TAU); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.arc(x - cx, y - cy, r, 0, TAU); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(x + cx, y + cy, r * 0.86, 0, TAU); ctx.fill(); ctx.stroke();
    ctx.restore();
    const k = (sep + 3) / sep;
    text(ctx, '−', x - cx * k, y - cy * k + 1, PAL.ink, { size: 19, weight: 700, align: 'center' });
    text(ctx, '+', x + cx * k, y + cy * k + 1, PAL.ink, { size: 19, weight: 700, align: 'center' });
  }
  function draw() {
    const { ctx, H } = begin(d.c);
    const qc = C('charge'), fc = C('force'), pc = C('position'), q = qs.v, dist = ds.v, cse = panelSel.value;
    const crc = F.ref('charged-rod'), obc = F.ref('neutral-object');
    const positive = cse !== 'neg';
    /* a change of case blends: the rod's marks cross over, the molecules turn end for end, and a conductor's face charges replace the molecules */
    const [pos, cond, th] = panelSel.mix((v) => [v !== 'neg' ? 1 : 0, v === 'cond' ? 1 : 0, v === 'neg' ? Math.PI : 0]);
    const OX = RX + 40 + dist * S;                       /* the near face of the object */
    /* the rod, standing on its end at the left */
    panel(ctx, RX - 40, YC - 170, 80, 340, 40, PAL.soft, crc);
    const nm = Math.max(3, Math.round(q / 1.5));
    for (const [sign, a] of [['+', pos], ['−', 1 - pos]]) F.faded(ctx, a, [0, 0], () => { for (let i = 0; i < nm; i++) text(ctx, sign, RX, YC - 134 + (i / Math.max(1, nm - 1)) * 268, PAL.ink, { size: 24, weight: 700, align: 'center' }); });
    /* the neutral object */
    panel(ctx, OX, YC - OBH / 2, OBW, OBH, 10, PAL.panel, obc);
    /* how far the charges have shifted: more with the charge and less with the distance, never a stated force */
    const f = Math.min(1, (q / 6) * (16 / (dist * dist)));
    /* a conductor: the free charges gather on the two faces */
    F.faded(ctx, cond, [0, 0], () => {
      const n = Math.max(3, Math.round(3 + f * 5));
      for (let i = 0; i < n; i++) {
        const y = YC - OBH / 2 + 40 + (i / Math.max(1, n - 1)) * (OBH - 80);
        text(ctx, positive ? '−' : '+', OX + 30, y, PAL.ink, { size: 24, weight: 700, align: 'center' });
        text(ctx, positive ? '+' : '−', OX + OBW - 30, y, PAL.ink, { size: 24, weight: 700, align: 'center' });
      }
    });
    /* an insulator: every molecule turns its unlike end toward the rod */
    F.faded(ctx, 1 - cond, [0, 0], () => {
      for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) molecule(ctx, OX + 68 + c * 110, YC - 78 + r * 78, 19, th, f);
    });
    /* the two pulls, each set under the face whose charges feel it: the attraction
       pulls the near face toward the rod, the weaker repulsion pushes the far face
       away. The far charges sit about four centimetres deeper into the object, and
       the push on them is weaker in that proportion. Neither arrow is a stated force,
       since Coulomb's law is 18.3's. */
    const AL = 70 + 150 * f, RL = Math.max(26, AL * (dist * dist) / ((dist + 4) * (dist + 4)));
    const AY = YC + OBH / 2 + 62;
    arrow(ctx, OX, AY, OX - AL, AY, fc, 5);
    arrow(ctx, OX + OBW, AY, OX + OBW + RL, AY, fc, 5);
    F.label(ctx, '较近的异号电荷被拉向棒', OX - AL / 2, AY, { side: 'below', size: 19, weight: 400, gap: 24, H });
    F.label(ctx, '较远的同号电荷被推开，但力较小', OX + OBW + RL / 2, AY, { side: 'below', size: 19, weight: 400, gap: 24, H });
    const Lb = labeller(ctx, H); Lb.block(0, 0, 1400, 96);
    Lb.block(1000, 170, 1400, 212);                        /* the net-charge line at the top right */
    Lb.add('带电的棒', RX - 40, YC, -1, 0, crc, 20, 20);
    Lb.add(cse === 'cond' ? '电中性的导体' : '电中性的绝缘体', OX + OBW / 2, YC - OBH / 2, 0, -1, obc, 20, 22);
    /* the distance between the rod and the near face, in the gap above the two bodies' centre line */
    const DY = YC - OBH / 2 - 30;
    line(ctx, RX + 40, DY, OX, DY, PAL.muted, 2);
    line(ctx, RX + 40, DY - 10, RX + 40, DY + 10, PAL.muted, 2); line(ctx, OX, DY - 10, OX, DY + 10, PAL.muted, 2);
    text(ctx, fmt(dist, 1) + ' cm', (RX + 40 + OX) / 2, DY - 22, pc, { size: 19, align: 'center', bg: alpha(PAL.panel, 0.9) });
    const what = cse === 'cond' ? '导体' : '绝缘体';
    topline(ctx, `一根带有 ${plus(positive ? q : -q, 1)} nC 的棒被拿在距电中性的${what} ${fmt(dist, 1)} cm 处：${cse === 'cond' ? '它的自由电荷聚集起来，近面为异号，远面为同号' : '每个分子都把异号端转向棒'}，而且因为异号电荷离得更近，所以物体被吸引。`);
    Lb.flush();
    readout(d.readout, `\\kq_{\\text{物体}} = 0`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
