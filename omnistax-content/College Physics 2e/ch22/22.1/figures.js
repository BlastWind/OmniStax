/* Figures for section 22.1 Magnets. Boots against the section's text article.
   The tilt, the latitude and the
   angle the hanging magnet makes wear angle; Earth, its magnet, the hanging
   magnet and the magnet that is cut are the section's referents, and N and S
   stay ink on every bar. Both
   figures answer their controls and register no cycle: a hanging magnet has
   settled, and a cut magnet is a state the reader steps through. Figure 22.5
   is the book's own image. */
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

/* a bar magnet: an outline with a rule across its middle and a letter in
   each half. (cx, cy) is the centre, `ang` the way the bar runs, and `first` the
   letter on the end the bar points away from; `color` is the outline's. */
function bar(ctx, cx, cy, L, T, ang, first, second, lsize, color = PAL.ink) {
  ctx.save(); ctx.translate(cx, cy); ctx.rotate(ang);
  ctx.lineWidth = 3; ctx.strokeStyle = color; ctx.fillStyle = PAL.panel;
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
  const tiltS = ctl(d.controls, { label: '\\text{tilt}', cls: 'angle', min: 0, max: 25, step: 1, value: 11, unit: '°', dec: 0, aria: 'the tilt of Earth’s magnetic axis from its rotation axis' });
  const latS = ctl(d.controls, { label: '\\text{latitude}', cls: 'angle', min: -20, max: 45, step: 1, value: 20, unit: '°', dec: 0, aria: 'where on the globe the magnet is hung, as a latitude' });
  const CX = 480, CY = 400, R = 200, OFF = 280;      /* the globe and where the hanging magnet is held */

  function draw() {
    const { ctx } = begin(d.c);
    const tilt = tiltS.v * RAD, lat = latS.v * RAD;
    /* Earth, its rotation axis and its geographic North Pole */
    const ec = F.ref('earth'), mc = F.ref('earth-magnet'), hc = F.ref('hanging-magnet'), ac = C('angle');
    ctx.save(); ctx.lineWidth = 3; ctx.strokeStyle = ec; ctx.fillStyle = alpha(PAL.ink, 0.05);
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
    bar(ctx, CX, CY, R * 1.6, 54, Math.atan2(-my, -mx), 'S', 'N', 30, mc);
    /* the magnet hung by a thread, its north-seeking end turned toward the
       south magnetic pole that Earth's magnet puts near the geographic north */
    const h = { x: CX + OFF * Math.cos(lat), y: CY - OFF * Math.sin(lat) };
    line(ctx, h.x, h.y - 72, h.x, h.y, alpha(PAL.ink, 0.55), 2);
    dot(ctx, h.x, h.y - 72, PAL.ink, true, 6);
    const dm = { x: sm.x - h.x, y: sm.y - h.y }, lm = Math.hypot(dm.x, dm.y);
    const dn = { x: np.x - h.x, y: np.y - h.y }, ln = Math.hypot(dn.x, dn.y);
    /* the direction of the geographic North Pole, drawn as a dashed guide that starts clear of the bar */
    line(ctx, h.x + (dn.x / ln) * 82, h.y + (dn.y / ln) * 82, h.x + (dn.x / ln) * 190, h.y + (dn.y / ln) * 190, alpha(PAL.ink, 0.6), 2.5, [8, 8]);
    bar(ctx, h.x, h.y, 150, 36, Math.atan2(-dm.y, -dm.x), 'N', 'S', 22, hc);
    dot(ctx, sm.x, sm.y, PAL.ink, true, 6);
    const ang = Math.acos(Math.max(-1, Math.min(1, (dm.x * dn.x + dm.y * dn.y) / (lm * ln)))) / RAD;
    /* the arc between the two directions, always the minor one */
    const aM = Math.atan2(-dm.y, dm.x), aN = Math.atan2(-dn.y, dn.x);
    const dlt = ((aN - aM + Math.PI) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI) - Math.PI;
    angleArc(ctx, h, 140, aM, aM + dlt, fmt(ang, 1) + '°', undefined, ac);
    /* names */
    label(ctx, 'geographic North Pole', np.x, np.y, { side: 'left', size: 19 });
    label(ctx, 'rotation axis', CX, CY + R + 62, { side: 'below', size: 19, color: PAL.muted });
    label(ctx, 'Earth’s own magnet', CX - mx * 60, CY - my * 60, { side: 'left', size: 19, gap: 245, color: mc });
    label(ctx, 'a magnet on a thread', h.x, h.y - 72, { side: 'right', size: 19, color: hc });
    const where = latS.v === 0 ? 'over the equator' : `${fmt(Math.abs(latS.v), 0)}° ${latS.v > 0 ? 'north' : 'south'} of the equator`;
    topline(ctx, `A magnet hung ${where} points ${fmt(ang, 1)}° away from the direction of the geographic North Pole.`);
    readout(d.readout, `\\text{the magnet points } ${fmt(ang, 1)}^\\circ \\text{ from geographic north}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 22.6: the magnet cut again and again. Still: the cuts are states
   the reader steps through, and a knife would add nothing to the count. A
   new cut does not redraw the stack: each new row slides down out of the
   one above it, its pieces parting at the cut (manim 16).
===================================================================== */
(function () {
  const d = sim('sim-split-magnet', 540);
  const cutC = choice(d.controls, { label: '\\text{cuts}', options: [0, 1, 2, 3, 4].map((n) => ({ value: String(n), label: String(n) })), value: '3', aria: 'how many times the magnet is cut' });
  const cutS = { get v() { return +cutC.value; } };
  const whereS = ctl(d.controls, { label: '\\text{where the cut falls}', cls: '', min: 40, max: 60, step: 5, value: 50, unit: '%', dec: 0, aria: 'where along each piece the cut falls, as a percentage of its length' });
  const X0 = 300, W = 1020, ROW = 82, Y0 = 150, TH = 46;

  const stages = (n, f) => {
    const out = [[[0, 1]]];
    for (let k = 0; k < n; k++) out.push(out[k].flatMap(([a, b]) => { const m = a + f * (b - a); return [[a, m], [m, b]]; }));
    return out;
  };
  function pieces() { return stages(cutS.v, whereS.v / 100); }

  function draw() {
    const { ctx } = begin(d.c);
    const n = cutS.v, was = +cutC.from, lo = Math.min(n, was), hi = Math.max(n, was);
    const rows = stages(hi, whereS.v / 100), mc = F.ref('cut-magnet');
    /* how far row k has split off the row above: 1 for rows both states hold, and
       for the rows the change adds or takes away, staggered from the top down */
    const part = (k) => {
      if (k <= lo) return 1;
      const i = n > was ? k - lo - 1 : hi - k, q = F.stagger(cutC.k, i, hi - lo, 0.25);
      return n > was ? q : 1 - q;
    };
    rows.forEach((row, k) => {
      const p = part(k);
      if (p <= 0) return;
      const y = Y0 + (k - 1 + p) * ROW;
      ctx.save(); ctx.globalAlpha = k === 0 ? 1 : Math.min(1, p * 1.6);
      text(ctx, k === 0 ? 'the magnet' : `after ${wd(k)} ${k === 1 ? 'cut' : 'cuts'}`, X0 - 24, k === 0 ? Y0 : y, PAL.muted, { size: 18, align: 'right' });
      row.forEach(([a, b]) => {
        const x1 = X0 + a * W + 3 * p, x2 = X0 + b * W - 3 * p, w = x2 - x1;
        bar(ctx, (x1 + x2) / 2, k === 0 ? Y0 : y, w, TH, 0, 'N', 'S', Math.min(26, w * 0.30), mc);
      });
      ctx.restore();
      /* where the next cut will fall */
      const q = k < hi ? Math.min(p, part(k + 1)) : 0;
      if (q > 0) row.forEach(([a, b]) => {
        if ((b - a) * W < 46) return;
        const x = X0 + (a + (whereS.v / 100) * (b - a)) * W;
        line(ctx, x, y - TH / 2 - 12, x, y + TH / 2 + 12, alpha(PAL.ink, 0.8 * q), 2.5, [6, 5]);
      });
    });
    const k = Math.pow(2, n);
    topline(ctx, n === 0
      ? 'Before any cut the magnet is one magnet, with a north pole at one end and a south pole at the other.'
      : `${cap(wd(n))} ${n === 1 ? 'cut leaves' : 'cuts leave'} ${COUNT[n]} shorter magnets, ${POLES[n]} poles and not one pole on its own.`);
    readout(d.readout, `2^{${n}} = ${k}\\ \\text{${k === 1 ? 'piece' : 'pieces'}, } ${2 * k}\\ \\text{poles}`);
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
