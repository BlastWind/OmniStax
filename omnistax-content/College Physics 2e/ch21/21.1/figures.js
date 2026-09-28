/* Figures for section 21.1 Resistors in Series and Parallel.
   A connection of resistors that is only being looked at has no time in it, so
   every figure here but one is a still picture: none registers a cycle, and a
   slider or a choice alone redraws it; the reduction told as a story has the one
   transport, which plays its step slider. The page binds the
   resistance, the current, the voltage and the power, which is what ch21/COLOR.md
   gives 21.1; the wires, the source, the zigzags and the frame are ink. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['21.1'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, headline } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }
const ohms = (r) => fmt(r, r < 10 ? 2 : 1) + ' Ω';
const ohm = (r) => fmt(r, r < 10 ? 2 : 1) + '\\ \\Omega';
const par = (...rs) => 1 / rs.reduce((s, r) => s + 1 / r, 0);

/* ---------- circuit pieces at the book's symbol conventions ----------
   A resistor is a zigzag, a source is one cell with a long thin positive plate
   and a short thick negative one, a capacitor is two equal plates, a meter is a
   ring with its letter in it, a switch is a blade on two contacts, and a current
   arrow lies beside its wire and never on it. Every piece paints out the wire
   beneath itself, so a caller draws the loop whole and sets the pieces on it. */
const WIRE = 3.5;
const wires = (ctx, pts) => { for (let i = 1; i < pts.length; i++) line(ctx, pts[i - 1][0], pts[i - 1][1], pts[i][0], pts[i][1], PAL.ink, WIRE); };
const node = (ctx, x, y, r) => dot(ctx, x, y, PAL.ink, true, r || 7);
/* the wire under a piece, painted out over a length L along the angle a */
function gap(ctx, x, y, a, L, w) { ctx.save(); ctx.translate(x, y); ctx.rotate(a); line(ctx, -L / 2, 0, L / 2, 0, PAL.panel, w || 8); ctx.restore(); }
const ZL = 96, ZA = 13;
/* The zigzag itself, centred at (x, y) and running along the angle a; o.len is its
   length and o.variable strikes the arrow of a variable resistor across it. */
function zigzag(ctx, x, y, a, o) {
  const L = (o && o.len) || ZL, n = 6, s = L / n;
  gap(ctx, x, y, a, L, 6);
  ctx.save(); ctx.translate(x, y); ctx.rotate(a);
  ctx.strokeStyle = PAL.ink; ctx.lineWidth = WIRE; ctx.lineJoin = 'miter'; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(-L / 2, 0);
  for (let i = 0; i < n; i++) { ctx.lineTo(-L / 2 + (i + 0.25) * s, -ZA); ctx.lineTo(-L / 2 + (i + 0.75) * s, ZA); }
  ctx.lineTo(L / 2, 0); ctx.stroke();
  if (o && o.variable) arrow(ctx, -L * 0.42, ZA + 18, L * 0.42, -ZA - 18, PAL.ink, 3);
  ctx.restore();
}
/* A resistor lying along a horizontal wire or standing on a vertical one, its name
   and its value set beside it in the resistance hue and off the wire: the name above
   and the value below a horizontal one (o.stack 'above' or 'below' puts both on one
   side), and both on one side of a vertical one (o.side, -1 for the left). */
function resistor(ctx, x, y, horiz, name, val, o) {
  o = o || {}; const rc = C('resistance'), v = typeof val === 'number' ? ohms(val) : val;
  zigzag(ctx, x, y, horiz ? 0 : Math.PI / 2, o);
  if (horiz) {
    if (o.stack) {
      const s = o.stack === 'above' ? -1 : 1, y1 = y + s * (s < 0 ? 62 : 36), y2 = y + s * (s < 0 ? 34 : 64);
      if (name) text(ctx, name, x, y1, rc, { size: 24, weight: 600, align: 'center' });
      if (v) text(ctx, v, x, y2, rc, { size: 21, align: 'center' });
    } else {
      if (name) text(ctx, name, x, y - 38, rc, { size: 24, weight: 600, align: 'center' });
      if (v) text(ctx, v, x, y + 36, rc, { size: 21, align: 'center' });
    }
  } else {
    const s = o.side === 1 ? 1 : -1, lx = x + s * 32, al = s > 0 ? 'left' : 'right';
    if (name && v) { text(ctx, name, lx, y - 15, rc, { size: 24, weight: 600, align: al }); text(ctx, v, lx, y + 16, rc, { size: 21, align: al }); }
    else if (name) text(ctx, name, lx, y, rc, { size: 24, weight: 600, align: al });
    else if (v) text(ctx, v, lx, y, rc, { size: 21, align: al });
  }
}
/* One cell, as the book draws every source: a long thin plate for the positive
   terminal and a short thick one for the negative. `plus` is the way the positive
   plate faces, 'up' or 'down' on a vertical wire and 'left' or 'right' on a
   horizontal one. The label, one string or [name, value], is set in the voltage
   hue on the side o.side (-1 is left, or above) and the two signs on the other. */
function cell(ctx, x, y, plus, label, o) {
  o = o || {}; const vc = C('voltage'), vert = plus === 'up' || plus === 'down', s = plus === 'up' || plus === 'left' ? -1 : 1;
  const side = o.side === undefined ? (vert ? -1 : 1) : o.side, q = -side;   /* the signs go opposite the label */
  const lab = label === null || label === undefined ? [] : Array.isArray(label) ? label : [label];
  if (vert) {
    gap(ctx, x, y, Math.PI / 2, 20, 8);
    line(ctx, x - 30, y + s * 10, x + 30, y + s * 10, PAL.ink, 4.5);       /* the long positive plate */
    line(ctx, x - 15, y - s * 10, x + 15, y - s * 10, PAL.ink, 8);          /* the short negative one */
    if (o.signs !== false) {
      text(ctx, '+', x + q * 48, y + s * 15, PAL.muted, { size: 22, weight: 600, align: 'center' });
      text(ctx, '−', x + q * 48, y - s * 15, PAL.muted, { size: 22, weight: 600, align: 'center' });
    }
    const lx = x + side * 46, al = side < 0 ? 'right' : 'left';
    if (lab.length === 2) { text(ctx, lab[0], lx, y - 13, vc, { size: 23, weight: 600, align: al }); text(ctx, lab[1], lx, y + 15, vc, { size: 20, align: al }); }
    else if (lab.length === 1) text(ctx, lab[0], lx, y, vc, { size: 23, weight: 600, align: al });
  } else {
    gap(ctx, x, y, 0, 20, 8);
    line(ctx, x + s * 10, y - 30, x + s * 10, y + 30, PAL.ink, 4.5);
    line(ctx, x - s * 10, y - 15, x - s * 10, y + 15, PAL.ink, 8);
    const sy = y - side * 32;
    if (o.signs !== false) {
      text(ctx, '+', x + s * 24, sy, PAL.muted, { size: 22, weight: 600, align: 'center' });
      text(ctx, '−', x - s * 24, sy, PAL.muted, { size: 22, weight: 600, align: 'center' });
    }
    const ly = y + side * 44;
    if (lab.length === 2) { text(ctx, lab[0], x, ly, vc, { size: 23, weight: 600, align: 'center' }); text(ctx, lab[1], x, ly + side * 27, vc, { size: 20, align: 'center' }); }
    else if (lab.length === 1) text(ctx, lab[0], x, ly, vc, { size: 23, weight: 600, align: 'center' });
  }
}
/* A meter: a ring in ink with its letter in it, painted over the wire it sits on. */
function meterFace(ctx, x, y, letter, r) {
  const R = r || 42;
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = WIRE;
  ctx.beginPath(); ctx.arc(x, y, R, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
  if (letter) text(ctx, letter, x, y, PAL.ink, { size: 28, weight: 600, align: 'center' });
}
/* A switch on a wire running along the angle a: two contacts and a blade hinged on
   the first, lying on the second when closed and lifted off it when open. */
function sw(ctx, x, y, a, closed) {
  const h = 32, c = +closed;
  gap(ctx, x, y, a, 2 * h, 8);
  ctx.save(); ctx.translate(x, y); ctx.rotate(a);
  dot(ctx, -h, 0, PAL.ink, true, 6); dot(ctx, h, 0, PAL.ink, true, 6);
  line(ctx, -h, 0, F.lerp(h - 14, h - 2, c), F.lerp(-34, -6, c), PAL.ink, 4);
  ctx.restore();
}
/* A current arrow beside its wire and never on it: it runs along (dx, dy), sits
   o.off units off the wire to the side o.side (+1 is the inside of a loop walked
   clockwise), and its name goes one step further out, in the current hue. */
function flow(ctx, x, y, dx, dy, name, o) {
  o = o || {}; const cc = C('current'), L = o.len || 64, w = o.w || 5, side = o.side === undefined ? 1 : o.side, off = o.off === undefined ? 26 : o.off;
  const nx = -dy * side, ny = dx * side, ax = x + nx * off, ay = y + ny * off;
  arrow(ctx, ax - dx * L / 2, ay - dy * L / 2, ax + dx * L / 2, ay + dy * L / 2, cc, w);
  if (!name) return;
  const g = w / 2 + 18;
  if (dy) text(ctx, name, ax + nx * g, ay, cc, { size: 21, weight: 600, align: nx > 0 ? 'left' : 'right', bg: PAL.panel });
  else text(ctx, name, ax, ay + ny * g, cc, { size: 21, weight: 600, align: 'center', bg: PAL.panel });
}
/* A resistor on its way from one wiring to another: its zigzag at (x, y) turned to the
   angle a, and its name and value beside it as `resistor` sets them, horizontal below a
   quarter turn and vertical past it, faded out through the middle of the turn so the
   labels never ride a slanted zigzag. `side` is the vertical labels' side. */
function resistorPose(ctx, x, y, a, name, val, side) {
  const la = Math.abs(Math.cos(2 * a));
  zigzag(ctx, x, y, a);
  if (la < 0.02) return;
  ctx.save(); ctx.globalAlpha *= la;
  const rc = C('resistance'), v = ohms(val);
  if (a < Math.PI / 4) { text(ctx, name, x, y - 38, rc, { size: 24, weight: 600, align: 'center' }); text(ctx, v, x, y + 36, rc, { size: 21, align: 'center' }); }
  else { const s = side === 1 ? 1 : -1, lx = x + s * 32, al = s > 0 ? 'left' : 'right'; text(ctx, name, lx, y - 15, rc, { size: 24, weight: 600, align: al }); text(ctx, v, lx, y + 16, rc, { size: 21, align: al }); }
  ctx.restore();
}
/* The soft panel that picks the group of a network being combined out of the rest. */
function spot(ctx, l, t, r, b) {
  ctx.save(); ctx.fillStyle = alpha(C('resistance'), 0.14); ctx.strokeStyle = alpha(C('resistance'), 0.5);
  ctx.lineWidth = 2.5; ctx.setLineDash([9, 7]); ctx.beginPath(); ctx.roundRect(l, t, r - l, b - t, 14); ctx.fill(); ctx.stroke(); ctx.restore();
}
/* A lamp on a vertical wire: the book's circle with a coiled filament, its glow set by
   the fraction of its full power it is giving out, in the power hue. */
function bulb(ctx, x, y, frac) {
  if (frac > 0) {
    const g = ctx.createRadialGradient(x, y, 40, x, y, 110);
    g.addColorStop(0, alpha(C('power'), 0.42 * frac)); g.addColorStop(1, alpha(C('power'), 0));
    ctx.save(); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, 110, 0, 2 * Math.PI); ctx.fill(); ctx.restore();
  }
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = WIRE;
  ctx.beginPath(); ctx.arc(x, y, 44, 0, 2 * Math.PI); ctx.fill(); ctx.stroke();
  ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(x - 30, y + 4); ctx.lineTo(x - 24, y + 4);
  for (let k = 0; k < 4; k++) ctx.arc(x - 18 + k * 12, y + 4, 6, Math.PI, 0, false);
  ctx.lineTo(x + 30, y + 4); ctx.stroke(); ctx.restore();
}

/* =====================================================================
   FIGURE 21.2: four resistors, wired one after the other or each on a path
   of its own. Still: the reader is choosing a wiring and two resistances,
   and nothing in the picture has a clock.
===================================================================== */
(function () {
  const d = sim('sim-four-resistors', 560);
  const R3 = ctl(d.controls, { label: '\\kResthree', cls: 'resistance', min: 1, max: 20, step: 0.5, value: 13, unit: 'Ω', dec: 1, aria: 'the third resistance' });
  const R4 = ctl(d.controls, { label: '\\kResfour', cls: 'resistance', min: 1, max: 20, step: 0.5, value: 4, unit: 'Ω', dec: 1, aria: 'the fourth resistance' });
  const how = choice(d.controls, { label: '\\text{the wiring}', options: [{ value: 'series', label: 'in series' }, { value: 'parallel', label: 'in parallel' }], value: 'series', aria: 'how the four resistors are wired' });
  const R1 = 1.00, R2 = 6.00;
  const { formula: fx, note } = F.readout(d);
  let wired = how.value;
  /* each resistor's place in the two wirings, [x, y, angle]; a rewiring carries every one from its place in the old to its place in the new */
  const POSE = { series: [300, 560, 820, 1080].map((x) => [x, 200, 0]), parallel: [420, 680, 940, 1200].map((x) => [x, 335, Math.PI / 2]) };
  function draw() {
    const { ctx } = begin(d.c);
    const rs = [R1, R2, R3.v, R4.v], names = ['R_1', 'R_2', 'R_3', 'R_4'];
    const series = how.value === 'series';
    const tot = series ? rs.reduce((a, b) => a + b, 0) : par(...rs);
    const big = Math.max(...rs), small = Math.min(...rs);
    headline(ctx, series
      ? 'Wired one after the other, the four resistors together come to ' + fmt(tot, 1) + ' Ω, which is more than the largest of them on its own.'
      : 'Wired each on a path of its own, the four resistors together come to ' + fmt(tot, 2) + ' Ω, which is less than the smallest of them on its own.');
    F.faded(ctx, how.a('series'), [0, 0], () => {
      wires(ctx, [[180, 200], [180, 470], [1240, 470], [1240, 200], [180, 200]]);
      flow(ctx, 700, 470, -1, 0, 'I');
      [430, 690, 950].forEach((x) => flow(ctx, x, 200, 1, 0, null, { len: 44, w: 4 }));
      text(ctx, 'the same current passes through every one of them', 710, 530, PAL.muted, { size: 19, align: 'center' });
    });
    F.faded(ctx, how.a('parallel'), [0, 0], () => {
      wires(ctx, [[180, 200], [1200, 200]]);
      wires(ctx, [[180, 470], [1200, 470]]);
      wires(ctx, [[180, 200], [180, 470]]);
      [420, 680, 940, 1200].forEach((x, i) => {
        wires(ctx, [[x, 200], [x, 470]]);
        if (i < 3) node(ctx, x, 200); if (i < 3) node(ctx, x, 470);
        flow(ctx, x, 252, 0, 1, null, { len: 40, w: 4, side: -1 });
      });
      flow(ctx, 300, 200, 1, 0, 'I');
      text(ctx, 'the current divides among the four paths', 710, 530, PAL.muted, { size: 19, align: 'center' });
    });
    cell(ctx, 180, 335, 'up', null);
    const poses = how.mix((v) => POSE[v].flat());
    rs.forEach((r, i) => resistorPose(ctx, poses[3 * i], poses[3 * i + 1], poses[3 * i + 2], names[i], r));
    /* each resistance keeps its key, so a rewiring carries every term into its place in the other rule */
    const terms = rs.map((r, i) => '\\mk{r' + i + '}{' + ohm(r) + '}');
    F.morph(fx, series
      ? '\\mk{R}{\\kRess} = ' + terms.join(' + ') + ' = \\mk{v}{' + ohm(tot) + '}'
      : '\\mk{R}{\\kResp} = \\left(' + terms.map((t) => '\\dfrac{1}{' + t + '}').join(' + ') + '\\right)^{-1} = \\mk{v}{' + ohm(tot) + '}',
      { force: wired !== how.value });
    wired = how.value;
    note.textContent = (
      series
        ? 'The largest of the four on its own is ' + fmt(big, big < 10 ? 2 : 1) + ' Ω, and the four in series come to more than that, because the current has to pass through each of them in turn.'
        : 'The smallest of the four on its own is ' + fmt(small, small < 10 ? 2 : 1) + ' Ω, and the four in parallel come to less than that, because every path added gives the current somewhere else to go.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURES 21.3 + 21.4 + 21.6 folded: one battery and three resistors in the
   three wirings this section works through, each beside the single resistance
   it reduces to. Still, for the same reason as Figure 21.2.
===================================================================== */
(function () {
  const d = sim('sim-three-resistors', 660);
  const Vs = ctl(d.controls, { label: '\\kV', cls: 'voltage', min: 1, max: 24, step: 0.5, value: 12, unit: 'V', dec: 1, aria: 'the voltage the source puts out' });
  const R1 = ctl(d.controls, { label: '\\kResone', cls: 'resistance', min: 0.5, max: 20, step: 0.5, value: 1, unit: 'Ω', dec: 2, aria: 'the first resistance' });
  const R2 = ctl(d.controls, { label: '\\kRestwo', cls: 'resistance', min: 0.5, max: 20, step: 0.5, value: 6, unit: 'Ω', dec: 2, aria: 'the second resistance' });
  const R3 = ctl(d.controls, { label: '\\kResthree', cls: 'resistance', min: 0.5, max: 20, step: 0.5, value: 13, unit: 'Ω', dec: 2, aria: 'the third resistance' });
  const how = F.select(d.controls, {
    label: '\\text{the wiring}',
    options: [{ value: 'series', label: 'all three in series' }, { value: 'parallel', label: 'all three in parallel' }, { value: 'mixed', label: 'R₂ and R₃ in parallel, in series with R₁' }],
    value: 'series', aria: 'how the three resistors are wired',
  });
  const { formula: fx, note } = F.readout(d);
  let wired = how.value;
  /* the three resistors' places in each wiring, [x, y, angle] each, and the source's height last */
  const H = 0, V_ = Math.PI / 2;
  const POSE = {
    series: [280, 230, H, 440, 230, H, 600, 230, H, 355],
    parallel: [300, 355, V_, 520, 355, V_, 740, 355, V_, 355],
    mixed: [310, 200, H, 600, 200, H, 600, 350, H, 340],
  };
  /* the equivalent circuit, drawn to the right of whichever wiring is shown */
  function equivalent(ctx, name, ohmsv, V) {
    wires(ctx, [[900, 230], [1300, 230], [1300, 480], [900, 480], [900, 230]]);
    cell(ctx, 900, 355, 'up', fmt(V, 1) + ' V');
    resistor(ctx, 1100, 230, true, name, ohmsv);
    text(ctx, 'the one resistance it comes to', 1100, 530, PAL.muted, { size: 19, align: 'center' });
  }
  function draw() {
    const { ctx } = begin(d.c);
    const V = Vs.v, r1 = R1.v, r2 = R2.v, r3 = R3.v, vc = C('voltage'), cc = C('current');
    const rs = [r1, r2, r3], w = how.value;
    /* the parts only one wiring has fade out as the next one's arrive; the three resistors
       and the source are in every wiring, so they move from their old places to their new */
    const Rs = r1 + r2 + r3, Rp3 = par(r1, r2, r3), Rp = par(r2, r3), Rt = r1 + Rp;
    F.faded(ctx, how.a('series'), [0, 0], () => {
      const I = V / Rs, vs = rs.map((r) => I * r);
      wires(ctx, [[160, 230], [720, 230], [720, 480], [160, 480], [160, 230]]);
      [280, 440, 600].forEach((x, i) => text(ctx, 'V_' + (i + 1) + ' = ' + fmt(vs[i], 2) + ' V', x, 330, vc, { size: 20, weight: 600, align: 'center' }));
      flow(ctx, 440, 480, -1, 0, 'I = ' + fmt(I, 3) + ' A');
      text(ctx, 'the same current in every resistor', 440, 540, PAL.muted, { size: 19, align: 'center' });
    });
    F.faded(ctx, how.a('parallel'), [0, 0], () => {
      const I = V / Rp3;
      wires(ctx, [[160, 230], [740, 230]]);
      wires(ctx, [[160, 480], [740, 480]]);
      wires(ctx, [[160, 230], [160, 480]]);
      [300, 520, 740].forEach((x, i) => {
        wires(ctx, [[x, 230], [x, 480]]);
        if (i < 2) { node(ctx, x, 230); node(ctx, x, 480); }
        flow(ctx, x, 278, 0, 1, null, { len: 40, w: 4, side: i === 0 ? 1 : -1 });
        text(ctx, 'I_' + (i + 1) + ' = ' + fmt(V / rs[i], 2) + ' A', x, 524, cc, { size: 20, weight: 600, align: 'center' });
      });
      flow(ctx, 230, 230, 1, 0, 'I = ' + fmt(I, 2) + ' A', { len: 56 });
      text(ctx, 'every resistor has the full ' + fmt(V, 1) + ' V across it', 450, 180, vc, { size: 20, align: 'center' });
    });
    F.faded(ctx, how.a('mixed'), [0, 0], () => {
      const I = V / Rt, V1 = I * r1, Vp = V - V1;
      wires(ctx, [[160, 200], [720, 200], [720, 480], [160, 480], [160, 200]]);
      wires(ctx, [[480, 200], [480, 350], [720, 350]]);
      node(ctx, 480, 200); node(ctx, 720, 350);
      flow(ctx, 300, 480, -1, 0, 'I = ' + fmt(I, 2) + ' A');
      flow(ctx, 520, 200, 1, 0, 'I_2 = ' + fmt(Vp / r2, 2) + ' A', { len: 44, side: 1 });
      flow(ctx, 500, 350, 1, 0, 'I_3 = ' + fmt(Vp / r3, 2) + ' A', { len: 36, side: 1 });
      text(ctx, 'V_1 = ' + fmt(V1, 2) + ' V', 310, 290, vc, { size: 20, weight: 600, align: 'center' });
      text(ctx, 'V_p = ' + fmt(Vp, 2) + ' V across the pair', 600, 444, vc, { size: 20, weight: 600, align: 'center' });
    });
    const p = how.mix((v) => POSE[v].flat());
    cell(ctx, 160, p[9], 'up', fmt(V, 1) + ' V');
    rs.forEach((r, i) => resistorPose(ctx, p[3 * i], p[3 * i + 1], p[3 * i + 2], 'R_' + (i + 1), r, i === 0 ? 1 : -1));
    const [Req, I] = w === 'series' ? [Rs, V / Rs] : w === 'parallel' ? [Rp3, V / Rp3] : [Rt, V / Rt];
    equivalent(ctx, w === 'series' ? 'R_s' : w === 'parallel' ? 'R_p' : 'R_tot', Req, V);
    headline(ctx, w === 'series'
      ? 'The three resistors in series come to ' + fmt(Rs, 2) + ' Ω, so the source drives ' + fmt(I, 3) + ' A through all three of them.'
      : w === 'parallel'
        ? 'The three resistors in parallel come to ' + fmt(Rp3, 3) + ' Ω, less than the smallest of them, so the source drives ' + fmt(I, 2) + ' A.'
        : 'A parallel pair behind a resistor in series with it comes to ' + fmt(Rt, 2) + ' Ω, and of the ' + fmt(V, 1) + ' V the source puts out only ' + fmt(V - I * r1, 2) + ' V reaches the pair.');
    /* each resistance keeps its key through a rewiring: R₂ and R₃ go into the parallel pair's bracket and R₁ steps out of it */
    const a = '\\mk{a}{\\kResone}', b = '\\mk{b}{\\kRestwo}', c = '\\mk{c}{\\kResthree}', inv = (...xs) => '\\left(' + xs.map((x) => '\\dfrac{1}{' + x + '}').join(' + ') + '\\right)^{-1}';
    F.morph(fx, (w === 'series'
      ? '\\mk{R}{\\kRess} = ' + a + ' + ' + b + ' + ' + c
      : w === 'parallel' ? '\\mk{R}{\\kResp} = ' + inv(a, b, c) : '\\mk{R}{\\kRestot} = ' + a + ' + ' + inv(b, c))
      + ' = \\mk{v}{' + ohm(Req) + '}', { force: wired !== w });
    wired = w;
    note.textContent = w === 'series'
      ? 'The source drives ' + fmt(I, 3) + ' A through all three. The three voltage drops are ' + rs.map((r) => fmt(I * r, 2) + ' V').join(', ') + ', and they add to the ' + fmt(V, 1) + ' V the source puts out. The source delivers ' + fmt(V * I, 2) + ' W.'
      : w === 'parallel'
        ? 'The source drives ' + fmt(I, 2) + ' A. The three branch currents are ' + rs.map((r) => fmt(V / r, 2) + ' A').join(', ') + ', and they add to the ' + fmt(I, 2) + ' A the source drives. The source delivers ' + fmt(V * I, 1) + ' W.'
        : 'The source drives ' + fmt(I, 2) + ' A. The resistor in series takes ' + fmt(I * r1, 2) + ' V, so the pair behind it has only ' + fmt(V - I * r1, 2) + ' V, and the current through R₂ is ' + fmt((V - I * r1) / r2, 2) + ' A, which dissipates ' + fmt(Math.pow(V - I * r1, 2) / r2, 1) + ' W in it.';
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 21.5: seven resistors reduced to one, as a story slider from step
   1 to step 5. Every position is a function of the slider: resistors in
   series slide together into one, parallel rows fold onto the wire they
   share, and the formula bends from one step's grouping into the next.
   R₂ and R₃ stay the reader's after they fold: a drag lights and pulses
   the resistor each now lives in, whose value changes with it. The seven
   names stay on at step 1, past root rule 26.7's six, because a schematic
   whose resistors are unnamed cannot be read.
===================================================================== */
(function () {
  const d = sim('sim-reduce-network', 660);
  const R2 = ctl(d.controls, { label: '\\kRestwo', cls: 'resistance', min: 1, max: 20, step: 0.5, value: 4, unit: 'Ω', dec: 1, aria: 'the second resistance' });
  const R3 = ctl(d.controls, { label: '\\kResthree', cls: 'resistance', min: 1, max: 20, step: 0.5, value: 6, unit: 'Ω', dec: 1, aria: 'the third resistance' });
  const st = ctl(d.controls, { label: '\\text{step}', cls: 'k', min: 1, max: 5, step: 0.01, value: 1, unit: '', dec: 0, aria: 'how far the reduction has been carried' });
  F.story(d, st, { stops: [{ v: 1, label: '7 resistors' }, { v: 2, label: 'Rp, Rp′' }, { v: 3, label: 'Rs' }, { v: 4, label: 'Rp″' }, { v: 5, label: 'Rtot' }], ms: 1400 });
  const r1 = 1.0, r4 = 12.0, r5 = 3.0, r6 = 6.0, r7 = 20.0;
  const TOP = 260, LOW = 450, BOT = 580, A = 430, B = 1180, ROWS = [155, 260, 365], ROWS2 = [210, 310];
  const lerp = F.lerp, sm = F.ease.smooth;
  /* the resistor each slider feeds is lit while the slider is held or hovered, and pulses once when a drag starts */
  const lit = F.tween(d, 0), pulse = F.tween(d, 1);
  let fed = null, folded = false;
  [[R2, 'R_2'], [R3, 'R_3']].forEach(([h, name]) => {
    const on = () => { fed = name; lit.to(1, 250); }, off = () => { if (!h.el.matches(':hover, :focus-within')) lit.to(0, 350); };
    h.el.addEventListener('pointerenter', on); h.el.addEventListener('focusin', on);
    h.el.addEventListener('pointerleave', off); h.el.addEventListener('focusout', off);
    h.el.addEventListener('pointerdown', () => { on(); if (folded) { pulse.set(0); pulse.to(1, 700, F.ease.linear); } });
    h.el.addEventListener('input', () => { fed = name; lit.to(1, 150); clearTimeout(h.idle); h.idle = setTimeout(off, 700); });
  });
  /* a resistor drawn at an opacity, so that the ones merging fade as the one they become arrives */
  function faded(ctx, a, f) { if (a <= 0.01) return; ctx.save(); ctx.globalAlpha = a; f(); ctx.restore(); }
  /* the zigzag with round joins, the Manim look */
  function zigzagM(ctx, x, y, a, o) {
    const L = (o && o.len) || ZL, n = 6, s = L / n;
    gap(ctx, x, y, a, L, 6);
    ctx.save(); ctx.translate(x, y); ctx.rotate(a);
    const h = (o && o.hi) || 0, g = 1 + 0.2 * ((o && o.pop) || 0);
    ctx.scale(g, g);
    ctx.strokeStyle = PAL.ink; ctx.lineWidth = WIRE + 1; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(-L / 2, 0);
    for (let i = 0; i < n; i++) { ctx.lineTo(-L / 2 + (i + 0.25) * s, -ZA); ctx.lineTo(-L / 2 + (i + 0.75) * s, ZA); }
    ctx.lineTo(L / 2, 0); ctx.stroke();
    if (h > 0.01) { ctx.globalAlpha *= h; ctx.strokeStyle = C('resistance'); ctx.lineWidth = WIRE + 2.5; ctx.stroke(); }
    if (o && o.variable) arrow(ctx, -L * 0.42, ZA + 18, L * 0.42, -ZA - 18, PAL.ink, 3);
    ctx.restore();
  }
  function resistorM(ctx, x, y, horiz, name, val, o) {
    o = Object.assign(name === target ? { hi: litNow, pop: popNow } : {}, o); const rc = C('resistance'), v = typeof val === 'number' ? ohms(val) : val;
    zigzagM(ctx, x, y, horiz ? 0 : Math.PI / 2, o);
    if (horiz) {
      if (o.stack) {
        const s = o.stack === 'above' ? -1 : 1, y1 = y + s * (s < 0 ? 62 : 36), y2 = y + s * (s < 0 ? 34 : 64);
        if (name) text(ctx, name, x, y1, rc, { size: 24, weight: 600, align: 'center' });
        if (v) text(ctx, v, x, y2, rc, { size: 21, align: 'center' });
      } else {
        if (name) text(ctx, name, x, y - 38, rc, { size: 24, weight: 600, align: 'center' });
        if (v) text(ctx, v, x, y + 36, rc, { size: 21, align: 'center' });
      }
    } else {
      const s = o.side === 1 ? 1 : -1, lx = x + s * 32, al = s > 0 ? 'left' : 'right';
      if (name && v) { text(ctx, name, lx, y - 15, rc, { size: 24, weight: 600, align: al }); text(ctx, v, lx, y + 16, rc, { size: 21, align: al }); }
      else if (name) text(ctx, name, lx, y, rc, { size: 24, weight: 600, align: al });
      else if (v) text(ctx, v, lx, y, rc, { size: 21, align: al });
    }
  }
  /* the grouping at each stop: the terms about to merge carry one key, and the key map bends them into the one they become */
  const q = (x) => '\\left(' + x + '\\right)^{-1}';
  const mk = (key, x) => '\\mk{' + key + '}{' + x + '}', inv = (...xs) => q(xs.map((x) => '\\frac{1}{' + x + '}').join(' + '));
  const SYM = { R1: '\\kResone', R2: '\\kRestwo', R3: '\\kResthree', R4: '\\kResfour', R5: '\\kRes_5', R6: '\\kRes_6', R7: '\\kRes_7', Rp: '\\kResp', Rq: '\\kResp\'', Rs: '\\kRess', Rpp: '\\kResp\'\'', Rtot: '\\kRestot' };
  const S = (k) => mk(k, SYM[k]), N = (v, k) => mk(k + 'val', ohm(v[k]));
  /* each stop states the step it is about to take, as the new resistance = the combination = its numbers = its value */
  const FORM = [
    (v) => S('Rp') + ' = ' + inv(S('R2'), S('R3'), S('R4')) + ' = ' + inv(N(v, 'R2'), N(v, 'R3'), N(v, 'R4')) + ' = ' + N(v, 'Rp'),
    (v) => S('Rs') + ' = ' + S('Rp') + ' + ' + S('Rq') + ' = ' + N(v, 'Rp') + ' + ' + N(v, 'Rq') + ' = ' + N(v, 'Rs'),
    (v) => S('Rpp') + ' = ' + inv(S('Rs'), S('R7')) + ' = ' + inv(N(v, 'Rs'), N(v, 'R7')) + ' = ' + N(v, 'Rpp'),
    (v) => S('Rtot') + ' = ' + S('R1') + ' + ' + S('Rpp') + ' = ' + N(v, 'R1') + ' + ' + N(v, 'Rpp') + ' = ' + N(v, 'Rtot'),
    (v) => S('Rtot') + ' = ' + N(v, 'Rtot'),
  ];
  /* between two stops the combination collapses into the resistance it defines, which keeps its key into the next step */
  const into = (to, ...from) => Object.fromEntries(from.flatMap((k) => [[k, to], [k + 'val', to + 'val']]));
  const KEYS = [
    { ...into('Rp', 'R2', 'R3', 'R4'), ...into('Rq', 'R5', 'R6') },
    into('Rs', 'Rp', 'Rq'),
    into('Rpp', 'Rs', 'R7'),
    into('Rtot', 'R1', 'Rpp'),
  ];
  const { formula: fx, note } = F.readout(d);
  fx.style.minHeight = '4.4em';
  let target = null, litNow = 0, popNow = 0;
  function draw() {
    const { ctx } = begin(d.c);
    const r2 = R2.v, r3 = R3.v;
    const Rp = par(r2, r3, r4), Rq = par(r5, r6), Rs = Rp + Rq, Rpp = par(Rs, r7), Rtot = r1 + Rpp;
    const s = Math.min(5, Math.max(1, st.v)), k = Math.min(4, Math.floor(s)), u = sm(s - k);
    /* in, the merged resistor's opacity; out, the opacity of those it is made from */
    const inA = Math.min(1, Math.max(0, (u - 0.55) / 0.45)), outA = 1 - inA;
    const m = Math.round(s);
    folded = m > 1; target = folded ? ['R_p', 'R_s', 'R_p″', 'R_tot'][m - 2] : fed;
    litNow = lit.v; popNow = folded && pulse.v < 1 ? F.ease.thereAndBack(pulse.v) : 0;
    const HEADS = [
      'The three resistors in parallel and the pair in parallel are each combined first, because a parallel group is the easiest part of the network to pick out.',
      'The two equivalent resistances now sit one after the other, so they simply add.',
      'That one resistance and R₇ lie on two paths between the same pair of points, so they combine as a parallel pair.',
      'What is left is one resistance in series with R₁, and the network has come down to a single resistance.',
      'The whole network of seven resistors is one resistance of ' + fmt(Rtot, 2) + ' Ω across the source.',
    ];
    headline(ctx, HEADS[Math.round(s) - 1]);
    wires(ctx, [[150, TOP], [150, BOT], [B, BOT], [B, TOP]]);
    cell(ctx, 150, (TOP + BOT) / 2, 'up', null);
    /* R₁ stands at 290 until the last step slides it into the one resistance at 685 */
    const x1 = k === 4 ? lerp(290, 685, u) : 290, xpp = k === 4 ? lerp(805, 685, u) : 805;
    if (s < 5) {
      wires(ctx, [[150, TOP], [Math.max(A, x1 + 60), TOP]]);
      faded(ctx, k === 4 ? outA : 1, () => resistorM(ctx, x1, TOP, true, 'R_1', r1));
    }
    /* the lower path of R₇, folding up onto the top wire in the third step */
    if (s < 4) {
      const y7 = k === 3 ? lerp(LOW, TOP, u) : LOW;
      wires(ctx, [[A, TOP], [A, y7], [B, y7], [B, TOP]]);
      faded(ctx, 1 - (k === 3 ? inA : 0), () => { node(ctx, A, TOP); node(ctx, B, TOP); });
      faded(ctx, k === 3 ? outA : 1, () => resistorM(ctx, 805, y7, true, 'R_7', r7, { stack: 'below' }));
    }
    if (s < 2) {
      /* the step into 2: each parallel group's rows fold onto the top wire and slide to where its equivalent sits */
      const f = k === 1 ? u : 0;
      const rows = ROWS.map((y) => lerp(y, TOP, f)), rows2 = ROWS2.map((y) => lerp(y, TOP, f));
      rows.forEach((y, i) => { wires(ctx, [[A, y], [810, y]]); faded(ctx, outA, () => resistorM(ctx, lerp(640, 660, f), y, true, ['R_2', 'R_3', 'R_4'][i], [r2, r3, r4][i])); });
      wires(ctx, [[A, rows[0]], [A, rows[2]]]); wires(ctx, [[810, rows[0]], [810, rows[2]]]);
      rows2.forEach((y, i) => { wires(ctx, [[840, y], [1150, y]]); faded(ctx, outA, () => resistorM(ctx, lerp(995, 950, f), y, true, ['R_5', 'R_6'][i], [r5, r6][i])); });
      wires(ctx, [[840, rows2[0]], [840, rows2[1]]]); wires(ctx, [[1150, rows2[0]], [1150, rows2[1]]]);
      wires(ctx, [[810, TOP], [840, TOP]]); wires(ctx, [[1150, TOP], [B, TOP]]);
      faded(ctx, outA, () => { node(ctx, 810, TOP); node(ctx, 840, TOP); node(ctx, 1150, TOP); });
      faded(ctx, inA, () => { resistorM(ctx, 660, TOP, true, 'R_p', Rp); resistorM(ctx, 950, TOP, true, 'R_p′', Rq); });
    } else if (s < 3) {
      /* the step into 3: the two equivalents in series slide together into one */
      wires(ctx, [[A, TOP], [B, TOP]]);
      const f = k === 2 ? u : 0;
      faded(ctx, k === 2 ? outA : 1, () => { resistorM(ctx, lerp(660, 805, f), TOP, true, 'R_p', Rp); resistorM(ctx, lerp(950, 805, f), TOP, true, 'R_p′', Rq); });
      faded(ctx, k === 2 ? inA : 0, () => resistorM(ctx, 805, TOP, true, 'R_s', Rs));
    } else if (s < 4) {
      wires(ctx, [[A, TOP], [B, TOP]]);
      faded(ctx, k === 3 ? outA : 1, () => resistorM(ctx, 805, TOP, true, 'R_s', Rs));
      faded(ctx, k === 3 ? inA : 0, () => resistorM(ctx, 805, TOP, true, 'R_p″', Rpp));
    } else {
      wires(ctx, [[s < 5 ? A : 150, TOP], [B, TOP]]);
      faded(ctx, s < 5 ? (k === 4 ? outA : 1) : 0, () => resistorM(ctx, xpp, TOP, true, 'R_p″', Rpp));
      faded(ctx, s < 5 ? (k === 4 ? inA : 0) : 1, () => resistorM(ctx, 685, TOP, true, 'R_tot', Rtot));
    }
    /* the equation bends from one stop's step into the next; at a stop its numbers bend as the reader drags */
    const i = Math.min(4, Math.floor(s)), at1 = Math.round(s), still = Math.abs(s - at1) < 1e-6;
    const vals = { R1: r1, R2: r2, R3: r3, R4: r4, R5: r5, R6: r6, R7: r7, Rp, Rq, Rs, Rpp, Rtot };
    if (still) F.morph(fx, FORM[at1 - 1](vals));
    else F.morphAt(fx, FORM[i - 1](vals), FORM[i](vals), s - i, { keyMap: KEYS[i - 1] });
    note.textContent = [
      'The pair R₅ and R₆ is combined in the same step, and it comes to ' + fmt(Rq, 2) + ' Ω. Four steps in all bring the seven resistances down to ' + fmt(Rtot, 2) + ' Ω.',
      'Each of the two came from a parallel group, and in series they add to ' + fmt(Rs, 2) + ' Ω.',
      'The pair in parallel comes to ' + fmt(Rpp, 2) + ' Ω, which is less than either of them.',
      'R₁ carries the whole current of the circuit, so it is in series with everything behind it.',
      'Every one of the seven resistances is inside this one number, and the source sees nothing else.',
    ][at1 - 1];
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 21.7: why the light dims when the motor comes on. Still: switching
   the motor on is a state of the circuit and not a motion, so the figure
   answers its choice and its sliders and registers no cycle.
===================================================================== */
(function () {
  const d = sim('sim-dimming-light', 580);
  const Rw = ctl(d.controls, { label: '\\kResone', cls: 'resistance', min: 0, max: 1.6, step: 0.05, value: 0.4, unit: 'Ω', dec: 2, aria: 'the resistance of the wires' });
  const Rb = ctl(d.controls, { label: '\\kRestwo', cls: 'resistance', min: 100, max: 400, step: 4, value: 192, unit: 'Ω', dec: 0, aria: 'the resistance of the bulb' });
  const Rm = ctl(d.controls, { label: '\\kResthree', cls: 'resistance', min: 4, max: 40, step: 0.5, value: 9.5, unit: 'Ω', dec: 1, aria: 'the resistance of the motor' });
  const sw2 = choice(d.controls, { label: '\\text{the motor}', options: [{ value: 'off', label: 'off' }, { value: 'on', label: 'running' }], value: 'off', aria: 'whether the motor is running' });
  const V = 120.0;
  function draw() {
    const { ctx } = begin(d.c);
    const rw = Rw.v, rb = Rb.v, rm = Rm.v, on = sw2.value === 'on', rc = C('resistance');
    const Rload = on ? par(rb, rm) : rb, I = V / (rw + Rload), Vp = V - I * rw, Pb = Vp * Vp / rb;
    const Pfull = V * V / rb, bulbP = (m) => { const L = m === 'on' ? par(rb, rm) : rb, v = V - (V / (rw + L)) * rw; return v * v / rb; };
    const frac = Math.max(0, Math.min(1, sw2.mix(bulbP) / Pfull));
    headline(ctx, on
      ? 'With the motor running the wires carry ' + fmt(I, 1) + ' A, the drop in them leaves the bulb ' + fmt(Vp, 1) + ' V of the supply, and it gives out ' + fmt(Pb, 1) + ' W.'
      : 'With the motor switched off the wires carry only ' + fmt(I, 2) + ' A, the bulb keeps ' + fmt(Vp, 1) + ' V of the supply, and it gives out ' + fmt(Pb, 1) + ' W.');
    wires(ctx, [[170, 200], [1030, 200]]);
    wires(ctx, [[170, 480], [1030, 480]]);
    wires(ctx, [[170, 200], [170, 480]]);
    cell(ctx, 170, 340, 'up', fmt(V, 1) + ' V');
    resistor(ctx, 380, 200, true, 'R_1', rw);
    text(ctx, 'the wires', 380, 132, PAL.muted, { size: 19, align: 'center' });
    flow(ctx, 560, 200, 1, 0, 'I = ' + fmt(I, 2) + ' A');
    /* the bulb on its own path, and the motor on a path of its own behind a switch */
    wires(ctx, [[700, 200], [700, 480]]);
    node(ctx, 700, 200); node(ctx, 700, 480);
    bulb(ctx, 700, 340, frac);
    text(ctx, 'R_2', 636, 326, rc, { size: 24, weight: 600, align: 'right' });
    text(ctx, fmt(rb, 0) + ' Ω', 636, 356, rc, { size: 21, align: 'right' });
    text(ctx, 'the bulb', 764, 340, PAL.muted, { size: 19, align: 'left' });
    wires(ctx, [[1030, 200], [1030, 480]]);
    sw(ctx, 1030, 262, Math.PI / 2, sw2.mix((m) => (m === 'on' ? 1 : 0)));
    resistor(ctx, 1030, 385, false, 'R_3', rm);
    text(ctx, on ? 'the motor, running' : 'the motor, switched off', 1030, 520, PAL.muted, { size: 19, align: 'center' });
    text(ctx, 'V_p = ' + fmt(Vp, 1) + ' V reaches the bulb', 700, 546, C('voltage'), { size: 21, weight: 600, align: 'center' });
    readout(d.readout,
      '\\kVp = \\kV - \\kIcur\\kResone = ' + fmt(V, 1) + '\\ \\text{V} - (' + fmt(I, 2) + '\\ \\text{A})(' + ohm(rw) + ') = ' + fmt(Vp, 1) + '\\ \\text{V}',
      'The bulb then dissipates ' + fmt(Pb, 1) + ' W. ' + (on
        ? 'The motor draws a large current through the wires, the drop in them grows, and the bulb is left with ' + fmt(100 * Pb / Pfull, 0) + ' per cent of the power it has when the motor is off.'
        : 'With nothing but the bulb on the supply the current is small, so the wires take almost nothing and the bulb has practically the full supply voltage.'));
  }
  register(d.fig, { update: () => {}, draw });
})();

};
