/* Figures for section 18.1 Static Electricity and Charge: Conservation of Charge. Boots against the section's text article.
   The page binds charge alone: every readout states a charge, and the one
   typed slider sets one. Electrons, protons and neutrons are the element
   palette's particles; a charge's sign is told by its sign and label, never
   by a hue. Four figures answer their controls and register no cycle; the
   pair of Figure 18.9 is created and annihilated on a clock and moves. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['18.1'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, cycle, line, arrow, dot, text, topline, labeller, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const TAU = 2 * Math.PI, RAD = Math.PI / 180;
const QE = 1.60e-19;
const WORDS = ['no', 'one', 'two', 'three', 'four', 'five', 'six'];
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const wd = (n) => WORDS[n] ?? String(n);
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
/* a turning arc about (cx, cy) from canvas angle a0 to a1, arrowhead at the a1 end */
function turnArc(ctx, cx, cy, R, a0, a1, color) {
  const ccw = a1 < a0;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.arc(cx, cy, R, a0, a1, ccw); ctx.stroke(); ctx.restore();
  const t = ccw ? a1 + Math.PI / 2 : a1 - Math.PI / 2;
  const hx = cx + R * Math.cos(a1), hy = cy + R * Math.sin(a1);
  arrow(ctx, hx + 30 * Math.cos(t), hy + 30 * Math.sin(t), hx, hy, color, 4);
}
/* a body in ink: a closed path of the given points about (cx, cy), turned by `ang` */
function body(ctx, cx, cy, pts, ang, fill) {
  ctx.save(); ctx.translate(cx, cy); ctx.rotate(ang); ctx.fillStyle = fill; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
  ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
}
/* a point (x, y) about (cx, cy) turned by `ang` */
const turned = (cx, cy, x, y, ang) => ({ x: cx + x * Math.cos(ang) - y * Math.sin(ang), y: cy + x * Math.sin(ang) + y * Math.cos(ang) });
/* a rounded rod of length L and thickness T about its centre */
const rodPts = (L, T) => { const p = [], n = 8; for (let i = 0; i <= n; i++) { const a = -Math.PI / 2 + (i / n) * Math.PI; p.push([L / 2 + (T / 2) * Math.cos(a), (T / 2) * Math.sin(a)]); } for (let i = 0; i <= n; i++) { const a = Math.PI / 2 + (i / n) * Math.PI; p.push([-L / 2 + (T / 2) * Math.cos(a), (T / 2) * Math.sin(a)]); } return p; };
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
const CLOTH_SLOTS = [[-20, -50], [24, -40], [-36, -10], [14, 0], [36, 30], [-24, 30], [0, 60], [-46, 60], [30, -70], [-50, 20]];

/* =====================================================================
   FIGURE 18.4: a charged body hangs by a thread and another is brought
   near it, seen from above. Still: a hanging body has settled where the
   force holds it, and the question is which way and how far it swung,
   so the figure answers its controls and registers no cycle.
===================================================================== */
(function () {
  const d = sim('sim-rods-and-silk', 560);
  const pair = choice(d.controls, { label: '\\text{the pair}', options: [
    { value: 'glass-silk', label: 'glass rod and silk' }, { value: 'glass-glass', label: 'two glass rods' }, { value: 'silk-silk', label: 'two silk cloths' }], value: 'glass-silk', aria: 'which two charged bodies are brought together' });
  const qs = ctl(d.controls, { label: '\\kq', cls: 'charge', min: 0.5, max: 5, step: 0.1, value: 3, unit: 'nC', dec: 1, aria: 'the size of the charge rubbing left on each body' });
  const rs = ctl(d.controls, { label: '\\text{distance}', cls: '', min: 2, max: 12, step: 0.5, value: 6, unit: 'cm', dec: 1, aria: 'the distance between the hanging body and the one brought near' });
  const CX = 520, CY = 360, L = 340, S = 26, DIR = -18 * RAD;   /* the held body sits 18° above the rod's line, 26 units per centimeter */
  const ux = Math.cos(DIR), uy = Math.sin(DIR);
  const ROD = rodPts(L, 22);
  /* marks, + or −, spaced along a rod or set in a cloth's slots */
  function marks(ctx, cx, cy, ang, n, sign, cloth) {
    for (let i = 0; i < n; i++) {
      const [x, y] = cloth ? CLOTH_SLOTS[i] : [-L / 2 + 36 + (i / Math.max(1, n - 1)) * (L - 72), 0];
      const p = turned(cx, cy, cloth ? x : (n === 1 ? 0 : x), y, ang);
      text(ctx, sign, p.x, p.y + 1, PAL.ink, { size: 22, weight: 700, align: 'center' });
    }
  }
  function draw() {
    const { ctx, H } = begin(d.c);
    const qc = C('charge');
    const q = qs.v, r = rs.v, kind = pair.value;
    const hangGlass = kind !== 'silk-silk', heldGlass = kind === 'glass-glass';
    const qHang = hangGlass ? q : -q, qHeld = heldGlass ? q : -q, unlike = qHang * qHeld < 0;
    /* the swing: toward an unlike charge, away from a like one; larger with the charges and smaller with the distance, never a stated number */
    const A = 40 * (1 - Math.exp(-2.77 * q * q / (r * r))), phi = (unlike ? A : -A) * RAD, ang = -phi;
    const nm = Math.max(1, Math.round(q * 2));
    const Lb = labeller(ctx, H); Lb.block(0, 0, 1400, 96);
    /* the body hangs from the thread at the pivot: a rod by its middle, a cloth by its top corner.
       Its rest position and the point the second body is measured from follow from that. */
    const off = hangGlass ? { x: 0, y: 0 } : { x: 0, y: 94 };
    const near = hangGlass ? { x: L / 2, y: 0 } : { x: 66, y: 94 };
    const ex = CX + near.x, ey = CY + near.y, Rn = Math.hypot(near.x, near.y), a0 = Math.atan2(near.y, near.x);
    /* the rest position, faint, and the arc the near end swung through */
    if (Math.abs(A) > 1) {
      ctx.save(); ctx.globalAlpha = 0.3; ctx.setLineDash([8, 8]); body(ctx, CX + off.x, CY + off.y, hangGlass ? ROD : CLOTH, 0, 'transparent'); ctx.restore();
      turnArc(ctx, CX, CY, Rn + 34, a0, a0 + ang, PAL.ink);
    }
    /* the held body: its near point a distance r from the rest position's near end, along the 18° line */
    const px = ex + r * S * ux, py = ey + r * S * uy;
    line(ctx, ex, ey, px, py, alpha(PAL.ink, 0.4), 2, [4, 8]);
    text(ctx, fmt(r, 1) + ' cm', (ex + px) / 2 + 14, (ey + py) / 2 + 22, PAL.ink, { size: 18, align: 'left', bg: alpha(PAL.panel, 0.85) });
    let hx, hy;
    if (heldGlass) { hx = px + (L / 2) * ux; hy = py + (L / 2) * uy; body(ctx, hx, hy, ROD, DIR, PAL.soft); marks(ctx, hx, hy, DIR, nm, '+', false); }
    else { hx = px + 70 * ux; hy = py + 70 * uy; body(ctx, hx, hy, CLOTH, 0, PAL.soft); clothFolds(ctx, hx, hy, 0); marks(ctx, hx, hy, 0, nm, '−', true); }
    /* the hanging body, turned about the thread */
    const hc = turned(CX, CY, off.x, off.y, ang);
    body(ctx, hc.x, hc.y, hangGlass ? ROD : CLOTH, ang, PAL.soft);
    if (!hangGlass) clothFolds(ctx, hc.x, hc.y, ang);
    marks(ctx, hc.x, hc.y, ang, nm, hangGlass ? '+' : '−', !hangGlass);
    line(ctx, CX, CY - 190, CX, CY, PAL.ink, 2);
    dot(ctx, CX, CY, PAL.ink, false, 8);
    /* labels beside their things */
    const far = turned(CX, CY, hangGlass ? -L / 2 : off.x - 66, off.y, ang);
    Lb.add(hangGlass ? 'glass rod, hanging' : 'silk cloth, hanging', far.x, far.y, -1, 0, PAL.ink, 20, 16);
    Lb.add('thread', CX, CY - 150, -1, 0, PAL.ink, 18, 14);
    const top = turned(CX, CY, off.x, off.y - (hangGlass ? 18 : 92), ang);
    Lb.add('q = ' + plus(qHang, 1) + ' nC', top.x, top.y, 0, -1, qc, 21, 22);
    const heldName = heldGlass ? 'glass rod, brought near' : hangGlass ? 'silk, brought near' : 'a second cloth, brought near';
    const tip = heldGlass ? { x: px + L * ux, y: py + L * uy } : { x: hx, y: hy - 96 };
    Lb.add(heldName, tip.x, tip.y, heldGlass ? 0.3 : 0, -1, PAL.ink, 20, 22);
    Lb.add('q = ' + plus(qHeld, 1) + ' nC', heldGlass ? hx : hx + 72, heldGlass ? hy + 20 : hy, heldGlass ? 0 : 1, heldGlass ? 1 : 0, qc, 21, 24);
    text(ctx, 'seen from the front', 40, H - 30, PAL.muted, { size: 18 });
    const hang = hangGlass ? 'glass rod' : 'silk cloth', held = heldGlass ? 'a second rod' : hangGlass ? 'silk' : 'a second cloth';
    const swing = unlike ? 'toward the ' + (heldGlass ? 'second rod' : 'silk') : 'away';
    topline(ctx, `A ${hang} holding ${plus(qHang, 1)} nC hangs by a thread, and ${held} holding ${plus(qHeld, 1)} nC is brought to ${fmt(r, 1)} cm: ${unlike ? 'unlike' : 'like'} charges, so the ${hangGlass ? 'rod' : 'cloth'} swings ${swing}.`);
    Lb.flush();
    const n1 = heldGlass ? 'rod 1' : hangGlass ? 'glass' : 'cloth 1', n2 = heldGlass ? 'rod 2' : hangGlass ? 'silk' : 'cloth 2';
    readout(d.readout, `\\kq_{\\text{${n1}}} = ${texSign(qHang, 1)}\\ \\text{nC}, \\qquad \\kq_{\\text{${n2}}} = ${texSign(qHeld, 1)}\\ \\text{nC}`,
      (unlike ? 'Unlike charges attract, so the hanging ' + (hangGlass ? 'rod' : 'cloth') + ' swings toward the ' + (heldGlass ? 'second rod' : 'silk') + '; '
        : 'Like charges repel, so the hanging ' + (hangGlass ? 'rod' : 'cloth') + ' swings away from the ' + (heldGlass ? 'second rod' : 'second cloth') + '; ')
      + 'bring the two closer and it swings farther, since the force between charges decreases with distance. Rubbing glass with silk leaves equal and opposite charges on the two, which is why one number sets both.');
  }
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
  const ps = ctl(d.controls, { label: '\\text{protons}', cls: '', min: 1, max: 10, step: 1, value: 3, unit: '', dec: 0, aria: 'how many protons the nucleus holds' });
  const es = ctl(d.controls, { label: '\\text{electrons}', cls: '', min: 0, max: 12, step: 1, value: 3, unit: '', dec: 0, aria: 'how many electrons orbit the nucleus' });
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
    nucleons.forEach((k, j) => { const rr = 13 * Math.sqrt(j), a = j * 2.39996; const x = CX + rr * Math.cos(a), y = CY + rr * Math.sin(a); particle(ctx, x, y, k, 12); hits.push({ x, y, r: 12, name: k === 'p+' ? 'a proton, charge +|qₑ|' : 'a neutron, no charge' }); });
    /* the electrons, spread over the three orbits */
    for (let i = 0; i < Ne; i++) { const o = ORBITS[i % 3], t = o.t0 + Math.floor(i / 3) * (TAU / 4); const p = onOrbit(o, t); particle(ctx, p.x, p.y, 'e-', 11); hits.push({ x: p.x, y: p.y, r: 14, name: 'an electron, charge −|qₑ|' }); }
    const Lb = labeller(ctx, H); Lb.block(0, 0, 1400, 96);
    Lb.add('nucleus', CX + 13 * Math.sqrt(Math.max(0, nucleons.length - 1)) + 4, CY + 30, 0.7, 0.7, PAL.ink, 19, 40);
    /* the legend and the tally at the right */
    const LX = 1010, LY = 140;
    legendRow(ctx, LX, LY, 'p+', 'proton, charge +|q_e|'); legendRow(ctx, LX, LY + 36, 'n0', 'neutron, no charge'); legendRow(ctx, LX, LY + 72, 'e-', 'electron, charge −|q_e|');
    text(ctx, `${Np} proton${Np === 1 ? '' : 's'} and ${Nn} neutron${Nn === 1 ? '' : 's'} in the nucleus`, LX - 10, LY + 150, PAL.ink, { size: 20 });
    text(ctx, `${Ne} electron${Ne === 1 ? '' : 's'} in orbit`, LX - 10, LY + 184, PAL.ink, { size: 20 });
    text(ctx, 'net charge  q = ' + (net === 0 ? '0' : plus(net, 0) + ' |q_e|'), LX - 10, LY + 240, qc, { size: 24, weight: 600 });
    text(ctx, net === 0 ? 'a neutral atom' : 'an ion', LX - 10, LY + 276, PAL.ink, { size: 20 });
    topline(ctx, net === 0 ? `${cap(wd(Np))} proton${Np === 1 ? '' : 's'} and ${wd(Ne)} electron${Ne === 1 ? '' : 's'}: the charges cancel and the atom is neutral.`
      : `${cap(wd(Np))} proton${Np === 1 ? '' : 's'} and ${wd(Ne)} electron${Ne === 1 ? '' : 's'} leave a net charge of ${plus(net, 0)} |q_e|: the atom is an ion.`);
    Lb.flush();
    readout(d.readout, `\\kq = N_{\\text{p}}|\\kqe| - N_{\\text{e}}|\\kqe| = (${Np} - ${Ne})(1.60 \\times 10^{-19}\\ \\text{C}) = ${net === 0 ? '0' : sciTex(net * QE) + '\\ \\text{C}'}`,
      net === 0 ? 'Every charge in nature is a whole number of the basic charge |q_e|, since it is some number of protons less some number of electrons; the neutrons of the nucleus add mass and no charge.'
        : `An atom with unequal numbers of protons and electrons is an ion. This one has ${Math.abs(net)} electron${Math.abs(net) === 1 ? '' : 's'} too ${net > 0 ? 'few' : 'many'}, so its net charge is ${Math.abs(net)} |q_e|, ${net > 0 ? 'positive' : 'negative'}, and it is still a whole number of the basic charge.`);
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
  const ns = ctl(d.controls, { label: '\\text{quarks at } +\\tfrac{2}{3}\\kqe', cls: '', min: 0, max: 3, step: 1, value: 2, unit: '', dec: 0, aria: 'how many of the three quarks carry two thirds of the basic charge' });
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
      Lb.add('quark, ' + (up ? '+⅔' : '−⅓') + ' q_e', x + 38 * lx, y + 38 * ly, lx, ly, qc, 20, 26);
    });
    Lb.add(n === 2 ? 'the proton' : 'three quarks', CX + R * Math.cos(-135 * RAD), CY + R * Math.sin(-135 * RAD), -0.7, -0.7, PAL.ink, 20, 22);
    text(ctx, 'q_tot = ' + (whole === 0 ? '0' : plus(whole, 0) + ' q_e'), 1000, 250, qc, { size: 26, weight: 600 });
    text(ctx, n === 2 ? 'the charge of the proton' : n === 1 ? 'the total charge the neutron has' : 'a whole number of the basic charge', 1000, 288, PAL.ink, { size: 19 });
    topline(ctx, n === 2 ? 'Two quarks of +2/3 and one of −1/3 add to +1 q_e, the charge of the proton.'
      : n === 1 ? 'One quark of +2/3 and two of −1/3 add to 0, which is the total charge the neutron has.'
      : n === 3 ? 'All three quarks at +2/3 add to +2 q_e, still a whole number of the basic charge.'
      : 'No quark at +2/3 and three at −1/3 add to −1 q_e, still a whole number of the basic charge.');
    Lb.flush();
    const terms = [...Array(3 - n).fill('-\\tfrac{1}{3}\\kqe'), ...Array(n).fill('+\\tfrac{2}{3}\\kqe')];
    const sum = terms.map((t, i) => (i === 0 && t.startsWith('+') ? t.slice(1) : t)).join(' ');
    readout(d.readout, `\\kqtot = ${sum} = ${whole === 0 ? '0' : texSign(whole, 0) + '\\,\\kqe'}`,
      'Three thirds always add to a whole number of the basic charge: with no quark, one, two or three at +2/3 the total is −1, 0, +1 or +2 times q_e, and no fraction of q_e is left over to be observed on its own.');
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
  const ns = ctl(d.controls, { label: '\\text{electrons moved}', cls: '', min: 0, max: 3, step: 1, value: 2, unit: '', dec: 0, aria: 'how many electrons rubbing moved from the cloth to the amber' });
  const AX = 400, AY = 300, KX = 960, KY = 300;
  const AMBER = [[-70, -100], [10, -118], [70, -90], [104, -30], [96, 50], [56, 108], [-20, 122], [-84, 90], [-110, 20], [-104, -50]];
  const AP = [[-50, -40], [40, 60]], AE = [[30, -50], [-46, 50], [-8, 10], [56, -2], [-2, 84]];   /* the amber's proton slots, and its electron slots, its own two first */
  const KP = [[-30, -80], [36, -6], [-40, 70]], KE = [[30, -76], [-40, -10], [24, 70]];           /* the cloth's */
  const CLOTH2 = CLOTH.map(([x, y]) => [x * 1.6, y * 1.5]);
  function draw() {
    const { ctx, H } = begin(d.c);
    const qc = C('charge');
    const n = ns.v;
    body(ctx, AX, AY, AMBER, 0, PAL.soft); body(ctx, KX, KY, CLOTH2, 0, PAL.soft); clothFolds(ctx, KX, KY, 0, 1.6, 1.5);
    AP.forEach(([x, y]) => particle(ctx, AX + x, AY + y, 'p+', 12));
    AE.slice(0, 2 + n).forEach(([x, y]) => particle(ctx, AX + x, AY + y, 'e-', 12));
    KP.forEach(([x, y]) => particle(ctx, KX + x, KY + y, 'p+', 12));
    KE.slice(0, 3 - n).forEach(([x, y]) => particle(ctx, KX + x, KY + y, 'e-', 12));
    /* the empty slots the electrons left, and the ones they took, faint */
    KE.slice(3 - n).forEach(([x, y]) => { ctx.save(); ctx.setLineDash([4, 5]); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(KX + x, KY + y, 12, 0, TAU); ctx.stroke(); ctx.restore(); });
    text(ctx, 'amber', AX, AY + 150, PAL.ink, { size: 20, align: 'center' });
    text(ctx, 'cloth', KX, KY + 160, PAL.ink, { size: 20, align: 'center' });
    const tally = (x, y, p, e) => {
      text(ctx, `${p} proton${p === 1 ? '' : 's'}, ${e} electron${e === 1 ? '' : 's'}`, x, y, PAL.ink, { size: 19, align: 'center' });
      text(ctx, 'net charge  q = ' + (p === e ? '0' : plus(p - e, 0) + ' |q_e|'), x, y + 32, qc, { size: 22, weight: 600, align: 'center' });
    };
    tally(AX, 120, 2, 2 + n); tally(KX, 110, 3, 3 - n);
    legendRow(ctx, 60, H - 60, 'p+', 'proton'); legendRow(ctx, 60, H - 28, 'e-', 'electron');
    text(ctx, 'q_tot = ' + (n ? '(−' + n + ' |q_e|) + (+' + n + ' |q_e|) = 0' : '0 + 0 = 0'), 1400 - 40, H - 40, qc, { size: 22, weight: 600, align: 'right' });
    topline(ctx, n === 0 ? 'The amber holds two protons and two electrons and the cloth three and three: both are neutral, and the total charge is zero.'
      : `${cap(WORDS[n])} electron${n === 1 ? ' has' : 's have'} moved from the cloth to the amber: the amber holds −${n} |q_e|, the cloth +${n} |q_e|, and the total is still zero.`);
    readout(d.readout, `\\kqtot = \\kq_{\\text{amber}} + \\kq_{\\text{cloth}} = (${n ? '-' + n + '\\,|\\kqe|' : '0'}) + (${n ? '+' + n + '\\,|\\kqe|' : '0'}) = 0`,
      n === 0 ? 'Before any rubbing each body holds as many electrons as protons, and only a few of its charges are drawn. Move electrons across and watch what each body holds and what the two hold together.'
        : 'Rubbing moved the electrons; it made none. Whatever the amber gained the cloth lost, so the two net charges are equal and opposite and their sum is what it was before, zero.');
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
  const ev = choice(d.controls, { label: '\\text{the event}', options: [{ value: 'create', label: 'creation' }, { value: 'annihilate', label: 'annihilation' }], value: 'create', aria: 'whether a pair is created from energy or annihilated into it', onInput: () => cy.reset() });
  const LAB = choice(d.controls, { label: '\\text{Labels}', options: [{ value: 'off', label: 'off' }, { value: 'on', label: 'on' }], value: 'off', aria: 'the names of the two particles' });
  const BX = 640, BY = 250, DX = 560, DY = 165;
  let hits = [], lastKey = '';
  /* the thick ink arrow the book draws for the energy, its head at (hx, y) */
  function energyArrow(ctx, hx, y, a) {
    ctx.save(); ctx.globalAlpha = a; arrow(ctx, hx - 320, y, hx, y, PAL.ink, 12); ctx.restore();
    text(ctx, 'E', hx - 160, y - 34, PAL.ink, { size: 26, weight: 600, align: 'center' });
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
      hits.push({ x: ep.x, y: ep.y, r: 20, name: 'the electron, charge −1 qₑ' }, { x: pp.x, y: pp.y, r: 20, name: 'the antielectron (positron), charge +1 qₑ' });
      if (LAB.value === 'on') { Lb.add('electron, −1 q_e', ep.x, ep.y, 0, -1, PAL.ink, 19, 24); Lb.add('antielectron, +1 q_e', pp.x, pp.y, 0, 1, PAL.ink, 19, 24); }
    }
    text(ctx, 'Δm = 2mₑ = E/c²', BX, BY + 120, PAL.ink, { size: 22, align: 'center' });
    text(ctx, 'Before', 300, H - 70, PAL.ink, { size: 20, align: 'center' }); text(ctx, 'q_tot = 0', 300, H - 38, qc, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'After', 1000, H - 70, PAL.ink, { size: 20, align: 'center' }); text(ctx, 'q_tot = 0', 1000, H - 38, qc, { size: 22, weight: 600, align: 'center' });
    const lines = create
      ? { before: 'Energy E is on its way: no charged particle exists yet, and the total charge is zero.', burst: 'Enough energy is present, and it becomes matter: an electron and an antielectron, of mass 2mₑ together.', after: 'The electron and the antielectron fly apart: their charges are −1 q_e and +1 q_e, and the total charge is still zero.' }
      : { before: 'An electron and an antielectron approach: −1 q_e and +1 q_e, a total charge of zero.', burst: 'Matter meets antimatter and annihilates: the mass 2mₑ becomes energy E = Δm c².', after: 'Only energy leaves: there is no charged particle at all, and the total charge is still zero.' };
    topline(ctx, lines[phase]);
    Lb.flush();
    const key = ev.value + phase;
    if (key !== lastKey) {
      lastKey = key;
      const pair = '(-1)\\,\\kqe + (+1)\\,\\kqe = 0';
      readout(d.readout, create ? `\\kqtot = 0 \\ \\text{before}, \\qquad \\kqtot = ${pair} \\ \\text{after}` : `\\kqtot = ${pair} \\ \\text{before}, \\qquad \\kqtot = 0 \\ \\text{after}`,
        'The mass that appears or vanishes is Δm = 2mₑ = E/c², and since the two particles carry equal and opposite charges, the total charge is the same before and after: charge is conserved even where matter is made or unmade.');
    }
  }
  hover(d.stage, () => hits);
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
