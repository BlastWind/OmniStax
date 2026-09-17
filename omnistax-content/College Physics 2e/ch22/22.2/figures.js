/* Figures for section 22.2 Ferromagnets and Electromagnets. Boots against the
   section's text article.

   The page binds magnetic-field and current, as ch22/COLOR.md says it should,
   and temperature, which that file does not list for this page: the Curie
   temperature is the section's one result, and a figure that shows it must
   carry a temperature the reader can raise, so the slider and the readout wear
   Chapter 13's hue rather than standing in ink. Every gap, count of turns,
   share of a sample and count of domains here is untyped and in ink, and no
   body is tinted: a bar magnet, an iron core, a domain cell, a recording head
   and a strip of magnetic medium are all ink, and the electron, proton and
   neutron of the atomic models wear the element palette.

   Four of the five simulations are still, because each reports the state its
   controls command and nothing in it has a clock. The fifth, the domains,
   moves: the growth of one domain at the expense of its neighbours is a
   process in time and not a state, and one loop carries the sample from the
   random arrangement to the arrangement the two sliders command. A field line
   that closes on itself carries no arrowhead anywhere on this page, as
   ch22/COLOR.md asks, and the direction of a field is told instead by the
   letters N and S on the poles it runs between. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['22.2'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, cycle, begin, line, arrow, dot, text, topline, hbracket, labeller, view, face, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
const TAU = Math.PI * 2;
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const smooth = (p) => p * p * (3 - 2 * p);
const WORDS = ['no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
const wd = (n) => WORDS[n] ?? String(n);

/* An ink bar with a rule across its middle and a letter in each half: every bar
   magnet and every piece of iron on this page is drawn with it, since a body is
   never tinted and a pole is told by its letter. A null letter leaves the half
   blank, which is how an unmagnetized piece of iron is drawn. */
function bar(ctx, cx, cy, L, T, first, second, lsize, rule = true) {
  ctx.save();
  ctx.lineWidth = 3; ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.panel;
  ctx.beginPath(); ctx.rect(cx - L / 2, cy - T / 2, L, T); ctx.fill(); ctx.stroke();
  if (rule) { ctx.beginPath(); ctx.moveTo(cx, cy - T / 2); ctx.lineTo(cx, cy + T / 2); ctx.stroke(); }
  ctx.restore();
  const sz = lsize ?? Math.min(T * 0.6, L * 0.3);
  if (first) text(ctx, first, cx - L * 0.25, cy, PAL.ink, { size: sz, weight: 700, align: 'center' });
  if (second) text(ctx, second, cx + L * 0.25, cy, PAL.ink, { size: sz, weight: 700, align: 'center' });
}

/* A short arrow standing for the direction of one domain, drawn from the centre
   of its cell. Domains are ink on this page; the arrows say which way each one
   points and the walls between the cells say how large each has grown. */
function domainArrow(ctx, cx, cy, ang, len, color, w) {
  const ux = Math.cos(ang), uy = Math.sin(ang);
  arrow(ctx, cx - ux * len / 2, cy - uy * len / 2, cx + ux * len / 2, cy + uy * len / 2, color, w);
}

/* =====================================================================
   FIGURE 22.7: a piece of iron laid between two magnets. Still: the iron
   between the magnets is magnetized for as long as they are there, and
   what the figure reports is the state the treatment leaves it in, not
   the path it took to get there (rule 14).
===================================================================== */
(function () {
  const d = sim('sim-magnetize', 620);
  const treatC = choice(d.controls, {
    label: '\\text{the iron is}',
    options: [{ value: 'none', label: 'left alone' }, { value: 'tap', label: 'tapped' }, { value: 'heat', label: 'heated' }],
    value: 'heat', aria: 'what is done to the iron while it lies between the magnets: nothing, tapped while cold, or heated and then cooled',
  });
  const magC = choice(d.controls, {
    label: '\\text{the magnets}',
    options: [{ value: 'on', label: 'in place' }, { value: 'off', label: 'taken away' }],
    value: 'on', aria: 'whether the two original magnets are still in place',
  });
  const gapS = ctl(d.controls, { label: '\\text{gap}', cls: '', min: 1, max: 6, step: 0.5, value: 2, unit: 'cm', dec: 1, aria: 'the gap between the iron and each of the two magnets' });
  const CY = 296, L = 296, T = 92, S = 24;             /* 24 units to the centimetre */
  const COLS = 8, ROWS = 3;                            /* the domains drawn inside the iron */
  /* The order in which the cells of the iron fall into line, and the direction each
     takes while it is still out of line: fixed, so that the drawing is the same
     every time the reader comes back to it. */
  const ORDER = [11, 12, 3, 20, 4, 13, 19, 10, 2, 21, 5, 14, 18, 9, 1, 22, 6, 15, 17, 8, 0, 23, 7, 16];
  const WILD = [2.4, -1.7, 0.9, -2.9, 1.3, 2.8, -0.6, -2.2, 1.9, -1.1, 3.0, 0.4, -0.3, 2.1, -2.5, 1.1, -0.9, 2.6, -1.4, 0.6, -2.8, 1.6, -2.0, 2.3];

  const share = () => clamp(1.05 - 0.09 * gapS.v, 0.5, 1);   /* how much of the iron the magnets bring into line */
  function state() {
    const away = magC.value === 'off', kept = treatC.value !== 'none';
    const al = away ? (kept ? share() : 0) : share();
    return { away, kept, al, magnet: al >= 0.4 };
  }

  function draw() {
    const { ctx } = begin(d.c);
    const st = state();
    gapS.disable(st.away);
    const fc = C('magnetic-field');
    const g = gapS.v * S, cx = 700;
    const lc = cx - L - g, rc = cx + L + g;
    const lab = labeller(ctx, 620); lab.block(0, 0, 1400, 96);
    /* the two original magnets, each with its north pole toward the iron on its
       left and its south pole toward the iron on its right */
    if (!st.away) {
      bar(ctx, lc, CY, L, T, 'S', 'N', 44);
      bar(ctx, rc, CY, L, T, 'S', 'N', 44);
      /* the field of the magnets crossing each gap, from a north pole to a south */
      for (let k = -1; k <= 1; k++) {
        const y = CY + k * 30;
        arrow(ctx, lc + L / 2 + 6, y, cx - L / 2 - 6, y, fc, 3.5);
        arrow(ctx, cx + L / 2 + 6, y, rc - L / 2 - 6, y, fc, 3.5);
      }
    }
    /* the iron, with its domains inside it and, once it is magnetized, its induced
       poles lettered under its two ends where the domain arrows leave room */
    bar(ctx, cx, CY, L, T, null, null, 44, false);
    if (st.magnet) {
      text(ctx, 'S', cx - L * 0.3, CY + T / 2 + 30, PAL.ink, { size: 34, weight: 700, align: 'center' });
      text(ctx, 'N', cx + L * 0.3, CY + T / 2 + 30, PAL.ink, { size: 34, weight: 700, align: 'center' });
    }
    const aligned = Math.round(ORDER.length * st.al);
    const cw = L / COLS, ch = T / ROWS;
    ORDER.forEach((cell, rank) => {
      const col = cell % COLS, row = Math.floor(cell / COLS);
      const ax = cx - L / 2 + (col + 0.5) * cw, ay = CY - T / 2 + (row + 0.5) * ch;
      const ang = rank < aligned ? 0 : WILD[cell];
      domainArrow(ctx, ax, ay, ang, 22, alpha(PAL.ink, 0.55), 2.5);
    });
    /* what is being done to the iron, drawn so the choice can be seen and not only read:
       heat rising under the bar, or a mallet coming down on its end */
    if (!st.away && treatC.value === 'heat') {
      ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.7); ctx.lineWidth = 2.5; ctx.lineCap = 'round';
      [-30, 0, 30].forEach((dx) => {
        ctx.beginPath();
        for (let i = 0; i <= 24; i++) { const q = i / 24, yy = CY + T / 2 + 54 - q * 44, xx = cx + dx + 7 * Math.sin(q * Math.PI * 3); i ? ctx.lineTo(xx, yy) : ctx.moveTo(xx, yy); }
        ctx.stroke();
      });
      ctx.restore();
      lab.add('heated', cx, CY + T / 2 + 58, 0, 1, PAL.ink, 18, 14);
    }
    if (!st.away && treatC.value === 'tap') {
      const hx = cx - L * 0.32, hy = CY - T / 2 - 6;
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.soft; ctx.lineWidth = 3; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(hx + 14, hy - 26); ctx.lineTo(hx + 62, hy - 92); ctx.stroke();
      ctx.beginPath(); ctx.rect(hx - 24, hy - 30, 48, 30); ctx.fill(); ctx.stroke();
      ctx.restore();
      [-1, 1].forEach((k) => line(ctx, hx + k * 34, hy - 40, hx + k * 44, hy - 54, alpha(PAL.ink, 0.6), 2));
      lab.add('tapped', hx + 62, hy - 92, -0.4, -0.9, PAL.ink, 18, 14);
    }
    /* names: five where the magnets are in place, two once they are gone */
    if (!st.away) {
      lab.add('an original magnet', lc, CY + T / 2, 0, 1, PAL.ink, 19, 30);
      lab.add('an original magnet', rc, CY + T / 2, 0, 1, PAL.ink, 19, 30);
      lab.add('the field crosses the gap', cx - L / 2 - g / 2, CY - T / 2, -0.5, -0.87, fc, 19, 34);
      hbracket(ctx, lc + L / 2, cx - L / 2, CY + T / 2 + 104, alpha(PAL.ink, 0.6), fmt(gapS.v, 1) + ' cm', { side: 'below', size: 19 });
      hbracket(ctx, cx + L / 2, rc - L / 2, CY + T / 2 + 104, alpha(PAL.ink, 0.6));
    }
    lab.add(st.away ? 'the iron, on its own' : 'the iron', cx, CY - T / 2, 0, -1, PAL.ink, 19, 26);
    lab.flush();
    const say = st.away
      ? (st.kept
        ? 'The little arrows have kept the alignment the magnets gave them, so the iron is a magnet of its own.'
        : 'With nothing to hold them, the little arrows have fallen out of line again and the iron shows no poles.')
      : 'Each little arrow is a domain, and the field crossing the gaps has brought most of them into line.';
    text(ctx, say, 700, 556, PAL.muted, { size: 18, align: 'center' });
    const words = st.away
      ? (st.kept
        ? `${treatC.value === 'heat' ? 'Heated between the magnets and then cooled' : 'Tapped while it lay cold between the magnets'}, the iron keeps its poles after the magnets are taken away.`
        : 'Nothing was done to the iron while it lay between the magnets, so taking them away leaves it unmagnetized.')
      : `With the magnets ${fmt(gapS.v, 1)} cm away on either side, the iron is magnetized with its south pole beside the north pole of the magnet on its left.`;
    topline(ctx, words);
    readout(d.readout,
      `\\text{the iron was } \\text{${treatC.value === 'none' ? 'left alone' : treatC.value === 'tap' ? 'tapped while cold' : 'heated and then cooled'}} \\qquad \\text{magnets: } \\text{${st.away ? 'taken away' : 'in place'}} \\qquad \\text{the iron ${st.magnet ? 'is' : 'is not'} a magnet}`,
      st.magnet
        ? 'Unlike poles lie closest across each gap, which is why the three bars are pulled toward one another.'
        : 'Take the magnets away without heating or tapping the iron, and the magnetization goes with them.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 22.8: the domains inside a piece of iron. Moving: a domain
   growing at the expense of its neighbours while the rest swing into
   line is a process in time and not a state, so one loop carries the
   sample from the random arrangement to the arrangement the two
   sliders command and then holds it (rule 14).
===================================================================== */
(function () {
  const d = sim('sim-domains', 680);
  const reset = () => cy.reset();
  const bS = ctl(d.controls, { label: '\\kBmag', cls: 'magnetic-field', min: 0, max: 50, step: 1, value: 20, unit: 'mT', dec: 0, onInput: reset, aria: 'the strength of the external magnetic field the iron is put in' });
  const tS = ctl(d.controls, { label: '\\kTemp', cls: 'temperature', min: 300, max: 1300, step: 10, value: 300, unit: 'K', dec: 0, onInput: reset, detents: [{ v: 1043, label: '1043' }], snap: false, aria: 'the temperature of the iron' });
  const cy = cycle(() => 4.5, 1.2);
  const TC = 1043;                                     /* the Curie temperature of iron, the book's own number */
  const N = 6, X0 = 230, Y0 = 150, SIDE = 420, CELL = SIDE / N;
  /* the sample as the book's panel (a) draws it: nine domains of different sizes,
     each a group of cells, each pointing its own way */
  const MAP = [
    0, 0, 1, 1, 1, 2,
    0, 0, 1, 3, 2, 2,
    4, 0, 3, 3, 3, 2,
    4, 4, 5, 5, 3, 6,
    7, 4, 5, 8, 6, 6,
    7, 7, 8, 8, 8, 6,
  ];
  const ANG = [-0.35, 2.4, 1.5, -1.9, 0.25, 3.0, -2.6, 1.9, -1.1];
  const GROWER = 0;                                    /* the domain that already lies along the field */
  /* how deep into the sample each cell sits from the domain that grows, and so how
     late it falls to it: the wall sweeps outward from that domain as the field rises */
  const SEED = MAP.map((dm, i) => {
    if (dm === GROWER) return -1;
    const r = Math.floor(i / N), c = i % N;
    let best = 99;
    MAP.forEach((dm2, j) => { if (dm2 !== GROWER) return; best = Math.min(best, Math.max(Math.abs(r - Math.floor(j / N)), Math.abs(c - (j % N)))); });
    return best;
  });
  const DMAX = Math.max(...SEED);
  const THRESH = MAP.map((dm, i) => (dm === GROWER ? -1 : clamp(0.12 + 0.62 * (SEED[i] / DMAX) + 0.22 * (1 - Math.cos(ANG[dm])) / 2, 0.05, 0.97)));

  const thermal = (T) => (T >= TC ? 0 : 1 - Math.pow(T / TC, 3));
  const target = () => clamp(Math.sqrt(bS.v / 50) * thermal(tS.v), 0, 1);   /* 20 mT already brings most of the sample round, 50 mT all of it */

  /* the sample at alignment a: which domain each cell belongs to and which way it points */
  function sample(a) {
    const owner = MAP.map((dm, i) => (a > THRESH[i] ? GROWER : dm));
    const dir = owner.map((dm) => ANG[dm] * (1 - a));
    const grown = owner.filter((dm) => dm === GROWER).length;
    const left = new Set(owner).size;
    const mean = dir.reduce((s, t) => s + Math.cos(t), 0) / dir.length;
    return { owner, dir, grown, left, mean };
  }

  function draw() {
    const { ctx } = begin(d.c);
    const a = target() * smooth(clamp(cy.now() / 4.5, 0, 1));
    const s = sample(a);
    const fc = C('magnetic-field'), tc = C('temperature');
    const lab = labeller(ctx, 680); lab.block(0, 0, 1400, 96);
    /* the external field, drawn to either side of the sample so that it never
       crosses the sample's own arrows */
    const strength = bS.v / 50;
    if (bS.v > 0) {
      for (let k = 0; k < 3; k++) {
        const y = Y0 + SIDE * (0.2 + 0.3 * k);
        arrow(ctx, 96, y, X0 - 16, y, fc, 2.5 + 3 * strength);
        arrow(ctx, X0 + SIDE + 16, y, X0 + SIDE + 130, y, fc, 2.5 + 3 * strength);
      }
      lab.add('the external field', 128, Y0 + SIDE * 0.2, 0, -1, fc, 19, 30);
    }
    /* the sample: its cells, the wall between one domain and the next, and its outline */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.fillRect(X0, Y0, SIDE, SIDE); ctx.restore();
    for (let i = 0; i < N * N; i++) {
      const r = Math.floor(i / N), c = i % N;
      const cx = X0 + (c + 0.5) * CELL, cyy = Y0 + (r + 0.5) * CELL;
      domainArrow(ctx, cx, cyy, s.dir[i], CELL * 0.62, alpha(PAL.ink, 0.72), 3);
      if (c < N - 1 && s.owner[i] !== s.owner[i + 1]) line(ctx, X0 + (c + 1) * CELL, Y0 + r * CELL, X0 + (c + 1) * CELL, Y0 + (r + 1) * CELL, alpha(PAL.ink, 0.5), 2.5);
      if (r < N - 1 && s.owner[i] !== s.owner[i + N]) line(ctx, X0 + c * CELL, Y0 + (r + 1) * CELL, X0 + (c + 1) * CELL, Y0 + (r + 1) * CELL, alpha(PAL.ink, 0.5), 2.5);
    }
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.strokeRect(X0, Y0, SIDE, SIDE); ctx.restore();
    /* the sample's own poles, once enough of it lies one way to give it any */
    if (s.mean > 0.5) {
      text(ctx, 'S', X0 - 34, Y0 + SIDE * 0.35, PAL.ink, { size: 32, weight: 700, align: 'center', bg: PAL.panel });
      text(ctx, 'N', X0 + SIDE + 34, Y0 + SIDE * 0.35, PAL.ink, { size: 32, weight: 700, align: 'center', bg: PAL.panel });
    }
    lab.add('one domain', X0 + CELL * 0.5, Y0 + SIDE, 0, 1, PAL.ink, 19, 30);
    /* the temperature of the iron, and the temperature above which no field holds it */
    const TX = 900, TT = Y0, TB = Y0 + SIDE, TW = 58;
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.strokeRect(TX, TT, TW, TB - TT); ctx.restore();
    const ty = (T) => TB - ((T - 300) / 1000) * (TB - TT);
    ctx.save(); ctx.fillStyle = alpha(tc, 0.3); ctx.fillRect(TX + 2, ty(tS.v), TW - 4, TB - ty(tS.v) - 2); ctx.restore();
    line(ctx, TX - 12, ty(tS.v), TX + TW + 12, ty(tS.v), tc, 4);
    line(ctx, TX - 24, ty(TC), TX + TW + 24, ty(TC), PAL.ink, 3, [10, 10]);
    text(ctx, '1300 K', TX - 14, TT, PAL.muted, { size: 17, align: 'right' });
    text(ctx, '300 K', TX - 14, TB, PAL.muted, { size: 17, align: 'right' });
    text(ctx, 'the temperature of the iron', TX + TW / 2, TT - 34, PAL.ink, { size: 19, weight: 600, align: 'center' });
    lab.add('the Curie temperature, 1043 K', TX + TW + 24, ty(TC), 1, 0, PAL.ink, 19, 22);
    lab.add(fmt(tS.v, 0) + ' K', TX + TW + 12, ty(tS.v), 1, 0, tc, 20, 22);
    lab.flush();
    const above = tS.v >= TC;
    const say = above
      ? ['Above the Curie temperature the thermal', 'motion of the atoms is too violent for any', 'field to hold the domains in line, and the', 'iron cannot be magnetized at all.']
      : ['The domains that already lie along the', 'field grow at the expense of their', 'neighbors, and the neighbors that are', 'left swing into line behind them.'];
    say.forEach((t, i) => text(ctx, t, 1180, 330 + i * 30, PAL.muted, { size: 18, align: 'center' }));
    topline(ctx, above
      ? `At ${fmt(tS.v, 0)} K the iron is above its Curie temperature, and a field of ${fmt(bS.v, 0)} mT leaves the domains pointing every which way.`
      : bS.v === 0
        ? `In no external field the domains of the iron point every which way, ${wd(s.left)} of them in all, and the sample shows no poles.`
        : `In a field of ${fmt(bS.v, 0)} mT at ${fmt(tS.v, 0)} K the domain lying along the field has grown to hold ${fmt(100 * s.grown / (N * N), 0)} per cent of the sample.`);
    readout(d.readout,
      `\\kBmag = ${fmt(bS.v, 0)}\\ \\text{mT} \\qquad \\kTemp = ${fmt(tS.v, 0)}\\ \\text{K} \\qquad \\text{${wd(s.left)} domain${s.left === 1 ? '' : 's'} left}`,
      `The largest domain holds ${fmt(100 * s.grown / (N * N), 0)} per cent of the sample. Above the Curie temperature of iron, 1043 K, no field however strong holds the alignment, which is why a permanent magnet can be demagnetized by heating it.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 22.11: a coil wound round a ferromagnetic core. Still: a coil
   carrying a steady current holds a steady field, and the figure reports
   that state (rule 14). A locked view (rule 28.2): the book prints the
   coil in perspective, and a helix drawn flat is a row of arcs no reader
   reads as a winding, but nothing here is learnt by turning the scene,
   so it projects from one fixed viewpoint and carries no orbit and none
   of rule 26.2's buttons.
===================================================================== */
(function () {
  const d = sim('sim-electromagnet', 640);
  const iS = ctl(d.controls, { label: '\\kIcur', cls: 'current', min: -4, max: 4, step: 0.1, value: 2, unit: 'A', dec: 1, aria: 'the current in the coil, negative where it runs the other way round' });
  const nS = ctl(d.controls, { label: '\\text{turns}', cls: '', min: 4, max: 20, step: 1, value: 10, unit: '', dec: 0, aria: 'the number of turns of wire in the coil' });
  const coreC = choice(d.controls, {
    label: '\\text{core}', options: [{ value: 'iron', label: 'iron' }, { value: 'air', label: 'none' }],
    value: 'iron', aria: 'whether the coil is wound round an iron core or round nothing',
  });
  const YAW = 0.55, PITCH = 0.28, DIST = 1900;
  const V = view({ yaw: YAW, pitch: PITCH, dist: DIST, cx: 690, cy: 330 });
  const EY = DIST * Math.sin(PITCH), EZ = DIST * Math.cos(YAW) * Math.cos(PITCH);
  const near = (y, z) => y * EY + z * EZ > 0;           /* the camera's side of the core's axis */
  const LX = 250, HC = 44, R = 86;                      /* the core's half length and half thickness, and the coil's radius */

  function draw() {
    const { ctx } = begin(d.c);
    const cc = C('current'), fc = C('magnetic-field');
    const I = iS.v, n = nS.v, iron = coreC.value === 'iron';
    const lab = labeller(ctx, 640); lab.block(0, 0, 1400, 96);
    const strength = Math.min(1, (Math.abs(I) / 4) * (n / 16) * (iron ? 1 : 0.3));
    const north = I >= 0 ? 1 : -1;                       /* which end of the core the field leaves by */
    /* the field, drawn as lines that close from one end of the core round to the
       other; a line that closes on itself carries no arrowhead, and the letters
       N and S say which way it runs */
    const loops = I === 0 ? 0 : 1 + Math.round(3 * strength);
    const dirs = [[0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];
    const outer = 122 + 108 * strength;
    ctx.save(); ctx.strokeStyle = alpha(fc, 0.85); ctx.lineWidth = 3; ctx.lineJoin = 'round';
    for (let k = 0; k < loops; k++) {
      const bulge = outer * (k + 1) / loops;
      dirs.forEach((u) => {
        ctx.beginPath();
        for (let i = 0; i <= 44; i++) {
          const q = i / 44, x = (LX + 26) * Math.cos(Math.PI * q), t = bulge * Math.sin(Math.PI * q);
          const p = V.P([x, t * u[1], t * u[2]]);
          i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]);
        }
        ctx.stroke();
      });
    }
    ctx.restore();
    /* the winding: the turns behind the core first, then the core, then the turns
       in front of it, so the wire reads as wrapped round the bar */
    const pts = [];
    const steps = n * 26;
    for (let i = 0; i <= steps; i++) {
      const q = i / steps, ph = TAU * n * q * (I >= 0 ? 1 : -1);
      pts.push([-LX + 2 * LX * q, R * Math.cos(ph), R * Math.sin(ph)]);
    }
    const seg = (wantNear) => {
      ctx.save(); ctx.strokeStyle = cc; ctx.lineWidth = 4; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      let open = false;
      for (let i = 0; i < steps; i++) {
        const a = pts[i], b = pts[i + 1];
        if (near((a[1] + b[1]) / 2, (a[2] + b[2]) / 2) !== wantNear) { if (open) { ctx.stroke(); open = false; } continue; }
        const pa = V.P(a), pb = V.P(b);
        if (!open) { ctx.beginPath(); ctx.moveTo(pa[0], pa[1]); open = true; }
        ctx.lineTo(pb[0], pb[1]);
      }
      if (open) ctx.stroke();
      ctx.restore();
    };
    seg(false);
    /* the core: an ink box seen from the book's own viewpoint, its lit faces shaded */
    if (iron) {
      const P = (x, y, z) => V.P([x, y, z]);
      [
        { pts: [P(-LX, HC, HC), P(LX, HC, HC), P(LX, HC, -HC), P(-LX, HC, -HC)], nrm: [0, 1, 0] },
        { pts: [P(-LX, -HC, HC), P(LX, -HC, HC), P(LX, HC, HC), P(-LX, HC, HC)], nrm: [0, 0, 1] },
        { pts: [P(LX, -HC, HC), P(LX, -HC, -HC), P(LX, HC, -HC), P(LX, HC, HC)], nrm: [1, 0, 0] },
      ].forEach((f) => face(ctx, f.pts, V.shade(f.nrm), 2.5));
    } else {
      const a = V.P([-LX, 0, 0]), b = V.P([LX, 0, 0]);
      line(ctx, a[0], a[1], b[0], b[1], alpha(PAL.ink, 0.3), 2.5, [10, 10]);
    }
    seg(true);
    /* which way the current runs, marked on two of the turns that face the reader */
    if (I !== 0) [0.32, 0.68].forEach((f) => {
      let best = -1, bd = -Infinity;
      for (let i = 4; i < steps - 4; i++) {
        if (!near(pts[i][1], pts[i][2])) continue;
        const w = -Math.abs(i / steps - f);
        if (w > bd) { bd = w; best = i; }
      }
      if (best < 0) return;
      const pa = V.P(pts[best - 5]), pb = V.P(pts[best + 5]);
      arrow(ctx, pa[0], pa[1], pb[0], pb[1], cc, 5.5);
    });
    /* the poles, lettered on the two ends of the core */
    if (I !== 0) {
      const pn = V.P([north * (LX + 72), 0, 0]), ps = V.P([-north * (LX + 72), 0, 0]);
      text(ctx, 'N', pn[0], pn[1], PAL.ink, { size: 34, weight: 700, align: 'center', bg: PAL.panel });
      text(ctx, 'S', ps[0], ps[1], PAL.ink, { size: 34, weight: 700, align: 'center', bg: PAL.panel });
    }
    const wp = V.P([-LX * 0.75, R * 0.7, R * 0.7]);
    lab.add('the winding, carrying ' + fmt(Math.abs(I), 1) + ' A', wp[0], wp[1], -0.45, -0.89, cc, 19, 40);
    const cp = V.P([LX * 0.35, -HC, HC]);
    lab.add(iron ? 'the iron core' : 'no core, only air', cp[0], cp[1], -0.25, 0.97, PAL.ink, 19, 96);
    if (loops) { const fp = V.P([-(LX + 26) * 0.89, outer * 0.45, 0]); lab.add('the field of the coil', fp[0], fp[1], -0.62, -0.78, fc, 19, 26); }
    lab.flush();
    topline(ctx, I === 0
      ? 'With no current in the winding there is no field, and the iron core is not a magnet at all.'
      : `${cap(wd(n))} turns carrying ${fmt(Math.abs(I), 1)} A round ${iron ? 'an iron core' : 'nothing but air'} make a magnet with its north pole at the ${north > 0 ? 'right' : 'left'}-hand end.`);
    readout(d.readout,
      `\\kIcur = ${fmt(I, 1)}\\ \\text{A} \\qquad ${n}\\ \\text{turns} \\qquad \\text{core: } \\text{${iron ? 'iron' : 'none'}} \\qquad \\kBmag \\text{ is } \\text{${I === 0 ? 'nothing at all' : strength > 0.62 ? 'strong' : strength > 0.28 ? 'moderate' : 'weak'}}`,
      'The field grows with the current and with the number of turns, and it is very much stronger with the iron core than without one, because the domains of the iron line up with the field of the coil and add a field of their own.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 22.12: a recording head over a magnetic medium. Still: the
   strip is drawn with the regions already written and the region now
   under the gap, which is a state of the current in the coil, and
   running the strip past would add nothing to the idea (rule 14).
===================================================================== */
(function () {
  const d = sim('sim-recording', 600);
  const iS = ctl(d.controls, { label: '\\kIcur', cls: 'current', min: -3, max: 3, step: 0.1, value: 2, unit: 'A', dec: 1, aria: 'the current in the winding of the recording head' });
  const modeC = choice(d.controls, {
    label: '\\text{storage}', options: [{ value: 'digital', label: 'digital' }, { value: 'analog', label: 'analog' }],
    value: 'digital', aria: 'whether the medium keeps only the direction of each region or its strength as well',
  });
  const GX = 700, MY = 424, MH = 76, MX0 = 195, MX1 = 1205, CELLS = 13;
  const CW = (MX1 - MX0) / CELLS, GAPCELL = 6;         /* cell 6 lies squarely under the gap */
  const WRITTEN = [0.9, -0.55, -1, 0.7, -0.85, 1];     /* what the head laid down before now */

  function draw() {
    const { ctx } = begin(d.c);
    const cc = C('current'), fc = C('magnetic-field');
    const I = iS.v, digital = modeC.value === 'digital';
    const lab = labeller(ctx, 600); lab.block(0, 0, 1400, 96);
    /* the head: a ring of iron with a gap in the face it turns to the medium */
    const OL = 560, OR = 840, OT = 132, OB = 336, IL = 620, IR = 780, IT = 192, IB = 286, GW = 18;
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(OL, OT); ctx.lineTo(OR, OT); ctx.lineTo(OR, OB); ctx.lineTo(GX + GW / 2, OB);
    ctx.lineTo(GX + GW / 2, IB); ctx.lineTo(IR, IB); ctx.lineTo(IR, IT); ctx.lineTo(IL, IT);
    ctx.lineTo(IL, IB); ctx.lineTo(GX - GW / 2, IB); ctx.lineTo(GX - GW / 2, OB); ctx.lineTo(OL, OB);
    ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
    /* the winding on the left limb of the head */
    ctx.save(); ctx.strokeStyle = cc; ctx.lineWidth = 4;
    for (let k = 0; k < 5; k++) { ctx.beginPath(); ctx.ellipse((OL + IL) / 2, OT + 34 + k * 28, 44, 11, 0, 0, TAU); ctx.stroke(); }
    ctx.restore();
    if (I !== 0) {
      const s = I > 0 ? 1 : -1;
      [OT + 48, OT + 132].forEach((y) => arrow(ctx, (OL + IL) / 2 - 44, y - 24 * s, (OL + IL) / 2 - 44, y + 24 * s, cc, 5.5));
      /* the field escaping across the gap, which is what writes the medium */
      arrow(ctx, GX - s * 48, OB + 26, GX + s * 48, OB + 26, fc, 4);
    }
    /* the medium, its regions already written, the one under the gap and the blank ones */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
    ctx.fillRect(MX0, MY - MH / 2, MX1 - MX0, MH); ctx.strokeRect(MX0, MY - MH / 2, MX1 - MX0, MH); ctx.restore();
    for (let i = 0; i < CELLS; i++) {
      const cx = MX0 + (i + 0.5) * CW;
      if (i) line(ctx, MX0 + i * CW, MY - MH / 2, MX0 + i * CW, MY + MH / 2, alpha(PAL.ink, 0.35), 2);
      let v = null;
      if (i < GAPCELL) v = digital ? Math.sign(WRITTEN[i]) : WRITTEN[i];
      else if (i === GAPCELL && I !== 0) v = digital ? Math.sign(I) : I / 3;
      if (v === null || v === 0) continue;
      const len = (CW - 24) * (digital ? 1 : Math.abs(v));
      arrow(ctx, cx - Math.sign(v) * len / 2, MY, cx + Math.sign(v) * len / 2, MY, fc, 4);
    }
    /* what each part of the strip is */
    lab.add('already written', MX0 + CW * 2.5, MY + MH / 2, 0, 1, PAL.ink, 19, 26);
    lab.add('still blank', MX0 + CW * 10, MY + MH / 2, 0, 1, PAL.ink, 19, 26);
    lab.add('the region under the gap', GX, MY + MH / 2, 0, 1, fc, 19, 64);
    lab.add('the winding of the head', (OL + IL) / 2, OT + 34, -0.8, -0.6, cc, 19, 30);
    if (I !== 0) lab.add('the field across the gap', GX + 48, OB + 26, 1, 0, fc, 19, 30);
    else lab.add('the gap in the core', GX + GW / 2, (IB + OB) / 2, 1, 0, PAL.ink, 19, 40);
    lab.flush();
    text(ctx, digital
      ? 'In digital storage only the direction of a region is kept, so every region is written to the full.'
      : 'In analog storage the strength of a region follows the strength of the current, so the regions come out uneven.',
      700, 578, PAL.muted, { size: 18, align: 'center' });
    topline(ctx, I === 0
      ? 'With no current in the winding the gap makes no field, and the region passing under it is left as it was.'
      : `A current of ${fmt(Math.abs(I), 1)} A writes a region magnetized to the ${I > 0 ? 'right' : 'left'}, and in ${digital ? 'digital storage only its direction is kept' : 'analog storage its strength follows the current as well'}.`);
    readout(d.readout,
      `\\kIcur = ${fmt(I, 1)}\\ \\text{A} \\qquad \\text{storage: } \\text{${digital ? 'digital' : 'analog'}} \\qquad \\text{the new region ${I === 0 ? 'is left as it was' : 'points ' + (I > 0 ? 'right' : 'left')}}`,
      `${I === 0 || digital ? '' : 'The region is written to ' + fmt(100 * Math.abs(I) / 3, 0) + ' per cent of full strength. '}The head is an electromagnet with a gap in its core, and the medium keeps whatever magnetization the field at that gap leaves in it, which is what makes a ferromagnetic material a memory.`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 22.13: the two models of how an atom makes a magnetic field.
   Still: the models are pictures of an arrangement, and the book itself
   says neither is consistent with modern physics, so setting the
   electron running would claim a motion the section does not stand
   behind (rule 14).
===================================================================== */
(function () {
  const d = sim('sim-atomic-currents', 620);
  const modelC = choice(d.controls, {
    label: '\\text{model}', options: [{ value: 'orbit', label: 'an electron in orbit' }, { value: 'spin', label: 'an electron spinning' }],
    value: 'orbit', aria: 'which of the two models of submicroscopic current the figure draws',
  });
  const wayC = choice(d.controls, {
    label: '\\text{the way the electron goes}',
    options: [{ value: 'ccw', label: 'counterclockwise' }, { value: 'cw', label: 'clockwise' }],
    value: 'ccw', aria: 'which way round the electron goes, seen from above',
  });
  const CX = 540, CY = 350, RX = 196, RY = 68, EA = -0.72;
  const KW = [150, 232], KH = [140, 210];              /* the two field lines that close through the loop */
  const NUC = [[-15, -9], [13, -7], [0, 12], [-4, -20], [20, 9], [-22, 6]];

  function draw() {
    const { ctx } = begin(d.c);
    const cc = C('current'), fc = C('magnetic-field');
    const orbit = modelC.value === 'orbit', ccw = wayC.value === 'ccw';
    /* an electron going counterclockwise seen from above is a clockwise
       conventional current, and the right hand then puts the north pole below */
    const nUp = !ccw;
    const lab = labeller(ctx, 620); lab.block(0, 0, 1400, 96);
    lab.block(900, 200, 1370, 420);
    /* the field, closing through the loop: no arrowhead on a line that closes on
       itself, the letters N and S saying which way it runs */
    ctx.save(); ctx.strokeStyle = alpha(fc, 0.85); ctx.lineWidth = 3;
    for (let k = 0; k < 2; k++) {
      ctx.beginPath();
      for (let i = 0; i <= 90; i++) {
        const t = (i / 90) * TAU;
        const x = CX + KW[k] * Math.sin(t), y = CY - KH[k] * Math.cos(t);
        i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
      }
      ctx.stroke();
    }
    ctx.restore();
    const ring = orbit ? { rx: RX, ry: RY } : { rx: 76, ry: 26 };
    if (orbit) {
      ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.5); ctx.lineWidth = 3; ctx.setLineDash([9, 9]);
      ctx.beginPath(); ctx.ellipse(CX, CY, ring.rx, ring.ry, 0, 0, TAU); ctx.stroke(); ctx.restore();
      NUC.forEach((p, i) => dot(ctx, CX + p[0], CY + p[1], F.el(i % 2 ? 'n0' : 'p+'), true, 13));
      dot(ctx, CX + ring.rx * Math.cos(EA), CY + ring.ry * Math.sin(EA), F.el('e-'), true, 15);
    } else {
      /* the electron itself, pictured as a ball of charge turning about its axis */
      ctx.save(); ctx.fillStyle = alpha(F.el('e-'), 0.3); ctx.strokeStyle = F.el('e-'); ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(CX, CY, 80, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
      ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.45); ctx.lineWidth = 2.5; ctx.setLineDash([8, 8]);
      ctx.beginPath(); ctx.ellipse(CX, CY, 80, 27, 0, 0, TAU); ctx.stroke(); ctx.restore();
      text(ctx, 'e\u207B', CX, CY - 14, PAL.ink, { size: 26, weight: 700, align: 'center' });
    }
    /* the conventional current, round the loop against the electron's own travel */
    const crx = ring.rx + 22, cry = ring.ry + 15;
    ctx.save(); ctx.strokeStyle = cc; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.ellipse(CX, CY, crx, cry, 0, 0, TAU); ctx.stroke(); ctx.restore();
    const cur = ccw ? 1 : -1;                          /* the conventional current runs the other way from the electron */
    [0.25, 0.75].forEach((f) => {
      const t = TAU * f, dt = 0.18 * cur;
      arrow(ctx, CX + crx * Math.cos(t - dt), CY + cry * Math.sin(t - dt), CX + crx * Math.cos(t + dt), CY + cry * Math.sin(t + dt), cc, 4);
    });
    /* the poles of the loop, on its two faces */
    text(ctx, nUp ? 'N' : 'S', CX, CY - KH[1] + 34, PAL.ink, { size: 32, weight: 700, align: 'center', bg: PAL.panel });
    text(ctx, nUp ? 'S' : 'N', CX, CY + KH[1] - 34, PAL.ink, { size: 32, weight: 700, align: 'center', bg: PAL.panel });
    if (orbit) {
      lab.add('the electron', CX + ring.rx * Math.cos(EA), CY + ring.ry * Math.sin(EA), 0.8, -0.6, PAL.ink, 19, 26);
      lab.add('the nucleus', CX, CY + 14, -0.85, 0.53, PAL.ink, 19, 44);
    } else {
      lab.add('the electron, as a spinning ball of charge', CX, CY + 80, 0, 1, PAL.ink, 19, 30);
    }
    lab.add('the conventional current', CX - crx, CY, -1, 0, cc, 19, 26);
    lab.add('the field of the loop', CX - KW[1] * 0.72, CY - KH[1] * 0.69, -0.72, -0.69, fc, 19, 26);
    lab.flush();
    const say = [
      orbit ? 'The electron goes round the nucleus ' + (ccw ? 'counterclockwise' : 'clockwise') : 'The electron turns about its axis ' + (ccw ? 'counterclockwise' : 'clockwise'),
      'as seen from above, and because its charge is negative the',
      'conventional current runs the other way round. Whichever',
      'model is drawn and whichever way the charge goes, the loop',
      'has a north pole on one face and a south pole on the other,',
      'and never one of them by itself.',
    ];
    say.forEach((t, i) => text(ctx, t, 1120, 240 + i * 30, PAL.muted, { size: 17, align: 'center' }));
    topline(ctx, `An electron going ${ccw ? 'counterclockwise' : 'clockwise'} ${orbit ? 'round the nucleus' : 'about its own axis'}, seen from above, is a ${ccw ? 'clockwise' : 'counterclockwise'} current, and the loop has its north pole on its ${nUp ? 'upper' : 'lower'} face.`);
    readout(d.readout,
      `\\text{the electron goes } \\text{${ccw ? 'counterclockwise' : 'clockwise'}} \\qquad \\kIcur \\text{ runs } \\text{${ccw ? 'clockwise' : 'counterclockwise'}} \\qquad \\text{N on the ${nUp ? 'upper' : 'lower'} face}`,
      'A current loop always makes a pair of poles, which is why no amount of searching inside matter turns up a north pole standing on its own.');
  }
  register(d.fig, { update: () => {}, draw });
  hover(d.stage, () => (modelC.value === 'orbit'
    ? NUC.map((p, i) => ({ x: CX + p[0], y: CY + p[1], r: 14, name: i % 2 ? 'a neutron of the nucleus' : 'a proton of the nucleus' }))
      .concat([{ x: CX + RX * Math.cos(EA), y: CY + RY * Math.sin(EA), r: 16, name: 'the electron, going round the nucleus' }])
    : [{ x: CX, y: CY, r: 80, name: 'the electron, pictured as a spinning ball of charge' }]));
})();

};
