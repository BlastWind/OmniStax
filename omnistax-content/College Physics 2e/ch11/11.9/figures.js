/* Figures for section 11.9 Pressures in the Body. Boots against the section's text article.
   Five figures are still pictures that answer their sliders and choices and
   register no cycle: a table of pressures, a circuit of pressures, a standing
   person, an eye. One, the breath, has a clock in it and moves. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['11.9'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, select, hover, register, cycle, begin, line, arrow, dot, text, topline, vbracket, strip, axes, pinned, curve } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const G = 9.80, MMHG = 133, RHO_BLOOD = 1050, RHO_HG = 13.6e3, TAU = 2 * Math.PI;
/* a value that rounds to nothing at d decimals is nothing, so that no reading shows a signed zero */
const eps = (v, d) => (Math.abs(v) < 0.5 * Math.pow(10, -d) ? 0 : v);
/* a number written with the typographic minus, and one that always carries its sign */
const num = (v, d) => { const x = eps(v, d); return (x < 0 ? '−' : '') + fmt(Math.abs(x), d); };
const plus = (v, d) => { const x = eps(v, d); return (x < 0 ? '−' : x > 0 ? '+' : '') + fmt(Math.abs(x), d); };
/* a number in LaTeX scientific notation, d significant decimals in the mantissa */
function sci(v, d) {
  if (v === 0) return '0';
  const e = Math.floor(Math.log10(Math.abs(v))); let m = v / Math.pow(10, e);
  if (Math.abs(+m.toFixed(d)) >= 10) { m /= 10; return `${(m).toFixed(d)}\\times 10^{${e + 1}}`; }
  return `${m.toFixed(d)}\\times 10^{${e}}`;
}
/* the LaTeX minus for a signed quantity written into an equation */
const ltx = (v, d) => { const x = eps(v, d); return (x < 0 ? '-' : '') + fmt(Math.abs(x), d); };
/* a list of names in prose: "a", "a and b", "a, b and c" */
const listOf = (xs) => (xs.length <= 1 ? xs.join('') : xs.slice(0, -1).join(', ') + ' and ' + xs[xs.length - 1]);
/* blood, which is red: bright where it carries oxygen and dark where it returns to the heart (rule 7, the physical fact) */
const BLOOD = '#C93A2E', BLOOD_DARK = '#7B2A3B';
/* a rounded rectangle path */
function rrect(ctx, x, y, w, h, r) {
  ctx.beginPath(); ctx.moveTo(x + r, y); ctx.lineTo(x + w - r, y); ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r); ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h); ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r); ctx.lineTo(x, y + r); ctx.quadraticCurveTo(x, y, x + r, y); ctx.closePath();
}
/* a label with a dotted leader back to the thing it names */
function leader(ctx, s, x, y, tx, ty, color, align) {
  line(ctx, tx, ty, x + (align === 'right' ? 8 : align === 'left' ? -8 : 0), y, alpha(color, 0.5), 1.5, [5, 6]);
  text(ctx, s, x, y, color, { size: 18, align: align || 'left', bg: alpha(PAL.panel, 0.9) });
}
/* the units a gauge pressure may be written in, from the mm Hg the table quotes */
const UNITS = {
  mmhg: { label: 'mm Hg', k: 1, dec: 0, tick: 0 },
  kpa: { label: 'kPa', k: MMHG / 1000, dec: 1, tick: 1 },
  cmh2o: { label: 'cm of water', k: 1.36, dec: 0, tick: 0 },
  atm: { label: 'atm', k: 1 / 760, dec: 3, tick: 3 },
};

/* =====================================================================
   SIM: the pressures of Table 11.5 on one axis. Thirteen range bars, each a
   gauge pressure in the pressure hue, with a pressure of the reader's
   choosing placed among them and the axis written in the unit the reader
   picks. Still: a table of typical values has no time in it.
===================================================================== */
(function () {
  const d = sim('sim-body-pressures', 660);
  const ps = ctl(d.controls, { label: '\\kPg', cls: 'pressure', min: -10, max: 150, step: 1, value: 120, unit: 'mm Hg', dec: 0, aria: 'a gauge pressure to place among the pressures of the table', detents: [12, 24, 80, 85, 120] });
  const us = choice(d.controls, { label: '\\text{the unit}', options: [{ value: 'mmhg', label: 'mm Hg' }, { value: 'kpa', label: 'kPa' }, { value: 'cmh2o', label: 'cm of water' }, { value: 'atm', label: 'atm' }], value: 'mmhg', aria: 'the unit the axis is written in' });
  /* the rows of Table 11.5, the book's ranges in mm Hg; a single value is a range of no width */
  const ROWS = [
    ['Large arteries, systolic', 100, 140, 'the large arteries at systole'],
    ['Large arteries, diastolic', 60, 90, 'the large arteries at diastole'],
    ['Large veins', 4, 15, 'the large veins'],
    ['Eye', 12, 24, 'the eye'],
    ['Brain and spinal fluid, lying down', 5, 12, 'the brain and spinal fluid'],
    ['Bladder, while filling', 0, 25, 'the bladder while it fills'],
    ['Bladder, when full', 100, 150, 'the full bladder'],
    ['Chest cavity, between lungs and ribs', -8, -4, 'the chest cavity'],
    ['Inside the lungs', -2, 3, 'the lungs'],
    ['Esophagus', -2, -2, 'the esophagus'],
    ['Stomach', 0, 20, 'the stomach'],
    ['Intestines', 10, 20, 'the intestines'],
    ['Middle ear, less than', 0, 1, 'the middle ear'],
  ];
  /* the axis is fixed from −10 to 150 mm Hg in ticks of 20, whatever unit it is written in, and never rescales */
  const box = { l: 500, r: 1340, t: 118, b: 598 }, X0 = -10, X1 = 150, RH = (box.b - box.t) / ROWS.length;
  const X = (v) => box.l + ((v - X0) / (X1 - X0)) * (box.r - box.l);
  const rowY = (i) => box.t + (i + 0.5) * RH;
  hover(d.stage, () => ROWS.flatMap(([nm, lo, hi], i) => {
    const hits = [], y = rowY(i), a = X(lo), b = Math.max(X(hi), a + 8);
    for (let x = a; x <= b + 1; x += 28) hits.push({ x: Math.min(x, b), y, r: 18, name: nm + ': ' + (lo === hi ? num(lo, 0) : num(lo, 0) + ' to ' + num(hi, 0)) + ' mm Hg' });
    return hits;
  }));
  function draw() {
    const { ctx } = begin(d.c);
    const pc = C('pressure'), u = UNITS[us.value], P = ps.v;
    const inU = (v) => num(v * u.k, u.dec) + ' ' + u.label;
    /* the frame: gridlines every 20 mm Hg, written in the chosen unit, and the zero of gauge pressure */
    for (let v = X0 + 10; v <= X1; v += 20) {
      line(ctx, X(v), box.t, X(v), box.b, v === 0 ? PAL.muted : PAL.rule, v === 0 ? 2 : 1.5);
      text(ctx, num(v * u.k, u.tick), X(v), box.b + 24, PAL.muted, { size: 17, align: 'center' });
    }
    line(ctx, box.l, box.b, box.r, box.b, PAL.muted, 2);
    text(ctx, 'gauge pressure (' + u.label + ')', box.r, box.b + 54, pc, { size: 20, weight: 600, align: 'right' });
    text(ctx, 'atmospheric pressure', X(0), box.b + 46, PAL.muted, { size: 17, align: 'center' });
    /* the thirteen rows, each a pressure and so in the pressure hue, told apart by the names at the left */
    const inside = [];
    ROWS.forEach(([nm, lo, hi, prose], i) => {
      const y = rowY(i), a = X(lo), b = X(hi), hit = P >= lo && P <= hi;
      if (hit) inside.push(prose);
      text(ctx, nm, box.l - 16, y, PAL.ink, { size: 18, align: 'right' });
      ctx.save(); ctx.fillStyle = alpha(pc, hit ? 0.6 : 0.3); ctx.strokeStyle = pc; ctx.lineWidth = 2;
      if (hi > lo) { rrect(ctx, a, y - 11, b - a, 22, 6); ctx.fill(); ctx.stroke(); }
      else { line(ctx, a, y - 12, a, y + 12, pc, 4); }
      ctx.restore();
    });
    /* the pressure the reader has placed among them */
    line(ctx, X(P), box.t - 2, X(P), box.b, pc, 3, [10, 10]);
    text(ctx, 'P_g = ' + num(P, 0) + ' mm Hg', X(P) + (P > 110 ? -12 : 12), box.t - 14, pc, { size: 20, weight: 600, align: P > 110 ? 'right' : 'left', bg: alpha(PAL.panel, 0.9) });
    const said = u.label === 'mm Hg' ? num(P * MMHG / 1000, 1) + ' kPa' : inU(P);
    const where = inside.length ? 'falls within the range of ' + listOf(inside) + '.' : P < -8 ? 'lies below every pressure of the table.' : P > 150 ? 'lies above every pressure of the table.' : 'falls within no range of the table.';
    topline(ctx, 'A gauge pressure of ' + num(P, 0) + ' mm Hg, which is ' + said + ', ' + where);
    readout(d.readout, `\\kPg = ${ltx(P, 0)}\\ \\text{mm Hg} = ${ltx(P, 0)}\\times 133\\ \\text{N/m}^2 = ${P === 0 ? '0' : sci(P * MMHG, 2)}\\ \\text{N/m}^2` + (u.label === 'mm Hg' ? '' : ` = ${ltx(P * u.k, u.dec)}\\ \\text{${u.label}}`),
      'Every pressure of the table is a gauge pressure, measured from atmospheric pressure at zero, so the chest cavity, the esophagus and the lungs while breathing in lie below zero. The whole table spans about 160 mm Hg, which is 21 kPa, 220 cm of water or a fifth of an atmosphere.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 11.34: the circulatory system with its typical pressures. The two
   loops with the heart between them, a station the reader chooses, and the
   pressure at every station laid on one axis beside the loop in circuit
   order. Still: it states the pressure at each point of the circuit, and the
   flow between them is Chapter 12's; the chapter's config keeps it so.
===================================================================== */
(function () {
  const d = sim('sim-circulation', 760);
  /* the stations the book gives a number to, in circuit order from the left side of the heart */
  const ST = [
    { id: 'aorta', name: 'aorta', P: 120, x: 680, y: 400, side: 'top', head: 'Blood leaves the left side of the heart into the aorta at about 120 mm Hg, the highest pressure in the circuit.', small: 'This is the pressure a cuff on the arm reads at systole, and aortal or arterial pressure is the only one in the circuit that can be measured without threading a catheter into the body.' },
    { id: 'small', name: 'small arteries', P: 85, x: 740, y: 500, side: 'right', head: 'In the small arteries the pressure has fallen to about 85 mm Hg, 35 mm Hg below the aorta.' },
    { id: 'arterioles', name: 'arterioles', P: 35, x: 740, y: 620, side: 'right', head: 'In the arterioles the pressure is about 35 mm Hg, and most of the fall from the aorta has happened by here.' },
    { id: 'venules', name: 'venules', P: 15, x: 140, y: 620, side: 'left', head: 'In the venules, just past the capillaries, the pressure is about 15 mm Hg.' },
    { id: 'cavae', name: 'vena cavae', P: 4, x: 140, y: 470, side: 'left', head: 'In the vena cavae the blood returns to the right side of the heart at about 4 mm Hg, almost zero.' },
    { id: 'pulm-artery', name: 'pulmonary artery', P: 25, x: 398, y: 265, side: 'left', head: 'The right side of the heart pumps the blood into the pulmonary artery at about 25 mm Hg, on its way to the lungs.', small: 'The right side of the heart is the pump for the lungs alone, and it raises the pressure far less than the left side does.' },
    { id: 'pulm-veins', name: 'pulmonary veins', P: 8, x: 482, y: 265, side: 'right', head: 'The blood returns from the lungs through the pulmonary veins at about 8 mm Hg, to be pumped by the left side of the heart.' },
  ];
  const st = select(d.controls, { label: '\\text{the station}', options: ST.map((s) => ({ value: s.id, label: s.name })), value: 'aorta', aria: 'the station of the circuit whose pressure is read' });
  const lab = choice(d.controls, { label: '\\text{labels}', options: [{ value: 'off', label: 'off' }, { value: 'on', label: 'on' }], value: 'off', aria: 'whether the parts of the circuit are named on the drawing' });
  /* the heart, the two loops and the lungs on the canvas */
  const HX = 440, HY = 400, HW = 80, HH = 130;                         /* the heart: two halves, each HW wide, HH tall */
  const LOOP = { l: 140, r: 740, b: 680, y: HY }, PL = { l: 398, r: 482, top: 200 };   /* the systemic loop and the pulmonary loop */
  const NAMES = [
    ['right atrium', HX - HW / 2, HY - 38], ['right ventricle', HX - HW / 2, HY + 40], ['left atrium', HX + HW / 2, HY - 38], ['left ventricle', HX + HW / 2, HY + 40],
    ['lungs', HX, 160], ['capillaries', HX, LOOP.b], ['veins', LOOP.l, 545], ['aorta', 680, LOOP.y], ['small arteries', LOOP.r, 500], ['arterioles', LOOP.r, 620],
    ['venules', LOOP.l, 620], ['vena cavae', LOOP.l, 470], ['pulmonary artery', PL.l, 265], ['pulmonary veins', PL.r, 265],
  ];
  hover(d.stage, () => NAMES.map(([name, x, y]) => ({ x, y, r: 30, name })));
  /* a tube of blood along a path, its wall in ink and the blood inside it */
  function tube(ctx, pts, color, w) {
    ctx.save(); ctx.lineCap = 'butt'; ctx.lineJoin = 'round';
    for (const [c, lw] of [[PAL.ink, w + 6], [color, w]]) { ctx.strokeStyle = c; ctx.lineWidth = lw; ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.stroke(); }
    ctx.restore();
  }
  /* a fixed arrowhead on a tube, saying which way the blood goes */
  function head(ctx, x, y, dx, dy) { arrow(ctx, x - 14 * dx, y - 14 * dy, x + 14 * dx, y + 14 * dy, PAL.panel, 4); }
  function draw() {
    const { ctx } = begin(d.c);
    const pc = C('pressure'), cur = ST.find((s) => s.id === st.value), W = 22;
    /* the lungs, two lobes in ink above the heart */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
    for (const s of [-1, 1]) { ctx.beginPath(); ctx.ellipse(HX + s * 62, 160, 52, 62, 0, 0, TAU); ctx.fill(); ctx.stroke(); }
    ctx.restore();
    /* the systemic loop: bright blood from the left ventricle down the right side and along the bottom to the capillaries, dark blood back up the left side to the right atrium */
    tube(ctx, [[HX + HW, LOOP.y], [LOOP.r, LOOP.y], [LOOP.r, LOOP.b], [HX + 60, LOOP.b]], BLOOD, W);
    tube(ctx, [[HX - 60, LOOP.b], [LOOP.l, LOOP.b], [LOOP.l, LOOP.y], [HX - HW, LOOP.y]], BLOOD_DARK, W);
    /* the capillary bed between them, where bright blood becomes dark */
    ctx.save(); ctx.lineWidth = 4; ctx.lineCap = 'round';
    for (let k = -3; k <= 3; k++) {
      const g = ctx.createLinearGradient(HX + 60, 0, HX - 60, 0); g.addColorStop(0, BLOOD); g.addColorStop(1, BLOOD_DARK);
      ctx.strokeStyle = g; ctx.beginPath(); ctx.moveTo(HX + 60, LOOP.b - 8 + k * 3);
      for (let x = HX + 50; x >= HX - 60; x -= 10) ctx.lineTo(x, LOOP.b + k * 9 + (x % 20 === 0 ? 5 : -5) * Math.sin(k));
      ctx.stroke();
    }
    ctx.restore();
    /* the pulmonary loop: dark blood from the right ventricle up to the lungs, bright blood back down to the left atrium */
    tube(ctx, [[PL.l, HY - HH / 2 + 4], [PL.l, PL.top]], BLOOD_DARK, W);
    tube(ctx, [[PL.r, PL.top], [PL.r, HY - HH / 2 + 4]], BLOOD, W);
    /* the heart: the right side dark, the left side bright, atria above the ventricles */
    ctx.save(); ctx.lineWidth = 4; ctx.strokeStyle = PAL.ink;
    ctx.fillStyle = BLOOD_DARK; rrect(ctx, HX - HW, HY - HH / 2, HW, HH, 22); ctx.fill(); ctx.stroke();
    ctx.fillStyle = BLOOD; rrect(ctx, HX, HY - HH / 2, HW, HH, 22); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = alpha(PAL.panel, 0.8); ctx.lineWidth = 3; ctx.setLineDash([8, 8]); ctx.beginPath(); ctx.moveTo(HX - HW + 8, HY); ctx.lineTo(HX + HW - 8, HY); ctx.stroke();
    ctx.restore();
    /* which way the blood goes: fixed arrowheads, since the flow itself is Chapter 12's subject */
    head(ctx, 600, LOOP.y, 1, 0); head(ctx, LOOP.r, 560, 0, 1); head(ctx, 600, LOOP.b, -1, 0); head(ctx, 280, LOOP.b, -1, 0); head(ctx, LOOP.l, 545, 0, -1); head(ctx, 300, LOOP.y, 1, 0);
    head(ctx, PL.l, 300, 0, -1); head(ctx, PL.r, 300, 0, 1);
    /* the two pumps */
    text(ctx, 'right side', HX - HW / 2, HY + 88, PAL.ink, { size: 17, align: 'center' }); text(ctx, 'left side', HX + HW / 2, HY + 88, PAL.ink, { size: 17, align: 'center' });
    text(ctx, 'the heart, two pumps', HX, HY + 114, PAL.ink, { size: 17, align: 'center' });
    /* the stations and their pressures; the chosen one is filled and the others hollow */
    for (const s of ST) {
      const on = s === cur;
      dot(ctx, s.x, s.y, on ? pc : PAL.ink, on, on ? 11 : 8);
      const px = s.side === 'left' ? s.x - 26 : s.side === 'right' ? s.x + 26 : s.x, py = s.side === 'top' ? s.y - 34 : s.y;
      text(ctx, num(s.P, 0) + ' mm Hg', px, py, pc, { size: on ? 21 : 18, weight: 600, align: s.side === 'left' ? 'right' : s.side === 'right' ? 'left' : 'center', bg: alpha(PAL.panel, 0.9) });
    }
    /* the parts named, when asked for */
    if (lab.value === 'on') {
      leader(ctx, 'lungs', HX + 130, 130, HX + 100, 145, PAL.ink, 'left');
      leader(ctx, 'capillaries', HX, LOOP.b + 46, HX, LOOP.b + 14, PAL.ink, 'center');
      leader(ctx, 'veins', LOOP.l - 26, 545, LOOP.l - 12, 545, PAL.ink, 'right');
      leader(ctx, 'aorta', 680, LOOP.y + 36, 680, LOOP.y + 12, PAL.ink, 'center');
      leader(ctx, 'small arteries', LOOP.r + 26, 530, LOOP.r + 12, 510, PAL.ink, 'left');
      leader(ctx, 'arterioles', LOOP.r + 26, 650, LOOP.r + 12, 630, PAL.ink, 'left');
      leader(ctx, 'venules', LOOP.l - 26, 650, LOOP.l - 12, 630, PAL.ink, 'right');
      leader(ctx, 'vena cavae', LOOP.l - 26, 500, LOOP.l - 12, 480, PAL.ink, 'right');
      leader(ctx, 'pulmonary artery', PL.l - 26, 300, PL.l - 12, 280, PAL.ink, 'right');
      leader(ctx, 'pulmonary veins', PL.r + 26, 300, PL.r + 12, 280, PAL.ink, 'left');
      leader(ctx, 'right atrium', HX - HW - 22, HY - 46, HX - HW + 4, HY - 40, PAL.ink, 'right'); leader(ctx, 'right ventricle', HX - HW - 22, HY + 46, HX - HW + 4, HY + 40, PAL.ink, 'right');
      leader(ctx, 'left atrium', HX + HW + 22, HY - 46, HX + HW - 4, HY - 40, PAL.ink, 'left'); leader(ctx, 'left ventricle', HX + HW + 22, HY + 46, HX + HW - 4, HY + 40, PAL.ink, 'left');
    }
    /* the profile beside the loop: the pressure at each station in circuit order, on a fixed axis 0 to 140 mm Hg, and the two rises the pumps make */
    const box = { l: 1040, r: 1350, t: 150, b: 610 }, X = (v) => box.l + (v / 140) * (box.r - box.l), RH = (box.b - box.t) / ST.length;
    for (let v = 0; v <= 140; v += 20) { line(ctx, X(v), box.t, X(v), box.b, v ? PAL.rule : PAL.muted, v ? 1.5 : 2); text(ctx, fmt(v, 0), X(v), box.b + 24, PAL.muted, { size: 17, align: 'center' }); }
    line(ctx, box.l, box.b, box.r, box.b, PAL.muted, 2);
    text(ctx, 'gauge pressure (mm Hg)', box.r, box.b + 54, pc, { size: 20, weight: 600, align: 'right' });
    text(ctx, 'around the circuit, from the left side of the heart', box.l, box.t - 24, PAL.muted, { size: 17 });
    ST.forEach((s, i) => {
      const y = box.t + (i + 0.5) * RH, on = s === cur;
      text(ctx, s.name, box.l - 14, y, on ? PAL.ink : PAL.muted, { size: 18, align: 'right', weight: on ? 600 : 400 });
      ctx.save(); ctx.fillStyle = alpha(pc, on ? 0.65 : 0.3); ctx.strokeStyle = pc; ctx.lineWidth = 2; rrect(ctx, box.l, y - 12, Math.max(X(s.P) - box.l, 4), 24, 5); ctx.fill(); ctx.stroke(); ctx.restore();
      if (on) text(ctx, num(s.P, 0), X(s.P) + 10, y, pc, { size: 18, weight: 600 });
    });
    /* the pumps: from the vena cavae up to the pulmonary artery, and from the pulmonary veins back up to the aorta */
    const yOf = (i) => box.t + (i + 0.5) * RH;
    arrow(ctx, X(4) + 6, yOf(4) + 6, X(25) - 4, yOf(5) - 8, pc, 3); text(ctx, 'the right side pumps', X(25) + 40, (yOf(4) + yOf(5)) / 2 + 2, PAL.muted, { size: 16 });
    arrow(ctx, X(8) + 8, yOf(6) - 4, X(120) - 6, yOf(0) + 12, pc, 3); text(ctx, 'the left side pumps', X(60), (yOf(0) + yOf(6)) / 2 - 40, PAL.muted, { size: 16, align: 'center', bg: alpha(PAL.panel, 0.9) });
    topline(ctx, cur.head);
    const lost = 120 - cur.P;
    readout(d.readout, `\\kPg = ${fmt(cur.P, 0)}\\ \\text{mm Hg} = ${fmt(cur.P, 0)}\\times 133\\ \\text{N/m}^2 = ${sci(cur.P * MMHG, 2)}\\ \\text{N/m}^2`,
      cur.small || 'By the ' + cur.name + ' the blood has lost ' + fmt(lost, 0) + ' of the 120 mm Hg it left the aorta with. The pressure falls all the way around each loop because the blood flows, and only the two pumps of the heart raise it again.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: the column of blood in a standing person. A point on the body is
   chosen by its depth below the heart, and the pressure there differs from
   the heart's by the weight of the blood between them. Still: a person
   standing or lying still is a static column of blood, which is what the
   text calculates.
===================================================================== */
(function () {
  const d = sim('sim-blood-column', 700);
  const hs = ctl(d.controls, { label: '\\kdh', cls: 'position', min: -0.4, max: 1.4, step: 0.05, value: 1.4, unit: 'm', dec: 2, aria: 'the depth of the point below the heart, negative above it', detents: [-0.4, 0, 1.4] });
  const pose = choice(d.controls, { label: '\\text{posture}', options: [{ value: 'standing', label: 'standing' }, { value: 'lying', label: 'lying down' }], value: 'standing', aria: 'whether the person stands or lies down' });
  /* the person is 1.80 m tall with the heart 1.40 m above the feet, which is the book's distance; SC is canvas units per meter */
  const SC = 290, HEART = 1.4, TOP = 1.8, GY = 640, BX = 330, BEDY = 420, BEDX = 110;
  /* a person drawn along an axis: u runs from the feet (0) towards the head, v is across the body; the frame is rotated so the same drawing stands and lies */
  function body(ctx, ox, oy, ux, uy) {
    const P = (u, v) => [ox + u * SC * ux - v * SC * uy, oy + u * SC * uy + v * SC * ux];
    const seg = (a, b, w) => { const [x1, y1] = P(...a), [x2, y2] = P(...b); line(ctx, x1, y1, x2, y2, PAL.ink, w); };
    ctx.save(); ctx.lineCap = 'round';
    seg([0, -0.09], [0.96, -0.09], 9); seg([0, 0.09], [0.96, 0.09], 9);                  /* legs */
    seg([0, -0.09], [0, -0.16], 7); seg([0, 0.09], [0, 0.16], 7);                       /* feet */
    ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 6;             /* torso */
    ctx.beginPath(); const pts = [[0.92, -0.16], [1.5, -0.22], [1.5, 0.22], [0.92, 0.16]]; pts.forEach(([u, v], i) => { const [x, y] = P(u, v); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }); ctx.closePath(); ctx.fill(); ctx.stroke();
    seg([1.47, -0.22], [0.95, -0.3], 7); seg([1.47, 0.22], [0.95, 0.3], 7);              /* arms */
    seg([1.5, 0], [1.58, 0], 8);                                                          /* neck */
    const [hx, hy] = P(1.69, 0); ctx.beginPath(); ctx.arc(hx, hy, 0.11 * SC, 0, TAU); ctx.fill(); ctx.stroke();   /* head */
    ctx.restore();
    return P;
  }
  function draw() {
    const { ctx } = begin(d.c);
    const pc = C('pressure'), xc = C('position'), standing = pose.value === 'standing';
    const dh = hs.v, dhEff = standing ? dh : 0, dP = dhEff * RHO_BLOOD * G, dPmm = dP / MMHG;
    const where = Math.abs(dh - 1.4) < 1e-6 ? 'the feet' : Math.abs(dh + 0.4) < 1e-6 ? 'the top of the head' : Math.abs(dh) < 1e-6 ? 'the heart' : 'a point ' + fmt(Math.abs(dh), 2) + ' m ' + (dh > 0 ? 'below' : 'above') + ' the heart';
    if (standing) {
      strip(ctx, 60, 620, GY + 14, 24);
      const P = body(ctx, BX, GY, 0, -1);
      const [, hy] = P(HEART, 0), [, py] = P(HEART - dh, 0);
      /* the column of blood between the heart and the point, and its depth */
      ctx.save(); ctx.fillStyle = alpha(BLOOD, 0.3); ctx.fillRect(BX - 13, Math.min(hy, py), 26, Math.abs(py - hy)); ctx.restore();
      dot(ctx, BX, hy, BLOOD, true, 9); text(ctx, 'the heart', BX + 0.24 * SC + 16, hy, PAL.ink, { size: 18, bg: alpha(PAL.panel, 0.9) });
      dot(ctx, BX, py, xc, true, 9);
      /* the scale of depth below the heart beside the person */
      const SX = 560; line(ctx, SX, P(TOP, 0)[1], SX, GY, PAL.muted, 2);
      for (let v = -0.4; v <= 1.41; v += 0.2) { const y = hy + v * SC; line(ctx, SX - 8, y, SX + 8, y, PAL.muted, 2); text(ctx, plus(v, 1) + ' m', SX + 16, y, PAL.muted, { size: 16 }); }
      text(ctx, 'depth below the heart', SX - 60, GY + 44, xc, { size: 17, weight: 600 });
      line(ctx, BX + 13, py, SX, py, xc, 2, [4, 8]);
      if (Math.abs(dh) > 0.02) vbracket(ctx, 200, Math.min(hy, py), Math.max(hy, py), xc, 'Δh = ' + num(dh, 2) + ' m', -1);
      else text(ctx, 'Δh = 0', 184, hy, xc, { size: 22, weight: 600, align: 'right' });
    } else {
      ctx.save(); ctx.fillStyle = PAL.soft; rrect(ctx, 60, BEDY - 0.34 * SC, 610, 0.68 * SC, 18); ctx.fill(); ctx.restore();
      text(ctx, 'the bed, seen from above', 70, BEDY + 0.34 * SC + 26, PAL.muted, { size: 17 });
      const P = body(ctx, BEDX, BEDY, 1, 0);
      const [hx, hy] = P(HEART, 0), [px] = P(HEART - dh, 0);
      line(ctx, 40, hy, 700, hy, xc, 2, [10, 10]);
      text(ctx, 'the level of the heart', 60, hy - 60, xc, { size: 18, weight: 600, bg: alpha(PAL.panel, 0.9) });
      dot(ctx, hx, hy, BLOOD, true, 9); text(ctx, 'the heart', hx, hy - 34 - 0.22 * SC, PAL.ink, { size: 18, align: 'center', bg: alpha(PAL.panel, 0.9) });
      dot(ctx, px, hy, xc, true, 9);
      text(ctx, 'Δh = 0', px, hy + 0.3 * SC + 26, xc, { size: 22, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.9) });
    }
    /* the graph beside the person: the difference in pressure against the depth, on fixed axes from the slider range */
    const box = { l: 800, r: 1330, t: 130, b: 560 };
    const { X, Y } = axes(ctx, box, [-0.4, 1.4], [-40, 120], { xl: 'depth below the heart Δh (m)', yl: 'increase in pressure ΔP (mm Hg)', xc: xc, yc: pc, nx: 9, ny: 4, fx: (v) => num(v, 1), fy: (v) => num(v, 0) });
    curve(ctx, (h) => (h * RHO_BLOOD * G) / MMHG, -0.4, 1.4, X, Y, pc, 4, 2);
    text(ctx, 'ΔP = Δhρg', X(0.6), Y(75), pc, { size: 20, weight: 600, bg: alpha(PAL.panel, 0.9) });
    const pt = pinned(ctx, box, X, Y, dhEff, dPmm, pc);
    line(ctx, pt.x, pt.y, pt.x, box.b, alpha(pc, 0.5), 2, [4, 8]); line(ctx, box.l, pt.y, pt.x, pt.y, alpha(pc, 0.5), 2, [4, 8]);
    text(ctx, plus(dPmm, 0) + ' mm Hg', pt.x + (dhEff > 1.0 ? -16 : 16), pt.y - 24, pc, { size: 20, weight: 600, align: dhEff > 1.0 ? 'right' : 'left', bg: alpha(PAL.panel, 0.9) });
    topline(ctx, !standing ? 'Lying down, every point of the body is at the level of the heart, so the weight of the blood adds nothing to the pressure anywhere.'
      : Math.abs(dh) < 1e-6 ? 'At the level of the heart there is no column of blood to add its weight, so the pressure is the heart’s own.'
      : dh > 0 ? 'Standing, ' + where + (where === 'the feet' ? ' are' : ' is') + ' ' + fmt(dh, 2) + ' m below the heart, and the pressure of the blood there is ' + fmt(dPmm, 0) + ' mm Hg higher than at the heart.'
      : 'Standing, ' + where + ' is ' + fmt(-dh, 2) + ' m above the heart, and the pressure of the blood there is ' + fmt(-dPmm, 0) + ' mm Hg lower than at the heart.');
    readout(d.readout, `\\kdPr = \\kdh\\krho\\kg = (${ltx(dhEff, 2)}\\ \\text{m})(1050\\ \\text{kg/m}^3)(9.80\\ \\text{m/s}^2) = ${dPmm === 0 ? '0' : sci(dP, 2)}\\ \\text{Pa} = ${ltx(dPmm, 0)}\\ \\text{mm Hg}`,
      standing ? 'The increase is the weight of the static column of blood between the heart and the point, standing on a unit of area, and it is the same in every vessel there whatever its size. Standing a long time lets blood accumulate in the legs under this pressure, which is why elastic bandages and tight stockings help the veins return it.'
        : 'The blood is still a fluid with weight, but no point of the body is above or below any other, so there is no column between the heart and the point. This is why the brain and spinal fluid pressure of Table 11.5 is quoted for a person lying down, and why the spinal manometer reads more when the person sits up.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: the force on the back of the eye. The fluid inside the eye presses
   outward everywhere; on the back of the eye its pushes add to one force,
   which is the weight of a mass resting on the eye. Still: a pressure held
   in the eye has no time in it.
===================================================================== */
(function () {
  const d = sim('sim-eye-force', 620);
  const ps = ctl(d.controls, { label: '\\kPg', cls: 'pressure', min: 0, max: 100, step: 0.5, value: 85, unit: 'mm Hg', dec: 1, aria: 'the pressure of the fluid inside the eye', detents: [12, 24, 85] });
  const as = ctl(d.controls, { label: 'A', cls: '', min: 3, max: 9, step: 0.5, value: 6, unit: 'cm²', dec: 1, aria: 'the area of the back of the eye' });
  const EX = 400, EY = 350, R = 165, KF = 15;                     /* the eye's centre and radius; KF is canvas units per newton */
  function draw() {
    const { ctx } = begin(d.c);
    const pc = C('pressure'), fc = C('force');
    const P = ps.v, A = as.v, h = P * 1e-3, Fv = h * RHO_HG * G * A * 1e-4, m = Fv / G;
    const half = Math.acos(1 - (A / 6) * 0.32);                   /* the back of the eye spans an arc whose size follows the area */
    /* the optic nerve leaving the back of the eye below the force, then the eyeball */
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.fillStyle = PAL.soft;
    ctx.beginPath(); ctx.moveTo(EX + R * Math.cos(0.42), EY + R * Math.sin(0.42)); ctx.lineTo(EX + R + 150, EY + 140); ctx.lineTo(EX + R + 150, EY + 176); ctx.lineTo(EX + R * Math.cos(0.68), EY + R * Math.sin(0.68)); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.fillStyle = PAL.panel; ctx.lineWidth = 5; ctx.beginPath(); ctx.arc(EX, EY, R, 0, TAU); ctx.fill(); ctx.stroke();
    /* the cornea bulging at the front, and the lens behind it */
    ctx.beginPath(); ctx.arc(EX - R + 62, EY, 82, Math.PI - 1.05, Math.PI + 1.05); ctx.stroke();
    ctx.lineWidth = 3; ctx.beginPath(); ctx.ellipse(EX - R + 66, EY, 12, 46, 0, 0, TAU); ctx.stroke();
    /* the back of the eye, the area A the pressure acts on */
    ctx.strokeStyle = PAL.ink; ctx.lineWidth = 12; ctx.beginPath(); ctx.arc(EX, EY, R, -half, half); ctx.stroke();
    ctx.restore();
    /* the fluid presses outward everywhere; the pushes on the back of the eye are the ones that add to the force */
    if (P > 0) {
      const L = 14 + P * 0.6;
      for (let a = -Math.PI; a < Math.PI - 1e-6; a += Math.PI / 12) {
        const back = Math.abs(a) <= half;
        if (!back && Math.abs(a) > Math.PI - 1.15) continue;      /* the cornea is drawn over the front */
        arrow(ctx, EX + (R - 14 - L) * Math.cos(a), EY + (R - 14 - L) * Math.sin(a), EX + (R - 14) * Math.cos(a), EY + (R - 14) * Math.sin(a), back ? pc : alpha(pc, 0.4), back ? 3.5 : 2.5);
      }
    }
    text(ctx, 'the fluid inside the eye', EX - 20, EY - 30, PAL.muted, { size: 17, align: 'center', bg: alpha(PAL.panel, 0.9) });
    text(ctx, 'P_g = ' + fmt(P, 1) + ' mm Hg', EX - 20, EY, pc, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.9) });
    /* the one force those pushes add to, on the back of the eye */
    if (Fv > 0.05) arrow(ctx, EX + R + 6, EY, EX + R + 6 + Fv * KF, EY, fc, 5);
    text(ctx, 'F = ' + fmt(Fv, 1) + ' N', EX + R + 20, EY - 30, fc, { size: 21, weight: 600, bg: alpha(PAL.panel, 0.9) });
    leader(ctx, 'the back of the eye, area A = ' + fmt(A, 1) + ' cm²', EX + R * Math.cos(-half) - 10, EY - R - 40, EX + R * Math.cos(-half) - 4, EY + R * Math.sin(-half) - 6, PAL.ink, 'right');
    leader(ctx, 'cornea', EX - R - 20, EY - 120, EX - R - 4, EY - 60, PAL.ink, 'right');
    leader(ctx, 'lens', EX - R - 20, EY + 130, EX - R + 60, EY + 48, PAL.ink, 'right');
    leader(ctx, 'optic nerve', EX + R + 70, EY + 210, EX + R + 60, EY + 150, PAL.ink, 'left');
    /* the same force as a weight: a mass resting on a pan */
    const MX = 1090, MY = 300;
    line(ctx, MX, MY + 8, MX, MY + 70, PAL.muted, 6); line(ctx, MX - 70, MY + 70, MX + 70, MY + 70, PAL.muted, 6);
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; rrect(ctx, MX - 90, MY - 6, 180, 14, 6); ctx.fill(); ctx.stroke();
    const bw = 40 + Math.cbrt(Math.max(m, 0.01)) * 70;
    ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; rrect(ctx, MX - bw / 2, MY - 6 - bw * 0.7, bw, bw * 0.7, 6); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, 'm = ' + fmt(m, 2) + ' kg', MX, MY - 6 - bw * 0.7 - 26, PAL.ink, { size: 20, weight: 600, align: 'center' });
    if (Fv > 0.05) arrow(ctx, MX, MY - bw * 0.35, MX, MY - bw * 0.35 + Fv * KF, fc, 5);
    text(ctx, 'w = mg = ' + fmt(Fv, 1) + ' N', MX + 24, MY + 40 + Math.min(Fv * KF, 100), fc, { size: 21, weight: 600, bg: alpha(PAL.panel, 0.9) });
    text(ctx, 'a mass whose weight is the same force, resting on the eye', MX, 560, PAL.muted, { size: 17, align: 'center' });
    const range = P >= 12 && P <= 24 ? ', within the normal range,' : P > 24 ? ', above the normal range,' : P > 0 ? ', below the normal range,' : '';
    topline(ctx, P === 0 ? 'With no pressure in the eye the fluid pushes on nothing, and the eye would not keep its shape.'
      : 'A pressure of ' + fmt(P, 1) + ' mm Hg' + range + ' on the ' + fmt(A, 1) + ' cm² at the back of the eye is a force of ' + fmt(Fv, 1) + ' N, the weight of a ' + fmt(m, 2) + ' kg mass resting on the eye.');
    readout(d.readout, `\\kF = \\kh\\krho\\kg A = (${fmt(P, 1)}\\times 10^{-3}\\ \\text{m})(13.6\\times 10^{3}\\ \\text{kg/m}^3)(9.80\\ \\text{m/s}^2)(${fmt(A, 1)}\\times 10^{-4}\\ \\text{m}^2) = ${fmt(Fv, 1)}\\ \\text{N}`,
      'The pressure is written as the height of the column of mercury it supports, ' + fmt(P, 1) + ' mm, so hρg with the density of mercury is the pressure in N/m², and the force is that pressure times the area. Intraocular pressure is normally 12.0 to 24.0 mm Hg; when the circulation of the fluid is blocked, glaucoma can raise it to 85.0 mm Hg, enough to damage the optic nerve.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 11.36: one breath. The diaphragm moves down and the chest expands,
   the pressure inside the lungs falls below atmospheric and air flows in;
   the muscles relax, surface tension in the alveoli raises the pressure
   above atmospheric and air flows out. Moving: a breath has a clock, and
   the book's two panels are two instants of it. One breath takes 5 s, 2.2 s
   in and 2.8 s out, and the phase φ runs 0 to 2π through it.
===================================================================== */
(function () {
  const d = sim('sim-breath', 660);
  const TIN = 2.2, TEX = 2.8, T = TIN + TEX;
  const cy = cycle(() => T, 0.3);
  const phaseOf = (t) => (t < TIN ? (Math.PI * t) / TIN : Math.PI + (Math.PI * (t - TIN)) / TEX);
  /* the pressure inside the lungs and in the liquid between the lungs and the chest wall, in mm Hg, and how far the lungs have expanded */
  const pLung = (ph) => (ph < Math.PI ? -2.0 : -3.0) * Math.sin(ph);
  const pPleural = (ph) => -4.25 - 1.75 * Math.sin(ph);
  const vol = (ph) => (1 - Math.cos(ph)) / 2;
  const CX = 470;
  function draw() {
    const { ctx } = begin(d.c);
    const pc = C('pressure'), t = cy.now(), ph = phaseOf(t), V = vol(ph), flow = Math.sin(ph), PL = pLung(ph), PP = pPleural(ph);
    const inhaling = ph < Math.PI, still = Math.abs(flow) < 0.1;
    /* the chest wall, widening as the muscles expand it */
    const w = 235 + 14 * V, top = 160, bot = 610;
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(CX - 36, 104); ctx.lineTo(CX - 36, top - 22); ctx.quadraticCurveTo(CX - w, top - 10, CX - w, top + 60); ctx.lineTo(CX - w, bot - 30); ctx.quadraticCurveTo(CX - w, bot, CX - w + 30, bot);
    ctx.lineTo(CX + w - 30, bot); ctx.quadraticCurveTo(CX + w, bot, CX + w, bot - 30); ctx.lineTo(CX + w, top + 60); ctx.quadraticCurveTo(CX + w, top - 10, CX + 36, top - 22); ctx.lineTo(CX + 36, 104); ctx.stroke();
    /* the chest cavity and the liquid that lines it, between the lungs and the wall */
    const cw = w - 28, dTop = 520 + 48 * V;                        /* the diaphragm's dome, lower when the breath is in */
    ctx.fillStyle = PAL.soft; ctx.beginPath(); ctx.moveTo(CX - cw, 240); ctx.quadraticCurveTo(CX - cw, 196, CX - cw + 60, 196); ctx.lineTo(CX + cw - 60, 196); ctx.quadraticCurveTo(CX + cw, 196, CX + cw, 240);
    ctx.lineTo(CX + cw, 586); ctx.quadraticCurveTo(CX, dTop - 60, CX - cw, 586); ctx.closePath(); ctx.fill();
    /* the diaphragm */
    ctx.strokeStyle = PAL.ink; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(CX - cw, 586); ctx.quadraticCurveTo(CX, dTop - 60, CX + cw, 586); ctx.stroke();
    /* the lungs, growing with the breath, and the trachea and bronchi */
    const k = 1 + 0.11 * V;
    ctx.fillStyle = PAL.panel; ctx.lineWidth = 4;
    for (const s of [-1, 1]) {
      const lx = CX + s * (108 + 12 * V), ly = 380 + 6 * V;
      ctx.beginPath(); ctx.ellipse(lx, ly, 88 * k, 135 * k, s * 0.12, 0, TAU); ctx.fill(); ctx.stroke();
    }
    ctx.fillStyle = PAL.soft; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(CX - 13, 100); ctx.lineTo(CX - 13, 300); ctx.lineTo(CX - 70, 350); ctx.lineTo(CX - 50, 364); ctx.lineTo(CX, 318); ctx.lineTo(CX + 50, 364); ctx.lineTo(CX + 70, 350); ctx.lineTo(CX + 13, 300); ctx.lineTo(CX + 13, 100); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.restore();
    /* the air, flowing in while the lungs expand and out while they contract */
    if (!still) {
      const off = (V * 260) % 52;
      for (let i = 0; i < 4; i++) {
        const y = 112 + i * 52 + off; if (y > 290) continue;
        arrow(ctx, CX, y - (inhaling ? 16 : -16), CX, y + (inhaling ? 16 : -16), PAL.muted, 3);
      }
      for (const s of [-1, 1]) arrow(ctx, CX + s * (inhaling ? 30 : 56), inhaling ? 326 : 348, CX + s * (inhaling ? 56 : 30), inhaling ? 348 : 326, PAL.muted, 3);
    }
    /* the two pressures, where they act */
    text(ctx, 'inside the lungs', CX + 120, 380, PAL.muted, { size: 16, align: 'center' });
    text(ctx, plus(PL, 1) + ' mm Hg', CX + 120, 408, pc, { size: 21, weight: 600, align: 'center' });
    line(ctx, CX - cw + 6, 470, CX - 150, 636, alpha(pc, 0.5), 1.5, [5, 6]);
    text(ctx, 'between the lungs and the chest wall: ', CX - 8, 636, PAL.muted, { size: 17, align: 'right' });
    text(ctx, plus(PP, 1) + ' mm Hg', CX - 8, 636, pc, { size: 21, weight: 600, align: 'left' });
    /* the parts named, at fixed places beside the chest */
    leader(ctx, 'trachea', CX + 60, 120, CX + 16, 140, PAL.ink, 'left');
    leader(ctx, 'chest wall', CX - w - 24, 300, CX - w - 4, 300, PAL.ink, 'right');
    leader(ctx, 'lungs', CX + w + 24, 300, CX + 108 + 88 * k + 4, 330, PAL.ink, 'left');
    leader(ctx, 'diaphragm', CX + w + 24, 600, CX + cw - 50, 583, PAL.ink, 'left');
    /* the graph beside the chest: both gauge pressures through one breath, on fixed axes */
    const box = { l: 900, r: 1350, t: 140, b: 520 };
    const { X, Y } = axes(ctx, box, [0, T], [-8, 4], { xl: 'time (s)', yl: 'gauge pressure (mm Hg)', yc: pc, nx: 5, ny: 6, fx: (v) => fmt(v, 0), fy: (v) => plus(v, 0) });
    text(ctx, 'atmospheric', box.r - 6, Y(0) - 14, PAL.muted, { size: 15, align: 'right' });
    curve(ctx, (s) => pLung(phaseOf(s)), 0, T, X, Y, pc, 4, 120);
    ctx.save(); ctx.setLineDash([10, 10]); curve(ctx, (s) => pPleural(phaseOf(s)), 0, T, X, Y, pc, 3, 120); ctx.restore();
    line(ctx, X(TIN), box.t, X(TIN), box.b, alpha(PAL.ink, 0.3), 2, [4, 8]);
    text(ctx, 'breathing in', X(TIN / 2), box.t + 16, PAL.muted, { size: 16, align: 'center' }); text(ctx, 'breathing out', X(TIN + TEX / 2), box.t + 16, PAL.muted, { size: 16, align: 'center' });
    /* the legend: the two pressures are one type, told apart by the dash */
    line(ctx, box.l + 10, box.b + 84, box.l + 50, box.b + 84, pc, 4); text(ctx, 'inside the lungs', box.l + 60, box.b + 84, PAL.ink, { size: 16 });
    line(ctx, box.l + 10, box.b + 112, box.l + 50, box.b + 112, pc, 3, [10, 10]); text(ctx, 'between the lungs and the chest wall', box.l + 60, box.b + 112, PAL.ink, { size: 16 });
    line(ctx, X(t), box.t, X(t), box.b, alpha(pc, 0.5), 2, [4, 8]);
    dot(ctx, X(t), Y(PL), pc, true, 9); dot(ctx, X(t), Y(PP), pc, false, 9);
    topline(ctx, still ? 'Between breaths the pressure inside the lungs is atmospheric, so no air flows, while the liquid between the lungs and the chest wall stays at ' + num(PP, 1) + ' mm Hg.'
      : inhaling ? 'Breathing in, the diaphragm moves down and the chest expands, the pressure inside the lungs is ' + num(PL, 1) + ' mm Hg, and air flows in.'
      : 'Breathing out, the muscles relax and surface tension in the alveoli raises the pressure inside the lungs to ' + plus(PL, 1) + ' mm Hg, forcing air out.');
    readout(d.readout, `\\kPg = ${ltx(PL, 1)}\\ \\text{mm Hg in the lungs}, \\quad \\kPg = ${ltx(PP, 1)}\\ \\text{mm Hg in the liquid at the chest wall}`,
      'The pressure between the lungs and the chest wall never rises to zero. It is the negative pressure in the liquid that attaches the lungs to the chest wall against the surface tension of the alveoli, and if air enters the chest cavity and breaks the attachment, a lung may collapse.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
