/* Figures for section 22.1 Magnets. Boots against the section's text article.
   The page binds force alone, from the two arrows of the pair of magnets; every
   angle, latitude, length, gap and count here is untyped and in ink, and no body
   is tinted, a bar magnet being ink with N and S lettered on its ends. All three
   figures answer their controls and register no cycle: a hanging magnet has
   settled, a pair of magnets is held, and a cut magnet is a state the reader
   steps through. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['22.1'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, topline, label, angleArc, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

const RAD = Math.PI / 180;
const WORDS = ['no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
const wd = (n) => WORDS[n] ?? String(n);
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const COUNT = ['none', 'two', 'four', 'eight', 'sixteen', 'thirty-two'];
const POLES = ['two', 'four', 'eight', 'sixteen', 'thirty-two', 'sixty-four'];

/* a bar magnet: an ink outline with a rule across its middle and a letter in
   each half. (cx, cy) is the centre, `ang` the way the bar runs, and `first` the
   letter on the end the bar points away from. */
function bar(ctx, cx, cy, L, T, ang, first, second, lsize) {
  ctx.save(); ctx.translate(cx, cy); ctx.rotate(ang);
  ctx.lineWidth = 3; ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.panel;
  ctx.beginPath(); ctx.rect(-L / 2, -T / 2, L, T); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(0, -T / 2); ctx.lineTo(0, T / 2); ctx.stroke();
  ctx.restore();
  const sz = lsize ?? Math.min(T * 0.62, L * 0.3);
  const ux = Math.cos(ang), uy = Math.sin(ang);
  if (sz >= 7) {
    text(ctx, first, cx - ux * L * 0.25, cy - uy * L * 0.25, PAL.ink, { size: sz, weight: 700, align: 'center' });
    text(ctx, second, cx + ux * L * 0.25, cy + uy * L * 0.25, PAL.ink, { size: sz, weight: 700, align: 'center' });
  }
}

/* =====================================================================
   FIGURE 22.4: Earth as a bar magnet, and a magnet hung beside it. Still:
   a magnet on a thread has settled where the Earth holds it, and the
   question is which way it ended up pointing (rule 14).
===================================================================== */
(function () {
  const d = sim('sim-earth-magnet', 680);
  const tiltS = ctl(d.controls, { label: '\\text{tilt}', cls: '', min: 0, max: 25, step: 1, value: 11, unit: '°', dec: 0, aria: 'the tilt of Earth’s magnetic axis from its rotation axis' });
  const latS = ctl(d.controls, { label: '\\text{latitude}', cls: '', min: -20, max: 45, step: 1, value: 20, unit: '°', dec: 0, aria: 'where on the globe the magnet is hung, as a latitude' });
  const CX = 480, CY = 400, R = 200, OFF = 280;      /* the globe and where the hanging magnet is held */

  function draw() {
    const { ctx } = begin(d.c);
    const tilt = tiltS.v * RAD, lat = latS.v * RAD;
    /* Earth, its rotation axis and its geographic North Pole */
    ctx.save(); ctx.lineWidth = 3; ctx.strokeStyle = PAL.ink; ctx.fillStyle = alpha(PAL.ink, 0.05);
    ctx.beginPath(); ctx.arc(CX, CY, R, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
    /* the equator and two parallels, so the circle reads as a globe */
    line(ctx, CX - R, CY, CX + R, CY, alpha(PAL.ink, 0.3), 2);
    [-1, 1].forEach((s2) => { const yy = CY + s2 * R * 0.707, hw = R * 0.707; line(ctx, CX - hw, yy, CX + hw, yy, alpha(PAL.ink, 0.18), 1.5); });
    text(ctx, 'equator', CX - R - 12, CY, PAL.muted, { size: 17, align: 'right' });
    line(ctx, CX, CY - R - 62, CX, CY + R + 62, alpha(PAL.ink, 0.5), 2.5, [10, 10]);
    const np = { x: CX, y: CY - R };
    dot(ctx, np.x, np.y, PAL.ink, true, 8);
    /* Earth's own magnet, tilted from the rotation axis, S at the top */
    const mx = Math.sin(tilt), my = -Math.cos(tilt);
    const sm = { x: CX + mx * R, y: CY + my * R };          /* the south magnetic pole, where the magnet's axis reaches the surface */
    bar(ctx, CX, CY, R * 1.6, 54, Math.atan2(-my, -mx), 'S', 'N', 30);
    /* the magnet hung by a thread, its north-seeking end turned toward the
       south magnetic pole that Earth's magnet puts near the geographic north */
    const h = { x: CX + OFF * Math.cos(lat), y: CY - OFF * Math.sin(lat) };
    line(ctx, h.x, h.y - 72, h.x, h.y, alpha(PAL.ink, 0.55), 2);
    dot(ctx, h.x, h.y - 72, PAL.ink, true, 6);
    const dm = { x: sm.x - h.x, y: sm.y - h.y }, lm = Math.hypot(dm.x, dm.y);
    const dn = { x: np.x - h.x, y: np.y - h.y }, ln = Math.hypot(dn.x, dn.y);
    /* the direction of the geographic North Pole, drawn as a dashed guide that starts clear of the bar */
    line(ctx, h.x + (dn.x / ln) * 82, h.y + (dn.y / ln) * 82, h.x + (dn.x / ln) * 150, h.y + (dn.y / ln) * 150, alpha(PAL.ink, 0.6), 2.5, [8, 8]);
    bar(ctx, h.x, h.y, 150, 36, Math.atan2(-dm.y, -dm.x), 'S', 'N', 22);
    dot(ctx, sm.x, sm.y, PAL.ink, true, 6);
    const ang = Math.acos(Math.max(-1, Math.min(1, (dm.x * dn.x + dm.y * dn.y) / (lm * ln)))) / RAD;
    /* the arc between the two directions, always the minor one */
    const aM = Math.atan2(-dm.y, dm.x), aN = Math.atan2(-dn.y, dn.x);
    const dlt = ((aN - aM + Math.PI) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI) - Math.PI;
    angleArc(ctx, h, 96, aM, aM + dlt, fmt(ang, 1) + '°');
    /* names */
    label(ctx, 'geographic North Pole', np.x, np.y, { side: 'left', size: 19 });
    label(ctx, 'rotation axis', CX, CY + R + 62, { side: 'below', size: 19, color: PAL.muted });
    label(ctx, 'Earth’s own magnet', CX - mx * 60, CY - my * 60, { side: 'left', size: 19, gap: 245 });
    label(ctx, 'a magnet on a thread', h.x, h.y - 72, { side: 'right', size: 19 });
    const say = [
      'The end of Earth’s magnet that lies nearest the',
      'geographic North Pole is a south magnetic pole,',
      'which is why the north-seeking end of a hanging',
      'magnet turns toward it. It misses the geographic',
      'pole because Earth’s magnet is tilted.',
    ];
    say.forEach((s, i) => text(ctx, s, 1120, 250 + i * 30, PAL.muted, { size: 18, align: 'center' }));
    const where = latS.v === 0 ? 'over the equator' : `${fmt(Math.abs(latS.v), 0)}° ${latS.v > 0 ? 'north' : 'south'} of the equator`;
    topline(ctx, `A magnet hung ${where} points ${fmt(ang, 1)}° away from the direction of the geographic North Pole.`);
    readout(d.readout,
      `\\text{tilt} = ${fmt(tiltS.v, 0)}^\\circ \\qquad \\text{latitude} = ${fmt(latS.v, 0)}^\\circ \\qquad \\text{the magnet points } ${fmt(ang, 1)}^\\circ \\text{ from geographic north}`,
      'Drag the tilt to zero and the hanging magnet points straight at the geographic North Pole from anywhere on the globe; tilt Earth’s magnet and the two directions part company.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 22.5: two bar magnets laid end to end, either of which may be
   turned around. Still: the force is a state of the arrangement.
===================================================================== */
(function () {
  const d = sim('sim-attract-repel', 520);
  const leftC = choice(d.controls, { label: '\\text{left magnet}', options: [{ value: 'N', label: 'N on the right' }, { value: 'S', label: 'S on the right' }], value: 'N', aria: 'which pole of the left magnet faces the gap' });
  const rightC = choice(d.controls, { label: '\\text{right magnet}', options: [{ value: 'S', label: 'S on the left' }, { value: 'N', label: 'N on the left' }], value: 'S', aria: 'which pole of the right magnet faces the gap' });
  const gapS = ctl(d.controls, { label: '\\text{gap}', cls: '', min: 1, max: 10, step: 0.5, value: 3, unit: 'cm', dec: 1, aria: 'the gap between the two magnets' });
  const CX = 700, CY = 290, L = 300, T = 96, S = 22;   /* 22 units to the centimetre */

  function draw() {
    const { ctx } = begin(d.c);
    const g = gapS.v * S;
    const lc = CX - g / 2 - L / 2, rc = CX + g / 2 + L / 2;
    const facing = leftC.value + rightC.value;           /* the two poles across the gap */
    const alike = leftC.value === rightC.value;
    /* the bars, lettered in their upper halves so that the force arrow can run through
       the body along the lower half, anchored at the magnet's centre */
    bar(ctx, lc, CY, L, T, 0, '', '', 0);
    bar(ctx, rc, CY, L, T, 0, '', '', 0);
    const LY = CY - T * 0.2;
    [[lc, leftC.value === 'N' ? 'S' : 'N', leftC.value], [rc, rightC.value, rightC.value === 'N' ? 'S' : 'N']].forEach(([cx0, a, b]) => {
      text(ctx, a, cx0 - L * 0.25, LY, PAL.ink, { size: 36, weight: 700, align: 'center' });
      text(ctx, b, cx0 + L * 0.25, LY, PAL.ink, { size: 36, weight: 700, align: 'center' });
    });
    /* the force on each magnet, from its centre toward the other when the facing poles
       differ and away from it when they are alike */
    const len = 60 + 200 * Math.pow(1 / gapS.v, 0.6);
    const inward = Math.min(len, L / 2 + g / 2 - 8);
    const reach = alike ? len : inward, sgn = alike ? -1 : 1;
    const AY = CY + T * 0.24, col = C('force');
    dot(ctx, lc, AY, col, true, 6); dot(ctx, rc, AY, col, true, 6);
    arrow(ctx, lc, AY, lc + sgn * reach, AY, col, 5);
    arrow(ctx, rc, AY, rc - sgn * reach, AY, col, 5);
    label(ctx, 'F', lc + sgn * reach, AY, { side: alike ? 'left' : 'below', size: 24, color: col, leader: false, gap: 14 });
    label(ctx, 'F', rc - sgn * reach, AY, { side: alike ? 'right' : 'above', size: 24, color: col, leader: false, gap: 14 });
    label(ctx, 'left magnet', lc, CY + T / 2, { side: 'below', size: 19, leader: false });
    label(ctx, 'right magnet', rc, CY + T / 2, { side: 'below', size: 19, leader: false });
    /* the gap itself */
    const GY = CY + T / 2 + 56;
    line(ctx, CX - g / 2, GY, CX + g / 2, GY, alpha(PAL.ink, 0.55), 2.5);
    [-1, 1].forEach((s2) => line(ctx, CX + s2 * g / 2, GY - 12, CX + s2 * g / 2, GY + 12, alpha(PAL.ink, 0.55), 2.5));
    text(ctx, 'gap, ' + fmt(gapS.v, 1) + ' cm', CX, GY + 34, PAL.muted, { size: 18, align: 'center' });
    text(ctx, 'The pull or the push strengthens quickly as the gap closes.', 700, 470, PAL.muted, { size: 18, align: 'center' });
    const words = alike
      ? `The poles that face each other are both ${facing[0] === 'N' ? 'north' : 'south'} poles, so each magnet is pushed away from the other.`
      : 'The poles that face each other are a north and a south, so each magnet is pulled toward the other.';
    topline(ctx, words);
    readout(d.readout,
      `\\text{facing poles: } \\text{${facing[0]} and ${facing[1]}} \\qquad \\text{gap} = ${fmt(gapS.v, 1)}\\ \\text{cm} \\qquad \\kF \\text{ points } \\text{${alike ? 'outward' : 'inward'}}`,
      alike ? 'Like poles repel. Turn either magnet around and the arrows change ends.' : 'Unlike poles attract. Turn either magnet around and the arrows change ends.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 22.6: the magnet cut again and again. Still: the cuts are states
   the reader steps through, and a knife would add nothing to the count.
===================================================================== */
(function () {
  const d = sim('sim-split-magnet', 600);
  const cutS = ctl(d.controls, { label: '\\text{cuts}', cls: '', min: 0, max: 4, step: 1, value: 3, unit: '', dec: 0, detents: [0, 1, 2, 3, 4], aria: 'how many times the magnet is cut' });
  const whereS = ctl(d.controls, { label: '\\text{where the cut falls}', cls: '', min: 40, max: 60, step: 5, value: 50, unit: '%', dec: 0, aria: 'where along each piece the cut falls, as a percentage of its length' });
  const X0 = 300, W = 1020, ROW = 82, Y0 = 150, TH = 46, NOTE_Y = 560;

  const stages = (n, f) => {
    const out = [[[0, 1]]];
    for (let k = 0; k < n; k++) out.push(out[k].flatMap(([a, b]) => { const m = a + f * (b - a); return [[a, m], [m, b]]; }));
    return out;
  };
  function pieces() { return stages(cutS.v, whereS.v / 100); }

  function draw() {
    const { ctx } = begin(d.c);
    const rows = pieces(), n = cutS.v;
    rows.forEach((row, k) => {
      const y = Y0 + k * ROW;
      text(ctx, k === 0 ? 'the magnet' : `after ${wd(k)} ${k === 1 ? 'cut' : 'cuts'}`, X0 - 24, y, PAL.muted, { size: 18, align: 'right' });
      row.forEach(([a, b]) => {
        const x1 = X0 + a * W + 3, x2 = X0 + b * W - 3, w = x2 - x1;
        bar(ctx, (x1 + x2) / 2, y, w, TH, 0, 'N', 'S', Math.min(26, w * 0.30));
      });
      /* where the next cut will fall */
      if (k < n) row.forEach(([a, b]) => {
        if ((b - a) * W < 46) return;
        const x = X0 + (a + (whereS.v / 100) * (b - a)) * W;
        line(ctx, x, y - TH / 2 - 12, x, y + TH / 2 + 12, alpha(PAL.ink, 0.8), 2.5, [6, 5]);
      });
    });
    const k = Math.pow(2, n);
    text(ctx, 'Every piece, however short, carries a north pole and a south pole.', 700, NOTE_Y, PAL.muted, { size: 18, align: 'center' });
    topline(ctx, n === 0
      ? 'Before any cut the magnet is one magnet, with a north pole at one end and a south pole at the other.'
      : `${cap(wd(n))} ${n === 1 ? 'cut leaves' : 'cuts leave'} ${COUNT[n]} shorter magnets, ${POLES[n]} poles and not one pole on its own.`);
    readout(d.readout,
      `2^{${n}} = ${k}\\ \\text{pieces} \\qquad ${2 * k}\\ \\text{poles} \\qquad 0\\ \\text{poles on their own}`,
      'Move the cut off the middle and the pieces come out unequal, but the count of poles standing alone is still zero.');
  }
  register(d.fig, { update: () => {}, draw });
  hover(d.stage, () => {
    const rows = pieces(), out = [];
    rows.forEach((row, k) => row.forEach(([a, b], i) => {
      const y = Y0 + k * ROW, x1 = X0 + a * W, x2 = X0 + b * W;
      out.push({ x: (x1 + x2) / 2, y, r: Math.max(12, (x2 - x1) / 2), name: `piece ${i + 1} of ${row.length}: north pole on the left, south pole on the right` });
    }));
    return out;
  });
})();

};
