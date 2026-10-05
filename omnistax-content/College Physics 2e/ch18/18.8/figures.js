/* Figures for section 18.8 Applications of Electrostatics. Boots against the section's text article.
   The figures colour charge, electric field, force, acceleration, mass and
   the distances (position). Each machine part the text names (the sphere,
   belt and battery, the drum, corotron and paper, the nozzle, plates and
   droplets, the grids and particles, the drop) is a referent and wears its
   referent colour on outline and name, with the book's + and − marks in ink;
   the charge a body holds is stated beside it in the charge hue, the field
   arrows wear the field hue, and the two forces on the drop wear the force
   hue. Counts and fractions stay in ink.
   Four of the five figures are machines whose parts carry charge from one place
   to another, which is the kinematic arrow of rule 24.1, so they register a
   cycle and carry a transport; the copier drum tells its four stations as a
   story on a slider, and the charged drop answers its controls alone. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['18.8'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, cycle, line, arrow, dot, text, topline, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const TAU = 2 * Math.PI;
const K = 8.99e9;                       /* Coulomb's constant, N·m²/C² */
const G = 9.80;                         /* the average acceleration due to gravity, m/s² */
const EAIR = 3.00e6;                    /* the field at which air ionizes, N/C, the number 18.8's own problems use */
const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
/* a number in scientific notation for the canvas, and the same for the readout */
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
/* a number with the typographic minus, and one that always carries its sign */
const num = (v, d) => (v < 0 ? '−' : '') + fmt(Math.abs(v), d);
const plus = (v, d) => (v === 0 ? '' : v < 0 ? '−' : '+') + fmt(Math.abs(v), d);
/* a rounded rectangle, filled, outlined in ink unless a stroke is given */
function panel(ctx, x, y, w, h, r, fill, stroke = PAL.ink) {
  ctx.save(); ctx.fillStyle = fill === undefined ? PAL.panel : fill; ctx.strokeStyle = stroke; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
}
/* a circle, outlined in ink unless a stroke is given */
function circle(ctx, x, y, r, fill, w, stroke = PAL.ink) {
  ctx.save(); ctx.fillStyle = fill === undefined ? PAL.panel : fill; ctx.strokeStyle = stroke; ctx.lineWidth = w || 3;
  ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
}
/* the book's + and − marks, drawn in ink so that a sign is never a hue */
const mark = (ctx, s, x, y, size) => text(ctx, s, x, y + 1, PAL.ink, { size: size || 22, weight: 700, align: 'center' });
/* a comb of points, the pointed conductor the book draws, its teeth facing the direction given */
function comb(ctx, x, y, n, dx, dy, len, col = PAL.ink) {
  for (let i = 0; i < n; i++) {
    const o = (i - (n - 1) / 2) * 16;
    const px = x + (dy ? o : 0), py = y + (dx ? o : 0);
    line(ctx, px, py, px + dx * len, py + dy * len, col, 3);
  }
}
/* the ground symbol the book draws under a grounded conductor */
function ground(ctx, x, y) {
  line(ctx, x, y, x, y + 22, PAL.ink, 3);
  for (let i = 0; i < 3; i++) line(ctx, x - 22 + i * 7, y + 22 + i * 8, x + 22 - i * 7, y + 22 + i * 8, PAL.ink, 3);
}

/* =====================================================================
   FIGURE 18.34: the Van de Graaff generator. Moving, because the machine
   moves: the belt carries charge from the spraying points at the bottom to
   the picking-off points inside the sphere, and the charge on the sphere
   climbs with it until the field at the surface reaches the strength at
   which the air around it gives way. ch18/config.md allows the machines of
   this section to move because the machine moves.
===================================================================== */
(function () {
  const d = sim('sim-van-de-graaff', 820);
  const T = 6;
  const cy = cycle(() => T, 1.4);
  const rate = ctl(d.controls, { label: '\\text{the belt}', cls: 'charge', min: 4, max: 50, step: 1, value: 20, unit: 'µC/s', dec: 0, aria: 'the charge the belt delivers to the sphere each second', onInput: () => cy.reset() });
  const rad = ctl(d.controls, { label: '\\text{the sphere}', cls: 'position', min: 0.3, max: 1.2, step: 0.05, value: 0.5, unit: 'm', dec: 2, aria: 'the radius of the sphere', onInput: () => cy.reset() });
  const CX = 560, SY = 400, BX1 = 522, BX2 = 598, BBOT = 730;
  const Rof = (R) => 100 + R * 120;                     /* the sphere on the canvas, 272 to 488 units across */
  function draw() {
    const { ctx } = begin(d.c);
    const qc = C('charge'), ec = C('electric-field');
    const sc = F.ref('sphere'), bc = F.ref('belt'), btc = F.ref('battery'), spc = F.ref('sprayer'), coc = F.ref('collector');
    const t = cy.now(), R = rad.v;
    const qMax = (EAIR * R * R) / K;                    /* the charge whose surface field just ionizes the air, in C */
    const qDel = rate.v * 1e-6 * t;                     /* what the belt has delivered by now, in C */
    const q = Math.min(qDel, qMax), over = qDel >= qMax - 1e-12;
    const E = (K * q) / (R * R);
    const Rpx = Rof(R), BTOP = SY;
    /* the base and the insulating column the sphere stands on */
    panel(ctx, CX - 160, 740, 320, 30, 8, PAL.soft);
    panel(ctx, CX - 50, SY, 100, 740 - SY, 10, PAL.soft);
    text(ctx, 'insulating column', CX + 64, 660, PAL.muted, { size: 19 });
    /* the sphere, drawn as the book draws it, cut away so the belt inside can be seen */
    circle(ctx, CX, SY, Rpx, PAL.panel, 4, sc);
    /* the belt, a loop between two pulleys, with the charge it carries drawn on it */
    circle(ctx, CX, BBOT, 28, PAL.panel, 3, bc); circle(ctx, CX, BTOP, 24, PAL.panel, 3, bc);
    line(ctx, BX1, BTOP, BX1, BBOT, bc, 3); line(ctx, BX2, BTOP, BX2, BBOT, bc, 3);
    const nb = 6, span = BBOT - BTOP;
    for (let i = 0; i < nb; i++) {
      const f = ((i / nb) + (t / 1.6)) % 1;             /* the belt runs up the left side and down the right */
      mark(ctx, '+', BX1 - 1, BBOT - f * span, 21);
      if (t > 0.3) mark(ctx, '+', BX2 + 1, BTOP + f * span, 13);
    }
    arrow(ctx, BX1 - 36, BBOT - 30, BX1 - 36, BTOP + 80, PAL.ink, 4);
    text(ctx, 'the belt carries the charge up', BX1 - 52, 690, bc, { size: 19, align: 'right' });   /* below the largest sphere */
    /* the ring of the sphere, stroked over the belt, so the drawing reads as a cutaway */
    ctx.save(); ctx.strokeStyle = sc; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.arc(CX, SY, Rpx, 0, TAU); ctx.stroke(); ctx.restore();
    /* the excess charge, every coulomb of it on the outside surface */
    const nm = Math.max(0, Math.round((q / Math.max(qMax, 1e-12)) * 16));
    for (let i = 0; i < nm; i++) {
      const a = (-165 + (i / Math.max(1, nm - 1)) * 330) * (Math.PI / 180);
      mark(ctx, '+', CX + (Rpx - 17) * Math.cos(a), SY + (Rpx - 17) * Math.sin(a), 20);
    }
    /* the pointed conductor B inside the sphere, and the ion source the caption names */
    comb(ctx, CX, BTOP - 30, 3, 0, 1, 24, coc);
    text(ctx, 'B', CX + 42, BTOP - 18, coc, { size: 22, weight: 700 });
    line(ctx, CX, BTOP - 30, CX, SY - Rpx + 6, coc, 3);
    circle(ctx, CX - 66, SY + 52, 15, PAL.soft);
    line(ctx, CX - 80, SY + 58, CX - Rpx - 10, SY + 96, PAL.muted, 2);
    text(ctx, 'ion source', CX - Rpx - 16, SY + 100, PAL.muted, { size: 18, align: 'right' });
    /* the battery and the pointed conductor that sprays the belt */
    panel(ctx, CX + 170, BBOT - 60, 96, 76, 8, PAL.panel, btc);
    text(ctx, 'A', CX + 218, BBOT - 22, btc, { size: 24, weight: 700, align: 'center' });
    line(ctx, CX + 170, BBOT - 22, BX2 + 62, BBOT - 22, spc, 3);
    comb(ctx, BX2 + 56, BBOT - 22, 3, -1, 0, 30, spc);
    text(ctx, 'the points spray charge onto the belt', CX + 172, BBOT + 62, spc, { size: 19 });
    /* the field the charged sphere makes outside itself, drawn where the drawing has room */
    if (q > 0) {
      const L = 40 + 110 * (E / EAIR);
      /* kept to the upper left, clear of the ion source's and the belt's names and of the headline */
      for (let i = 0; i < 5; i++) {
        const a = (172 + i * 13.5) * (Math.PI / 180);
        const x0 = CX + (Rpx + 8) * Math.cos(a), y0 = SY + (Rpx + 8) * Math.sin(a);
        arrow(ctx, x0, y0, x0 + L * Math.cos(a), y0 + L * Math.sin(a), ec, 4);
      }
      if (over) text(ctx, 'the air is giving way', 90, SY - 190, PAL.muted, { size: 19 });
    }
    /* what the sphere holds, and the field at its surface */
    const RX = 1070;
    text(ctx, 'air gives way at ' + sci(EAIR, 2) + ' N/C', RX, 406, PAL.muted, { size: 18 });
    text(ctx, 'the most this sphere can hold', RX, 466, PAL.muted, { size: 19 });
    text(ctx, fmt(qMax * 1e6, 1) + ' µC', RX, 508, qc, { size: 24, weight: 600 });
    topline(ctx, over
      ? `The sphere is holding all it can: ${fmt(q * 1e6, 1)} µC on a sphere of radius ${fmt(R, 2)} m brings the field at the surface to ${sci(E, 2)} N/C, and the air around it ionizes and carries off whatever the belt brings up.`
      : `The belt has delivered ${fmt(q * 1e6, 1)} µC to the sphere, all of it on the outside surface, where it makes a field of ${sci(E, 2)} N/C.`);
    readout(d.readout, `\\kEf = k\\frac{|\\kq|}{\\krad^2} = (8.99 \\times 10^{9}\\ \\text{N}\\cdot\\text{m}^2\\text{/C}^2)\\frac{${sciTex(q, 2)}\\ \\text{C}}{(${fmt(R, 2)}\\ \\text{m})^2} = ${sciTex(E, 2)}\\ \\text{N/C}`,
      'Enlarge the sphere and the same charge makes a smaller field at its surface, so a larger sphere holds more before the air gives way.');
  }
  hover(d.stage, () => [
    { x: CX, y: SY, r: Rof(rad.v), name: 'the conducting sphere, whose excess charge lies on its outside surface' },
    { x: CX, y: SY - 30, r: 40, name: 'the pointed conductor B, which picks the charge off the belt' },
    { x: 562, y: 668, r: 50, name: 'the pointed conductor the battery sprays charge from' },
    { x: CX + 218, y: 668, r: 60, name: 'the battery A, the supply of excess positive charge' },
    { x: CX, y: 600, r: 60, name: 'the nonconducting belt' },
  ]);
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 18.35 + 18.36: the xerographic drum, at each of the four stations
   of the process, with the image written either by a copier's lamp and
   original or by the scanned beam of a laser printer. The book prints the
   process twice, four panels for the copier and one for the printer, and
   one drawing carries the same charge pattern through all of them, so the
   fold keeps every number (rule 14). A story: the four stations are the
   stops of one slider, and the charge the light takes away, the toner the
   charge holds and the toner the paper pulls off are functions of it, so
   every point between two stations is exact in either direction.
===================================================================== */
(function () {
  const d = sim('sim-xerography', 700);
  const writer = choice(d.controls, { label: '\\text{the image}', options: [
    { value: 'lamp', label: 'a copier’s lamp' }, { value: 'laser', label: 'a laser' }],
    value: 'lamp', aria: 'what writes the image on the drum' });
  const qs = ctl(d.controls, { label: '\\kq', cls: 'charge', min: 1, max: 10, step: 0.5, value: 6, unit: 'nC/cm²', dec: 1, aria: 'the charge the corotron sprays onto the selenium' });
  const ss = ctl(d.controls, { label: '\\text{the station}', cls: '', min: 0, max: 3, step: 0.01, value: 0, unit: '', dec: 2, aria: 'the station of the process the drum is at' });
  F.story(d, ss, { stops: [{ v: 0, label: 'charge' }, { v: 1, label: 'image' }, { v: 2, label: 'toner' }, { v: 3, label: 'paper' }] });
  const CX = 560, CY = 380, R = 190;
  const sm = F.ease.smooth, clamp = (x) => Math.min(1, Math.max(0, x));
  /* The image the drum is given: the dark sectors keep their charge and the
     light ones lose it. The angles are canvas angles, measured from the right. */
  const DARK = [[-150, -120], [-100, -70], [-40, 10], [40, 70]];
  const isDark = (deg) => DARK.some(([a, b]) => deg >= a && deg <= b);
  const NDARK = Array.from({ length: 48 }, (_, i) => -180 + i * 7.5).filter(isDark).length;
  function draw() {
    const { ctx } = begin(d.c);
    const qc = C('charge'), s = ss.v, st = ['charge', 'image', 'toner', 'paper'][Math.round(s)], q = qs.v;
    /* the light arrives over the first stretch and takes the charge off the lit selenium; the toner
       settles on what is left; the paper comes up and pulls the toner off, sector by sector */
    const light = sm(clamp((s - 0.25) / 0.75)), beam = sm(clamp(s / 0.5)) * (1 - sm(clamp((s - 1.2) / 0.5)));
    const toner = sm(clamp((s - 1.3) / 0.7)), paper = sm(clamp((s - 2) / 0.5)), pulled = sm(clamp(s - 2));
    /* the aluminum drum, its selenium coat, and the ground the book names */
    const drc = F.ref('drum');
    circle(ctx, CX, CY, R, PAL.panel, 4, drc);
    circle(ctx, CX, CY, R - 26, PAL.soft, 3, drc);
    text(ctx, 'aluminum drum', CX, CY, drc, { size: 20, align: 'center' });
    line(ctx, CX - R + 6, CY - 130, CX - R - 60, CY - 180, PAL.muted, 2);
    text(ctx, 'selenium, a photoconductor', CX - R - 66, CY - 184, PAL.muted, { size: 19, align: 'right' });
    line(ctx, CX, CY + R - 26, CX, CY + R + 40, PAL.ink, 3);
    ground(ctx, CX, CY + R + 40);
    text(ctx, 'grounded', CX + 34, CY + R + 56, PAL.muted, { size: 18 });
    /* the charge the drum holds: + on the selenium where it survives, and the
       negative charge induced under it on the grounded aluminum */
    for (let i = 0; i < 48; i++) {
      const deg = -180 + i * 7.5, a = deg * (Math.PI / 180);
      F.faded(ctx, isDark(deg) ? 1 : 1 - light, [0, 0], () => {
        mark(ctx, '+', CX + (R - 13) * Math.cos(a), CY + (R - 13) * Math.sin(a), 18);
        mark(ctx, '−', CX + (R - 38) * Math.cos(a), CY + (R - 38) * Math.sin(a), 16);
      });
    }
    /* the corotron, which sprays the selenium with positive charge */
    comb(ctx, CX - 150, CY - R - 62, 4, 0.55, 0.84, 26, F.ref('corotron'));
    text(ctx, 'corotron', CX - 200, CY - R - 78, F.ref('corotron'), { size: 19, align: 'right' });
    /* what writes the image, while the image is being written */
    F.faded(ctx, beam * writer.a('laser'), [0, 0], () => {
      panel(ctx, 1030, 150, 150, 64, 8, PAL.panel, F.ref('laser'));
      text(ctx, 'laser', 1105, 182, F.ref('laser'), { size: 20, weight: 600, align: 'center' });
      line(ctx, 1030, 182, 900, 182, PAL.ink, 3);
      for (let i = 0; i < 4; i++) {
        const deg = -150 + i * 46, a = deg * (Math.PI / 180);
        if (isDark(deg)) continue;
        line(ctx, 900, 182, CX + R * Math.cos(a), CY + R * Math.sin(a), PAL.muted, 2, [8, 8]);
      }
      dot(ctx, 900, 182, PAL.ink, false, 10);
      text(ctx, 'a turning mirror scans the beam', 880, 146, PAL.muted, { size: 18, align: 'right' });
    });
    F.faded(ctx, beam * writer.a('lamp'), [0, 0], () => {
      panel(ctx, 1000, 150, 190, 300, 8, PAL.soft, F.ref('original'));
      text(ctx, 'the original', 1095, 176, F.ref('original'), { size: 19, align: 'center' });
      for (let i = 0; i < 4; i++) panel(ctx, 1024, 210 + i * 56, 142, 26, 4, PAL.panel);
      for (let i = 0; i < 5; i++) {
        const deg = -160 + i * 42, a = deg * (Math.PI / 180);
        if (isDark(deg)) continue;
        line(ctx, 1000, 300, CX + R * Math.cos(a), CY + R * Math.sin(a), PAL.muted, 2, [8, 8]);
      }
      text(ctx, 'the lamp throws the image on the drum', 1095, 476, PAL.muted, { size: 18, align: 'center' });
    });
    /* the toner on the dark sectors, and what the paper has already taken */
    F.faded(ctx, toner, [0, 0], () => {
      for (let i = 0; i < 48; i++) {
        const deg = -180 + i * 7.5, a = deg * (Math.PI / 180);
        if (!isDark(deg) || deg > 180 - 160 * pulled) continue;
        dot(ctx, CX + (R + 13) * Math.cos(a), CY + (R + 13) * Math.sin(a), PAL.ink, true, 7);
      }
      text(ctx, 'toner, sprayed with negative charge', CX - R - 30, CY + R + 40, PAL.muted, { size: 19, align: 'right' });
    });
    F.faded(ctx, paper, [0, 0], () => {
      panel(ctx, 900, CY + 40, 330, 150, 6, PAL.panel, F.ref('paper'));
      for (let i = 0; i < 7; i++) mark(ctx, '+', 930 + i * 46, CY + 176, 20);
      for (let i = 0; i < Math.round(5 * pulled); i++) dot(ctx, 950 + i * 40, CY + 78, PAL.ink, true, 7);
      text(ctx, 'the paper, charged more strongly than the drum', 1065, CY + 214, F.ref('paper'), { size: 18, align: 'center' });
      arrow(ctx, CX + R + 30, CY + 60, 890, CY + 90, PAL.ink, 4);
    });
    const frac = (NDARK + (48 - NDARK) * (1 - light)) / 48, dens = q * frac;
    const lines = {
      charge: `The corotron sprays the selenium with ${fmt(q, 1)} nC/cm² of positive charge, and because the aluminum drum under it is grounded, an equal negative charge is induced beneath the coat.`,
      image: writer.value === 'laser'
        ? `A laser beam is scanned across the drum: wherever it falls the selenium conducts and loses its charge, and the ${fmt(frac * 100, 0)}% it leaves dark keeps ${fmt(q, 1)} nC/cm².`
        : `The image of the original is thrown on the drum: where it is light the selenium conducts and loses its charge, and where it is dark, ${fmt(frac * 100, 0)}% of the surface, the charge remains.`,
      toner: `Toner sprayed with negative charge is drawn to the positive parts of the drum and to no other part, so the pattern of charge has become a pattern of black powder.`,
      paper: `A blank sheet given a greater positive charge than the drum pulls the toner off it, and heated rollers then melt the powder permanently into the fibers of the paper.`,
    };
    topline(ctx, lines[st]);
    readout(d.readout, `\\kq_{\\text{drum}} = (${fmt(frac, 2)})\\,\\kq = (${fmt(frac, 2)})(${fmt(q, 1)}\\ \\text{nC/cm}^2) = ${fmt(dens, 1)}\\ \\text{nC/cm}^2`,
      'That is the drum’s charge on average: the dark regions hold the full ' + fmt(q, 1) + ' nC/cm² and the lit ones ' + (light > 0.99 ? 'none' : 'what the light has not yet taken') + '. '
      + (writer.value === 'laser' ? 'The beam is steered with great precision, which is why the printed characters are as sharp as the beam is narrow.' : ''));
  }
  hover(d.stage, () => [
    { x: CX, y: CY, r: 160, name: 'the aluminum drum, grounded under the selenium' },
    { x: CX - 150, y: CY - 190 - 62, r: 50, name: 'the corotron, the points that spray positive charge' },
  ]);
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 18.37: the ink jet printer. Moving, because the machine moves and
   because the path of a droplet between the plates is what the book's still
   drawing cannot show: the droplet takes its charge at the electrodes and
   is then steered by the force the field exerts on it all the way to the
   paper.
===================================================================== */
(function () {
  const d = sim('sim-ink-jet', 620);
  const T = 4;
  const cy = cycle(() => T, 1.0);
  const qs = ctl(d.controls, { label: '\\kq', cls: 'charge', min: -40, max: 40, step: 1, value: 20, unit: 'pC', dec: 0, aria: 'the charge given to each droplet at the electrodes' });
  const Es = ctl(d.controls, { label: '\\kEf', cls: 'electric-field', min: 0, max: 500, step: 10, value: 200, unit: 'kN/C', dec: 0, aria: 'the field between the deflection plates' });
  const M = 4.0e-9, V = 20, L = 0.020, D = 0.250;   /* the droplet: a 100 µm drop of ink at 20 m/s, 2.00 cm of plate and 25.0 cm on to the paper */
  const SY = 2600;                                 /* the page, drawn at 2600 canvas units to the meter, with a scale in centimeters on it */
  const NOZ = 150, PL1 = 500, PL2 = 860, PAPER = 1210, YC = 330;
  /* how far a droplet of charge q has been pulled aside, in meters, at the
     fraction u of the plates and the fraction v of the way on to the paper */
  function drop(q, E, u, v) {
    const a = (q * E) / M, t = u * (L / V);
    return 0.5 * a * t * t + (v > 0 ? a * (L / V) * ((v * D) / V) : 0);
  }
  const landing = (q, E) => drop(q, E, 1, 1);
  const yOf = (m) => Math.max(120, Math.min(540, YC + m * SY));
  function draw() {
    const { ctx } = begin(d.c);
    const qc = C('charge'), ec = C('electric-field'), fc = C('force'), pc = C('position');
    const nzc = F.ref('nozzle'), elc = F.ref('electrodes'), plc = F.ref('plates'), ppc = F.ref('page'), dpc = F.ref('droplets');
    const t = cy.now(), q = qs.v * 1e-12, E = Es.v * 1e3;
    const a = (q * E) / M, yEnd = landing(q, E);
    /* the nozzle, the charging electrodes, the plates and the paper */
    panel(ctx, 40, YC - 40, 110, 80, 10, PAL.soft, nzc);
    text(ctx, 'nozzle', 95, YC - 62, nzc, { size: 19, align: 'center' });
    panel(ctx, 280, YC - 92, 26, 60, 4, PAL.panel, elc); panel(ctx, 280, YC + 32, 26, 60, 4, PAL.panel, elc);
    text(ctx, 'charging electrodes', 293, YC + 122, elc, { size: 18, align: 'center' });
    panel(ctx, PL1, YC - 150, PL2 - PL1, 26, 4, PAL.panel, plc); panel(ctx, PL1, YC + 124, PL2 - PL1, 26, 4, PAL.panel, plc);
    for (let i = 0; i < 6; i++) { mark(ctx, '+', PL1 + 34 + i * 58, YC - 137, 20); mark(ctx, '−', PL1 + 34 + i * 58, YC + 137, 20); }
    text(ctx, 'deflection plates', (PL1 + PL2) / 2, YC - 178, plc, { size: 19, align: 'center' });
    if (Es.v > 0) for (let i = 0; i < 6; i++) arrow(ctx, PL1 + 34 + i * 58, YC - 112, PL1 + 34 + i * 58, YC + 112, ec, 3);   /* no field, no lines */
    text(ctx, 'E = ' + fmt(Es.v, 0) + ' kN/C', PL2 + 12, YC - 100, ec, { size: 21, weight: 600 });
    panel(ctx, PAPER, 90, 130, 460, 6, PAL.soft, ppc);
    text(ctx, 'the paper', PAPER + 65, 66, ppc, { size: 19, align: 'center' });
    for (let k = -8; k <= 8; k += 2) {                 /* the page carries a scale, so the deflection can be read off it */
      const y = YC + (k / 100) * SY; if (y < 100 || y > 546) continue;
      line(ctx, PAPER, y, PAPER + 14, y, PAL.muted, 2);
      if (k !== 0) text(ctx, num(k, 0), PAPER + 20, y, PAL.muted, { size: 16 });
    }
    text(ctx, 'cm', PAPER + 65, 106, PAL.muted, { size: 16, align: 'center' });   /* beside the scale's ticks, not on them */
    line(ctx, NOZ, YC, PAPER, YC, PAL.rule, 2, [10, 10]);
    /* the droplets, five of them strung along the stream */
    for (let i = 0; i < 5; i++) {
      const f = ((i / 5) + t / T) % 1, x = NOZ + f * (PAPER - NOZ);
      const u = Math.max(0, Math.min(1, (x - PL1) / (PL2 - PL1)));
      const v = Math.max(0, Math.min(1, (x - PL2) / (PAPER - PL2)));
      const y = yOf(drop(q, E, u, v));
      dot(ctx, x, y, dpc, true, 9);
      if (x > 306) mark(ctx, q > 0 ? '+' : q < 0 ? '−' : '', x, y - 22, 18);
      if (i === 0 && x > PL1 && x < PL2 && q * E !== 0) {
        arrow(ctx, x, y, x, y + Math.max(-90, Math.min(90, (q * E) / 4e-6 * 60)), fc, 5);
        text(ctx, 'F = qE', x + 14, y + 42, fc, { size: 20, weight: 600 });
      }
    }
    /* where the stream is writing on the page */
    const yLand = yOf(yEnd);
    line(ctx, PAPER - 30, yLand, PAPER + 8, yLand, pc, 3);
    text(ctx, num(yEnd * 100, 2) + ' cm', PAPER + 40, yLand + (Math.abs(yLand - YC) < 18 ? -24 : yLand > YC ? 24 : -24), pc, { size: 20, weight: 600, align: 'left', bg: alpha(PAL.panel, 0.9) });
    text(ctx, 'q = ' + plus(qs.v, 0) + ' pC', 95, YC + 82, qc, { size: 21, weight: 600, align: 'center' });
    topline(ctx, qs.v === 0 || Es.v === 0
      ? 'The droplets carry no charge, or the plates make no field, so no force acts on them between the plates and the stream flies straight on to the middle of the page.'
      : `Each droplet leaves the electrodes with ${plus(qs.v, 0)} pC, and the field of ${fmt(Es.v, 0)} kN/C pushes it ${q > 0 ? 'toward the negative plate' : 'toward the positive plate'}, so the stream lands ${fmt(Math.abs(yEnd) * 100, 2)} cm ${yEnd > 0 ? 'below' : 'above'} the axis.`);
    readout(d.readout, `\\kF = \\kq\\kEf = (${sciTex(q, 2)}\\ \\text{C})(${sciTex(E, 2)}\\ \\text{N/C}) = ${sciTex(q * E, 2)}\\ \\text{N}`,
      'The charge and the field are both set electrically, which is why an ink jet printer can place a droplet so precisely; colour takes four such jets.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 18.38: the electrostatic precipitator. Moving, because the air
   moves: the particles are carried through the first grid, which charges
   them, and then past the second, which draws them out of the stream. The
   book's schematic shows the count falling from grid to grid, and what the
   reader must otherwise imagine is the drift that empties the air.
===================================================================== */
(function () {
  const d = sim('sim-precipitator', 620);
  const T = 6;
  const cy = cycle(() => T, 1.2);
  const qs = ctl(d.controls, { label: '\\kq', cls: 'charge', min: 0, max: 8, step: 0.5, value: 5, unit: 'nC', dec: 1, aria: 'the charge the first grid places on each particle', onInput: () => cy.reset() });
  const Es = ctl(d.controls, { label: '\\kEf', cls: 'electric-field', min: 0, max: 400, step: 10, value: 250, unit: 'kN/C', dec: 0, aria: 'the field at the collecting grid', onInput: () => cy.reset() });
  const X0 = 90, X1 = 470, X2 = 880, X3 = 1310, YT = 150, YB = 470;
  const N = 24;
  /* every particle is given its own lane and its own start, so the stream reads as a stream */
  const LANE = [], START = [];
  for (let i = 0; i < N; i++) { LANE.push(YT + 30 + ((i * 7) % 11) * ((YB - YT - 60) / 10)); START.push((i * 0.37) % 1); }
  function draw() {
    const { ctx } = begin(d.c);
    const qc = C('charge'), ec = C('electric-field');
    const t = cy.now(), q = qs.v * 1e-9, E = Es.v * 1e3;
    /* how surely a charged particle is pulled out of the stream before it passes the collecting grid */
    const pull = 1 - Math.exp(-(q * E) / 3.0e-4);
    /* the duct, and the two grids the book draws */
    panel(ctx, X0, YT, X3 - X0, YB - YT, 8, PAL.soft);
    const ptc = F.ref('particles');
    for (const [x, sign, name, off, id] of [[X1, '+', 'the charging grid', -16, 'charging-grid'], [X2, '−', 'the collecting grid', -16, 'collecting-grid']]) {
      line(ctx, x, YT + 6, x, YB - 6, F.ref(id), 4);
      for (let i = 0; i < 6; i++) mark(ctx, sign, x + off, YT + 34 + i * ((YB - YT - 68) / 5), 22);
      text(ctx, name, x, YB + 34, F.ref(id), { size: 19, align: 'center' });
    }
    if (Es.v > 0) for (let i = 0; i < 5; i++) arrow(ctx, X1 + 24, YT + 40 + i * 70, X2 - 12, YT + 40 + i * 70, ec, 3);   /* no field, no lines */
    text(ctx, 'E = ' + fmt(Es.v, 0) + ' kN/C', X1 + 40, YT - 28, ec, { size: 21, weight: 600 });
    arrow(ctx, X0 - 58, (YT + YB) / 2, X0 - 6, (YT + YB) / 2, PAL.ink, 4);
    text(ctx, 'dirty air', X0 - 6, (YT + YB) / 2 - 34, PAL.ink, { size: 19, align: 'right' });
    text(ctx, pull > 0.5 ? 'clean air leaves' : 'still dirty air leaves', X3 - 20, YT - 28, PAL.ink, { size: 19, align: 'right' });
    /* the particles: charged at the first grid, and held on the second where the field is strong enough */
    let caught = 0, through = 0;
    for (let i = 0; i < N; i++) {
      const f = (START[i] + t / T) % 1, x = X0 + f * (X3 - X0);
      const held = ((i * 13) % 100) / 100 < pull;
      const charged = x > X1;
      if (held && x > X2) { caught++; continue; }
      if (!held && x > X2) through++;
      let y = LANE[i];
      if (held && charged) {                                    /* drawn toward the collecting grid as it approaches */
        const g = Math.min(1, Math.max(0, (x - X1) / (X2 - X1)));
        dot(ctx, Math.min(x, X2 - 24), y, ptc, true, 8);
        mark(ctx, '+', Math.min(x, X2 - 24), y - 20, 16);
        if (g > 0.8) arrow(ctx, Math.min(x, X2 - 24) + 10, y, X2 - 14, y, ec, 3);
        continue;
      }
      dot(ctx, x, y, ptc, true, 8);
      if (charged && q > 0) mark(ctx, '+', x, y - 20, 16);
    }
    /* what the second grid is holding */
    for (let i = 0; i < Math.min(12, Math.round(pull * 12)); i++) dot(ctx, X2 + 20, YT + 26 + i * ((YB - YT - 52) / 11), ptc, true, 8);
    const pct = pull * 100;
    text(ctx, 'q on each particle = ' + fmt(qs.v, 1) + ' nC', X1 - 20, YT - 28, qc, { size: 21, weight: 600, align: 'right' });
    text(ctx, fmt(pct, 0) + '% collected', X3 - 20, YB + 34, PAL.ink, { size: 21, weight: 600, align: 'right' });
    topline(ctx, qs.v === 0
      ? 'The charging grid is off, so the particles cross the precipitator uncharged. The field at the second grid exerts no force on an uncharged particle, and the dirty air leaves as dirty as it came in.'
      : `Each particle is given ${fmt(qs.v, 1)} nC at the first grid, and the field of ${fmt(Es.v, 0)} kN/C at the second draws ${fmt(pct, 0)}% of them out of the stream and holds them there.`);
    readout(d.readout, `\\kF = \\kq\\kEf = (${sciTex(q, 2)}\\ \\text{C})(${sciTex(E, 2)}\\ \\text{N/C}) = ${sciTex(q * E, 2)}\\ \\text{N}\\ \\text{on each particle}`,
      'Industrial precipitators built this way remove over 99% of the particles from the stack gas of coal- and oil-fired plants.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   SIM: the charged drop of gasoline of Example 18.5, the weight and the
   electric force on it and the acceleration they leave. Still: the example
   asks what the drop does at the moment it is in the field, and the answer
   is a contest between two forces the reader sets, so the figure answers
   its sliders and registers no cycle.
===================================================================== */
(function () {
  const d = sim('sim-charged-drop', 620);
  /* the balance the text names, the electric force equal to the weight, is a circle on each slider,
     placed from the other two; landing on it turns the acceleration into the balance itself */
  let Es, ms;
  const qs = ctl(d.controls, { label: '\\kq', cls: 'charge', min: 0, max: 10, step: 0.1, value: 3.2, unit: '×10⁻¹⁹ C', dec: 2, aria: 'the charge on the drop',
    specials: [{ at: () => (Es && ms && Es.v > 0 ? (ms.v * 1e-15 * G) / (Es.v * 1e5) / 1e-19 : null), label: 'hangs' }] });
  Es = ctl(d.controls, { label: '\\kEf', cls: 'electric-field', min: 0, max: 6, step: 0.1, value: 3.0, unit: '×10⁵ N/C', dec: 2, aria: 'the strength of the upward electric field',
    specials: [{ at: () => (ms && qs.v > 0 ? (ms.v * 1e-15 * G) / (qs.v * 1e-19) / 1e5 : null), label: 'hangs' }] });
  ms = ctl(d.controls, { label: '\\km', cls: 'mass', min: 1, max: 10, step: 0.1, value: 4.0, unit: '×10⁻¹⁵ kg', dec: 2, aria: 'the mass of the drop',
    specials: [{ at: () => (qs.v * 1e-19 * Es.v * 1e5) / G / 1e-15, label: 'hangs' }] });
  const { formula, note } = F.readout(d);
  let wasHung = null;
  const DX = 470, DY = 330, FX = 1010;
  function draw() {
    const { ctx } = begin(d.c);
    const qc = C('charge'), ec = C('electric-field'), fc = C('force'), ac = C('acceleration'), mc = C('mass'), drc = F.ref('drop');
    const q = qs.v * 1e-19, E = Es.v * 1e5, m = ms.v * 1e-15;
    const w = m * G, Fe = q * E, hung = q > 0 && E > 0 && Math.abs(Fe - w) < 1e-6 * w, net = hung ? 0 : Fe - w, a = net / m;
    /* the upward field the drop hangs in */
    for (let i = 0; i < 7; i++) {
      const x = 150 + i * 120;
      if (E > 0) arrow(ctx, x, 540, x, 540 - 60 - 340 * (Es.v / 6), ec, 3);
    }
    text(ctx, 'E = ' + sci(E, 2) + ' N/C, upward', 150, 570, ec, { size: 21, weight: 600 });
    /* the drop, with the sign the book gives it */
    circle(ctx, DX, DY, 34, PAL.panel, 3, drc);
    mark(ctx, '+', DX, DY, 26);
    const bg = alpha(PAL.panel, 0.97);   /* the field lines run behind the drop's names */
    text(ctx, 'a drop of gasoline', DX - 52, DY - 26, drc, { size: 19, align: 'right', bg });
    text(ctx, 'm = ' + sci(m, 2) + ' kg', DX - 52, DY + 4, mc, { size: 19, weight: 600, align: 'right', bg });
    text(ctx, 'q = ' + sci(q, 2) + ' C', DX - 52, DY + 34, qc, { size: 19, weight: 600, align: 'right', bg });
    /* the free-body diagram: the two forces, drawn to a common scale, and the net */
    const S = 1.1e15;                                          /* canvas units per newton, so 9.6 × 10⁻¹⁴ N is 106 units */
    const up = Math.min(130, Fe * S), dn = Math.min(130, w * S);
    if (Fe > 0) { arrow(ctx, DX, DY - 36, DX, DY - 36 - up, fc, 5); text(ctx, 'F = qE = ' + sci(Fe, 2) + ' N', DX + 20, DY - 46 - up / 2, fc, { size: 20, weight: 600, bg: alpha(PAL.panel, 0.9) }); }
    arrow(ctx, DX, DY + 36, DX, DY + 36 + dn, fc, 5);
    text(ctx, 'w = mg = ' + sci(w, 2) + ' N', DX + 20, DY + 52 + dn / 2, fc, { size: 20, weight: 600, bg: alpha(PAL.panel, 0.9) });
    /* what the two forces leave */
    text(ctx, 'the net force and the acceleration', FX, 176, PAL.muted, { size: 19 });
    text(ctx, 'F − w = ' + (net < 0 ? '−' : '') + sci(Math.abs(net), 2) + ' N', FX, 224, fc, { size: 23, weight: 600 });
    text(ctx, 'a = ' + num(a, 1) + ' m/s²', FX, 274, ac, { size: 23, weight: 600 });
    text(ctx, a > 0 ? 'upward' : a < 0 ? 'downward' : 'the drop hangs', FX, 314, PAL.muted, { size: 19 });
    if (a !== 0) arrow(ctx, FX + 300, a > 0 ? 300 : 200, FX + 300, a > 0 ? 200 : 300, ac, 5);
    text(ctx, 'the field that would just support it', FX, 386, PAL.muted, { size: 19 });
    text(ctx, q > 0 ? sci((m * G) / q, 2) + ' N/C' : 'no field can, with no charge on the drop', FX, 430, ec, { size: 21, weight: 600 });
    topline(ctx, q === 0 || E === 0
      ? `Nothing holds the drop up: with ${q === 0 ? 'no charge on it' : 'no field about it'} the only force is its weight of ${sci(w, 2)} N, and it falls with the acceleration due to gravity.`
      : net > 0
        ? `The electric force of ${sci(Fe, 2)} N is greater than the weight of ${sci(w, 2)} N, so the drop is carried upward with an acceleration of ${fmt(a, 1)} m/s².`
        : net < 0
          ? `The weight of ${sci(w, 2)} N is greater than the electric force of ${sci(Fe, 2)} N, so the drop falls, with an acceleration of ${fmt(Math.abs(a), 1)} m/s² downward.`
          : `The electric force and the weight are both ${sci(w, 2)} N, so the net force is zero and the drop hangs where it is.`);
    F.morph(formula, hung
      ? `\\mk{F}{\\kF} = \\mk{w}{\\kwgt} = \\mk{nw}{${sciTex(w, 2)}}\\ \\text{N}`
      : `\\mk{a}{\\ka} = \\frac{\\mk{F}{\\kF} - \\mk{w}{\\kwgt}}{\\km} = \\frac{\\mk{nF}{${sciTex(Fe, 2)}} - \\mk{nw}{${sciTex(w, 2)}}}{\\mk{m}{${sciTex(m, 2)}}} = \\mk{na}{${a === 0 ? '0' : num(a, 1)}}\\ \\text{m/s}^2`,
      { force: wasHung !== null && hung !== wasHung });
    wasHung = hung;
    note.textContent = (hung ? 'The electric force holds up the whole weight, so the drop neither rises nor falls. ' : '')
      + 'The two forces are of the same order here, so the answer depends on the charge, the field and the mass alike.';
  }
  register(d.fig, { update: () => {}, draw });
})();
};
