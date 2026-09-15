/* Figures for section 18.2 Conductors and Insulators. Boots against the section's text article.
   The page binds charge alone: four of the five simulations carry a charge
   slider and every one of them states a charge in its readout. Electrons and
   ions are the element palette's particles; a sign is told by the book's +
   and − marks and by which way an arrow points, never by a hue. Three
   figures answer their controls and register no cycle; the spreading charge
   of the opening simulation and the induction of Figure 18.12 have a clock
   in them and move. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['18.2'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, cycle, line, arrow, dot, text, topline, labeller, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

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
/* a rounded rectangle in ink */
function panel(ctx, x, y, w, h, r, fill) {
  ctx.save(); ctx.fillStyle = fill; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
  ctx.fill(); ctx.stroke(); ctx.restore();
}
/* a circle in ink */
function circle(ctx, x, y, r, fill) {
  ctx.save(); ctx.fillStyle = fill; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
}
/* the book's + and − marks, drawn in ink at the points given */
function marks(ctx, pts, sign, size) { pts.forEach(([x, y]) => text(ctx, sign, x, y + 1, PAL.ink, { size: size || 24, weight: 700, align: 'center' })); }
/* the rod the book draws: a rounded bar of length L and thickness T, held horizontally with its near end at (x, y) */
function rod(ctx, x, y, L, T, sign, n) {
  panel(ctx, x, y - T / 2, L, T, T / 2, PAL.soft);
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
  const mat = choice(d.controls, { label: '\\text{the material}', options: [
    { value: 'copper', label: 'copper' }, { value: 'brine', label: 'salty water' }, { value: 'glass', label: 'glass' }], value: 'copper', aria: 'the material the charge is placed on', onInput: () => cy.reset() });
  const qs = ctl(d.controls, { label: '\\kq', cls: 'charge', min: 1, max: 20, step: 1, value: 10, unit: 'nC', dec: 0, aria: 'the charge placed on the left end of the material' });
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
    panel(ctx, X0, YC - HT / 2, X1 - X0, HT, 14, PAL.panel);
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
      hits.push({ x, y, r: 22, name: kind === 'brine' ? 'a chloride ion carrying part of the charge that was placed' : 'one of the extra electrons placed on the left end' });
    }
    const Lb = labeller(ctx, H); Lb.block(0, 0, 1400, 96);
    /* what each half of the piece holds */
    const share = Math.min(1, s);
    text(ctx, 'left end', X0 + 90, YC + HT / 2 + 34, PAL.ink, { size: 20, align: 'center' });
    text(ctx, 'far end', X1 - 90, YC + HT / 2 + 34, PAL.ink, { size: 20, align: 'center' });
    text(ctx, plus(-q * (1 - share / 2), 1) + ' nC', X0 + 90, YC + HT / 2 + 66, qc, { size: 22, weight: 600, align: 'center' });
    text(ctx, plus(-q * (share / 2), 1) + ' nC', X1 - 90, YC + HT / 2 + 66, qc, { size: 22, weight: 600, align: 'center' });
    const names = { copper: 'copper, a conductor', brine: 'salty water, a conductor', glass: 'glass, an insulator' };
    Lb.add(names[kind], X1 - 30, YC - HT / 2 - 6, -0.6, -1, PAL.ink, 21, 18);
    /* the legend */
    const LY = H - 34;
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(200, LY, 22, 0, TAU); ctx.stroke(); ctx.restore();
    particle(ctx, 200, LY, kind === 'brine' ? 'Cl' : 'e-', 11, '−');
    text(ctx, kind === 'brine' ? 'a ringed ion carries the charge that was placed' : 'a ringed electron is part of the charge that was placed', 234, LY, PAL.ink, { size: 18 });
    if (kind === 'copper') { circle(ctx, 790, LY, 11, PAL.soft); text(ctx, '+', 790, LY + 1, PAL.ink, { size: 16, weight: 700, align: 'center' }); text(ctx, 'a fixed copper ion the free electrons move among', 814, LY, PAL.ink, { size: 18 }); }
    else if (kind === 'brine') legendRow(ctx, 790, LY, 'Na', 'a sodium ion of the salt, free to drift', '+');
    else text(ctx, 'every other electron of the glass is held by its own atom', 770, LY, PAL.muted, { size: 18 });
    const pct = Math.round(s * 100);
    const lines = {
      copper: `${fmt(q, 0)} nC of extra charge is placed on the left end of the copper: its free electrons carry the charge through the metal and it has spread over ${pct}% of the piece.`,
      brine: `${fmt(q, 0)} nC of extra charge is placed on the left end of the salty water: free ions drift through it and carry the charge over ${pct}% of the piece.`,
      glass: `${fmt(q, 0)} nC of extra charge is placed on the left end of the glass: its electrons are bound in the structure, so after the same time the charge has spread over only ${pct}% of the piece and stays where it was put.`,
    };
    topline(ctx, lines[kind]);
    Lb.flush();
    readout(d.readout, `\\kq = ${texSign(-q, 0)}\\ \\text{nC} \\ \\text{placed on the left end}`,
      kind === 'glass'
        ? 'Electrons and ions in an insulator are bound in the structure and move as much as 10²³ times more slowly than in a conductor. That factor is far too large to draw, so the charge here is shown creeping at a speed anyone can see; in a real piece of glass it would not have moved at all.'
        : 'Charge moves freely through a conductor, so a charge placed at one point does not stay there: in copper it is carried by electrons that are not bound to any one atom, and in salty water by ions that are free to drift. The total charge is the same wherever it sits.');
  }
  hover(d.stage, () => hits);
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 18.11: the electroscope charged by contact. Still: each of the
   book's three panels is a settled state, the leaves hanging where the
   electrostatic force and their weight hold them, so the figure answers
   its controls and registers no cycle.
===================================================================== */
(function () {
  const d = sim('sim-electroscope', 620);
  const step = choice(d.controls, { label: '\\text{the step}', options: [
    { value: 'near', label: 'rod brought near' }, { value: 'touch', label: 'rod touching the ball' }, { value: 'away', label: 'rod removed' }], value: 'near', aria: 'which step of the charging the figure shows' });
  const qs = ctl(d.controls, { label: '\\kq', cls: 'charge', min: 1, max: 12, step: 0.5, value: 6, unit: 'nC', dec: 1, aria: 'the charge the glass rod carries' });
  const CX = 560, BALL = 186, RB = 42, STEM = 232, JX = 330, JY = 232, JW = 460, JH = 350;
  function draw() {
    const { ctx, H } = begin(d.c);
    const qc = C('charge'), q = qs.v, st = step.value;
    /* what each part holds at this step */
    const qRod = st === 'near' ? q : st === 'touch' ? q * 0.55 : q * 0.55;
    const qScope = st === 'near' ? 0 : q * 0.45;
    const qLeaves = st === 'near' ? q * 0.45 : st === 'touch' ? q * 0.30 : q * 0.30;
    const ang = 26 * (1 - Math.exp(-(qLeaves * qLeaves) / 6)) * RAD;
    /* the glass-walled container */
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.45); ctx.lineWidth = 3; ctx.strokeRect(JX, JY, JW, JH); ctx.restore();
    text(ctx, 'glass-walled container', JX + JW / 2, JY + JH + 30, PAL.muted, { size: 18, align: 'center' });
    /* the ball, the stem and the two leaves */
    line(ctx, CX, BALL, CX, BALL + STEM, PAL.ink, 8);
    circle(ctx, CX, BALL, RB, PAL.soft);
    const LY0 = BALL + STEM, LL = 130;
    [-1, 1].forEach((sgn) => {
      const a = sgn * ang;
      const x = CX + LL * Math.sin(a), y = LY0 + LL * Math.cos(a);
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 9; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(CX, LY0); ctx.lineTo(x, y); ctx.stroke(); ctx.restore();
      const mid = { x: CX + (LL * 0.55) * Math.sin(a), y: LY0 + (LL * 0.55) * Math.cos(a) };
      text(ctx, '+', mid.x + sgn * 26, mid.y, PAL.ink, { size: 22, weight: 700, align: 'center' });
      text(ctx, '+', mid.x + sgn * 26, mid.y + 36, PAL.ink, { size: 22, weight: 700, align: 'center' });
    });
    /* the electrons drawn up to the top, and the ones transferred to the rod */
    const nE = Math.max(1, Math.round(q / 2));
    for (let i = 0; i < nE; i++) {
      const a = 202 * RAD + (i / Math.max(1, nE - 1 || 1)) * 76 * RAD;
      particle(ctx, CX + RB * Math.cos(a), BALL + RB * Math.sin(a), 'e-', 11);
    }
    /* the rod, held to the right of the ball */
    if (st !== 'away') {
      const gap = st === 'touch' ? 0 : 110;
      rod(ctx, CX + RB + gap, BALL, 380, 34, '+', Math.max(2, Math.round(qRod / 2)));
      if (st === 'touch') for (let i = 0; i < Math.max(1, Math.round(q / 4)); i++) particle(ctx, CX + 70 + i * 34, BALL + 46, 'e-', 11);
    }
    const Lb = labeller(ctx, H); Lb.block(0, 0, 1400, 150);
    Lb.add('the ball', CX - RB, BALL - 10, -1, 0, PAL.ink, 20, 22);
    Lb.add('the conducting stem', CX, BALL + 130, -1, 0, PAL.ink, 20, 24);
    Lb.add('gold leaves', CX, LY0 + 110, -1, 0.4, PAL.ink, 20, 86);
    if (st !== 'away') Lb.add('the glass rod, an insulator', CX + 330, BALL, 0.3, 1, PAL.ink, 20, 34);
    /* the tally at the right */
    const TX = 1010;
    text(ctx, 'charge on the rod', TX, 256, PAL.ink, { size: 20 });
    text(ctx, plus(qRod, 1) + ' nC', TX, 292, qc, { size: 24, weight: 600 });
    text(ctx, 'net charge on the electroscope', TX, 356, PAL.ink, { size: 20 });
    text(ctx, qScope === 0 ? '0 nC' : plus(qScope, 1) + ' nC', TX, 392, qc, { size: 24, weight: 600 });
    text(ctx, 'the leaves stand ' + fmt(2 * ang / RAD, 0) + '° apart', TX, 456, PAL.ink, { size: 20 });
    const lines = {
      near: `A glass rod holding ${plus(q, 1)} nC is brought near the ball: electrons are attracted to the top of the electroscope, the leaves are left with ${plus(qLeaves, 1)} nC between them, and like charges repel, so they stand ${fmt(2 * ang / RAD, 0)}° apart.`,
      touch: `The rod is touched against the ball: because glass is an insulator it must touch to transfer charge, and some of the electrons drawn to the top pass to the rod, leaving the electroscope itself with ${plus(qScope, 1)} nC.`,
      away: `The rod has been taken away: the excess charge that stayed behind, ${plus(qScope, 1)} nC, spreads evenly through the stem and leaves, and the leaves stay ${fmt(2 * ang / RAD, 0)}° apart.`,
    };
    topline(ctx, lines[st]);
    Lb.flush();
    readout(d.readout, `\\kq_{\\text{rod}} = ${texSign(qRod, 1)}\\ \\text{nC}, \\qquad \\kq_{\\text{electroscope}} = ${qScope === 0 ? '0' : texSign(qScope, 1) + '\\ \\text{nC}'}`,
      st === 'near'
        ? 'Bringing the rod near moves charge about inside the electroscope but adds none to it: the whole instrument is still neutral, and it is the leaves alone that are left positive and repel. The electrostatic force has a horizontal component that separates them and a vertical one that the gravitational force balances.'
        : st === 'touch'
          ? 'Touching transfers charge. Only electrons move in a metal, so it is electrons that go to the rod, which reduces the rod’s net charge and leaves the electroscope positive. Charge is moved, not made: what the electroscope gained the rod lost.'
          : 'The electroscope keeps the charge it was given. Excess charge on a conductor spreads evenly through it, so stem and leaves share it, and the leaves stay apart for as long as the charge remains.');
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
  const qs = ctl(d.controls, { label: '\\kq', cls: 'charge', min: 1, max: 12, step: 0.5, value: 6, unit: 'nC', dec: 1, aria: 'the charge the glass rod carries' });
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
    else { phase = 'd'; cross = 1; gap = 150; rodX = 180 - Math.min(1, (t - 4.0) / 1.4) * 240; }
    const BX = BX0 + gap;
    const held = cross * qi;
    /* the rod */
    rod(ctx, rodX, YC, 300, 34, '+', Math.max(2, Math.round(q / 2)));
    /* the two spheres */
    circle(ctx, AX, YC, R, PAL.soft); circle(ctx, BX, YC, R, PAL.soft);
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
      text(ctx, 'electrons cross', (AX + BX0) / 2, YC + 104, PAL.ink, { size: 19, align: 'center' });
    }
    const Lb = labeller(ctx, H); Lb.block(0, 0, 1400, 150);
    Lb.add('the charged rod', rodX + 150, YC + 20, 0, 1, PAL.ink, 20, 30);
    Lb.add('near sphere', AX, YC - R, 0, -1, PAL.ink, 20, 22);
    Lb.add('far sphere', BX, YC - R, 0, -1, PAL.ink, 20, 22);
    if (gap > 8) text(ctx, 'separated while the rod is still there', (AX + BX) / 2, YC + R + 116, PAL.muted, { size: 18, align: 'center' });
    text(ctx, held === 0 ? '0 nC' : plus(-held, 1) + ' nC', AX, YC + R + 56, qc, { size: 22, weight: 600, align: 'center' });
    text(ctx, held === 0 ? '0 nC' : plus(held, 1) + ' nC', BX, YC + R + 56, qc, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'the two spheres together: 0 nC', 1400 - 40, H - 40, qc, { size: 21, weight: 600, align: 'right' });
    const lines = {
      a: 'Two neutral metal spheres touch one another and are insulated from everything else, and a positively charged rod is brought up to the left one.',
      b: `The rod is near, and the electrons of both spheres run to the near one: the left sphere is left with ${plus(-held, 1)} nC and the right one with ${plus(held, 1)} nC, though the two together are still neutral.`,
      c: 'The spheres are separated while the rod is still there, so the charge that ran to the left sphere cannot run back.',
      d: `The rod is taken away, having lost none of its own charge: each sphere keeps what it holds, ${plus(-qi, 1)} nC and ${plus(qi, 1)} nC, without ever having been touched by a charged object.`,
    };
    topline(ctx, lines[phase]);
    Lb.flush();
    readout(d.readout, `\\kq_{\\text{near}} = ${held === 0 ? '0' : texSign(-held, 1) + '\\ \\text{nC}'}, \\qquad \\kq_{\\text{far}} = ${held === 0 ? '0' : texSign(held, 1) + '\\ \\text{nC}'}, \\qquad \\kq_{\\text{near}} + \\kq_{\\text{far}} = 0`,
      'The object closest to the charged rod receives the opposite charge when it is charged by induction, and no charge is removed from the rod, so the whole process can be repeated without depleting its supply. The spheres must be parted before the rod is pulled away; let the rod go first and the electrons run back and both spheres are neutral again.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 18.13: one sphere charged by induction through a ground wire.
   Still: the reader picks the step and asks what the sphere holds at
   that moment; the transfer itself is drawn moving in Figure 18.12, and
   a second clock would say nothing new.
===================================================================== */
(function () {
  const d = sim('sim-induction-ground', 620);
  const step = choice(d.controls, { label: '\\text{the step}', options: [
    { value: 'a', label: 'rod near' }, { value: 'b', label: 'grounded' }, { value: 'c', label: 'the first is taken away' }, { value: 'd', label: 'the second is taken away' }], value: 'a', aria: 'which step of the charging the figure shows' });
  const order = choice(d.controls, { label: '\\text{taken away}', options: [
    { value: 'book', label: 'the ground wire first' }, { value: 'other', label: 'the rod first' }], value: 'book', aria: 'the order in which the ground wire and the rod are taken away' });
  const qs = ctl(d.controls, { label: '\\kq', cls: 'charge', min: 1, max: 12, step: 0.5, value: 6, unit: 'nC', dec: 1, aria: 'the charge the glass rod carries' });
  const CX = 660, YC = 300, R = 105, GY = 500;
  function draw() {
    const { ctx, H } = begin(d.c);
    const qc = C('charge'), q = qs.v, st = step.value, bookOrder = order.value === 'book';
    /* what is present and what the sphere holds at this step */
    const rodOn = st === 'a' || st === 'b' || (st === 'c' && bookOrder) || (st === 'd' && false);
    const wireOn = st === 'b' || (st === 'c' && !bookOrder);
    const held = st === 'a' ? 0 : st === 'b' ? q * 0.6 : bookOrder ? q * 0.6 : 0;
    const polarized = rodOn && held >= 0;
    const spread = st === 'd' || (st === 'c' && !bookOrder && !rodOn);
    /* the sphere on its insulating stand */
    circle(ctx, CX, YC, R, PAL.soft);
    panel(ctx, CX - 34, YC + R, 68, GY - YC - R, 8, PAL.soft);
    text(ctx, 'insulating stand', CX, GY + 40, PAL.muted, { size: 18, align: 'center' });
    /* the marks on the sphere */
    const nm = Math.max(2, Math.round(q / 1.5));
    if (polarized) {
      for (let i = 0; i < nm; i++) {
        const a = (180 - 36 + (i / Math.max(1, nm - 1)) * 72) * RAD;
        text(ctx, '−', CX + (R - 26) * Math.cos(a), YC + (R - 26) * Math.sin(a) + 1, PAL.ink, { size: 22, weight: 700, align: 'center' });
      }
      const nf = held > 0 ? Math.max(1, Math.round(nm / 3)) : nm;
      for (let i = 0; i < nf; i++) {
        const b = (-36 + (i / Math.max(1, nf - 1 || 1)) * 72) * RAD;
        text(ctx, '+', CX + (R - 26) * Math.cos(b), YC + (R - 26) * Math.sin(b) + 1, PAL.ink, { size: 22, weight: 700, align: 'center' });
      }
    } else if (spread && held > 0) {
      for (let i = 0; i < nm; i++) { const a = (i / nm) * TAU; text(ctx, '−', CX + (R - 26) * Math.cos(a), YC + (R - 26) * Math.sin(a) + 1, PAL.ink, { size: 22, weight: 700, align: 'center' }); }
    }
    /* the rod, held to the left of the sphere */
    if (rodOn) rod(ctx, 120, YC, 350, 34, '+', Math.max(2, Math.round(q / 2)));
    /* the earth, and the ground wire when it is attached */
    line(ctx, 100, GY, 1300, GY, PAL.ink, 4);
    for (let x = 122; x < 1300; x += 46) line(ctx, x, GY, x - 22, GY + 24, alpha(PAL.ink, 0.5), 3);
    text(ctx, 'the earth, a large reservoir of charge', 1290, GY + 40, PAL.muted, { size: 18, align: 'right' });
    const WX = CX + 250;
    if (wireOn) {
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(CX + R - 12, YC + 24); ctx.lineTo(WX, YC + 24); ctx.lineTo(WX, GY); ctx.stroke(); ctx.restore();
      for (let i = 0; i < 3; i++) particle(ctx, WX, GY - 52 - i * 56, 'e-', 12);
      arrow(ctx, WX + 58, GY - 24, WX + 58, YC + 48, PAL.ink, 4);
      text(ctx, 'electrons come up out of the earth', WX + 76, (GY + YC) / 2, PAL.ink, { size: 19 });
      text(ctx, 'ground wire', WX - 10, YC + 4, PAL.ink, { size: 19, align: 'center' });
    } else if (st === 'c' && bookOrder) {
      ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.4); ctx.lineWidth = 4; ctx.setLineDash([8, 10]); ctx.beginPath(); ctx.moveTo(CX + R - 12, YC + 24); ctx.lineTo(WX, YC + 24); ctx.lineTo(WX, GY); ctx.stroke(); ctx.restore();
      text(ctx, 'the ground connection has been broken', WX + 24, YC + 160, PAL.muted, { size: 18 });
    }
    const Lb = labeller(ctx, H); Lb.block(0, 0, 1400, 150);
    Lb.add('the metal sphere', CX, YC - R, 0, -1, PAL.ink, 20, 24);
    if (rodOn) Lb.add('the charged rod', 300, YC, 0, 1, PAL.ink, 20, 32);
    text(ctx, 'net charge on the sphere', 1010, 186, PAL.ink, { size: 20 });
    text(ctx, held === 0 ? '0 nC' : plus(-held, 1) + ' nC', 1010, 224, qc, { size: 24, weight: 600 });
    /* what the reader is looking at */
    const lines = {
      a: `A rod holding ${plus(q, 1)} nC is brought near the neutral metal sphere and polarizes it: negative charge is drawn to the near side and positive charge is left on the far side, and the sphere itself still holds no net charge.`,
      b: `The sphere is grounded while the rod is near: electrons are attracted up out of the earth’s ample supply through the ground wire, and the sphere now holds ${plus(-held, 1)} nC.`,
      c: bookOrder
        ? `The ground connection is broken while the rod is still near: the electrons that came up from the earth have no way back, and the sphere keeps ${plus(-held, 1)} nC.`
        : 'The rod is taken away first, while the wire is still attached: nothing holds the extra electrons on the sphere, so they run back down the wire to the earth and the sphere is left neutral.',
      d: bookOrder
        ? `The rod is removed, and the induced charge of ${plus(-held, 1)} nC spreads evenly over the sphere: it has been charged without ever being touched, and the rod has lost none of its own charge.`
        : 'The ground connection is broken last, with nothing left to hold any extra charge: the sphere ends neutral, which is why the wire must be taken away before the rod.',
    };
    topline(ctx, lines[st]);
    Lb.flush();
    readout(d.readout, `\\kq_{\\text{sphere}} = ${held === 0 ? '0' : texSign(-held, 1) + '\\ \\text{nC}'}, \\qquad \\kq_{\\text{rod}} = ${texSign(q, 1)}\\ \\text{nC}`,
      bookOrder
        ? 'The earth is large and most ground is a good conductor, so it can supply or accept excess charge easily. Break the ground connection before the rod is removed and the sphere is left with an excess charge opposite to the rod’s, and the rod loses none of its own.'
        : 'Take the rod away while the wire is still attached and the electrons it drew up from the earth simply run back down, since nothing holds them on the sphere. The order of the two steps is what decides whether the sphere ends charged or neutral.');
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
  const d = sim('sim-polarization', 720);
  const panelSel = choice(d.controls, { label: '\\text{the case}', options: [
    { value: 'pos', label: 'positive rod, insulator' }, { value: 'neg', label: 'negative rod, insulator' }, { value: 'cond', label: 'charged rod, conductor' }], value: 'pos', aria: 'which of the book’s three cases the figure shows' });
  const ds = ctl(d.controls, { label: '\\text{distance}', cls: '', min: 2, max: 10, step: 0.5, value: 4, unit: 'cm', dec: 1, aria: 'how far the rod is held from the neutral object' });
  const qs = ctl(d.controls, { label: '\\kq', cls: 'charge', min: 1, max: 12, step: 0.5, value: 6, unit: 'nC', dec: 1, aria: 'the charge the rod carries' });
  const RX = 250, YC = 330, OBW = 460, OBH = 250, S = 26;   /* 26 units to the centimetre */
  /* a molecule: two lobes, its negative end turned toward the rod by the fraction f */
  function molecule(ctx, x, y, r, toward, f) {
    const sep = 14 + 12 * f, s = toward;
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.arc(x - s * sep, y, r, 0, TAU); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(x + s * sep, y, r * 0.86, 0, TAU); ctx.fill(); ctx.stroke();
    ctx.restore();
    text(ctx, '−', x - s * (sep + 3), y + 1, PAL.ink, { size: 19, weight: 700, align: 'center' });
    text(ctx, '+', x + s * (sep + 3), y + 1, PAL.ink, { size: 19, weight: 700, align: 'center' });
  }
  function draw() {
    const { ctx, H } = begin(d.c);
    const qc = C('charge'), q = qs.v, dist = ds.v, cse = panelSel.value;
    const positive = cse !== 'neg';
    const OX = RX + 40 + dist * S;                       /* the near face of the object */
    /* the rod, standing on its end at the left */
    panel(ctx, RX - 40, YC - 170, 80, 340, 40, PAL.soft);
    const nm = Math.max(3, Math.round(q / 1.5));
    for (let i = 0; i < nm; i++) text(ctx, positive ? '+' : '−', RX, YC - 134 + (i / Math.max(1, nm - 1)) * 268, PAL.ink, { size: 24, weight: 700, align: 'center' });
    /* the neutral object */
    panel(ctx, OX, YC - OBH / 2, OBW, OBH, 10, PAL.panel);
    /* how far the charges have shifted: more with the charge and less with the distance, never a stated force */
    const f = Math.min(1, (q / 6) * (16 / (dist * dist)));
    const toward = positive ? 1 : -1;                    /* the molecule's negative end faces a positive rod */
    if (cse === 'cond') {
      /* a conductor: the free charges gather on the two faces */
      const n = Math.max(3, Math.round(3 + f * 5));
      for (let i = 0; i < n; i++) {
        const y = YC - OBH / 2 + 40 + (i / Math.max(1, n - 1)) * (OBH - 80);
        text(ctx, positive ? '−' : '+', OX + 30, y, PAL.ink, { size: 24, weight: 700, align: 'center' });
        text(ctx, positive ? '+' : '−', OX + OBW - 30, y, PAL.ink, { size: 24, weight: 700, align: 'center' });
      }
    } else {
      for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) {
        const x = OX + 68 + c * 110, y = YC - 78 + r * 78;
        molecule(ctx, x, y, 19, toward, f);
      }
    }
    /* the two pulls: the nearer unlike charges attract, the farther like ones repel */
    /* the two pulls, stacked in a clear band below the object so that neither crosses the rod */
    /* the far charges sit about four centimetres deeper into the object, and the pull on them is weaker in that proportion */
    const AL = 70 + 150 * f, RL = Math.max(26, AL * (dist * dist) / ((dist + 4) * (dist + 4)));
    const AX0 = OX + OBW / 2, AY = YC + OBH / 2 + 60, RY = YC + OBH / 2 + 135;
    arrow(ctx, AX0, AY, AX0 - AL, AY, PAL.ink, 5);
    arrow(ctx, AX0, RY, AX0 + RL, RY, PAL.ink, 5);
    const Lb = labeller(ctx, H); Lb.block(0, 0, 1400, 150);
    Lb.add('the nearer unlike charges are pulled toward the rod', AX0 - AL, AY, -1, 0, PAL.ink, 19, 18);
    Lb.add('the farther like charges are pushed away, but less', AX0 + RL, RY, 1, 0, PAL.ink, 19, 18);
    Lb.add('the charged rod', RX - 40, YC, -1, 0, PAL.ink, 20, 20);
    Lb.add(cse === 'cond' ? 'a neutral conductor' : 'a neutral insulator', OX + OBW, YC - OBH / 2, 0.4, -1, PAL.ink, 20, 22);
    /* the distance between them */
    const DY = YC + OBH / 2 + 220;
    line(ctx, RX + 40, DY, OX, DY, alpha(PAL.ink, 0.4), 2, [4, 8]);
    text(ctx, fmt(dist, 1) + ' cm', (RX + 40 + OX) / 2, DY + 28, PAL.ink, { size: 19, align: 'center' });
    text(ctx, 'net charge on the object  q = 0', 1400 - 40, 190, qc, { size: 21, weight: 600, align: 'right' });
    const what = cse === 'cond' ? 'conductor' : 'insulator';
    topline(ctx, `A rod holding ${plus(positive ? q : -q, 1)} nC is held ${fmt(dist, 1)} cm from a neutral ${what}: ${cse === 'cond' ? 'its free charges gather, unlike on the near face and like on the far one' : 'every molecule turns its unlike end toward the rod'}, and because the unlike charges are nearer, the object is attracted.`);
    Lb.flush();
    readout(d.readout, `\\kq_{\\text{rod}} = ${texSign(positive ? q : -q, 1)}\\ \\text{nC}, \\qquad \\kq_{\\text{object}} = 0`,
      'The object remains neutral: nothing is added to it and nothing is taken away, and only the places its charges sit have changed. Since the electrostatic force decreases with distance, the attraction of the unlike charges, which are nearer, beats the repulsion of the like charges, which are farther, and the net effect is a pull toward the rod. Bring the rod closer and both the shift and the attraction grow.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
