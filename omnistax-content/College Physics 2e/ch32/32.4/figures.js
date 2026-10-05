/* Figures for section 32.4 Food Irradiation.
   The page binds dose (Gy), time (the exposure) and energy (the γ ray's MeV). The
   source rack wears its nuclide, F.el('Co') or F.el('Cs'), and the γ field
   F.el('gamma'). The dose bands are kinds with no type, F.cat(0..2) for low,
   moderate and high, as in 32.2. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['32.4'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, choice, register, begin, line, dot, text, topline, label, labeller, hover, readout, cardboardBox } = F;
const sim = (id, H) => F.sim(root, id, H);
const sig = (x, n) => Number(x.toPrecision(n));
const grp = (x, sep) => String(Math.round(x)).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
const doseStr = (x, sep) => { const v = sig(x, 3); return v >= 1000 ? grp(v, sep) : fmt(v, Math.max(0, 2 - Math.floor(Math.log10(v)))); };

/* =====================================================================
   FIGURE 32.10 · sim-irradiation-plant · still · flat (rule 28.1)
   The book's plant in section: shielding walls, the source rack raised on its
   cable from the storage pool, packages on a conveyor round it. The caption's
   hour for 10⁴ Gy makes the ⁶⁰Co dose rate 10⁴/60 = 166.7 Gy/min. A ¹³⁷Cs
   source giving off as many γ rays, the same fraction absorbed, deposits
   0.67/1.25 of the energy each second, 89.33 Gy/min. The ruler is log10 of the
   dose from 0.01 Gy to 10⁵ Gy, fixed: 1 min of ¹³⁷Cs is 89 Gy and 120 min of
   ⁶⁰Co 20,000 Gy. A person's bands are Table 32.4's in Sv, the same numbers in
   Gy for γ rays (RBE 1).
===================================================================== */
(function () {
  const H = 770, RATE_CO = 1e4 / 60;
  const SRC = {
    Co: { el: 'Co', name: '⁶⁰Co', tex: '{}^{60}\\text{Co}', E: 1.25 },
    Cs: { el: 'Cs', name: '¹³⁷Cs', tex: '{}^{137}\\text{Cs}', E: 0.67 },
  };
  const rateOf = (v) => RATE_CO * SRC[v].E / 1.25;
  const d = sim('sim-irradiation-plant', H);
  const src = choice(d.controls, { label: '\\text{source}', options: [{ value: 'Co', label: '⁶⁰Co' }, { value: 'Cs', label: '¹³⁷Cs' }], value: 'Co', aria: 'the γ source of the plant', onInput: () => tS.refresh() });
  const tS = ctl(d.controls, { label: '\\kt', cls: 'time', min: 1, max: 120, step: 1, value: 60, unit: 'min', dec: 0, aria: 'the time a package spends in the irradiation room',
    specials: [{ at: () => 1000 / rateOf(src.value), label: 'low dose' }, { at: () => 1e4 / rateOf(src.value), label: 'salmonella' }] });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);

  const G = 390, RT = 150, RI = 190, WL = [290, 340], WR = [880, 930], GAP = 330;
  const RACK = { l: 594, r: 626, t: 238, b: 342 }, RC = { x: 610, y: 290 };
  const POOL = { l: 560, r: 660, b: 490, w: 18, s: 405 };
  const UP = 300, LO = 378, BW = 44, BH = 34;
  const INSIDE = [400, 460, 520, 700, 760, 820], OUTSIDE = [1000, 1080, 1160, 1240];
  const RL = 250, RR = 1250, LG0 = -2, LG1 = 5, R1 = [555, 585], R2 = [600, 630], AX = 640;
  const X = (lg) => RL + (lg - LG0) * (RR - RL) / (LG1 - LG0);
  const PEOPLE = [{ a: -2, b: -1, i: 0, name: 'a low dose to a person: under 0.1 Gy of γ rays' }, { a: -1, b: 0, i: 1, name: 'a moderate dose to a person: 0.1 to 1 Gy of γ rays' }, { a: 0, b: 5, i: 2, name: 'a high dose to a person: over 1 Gy of γ rays' }];
  const FOOD = [{ a: -2, b: 3, i: 0, name: 'a low dose in food irradiation: up to 1000 Gy' }, { a: 4, b: 5, i: 2, name: 'a high dose in food irradiation: over 10,000 Gy' }];

  function draw() {
    const { ctx } = begin(d.c);
    const v = src.value, s = SRC[v], t = tS.v, rate = rateOf(v), D = sig(rate * t, 3);
    const DC = C('dose'), concrete = alpha(PAL.muted, 0.22);
    const verdict = D >= 1e4 ? 'enough to kill salmonella' : D > 1000 ? 'past the low dose, short of what kills salmonella' : 'within the low dose of food irradiation';
    const lab = labeller(ctx, H, { headline: topline(ctx, 'After $\\kt = ' + t + '$ min beside the ' + s.name + ' source a package has received $\\kdose = ' + doseStr(D, '{,}') + '$ Gy, ' + verdict + '.') });
    hits = [];

    /* ground, the pool and its water */
    ctx.save(); ctx.fillStyle = alpha(PAL.muted, 0.1); ctx.fillRect(40, G, 1320, POOL.b + POOL.w - G + 10); ctx.restore();
    ctx.save(); ctx.fillStyle = concrete; ctx.fillRect(POOL.l - POOL.w, G, POOL.r - POOL.l + 2 * POOL.w, POOL.b + POOL.w - G); ctx.fillStyle = PAL.panel; ctx.fillRect(POOL.l, G, POOL.r - POOL.l, POOL.b - G);
    ctx.fillStyle = alpha(PAL.muted, 0.2); ctx.fillRect(POOL.l, POOL.s, POOL.r - POOL.l, POOL.b - POOL.s); ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.beginPath();
    for (let x = POOL.l; x <= POOL.r; x += 4) { const y = POOL.s + 3 * Math.sin((x - POOL.l) / 8); x === POOL.l ? ctx.moveTo(x, y) : ctx.lineTo(x, y); }
    ctx.stroke(); ctx.restore();
    line(ctx, POOL.l, G, POOL.l, POOL.b, PAL.ink, 3); line(ctx, POOL.r, G, POOL.r, POOL.b, PAL.ink, 3); line(ctx, POOL.l, POOL.b, POOL.r, POOL.b, PAL.ink, 3);
    line(ctx, 40, G, POOL.l, G, PAL.ink, 3); line(ctx, POOL.r, G, 1360, G, PAL.ink, 3);
    hits.push({ x: (POOL.l + POOL.r) / 2, y: (POOL.s + POOL.b) / 2, r: 40, name: 'the storage pool: its water shields the source when it is lowered' });

    /* the γ field, inside the room only */
    ctx.save(); ctx.beginPath(); ctx.rect(WL[1], RI, WR[0] - WL[1], G - RI); ctx.clip();
    const gam = alpha(F.el('gamma'), 0.35);
    for (let k = 0; k < 28; k++) { const a = (k + 0.5) * 2 * Math.PI / 28; line(ctx, RC.x + 34 * Math.cos(a), RC.y + 34 * Math.sin(a), RC.x + 700 * Math.cos(a), RC.y + 700 * Math.sin(a), gam, 2); }
    ctx.restore();

    /* walls and roof, the conveyor's passage through the right wall */
    ctx.save(); ctx.fillStyle = concrete; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.moveTo(WL[0], G); ctx.lineTo(WL[0], RT); ctx.lineTo(WR[1], RT); ctx.lineTo(WR[1], GAP); ctx.lineTo(WR[0], GAP);
    ctx.lineTo(WR[0], RI); ctx.lineTo(WL[1], RI); ctx.lineTo(WL[1], G); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();

    /* the hoist and the cable */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.rect(RC.x - 24, RT - 30, 48, 30); ctx.fill(); ctx.stroke(); ctx.restore();
    line(ctx, RC.x, RT - 4, RC.x, RACK.t, PAL.ink, 2);
    hits.push({ x: RC.x, y: RT - 15, r: 22, name: 'the hoist that raises the rack out of the pool and lowers it back' });

    /* the conveyor: two rails round the rack, the lower one running out through the wall */
    line(ctx, 370, UP, 850, UP, PAL.muted, 4); line(ctx, 370, LO, 1340, LO, PAL.muted, 4);
    line(ctx, 370, UP, 370, LO, PAL.muted, 4); line(ctx, 850, UP, 850, LO, PAL.muted, 4);
    for (let x = 385; x <= 1330; x += 30) dot(ctx, x, LO + 5, PAL.muted, true, 3);
    INSIDE.forEach((x) => [UP, LO].forEach((y) => { cardboardBox(ctx, x, y - BH / 2 - 3, BW, BH, PAL.ink); hits.push({ x, y: y - BH / 2, r: 22, name: 'a package in the γ field' }); }));
    OUTSIDE.forEach((x) => { cardboardBox(ctx, x, LO - BH / 2 - 3, BW, BH, PAL.ink); hits.push({ x, y: LO - BH / 2, r: 22, name: 'a package waiting on the conveyor' }); });

    /* the source rack, its pencils of the nuclide */
    ctx.save(); ctx.fillStyle = src.mixColor((u) => F.el(SRC[u].el)); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.rect(RACK.l, RACK.t, RACK.r - RACK.l, RACK.b - RACK.t); ctx.fill(); ctx.stroke(); ctx.restore();
    [RACK.l + 8, RC.x, RACK.r - 8].forEach((x) => line(ctx, x, RACK.t + 8, x, RACK.b - 8, alpha(PAL.ink, 0.5), 2));
    hits.push({ x: RC.x, y: RC.y, r: 30, name: 'the ' + s.name + ' source rack: γ rays of ' + fmt(s.E, 2) + ' MeV' });

    lab.add('irradiation room', WL[1] + 4, RI + 22, 1, 0, PAL.ink, 20, 8);
    lab.add('shielding wall', WL[0], 260, -1, 0, PAL.ink, 20, 20);
    lab.add(s.name + ' source rack', RACK.r, RACK.t + 14, 0.8, -0.6, PAL.ink, 20, 40);
    lab.add('storage pool', POOL.r + POOL.w, POOL.s + 40, 1, 0, PAL.ink, 20, 20);
    lab.add('conveyor', OUTSIDE[2] - 40, LO - BH - 12, 0, -1, PAL.ink, 20, 22);

    /* the ruler: a person's bands above, food irradiation's below */
    const band = (row, b) => { ctx.save(); ctx.fillStyle = alpha(F.cat(b.i), 0.55); ctx.fillRect(X(b.a), row[0], X(b.b) - X(b.a), row[1] - row[0]); ctx.restore();
      hits.push({ x: (X(b.a) + X(b.b)) / 2, y: (row[0] + row[1]) / 2, r: 18, name: b.name }); };
    PEOPLE.forEach((b) => band(R1, b)); FOOD.forEach((b) => band(R2, b));
    [R1, R2].forEach((row) => { ctx.save(); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 2; ctx.strokeRect(RL, row[0], RR - RL, row[1] - row[0]); ctx.restore(); });
    text(ctx, 'person', RL - 18, (R1[0] + R1[1]) / 2, PAL.ink, { size: 20, align: 'right' });
    text(ctx, 'food', RL - 18, (R2[0] + R2[1]) / 2, PAL.ink, { size: 20, align: 'right' });
    line(ctx, RL, AX, RR, AX, PAL.muted, 2);
    const TICK = ['0.01', '0.1', '1', '10', '100', '1000', '10⁴', '10⁵'];
    for (let lg = LG0; lg <= LG1; lg++) { line(ctx, X(lg), AX, X(lg), AX + 8, PAL.muted, 2); }
    text(ctx, 'dose (Gy)', RL - 44, AX + 22, DC, { size: 20, weight: 600, align: 'right' });

    /* the marks the text names */
    const mark = (lg, top, s2, name) => { const x = X(lg); line(ctx, x, top, x, AX + 50, alpha(PAL.ink, 0.6), 2, [4, 6]); text(ctx, s2, x, AX + 60, PAL.ink, { size: 17, align: 'center', bg: PAL.panel }); hits.push({ x, y: AX + 60, r: 18, name }); };
    mark(Math.log10(4.5), R1[0], 'LD₅₀', 'LD₅₀: 4.5 Gy of γ rays kills half of the people it reaches within 32 days');
    mark(4, R2[0], 'salmonella', 'about 10,000 Gy kills salmonella');

    for (let lg = LG0; lg <= LG1; lg++) text(ctx, TICK[lg - LG0], X(lg), AX + 22, PAL.muted, { size: 17, align: 'center', bg: PAL.panel });

    /* the package's dose */
    const lgD = src.mix((u) => Math.log10(rateOf(u) * t)), mx = X(lgD);
    line(ctx, mx, R1[0] - 10, mx, R2[1] + 6, DC, 4);
    dot(ctx, mx, R1[0] - 10, DC, true, 7);
    label(ctx, doseStr(D, ',') + ' Gy', mx, R1[0] - 10, { side: 'above', color: DC, gap: 16, size: 20 });
    hits.push({ x: mx, y: R1[0] - 10, r: 16, name: 'the package: ' + doseStr(D, ',') + ' Gy after ' + t + ' min' });

    /* legend */
    const LEG = ['low dose', 'moderate dose', 'high dose'];
    LEG.forEach((n, i) => { const x0 = 470 + i * 200; ctx.save(); ctx.fillStyle = alpha(F.cat(i), 0.55); ctx.fillRect(x0, 727, 28, 18); ctx.restore(); text(ctx, n, x0 + 38, 736, PAL.ink, { size: 17 }); });

    lab.flush();
    const rS = fmt(sig(rate, 4), rate >= 100 ? 1 : 2);
    ro.set('\\kdose = (\\text{dose rate})\\,\\kt = (' + rS + '\\ \\text{Gy/min})(' + t + '\\ \\text{min}) = ' + doseStr(D, '{,}') + '\\ \\text{Gy}',
      v === 'Co' ? 'A γ ray of ⁶⁰Co carries $\\kEgam = 1.25$ MeV into the food.' : 'A γ ray of ¹³⁷Cs carries $\\kEgam = 0.67$ MeV, so as many absorbed each second give 0.54 of the dose rate of ⁶⁰Co.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
