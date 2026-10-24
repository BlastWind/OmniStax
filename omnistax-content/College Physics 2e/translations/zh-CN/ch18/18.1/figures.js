/* Figures for section 18.1 Static Electricity and Charge: Conservation of Charge. Boots against the section's text article.
   Every readout states a charge, and the typed sliders set a charge and a
   distance. The rods, cloths, amber and nucleus the text names are its
   referents and wear their referent colours on outline and name. Electrons, protons and neutrons are the element
   palette's particles; a charge's sign is told by its sign and label, never
   by a hue. Four figures answer their controls and register no cycle; the
   pair of Figure 18.9 is created and annihilated on a clock and moves. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['18.1'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, cycle, line, arrow, dot, text, topline, labeller, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) { const n = el('small', null, small); host.appendChild(n); F.renderMath(n); } }

/* ---------- small helpers shared by the figures ---------- */
const TAU = 2 * Math.PI, RAD = Math.PI / 180;
const QE = 1.60e-19;
const WORDS = ['零', '一', '两', '三', '四', '五', '六'];
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const wd = (n) => WORDS[n] ?? String(n);
const sp = (n) => (n < WORDS.length ? '' : ' ');
/* a number with the typographic minus, and one that always carries its sign */
const num = (v, d) => (v < 0 ? '−' : '') + fmt(Math.abs(v), d);
const plus = (v, d) => (v === 0 ? '' : v < 0 ? '−' : '+') + fmt(Math.abs(v), d);
/* a signed number in LaTeX, always with its sign */
const texSign = (v, d) => (v < 0 ? '-' : '+') + fmt(Math.abs(v), d);
/* a charge in coulombs as LaTeX scientific notation */
function sciTex(v) {
  if (v === 0) return '0';
  const e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e);
  return `${texSign(m, 2)} \\times 10^{${e}}`;
}
/* a particle of the element palette: a filled ball with its sign drawn on it.
   The antielectron has no key of its own and keeps the electron's hue, hollow. */
function particle(ctx, x, y, kind, r) {
  const hue = F.el(kind === 'e+' ? 'e-' : kind), hollow = kind === 'e+';
  ctx.save(); ctx.lineWidth = 3; ctx.strokeStyle = hue; ctx.fillStyle = hollow ? PAL.panel : hue;
  ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
  const glyph = kind === 'p+' || kind === 'e+' ? '+' : kind === 'e-' ? '−' : '';
  if (glyph) text(ctx, glyph, x, y + 1, hollow ? hue : PAL.panel, { size: r * 1.7, weight: 700, align: 'center' });
}
/* one row of a legend: a particle and its name */
function legendRow(ctx, x, y, kind, name) { particle(ctx, x, y, kind, 10); text(ctx, name, x + 22, y, PAL.ink, { size: 18 }); }
/* a body in ink: a closed path of the given points about (cx, cy), turned by `ang` */
function body(ctx, cx, cy, pts, ang, fill, stroke = PAL.ink) {
  ctx.save(); ctx.translate(cx, cy); ctx.rotate(ang); ctx.fillStyle = fill; ctx.strokeStyle = stroke; ctx.lineWidth = 3;
  ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
}
/* a point (x, y) about (cx, cy) turned by `ang` */
const turned = (cx, cy, x, y, ang) => ({ x: cx + x * Math.cos(ang) - y * Math.sin(ang), y: cy + x * Math.sin(ang) + y * Math.cos(ang) });
/* a hanging cloth, about 130 wide and 176 tall, about its centre: pinched at the
   top where it is held, widening as it drapes, with a scalloped hem */
const CLOTH = [[0, -88], [26, -72], [52, -50], [62, -10], [58, 40], [64, 84], [44, 74], [22, 88], [0, 76], [-22, 88], [-44, 74], [-64, 84], [-58, 40], [-62, -10], [-52, -50], [-26, -72]];
/* the folds of a draped cloth, drawn after its body: three faint lines from the pinch to the hem */
function clothFolds(ctx, cx, cy, ang, sx = 1, sy = 1) {
  ctx.save(); ctx.translate(cx, cy); ctx.rotate(ang); ctx.scale(sx, sy); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 2 / Math.max(sx, sy);
  for (const [x0, x1] of [[-6, -34], [2, 8], [8, 40]]) { ctx.beginPath(); ctx.moveTo(x0, -70); ctx.quadraticCurveTo(x1 * 0.6, 10, x1, 78); ctx.stroke(); }
  ctx.restore();
}
/* the slots the marks on a cloth sit in, about its centre */
const CLOTH_SLOTS = [[-20, -50], [24, -40], [-36, -10], [14, 0], [36, 30], [-24, 30], [0, 60], [-46, 60], [40, 62], [-50, 20]];

/* =====================================================================
   FIGURE 18.4: a charged body hangs by a thread and another is brought
   near it, in a locked perspective from the book's viewpoint, a little
   above and in front. A rod hangs level by its middle and turns about
   the thread in the horizontal plane; a cloth hangs from the thread's
   end and swings with it as a pendulum. The body brought near is held
   level by a hand. Still: a hanging body has settled where the force
   holds it, so the figure answers its controls and registers no cycle.
===================================================================== */
(function () {
  const d = sim('sim-rods-and-silk', 700);
  const pair = choice(d.controls, { label: '\\text{这一对}', options: [
    { value: 'glass-silk', label: '玻璃棒与丝绸' }, { value: 'glass-glass', label: '两根玻璃棒' }, { value: 'silk-silk', label: '两块丝绸' }], value: 'glass-silk', aria: '哪两个带电体被放到一起' });
  const qs = ctl(d.controls, { label: '\\kq', cls: 'charge', min: 0.5, max: 5, step: 0.1, value: 3, unit: 'nC', dec: 1, aria: '摩擦在每个物体上留下的电荷量' });
  const rs = ctl(d.controls, { label: '\\text{距离}', cls: 'position', min: 2, max: 12, step: 0.5, value: 6, unit: 'cm', dec: 1, aria: '悬挂的物体与被移近的物体之间的距离' });
  /* the world in centimetres, y up, z toward the reader, the rod's pivot at the origin; 40 units per cm.
     A 9 cm rod rests 50° back from the line to the body brought near; the thread's top is 5.5 cm above
     the pivot and a hanging cloth's top 1.5 cm above it; a cloth is 5.9 by 7.9 cm. */
  const S = 40, R = 4.5, PHI = 50 * RAD, YS = 5.5, YC = 1.5, CW = 0.045, RHO = 0.35, NU = 58, NV = -25;
  const V = F.view({ yaw: 0, pitch: 34 * RAD, dist: 3000, cx: 400, cy: 430 });
  let OY = 0;   /* the rod scenes sit 60 units lower than the cloth scenes, which need the height */
  const P = ([x, y, z]) => { const [u, v] = V.P([x * S, y * S, z * S]); return { x: u, y: v + OY }; };
  const add = (a, b, k = 1) => [a[0] + b[0] * k, a[1] + b[1] * k, a[2] + b[2] * k];
  const rodDir = (a) => [Math.cos(a), 0, -Math.sin(a)];
  const E_ROD = rodDir(PHI).map((c) => c * R);                 /* the near end of the hanging rod at rest */
  const E_CLOTH = [NU * CW, YC - (NV + 88) * CW, 0];          /* the near edge of the hanging cloth at rest */
  const BOTTOM = Math.hypot(64 * CW, YS - YC + 172 * CW);               /* the support to the cloth's far hem corner */
  /* a cloth point (u, v) of CLOTH, about a cloth whose top is at `top`, swung by `ph` about the support */
  const clothPt = (top, u, v, ph = 0) => {
    const p = [top[0] + u * CW, top[1] - (v + 88) * CW, top[2]];
    if (!ph) return p;
    const dx = p[0], dy = p[1] - YS;
    return [dx * Math.cos(ph) - dy * Math.sin(ph), YS + dx * Math.sin(ph) + dy * Math.cos(ph), p[2]];
  };
  const path = (ctx, pts, close) => { ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y))); if (close) ctx.closePath(); };
  /* a level glass rod from a to b in the world: an outline, a glass fill, a faint highlight along its top, its + marks */
  function rod(ctx, a, b, color, n, ghost, hi = 0.92) {
    const A = P(a), B = P(b), w = 2 * RHO * S;
    ctx.save(); ctx.lineCap = 'round';
    if (ghost) { ctx.globalAlpha *= 0.35; ctx.setLineDash([8, 8]); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; }
    const stroke = (c, lw) => { ctx.strokeStyle = c; ctx.lineWidth = lw; ctx.beginPath(); ctx.moveTo(A.x, A.y); ctx.lineTo(B.x, B.y); ctx.stroke(); };
    if (ghost) { const L = Math.hypot(B.x - A.x, B.y - A.y), nx = -(B.y - A.y) / L * w / 2, ny = (B.x - A.x) / L * w / 2;
      ctx.beginPath(); ctx.moveTo(A.x + nx, A.y + ny); ctx.lineTo(B.x + nx, B.y + ny); ctx.moveTo(A.x - nx, A.y - ny); ctx.lineTo(B.x - nx, B.y - ny); ctx.stroke(); ctx.restore(); return; }
    stroke(color, w + 6); stroke(PAL.soft, w);
    ctx.translate(0, -w * 0.22); stroke(alpha(PAL.panel, 0.7), w * 0.18); ctx.restore();
    for (let i = 0; i < n; i++) { let f = n === 1 ? 0.7 : 0.08 + (hi - 0.08) * i / (n - 1); if (Math.abs(f - 0.5) < 0.04) f = 0.5 + Math.sign(f - 0.5 || 1) * 0.04; const p = { x: A.x + (B.x - A.x) * f, y: A.y + (B.y - A.y) * f }; text(ctx, '+', p.x, p.y + 1, PAL.ink, { size: 20, weight: 700, align: 'center' }); }
  }
  /* a hanging cloth whose top is at `top`, swung by `ph`: the draped outline, three folds, its − marks */
  function cloth(ctx, top, ph, color, n, ghost) {
    const pts = CLOTH.map(([u, v]) => P(clothPt(top, u, v, ph)));
    ctx.save(); ctx.lineJoin = 'round'; path(ctx, pts, true);
    if (ghost) { ctx.globalAlpha *= 0.35; ctx.setLineDash([8, 8]); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.stroke(); ctx.restore(); return pts; }
    ctx.fillStyle = PAL.soft; ctx.fill(); ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.stroke();
    ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 2;
    for (const [x0, x1] of [[-6, -34], [2, 8], [8, 40]]) {
      const a = P(clothPt(top, x0, -70, ph)), c = P(clothPt(top, x1 * 0.6, 10, ph)), b = P(clothPt(top, x1, 78, ph));
      ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.quadraticCurveTo(c.x, c.y, b.x, b.y); ctx.stroke();
    }
    ctx.restore();
    for (let i = 0; i < n; i++) { const [u, v] = CLOTH_SLOTS[i], p = P(clothPt(top, u, v, ph)); text(ctx, '−', p.x, p.y + 1, PAL.ink, { size: 22, weight: 700, align: 'center' }); }
    return pts;
  }
  /* an arc of turn with its arrowhead, through world points */
  function turn(ctx, pts) {
    const s = pts.map(P), n = s.length;
    if (Math.hypot(s[n - 1].x - s[0].x, s[n - 1].y - s[0].y) < 24) return [];
    let k = n - 2; while (k > 0 && Math.hypot(s[n - 1].x - s[k].x, s[n - 1].y - s[k].y) < 20) k--;
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; path(ctx, s.slice(0, k + 1)); ctx.stroke(); ctx.restore();
    arrow(ctx, s[k].x, s[k].y, s[n - 1].x, s[n - 1].y, PAL.ink, 4);
    return s;
  }
  const arc = (f, a0, a1, m = 24) => Array.from({ length: m + 1 }, (_, i) => f(a0 + (a1 - a0) * i / m));
  /* what each pair makes of the scene, blended on a change of pair so the hanging body swings over to its
     new angle and a body that changes kind dissolves into the other in place. The near point moves
     by up to 1.7 cm, always short of the 2 cm the nearest body can be: more with the charge, less with the distance. */
  function scene(kind) {
    const q = qs.v, r = rs.v, hangGlass = kind !== 'silk-silk', heldGlass = kind === 'glass-glass', sgn = hangGlass !== heldGlass ? 1 : -1;
    const dn = 1.7 * (1 - Math.exp(-5 * q * q / (r * r)));
    return { th: sgn * Math.asin(dn / R), ph: sgn * Math.asin(dn / BOTTOM), hang: hangGlass ? 1 : 0, held: heldGlass ? 1 : 0 };
  }
  const spots = [];
  hover(d.stage, () => spots);
  function draw() {
    const { ctx, H } = begin(d.c);
    const pc = C('position');
    const q = qs.v, r = rs.v, kind = pair.value;
    const hangGlass = kind !== 'silk-silk', heldGlass = kind === 'glass-glass';
    const qHang = hangGlass ? q : -q, qHeld = heldGlass ? q : -q, unlike = qHang * qHeld < 0;
    const g = pair.mix(scene), nm = Math.max(1, Math.round(q * 2));
    OY = 60 * g.hang;
    const hang = hangGlass ? '玻璃棒' : '丝绸', held = heldGlass ? '第二根棒' : hangGlass ? '丝绸' : '第二块丝绸';
    const swing = unlike ? '朝' + (heldGlass ? '第二根棒' : '丝绸') : '背离它';
    const hl = topline(ctx, `带有 ${plus(qHang, 1)} nC 的${hang}挂在细线上，带有 ${plus(qHeld, 1)} nC 的${held}被移到相距 ${fmt(r, 1)} cm 处：${unlike ? '异号' : '同号'}电荷，所以${hangGlass ? '棒' : '丝绸'}${swing}摆去。`);
    const Lb = labeller(ctx, H, { headline: hl });
    const blockPts = (pts, pad = 6) => Lb.block(Math.min(...pts.map((p) => p.x)) - pad, Math.min(...pts.map((p) => p.y)) - pad, Math.max(...pts.map((p) => p.x)) + pad, Math.max(...pts.map((p) => p.y)) + pad);
    const blockSeg = (a, b, w) => { const n = Math.ceil(Math.hypot(b.x - a.x, b.y - a.y) / w); for (let i = 0; i <= n; i++) { const x = a.x + (b.x - a.x) * i / n, y = a.y + (b.y - a.y) * i / n; Lb.block(x - w / 2, y - w / 2, x + w / 2, y + w / 2); } };
    spots.length = 0;
    /* the near point of the hanging body at rest, and the near point of the body brought near, r along x from it */
    const E = hangGlass ? E_ROD : E_CLOTH, Pn = add(E, [r, 0, 0]);
    const rodAng = PHI - g.th, rodTip = rodDir(rodAng).map((c) => c * R);
    const clothTop = (ph) => clothPt([0, YC, 0], 0, -88, ph);
    /* the rest positions, faint */
    F.faded(ctx, g.hang, [0, 0], () => rod(ctx, E_ROD.map((c) => -c), E_ROD, PAL.ink, 0, true));
    F.faded(ctx, 1 - g.hang, [0, 0], () => cloth(ctx, [0, YC, 0], 0, PAL.ink, 0, true));
    /* the distance, from the near point at rest to the body brought near */
    const e = P(E), pn = P(Pn);
    line(ctx, e.x, e.y, pn.x, pn.y, alpha(PAL.ink, 0.45), 2, [4, 8]);
    /* the body brought near, held level by a hand */
    const heldRodA = Pn, heldRodB = add(Pn, rodDir(PHI), 2 * R);
    const heldTop = add(Pn, [NU * CW, (NV + 88) * CW, 0]);
    let heldPts = null;
    F.faded(ctx, g.held, [0, 0], () => {
      rod(ctx, heldRodA, heldRodB, F.ref('rod-2'), nm, false, 0.74);
      const a = P(heldRodA), b = P(heldRodB), L = Math.hypot(b.x - a.x, b.y - a.y), t = [(b.x - a.x) / L, (b.y - a.y) / L], gp = P(add(heldRodA, rodDir(PHI), 2 * R - 1.3));
      const aim = [t[1], -t[0]];
      F.hand(ctx, gp.x - aim[0] * HG.rod, gp.y - aim[1] * HG.rod, { aim, view: 'back', curl: 0.9, thumb: 'along', s: 0.9 });
    });
    F.faded(ctx, 1 - g.held, [0, 0], () => {
      heldPts = cloth(ctx, heldTop, 0, F.ref(hangGlass ? 'silk' : 'cloth-2'), nm);
      const tp = P(heldTop);
      F.hand(ctx, tp.x, tp.y - HG.cloth, { aim: [0, 1], view: 'back', curl: 0.85, thumb: 'along', s: 0.9 });
    });
    /* the hanging body, and the thread from the support to it */
    let hangPts = null;
    F.faded(ctx, g.hang, [0, 0], () => rod(ctx, rodTip.map((c) => -c), rodTip, F.ref('rod-1'), nm));
    F.faded(ctx, 1 - g.hang, [0, 0], () => { hangPts = cloth(ctx, [0, YC, 0], g.ph, F.ref('cloth-1'), nm); });
    const ct = clothTop(g.ph), tEnd = [ct[0] * (1 - g.hang), ct[1] * (1 - g.hang), 0];
    const sup = P([0, YS, 0]), te = P(tEnd);
    line(ctx, sup.x, sup.y, te.x, te.y, PAL.ink, 2);
    dot(ctx, te.x, te.y, PAL.ink, false, 5);
    line(ctx, sup.x - 40, sup.y, sup.x + 40, sup.y, PAL.ink, 4);
    /* the arcs the near point swung through */
    const a0 = Math.atan2(64 * CW, BOTTOM), arcs = [];
    F.faded(ctx, g.hang, [0, 0], () => arcs.push(...turn(ctx, arc((a) => rodDir(a).map((c) => c * (R + 1.3)), PHI, rodAng))));
    F.faded(ctx, 1 - g.hang, [0, 0], () => arcs.push(...turn(ctx, arc((a) => [(BOTTOM + 0.5) * Math.sin(a), YS - (BOTTOM + 0.5) * Math.cos(a), 0], a0, a0 + g.ph))));
    /* labels, stepped round the bodies */
    const hangC = F.ref(hangGlass ? 'rod-1' : 'cloth-1'), heldC = F.ref(heldGlass ? 'rod-2' : hangGlass ? 'silk' : 'cloth-2');
    if (hangGlass) blockSeg(P(rodTip.map((c) => -c)), P(rodTip), 2 * RHO * S + 10); else if (hangPts) blockPts(hangPts);
    if (heldGlass) blockSeg(P(heldRodA), P(heldRodB), 2 * RHO * S + 10); else if (heldPts) blockPts(heldPts);
    arcs.forEach((p) => Lb.block(p.x - 8, p.y - 8, p.x + 8, p.y + 8));
    Lb.beside({ x1: e.x, y1: e.y, x2: pn.x, y2: pn.y }, 'right', fmt(r, 1) + ' cm', pc, 18, { gap: 18 });
    const far = hangGlass ? P(rodTip.map((c) => -c)) : P(clothPt([0, YC, 0], -NU, NV, g.ph));
    Lb.add(hangGlass ? '悬挂的玻璃棒' : '悬挂的丝绸', far.x, far.y, -1, 0, hangC, 20, 24);
    Lb.add('细线', (sup.x + te.x) / 2, (sup.y + te.y) / 2, -1, 0, PAL.ink, 18, 14);
    const heldName = heldGlass ? '被移近的玻璃棒' : hangGlass ? '被移近的丝绸' : '被移近的第二块丝绸';
    /* a cloth's name goes to its right where it fits, under its hem where it does not */
    const side = P(clothPt(heldTop, 62, 30)), roomy = side.x + 24 + F.measure(ctx, heldName, { size: 20, weight: 600 }) < F.LW - 20;
    const tip = heldGlass ? P(add(heldRodA, rodDir(PHI), R)) : roomy ? side : P(clothPt(heldTop, 0, 84));
    Lb.add(heldName, tip.x, tip.y, heldGlass ? 0.25 : roomy ? 1 : 0, heldGlass || !roomy ? 1 : 0, heldC, 20, 24);
    const hp = heldGlass ? P(add(heldRodA, rodDir(PHI), 2 * R - 1.3)) : P(heldTop);
    spots.push({ x: hp.x, y: hp.y - (heldGlass ? 0 : 40), r: 50, name: heldGlass ? '握着第二根棒的手' : '握着' + (hangGlass ? '丝绸' : '第二块丝绸') + '的手' });
    Lb.flush();
    const n1 = heldGlass ? '棒 1' : hangGlass ? '玻璃' : '丝绸 1', n2 = heldGlass ? '棒 2' : hangGlass ? '丝绸' : '丝绸 2';
    tex(d.readout, `\\kq_{\\text{${n1}}} = ${unlike ? '-' : ''}\\kq_{\\text{${n2}}} = ${texSign(qHang, 1)}\\ \\text{nC}`);
  }
  const HG = { rod: 60, cloth: 60 };
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 18.5: the planetary model of the atom. Still: the count of
   charges is the idea, and electrons run round the nucleus only to look
   like an atom, which is the dummy loop rule 14 forbids, so the electrons
   sit on the book's three orbits and nothing registers a cycle.
===================================================================== */
(function () {
  const d = sim('sim-atom', 620);
  let es;
  const ps = ctl(d.controls, { label: '\\text{质子数}', cls: '', min: 1, max: 10, step: 1, value: 3, unit: '', dec: 0, aria: '原子核中有多少个质子',
    specials: [{ at: () => (es ? es.v : 3), label: '电中性' }] });
  es = ctl(d.controls, { label: '\\text{电子数}', cls: '', min: 0, max: 12, step: 1, value: 3, unit: '', dec: 0, aria: '有多少个电子绕原子核运行',
    specials: [{ at: () => ps.v, label: '电中性' }] });
  const CX = 600, CY = 350;
  /* the three orbits the book draws: one tall, two tilted */
  const ORBITS = [{ rx: 112, ry: 236, rot: 0, t0: -80 * RAD }, { rx: 320, ry: 116, rot: -22 * RAD, t0: 200 * RAD }, { rx: 320, ry: 116, rot: 22 * RAD, t0: 10 * RAD }];
  /* the neutrons of the most common isotope for each number of protons, since a neutron changes nothing in the charge */
  const NEUTRONS = [0, 0, 2, 4, 5, 6, 6, 7, 8, 10, 10];
  const onOrbit = (o, t) => turned(CX, CY, o.rx * Math.cos(t), o.ry * Math.sin(t), o.rot);
  let hits = [];
  function draw() {
    const { ctx, H } = begin(d.c);
    const qc = C('charge');
    const Np = ps.v, Ne = es.v, Nn = NEUTRONS[Np], net = Np - Ne;
    hits = [];
    ORBITS.forEach((o) => { ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.4); ctx.lineWidth = 2.5; ctx.beginPath(); ctx.ellipse(CX, CY, o.rx, o.ry, o.rot, 0, TAU); ctx.stroke(); ctx.restore(); });
    /* the nucleus: protons and neutrons interleaved in a sunflower packing */
    const nucleons = []; for (let i = 0, p = 0, n = 0; p < Np || n < Nn; i++) { if (p < Np && (i % 2 === 0 || n >= Nn)) { nucleons.push('p+'); p++; } else { nucleons.push('n0'); n++; } }
    nucleons.forEach((k, j) => { const rr = 13 * Math.sqrt(j), a = j * 2.39996; const x = CX + rr * Math.cos(a), y = CY + rr * Math.sin(a); particle(ctx, x, y, k, 12); hits.push({ x, y, r: 12, name: k === 'p+' ? '质子，电荷 +|qₑ|' : '中子，不带电' }); });
    /* the electrons, spread over the three orbits */
    for (let i = 0; i < Ne; i++) { const o = ORBITS[i % 3], t = o.t0 + Math.floor(i / 3) * (TAU / 4); const p = onOrbit(o, t); particle(ctx, p.x, p.y, 'e-', 11); hits.push({ x: p.x, y: p.y, r: 14, name: '电子，电荷 −|qₑ|' }); }
    const Lb = labeller(ctx, H); Lb.block(0, 0, 1400, 96);
    hits.forEach((h) => Lb.block(h.x - h.r, h.y - h.r, h.x + h.r, h.y + h.r));
    Lb.add('原子核', CX + 13 * Math.sqrt(Math.max(0, nucleons.length - 1)) + 4, CY + 30, 0.7, 0.7, F.ref('nucleus'), 19, 40);
    /* the legend and the tally at the right */
    const LX = 1010, LY = 140;
    legendRow(ctx, LX, LY, 'p+', '质子，电荷 +|q_e|'); legendRow(ctx, LX, LY + 36, 'n0', '中子，不带电'); legendRow(ctx, LX, LY + 72, 'e-', '电子，电荷 −|q_e|');
    text(ctx, `原子核中有 ${Np} 个质子和 ${Nn} 个中子`, LX - 10, LY + 150, PAL.ink, { size: 20 });
    text(ctx, `${Ne} 个电子在轨道上`, LX - 10, LY + 184, PAL.ink, { size: 20 });
    text(ctx, '净电荷  q = ' + (net === 0 ? '0' : plus(net, 0) + ' |q_e|'), LX - 10, LY + 240, qc, { size: 24, weight: 600 });
    text(ctx, net === 0 ? '电中性原子' : '离子', LX - 10, LY + 276, PAL.ink, { size: 20 });
    topline(ctx, net === 0 ? `${wd(Np)}${sp(Np)}个质子和${sp(Ne)}${wd(Ne)}${sp(Ne)}个电子：电荷相互抵消，原子为电中性。`
      : `${wd(Np)}${sp(Np)}个质子和${sp(Ne)}${wd(Ne)}${sp(Ne)}个电子使原子带有 $${texSign(net, 0)}\\,|\\kqe|$ 的净电荷：原子是离子。`);
    Lb.flush();
    readout(d.readout, `\\kq = N_{\\text{p}}|\\kqe| - N_{\\text{e}}|\\kqe| = (${Np} - ${Ne})(1.60 \\times 10^{-19}\\ \\text{C}) = ${net === 0 ? '0' : sciTex(net * QE) + '\\ \\text{C}'}`,
      '原子核中的中子增加质量，而不增加电荷。');
  }
  hover(d.stage, () => hits);
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 18.7: three quarks inside a proton. Still: a sum has no time in
   it; the slider sets how many of the three carry +2/3 and the rest
   carry −1/3.
===================================================================== */
(function () {
  const d = sim('sim-quarks', 470);
  const ns = ctl(d.controls, { label: '\\text{带 } +\\tfrac{2}{3}\\kqe \\text{ 的夸克数}', cls: '', min: 0, max: 3, step: 1, value: 2, unit: '', dec: 0, aria: '三个夸克中有几个带元电荷的三分之二' });
  const CX = 600, CY = 278, R = 150;
  const AT = [-90, 30, 150].map((a) => a * RAD);
  function draw() {
    const { ctx, H } = begin(d.c);
    const qc = C('charge');
    const n = ns.v, total = n * 2 - (3 - n);   /* in thirds */
    const whole = total / 3;
    ctx.save(); ctx.fillStyle = alpha(PAL.soft, 0.6); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(CX, CY, R, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
    const Lb = labeller(ctx, H); Lb.block(0, 0, 1400, 96);
    AT.forEach((a, i) => {
      const x = CX + 76 * Math.cos(a), y = CY + 76 * Math.sin(a), up = i < n;
      ctx.save(); ctx.fillStyle = F.cat(i); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(x, y, 38, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
      text(ctx, up ? '+⅔' : '−⅓', x, y + 1, PAL.panel, { size: 30, weight: 700, align: 'center' });
      const lx = i === 0 ? 1 : Math.cos(a), ly = i === 0 ? -0.2 : Math.sin(a);
      Lb.add('夸克，' + (up ? '+⅔' : '−⅓') + ' q_e', x + 38 * lx, y + 38 * ly, lx, ly, qc, 20, 26);
    });
    Lb.add(n === 2 ? '质子' : '三个夸克', CX + R * Math.cos(-135 * RAD), CY + R * Math.sin(-135 * RAD), -0.7, -0.7, PAL.ink, 20, 22);
    const UP = '$+\\tfrac{2}{3}\\kqe$', DN = '$-\\tfrac{1}{3}\\kqe$';
    topline(ctx, n === 2 ? `两个 ${UP} 的夸克与一个 ${DN} 的夸克之和为 $+1\\kqe$，即质子的电荷。`
      : n === 1 ? `一个 ${UP} 的夸克与两个 ${DN} 的夸克之和为 0，即中子所具有的总电荷。`
      : n === 3 ? `三个夸克都是 ${UP}，其和为 $+2\\kqe$，仍是元电荷的整数倍。`
      : `没有 ${UP} 的夸克，三个 ${DN} 的夸克之和为 $-1\\kqe$，仍是元电荷的整数倍。`);
    Lb.flush();
    const terms = [...Array(3 - n).fill('-\\tfrac{1}{3}\\kqe'), ...Array(n).fill('+\\tfrac{2}{3}\\kqe')];
    const sum = terms.map((t, i) => (i === 0 && t.startsWith('+') ? t.slice(1) : t)).join(' ');
    readout(d.readout, `\\kqtot = ${sum} = ${whole === 0 ? '0' : texSign(whole, 0) + '\\,\\kqe'}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 18.8: the amber and the cloth rubbed together. Still: the count
   of electrons moved is what matters and the reader sets it, so the
   figure answers its slider and registers no cycle.
===================================================================== */
(function () {
  const d = sim('sim-rubbing', 520);
  const ns = ctl(d.controls, { label: '\\text{转移的电子数}', cls: '', min: 0, max: 3, step: 1, value: 2, unit: '', dec: 0, aria: '摩擦使多少个电子从布转移到琥珀上' });
  const AX = 400, AY = 300, KX = 960, KY = 300;
  const AMBER = [[-70, -100], [10, -118], [70, -90], [104, -30], [96, 50], [56, 108], [-20, 122], [-84, 90], [-110, 20], [-104, -50]];
  const AP = [[-50, -40], [40, 60]], AE = [[30, -50], [-46, 50], [-8, 10], [56, -2], [-2, 84]];   /* the amber's proton slots, and its electron slots, its own two first */
  const KP = [[-30, -80], [36, -6], [-40, 70]], KE = [[30, -76], [-40, -10], [24, 70]];           /* the cloth's */
  const CLOTH2 = CLOTH.map(([x, y]) => [x * 1.6, y * 1.5]);
  function draw() {
    const { ctx, H } = begin(d.c);
    const qc = C('charge'), amc = F.ref('amber'), clc = F.ref('cloth');
    const n = ns.v;
    body(ctx, AX, AY, AMBER, 0, PAL.soft, amc); body(ctx, KX, KY, CLOTH2, 0, PAL.soft, clc); clothFolds(ctx, KX, KY, 0, 1.6, 1.5);
    AP.forEach(([x, y]) => particle(ctx, AX + x, AY + y, 'p+', 12));
    AE.slice(0, 2 + n).forEach(([x, y]) => particle(ctx, AX + x, AY + y, 'e-', 12));
    KP.forEach(([x, y]) => particle(ctx, KX + x, KY + y, 'p+', 12));
    KE.slice(0, 3 - n).forEach(([x, y]) => particle(ctx, KX + x, KY + y, 'e-', 12));
    /* the empty slots the electrons left, and the ones they took, faint */
    KE.slice(3 - n).forEach(([x, y]) => { ctx.save(); ctx.setLineDash([4, 5]); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(KX + x, KY + y, 12, 0, TAU); ctx.stroke(); ctx.restore(); });
    text(ctx, '琥珀', AX, AY + 150, amc, { size: 20, align: 'center' });
    text(ctx, '布', KX, KY + 160, clc, { size: 20, align: 'center' });
    const tally = (x, y, p, e) => {
      text(ctx, `${p} 个质子，${e} 个电子`, x, y, PAL.ink, { size: 19, align: 'center' });
      text(ctx, '净电荷  q = ' + (p === e ? '0' : plus(p - e, 0) + ' |q_e|'), x, y + 32, qc, { size: 22, weight: 600, align: 'center' });
    };
    tally(AX, 120, 2, 2 + n); tally(KX, 110, 3, 3 - n);
    legendRow(ctx, 60, H - 60, 'p+', '质子'); legendRow(ctx, 60, H - 28, 'e-', '电子');
    topline(ctx, n === 0 ? '琥珀含有两个质子和两个电子，布含有三个质子和三个电子：两者都是电中性的，总电荷为零。'
      : `${WORDS[n]}个电子从布移到了琥珀上：琥珀带有 $-${n}\\,|\\kqe|$，布带有 $+${n}\\,|\\kqe|$，总电荷仍为零。`);
    readout(d.readout, `\\kqtot = \\kq_{\\text{琥珀}} + \\kq_{\\text{布}} = (${n ? '-' + n + '\\,|\\kqe|' : '0'}) + (${n ? '+' + n + '\\,|\\kqe|' : '0'}) = 0`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 18.9: a pair created from energy, and a pair annihilated into
   it. Moving: the event has a before and an after and the pair travels,
   so the idea has a clock in it; one cycle of five seconds, held 1.2 s.
===================================================================== */
(function () {
  const d = sim('sim-pair', 520);
  const T = 5;
  const cy = cycle(() => T, 1.2);
  const ev = choice(d.controls, { label: '\\text{事件}', options: [{ value: 'create', label: '产生' }, { value: 'annihilate', label: '湮没' }], value: 'create', aria: '一对粒子是由能量产生，还是湮没为能量', onInput: () => cy.reset() });
  const BX = 640, BY = 250, DX = 560, DY = 165;
  let hits = [], lastKey = '';
  /* the thick arrow the book draws for the energy, its head at (hx, y) */
  function energyArrow(ctx, hx, y, a) {
    const ec = C('energy');
    ctx.save(); ctx.globalAlpha = a; arrow(ctx, hx - 320, y, hx, y, ec, 12); ctx.restore();
    text(ctx, 'E', hx - 160, y - 34, ec, { size: 26, weight: 600, align: 'center' });
  }
  /* the burst at the event, k from 0 to 1 */
  function burst(ctx, k) {
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.globalAlpha = 1 - 0.6 * k;
    for (let i = 0; i < 12; i++) { const a = i * TAU / 12 + 0.2, r0 = 14 + 40 * k, r1 = r0 + 22 + 30 * k; ctx.beginPath(); ctx.moveTo(BX + r0 * Math.cos(a), BY + r0 * Math.sin(a)); ctx.lineTo(BX + r1 * Math.cos(a), BY + r1 * Math.sin(a)); ctx.stroke(); }
    ctx.restore();
  }
  function draw() {
    const { ctx, H } = begin(d.c);
    const qc = C('charge');
    const t = cy.now(), create = ev.value === 'create';
    const Lb = labeller(ctx, H); Lb.block(0, 0, 1400, 96);
    let phase, ep = null, pp = null;
    if (create) {
      if (t < 2) { phase = 'before'; energyArrow(ctx, 380 + (t / 2) * 220, BY, 1); }
      else if (t < 2.5) { phase = 'burst'; burst(ctx, (t - 2) / 0.5); }
      else { phase = 'after'; const s = (t - 2.5) / 2.5; ep = { x: BX + s * DX, y: BY - s * DY }; pp = { x: BX + s * DX, y: BY + s * DY }; }
    } else {
      if (t < 2.5) { phase = 'before'; const s = t / 2.5; ep = { x: 120 + s * (BX - 120), y: BY - (1 - s) * DY }; pp = { x: 120 + s * (BX - 120), y: BY + (1 - s) * DY }; }
      else if (t < 3) { phase = 'burst'; burst(ctx, (t - 2.5) / 0.5); }
      else { phase = 'after'; energyArrow(ctx, 700 + ((t - 3) / 2) * 420, BY, 1); }
    }
    hits = [];
    if (ep) {
      const from = create ? { x: BX, y: BY } : { x: 120, y: BY - DY }, to = create ? { x: BX, y: BY } : { x: 120, y: BY + DY };
      line(ctx, from.x, from.y, ep.x, ep.y, alpha(PAL.ink, 0.35), 2); line(ctx, to.x, to.y, pp.x, pp.y, alpha(PAL.ink, 0.35), 2);
      particle(ctx, ep.x, ep.y, 'e-', 15); particle(ctx, pp.x, pp.y, 'e+', 15);
      hits.push({ x: ep.x, y: ep.y, r: 20, name: '电子，电荷 −1 qₑ' }, { x: pp.x, y: pp.y, r: 20, name: '反电子（正电子），电荷 +1 qₑ' });
    }
    legendRow(ctx, 560, H - 70, 'e-', '电子，−1 q_e'); legendRow(ctx, 560, H - 38, 'e+', '反电子，+1 q_e');
    text(ctx, 'Δm = 2mₑ = E/c²', BX, BY + 120, PAL.ink, { size: 22, align: 'center' });
    text(ctx, '之前', 300, H - 70, PAL.ink, { size: 20, align: 'center' }); text(ctx, 'q_tot = 0', 300, H - 38, qc, { size: 22, weight: 600, align: 'center' });
    text(ctx, '之后', 1000, H - 70, PAL.ink, { size: 20, align: 'center' }); text(ctx, 'q_tot = 0', 1000, H - 38, qc, { size: 22, weight: 600, align: 'center' });
    const lines = create
      ? { before: '能量 E 正在到来：还没有任何带电粒子存在，总电荷为零。', burst: '能量足够大，它变成了物质：一个电子和一个反电子，总质量为 2mₑ。', after: '电子和反电子向两边飞开：它们的电荷分别为 −1 q_e 和 +1 q_e，总电荷仍为零。' }
      : { before: '一个电子和一个反电子相互靠近：−1 q_e 和 +1 q_e，总电荷为零。', burst: '物质与反物质相遇并湮没：质量 2mₑ 变成能量 E = Δm c²。', after: '只有能量离去：根本没有带电粒子，总电荷仍为零。' };
    topline(ctx, lines[phase]);
    Lb.flush();
    const key = ev.value + phase;
    if (key !== lastKey) {
      lastKey = key;
      const pair = '(-1)\\,\\kqe + (+1)\\,\\kqe = 0';
      readout(d.readout, `\\kqtot = ${pair}`);
    }
  }
  hover(d.stage, () => hits);
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
