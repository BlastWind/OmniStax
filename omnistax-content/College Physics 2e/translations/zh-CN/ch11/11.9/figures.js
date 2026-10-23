/* Figures for section 11.9 Pressures in the Body. Boots against the section's text article.
   Five figures are still pictures that answer their sliders and choices and
   register no cycle: a table of pressures, a circuit of pressures, a standing
   person, an eye. One, the breath, has a clock in it and moves. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['11.9'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, select, hover, register, cycle, begin, line, arrow, dot, text, topline, vbracket, strip, axes, pinned, curve, faded, silhouette } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) { const n = el('small', null, small); host.appendChild(n); F.renderMath(n); } }

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
const listOf = (xs) => (xs.length <= 1 ? xs.join('') : xs.slice(0, -1).join('、') + '和' + xs[xs.length - 1]);
/* blood, which is red: bright where it carries oxygen and dark where it returns to the heart (rule 7, the physical fact) */
const BLOOD = '#C93A2E', BLOOD_DARK = '#7B2A3B';
/* blood's own colour through the facts switch; with facts off it is a neutral grey rather than a solid ink fill */
const blood = (c) => (F.shown.facts ? F.fact(c) : PAL.muted);
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
  mmhg: { label: 'mm Hg', k: 1, dec: 0, tick: 0, step: 20 },
  kpa: { label: 'kPa', k: MMHG / 1000, dec: 1, tick: 0, step: 2 },
  cmh2o: { label: 'cm 水柱', k: 1.36, dec: 0, tick: 0, step: 20 },
  atm: { label: 'atm', k: 1 / 760, dec: 3, tick: 2, step: 0.02 },
};

/* =====================================================================
   SIM: the pressures of Table 11.5 on one axis. Thirteen range bars, each a
   gauge pressure in the pressure hue, with a pressure of the reader's
   choosing placed among them and the axis written in the unit the reader
   picks. Still: a table of typical values has no time in it.
===================================================================== */
(function () {
  const d = sim('sim-body-pressures', 660);
  const ps = ctl(d.controls, { label: '\\kPg', cls: 'pressure', min: -10, max: 150, step: 1, value: 120, unit: 'mm Hg', dec: 0, aria: '要放到表中各压强之间的一个表压强', detents: [12, 24, 80, 85, 120] });
  const us = choice(d.controls, { label: '\\text{单位}', options: [{ value: 'mmhg', label: 'mm Hg' }, { value: 'kpa', label: 'kPa' }, { value: 'cmh2o', label: 'cm 水柱' }, { value: 'atm', label: 'atm' }], value: 'mmhg', aria: '坐标轴所用的单位' });
  /* the rows of Table 11.5, the book's ranges in mm Hg; a single value is a range of no width */
  const ROWS = [
    ['大动脉，收缩压', 100, 140, '收缩期的大动脉'],
    ['大动脉，舒张压', 60, 90, '舒张期的大动脉'],
    ['大静脉', 4, 15, '大静脉'],
    ['眼', 12, 24, '眼'],
    ['脑与脑脊液，卧位', 5, 12, '脑与脑脊液'],
    ['膀胱，充盈时', 0, 25, '充盈时的膀胱'],
    ['膀胱，充满时', 100, 150, '充满的膀胱'],
    ['胸腔，肺与肋骨之间', -8, -4, '胸腔'],
    ['肺内', -2, 3, '肺'],
    ['食管', -2, -2, '食管'],
    ['胃', 0, 20, '胃'],
    ['肠', 10, 20, '肠'],
    ['中耳，小于', 0, 1, '中耳'],
  ];
  /* the axis is fixed from −10 to 150 mm Hg whatever unit it is written in, and never rescales */
  const box = { l: 500, r: 1340, t: 118, b: 598 }, X0 = -10, X1 = 150, RH = (box.b - box.t) / ROWS.length;
  const X = (v) => box.l + ((v - X0) / (X1 - X0)) * (box.r - box.l);
  const rowY = (i) => box.t + (i + 0.5) * RH;
  hover(d.stage, () => ROWS.flatMap(([nm, lo, hi], i) => {
    const hits = [], y = rowY(i), a = X(lo), b = Math.max(X(hi), a + 8);
    for (let x = a; x <= b + 1; x += 28) hits.push({ x: Math.min(x, b), y, r: 18, name: nm + '：' + (lo === hi ? num(lo, 0) : num(lo, 0) + ' 至 ' + num(hi, 0)) + ' mm Hg' });
    return hits;
  }));
  function draw() {
    const { ctx } = begin(d.c);
    const pc = C('pressure'), u = UNITS[us.value], P = ps.v;
    const inU = (v) => num(v * u.k, u.dec) + ' ' + u.label;
    /* the frame: gridlines at round values of the chosen unit, and the zero of gauge pressure */
    for (let i = 0; i * u.step <= X1 * u.k + 1e-9; i++) {   /* round steps of the chosen unit */
      const v = (i * u.step) / u.k;
      line(ctx, X(v), box.t, X(v), box.b, i === 0 ? PAL.muted : PAL.rule, i === 0 ? 2 : 1.5);
      text(ctx, num(i * u.step, u.tick), X(v), box.b + 24, PAL.muted, { size: 17, align: 'center' });
    }
    line(ctx, box.l, box.b, box.r, box.b, PAL.muted, 2);
    text(ctx, '表压强 (' + u.label + ')', box.r, box.b + 54, pc, { size: 20, weight: 600, align: 'right' });
    text(ctx, '大气压', X(0), box.b + 46, PAL.muted, { size: 17, align: 'center' });
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
    const where = inside.length ? '落在' + listOf(inside) + '的范围之内。' : P < -8 ? '低于表中的所有压强。' : P > 150 ? '高于表中的所有压强。' : '不在表中任何一个范围之内。';
    topline(ctx, '表压强 ' + num(P, 0) + ' mm Hg，即 ' + said + '，' + where);
    readout(d.readout, `\\kPg = ${ltx(P, 0)}\\ \\text{mm Hg} = ${ltx(P, 0)}\\times 133\\ \\text{N/m}^2 = ${P === 0 ? '0' : sci(P * MMHG, 2)}\\ \\text{N/m}^2` + (u.label === 'mm Hg' ? '' : ` = ${ltx(P * u.k, u.dec)}\\ \\text{${u.label}}`),
      '整张表约跨越 160 mm Hg，即 21 kPa、220 cm 水柱或五分之一个标准大气压。');
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
    { id: 'aorta', name: '主动脉', P: 120, x: 680, y: 400, side: 'top', head: '血液以约 120 mm Hg 的压强从心脏左侧进入主动脉，这是回路中最高的压强。', small: '这是臂上的袖带在收缩期读出的压强，主动脉或动脉压强是回路中唯一不必把导管送入体内就能测量的压强。' },
    { id: 'small', name: '小动脉', P: 85, x: 740, y: 500, side: 'left', head: '在小动脉中，压强已降到约 85 mm Hg，比主动脉低 35 mm Hg。' },
    { id: 'arterioles', name: '微动脉', P: 35, x: 740, y: 620, side: 'left', head: '在微动脉中，压强约为 35 mm Hg，从主动脉算起的大部分下降到这里已经完成。' },
    { id: 'venules', name: '微静脉', P: 15, x: 140, y: 620, side: 'left', head: '在刚过毛细血管的微静脉中，压强约为 15 mm Hg。' },
    { id: 'cavae', name: '腔静脉', P: 4, x: 140, y: 470, side: 'left', head: '在腔静脉中，血液以约 4 mm Hg 的压强回到心脏右侧，几乎为零。' },
    { id: 'pulm-artery', name: '肺动脉', P: 25, x: 398, y: 265, side: 'left', head: '心脏右侧以约 25 mm Hg 的压强把血液泵入肺动脉，送往肺。', small: '心脏右侧是专为肺服务的泵，它使压强升高的幅度远小于左侧。' },
    { id: 'pulm-veins', name: '肺静脉', P: 8, x: 482, y: 265, side: 'right', head: '血液经肺静脉从肺回来，压强约为 8 mm Hg，再由心脏左侧泵出。' },
  ];
  const st = select(d.controls, { label: '\\text{部位}', options: ST.map((s) => ({ value: s.id, label: s.name })), value: 'aorta', aria: '读取压强的回路部位' });
  /* the heart, the two loops and the lungs on the canvas */
  const HX = 440, HY = 400, HW = 80, HH = 130;                         /* the heart: two halves, each HW wide, HH tall */
  const LOOP = { l: 140, r: 740, b: 680, y: HY }, PL = { l: 398, r: 482, top: 200 };   /* the systemic loop and the pulmonary loop */
  const NAMES = [
    ['右心房', HX - HW / 2, HY - 38], ['右心室', HX - HW / 2, HY + 40], ['左心房', HX + HW / 2, HY - 38], ['左心室', HX + HW / 2, HY + 40],
    ['肺', HX, 160], ['毛细血管', HX, LOOP.b], ['静脉', LOOP.l, 545], ['主动脉', 680, LOOP.y], ['小动脉', LOOP.r, 500], ['微动脉', LOOP.r, 620],
    ['微静脉', LOOP.l, 620], ['腔静脉', LOOP.l, 470], ['肺动脉', PL.l, 265], ['肺静脉', PL.r, 265],
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
    tube(ctx, [[HX + HW, LOOP.y], [LOOP.r, LOOP.y], [LOOP.r, LOOP.b], [HX + 60, LOOP.b]], blood(BLOOD), W);
    tube(ctx, [[HX - 60, LOOP.b], [LOOP.l, LOOP.b], [LOOP.l, LOOP.y], [HX - HW, LOOP.y]], blood(BLOOD_DARK), W);
    /* the capillary bed between them, where bright blood becomes dark */
    ctx.save(); ctx.lineWidth = 4; ctx.lineCap = 'round';
    for (let k = -3; k <= 3; k++) {
      const g = ctx.createLinearGradient(HX + 60, 0, HX - 60, 0); g.addColorStop(0, blood(BLOOD)); g.addColorStop(1, blood(BLOOD_DARK));
      ctx.strokeStyle = g; ctx.beginPath(); ctx.moveTo(HX + 60, LOOP.b - 8 + k * 3);
      for (let x = HX + 50; x >= HX - 60; x -= 10) ctx.lineTo(x, LOOP.b + k * 9 + (x % 20 === 0 ? 5 : -5) * Math.sin(k));
      ctx.stroke();
    }
    ctx.restore();
    /* the pulmonary loop: dark blood from the right ventricle up to the lungs, bright blood back down to the left atrium */
    tube(ctx, [[PL.l, HY - HH / 2 + 4], [PL.l, PL.top]], blood(BLOOD_DARK), W);
    tube(ctx, [[PL.r, PL.top], [PL.r, HY - HH / 2 + 4]], blood(BLOOD), W);
    /* the heart: the right side dark, the left side bright, atria above the ventricles */
    ctx.save(); ctx.lineWidth = 4; ctx.strokeStyle = PAL.ink;
    ctx.fillStyle = blood(BLOOD_DARK); rrect(ctx, HX - HW, HY - HH / 2, HW, HH, 22); ctx.fill(); ctx.stroke();
    ctx.fillStyle = blood(BLOOD); rrect(ctx, HX, HY - HH / 2, HW, HH, 22); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = alpha(PAL.panel, 0.8); ctx.lineWidth = 3; ctx.setLineDash([8, 8]); ctx.beginPath(); ctx.moveTo(HX - HW + 8, HY); ctx.lineTo(HX + HW - 8, HY); ctx.stroke();
    ctx.restore();
    /* which way the blood goes: fixed arrowheads, since the flow itself is Chapter 12's subject */
    head(ctx, 600, LOOP.y, 1, 0); head(ctx, LOOP.r, 560, 0, 1); head(ctx, 600, LOOP.b, -1, 0); head(ctx, 280, LOOP.b, -1, 0); head(ctx, LOOP.l, 545, 0, -1); head(ctx, 300, LOOP.y, 1, 0);
    head(ctx, PL.l, 300, 0, -1); head(ctx, PL.r, 300, 0, 1);
    /* the two pumps */
    text(ctx, '右侧', HX - 8, HY + 88, F.ref('right-side'), { size: 17, align: 'right' }); text(ctx, '左侧', HX + 8, HY + 88, F.ref('left-side'), { size: 17, align: 'left' });
    text(ctx, '心脏，两个泵', HX, HY + 114, PAL.ink, { size: 17, align: 'center' });
    /* the stations and their pressures; the chosen one is filled and the others hollow */
    for (const s of ST) {
      const on = s === cur;
      dot(ctx, s.x, s.y, PAL.ink, false, 8);
      const px = s.side === 'left' ? s.x - 26 : s.side === 'right' ? s.x + 26 : s.x, py = s.side === 'top' ? s.y - 34 : s.y;
      text(ctx, num(s.P, 0) + ' mm Hg', px, py, pc, { size: on ? 21 : 18, weight: 600, align: s.side === 'left' ? 'right' : s.side === 'right' ? 'left' : 'center', bg: alpha(PAL.panel, 0.9) });
    }
    /* the chosen station's marker glides round to the next one chosen */
    const [mx, my] = st.mix((v) => { const s = ST.find((q) => q.id === v); return [s.x, s.y]; });
    dot(ctx, mx, my, pc, true, 11);
    /* the parts that carry no pressure of their own are named on the drawing; the chambers and vessels by hover */
    leader(ctx, '肺', HX + 130, 130, HX + 100, 145, PAL.ink, 'left');
    leader(ctx, '毛细血管', HX, LOOP.b + 46, HX, LOOP.b + 14, PAL.ink, 'center');
    /* the profile beside the loop: the pressure at each station in circuit order, on a fixed axis 0 to 140 mm Hg, and the two rises the pumps make */
    const box = { l: 1040, r: 1350, t: 150, b: 610 }, X = (v) => box.l + (v / 140) * (box.r - box.l), RH = (box.b - box.t) / ST.length;
    for (let v = 0; v <= 140; v += 20) { line(ctx, X(v), box.t, X(v), box.b, v ? PAL.rule : PAL.muted, v ? 1.5 : 2); text(ctx, fmt(v, 0), X(v), box.b + 24, PAL.muted, { size: 17, align: 'center' }); }
    line(ctx, box.l, box.b, box.r, box.b, PAL.muted, 2);
    text(ctx, '表压强 (mm Hg)', box.r, box.b + 54, pc, { size: 20, weight: 600, align: 'right' });
    text(ctx, '沿回路一周，从心脏左侧开始', 1390, box.t - 24, PAL.muted, { size: 17, align: 'right' });
    const glow = st.mix((v) => ST.map((s) => (s.id === v ? 0.65 : 0.3)));
    ST.forEach((s, i) => {
      const y = box.t + (i + 0.5) * RH, on = s === cur;
      text(ctx, s.name, box.l - 14, y, on ? PAL.ink : PAL.muted, { size: 18, align: 'right', weight: on ? 600 : 400 });
      ctx.save(); ctx.fillStyle = alpha(pc, glow[i]); ctx.strokeStyle = pc; ctx.lineWidth = 2; rrect(ctx, box.l, y - 12, Math.max(X(s.P) - box.l, 4), 24, 5); ctx.fill(); ctx.stroke(); ctx.restore();
      if (on) text(ctx, num(s.P, 0), X(s.P) + 10, y, pc, { size: 18, weight: 600 });
    });
    /* the pumps: from the vena cavae up to the pulmonary artery, and from the pulmonary veins back up to the aorta */
    const yOf = (i) => box.t + (i + 0.5) * RH;
    arrow(ctx, X(4) + 6, yOf(4) + 6, X(25) - 4, yOf(5) - 8, pc, 3); text(ctx, '右侧泵', X(25) + 40, (yOf(4) + yOf(5)) / 2 + 2, F.ref('right-side'), { size: 16 });
    arrow(ctx, X(8) + 8, yOf(6) - 4, X(120) - 6, yOf(0) + 12, pc, 3); text(ctx, '左侧泵', X(60), (yOf(0) + yOf(6)) / 2 - 40, F.ref('left-side'), { size: 16, align: 'center', bg: alpha(PAL.panel, 0.9) });
    topline(ctx, cur.head);
    const lost = 120 - cur.P;
    readout(d.readout, `\\kPg = ${fmt(cur.P, 0)}\\ \\text{mm Hg} = ${fmt(cur.P, 0)}\\times 133\\ \\text{N/m}^2 = ${sci(cur.P * MMHG, 2)}\\ \\text{N/m}^2`,
      cur.small || '到' + cur.name + '处，血液已损失了离开主动脉时所带的 120 mm Hg 中的 ' + fmt(lost, 0) + '。');
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
  const hs = ctl(d.controls, { label: '\\kdh', cls: 'position', min: -0.4, max: 1.4, step: 0.05, value: 1.4, unit: 'm', dec: 2, aria: '该点在心脏以下的深度，在心脏以上为负', detents: [-0.4, 0, 1.4], specials: [{ at: 0, label: '与心脏等高的水平' }] });
  const pose = choice(d.controls, { label: '\\text{姿势}', options: [{ value: 'standing', label: '站立' }, { value: 'lying', label: '躺下' }], value: 'standing', aria: '这个人是站着还是躺下' });
  /* One scale for the person and the depths, SC canvas units per metre. The library's silhouette is
     scaled so that its heart, high on the chest HB of its 150 units above the feet, stands the book's
     1.40 m up, which makes the person 1.88 m tall; AX is the line of the body through the heart. */
  const SC = 270, HEART = 1.4, HB = 112, AX = 1.5, S = (HEART * SC) / HB, GY = 640, BX = 300, FX = 640, BEDY = 470, SX = 560;
  /* the stand pose with the legs and arms straight, as a person stands still to be measured */
  const STILL = { feet: [{ x: 4, y: 0 }, { x: -4, y: 0 }], hip: { x: 0, y: -77 }, hands: [{ x: 7, y: -60 }, { x: -2, y: -60 }] };
  /* the body's frame on the canvas: bx across in the silhouette's units, u metres up from the feet, the frame turned through th about the feet at (ox, oy) */
  const frame = (ox, oy, th) => (bx, u) => { const x = bx * S, y = -u * SC; return [ox + x * Math.cos(th) - y * Math.sin(th), oy + x * Math.sin(th) + y * Math.cos(th)]; };
  hover(d.stage, () => (pose.value === 'standing'
    ? [{ x: BX, y: GY - 0.6 * SC, r: 60, name: '站立的人' }]
    : [{ x: FX - 0.6 * SC, y: BEDY - 10, r: 60, name: '躺在床上的人' }, { x: 380, y: BEDY + 55, r: 40, name: '床' }]));
  function draw() {
    const { ctx } = begin(d.c);
    const pc = C('pressure'), xc = C('position'), standing = pose.value === 'standing';
    /* the body turns about its feet from standing to lying on its back; the depth that counts is the vertical one, dh cos th */
    const turn = pose.mix((v) => (v === 'standing' ? [0, BX, GY] : [-90, FX, BEDY])), th = (turn[0] * Math.PI) / 180, up = Math.cos(th);
    const P = frame(turn[1], turn[2], th);
    const dh = hs.v, dhEff = eps(dh * up, 3), dP = dhEff * RHO_BLOOD * G, dPmm = dP / MMHG;
    const at = (v) => Math.abs(dh - v) < 1e-6;
    const where = '距心脏 ' + fmt(Math.abs(dh), 2) + ' m ' + (dh > 0 ? '下方' : '上方') + '的一点';
    const aS = pose.a('standing'), aL = pose.a('lying');
    const lines = topline(ctx, !standing ? '躺下时，身体的每一点都与心脏等高，所以血液的重力对任何地方的压强都没有增加。'
      : at(0) ? '在与心脏等高处，没有血柱来增加它的重力，所以压强就是心脏自己的压强。'
      : at(1.4) ? '站立时，脚在心脏以下 1.40 m 处，那里血液的压强比心脏处高 ' + fmt(dPmm, 0) + ' mm Hg。'
      : at(-0.4) ? '站立时，头部的一点在心脏以上 0.40 m 处，那里血液的压强比心脏处低 ' + fmt(-dPmm, 0) + ' mm Hg。'
      : '站立时，在' + where + '，血液的压强比心脏处' + (dh > 0 ? '高' : '低') + ' ' + fmt(Math.abs(dPmm), 0) + ' mm Hg。');
    const lab = F.labeller(ctx, 700, { headline: lines });
    /* the floor, and the bed in side view standing on it, with a pillow under the head */
    strip(ctx, 50, 730, GY + 14, 24);
    faded(ctx, aL, [0, 0], () => {
      ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3;
      rrect(ctx, 70, BEDY - 30, 20, GY - BEDY + 30, 6); ctx.fill(); ctx.stroke();
      rrect(ctx, 690, BEDY + 10, 20, GY - BEDY - 10, 6); ctx.fill(); ctx.stroke();
      rrect(ctx, 86, BEDY + 30, 608, 50, 14); ctx.fill(); ctx.stroke();
      ctx.fillStyle = PAL.panel; rrect(ctx, 100, BEDY + 12, 150, 26, 13); ctx.fill(); ctx.stroke();
      ctx.restore();
    });
    /* the library's person, turned about the feet */
    ctx.save(); ctx.translate(turn[1], turn[2]); ctx.rotate(th);
    silhouette(ctx, { x: 0, y: 0, s: S, pose: 'stand', ...STILL, color: F.ref('person') });
    ctx.restore();
    const [hx, hy] = P(AX, HEART), [px, py] = P(AX, HEART - dh);
    /* the column of blood between the heart and the point, fading as the body lies down and the column loses its height */
    faded(ctx, up, [0, 0], () => {
      const c = [P(AX - 2.5, HEART), P(AX + 2.5, HEART), P(AX + 2.5, HEART - dh), P(AX - 2.5, HEART - dh)];
      ctx.save(); ctx.fillStyle = blood(BLOOD); ctx.strokeStyle = PAL.panel; ctx.lineWidth = 3; ctx.beginPath();
      c.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.closePath(); ctx.stroke(); ctx.fill(); ctx.restore();
    });
    dot(ctx, hx, hy, PAL.panel, true, 13); dot(ctx, hx, hy, blood(BLOOD), true, 9);
    dot(ctx, px, py, PAL.panel, true, 13); dot(ctx, px, py, xc, true, 9);
    faded(ctx, aS, [0, 0], () => {
      /* the scale of depth below the heart beside the person */
      line(ctx, SX, hy - 0.4 * SC, SX, hy + HEART * SC, PAL.muted, 2);
      for (let v = -0.4; v <= 1.41; v += 0.2) { const y = hy + v * SC; line(ctx, SX - 8, y, SX + 8, y, PAL.muted, 2); text(ctx, plus(v, 1) + ' m', SX + 16, y, PAL.muted, { size: 17 }); }
      text(ctx, '心脏以下的深度', SX + 20, hy - 0.4 * SC - 30, xc, { size: 17, weight: 600, align: 'center' });
      if (Math.abs(py - hy) > 6) line(ctx, px + 14, py, SX - 10, py, xc, 2, [4, 8]);
    });
    faded(ctx, aL, [0, 0], () => line(ctx, 40, hy, 730, hy, xc, 2, [10, 10]));
    /* the body itself, so no label lands on it, and the heart named beside the body whichever way it lies */
    if (aS === 1) lab.place({ l: BX - 45, t: GY - 1.95 * SC, r: BX + 45, b: GY });
    if (aL === 1) lab.place({ l: FX - 1.95 * SC, t: BEDY - 50, r: FX + 10, b: BEDY + 30 });
    if (aL > 0.5) lab.add('与心脏等高的水平', 560, hy, 0, -1, xc, 18, 40);
    lab.add('心脏', hx, hy, Math.cos(th), Math.sin(th), F.ref('heart'), 18, 64);
    if (Math.abs(py - hy) > 6) vbracket(ctx, BX - 80, Math.min(hy, py), Math.max(hy, py), xc, 'Δh = ' + num(dhEff, 2) + ' m', -1);
    else if (standing) text(ctx, 'Δh = 0', BX - 80, hy, xc, { size: 22, weight: 600, align: 'right', bg: PAL.panel });
    else lab.add('Δh = 0', px, BEDY + 80, 0, 1, xc, 22, 34);
    /* the graph beside the person: the difference in pressure against the depth, on fixed axes from the slider range, −0.4 to 1.4 m and −40 to 120 mm Hg */
    const box = { l: 800, r: 1330, t: 130, b: 560 };
    const { X, Y } = axes(ctx, box, [-0.4, 1.4], [-40, 120], { xl: '心脏以下的深度 Δh (m)', yl: '压强的增加量 ΔP (mm Hg)', xc: xc, yc: pc, nx: 9, ny: 4, fx: (v) => num(v, 1), fy: (v) => num(v, 0) });
    curve(ctx, (h) => (h * RHO_BLOOD * G) / MMHG, -0.4, 1.4, X, Y, pc, 5, 2);
    const pt = pinned(ctx, box, X, Y, dhEff, dPmm, pc);
    line(ctx, pt.x, pt.y, pt.x, box.b, alpha(pc, 0.5), 2, [4, 8]); line(ctx, box.l, pt.y, pt.x, pt.y, alpha(pc, 0.5), 2, [4, 8]);
    lab.add('ΔP = Δhρg', X(0.55), Y(0.55 * RHO_BLOOD * G / MMHG), -0.6, -0.8, pc, 20, 40);
    lab.add(plus(dPmm, 0) + ' mm Hg', pt.x, pt.y, dhEff > 1.0 ? -0.8 : dhEff < 0 ? 1 : 0.8, dhEff < 0 ? 0.1 : 0.6, pc, 20, 26);
    d.fig.dataset.missed = lab.flush().join(' | ');
    readout(d.readout, `\\kdPr = \\kdh\\krho\\kg = (${ltx(dhEff, 2)}\\ \\text{m})(1050\\ \\text{kg/m}^3)(9.80\\ \\text{m/s}^2) = ${dPmm === 0 ? '0' : sci(dP, 2)}\\ \\text{Pa} = ${ltx(dPmm, 0)}\\ \\text{mm Hg}`,
      standing ? '长时间站立会使血液在这个压强的作用下积聚在腿部，这就是弹性长袜有助于静脉使血液回流的原因。'
        : '身体上没有哪一点比其他点更高或更低，所以心脏与该点之间没有血柱。');
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
  const ps = ctl(d.controls, { label: '\\kPg', cls: 'pressure', min: 0, max: 100, step: 0.5, value: 85, unit: 'mm Hg', dec: 1, aria: '眼内流体的压强', detents: [12, 24, 85] });
  const as = ctl(d.controls, { label: '\\karea', cls: 'area', min: 3, max: 9, step: 0.5, value: 6, unit: 'cm²', dec: 1, aria: '眼球后部的面积' });
  const EX = 400, EY = 350, R = 165, KF = 15;                     /* the eye's centre and radius; KF is canvas units per newton */
  function draw() {
    const { ctx } = begin(d.c);
    const pc = C('pressure'), fc = C('force');
    const P = ps.v, A = as.v, h = P * 1e-3, Fv = h * RHO_HG * G * A * 1e-4, m = Fv / G;
    const half = Math.acos(1 - (A / 6) * 0.32);                   /* the back of the eye spans an arc whose size follows the area */
    /* the optic nerve leaving the back of the eye below the force, then the eyeball */
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.fillStyle = PAL.soft;
    ctx.beginPath(); ctx.moveTo(EX + R * Math.cos(0.42), EY + R * Math.sin(0.42)); ctx.lineTo(EX + R + 150, EY + 140); ctx.lineTo(EX + R + 150, EY + 176); ctx.lineTo(EX + R * Math.cos(0.68), EY + R * Math.sin(0.68)); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.fillStyle = PAL.panel; ctx.lineWidth = 5; ctx.strokeStyle = F.ref('eye'); ctx.beginPath(); ctx.arc(EX, EY, R, 0, TAU); ctx.fill(); ctx.stroke();
    /* the cornea bulging at the front, and the lens behind it */
    ctx.beginPath(); ctx.arc(EX - R + 62, EY, 82, Math.PI - 1.05, Math.PI + 1.05); ctx.stroke();
    ctx.lineWidth = 3; ctx.beginPath(); ctx.ellipse(EX - R + 66, EY, 12, 46, 0, 0, TAU); ctx.stroke();
    /* the back of the eye, the area A the pressure acts on */
    ctx.strokeStyle = C('area'); ctx.lineWidth = 12; ctx.beginPath(); ctx.arc(EX, EY, R, -half, half); ctx.stroke();
    ctx.restore();
    /* the fluid presses outward everywhere; the pushes on the back of the eye are the ones that add to the force */
    if (P > 0) {
      const L = 12 + P * 0.38;   /* short enough to leave the middle clear for the labels at the largest pressure */
      for (let a = -Math.PI; a < Math.PI - 1e-6; a += Math.PI / 12) {
        const back = Math.abs(a) <= half;
        if (!back && Math.abs(a) > Math.PI - 1.15) continue;      /* the cornea is drawn over the front */
        arrow(ctx, EX + (R - 14 - L) * Math.cos(a), EY + (R - 14 - L) * Math.sin(a), EX + (R - 14) * Math.cos(a), EY + (R - 14) * Math.sin(a), back ? pc : alpha(pc, 0.4), back ? 3.5 : 2.5);
      }
    }
    text(ctx, 'P_g = ' + fmt(P, 1) + ' mm Hg', EX + 5, EY, pc, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.9) });
    /* the one force those pushes add to, on the back of the eye */
    if (Fv > 0.05) arrow(ctx, EX + R + 6, EY, EX + R + 6 + Fv * KF, EY, fc, 5);
    text(ctx, 'F = ' + fmt(Fv, 1) + ' N', EX + R + 20, EY - 30, fc, { size: 21, weight: 600, bg: alpha(PAL.panel, 0.9) });
    leader(ctx, '眼球后部，面积 A = ' + fmt(A, 1) + ' cm²', EX + R * Math.cos(-half) - 10, EY - R - 40, EX + R * Math.cos(-half) - 4, EY + R * Math.sin(-half) - 6, C('area'), 'right');
    leader(ctx, '角膜', EX - R - 20, EY - 120, EX - R - 4, EY - 60, PAL.ink, 'right');
    leader(ctx, '晶状体', EX - R - 20, EY + 130, EX - R + 60, EY + 48, PAL.ink, 'right');
    leader(ctx, '眼内的流体', EX - 60, EY + R + 34, EX - 40, EY + 80, PAL.muted, 'right');
    leader(ctx, '视神经', EX + R + 70, EY + 210, EX + R + 60, EY + 150, PAL.ink, 'left');
    /* the same force as a weight: a mass resting on a pan */
    const MX = 1090, MY = 300;
    line(ctx, MX, MY + 8, MX, MY + 70, PAL.muted, 6); line(ctx, MX - 70, MY + 70, MX + 70, MY + 70, PAL.muted, 6);
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; rrect(ctx, MX - 90, MY - 6, 180, 14, 6); ctx.fill(); ctx.stroke();
    const bw = 40 + Math.cbrt(Math.max(m, 0.01)) * 70;
    ctx.fillStyle = PAL.panel; ctx.strokeStyle = F.ref('block'); ctx.lineWidth = 4; rrect(ctx, MX - bw / 2, MY - 6 - bw * 0.7, bw, bw * 0.7, 6); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, 'm = ' + fmt(m, 2) + ' kg', MX, MY - 6 - bw * 0.7 - 26, C('mass'), { size: 20, weight: 600, align: 'center' });
    if (Fv > 0.05) arrow(ctx, MX, MY - bw * 0.35, MX, MY - bw * 0.35 + Fv * KF, fc, 5);
    text(ctx, 'w = mg = ' + fmt(Fv, 1) + ' N', MX + 24, Math.max(MY - bw * 0.35 + Fv * KF + 26, MY + 96), fc, { size: 21, weight: 600, bg: alpha(PAL.panel, 0.9) });
    text(ctx, '重力等于该力、压在眼上的质量块', MX, 560, F.ref('block'), { size: 17, align: 'center' });
    const range = P >= 12 && P <= 24 ? '，在正常范围之内，' : P > 24 ? '，高于正常范围，' : P > 0 ? '，低于正常范围，' : '';
    topline(ctx, P === 0 ? '眼内没有压强时，流体就没有可推的东西，眼也就无法保持它的形状。'
      : '一个 ' + fmt(P, 1) + ' mm Hg 的压强' + range + '作用在眼球后部 ' + fmt(A, 1) + ' cm² 的面积上，就是 ' + fmt(Fv, 1) + ' N 的力，等于压在眼上的 ' + fmt(m, 2) + ' kg 质量块的重力。');
    readout(d.readout, `\\kF = \\kh\\krho\\kg \\karea = (${fmt(P, 1)}\\times 10^{-3}\\ \\text{m})(13.6\\times 10^{3}\\ \\text{kg/m}^3)(9.80\\ \\text{m/s}^2)(${fmt(A, 1)}\\times 10^{-4}\\ \\text{m}^2) = ${fmt(Fv, 1)}\\ \\text{N}`,
      '压强写成它所能托起的汞柱高度，所以用汞的密度代入 $\\kh\\krho\\kg$ 就得到以 N/m² 为单位的压强。');
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
    ctx.fillStyle = PAL.panel; ctx.lineWidth = 4; ctx.strokeStyle = F.ref('lungs');
    for (const s of [-1, 1]) {
      const lx = CX + s * (108 + 12 * V), ly = 380 + 6 * V;
      ctx.beginPath(); ctx.ellipse(lx, ly, 88 * k, 135 * k, s * 0.12, 0, TAU); ctx.fill(); ctx.stroke();
    }
    ctx.fillStyle = PAL.soft; ctx.lineWidth = 3; ctx.strokeStyle = PAL.ink;
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
    text(ctx, '肺内', CX + 120, 380, F.ref('lungs'), { size: 16, align: 'center' });
    text(ctx, plus(PL, 1) + ' mm Hg', CX + 120, 408, pc, { size: 21, weight: 600, align: 'center' });
    line(ctx, CX - cw + 6, 470, CX - 150, 636, alpha(pc, 0.5), 1.5, [5, 6]);
    text(ctx, '肺与胸壁之间：', CX - 8, 636, F.ref('pleural-liquid'), { size: 17, align: 'right' });
    text(ctx, plus(PP, 1) + ' mm Hg', CX - 8, 636, pc, { size: 21, weight: 600, align: 'left' });
    /* the parts named, at fixed places beside the chest */
    leader(ctx, '气管', CX + 60, 120, CX + 16, 140, PAL.ink, 'left');
    leader(ctx, '胸壁', CX - w - 24, 300, CX - w - 4, 300, PAL.ink, 'right');
    leader(ctx, '肺', CX + w + 24, 300, CX + 108 + 88 * k + 4, 330, F.ref('lungs'), 'left');
    leader(ctx, '膈', CX + w + 24, 600, CX + cw - 50, 583, PAL.ink, 'left');
    /* the graph beside the chest: both gauge pressures through one breath, on fixed axes */
    const box = { l: 900, r: 1350, t: 140, b: 520 };
    const { X, Y } = axes(ctx, box, [0, T], [-8, 4], { xl: '时间 (s)', yl: '表压强 (mm Hg)', yc: pc, nx: 5, ny: 6, fx: (v) => fmt(v, 0), fy: (v) => plus(v, 0) });
    text(ctx, '大气压', X(1), Y(0) - 14, PAL.muted, { size: 17, align: 'center' });
    const lc = F.ref('lungs'), qc = F.ref('pleural-liquid');
    curve(ctx, (s) => pLung(phaseOf(s)), 0, T, X, Y, lc, 4, 120);
    ctx.save(); ctx.setLineDash([10, 10]); curve(ctx, (s) => pPleural(phaseOf(s)), 0, T, X, Y, qc, 3, 120); ctx.restore();
    line(ctx, X(TIN), box.t, X(TIN), box.b, alpha(PAL.ink, 0.3), 2, [4, 8]);
    text(ctx, '吸气', X(TIN / 2), box.t + 16, PAL.muted, { size: 16, align: 'center' }); text(ctx, '呼气', X(TIN + TEX / 2), box.t + 16, PAL.muted, { size: 16, align: 'center' });
    /* the legend: the two pressures are one type, told apart by the dash */
    line(ctx, box.l + 10, box.b + 84, box.l + 50, box.b + 84, lc, 4); text(ctx, '肺内', box.l + 60, box.b + 84, lc, { size: 16 });
    line(ctx, box.l + 10, box.b + 112, box.l + 50, box.b + 112, qc, 3, [10, 10]); text(ctx, '肺与胸壁之间', box.l + 60, box.b + 112, qc, { size: 16 });
    line(ctx, X(t), box.t, X(t), box.b, alpha(pc, 0.5), 2, [4, 8]);
    dot(ctx, X(t), Y(PL), lc, true, 9); dot(ctx, X(t), Y(PP), qc, false, 9);
    topline(ctx, still ? '两次呼吸之间，肺内的压强等于大气压，所以没有空气流动，而肺与胸壁之间的液体保持在 ' + num(PP, 1) + ' mm Hg。'
      : inhaling ? '吸气时，膈向下移动，胸廓扩张，肺内的压强为 ' + num(PL, 1) + ' mm Hg，空气流入。'
      : '呼气时，肌肉放松，肺泡中的表面张力使肺内的压强升高到 ' + plus(PL, 1) + ' mm Hg，把空气压出。');
    readout(d.readout, `\\kPg = ${ltx(PL, 1)}\\ \\text{mm Hg (肺内)}, \\quad \\kPg = ${ltx(PP, 1)}\\ \\text{mm Hg (胸壁处的液体中)}`,
      '这个负压使肺贴附在胸壁上，抵抗肺泡的表面张力；如果空气进入，肺可能塌陷。');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
