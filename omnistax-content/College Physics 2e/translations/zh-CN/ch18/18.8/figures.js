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
  const rate = ctl(d.controls, { label: '\\text{传送带}', cls: 'charge', min: 4, max: 50, step: 1, value: 20, unit: 'µC/s', dec: 0, aria: '传送带每秒送到球上的电荷', onInput: () => cy.reset() });
  const rad = ctl(d.controls, { label: '\\text{球}', cls: 'position', min: 0.3, max: 1.2, step: 0.05, value: 0.5, unit: 'm', dec: 2, aria: '球的半径', onInput: () => cy.reset() });
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
    text(ctx, '绝缘柱', CX + 64, 660, PAL.muted, { size: 19 });
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
    text(ctx, '传送带把电荷运送上去', BX1 - 52, 690, bc, { size: 19, align: 'right' });   /* below the largest sphere */
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
    text(ctx, '离子源', CX - Rpx - 16, SY + 100, PAL.muted, { size: 18, align: 'right' });
    /* the battery and the pointed conductor that sprays the belt */
    panel(ctx, CX + 170, BBOT - 60, 96, 76, 8, PAL.panel, btc);
    text(ctx, 'A', CX + 218, BBOT - 22, btc, { size: 24, weight: 700, align: 'center' });
    line(ctx, CX + 170, BBOT - 22, BX2 + 62, BBOT - 22, spc, 3);
    comb(ctx, BX2 + 56, BBOT - 22, 3, -1, 0, 30, spc);
    text(ctx, '尖端把电荷喷到传送带上', CX + 172, BBOT + 62, spc, { size: 19 });
    /* the field the charged sphere makes outside itself, drawn where the drawing has room */
    if (q > 0) {
      const L = 40 + 110 * (E / EAIR);
      /* kept to the upper left, clear of the ion source's and the belt's names and of the headline */
      for (let i = 0; i < 5; i++) {
        const a = (172 + i * 13.5) * (Math.PI / 180);
        const x0 = CX + (Rpx + 8) * Math.cos(a), y0 = SY + (Rpx + 8) * Math.sin(a);
        arrow(ctx, x0, y0, x0 + L * Math.cos(a), y0 + L * Math.sin(a), ec, 4);
      }
      if (over) text(ctx, '空气被击穿', 90, SY - 190, PAL.muted, { size: 19 });
    }
    /* what the sphere holds, and the field at its surface */
    const RX = 1070;
    text(ctx, '空气在 ' + sci(EAIR, 2) + ' N/C 时被击穿', RX, 406, PAL.muted, { size: 18 });
    text(ctx, '这个球最多能容纳的电荷', RX, 466, PAL.muted, { size: 19 });
    text(ctx, fmt(qMax * 1e6, 1) + ' µC', RX, 508, qc, { size: 24, weight: 600 });
    topline(ctx, over
      ? `球已容纳到极限：半径为 ${fmt(R, 2)} m 的球上有 ${fmt(q * 1e6, 1)} µC，使球面处的电场达到 ${sci(E, 2)} N/C，周围的空气被电离，把传送带送上来的电荷全部带走。`
      : `传送带已向球输送了 ${fmt(q * 1e6, 1)} µC，全部在外表面上，在那里产生 ${sci(E, 2)} N/C 的电场。`);
    readout(d.readout, `\\kEf = k\\frac{|\\kq|}{\\krad^2} = (8.99 \\times 10^{9}\\ \\text{N}\\cdot\\text{m}^2\\text{/C}^2)\\frac{${sciTex(q, 2)}\\ \\text{C}}{(${fmt(R, 2)}\\ \\text{m})^2} = ${sciTex(E, 2)}\\ \\text{N/C}`,
      '球变大，同样的电荷在球面处产生的电场就变小，所以更大的球在空气被击穿之前能容纳更多的电荷。');
  }
  hover(d.stage, () => [
    { x: CX, y: SY, r: Rof(rad.v), name: '导电球，其过剩电荷分布在外表面' },
    { x: CX, y: SY - 30, r: 40, name: '把电荷从传送带上取下的尖端导体 B' },
    { x: 562, y: 668, r: 50, name: '电池由此喷出电荷的尖端导体' },
    { x: CX + 218, y: 668, r: 60, name: '电池 A，过剩正电荷的供应源' },
    { x: CX, y: 600, r: 60, name: '不导电的传送带' },
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
  const writer = choice(d.controls, { label: '\\text{图像}', options: [
    { value: 'lamp', label: '复印机的灯' }, { value: 'laser', label: '激光器' }],
    value: 'lamp', aria: '在感光鼓上写出图像的是什么' });
  const qs = ctl(d.controls, { label: '\\kq', cls: 'charge', min: 1, max: 10, step: 0.5, value: 6, unit: 'nC/cm²', dec: 1, aria: '电晕充电器喷到硒上的电荷' });
  const ss = ctl(d.controls, { label: '\\text{工序}', cls: '', min: 0, max: 3, step: 0.01, value: 0, unit: '', dec: 2, aria: '感光鼓所处的工序' });
  F.story(d, ss, { stops: [{ v: 0, label: '电荷' }, { v: 1, label: '图像' }, { v: 2, label: '墨粉' }, { v: 3, label: '纸' }] });
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
    text(ctx, '铝鼓', CX, CY, drc, { size: 20, align: 'center' });
    line(ctx, CX - R + 6, CY - 130, CX - R - 60, CY - 180, PAL.muted, 2);
    text(ctx, '硒，一种光电导体', CX - R - 66, CY - 184, PAL.muted, { size: 19, align: 'right' });
    line(ctx, CX, CY + R - 26, CX, CY + R + 40, PAL.ink, 3);
    ground(ctx, CX, CY + R + 40);
    text(ctx, '接地的', CX + 34, CY + R + 56, PAL.muted, { size: 18 });
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
    text(ctx, '电晕充电器', CX - 200, CY - R - 78, F.ref('corotron'), { size: 19, align: 'right' });
    /* what writes the image, while the image is being written */
    F.faded(ctx, beam * writer.a('laser'), [0, 0], () => {
      panel(ctx, 1030, 150, 150, 64, 8, PAL.panel, F.ref('laser'));
      text(ctx, '激光器', 1105, 182, F.ref('laser'), { size: 20, weight: 600, align: 'center' });
      line(ctx, 1030, 182, 900, 182, PAL.ink, 3);
      for (let i = 0; i < 4; i++) {
        const deg = -150 + i * 46, a = deg * (Math.PI / 180);
        if (isDark(deg)) continue;
        line(ctx, 900, 182, CX + R * Math.cos(a), CY + R * Math.sin(a), PAL.muted, 2, [8, 8]);
      }
      dot(ctx, 900, 182, PAL.ink, false, 10);
      text(ctx, '转动的反射镜扫描光束', 880, 146, PAL.muted, { size: 18, align: 'right' });
    });
    F.faded(ctx, beam * writer.a('lamp'), [0, 0], () => {
      panel(ctx, 1000, 150, 190, 300, 8, PAL.soft, F.ref('original'));
      text(ctx, '原件', 1095, 176, F.ref('original'), { size: 19, align: 'center' });
      for (let i = 0; i < 4; i++) panel(ctx, 1024, 210 + i * 56, 142, 26, 4, PAL.panel);
      for (let i = 0; i < 5; i++) {
        const deg = -160 + i * 42, a = deg * (Math.PI / 180);
        if (isDark(deg)) continue;
        line(ctx, 1000, 300, CX + R * Math.cos(a), CY + R * Math.sin(a), PAL.muted, 2, [8, 8]);
      }
      text(ctx, '灯把图像投到感光鼓上', 1095, 476, PAL.muted, { size: 18, align: 'center' });
    });
    /* the toner on the dark sectors, and what the paper has already taken */
    F.faded(ctx, toner, [0, 0], () => {
      for (let i = 0; i < 48; i++) {
        const deg = -180 + i * 7.5, a = deg * (Math.PI / 180);
        if (!isDark(deg) || deg > 180 - 160 * pulled) continue;
        dot(ctx, CX + (R + 13) * Math.cos(a), CY + (R + 13) * Math.sin(a), PAL.ink, true, 7);
      }
      text(ctx, '墨粉，喷上负电荷', CX - R - 30, CY + R + 40, PAL.muted, { size: 19, align: 'right' });
    });
    F.faded(ctx, paper, [0, 0], () => {
      panel(ctx, 900, CY + 40, 330, 150, 6, PAL.panel, F.ref('paper'));
      for (let i = 0; i < 7; i++) mark(ctx, '+', 930 + i * 46, CY + 176, 20);
      for (let i = 0; i < Math.round(5 * pulled); i++) dot(ctx, 950 + i * 40, CY + 78, PAL.ink, true, 7);
      text(ctx, '纸，其带电比感光鼓更强', 1065, CY + 214, F.ref('paper'), { size: 18, align: 'center' });
      arrow(ctx, CX + R + 30, CY + 60, 890, CY + 90, PAL.ink, 4);
    });
    const frac = (NDARK + (48 - NDARK) * (1 - light)) / 48, dens = q * frac;
    const lines = {
      charge: `电晕充电器给硒层喷上 ${fmt(q, 1)} nC/cm² 的正电荷，由于其下的铝鼓接地，涂层之下感应出等量的负电荷。`,
      image: writer.value === 'laser'
        ? `激光束扫过感光鼓：光束照到的地方，硒变成导体并失去电荷，它留下的暗区占 ${fmt(frac * 100, 0)}%，保持着 ${fmt(q, 1)} nC/cm²。`
        : `原件的图像被投到感光鼓上：图像明亮的地方，硒变成导体并失去电荷，暗的地方，占表面的 ${fmt(frac * 100, 0)}%，电荷保留下来。`,
      toner: `喷上负电荷的墨粉被吸引到感光鼓的带正电部分，而不会被吸引到其他部分，于是电荷的图案变成了黑色粉末的图案。`,
      paper: `一张空白纸被施加了比感光鼓更大的正电荷，把墨粉从鼓上拉下来，随后加热的辊把粉末永久地熔进纸的纤维之中。`,
    };
    topline(ctx, lines[st]);
    readout(d.readout, `\\kq_{\\text{drum}} = (${fmt(frac, 2)})\\,\\kq = (${fmt(frac, 2)})(${fmt(q, 1)}\\ \\text{nC/cm}^2) = ${fmt(dens, 1)}\\ \\text{nC/cm}^2`,
      '这是感光鼓上电荷的平均值：暗区保持全部的 ' + fmt(q, 1) + ' nC/cm²，亮区' + (light > 0.99 ? '没有电荷' : '保留着光尚未带走的部分') + '。'
      + (writer.value === 'laser' ? '光束被控制得极其精确，所以光束有多细，打印出的字符就有多清晰。' : ''));
  }
  hover(d.stage, () => [
    { x: CX, y: CY, r: 160, name: '硒层之下接地的铝鼓' },
    { x: CX - 150, y: CY - 190 - 62, r: 50, name: '电晕充电器，即喷出正电荷的尖端' },
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
  const qs = ctl(d.controls, { label: '\\kq', cls: 'charge', min: -40, max: 40, step: 1, value: 20, unit: 'pC', dec: 0, aria: '在电极处给每个墨滴的电荷' });
  const Es = ctl(d.controls, { label: '\\kEf', cls: 'electric-field', min: 0, max: 500, step: 10, value: 200, unit: 'kN/C', dec: 0, aria: '偏转板之间的电场' });
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
    text(ctx, '喷嘴', 95, YC - 62, nzc, { size: 19, align: 'center' });
    panel(ctx, 280, YC - 92, 26, 60, 4, PAL.panel, elc); panel(ctx, 280, YC + 32, 26, 60, 4, PAL.panel, elc);
    text(ctx, '充电电极', 293, YC + 122, elc, { size: 18, align: 'center' });
    panel(ctx, PL1, YC - 150, PL2 - PL1, 26, 4, PAL.panel, plc); panel(ctx, PL1, YC + 124, PL2 - PL1, 26, 4, PAL.panel, plc);
    for (let i = 0; i < 6; i++) { mark(ctx, '+', PL1 + 34 + i * 58, YC - 137, 20); mark(ctx, '−', PL1 + 34 + i * 58, YC + 137, 20); }
    text(ctx, '偏转板', (PL1 + PL2) / 2, YC - 178, plc, { size: 19, align: 'center' });
    if (Es.v > 0) for (let i = 0; i < 6; i++) arrow(ctx, PL1 + 34 + i * 58, YC - 112, PL1 + 34 + i * 58, YC + 112, ec, 3);   /* no field, no lines */
    text(ctx, 'E = ' + fmt(Es.v, 0) + ' kN/C', PL2 + 12, YC - 100, ec, { size: 21, weight: 600 });
    panel(ctx, PAPER, 90, 130, 460, 6, PAL.soft, ppc);
    text(ctx, '纸', PAPER + 65, 66, ppc, { size: 19, align: 'center' });
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
      ? '墨滴不带电，或者板间没有电场，所以板间没有力作用在墨滴上，液流径直飞向纸页的中央。'
      : `每个墨滴离开电极时带有 ${plus(qs.v, 0)} pC，${fmt(Es.v, 0)} kN/C 的电场把它推向${q > 0 ? '负极板' : '正极板'}，于是液流落在轴线${yEnd > 0 ? '下方' : '上方'} ${fmt(Math.abs(yEnd) * 100, 2)} cm 处。`);
    readout(d.readout, `\\kF = \\kq\\kEf = (${sciTex(q, 2)}\\ \\text{C})(${sciTex(E, 2)}\\ \\text{N/C}) = ${sciTex(q * E, 2)}\\ \\text{N}`,
      '电荷和电场都是用电来设定的，这正是喷墨打印机能把墨滴放得如此精确的原因；彩色需要四个这样的喷头。');
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
  const qs = ctl(d.controls, { label: '\\kq', cls: 'charge', min: 0, max: 8, step: 0.5, value: 5, unit: 'nC', dec: 1, aria: '第一层栅网给每个颗粒的电荷', onInput: () => cy.reset() });
  const Es = ctl(d.controls, { label: '\\kEf', cls: 'electric-field', min: 0, max: 400, step: 10, value: 250, unit: 'kN/C', dec: 0, aria: '集尘栅网处的电场', onInput: () => cy.reset() });
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
    for (const [x, sign, name, off, id] of [[X1, '+', '充电栅网', -16, 'charging-grid'], [X2, '−', '集尘栅网', -16, 'collecting-grid']]) {
      line(ctx, x, YT + 6, x, YB - 6, F.ref(id), 4);
      for (let i = 0; i < 6; i++) mark(ctx, sign, x + off, YT + 34 + i * ((YB - YT - 68) / 5), 22);
      text(ctx, name, x, YB + 34, F.ref(id), { size: 19, align: 'center' });
    }
    if (Es.v > 0) for (let i = 0; i < 5; i++) arrow(ctx, X1 + 24, YT + 40 + i * 70, X2 - 12, YT + 40 + i * 70, ec, 3);   /* no field, no lines */
    text(ctx, 'E = ' + fmt(Es.v, 0) + ' kN/C', X1 + 40, YT - 28, ec, { size: 21, weight: 600 });
    arrow(ctx, X0 - 58, (YT + YB) / 2, X0 - 6, (YT + YB) / 2, PAL.ink, 4);
    text(ctx, '含尘空气', X0 - 6, (YT + YB) / 2 - 34, PAL.ink, { size: 19, align: 'right' });
    text(ctx, pull > 0.5 ? '出来的是洁净空气' : '出来的仍是含尘空气', X3 - 20, YT - 28, PAL.ink, { size: 19, align: 'right' });
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
    text(ctx, '每个颗粒上的 q = ' + fmt(qs.v, 1) + ' nC', X1 - 20, YT - 28, qc, { size: 21, weight: 600, align: 'right' });
    text(ctx, fmt(pct, 0) + '% 被收集', X3 - 20, YB + 34, PAL.ink, { size: 21, weight: 600, align: 'right' });
    topline(ctx, qs.v === 0
      ? '充电栅网关闭，所以颗粒未带电就穿过除尘器。第二层栅网处的电场对不带电的颗粒没有力的作用，含尘空气进来时多脏，出去时仍然多脏。'
      : `第一层栅网给每个颗粒 ${fmt(qs.v, 1)} nC，第二层栅网处 ${fmt(Es.v, 0)} kN/C 的电场把其中 ${fmt(pct, 0)}% 的颗粒从气流中拉出来并留住。`);
    readout(d.readout, `\\kF = \\kq\\kEf = (${sciTex(q, 2)}\\ \\text{C})(${sciTex(E, 2)}\\ \\text{N/C}) = ${sciTex(q * E, 2)}\\ \\text{N}\\ \\text{（每个颗粒）}`,
      '按这种方式建造的工业除尘器，能从燃煤和燃油电厂的烟道气中除去 99% 以上的颗粒。');
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
  const qs = ctl(d.controls, { label: '\\kq', cls: 'charge', min: 0, max: 10, step: 0.1, value: 3.2, unit: '×10⁻¹⁹ C', dec: 2, aria: '汽油滴上的电荷',
    specials: [{ at: () => (Es && ms && Es.v > 0 ? (ms.v * 1e-15 * G) / (Es.v * 1e5) / 1e-19 : null), label: '悬着' }] });
  Es = ctl(d.controls, { label: '\\kEf', cls: 'electric-field', min: 0, max: 6, step: 0.1, value: 3.0, unit: '×10⁵ N/C', dec: 2, aria: '向上电场的强度',
    specials: [{ at: () => (ms && qs.v > 0 ? (ms.v * 1e-15 * G) / (qs.v * 1e-19) / 1e5 : null), label: '悬着' }] });
  ms = ctl(d.controls, { label: '\\km', cls: 'mass', min: 1, max: 10, step: 0.1, value: 4.0, unit: '×10⁻¹⁵ kg', dec: 2, aria: '汽油滴的质量',
    specials: [{ at: () => (qs.v * 1e-19 * Es.v * 1e5) / G / 1e-15, label: '悬着' }] });
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
    text(ctx, 'E = ' + sci(E, 2) + ' N/C，向上', 150, 570, ec, { size: 21, weight: 600 });
    /* the drop, with the sign the book gives it */
    circle(ctx, DX, DY, 34, PAL.panel, 3, drc);
    mark(ctx, '+', DX, DY, 26);
    const bg = alpha(PAL.panel, 0.97);   /* the field lines run behind the drop's names */
    text(ctx, '一滴汽油', DX - 52, DY - 26, drc, { size: 19, align: 'right', bg });
    text(ctx, 'm = ' + sci(m, 2) + ' kg', DX - 52, DY + 4, mc, { size: 19, weight: 600, align: 'right', bg });
    text(ctx, 'q = ' + sci(q, 2) + ' C', DX - 52, DY + 34, qc, { size: 19, weight: 600, align: 'right', bg });
    /* the free-body diagram: the two forces, drawn to a common scale, and the net */
    const S = 1.1e15;                                          /* canvas units per newton, so 9.6 × 10⁻¹⁴ N is 106 units */
    const up = Math.min(130, Fe * S), dn = Math.min(130, w * S);
    if (Fe > 0) { arrow(ctx, DX, DY - 36, DX, DY - 36 - up, fc, 5); text(ctx, 'F = qE = ' + sci(Fe, 2) + ' N', DX + 20, DY - 46 - up / 2, fc, { size: 20, weight: 600, bg: alpha(PAL.panel, 0.9) }); }
    arrow(ctx, DX, DY + 36, DX, DY + 36 + dn, fc, 5);
    text(ctx, 'w = mg = ' + sci(w, 2) + ' N', DX + 20, DY + 52 + dn / 2, fc, { size: 20, weight: 600, bg: alpha(PAL.panel, 0.9) });
    /* what the two forces leave */
    text(ctx, '合力与加速度', FX, 176, PAL.muted, { size: 19 });
    text(ctx, 'F − w = ' + (net < 0 ? '−' : '') + sci(Math.abs(net), 2) + ' N', FX, 224, fc, { size: 23, weight: 600 });
    text(ctx, 'a = ' + num(a, 1) + ' m/s²', FX, 274, ac, { size: 23, weight: 600 });
    text(ctx, a > 0 ? '向上' : a < 0 ? '向下' : '汽油滴悬着不动', FX, 314, PAL.muted, { size: 19 });
    if (a !== 0) arrow(ctx, FX + 300, a > 0 ? 300 : 200, FX + 300, a > 0 ? 200 : 300, ac, 5);
    text(ctx, '恰好托住汽油滴的电场', FX, 386, PAL.muted, { size: 19 });
    text(ctx, q > 0 ? sci((m * G) / q, 2) + ' N/C' : '汽油滴不带电时，任何电场都托不住它', FX, 430, ec, { size: 21, weight: 600 });
    topline(ctx, q === 0 || E === 0
      ? `没有什么托住汽油滴：由于${q === 0 ? '它不带电' : '周围没有电场'}，唯一的力是它 ${sci(w, 2)} N 的重力，它以重力加速度下落。`
      : net > 0
        ? `${sci(Fe, 2)} N 的电场力大于 ${sci(w, 2)} N 的重力，所以汽油滴被带着向上运动，加速度为 ${fmt(a, 1)} m/s²。`
        : net < 0
          ? `${sci(w, 2)} N 的重力大于 ${sci(Fe, 2)} N 的电场力，所以汽油滴下落，加速度为 ${fmt(Math.abs(a), 1)} m/s²，方向向下。`
          : `电场力和重力都是 ${sci(w, 2)} N，所以合力为零，汽油滴悬在原处。`);
    F.morph(formula, hung
      ? `\\mk{F}{\\kF} = \\mk{w}{\\kwgt} = \\mk{nw}{${sciTex(w, 2)}}\\ \\text{N}`
      : `\\mk{a}{\\ka} = \\frac{\\mk{F}{\\kF} - \\mk{w}{\\kwgt}}{\\km} = \\frac{\\mk{nF}{${sciTex(Fe, 2)}} - \\mk{nw}{${sciTex(w, 2)}}}{\\mk{m}{${sciTex(m, 2)}}} = \\mk{na}{${a === 0 ? '0' : num(a, 1)}}\\ \\text{m/s}^2`,
      { force: wasHung !== null && hung !== wasHung });
    wasHung = hung;
    note.textContent = (hung ? '电场力托住了全部重力，所以汽油滴既不上升也不下降。' : '')
      + '这里两个力的量级相同，所以答案同时取决于电荷、电场和质量。';
  }
  register(d.fig, { update: () => {}, draw });
})();
};
