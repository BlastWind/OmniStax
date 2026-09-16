/* Figures for section 24.1 Maxwell's Equations: Electromagnetic Waves Predicted
   and Observed. Both figures here are still pictures: the four equations are
   statements about what a field looks like and what makes it, not about what
   happens next, and Hertz's argument is an arithmetic between a frequency he
   knew and a wavelength he measured. The wave is set moving in 24.2, where its
   production is the lesson. Neither figure registers a cycle, neither carries a
   transport, and a control's input alone redraws them. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['24.1'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, select, register, begin, line, arrow, dot, text, headline, hbracket, label } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- helpers shared by the two figures ---------- */
const TAU = 2 * Math.PI;
/* a field out of the page: a ring with a dot at its centre */
function outOfPage(ctx, x, y, r, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.stroke();
  ctx.beginPath(); ctx.arc(x, y, Math.max(2.5, r * 0.28), 0, TAU); ctx.fill(); ctx.restore();
}
/* a field into the page: a ring with a cross in it */
function intoPage(ctx, x, y, r, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.stroke();
  const k = r * 0.7;
  ctx.beginPath(); ctx.moveTo(x - k, y - k); ctx.lineTo(x + k, y + k); ctx.moveTo(x - k, y + k); ctx.lineTo(x + k, y - k); ctx.stroke(); ctx.restore();
}
/* an arc from a0 to a1 about (cx, cy), with an arrowhead at the end it runs towards */
function arcArrow(ctx, cx, cy, R, a0, a1, color, w) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath();
  ctx.arc(cx, cy, R, a0, a1, a1 < a0); ctx.stroke(); ctx.restore();
  const t = a1 + (a1 > a0 ? Math.PI / 2 : -Math.PI / 2);
  const hx = cx + R * Math.cos(a1), hy = cy + R * Math.sin(a1);
  arrow(ctx, hx - 26 * Math.cos(t), hy - 26 * Math.sin(t), hx, hy, color, w);
}
/* a charge drawn as a ring with its sign inside; the sign is told by the label, never by a hue */
function charge(ctx, x, y, positive, r) {
  dot(ctx, x, y, PAL.ink, false, r);
  text(ctx, positive ? '+' : '−', x, y - 1, PAL.ink, { size: r * 1.6, weight: 600, align: 'center' });
}
/* a spark across a gap: a jagged thread from one end to the other, with a few short flashes about it */
function spark(ctx, x1, y1, x2, y2, color) {
  const n = 5, dx = (x2 - x1) / n, dy = (y2 - y1) / n, px = -(y2 - y1), py = x2 - x1;
  const L = Math.hypot(px, py) || 1, ux = px / L, uy = py / L;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(x1, y1);
  for (let i = 1; i <= n; i++) { const s = i < n ? (i % 2 ? 9 : -9) : 0; ctx.lineTo(x1 + dx * i + ux * s, y1 + dy * i + uy * s); }
  ctx.stroke();
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2; ctx.lineWidth = 2;
  for (let k = 0; k < 6; k++) { const a = (k / 6) * TAU + 0.3; ctx.beginPath(); ctx.moveTo(mx + 13 * Math.cos(a), my + 13 * Math.sin(a)); ctx.lineTo(mx + 21 * Math.cos(a), my + 21 * Math.sin(a)); ctx.stroke(); }
  ctx.restore();
}

/* =====================================================================
   SIM: the four equations, one picture apiece. The section's one learning
   objective is to restate Maxwell's equations, and the book paraphrases
   them in four paragraphs and draws nothing at all, so the reader has no
   picture to restate them from. Here each statement is the field it
   describes, and the source of that field can be reversed or taken away.
   Still: none of the four is a thing that happens over time. The third and
   the fourth speak of a field that is changing, but what the reader is
   asked to see is which way the induced field then points, which is a
   state of the picture and not a stage of a motion.
===================================================================== */
(function () {
  const d = sim('sim-maxwell-four', 640);
  const which = select(d.controls, {
    label: '\\text{the equation}',
    options: [
      { value: 'e', label: '1. Gauss’s law for electricity' },
      { value: 'b', label: '2. Gauss’s law for magnetism' },
      { value: 'f', label: '3. Faraday’s law of induction' },
      { value: 'a', label: '4. Ampere’s law, with Maxwell’s addition' },
    ],
    value: 'e', aria: 'which of Maxwell’s four equations the figure draws',
  });
  const src = ctl(d.controls, { label: '\\text{the source}', cls: '', min: -4, max: 4, step: 1, value: 3, unit: '', dec: 0, aria: 'the strength and the sign of whatever makes the field in this picture' });

  /* the field of a positive charge at a and an equal negative charge at b */
  function eField(p, a, b) {
    const ax = p.x - a.x, ay = p.y - a.y, ra = Math.max(12, Math.hypot(ax, ay));
    const bx = p.x - b.x, by = p.y - b.y, rb = Math.max(12, Math.hypot(bx, by));
    return { x: ax / (ra * ra * ra) - bx / (rb * rb * rb), y: ay / (ra * ra * ra) - by / (rb * rb * rb) };
  }
  /* One field line, traced out of the positive charge until it lands on the negative one.
     The step is short near a charge, where the line turns quickly, and long far from both,
     so that a line which swings well out still comes back within the steps it is given. */
  function fieldLine(ctx, a, b, th, color) {
    let p = { x: a.x + 26 * Math.cos(th), y: a.y + 26 * Math.sin(th) };
    const pts = [p];
    for (let i = 0; i < 3000; i++) {
      const e = eField(p, a, b), m = Math.hypot(e.x, e.y);
      if (!(m > 0)) break;
      const near = Math.min(Math.hypot(p.x - a.x, p.y - a.y), Math.hypot(p.x - b.x, p.y - b.y));
      const h = 4 * Math.max(1, Math.min(7, near / 70));
      p = { x: p.x + (h * e.x) / m, y: p.y + (h * e.y) / m };
      pts.push(p);
      if (Math.hypot(p.x - b.x, p.y - b.y) < 26) break;
      if (Math.abs(p.x - 700) > 2200 || Math.abs(p.y - 356) > 2200) break;
    }
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(pts[0].x, pts[0].y);
    for (const q of pts) ctx.lineTo(q.x, q.y);
    ctx.stroke(); ctx.restore();
    const i = Math.max(3, Math.round(pts.length * 0.5));
    if (pts[i]) arrow(ctx, pts[i - 3].x, pts[i - 3].y, pts[i].x, pts[i].y, color, 3);
    return pts.reduce((q, r) => (r.y < q.y ? r : q), pts[0]);
  }

  /* The first equation: the lines of the electric field, every one of them running out of the
     positive charge and into the negative one. The seeds are taken within 72 degrees of the
     line joining the two, which is as far round as a line can be started and still be drawn
     whole inside the canvas. */
  function drawGaussE(ctx, s) {
    const ec = C('electric-field'), n = 2 * Math.abs(s), half = n / 2;
    const left = { x: 540, y: 356 }, right = { x: 860, y: 356 };
    const a = s > 0 ? left : right, b = s > 0 ? right : left;
    const toB = Math.atan2(b.y - a.y, b.x - a.x);
    let top = null;
    for (let k = 0; k < half; k++) {
      const off = (((k + 0.5) / half) * 72 * Math.PI) / 180;
      for (const sgn of [-1, 1]) {
        const q = fieldLine(ctx, a, b, toB + sgn * off, ec);
        if (!top || q.y < top.y) top = q;
      }
    }
    charge(ctx, a.x, a.y, true, 22);
    charge(ctx, b.x, b.y, false, 22);
    const outA = a.x < b.x ? 'left' : 'right', outB = a.x < b.x ? 'right' : 'left';
    label(ctx, 'the positive charge', a.x + (outA === 'left' ? -22 : 22), a.y, { side: outA, gap: 26, size: 20 });
    label(ctx, 'the negative charge', b.x + (outB === 'left' ? -22 : 22), b.y, { side: outB, gap: 26, size: 20 });
    if (top) label(ctx, 'the electric field lines', top.x, top.y, { side: 'above', gap: 30, color: ec, size: 20 });
  }

  /* The second equation: every line of the magnetic field is a closed loop. Each one leaves a
     pole face, runs round the outside to the other face, and comes straight back through the
     magnet to where it started, so that nowhere on it is there a beginning or an end. */
  function drawGaussB(ctx, s) {
    const bc = C('magnetic-field'), levels = Math.abs(s), CX = 700, CY = 360, HW = 132, HH = 38;
    const northRight = s > 0, dir = northRight ? -1 : 1;
    /* the magnet, drawn first so that the lines can be seen running through it */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.rect(CX - HW, CY - HH, 2 * HW, 2 * HH); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(CX, CY - HH); ctx.lineTo(CX, CY + HH); ctx.stroke(); ctx.restore();
    for (let k = 0; k < levels; k++) {
      const ext = 44 + k * 46, bh = 60 + k * 42, yin = ((k + 0.5) / levels) * (HH - 10);
      for (const sgn of [-1, 1]) {
        const y0 = CY + sgn * yin, yb = y0 + sgn * bh;
        ctx.save(); ctx.strokeStyle = bc; ctx.lineWidth = 3; ctx.beginPath();
        ctx.moveTo(CX + HW, y0);
        ctx.bezierCurveTo(CX + HW + ext, y0, CX + HW + ext, yb, CX, yb);
        ctx.bezierCurveTo(CX - HW - ext, yb, CX - HW - ext, y0, CX - HW, y0);
        ctx.lineTo(CX + HW, y0);
        ctx.stroke(); ctx.restore();
        arrow(ctx, CX - dir * 20, yb, CX + dir * 20, yb, bc, 3);      /* outside, away from the north pole */
        /* one arrowhead inside the magnet, on the outermost loop and clear of the pole letters,
           so that the heads of the inner loops do not pile into one smudge at the middle */
        if (k === levels - 1) arrow(ctx, CX - dir * 88, y0, CX - dir * 124, y0, bc, 3);
      }
    }
    text(ctx, northRight ? 'S' : 'N', CX - HW / 2, CY, PAL.ink, { size: 30, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, northRight ? 'N' : 'S', CX + HW / 2, CY, PAL.ink, { size: 30, weight: 600, align: 'center', bg: PAL.panel });
    label(ctx, 'the magnet', CX - HW, CY + HH, { side: 'left', gap: 34, size: 20 });
    const extMax = 44 + (levels - 1) * 46, bhMax = 60 + (levels - 1) * 42;
    label(ctx, 'the magnetic field lines', CX - HW - extMax + 26, CY - bhMax * 0.55, { side: 'left', gap: 24, color: bc, size: 20 });
  }

  function drawFaraday(ctx, s) {
    const bc = C('magnetic-field'), ec = C('electric-field'), CX = 700, CY = 372, R = 176;
    /* the magnetic field through the loop, into the page and drawn at one fixed strength */
    for (let i = -2; i <= 2; i++) for (let j = -2; j <= 2; j++) {
      const x = CX + i * 74, y = CY + j * 74;
      if (Math.hypot(x - CX, y - CY) > R - 34) continue;
      intoPage(ctx, x, y, 13, bc);
    }
    /* the loop of wire */
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 8; ctx.beginPath(); ctx.arc(CX, CY, R, 0, TAU); ctx.stroke(); ctx.restore();
    /* the induced electric field round it. A field into the page that is growing induces a field
       that drives charge counterclockwise as the reader sees it, which on a canvas whose y runs
       downward is a sweep of decreasing angle. */
    if (s !== 0) {
      const span = (0.30 + 0.13 * Math.abs(s)) * Math.PI / 2, dir = s > 0 ? -1 : 1;
      for (let k = 0; k < 4; k++) { const a0 = (k * TAU) / 4 + 0.2; arcArrow(ctx, CX, CY, R - 30, a0, a0 + dir * span, ec, 5); }
      label(ctx, 'the induced electric field', CX + R, CY, { side: 'right', gap: 36, color: ec, size: 20 });
    }
    label(ctx, 'the loop of wire', CX, CY - R, { side: 'above', gap: 26, size: 20 });
    label(ctx, 'the magnetic field, into the page', CX, CY + R, { side: 'below', gap: 30, color: bc, size: 20 });
  }

  function drawAmpere(ctx, s) {
    const bc = C('magnetic-field'), ec = C('electric-field'), vc = C('velocity');
    const n = Math.abs(s), r = 9 + 3 * n, out = s > 0;                 /* out of the page above, when the source runs to the right */
    line(ctx, 700, 150, 700, 600, PAL.rule, 2, [10, 10]);
    /* a charge in motion */
    const AX = 380, AY = 372, len = 40 + 26 * n;
    if (s !== 0) {
      arrow(ctx, AX - (s > 0 ? len / 2 : -len / 2), AY, AX + (s > 0 ? len / 2 : -len / 2), AY, vc, 5);
      label(ctx, 'v', AX + (s > 0 ? len / 2 : -len / 2), AY, { side: s > 0 ? 'right' : 'left', gap: 22, color: vc, size: 24 });
      for (const dy of [-116, 116]) {
        const above = dy < 0;
        if (above === out) outOfPage(ctx, AX, AY + dy, r, bc); else intoPage(ctx, AX, AY + dy, r, bc);
      }
      label(ctx, out ? 'the magnetic field, out of the page' : 'the magnetic field, into the page', AX, AY - 116, { side: 'above', gap: 30, color: bc, size: 20 });
    }
    charge(ctx, AX, AY, true, 20);
    label(ctx, 'a charge in motion', AX, AY + 150, { side: 'below', gap: 26, size: 20 });
    /* a changing electric field between two plates */
    const BX = 1020, BY = 372;
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 8;
    ctx.beginPath(); ctx.moveTo(BX - 82, BY - 64); ctx.lineTo(BX - 82, BY + 64); ctx.moveTo(BX + 82, BY - 64); ctx.lineTo(BX + 82, BY + 64); ctx.stroke(); ctx.restore();
    if (s !== 0) {
      const eLen = 30 + 8 * n;
      for (const dy of [-38, 0, 38]) arrow(ctx, BX - eLen / 2, BY + dy, BX + eLen / 2, BY + dy, ec, 4);
      label(ctx, 'E', BX, BY - 38, { side: 'above', gap: 26, color: ec, size: 24 });
      for (const dy of [-116, 116]) {
        const above = dy < 0;
        if (above === out) outOfPage(ctx, BX, BY + dy, r, bc); else intoPage(ctx, BX, BY + dy, r, bc);
      }
    }
    label(ctx, s > 0 ? 'an electric field that is growing' : s < 0 ? 'an electric field that is dying away' : 'a steady electric field', BX, BY + 150, { side: 'below', gap: 26, size: 20 });
  }

  function draw() {
    const { ctx } = begin(d.c);
    const s = src.v, k = which.value, n = Math.abs(s);
    let head = '', main = '', small = '';
    if (k === 'e') {
      if (s !== 0) drawGaussE(ctx, s);
      head = s === 0 ? 'With no charge anywhere there is no electric field to draw.'
        : 'Every one of the ' + 2 * n + ' lines begins on the positive charge and ends on the negative one.';
      main = `\\text{lines of }\\kEf\\text{ out of }+q\\ \\rightarrow\\ \\text{into }-q\\qquad ${s === 0 ? 0 : 2 * n}\\ \\text{drawn}`;
      small = s === 0
        ? 'The electric field is defined as the force per unit charge on a test charge, so where there is no charge to be the source there is no field. The strength of the force is related to the permittivity of free space ε₀, and the first of Maxwell’s equations is the one from which Gauss’s law for electricity follows.'
        : 'Follow any line and it begins on the positive charge and ends on the negative one; none of them stops in the middle of the picture and none of them closes on itself. Reverse the source and the two charges change places, so the lines run the other way; add to it and there are more of them, because the number of lines standing for a charge is what says how strong its field is.';
    } else if (k === 'b') {
      if (s !== 0) drawGaussB(ctx, s);
      head = s === 0 ? 'With no magnet there is no magnetic field to draw.'
        : 'Each of the ' + 2 * n + ' lines leaves the north pole, arcs round to the south pole and returns through the magnet to where it started.';
      main = `\\text{lines of }\\kBmag\\text{ close on themselves}\\qquad ${s === 0 ? 0 : 2 * n}\\ \\text{drawn, no beginning and no end}`;
      small = s === 0
        ? 'The strength of the magnetic force is related to the permeability of free space μ₀, and the second of Maxwell’s equations is Gauss’s law for magnetism.'
        : 'This is what marks the magnetic field off from the electric one. No line begins anywhere and no line ends anywhere, because no magnetic monopoles are known to exist: there is no magnetic charge for a line to start on. Turn the magnet end for end with the source slider and every line runs the other way round, but each is still a closed loop.';
    } else if (k === 'f') {
      drawFaraday(ctx, s);
      head = s === 0 ? 'The magnetic field through the loop is steady, so no electric field is induced round it.'
        : s > 0 ? 'The magnetic field into the page is growing, so the induced electric field drives charge counterclockwise, which opposes the growth.'
          : 'The magnetic field into the page is dying away, so the induced electric field drives charge clockwise, which opposes the loss.';
      main = `\\text{a changing }\\kBmag\\ \\rightarrow\\ \\kEf\\text{ round the loop, opposing the change}`;
      small = s === 0
        ? 'A magnetic field that does not change induces nothing, however strong it is. It is the changing of the field, and not the field itself, that is the source here.'
        : 'The induced electric field drives a current round the loop, and that current makes a magnetic field of its own that points ' + (s > 0 ? 'out of the page, against the growth of the field through the loop' : 'into the page, keeping up the field that is dying away') + '. That is what it means to say that the direction of the emf opposes the change, which is Lenz’s law. Drag the source the other way and the whole arrangement reverses.';
    } else {
      drawAmpere(ctx, s);
      head = s === 0 ? 'A charge at rest and a steady electric field make no magnetic field at all.'
        : 'A charge moving to the ' + (s > 0 ? 'right' : 'left') + ' and an electric field that is ' + (s > 0 ? 'growing' : 'dying away') + ' both make a magnetic field that is ' + (s > 0 ? 'out of the page above them and into it below' : 'into the page above them and out of it below') + '.';
      main = `\\text{a moving charge, or a changing }\\kEf\\ \\rightarrow\\ \\kBmag`;
      small = s === 0
        ? 'Neither a charge that stays where it is nor an electric field that holds steady is a source of magnetism. It is motion on the one hand and change on the other that make the field.'
        : 'That a moving charge makes a magnetic field was Ampere’s law, and it is the half of this equation that was already known. The other half is Maxwell’s: a changing electric field is a source of magnetism in its own right, with no charge moving anywhere at all. It is this addition, symmetric with Faraday’s law, that lets each field make the other and so lets a wave travel.';
    }
    headline(ctx, head);
    readout(d.readout, main, small);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 24.4: the apparatus Hertz used in 1887. The book prints one fixed
   drawing, but the whole of Hertz's argument is that the frequency his
   circuit resonated at and the wavelength he measured multiply to the speed
   of light, so here the inductance and the capacitance of the driving
   circuit are the reader's, the resonant frequency and the length of the
   wave move together, and the far loop sparks only while it is tuned to
   the near one. Still: a wavelength read off an interference pattern and a
   frequency read off a circuit are two numbers to be multiplied, not a
   motion to be watched; 24.2 sets the wave running.
===================================================================== */
(function () {
  const d = sim('sim-hertz', 560);
  const Ls = ctl(d.controls, { label: 'L', cls: '', min: 100, max: 300, step: 10, value: 200, unit: 'nH', dec: 0, aria: 'the inductance of the transmitting circuit' });
  const Cs = ctl(d.controls, { label: 'C', cls: '', min: 10, max: 60, step: 2, value: 50, unit: 'pF', dec: 0, aria: 'the capacitance of the transmitting circuit' });
  const tune = select(d.controls, { label: '\\text{the far loop}', options: [{ value: 'on', label: 'tuned to Loop 1' }, { value: 'off', label: 'tuned elsewhere' }], value: 'on', aria: 'whether the receiving circuit is tuned to the transmitter' });
  /* The laboratory is 12.0 m across, which fixes the scale of the drawing once and for all.
     The sliders reach 8.00 m of wavelength at most, which is 487 units, and the wave is drawn
     over 550 of them, so a whole wavelength is always inside the picture. */
  const X1 = 380, X2 = 1110, LAB = 12.0, M = (X2 - X1) / LAB, Y0 = 270, R = 78, AMP = 78;
  const XA = 478, XB = 1024, CLIGHT = 3.00e8;

  /* The driving circuit, drawn as the book draws it: an alternating source, a resistor, a
     coil and a capacitor round one rectangle, with the transmitting loop wired across it. */
  function circuit(ctx) {
    const L = 60, Rt = 212, T = 180, B = 360;
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(L, 232); ctx.lineTo(L, T); ctx.lineTo(112, T);          /* up the left side and along the top to the resistor */
    ctx.moveTo(182, T); ctx.lineTo(Rt, T); ctx.lineTo(Rt, 224);        /* on to the corner and down to the coil */
    ctx.moveTo(Rt, 317); ctx.lineTo(Rt, B); ctx.lineTo(166, B);        /* down to the bottom and along to the capacitor */
    ctx.moveTo(126, B); ctx.lineTo(L, B); ctx.lineTo(L, 288);          /* on to the corner and up to the source */
    ctx.stroke();
    /* the resistor, as a zigzag along the top */
    ctx.beginPath(); ctx.moveTo(112, T);
    for (let i = 0; i < 7; i++) ctx.lineTo(115 + i * 10, T + (i % 2 ? 11 : -11));
    ctx.lineTo(182, T); ctx.stroke();
    /* the coil, as four humps down the right side */
    ctx.beginPath();
    for (let i = 0; i < 4; i++) ctx.arc(Rt, 236 + i * 23, 12, -Math.PI / 2, Math.PI / 2);
    ctx.stroke();
    /* the capacitor, as two plates across the bottom wire */
    ctx.beginPath(); ctx.moveTo(166, B - 20); ctx.lineTo(166, B + 20); ctx.moveTo(126, B - 20); ctx.lineTo(126, B + 20); ctx.stroke();
    /* the alternating source, as a ring with a wave in it */
    ctx.beginPath(); ctx.arc(L, 260, 28, 0, TAU); ctx.stroke();
    ctx.lineWidth = 3; ctx.beginPath();
    for (let i = 0; i <= 24; i++) { const x = L - 15 + (30 * i) / 24, y = 260 - 9 * Math.sin((i / 24) * TAU); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
    ctx.stroke(); ctx.restore();
    text(ctx, 'R', 147, T - 32, PAL.ink, { size: 24, weight: 600, align: 'center' });
    text(ctx, 'L', 198, 270, PAL.ink, { size: 24, weight: 600, align: 'right' });
    text(ctx, 'C', 146, B + 40, PAL.ink, { size: 24, weight: 600, align: 'center' });
    text(ctx, 'AC', 98, 260, PAL.ink, { size: 20, align: 'left' });
  }
  /* the two leads that carry the transmitting loop across the circuit, taken round the
     coil to the corners so that no lead crosses a component */
  function leads(ctx, lower, upper) {
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.beginPath();
    ctx.moveTo(upper.x, upper.y); ctx.lineTo(254, upper.y); ctx.lineTo(254, 180); ctx.lineTo(212, 180);
    ctx.moveTo(lower.x, lower.y); ctx.lineTo(254, lower.y); ctx.lineTo(254, 360); ctx.lineTo(212, 360);
    ctx.stroke(); ctx.restore();
  }
  /* a loop of wire with a gap in it, the gap centred on the canvas angle `gap` */
  function wireLoop(ctx, cx, half) {
    const a = half === 'left' ? Math.PI : 0, w = 0.21;
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 8;
    ctx.beginPath(); ctx.arc(cx, Y0, R, a + w, a - w + TAU); ctx.stroke(); ctx.restore();
    const e1 = { x: cx + R * Math.cos(a - w), y: Y0 + R * Math.sin(a - w) };
    const e2 = { x: cx + R * Math.cos(a + w), y: Y0 + R * Math.sin(a + w) };
    return [e1, e2];
  }

  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('electric-field'), bc = C('magnetic-field'), pc = C('position'), vc = C('velocity'), fc = C('frequency');
    const Lh = Ls.v * 1e-9, Cf = Cs.v * 1e-12;
    const f0 = 1 / (TAU * Math.sqrt(Lh * Cf)), fMHz = f0 / 1e6, lam = CLIGHT / f0, lpx = lam * M;
    const tuned = tune.value === 'on';
    /* the transmitter: the circuit, its leads, the loop and the spark across its gap */
    circuit(ctx);
    const t = wireLoop(ctx, X1, 'left');
    leads(ctx, t[0], t[1]);
    spark(ctx, t[1].x, t[1].y, t[0].x, t[0].y, PAL.ink);
    /* the receiver: the loop, its leads and the tuner */
    const q = wireLoop(ctx, X2, 'right');
    line(ctx, q[0].x, q[0].y, 1230, q[0].y, PAL.ink, 4);
    line(ctx, q[1].x, q[1].y, 1230, q[1].y, PAL.ink, 4);
    if (tuned) spark(ctx, q[1].x, q[1].y, q[0].x, q[0].y, PAL.ink);
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.rect(1230, 222, 140, 96); ctx.fill(); ctx.stroke();
    ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(1300, 270, 28, 0, TAU); ctx.stroke(); ctx.restore();
    const dial = tuned ? -Math.PI / 2 : -Math.PI / 2 + 1.1;
    line(ctx, 1300, 270, 1300 + 24 * Math.cos(dial), 270 + 24 * Math.sin(dial), PAL.ink, 4);
    /* the wave crossing the laboratory: the electric field drawn across the page, and the
       magnetic field at right angles to it and to the page, out of it at every crest and
       into it at every trough */
    ctx.save(); ctx.strokeStyle = ec; ctx.lineWidth = 5; ctx.beginPath();
    for (let x = XA; x <= XB; x += 3) { const y = Y0 - AMP * Math.sin((TAU * (x - XA)) / lpx); if (x === XA) ctx.moveTo(x, y); else ctx.lineTo(x, y); }
    ctx.stroke(); ctx.restore();
    line(ctx, XA, Y0, XB, Y0, alpha(PAL.ink, 0.35), 2, [10, 10]);
    for (let k = 0; ; k++) {
      const x = XA + lpx * (0.25 + 0.5 * k); if (x > XB - 8) break;
      if (k % 2 === 0) outOfPage(ctx, x, Y0, 11, bc); else intoPage(ctx, x, Y0, 11, bc);
    }
    /* one whole wavelength, measured from one upward crossing of the axis to the next */
    line(ctx, XA, Y0, XA, 416, alpha(pc, 0.5), 2, [6, 8]);
    line(ctx, XA + lpx, Y0, XA + lpx, 416, alpha(pc, 0.5), 2, [6, 8]);
    hbracket(ctx, XA, XA + lpx, 424, pc, 'λ = ' + fmt(lam, 2) + ' m');
    /* the way the wave travels, and how fast */
    arrow(ctx, 540, 152, 760, 152, vc, 5);
    text(ctx, 'c = 3.00 × 10⁸ m/s', 772, 152, vc, { size: 21, weight: 600 });
    /* the names of the things on the bench */
    text(ctx, 'an RLC circuit', 136, 424, PAL.ink, { size: 20, align: 'center' });
    text(ctx, 'Loop 1, the transmitter', X1, Y0 - R - 26, PAL.ink, { size: 20, align: 'center' });
    text(ctx, 'Loop 2, the receiver', X2, Y0 - R - 26, PAL.ink, { size: 20, align: 'center' });
    text(ctx, 'the tuner', 1300, 340, PAL.ink, { size: 20, align: 'center' });
    text(ctx, 'the electric field of the wave', (XA + XB) / 2, 466, ec, { size: 20, align: 'center' });
    text(ctx, 'the magnetic field is out of the page at each crest and into it at each trough', (XA + XB) / 2, 496, bc, { size: 19, align: 'center' });
    text(ctx, 'the two loops stand ' + fmt(LAB, 1) + ' m apart, and the drawing is on that scale', 700, 526, PAL.muted, { size: 18, align: 'center' });
    headline(ctx, 'The circuit resonates at ' + fmt(fMHz, 1) + ' MHz, so the wave that leaves the first loop is ' + fmt(lam, 2) + ' m long, and the second loop, tuned '
      + (tuned ? 'to the same frequency, sparks in step with it.' : 'elsewhere, stays silent.'));
    readout(d.readout,
      `\\kc = \\kfo\\klam = (${fmt(fMHz, 1)}\\times 10^{6}\\;\\text{Hz})(${fmt(lam, 2)}\\;\\text{m}) = 3.00\\times 10^{8}\\;\\text{m/s}`,
      'With L = ' + fmt(Ls.v, 0) + ' nH and C = ' + fmt(Cs.v, 0) + ' pF the circuit resonates at f₀ = 1/(2π√(LC)) = ' + fmt(fMHz, 1) + ' MHz. Hertz knew that frequency from the circuit and measured the wavelength from the interference patterns his waves made, and the product of the two came out at the speed of light, which is how he showed that the waves Maxwell had predicted were real and were of the same kind as light. '
      + (tuned ? 'The second circuit is tuned to the same frequency as the first, so the wave drives it and sparks jump its gap as well.' : 'The second circuit is tuned to some other frequency, so the wave passes it by and its gap stays dark, exactly as the dial on a radio picks out one station and leaves the rest.'));
  }
  register(d.fig, { update: () => {}, draw });
})();
};
