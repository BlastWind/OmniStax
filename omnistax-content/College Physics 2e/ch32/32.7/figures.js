/* Figures for section 32.7 Nuclear Weapons.
   The page binds energy (the yields, \kE), mass (the mass destroyed, \kdm) and
   velocity (\kc). Nuclides and particles wear the element palette: F.el('U'),
   F.el('Pu'), F.el('Li'), F.el('Be'), F.el('H'), F.el('He'), F.el('n0'),
   F.el('gamma'). The fireball and the glow of burning fuel are facts, FIRE_CORE
   to FIRE_EDGE through F.fact. The four kinds of energy output of Figure 32.29
   are kinds with no type, F.cat(0..3). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['32.7'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, choice, register, cycle, begin, line, dot, text, topline, label, labeller, axes, curve, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);
const FIRE_CORE = '#FFF1B8', FIRE_EDGE = '#F08A24';
const hash = (i, k) => { const x = Math.sin(i * 127.1 + k * 311.7) * 43758.5453; return x - Math.floor(x); };
const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const SUP = '⁰¹²³⁴⁵⁶⁷⁸⁹';
const sup = (n) => String(n).replace('-', '⁻').replace(/\d/g, (c) => SUP[+c]);
const grp = (x) => String(Math.round(x)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
/* x to two significant figures as TeX, in powers of ten outside 0.1 to 1000 */
function sci(x, n = 2) {
  const e = Math.floor(Math.log10(Math.abs(x)) + 1e-12);
  if (e >= -1 && e < 3) return fmt(Number(x.toPrecision(n)), Math.max(0, n - 1 - e));
  let m = Number((x / Math.pow(10, e)).toPrecision(n)), ee = e;
  if (m >= 10) { m /= 10; ee += 1; }
  return fmt(m, n - 1) + '\\times10^{' + ee + '}';
}
function fireball(ctx, x, y, r, a) {
  if (r < 1 || a <= 0) return;
  const g = ctx.createRadialGradient(x, y, 0, x, y, r);
  g.addColorStop(0, F.fact(FIRE_CORE)); g.addColorStop(0.55, F.fact(FIRE_CORE)); g.addColorStop(1, alpha(F.fact(FIRE_EDGE), 0));
  ctx.save(); ctx.globalAlpha *= a; ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, 2 * Math.PI); ctx.fill(); ctx.restore();
}

/* =====================================================================
   FIGURE 32.24 + 32.25 · sim-fission-chain · moving · flat (rule 28.1)
   One clock: assembly TA, chain TC, burst TB, then a hold. The gun's slug
   starts from rest and is driven down the barrel at constant acceleration onto
   the target; the implosion's detonators fire, the shock runs in through the
   lenses at constant speed and the plutonium is crushed to 0.62 of its radius.
   Then each generation of fissions doubles the last, at 200 MeV per fission
   (3.204 × 10⁻¹¹ J), until the energy reaches the yield at 4.2 × 10¹² J/kT:
   g = log₂(Y·4.2 × 10¹²/3.204 × 10⁻¹¹), 80.7 for 15 kT and 81.1 for 20 kT. The
   generations run at an even rate, so the energy climbs a straight line on
   the log graph. Graph: g from 0 to 90 and log₁₀(E/J) from −15 to 15, fixed.
===================================================================== */
(function () {
  const H = 700, TA = 1.8, TC = 2.8, TB = 0.9, T = TA + TC + TB;
  const EF = 200e6 * 1.602e-19, KT = 4.2e12;
  const DES = {
    gun: { nuc: '²³⁵U', el: 'U', Y: 15, city: 'Hiroshima' },
    implosion: { nuc: '²³⁹Pu', el: 'Pu', Y: 20, city: 'Nagasaki' },
  };
  const gEnd = (v) => Math.log2(DES[v].Y * KT / EF);
  const d = sim('sim-fission-chain', H);
  const des = choice(d.controls, { label: '\\text{design}', options: [{ value: 'gun', label: 'gun-type, ²³⁵U' }, { value: 'implosion', label: 'implosion, ²³⁹Pu' }], value: 'gun', aria: 'the design of the bomb', onInput: () => cy.reset() });
  const cy = cycle(() => T, 1.2);
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);

  const MID = 238;
  const GUN = { l: 250, r: 1150, t: 203, b: 273, bt: 216, bb: 260, pr: 330, sw: 90, s0: 336, tl: 1050 };
  const IMP = { x: 700, y: MID, R: 135, RL: 72, r0: 56, r1: 35 };
  const GB = { l: 200, r: 1300, t: 430, b: 620 };

  function massRegion(v, t) {
    if (v === 'gun') return { kind: 'rect', l: GUN.tl - GUN.sw, r: GUN.r - 12, t: GUN.bt, b: GUN.bb, cx: (GUN.tl - GUN.sw + GUN.r - 12) / 2, cy: MID };
    return { kind: 'disc', cx: IMP.x, cy: IMP.y, r: puR(t) };
  }
  function puR(t) { const a = 0.75 * TA; return t < a ? IMP.r0 : t < TA ? IMP.r0 + (IMP.r1 - IMP.r0) * (t - a) / (TA - a) : IMP.r1; }
  function inRegion(m, i, gi) {
    const u = hash(i, gi + 1), w = hash(i, gi + 7.3);
    if (m.kind === 'rect') return { x: m.l + 8 + u * (m.r - m.l - 16), y: m.t + 7 + w * (m.b - m.t - 14) };
    const rr = (m.r - 6) * Math.sqrt(u), a = 2 * Math.PI * w;
    return { x: m.cx + rr * Math.cos(a), y: m.cy + rr * Math.sin(a) };
  }

  function drawGun(ctx, lab, t, ink) {
    const U = F.el('U');
    /* the barrel, a capsule with a bore */
    ctx.save(); ctx.fillStyle = alpha(PAL.muted, 0.35); ctx.strokeStyle = ink; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.roundRect(GUN.l, GUN.t, GUN.r - GUN.l, GUN.b - GUN.t, 35); ctx.fill(); ctx.stroke();
    ctx.fillStyle = PAL.panel; ctx.beginPath(); ctx.roundRect(GUN.l + 14, GUN.bt, GUN.r - GUN.l - 28, GUN.bb - GUN.bt, 22); ctx.fill(); ctx.stroke(); ctx.restore();
    /* the propellant behind the slug */
    ctx.save(); ctx.fillStyle = alpha(PAL.muted, 0.6); ctx.beginPath(); ctx.roundRect(GUN.l + 14, GUN.bt, GUN.pr - GUN.l - 14, GUN.bb - GUN.bt, [22, 0, 0, 22]); ctx.fill(); ctx.restore();
    const k = clamp(t / TA), sx = GUN.s0 + (GUN.tl - GUN.sw - GUN.s0) * k * k;
    if (t > 0 && t < TA) { ctx.save(); ctx.fillStyle = alpha(PAL.muted, 0.25); ctx.fillRect(GUN.pr, GUN.bt + 2, sx - GUN.pr, GUN.bb - GUN.bt - 4); ctx.restore(); }
    /* the slug and the target, two subcritical masses */
    [[sx, 'slug'], [GUN.tl, 'target']].forEach(([x, w]) => {
      ctx.save(); ctx.fillStyle = alpha(U, 0.75); ctx.strokeStyle = ink; ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.roundRect(x, GUN.bt + 2, w === 'target' ? GUN.r - 14 - x : GUN.sw, GUN.bb - GUN.bt - 4, w === 'target' ? [0, 20, 20, 0] : 4); ctx.fill(); ctx.stroke(); ctx.restore();
    });
    /* the neutron initiator on the target's face */
    dot(ctx, GUN.tl + 6, MID, ink, false, 6);
    hits.push({ x: (GUN.l + GUN.pr) / 2, y: MID, r: 30, name: 'the explosive propellant that fires the slug' });
    hits.push({ x: sx + GUN.sw / 2, y: MID, r: 34, name: t < TA ? 'the ²³⁵U slug: a subcritical mass fired down the barrel' : 'the slug, now joined to the target in one supercritical mass' });
    hits.push({ x: GUN.tl + 50, y: MID, r: 34, name: t < TA ? 'the ²³⁵U target: the second subcritical mass' : 'the supercritical mass of ²³⁵U' });
    hits.push({ x: GUN.tl + 6, y: MID, r: 10, name: 'the neutron source that starts the chain when the mass is assembled' });
    hits.push({ x: 700, y: GUN.t + 6, r: 30, name: 'the gun barrel' });
    if (!lab) return;
    lab.add('explosive propellant', GUN.l + 40, GUN.t, -0.2, -1, ink, 20, 26);
    lab.add('gun barrel', 640, GUN.t, 0, -1, ink, 20, 26);
    lab.add(t < TA ? '²³⁵U target' : 'supercritical mass', GUN.r - 50, GUN.b, 0.3, 1, ink, 20, 30);
    lab.add('neutron initiator', GUN.tl + 6, GUN.b, -0.5, 1, ink, 20, 34);
  }

  function drawImplosion(ctx, lab, t, ink) {
    const PU = F.el('Pu'), n = 8, tw = 2 * Math.PI / n;
    const shock = t < 0.25 * TA ? IMP.R : t < 0.75 * TA ? IMP.R - (IMP.R - IMP.r0) * (t - 0.25 * TA) / (0.5 * TA) : IMP.r0;
    ctx.save(); ctx.fillStyle = alpha(PAL.muted, 0.35); ctx.strokeStyle = ink; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(IMP.x, IMP.y, IMP.R, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
    /* the lenses: unburnt explosive inside the shock, burnt outside it */
    for (let i = 0; i < n; i++) {
      const a0 = i * tw + 0.05, a1 = (i + 1) * tw - 0.05;
      const wedge = (r0, r1, fill) => { ctx.save(); ctx.fillStyle = fill; ctx.beginPath(); ctx.arc(IMP.x, IMP.y, r1, a0, a1); ctx.arc(IMP.x, IMP.y, r0, a1, a0, true); ctx.closePath(); ctx.fill(); ctx.restore(); };
      wedge(IMP.RL, IMP.R - 8, PAL.panel);
      if (shock > IMP.RL) wedge(IMP.RL, Math.min(shock, IMP.R - 8), alpha(PAL.muted, 0.55));
      const am = (a0 + a1) / 2, dx = IMP.x + (IMP.R + 2) * Math.cos(am), dy = IMP.y + (IMP.R + 2) * Math.sin(am);
      ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.rect(dx - 7, dy - 7, 14, 14); ctx.fill(); ctx.stroke(); ctx.restore();
      if (t > 0 && t < 0.3 * TA) { const f = 1 - t / (0.3 * TA); fireball(ctx, dx, dy, 26, f); }
    }
    ctx.save(); ctx.strokeStyle = alpha(ink, 0.6); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(IMP.x, IMP.y, IMP.RL, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
    if (t > 0.25 * TA && t < 0.75 * TA) { ctx.save(); ctx.strokeStyle = ink; ctx.lineWidth = 3; ctx.setLineDash([6, 6]); ctx.beginPath(); ctx.arc(IMP.x, IMP.y, shock, 0, 2 * Math.PI); ctx.stroke(); ctx.restore(); }
    /* the plutonium and the initiator at its centre */
    const r = puR(t);
    ctx.save(); ctx.fillStyle = alpha(PU, 0.8); ctx.strokeStyle = ink; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(IMP.x, IMP.y, r, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
    dot(ctx, IMP.x, IMP.y, ink, false, 6);
    const am = 4.5 * tw;
    hits.push({ x: IMP.x + (IMP.R + 2) * Math.cos(am), y: IMP.y + (IMP.R + 2) * Math.sin(am), r: 14, name: 'a detonator, one of eight fired together' });
    hits.push({ x: IMP.x + 92 * Math.cos(0.5 * tw), y: IMP.y + 92 * Math.sin(0.5 * tw), r: 22, name: 'a high-explosive lens: a shape charge that drives its blast inward' });
    hits.push({ x: IMP.x + 0.6 * r, y: IMP.y - 0.6 * r, r: 14, name: t < 0.75 * TA ? 'the sphere of ²³⁹Pu, subcritical' : 'the ²³⁹Pu crushed into a supercritical mass' });
    hits.push({ x: IMP.x, y: IMP.y, r: 8, name: 'the neutron source that starts the chain at full compression' });
    if (!lab) return;
    lab.add('detonators', IMP.x + (IMP.R + 9) * Math.cos(am), IMP.y + (IMP.R + 9) * Math.sin(am), -1, -0.25, ink, 20, 24);
    lab.add('high-explosive lenses', IMP.x + 100 * Math.cos(-0.5 * tw), IMP.y + 100 * Math.sin(-0.5 * tw), 0.9, -0.45, ink, 20, 90);
    lab.add(t < TA ? '²³⁹Pu' : 'supercritical mass', IMP.x + 18, IMP.y + 18, 0.8, 0.6, ink, 20, 150);
    lab.add('neutron initiator', IMP.x - 4, IMP.y + 4, -0.85, 0.5, ink, 20, 150);
  }

  function draw() {
    const { ctx } = begin(d.c);
    const v = des.value, s = DES[v], t = cy.now(), gF = gEnd(v), EC = C('energy');
    const g = t <= TA ? 0 : gF * clamp((t - TA) / TC), chain = t > TA, done = t >= TA + TC, kb = clamp((t - TA - TC) / TB);
    hits = [];
    const head = !chain
      ? (v === 'gun' ? 'The propellant fires one subcritical mass of ²³⁵U down the barrel onto the other.' : 'The shock of the lenses runs inward and crushes the ²³⁹Pu sphere into a supercritical mass.')
      : !done ? 'The neutron source starts the chain, and every generation doubles the fissions of the last.'
        : 'After ' + fmt(gF, 1) + ' generations the chain has released ' + s.Y + ' kT, the yield of the ' + s.city + ' bomb, and the bomb blows itself apart.';
    const lab = labeller(ctx, H, { headline: topline(ctx, head) });
    const ink = alpha(PAL.ink, 1 - 0.85 * kb);

    F.faded(ctx, 1 - 0.7 * kb, [0, 0], () => {
      des.only(ctx, 'gun', () => drawGun(ctx, kb < 0.3 ? lab : null, t, ink));
      des.only(ctx, 'implosion', () => drawImplosion(ctx, kb < 0.3 ? lab : null, t, ink));
    });

    /* the chain: the first generations' neutrons, then the glow of the mass */
    const m = massRegion(v, t);
    if (chain && !done) {
      const gi = Math.floor(g), nn = Math.min(Math.pow(2, gi), 64), N0 = F.el('n0');
      for (let i = 0; i < nn; i++) { const p = inRegion(m, i, gi); dot(ctx, p.x, p.y, N0, true, 4.5); }
      hits.push({ x: m.cx, y: m.cy, r: 30, name: 'neutrons of the chain: generation ' + gi });
      const glow = Math.pow(clamp((g - 6) / (gF - 6)), 1.5);
      ctx.save(); ctx.beginPath(); m.kind === 'rect' ? ctx.rect(m.l, m.t, m.r - m.l, m.b - m.t) : ctx.arc(m.cx, m.cy, m.r, 0, 2 * Math.PI); ctx.clip();
      fireball(ctx, m.cx, m.cy, m.kind === 'rect' ? 110 : m.r * 1.6, 0.9 * glow); ctx.restore();
    }
    if (done) {
      fireball(ctx, m.cx, m.cy, 40 + 120 * kb, 0.95);
      hits.push({ x: m.cx, y: m.cy, r: 60, name: 'the fireball: ' + s.Y + ' kT released in about ' + Math.round(gF) + ' generations' });
    }

    /* the graph: log of the energy released against the generation */
    const SUPV = (v2) => (v2 === 0 ? '1' : '10' + sup(v2));
    const { X, Y } = axes(ctx, GB, [0, 90], [-15, 15], { nx: 6, ny: 6, fx: (x) => fmt(x, 0), fy: SUPV, xl: 'generation g', yl: 'energy released (J)', yc: EC });
    const lgE = (gg) => Math.log10(EF) + gg * Math.LOG10E * Math.LN2;
    const yl = des.mix((u) => Math.log10(DES[u].Y * KT));
    line(ctx, GB.l, Y(yl), GB.r, Y(yl), alpha(EC, 0.8), 2.5, [10, 10]);
    text(ctx, s.Y + ' kT, ' + s.city, GB.r - 8, Y(yl) - 16, EC, { size: 17, weight: 600, align: 'right', bg: PAL.panel });
    curve(ctx, lgE, 0, des.mix((u) => gEnd(u)), X, Y, alpha(EC, 0.25), 3);
    if (chain) { curve(ctx, lgE, 0, g, X, Y, EC, 5); dot(ctx, X(g), Y(lgE(g)), EC, true, 9); }
    hits.push({ x: X(45), y: Y(lgE(45)), r: 16, name: 'each generation doubles the energy released, so the line climbs 0.3 of a power of ten per generation' });

    lab.flush();
    const E = EF * Math.pow(2, g);
    ro.set(!chain ? '\\kE = 2^{g}\\,(200\\ \\text{MeV})'
      : '\\kE = 2^{g}\\,(200\\ \\text{MeV}) = 2^{' + fmt(g, 1) + '}\\,(200\\ \\text{MeV}) = ' + sci(E) + '\\ \\text{J}' + (done ? ' = ' + s.Y + '\\ \\text{kT}' : ''));
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 32.28 · sim-hbomb · story · flat (rule 28.1)
   A story slider from 0 to 4: at rest, the trigger fires (stage 1), neutrons
   make tritium in the lithium deuteride while it is heated and compressed
   (stage 2), deuterium and tritium fuse and fast neutrons leave the fuel
   (stage 3), and the ²³⁸U shell reflects some of them and fissions under the
   others (stage 4). Every part is a function of the story's value. The
   readout writes each stage's reaction and bends one into the next by
   meaning: the trigger's neutrons become the neutron that strikes ⁶Li, the
   tritium made moves to the reactant side, and the fusion neutron becomes the
   neutron that strikes ²³⁸U.
===================================================================== */
(function () {
  const H = 680;
  const d = sim('sim-hbomb', H);
  const sS = ctl(d.controls, { label: '\\text{stage}', cls: '', min: 0, max: 4, step: 0.01, value: 0, unit: '', dec: 2, aria: 'how far the explosion has gone, from the bomb at rest through the trigger, the making of tritium and fusion to the uranium shell' });
  F.story(d, sS, { stops: [{ v: 0, label: 'at rest' }, { v: 1, label: 'trigger' }, { v: 2, label: 'tritium' }, { v: 3, label: 'fusion' }, { v: 4, label: '²³⁸U shell' }], ms: 2200, rest: 1200 });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);

  const CX = 520, OUT = { l: 395, r: 645, t: 92, b: 640 }, SH = 28;
  const IN = { l: OUT.l + SH, r: OUT.r - SH, t: OUT.t + SH, b: OUT.b - SH };
  const PU = { x: CX, y: 232, r0: 38, r1: 30 }, FU = { t: 330, b: 572, w0: 58, w1: 40 }, ROD = 13;
  const NN = 24, NG = 16, NF = 20;
  const HEADS = [
    'A ²³⁹Pu fission trigger sits above lithium deuteride fuel, packed in Styrofoam inside a shell of ²³⁸U.',
    'The shape charges crush the trigger, and its fissions send neutrons and γ rays into the fuel.',
    'Neutrons turn ⁶Li into tritium while the γ rays heat and compress the fuel.',
    'Deuterium and tritium fuse, and fast neutrons leave the burning fuel.',
    'The ²³⁸U shell reflects some fast neutrons back into the fuel and fissions under the rest.',
  ];
  const RX = [
    '\\mk{n}{n} + \\mk{pu}{{}^{239}\\text{Pu}} \\to \\mk{f1}{\\text{FF}_{1}} + \\mk{f2}{\\text{FF}_{2}} + \\mk{xn}{x\\,n}',
    '\\mk{n}{n} + \\mk{li}{{}^{6}\\text{Li}} \\to \\mk{h3}{{}^{3}\\text{H}} + \\mk{he}{{}^{4}\\text{He}}',
    '\\mk{d}{{}^{2}\\text{H}} + \\mk{h3}{{}^{3}\\text{H}} \\to \\mk{he}{{}^{4}\\text{He}} + \\mk{n2}{n}',
    '\\mk{n}{n} + \\mk{u}{{}^{238}\\text{U}} \\to \\mk{f1}{\\text{FF}_{1}} + \\mk{f2}{\\text{FF}_{2}} + \\mk{xn}{x\\,n}',
  ];
  const MAPS = [{ xn: 'n' }, {}, { n2: 'n' }];

  /* the fuel's half-width as it is compressed, and a point of the fuel */
  const fw = (s) => FU.w0 + (FU.w1 - FU.w0) * F.ease.smooth(clamp(s - 1));
  const inFuel = (i, s) => ({ x: CX + (hash(i, 3) * 2 - 1) * (fw(s) - 8), y: FU.t + 16 + hash(i, 4) * (FU.b - FU.t - 32) });
  /* where a ray from p in direction a meets the inner face of the shell */
  function toShell(p, a) {
    const ux = Math.cos(a), uy = Math.sin(a), R = (IN.r - IN.l) / 2;
    let lo = 0, hi = 800;
    const inside = (q) => q.x > IN.l && q.x < IN.r && (q.y > IN.t + R ? q.y < IN.b - R || Math.hypot(q.x - CX, q.y - (IN.b - R)) < R : Math.hypot(q.x - CX, q.y - (IN.t + R)) < R);
    for (let k = 0; k < 24; k++) { const m = (lo + hi) / 2; if (inside({ x: p.x + m * ux, y: p.y + m * uy })) lo = m; else hi = m; }
    return { x: p.x + lo * ux, y: p.y + lo * uy };
  }
  const lerp = (a, b, k) => ({ x: a.x + (b.x - a.x) * k, y: a.y + (b.y - a.y) * k });
  const nuc = (ctx, x, y, c, r) => { ctx.save(); ctx.fillStyle = c; ctx.strokeStyle = alpha(PAL.ink, 0.55); ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(x, y, r, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore(); };

  function draw() {
    const { ctx } = begin(d.c);
    const s = sS.v, k1 = clamp(s), k2 = clamp(s - 1), k3 = clamp(s - 2), k4 = clamp(s - 3);
    const N0 = F.el('n0'), GA = F.el('gamma'), U = F.el('U'), PUc = F.el('Pu'), LI = F.el('Li'), BE = F.el('Be'), H3 = F.el('H'), HE = F.el('He');
    const stage = s <= 0.001 ? 0 : Math.min(4, Math.ceil(s - 0.001));
    hits = [];
    const lab = labeller(ctx, H, { headline: topline(ctx, HEADS[stage]) });

    /* the shell of ²³⁸U and the Styrofoam inside it */
    ctx.save(); ctx.fillStyle = alpha(U, 0.7); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.roundRect(OUT.l, OUT.t, OUT.r - OUT.l, OUT.b - OUT.t, (OUT.r - OUT.l) / 2); ctx.fill(); ctx.stroke();
    ctx.fillStyle = PAL.panel; ctx.beginPath(); ctx.roundRect(IN.l, IN.t, IN.r - IN.l, IN.b - IN.t, (IN.r - IN.l) / 2); ctx.fill(); ctx.stroke();
    ctx.fillStyle = alpha(PAL.muted, 0.14); ctx.fill(); ctx.restore();
    ctx.save(); ctx.beginPath(); ctx.roundRect(IN.l, IN.t, IN.r - IN.l, IN.b - IN.t, (IN.r - IN.l) / 2); ctx.clip();
    ctx.strokeStyle = alpha(PAL.ink, 0.13); ctx.lineWidth = 1.5;
    for (let i = 0; i < 90; i++) { const x = IN.l + hash(i, 11) * (IN.r - IN.l), y = IN.t + hash(i, 12) * (IN.b - IN.t), a = 6.28 * hash(i, 13); ctx.beginPath(); ctx.arc(x, y, 5, a, a + 3.6); ctx.stroke(); }
    if (k2 > 0 && k3 < 1) { ctx.fillStyle = alpha(F.fact(FIRE_EDGE), 0.12 * k2 * (1 - k3)); ctx.fillRect(IN.l, IN.t, IN.r - IN.l, IN.b - IN.t); }
    ctx.restore();
    hits.push({ x: OUT.l + SH / 2, y: 420, r: 18, name: 'the shell of ²³⁸U: it reflects neutrons back into the fuel and fissions under fast ones' });
    hits.push({ x: IN.l + 30, y: 300, r: 22, name: 'Styrofoam with γ absorbers' });

    /* the fission flashes in the shell, stage 4 */
    if (k4 > 0) for (let i = 0; i < NF; i += 2) {
      const a = (i + 0.5) * 2 * Math.PI / NF + 0.2, p = toShell(inFuel(i, 2.99), a);
      const q = { x: p.x + Math.cos(a) * SH * 0.5, y: p.y + Math.sin(a) * SH * 0.5 };
      fireball(ctx, q.x, q.y, 10 + 26 * k4, 0.9 * clamp(k4 * 1.5 - hash(i, 9) * 0.3));
    }

    /* the fuel: lithium deuteride round the rod of ²³⁹Pu and ²³⁵U */
    const w = fw(s);
    ctx.save(); ctx.fillStyle = alpha(LI, 0.45); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.ellipse(CX, FU.b, w, 11, 0, 0, Math.PI); ctx.lineTo(CX - w, FU.t); ctx.ellipse(CX, FU.t, w, 11, 0, Math.PI, 2 * Math.PI); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(CX, FU.t, w, 11, 0, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.fillStyle = alpha(PUc, 0.7); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.roundRect(CX - ROD, FU.t + 6, 2 * ROD, FU.b - FU.t - 6, 6); ctx.fill(); ctx.stroke(); ctx.restore();
    if (k2 > 0 || k3 > 0) {
      const glow = 0.25 * k2 + 0.7 * k3;
      ctx.save(); ctx.beginPath(); ctx.rect(CX - w, FU.t - 11, 2 * w, FU.b - FU.t + 22); ctx.clip();
      ctx.globalAlpha *= glow; ctx.fillStyle = F.fact(FIRE_EDGE); ctx.fillRect(CX - w, FU.t - 11, 2 * w, FU.b - FU.t + 22);
      ctx.globalAlpha = Math.min(1, glow * 1.1); ctx.fillStyle = F.fact(FIRE_CORE); ctx.fillRect(CX - w * 0.55, FU.t, w * 1.1, FU.b - FU.t); ctx.restore();
    }
    hits.push({ x: CX + w - 10, y: 440, r: 20, name: 'lithium deuteride, ⁶Li²H: the fusion fuel' });
    hits.push({ x: CX, y: 480, r: 12, name: 'the rod of ²³⁹Pu and ²³⁵U: more fission fuel inside the fusion fuel' });

    /* the trigger: beryllium reflector, shape charges and the plutonium */
    ctx.save(); ctx.strokeStyle = BE; ctx.lineWidth = 9; ctx.beginPath(); ctx.arc(PU.x, PU.y, PU.r0 + 22, Math.PI * 1.12, Math.PI * 1.88); ctx.stroke(); ctx.restore();
    const crush = F.ease.smooth(clamp(k1 / 0.3)), pr = PU.r0 + (PU.r1 - PU.r0) * crush;
    ctx.save(); ctx.strokeStyle = alpha(PAL.muted, 0.9 * (1 - crush)); ctx.lineWidth = 10; ctx.setLineDash([12, 5]); ctx.beginPath(); ctx.arc(PU.x, PU.y, pr + 9, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
    if (k1 > 0 && k1 < 0.3) fireball(ctx, PU.x, PU.y, PU.r0 + 22, Math.sin(Math.PI * k1 / 0.3));
    ctx.save(); ctx.fillStyle = alpha(PUc, 0.85); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(PU.x, PU.y, pr, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
    if (k1 > 0.3) fireball(ctx, PU.x, PU.y, pr * 2.2, 0.85 * clamp((k1 - 0.3) / 0.3) * (1 - 0.6 * k3));
    hits.push({ x: PU.x, y: PU.y, r: pr, name: 'the ²³⁹Pu fission trigger' });
    hits.push({ x: PU.x, y: PU.y - PU.r0 - 22, r: 14, name: 'the beryllium neutron reflector' });
    hits.push({ x: PU.x - PU.r0 - 9, y: PU.y, r: 10, name: 'the shape charges that implode the trigger' });

    /* stage 1: neutrons from the trigger into the fuel, γ rays out through the Styrofoam */
    const fly = F.ease.smooth(clamp((k1 - 0.3) / 0.7));
    if (k1 > 0.3 && k2 < 1) {
      for (let i = 0; i < NG; i++) {
        const a = (i + hash(i, 5)) * 2 * Math.PI / NG, p0 = { x: PU.x + pr * Math.cos(a), y: PU.y + pr * Math.sin(a) }, p1 = toShell(p0, a);
        const h = lerp(p0, p1, fly), tl = lerp(p0, p1, Math.max(0, fly - 0.12));
        ctx.save(); ctx.globalAlpha *= 1 - k2; line(ctx, tl.x, tl.y, h.x, h.y, GA, 3.5); ctx.restore();
      }
      hits.push({ x: PU.x + 90, y: PU.y, r: 20, name: 'γ rays from the trigger, absorbed in the Styrofoam' });
    }
    for (let i = 0; i < NN; i++) {
      const a = 2 * Math.PI * hash(i, 6), p0 = { x: PU.x + pr * Math.cos(a), y: PU.y + pr * Math.sin(a) }, p1 = inFuel(i, s);
      const made = k2 * NN > i;
      if (k1 > 0.3 && !made) { const p = lerp(p0, p1, fly); dot(ctx, p.x, p.y, N0, true, 5); }
      if (made) {
        /* n + ⁶Li → ³H + ⁴He where the neutron stopped */
        const gone = clamp(k3 * 1.4 - hash(i, 8) * 0.4);
        if (gone < 1) { ctx.save(); ctx.globalAlpha *= 1 - gone; nuc(ctx, p1.x - 5, p1.y, H3, 5); ctx.restore(); }
        nuc(ctx, p1.x + 5, p1.y, HE, 5.5);
      }
    }
    if (k1 > 0.3 && k2 < 1) hits.push({ x: CX, y: (PU.y + FU.t) / 2 + 20, r: 30, name: 'neutrons from the trigger' });
    if (k2 > 0) hits.push({ x: CX - w / 2, y: 460, r: 20, name: '³H and ⁴He made from ⁶Li by neutrons' });

    /* stages 3 and 4: fast neutrons from the fuel to the shell, some reflected */
    if (k3 > 0) for (let i = 0; i < NF; i++) {
      const a = (i + 0.5) * 2 * Math.PI / NF + 0.2, p0 = inFuel(i, 2.99), p1 = toShell(p0, a);
      const reflect = i % 2 === 1;
      let p = lerp(p0, p1, F.ease.smooth(k3));
      if (k4 > 0) { if (!reflect) continue; p = lerp(p1, lerp(p1, p0, 0.7), F.ease.smooth(k4)); }
      dot(ctx, p.x, p.y, N0, true, 6);
    }
    if (k3 > 0) hits.push({ x: CX + 110, y: 520, r: 30, name: 'fast neutrons from fusion' });

    lab.add('²³⁸U shell', OUT.r, 300, 1, 0, PAL.ink, 20, 30);
    lab.add('²³⁹Pu trigger', PU.x + PU.r0 * 0.7, PU.y - PU.r0 * 0.7, 1, -0.25, PAL.ink, 20, 200);
    lab.add('lithium deuteride', CX + FU.w0 * 0.6, 420, 1, 0, PAL.ink, 20, 200);
    lab.add('²³⁹Pu and ²³⁵U rod', CX - ROD + 2, 520, -1, 0, PAL.ink, 20, 205);
    lab.add('Styrofoam with γ absorbers', IN.l + 22, 190, -1, -0.2, PAL.ink, 20, 100);

    /* legend */
    const LX = 900, LY = 470;
    [[N0, 'neutron'], [H3, '³H, tritium'], [HE, '⁴He']].forEach(([c, n], i) => { nuc(ctx, LX, LY + i * 36, c, 6); text(ctx, n, LX + 18, LY + i * 36, PAL.ink, { size: 18, align: 'left' }); });
    line(ctx, LX - 12, LY + 108, LX + 12, LY + 108, GA, 3.5); text(ctx, 'γ ray', LX + 18, LY + 108, PAL.ink, { size: 18, align: 'left' });
    lab.place({ l: LX - 16, t: LY - 16, r: LX + 130, b: LY + 124 });

    lab.flush();
    const i = Math.min(3, Math.floor(s)), kk = s - i;
    if (s <= 1) F.morphAt(ro.formula, RX[0], RX[1], 0, { keyMap: MAPS[0] });
    else F.morphAt(ro.formula, RX[i - 1], RX[i], s >= 4 ? 1 : kk, { keyMap: MAPS[i - 1] });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 32.29 · fig-energy-fractions · faithful copy · still
   The book's three pies side by side, wedges clockwise from the top in the
   book's order: thermal, delayed radiation, prompt radiation, blast.
===================================================================== */
(function () {
  const H = 540;
  const d = sim('fig-energy-fractions', H);
  const KINDS = [{ n: 'blast', i: 0 }, { n: 'thermal', i: 1 }, { n: 'prompt radiation', i: 2 }, { n: 'delayed radiation', i: 3 }];
  const PIES = [
    { x: 250, t: ['(a) conventional', 'chemical bomb'], f: { thermal: 10, blast: 90 } },
    { x: 700, t: ['(b) conventional', 'nuclear bomb'], f: { thermal: 35, 'delayed radiation': 10, 'prompt radiation': 5, blast: 50 } },
    { x: 1150, t: ['(c) radiation-enhanced', 'nuclear bomb (neutron bomb)'], f: { thermal: 25, 'delayed radiation': 5, 'prompt radiation': 30, blast: 40 } },
  ];
  const ORDER = ['thermal', 'delayed radiation', 'prompt radiation', 'blast'];
  const CY = 318, R = 135;
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    topline(ctx, 'A nuclear bomb puts far more of its energy into heat and radiation than a conventional bomb does.');
    PIES.forEach((p) => {
      text(ctx, p.t[0], p.x, 112, PAL.ink, { size: 20, align: 'center' });
      text(ctx, p.t[1], p.x, 138, PAL.ink, { size: 20, align: 'center' });
      let a = -Math.PI / 2;
      ORDER.forEach((name) => {
        const pc = p.f[name]; if (!pc) return;
        const k = KINDS.find((q) => q.n === name), da = pc / 100 * 2 * Math.PI, am = a + da / 2;
        ctx.save(); ctx.fillStyle = alpha(F.cat(k.i), 0.6); ctx.strokeStyle = PAL.panel; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(p.x, CY); ctx.arc(p.x, CY, R, a, a + da); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
        if (pc >= 20) text(ctx, pc + '%', p.x + 0.58 * R * Math.cos(am), CY + 0.58 * R * Math.sin(am), PAL.ink, { size: 22, weight: 600, align: 'center' });
        else {
          const c = Math.cos(am), sn = Math.sin(am);
          line(ctx, p.x + (R - 14) * c, CY + (R - 14) * sn, p.x + (R + 18) * c, CY + (R + 18) * sn, alpha(PAL.ink, 0.6), 2);
          text(ctx, pc + '%', p.x + (R + 26) * c, CY + (R + 26) * sn, PAL.ink, { size: 20, weight: 600, align: c > 0.2 ? 'left' : c < -0.2 ? 'right' : 'center', bg: PAL.panel });
        }
        hits.push({ x: p.x + 0.7 * R * Math.cos(am), y: CY + 0.7 * R * Math.sin(am), r: Math.max(14, Math.min(50, R * da / 3)), name: name + ': ' + pc + '% of the energy output' });
        a += da;
      });
      ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.7); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(p.x, CY, R, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
    });
    const LYY = 505, xs = [330, 490, 650, 890];
    KINDS.forEach((k, j) => { ctx.save(); ctx.fillStyle = alpha(F.cat(k.i), 0.6); ctx.fillRect(xs[j], LYY - 10, 26, 20); ctx.restore(); text(ctx, k.n, xs[j] + 36, LYY, PAL.ink, { size: 18, align: 'left' }); });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   Sim · sim-weapon-yield · still
   A log ruler of yields from 1 ton to 100 MT of TNT (log₁₀ of kT from −3 to
   5, fixed), with the mass destroyed on a second scale beneath it:
   Δm = Y·4.2 × 10¹² J/kT ÷ (3.00 × 10⁸ m/s)², 0.0467 g per kiloton. The slider
   carries log₁₀ of the yield in kT from −1 (0.1 kT) to 4.83 (67 MT) and writes
   its value as a yield. Marks: the largest conventional bombs, 2 t (10 kT is
   5000 of them), Trinity 10 kT, Hiroshima 15 kT, Nagasaki 20 kT, Eniwetok
   10 MT, the 67-MT device, and the band of current arsenals, 0.1 kT to 20 MT.
===================================================================== */
(function () {
  const H = 470, KT = 4.2e12, CC = 3.0e8;
  const d = sim('sim-weapon-yield', H);
  const NAMED = [{ lg: 1, n: 'Trinity' }, { lg: Math.log10(15), n: 'Hiroshima' }, { lg: Math.log10(20), n: 'Nagasaki' }, { lg: 4, n: 'Eniwetok' }, { lg: Math.log10(67000), n: 'the 67-MT device' }];
  const yS = ctl(d.controls, { label: '\\kE', cls: 'energy', min: -1, max: Math.log10(67000), step: 0.001, value: Math.log10(15), unit: '', dec: 0, aria: 'the yield of the bomb, as a power of ten in kilotons',
    specials: NAMED.map((m) => ({ at: m.lg })) });
  const valEl = yS.el.querySelector('.ctl-val'), inp = yS.el.querySelector('input');
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);

  const RL = 230, RR = 1290, L0 = -3, L1 = 5, YA = 236, MA = 352, BAND = [282, 306];
  const X = (lg) => RL + (lg - L0) * (RR - RL) / (L1 - L0);
  const G_PER_KT = KT / (CC * CC) * 1000;
  const yieldStr = (Y) => (Y >= 1000 ? fmt(Number((Y / 1000).toPrecision(2)), Y >= 10000 ? 0 : 1) + ' MT' : fmt(Number(Y.toPrecision(2)), Y < 1 ? 2 : Y < 10 ? 1 : 0) + ' kT');
  const massTex = (g) => (g >= 1000 ? fmt(Number((g / 1000).toPrecision(2)), g >= 10000 ? 0 : 1) + '\\ \\text{kg}' : g < 0.1 ? fmt(Number((g * 1000).toPrecision(2)), g < 0.01 ? 1 : 0) + '\\ \\text{mg}' : fmt(Number(g.toPrecision(2)), g < 1 ? 2 : g < 10 ? 1 : 0) + '\\ \\text{g}');

  function draw() {
    const { ctx } = begin(d.c);
    const lg = yS.v, Y = Math.pow(10, lg), E = Y * KT, gm = Y * G_PER_KT, EC = C('energy'), MC = C('mass');
    const named = NAMED.find((m) => Math.abs(m.lg - lg) < 0.004);
    const ys = yieldStr(Y);
    valEl.textContent = ys; inp.setAttribute('aria-valuetext', ys);
    hits = [];
    const tons = Y < 1000 ? grp(Number((Y * 1000).toPrecision(2))) + ' tons' : fmt(Number((Y / 1000).toPrecision(2)), Y >= 10000 ? 0 : 1) + ' million tons';
    const who = named ? (named.n === 'the 67-MT device' ? ', the largest device ever detonated,' : ', the ' + named.n + ' ' + (named.lg === 1 || named.lg === 4 ? 'test' : 'bomb') + ',') : '';
    const lab = labeller(ctx, H, { headline: topline(ctx, 'A yield of ' + ys + who + ' is $\\kE = ' + sci(E) + '$ J, the energy of ' + tons + ' of TNT.') });

    /* the band of current arsenals */
    ctx.save(); ctx.fillStyle = alpha(F.cat(0), 0.35); ctx.fillRect(X(-1), BAND[0], X(Math.log10(20000)) - X(-1), BAND[1] - BAND[0]); ctx.restore();
    text(ctx, 'current arsenals, 0.1 kT to 20 MT', X(-1) + 12, (BAND[0] + BAND[1]) / 2, PAL.ink, { size: 17, align: 'left' });
    const x = X(lg);
    line(ctx, x, YA - 14, x, (YA + MA) / 2, EC, 4); line(ctx, x, (YA + MA) / 2, x, MA, MC, 4);
    hits.push({ x: X(1.5), y: (BAND[0] + BAND[1]) / 2, r: 14, name: 'yields in current arsenals: about 0.1 kT to 20 MT' });

    /* the two scales */
    line(ctx, RL, YA, RR, YA, PAL.muted, 2); line(ctx, RL, MA, RR, MA, PAL.muted, 2);
    const YT = ['1 t', '10 t', '100 t', '1 kT', '10 kT', '100 kT', '1 MT', '10 MT', '100 MT'];
    for (let l = L0; l <= L1; l++) { line(ctx, X(l), YA, X(l), YA + 8, PAL.muted, 2); text(ctx, YT[l - L0], X(l), YA + 24, PAL.muted, { size: 17, align: 'center', bg: PAL.panel }); }
    const MT = ['0.1 mg', '1 mg', '10 mg', '0.1 g', '1 g', '10 g', '100 g', '1 kg'], m0 = Math.log10(G_PER_KT);
    for (let j = 0; j < MT.length; j++) { const x = X(j - 4 - m0); line(ctx, x, MA, x, MA + 8, PAL.muted, 2); text(ctx, MT[j], x, MA + 24, PAL.muted, { size: 17, align: 'center', bg: PAL.panel }); }
    text(ctx, 'yield', RL - 24, YA, EC, { size: 20, weight: 600, align: 'right' });
    text(ctx, 'mass destroyed', RL - 24, MA, MC, { size: 20, weight: 600, align: 'right' });

    /* the marks the text names */
    const mark = (l, top, s, align, name) => {
      const x = X(l); line(ctx, x, YA, x, top + 12, alpha(PAL.ink, 0.55), 2, [4, 6]);
      text(ctx, s, x + (align === 'left' ? -4 : align === 'right' ? 4 : 0), top, PAL.ink, { size: 17, align: align === 'left' ? 'left' : align === 'right' ? 'right' : 'center', bg: PAL.panel });
      hits.push({ x, y: top, r: 16, name });
    };
    mark(Math.log10(0.002), 186, 'largest conventional bombs, 2 t', 'left', 'the largest conventional bombs: about 2 tons of TNT; 10 kT is 5000 of them');
    mark(1, 186, 'Trinity', 'right', 'Trinity, the first nuclear bomb, 1945: about 10 kT');
    mark(Math.log10(15), 150, 'Hiroshima', 'center', 'the uranium bomb dropped on Hiroshima: about 15 kT');
    mark(Math.log10(20), 186, 'Nagasaki', 'left', 'the plutonium bomb dropped on Nagasaki: 20 kT');
    mark(4, 186, 'Eniwetok, 10 MT', 'center', 'the first fusion bomb, Eniwetok Atoll, 1952: 10 MT, about 670 times Hiroshima');
    mark(Math.log10(67000), 150, '67 MT', 'center', 'the 67-MT device detonated by the USSR');

    /* the yield and its mass */
    dot(ctx, x, YA, EC, true, 9); dot(ctx, x, MA, MC, true, 9);
    label(ctx, massTex(gm).replace('\\ \\text{', ' ').replace('}', ''), x, MA + 40, { side: 'below', color: MC, gap: 10, size: 20 });
    hits.push({ x, y: YA, r: 14, name: 'the yield: ' + ys + ', ' + sci(E).replace(/\\times10\^\{(-?\d+)\}/, (_, e) => ' × 10' + sup(e)) + ' J' });
    hits.push({ x, y: MA, r: 14, name: 'the mass destroyed to release it' });

    lab.flush();
    ro.set('\\kdm = \\frac{\\kE}{\\kc^{2}} = \\frac{(' + sci(Y) + '\\ \\text{kT})(4.2\\times10^{12}\\ \\text{J/kT})}{(3.00\\times10^{8}\\ \\text{m/s})^{2}} = ' + massTex(gm));
  }
  register(d.fig, { update: () => {}, draw });
})();
};
