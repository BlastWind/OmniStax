/* Figures for section 32.2 Biological Effects of Ionizing Radiation.
   The page binds dose, energy, mass, time and position. RBE is a rating and stays ink.
   Every ray is a particle with an identity and wears the element palette: a γ or x-ray
   photon F.el('gamma'), a β F.el('e-'), a proton F.el('p+'), an α two F.el('p+') and two
   F.el('n0'), a heavy ion a larger cluster of both. The dose bands are F.cat(0..2). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['32.2'] = function (root, F) {
const { fmt, C, PAL, alpha, choice, select, ctl, register, cycle, begin, line, dot, text, topline, labeller, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI;
const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
function rng(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
const p3 = (x) => { const s = Number(x).toPrecision(3); return s.includes('e') ? String(Number(s)) : s; };
const sciTex = (x, n) => { const e = Math.floor(Math.log10(Math.abs(x))), m = x / 10 ** e; return e >= -2 ? p3(x) : fmt(m, n - 1) + '\\times 10^{' + e + '}'; };

function pip(ctx, x, y, r, color) { ctx.save(); ctx.fillStyle = color; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.restore(); }
function ball(ctx, x, y, r, color) {
  ctx.save(); ctx.fillStyle = color; ctx.strokeStyle = alpha(PAL.ink, 0.55); ctx.lineWidth = 1;
  ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
}
/* a nucleus drawn as its packed nucleons, protons and neutrons alternating */
function cluster(ctx, x, y, n, r) {
  const ring = n <= 4 ? [[-1, -1], [1, 1], [1, -1], [-1, 1]] : [[0, 0], [-1.6, -0.6], [1.6, 0.6], [0.6, -1.6], [-0.6, 1.6], [-1.6, 1], [1.6, -1], [1, 1.7], [-1, -1.7]];
  ring.slice(0, n).forEach(([dx, dy], i) => ball(ctx, x + dx * r * 0.8, y + dy * r * 0.8, r, F.el(i % 2 ? 'n0' : 'p+')));
}
function particle(ctx, k, x, y) {
  if (k === 'a') cluster(ctx, x, y, 4, 5.5);
  else if (k === 'ion') cluster(ctx, x, y, 9, 4.6);
  else ball(ctx, x, y, 6.5, F.el(k === 'p' ? 'p+' : k === 'bhi' || k === 'blo' ? 'e-' : 'gamma'));
}
/* an ion pair: the ionization event, the electron freed and the ion left behind */
function ionPair(ctx, x, y, up) {
  const c = alpha(PAL.ink, 0.85), s = up ? -1 : 1;
  for (let i = 0; i < 3; i++) { const a = i * Math.PI / 3; line(ctx, x - 6 * Math.cos(a), y - 6 * Math.sin(a), x + 6 * Math.cos(a), y + 6 * Math.sin(a), c, 2); }
  const px = x + 7, py = y + s * 15, mx = x - 7, my = y - s * 15;
  line(ctx, px - 4.5, py, px + 4.5, py, c, 2); line(ctx, px, py - 4.5, px, py + 4.5, c, 2);
  line(ctx, mx - 4.5, my, mx + 4.5, my, c, 2);
}

/* =====================================================================
   FIGURE 32.6 · sim-ionization · moving · flat (rule 28.1)
   Cells 15 μm across. Linear energy transfer in water (keV/μm) and range:
   γ (⁶⁰Co) 0.3; x rays (250 kV) 2; β above 32 keV (1 MeV) 0.2; β below 32 keV
   (20 keV) 2.3 over its 9 μm; protons (5 MeV) 7.9; α (5.23 MeV, Example 32.1)
   130 averaged over its 40 μm; heavy ions (iron near 1 GeV per nucleon) 150.
   The marks drawn per cell go as the square root of the transfer, so the γ's
   few and the heavy ion's many both read on one cell; the note gives the true
   numbers. RBE from Table 32.2, the higher value where it gives a range (as
   Example 32.1 does), protons for the body. Speeds as v/c; time slowed about
   10¹² times.
===================================================================== */
(function () {
  const KIND = {
    g: { name: 'γ', let: 0.3, range: Infinity, beta: 1, rbe: 1 },
    x: { name: 'x ray', label: 'X-rays', let: 2, range: Infinity, beta: 1, rbe: 1, head: 'An x ray ionizes a little more densely than the γ, all the way across.' },
    bhi: { name: 'β', label: 'β rays greater than 32 keV', let: 0.2, range: Infinity, beta: 0.94, rbe: 1, head: 'A β above 32 keV ionizes as sparsely as the γ and crosses every cell.' },
    blo: { name: 'β', label: 'β rays less than 32 keV', let: 2.3, range: 9, beta: 0.27, rbe: 1.7, head: 'A β below 32 keV stops inside the first cell, ionizing more densely than the γ.' },
    p: { name: 'proton', label: 'Protons (1–10 MeV)', let: 7.9, range: Infinity, beta: 0.103, rbe: 10, head: 'A proton crosses every cell, ionizing far more densely than the γ.' },
    a: { name: 'α', label: 'α rays from radioactive decay', let: 130, range: 40, beta: 0.053, rbe: 20, head: 'The α stops inside the third cell; the γ crosses all nine and goes on.' },
    ion: { name: 'heavy ion', label: 'Heavy ions from accelerators', let: 150, range: Infinity, beta: 0.88, rbe: 20, head: 'A heavy ion crosses every cell, ionizing densely all the way.' },
  };
  const H = 470, NC = 9, XL = 200, XR = 1340, PITCH = (XR - XL) / NC, CW = PITCH - 9, CH = 120, UM = PITCH / 15;
  const ROW = { g: 175, low: 355 }, X0 = XL - 26, K = 2400, T = 5.5;
  const d = sim('sim-ionization', H);
  const pick = select(d.controls, { label: '\\text{Lower ray}', options: Object.keys(KIND).filter((k) => k !== 'g').map((k) => ({ value: k, label: KIND[k].label })), value: 'a', aria: 'the radiation crossing the lower row of cells', onInput: reset });
  const cy = cycle(() => T, 1.2);
  const ro = readout(d);
  function reset() { cy.reset(); }

  /* the ion pairs of one ray along its row, stratified so a dense track is even and a sparse one random */
  const tracks = {};
  function track(k) {
    if (tracks[k]) return tracks[k];
    const m = KIND[k], end = Math.min(XR + 30, XL + m.range * UM), perCell = 0.55 * Math.sqrt(m.let / 0.3);
    const n = Math.max(1, Math.round(perCell * (Math.min(end, XR) - XL) / PITCH)), r = rng(k.length * 977 + n);
    const marks = [];
    for (let i = 0; i < n; i++) marks.push({ x: XL + (Math.min(end, XR) - XL) * (i + 0.15 + 0.7 * r()) / n, dy: (r() - 0.5) * 12, up: r() < 0.5 });
    return (tracks[k] = { end, marks, stops: isFinite(m.range) });
  }

  let hits = [];
  hover(d.stage, () => hits);

  function row(ctx, lab, k, y, t) {
    const m = KIND[k], tr = track(k);
    for (let i = 0; i < NC; i++) {
      const cx = XL + i * PITCH + 4.5;
      ctx.save(); ctx.fillStyle = alpha(PAL.soft, 0.7); ctx.strokeStyle = alpha(PAL.ink, 0.4); ctx.lineWidth = 2;
      ctx.beginPath(); ctx.roundRect(cx, y - CH / 2, CW, CH, 22); ctx.fill(); ctx.stroke();
      ctx.fillStyle = alpha(PAL.ink, 0.1); ctx.strokeStyle = alpha(PAL.ink, 0.3);
      ctx.beginPath(); ctx.arc(cx + CW * 0.62, y - 16, 22, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
      hits.push({ x: cx + CW * 0.62, y: y - 16, r: 22, name: 'the cell’s nucleus, which holds its DNA' });
      hits.push({ x: cx + CW * 0.25, y: y + 30, r: 26, name: 'a cell, about 15 μm across' });
    }
    const head = Math.min(tr.end, X0 + K * m.beta * t), col = k === 'a' || k === 'p' || k === 'ion' ? F.el('p+') : k === 'bhi' || k === 'blo' ? F.el('e-') : F.el('gamma');
    if (head > X0) line(ctx, X0, y, head, y, alpha(col, 0.5), 3);
    tr.marks.forEach((q) => { if (q.x <= head) { ionPair(ctx, q.x, y + q.dy, q.up); hits.push({ x: q.x, y: y + q.dy, r: 9, name: 'an ion pair: an electron knocked free and the positive ion it leaves behind' }); } });
    if (head < XR + 28 && (head < tr.end || tr.stops)) particle(ctx, k, head, y);
    if (tr.stops && head >= tr.end) hits.push({ x: head, y, r: 12, name: 'the ' + m.name + ', stopped after ' + fmt(m.range, 0) + ' μm' });
    lab.add(m.name, XL - 48, y, -1, 0, PAL.ink, 24, 4);
  }

  function draw() {
    const { ctx } = begin(d.c);
    const k = pick.value, m = KIND[k], t = cy.now();
    const lab = labeller(ctx, H, { headline: topline(ctx, m.head) });
    hits = [];
    row(ctx, lab, 'g', ROW.g, t);
    row(ctx, lab, k, ROW.low, t);
    lab.add('cells', XL + 3.5 * PITCH, ROW.g + CH / 2, 0, 1, PAL.muted, 20, 26);
    lab.flush();
    const ratio = m.let / KIND.g.let;
    const nt = ratio < 1.5 ? 'about as little as the γ’s 0.3 keV' : Number(ratio.toPrecision(2)) + ' times the γ’s 0.3 keV';
    ro.set('\\kdose = (2.00\\;\\text{rad})(' + m.rbe + ') = ' + p3(2 * m.rbe) + '\\;\\text{rem}',
      'The ' + m.name + ' leaves about ' + m.let + ' keV in each micrometer of its path, ' + nt + '.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   SIM · sim-dose · still · flat
   The same energy E absorbed in the whole body of a 50.0-kg person or in her
   2.00-kg forearm; dose = E/m. Dots stand for its ion pairs, 40 to the joule,
   so the dose is their density. The dose times the RBE lands on a log ruler
   fixed from 1 mSv to 100 Sv (the slider's and choices' extremes are 2 mSv
   and 100 Sv), banded low, moderate and high, with the Table 32.4 effect of a
   whole-body dose.
===================================================================== */
(function () {
  const H = 540, FX = 190, FY = 496, S = 2.6, HAND = { x: 52, y: -98 };
  const RL = 540, RR = 1320, L0 = -3, L1 = 2, SY = 236, SH = 48;
  const XD = (lg) => RL + (RR - RL) * (lg - L0) / (L1 - L0);
  const TISSUE = { body: { m: 50, name: 'whole body, 50.0 kg' }, arm: { m: 2, name: 'forearm, 2.00 kg' } };
  const RAD = { g: { rbe: 1, label: 'γ rays' }, a: { rbe: 20, label: 'α rays' } };
  const BANDS = [[-3, -1, 'low dose'], [-1, 0, 'moderate dose'], [0, 2, 'high dose']];
  const EFFECT = [[0.1, '0–0.10 Sv: No observable effect.'], [1, '0.1–1 Sv: Slight to moderate decrease in white blood cell counts.'],
    [2, '1–2 Sv: Significant reduction in blood cell counts, brief nausea and vomiting. Rarely fatal.'],
    [5, '2–5 Sv: Nausea, vomiting, hair loss, severe blood damage, hemorrhage, fatalities.'],
    [20, '5–20 Sv: Worst effects due to malfunction of small intestine and blood systems. Limited survival.'],
    [Infinity, 'Over 20 Sv: Fatal within hours due to collapse of central nervous system.']];
  const MARKS = [[0.5, 'temporary sterility, 0.35 Sv for women and 0.50 Sv for men'], [4.5, 'LD50/32: lethal to 50% within 32 days if not treated'], [20, 'above 20 Sv, fatal within hours']];
  const d = sim('sim-dose', H);
  const E = ctl(d.controls, { label: '\\kE', cls: 'energy', min: 0.1, max: 10, step: 0.01, value: 1, unit: 'J', dec: 2, detents: [1], aria: 'the ionizing energy absorbed' });
  const tis = choice(d.controls, { label: '\\text{Tissue}', options: [{ value: 'body', label: 'whole body' }, { value: 'arm', label: 'forearm' }], value: 'body', aria: 'the tissue that absorbs the energy', key: 'tissue' });
  const rad = choice(d.controls, { label: '\\text{Radiation}', options: [{ value: 'g', label: 'γ rays' }, { value: 'a', label: 'α rays' }], value: 'g', aria: 'the type of radiation', key: 'radiation' });
  const ro = readout(d);

  /* the near arm reaches forward so the forearm stands clear of the body; elbow as the library bends it */
  const sk = F.silhouette.pose('stand'), sh = sk.shoulder;
  const elbow = (() => {
    const dx = HAND.x - sh.x, dy = HAND.y - sh.y, L = Math.hypot(dx, dy), q = L / 2, h = Math.sqrt(Math.max(0, 900 - q * q));
    return { x: sh.x + dx * q / L - dy * h / L, y: sh.y + dy * q / L + dx * h / L };
  })();
  const P = (j) => [FX + S * j.x, FY + S * j.y];
  const [ex, ey] = P(elbow), [hx, hy] = P(HAND);
  const person = (ctx, color) => F.silhouette(ctx, { x: FX, y: FY, s: S, pose: 'stand', color, hands: [HAND, sk.hands[1]] });

  /* points inside the body, read once from the silhouette drawn off the page */
  let body = null;
  function bodyPts() {
    if (body) return body;
    const c = document.createElement('canvas'); c.width = 1400; c.height = H;
    const o = c.getContext('2d'); person(o, '#000');
    const px = o.getImageData(0, 0, 1400, H).data, pts = [];
    for (let y = 0; y < H; y += 3) for (let x = 0; x < 600; x += 3) if (px[(y * 1400 + x) * 4 + 3] > 200) pts.push([x, y]);
    return (body = pts);
  }
  const R = rng(32);
  const seq = Array.from({ length: 400 }, () => [R(), R()]);

  let hits = [];
  hover(d.stage, () => hits);

  function draw() {
    const { ctx } = begin(d.c);
    const e = E.v, t = TISSUE[tis.value], arm = tis.value === 'arm', rbe = RAD[rad.value].rbe;
    const gy = e / t.m, radv = gy * 100, other = e / TISSUE[arm ? 'body' : 'arm'].m * 100, sv = gy * rbe;
    const head = arm ? 'Packed into the forearm, $\\kE = ' + fmt(e, 2) + '$ J is ' + p3(radv) + ' rad; spread through the whole body it would be ' + p3(other) + ' rad.'
      : 'Spread through the whole body, $\\kE = ' + fmt(e, 2) + '$ J is ' + p3(radv) + ' rad; packed into the forearm it would be ' + p3(other) + ' rad.';
    const lab = labeller(ctx, H, { headline: topline(ctx, head) });
    hits = [];

    person(ctx, alpha(PAL.ink, arm ? 0.18 : 0.42));
    if (arm) line(ctx, ex, ey, hx, hy, alpha(PAL.ink, 0.6), 10);
    const n = Math.round(40 * e), EC = C('energy');
    if (arm) {
      const ux = hx - ex, uy = hy - ey, L = Math.hypot(ux, uy);
      for (let i = 0; i < n; i++) { const [a, b] = seq[i]; pip(ctx, ex + ux * a - uy / L * (b - 0.5) * 8, ey + uy * a + ux / L * (b - 0.5) * 8, 3, EC); }
    } else {
      const pts = bodyPts();
      for (let i = 0; i < n && pts.length; i++) { const [x, y] = pts[Math.floor(seq[i][0] * pts.length)]; pip(ctx, x + seq[i][1] * 2, y, 3, EC); }
    }
    if (arm) lab.add(t.name, hx + 6, hy, 1, 0, PAL.ink, 20, 18);
    else lab.add(t.name, FX + 34, FY - 250, 1, 0, PAL.ink, 20, 30);
    hits.push({ x: FX + 6, y: FY - 250, r: 40, name: 'a 50.0-kg person' });
    hits.push({ x: (ex + hx) / 2, y: (ey + hy) / 2, r: 24, name: 'her 2.00-kg forearm' });

    /* the ruler: dose in Sv, one step a factor of ten */
    BANDS.forEach(([a, b, name], i) => {
      ctx.save(); ctx.fillStyle = alpha(F.cat(i + 1), 0.3); ctx.fillRect(XD(a), SY, XD(b) - XD(a), SH); ctx.restore();
      text(ctx, name, (XD(a) + XD(b)) / 2, SY + SH + 64, PAL.ink, { size: 18, align: 'center', weight: 600 });
      hits.push({ x: (XD(a) + XD(b)) / 2, y: SY + SH / 2, r: 24, name: name + (i === 0 ? ', under 0.1 Sv' : i === 1 ? ', 0.1 Sv to 1 Sv' : ', over 1 Sv') });
    });
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.6); ctx.lineWidth = 2; ctx.strokeRect(RL, SY, RR - RL, SH); ctx.restore();
    ['1 mSv', '10 mSv', '0.1 Sv', '1 Sv', '10 Sv', '100 Sv'].forEach((s, i) => {
      const x = XD(L0 + i); line(ctx, x, SY + SH, x, SY + SH + 8, PAL.muted, 2);
      text(ctx, s, x, SY + SH + 26, PAL.muted, { size: 17, align: i === 0 ? 'left' : i === 5 ? 'right' : 'center' });
    });
    MARKS.forEach(([v, name]) => { const x = XD(Math.log10(v)); line(ctx, x, SY + 6, x, SY + SH - 6, alpha(PAL.ink, 0.55), 2, [4, 4]); hits.push({ x, y: SY + SH / 2, r: 10, name }); });
    text(ctx, 'dose (Sv)', RL, SY - 74, C('dose'), { size: 20, weight: 600 });

    const lg = Math.log10(sv), mx = XD(Math.min(L1, Math.max(L0, lg))), DC = C('dose');
    ctx.save(); ctx.fillStyle = DC; ctx.beginPath(); ctx.moveTo(mx, SY - 4); ctx.lineTo(mx - 11, SY - 24); ctx.lineTo(mx + 11, SY - 24); ctx.closePath(); ctx.fill(); ctx.restore();
    line(ctx, mx, SY, mx, SY + SH, DC, 4);
    hits.push({ x: mx, y: SY - 14, r: 14, name: 'this dose, ' + p3(sv) + ' Sv' });
    if (!arm) {
      const eff = EFFECT.find(([top]) => sv < top)[1];
      text(ctx, eff, (RL + RR) / 2, SY + SH + 112, PAL.ink, { size: 18, align: 'center' });
    }
    lab.flush();

    const band = sv < 0.1 ? 'a low dose' : sv <= 1 ? 'a moderate dose' : 'a high dose';
    ro.set('\\kdose = \\frac{\\kE}{\\km} = \\frac{' + fmt(e, 2) + '\\;\\text{J}}{' + fmt(t.m, arm ? 2 : 1) + '\\;\\text{kg}} = ' + p3(gy) + '\\;\\text{Gy} = ' + p3(radv) + '\\;\\text{rad}',
      'Times an RBE of ' + rbe + ', it is ' + p3(sv) + ' Sv, or ' + p3(sv * 100) + ' rem: ' + band + '.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 32.7 · sim-protection · moving · flat, a side view of the room
   The technician's dose of scattered x rays, against an unshielded person
   1 m away during a 1-s exposure: proportional to the exposure time t,
   falling as 1/d² (the scattered x rays spread over a sphere, 16.11), and
   halved by every 0.170 mm of lead, the half-thickness the section's own
   problem gives (close to lead's for a 70-kV dental tube). The rings are a
   slice through the spreading shell, so in the page they thin as 1/d; the
   readout carries the sphere's 1/d². Each ring is one x ray absorbed at the
   film; its dots survive the door with the lead's transmission. Drawn time
   runs four times the exposure; the flight is slowed about 10⁹ times.
===================================================================== */
(function () {
  const H = 600, FLOOR = 520, CEIL = 100, S = 205, SP = 2.4, V = 520, XH = 0.17, NR = 40, EVERY = 0.12;
  const PX = 470;                                         /* the patient's hips, facing the tube */
  const sit = F.silhouette.pose('sit');
  const hd = { x: PX - SP * sit.head.x, y: FLOOR + SP * sit.head.y };
  const J = { x: hd.x - 22, y: hd.y + 12 };               /* the film behind the teeth */
  const A = { x: 190, y: J.y }, CX = 330, CX2 = J.x - 46;  /* the anode; the collimator's two ends */
  const d = sim('sim-protection', H);
  const tE = ctl(d.controls, { label: '\\kt', cls: 'time', min: 0.05, max: 1, step: 0.01, value: 0.2, unit: 's', dec: 2, onInput: reset, aria: 'the exposure time' });
  const dD = ctl(d.controls, { label: '\\kd', cls: 'position', min: 1, max: 4, step: 0.1, value: 3, unit: 'm', dec: 1, onInput: reset, aria: 'the technician’s distance from the patient' });
  const xL = ctl(d.controls, { label: '\\kx', cls: 'position', min: 0, max: 2, step: 0.01, value: 1, unit: 'mm', dec: 2, onInput: reset, aria: 'the thickness of lead in the door' });
  const TE = () => 4 * tE.v, T = () => TE() + (1400 - A.x) / V + 0.4;
  const cy = cycle(T, 1.2);
  const ro = readout(d);
  function reset() { cy.reset(); }

  const apron = [[-24, -98], [16, -98], [44, -40], [42, -26], [-28, -26]].map(([x, y]) => [PX - SP * x, FLOOR + SP * y]);
  function inside(poly, x, y) {
    let c = false;
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      const [xi, yi] = poly[i], [xj, yj] = poly[j];
      if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) c = !c;
    }
    return c;
  }
  function wiggle(ctx, x, y, ux, uy, color) {
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.beginPath();
    for (let i = 0; i <= 12; i++) { const s = -22 + 22 * i / 12, w = 4 * Math.sin(i * 1.6); const px = x + ux * s - uy * w, py = y + uy * s + ux * w; i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); }
    ctx.stroke(); ctx.restore();
    ball(ctx, x, y, 3.5, color);
  }

  /* where each dot of ring i ends, kept until the door or the technician moves */
  let memo = new Map(), memoKey = '';
  function ring(i, TX, DX, DT, top, tr) {
    const key = TX + '|' + tr;
    if (key !== memoKey) { memo = new Map(); memoKey = key; }
    if (memo.has(i)) return memo.get(i);
    const r = rng(7919 * i + 3), ph = r() * TAU / NR, out = [];
    for (let k = 0; k < NR; k++) {
      const a = ph + k * TAU / NR, ux = Math.cos(a), uy = Math.sin(a), pass = r() < tr;
      let end = 2000, kind = 'edge';
      for (let q = 14; q < 2000; q += 4) {
        const x = J.x + ux * q, y = J.y + uy * q;
        if (y > FLOOR || x < 0 || x > 1400 || y < CEIL) { end = q; break; }
        if (inside(apron, x, y) || (x >= 110 && x <= 330 && Math.abs(y - A.y) <= 56)) { end = q; kind = 'stop'; break; }
        if (!pass && x >= DX - 10 && x <= DX + 10 && y >= DT) { end = q; kind = 'stop'; break; }
        if (x >= TX - 22 && x <= TX + 22 && y >= top && y <= FLOOR) { end = q; kind = 'tech'; break; }
      }
      out.push({ ux, uy, end, kind });
    }
    memo.set(i, out); return out;
  }

  let hits = [];
  hover(d.stage, () => hits);

  function draw() {
    const { ctx } = begin(d.c);
    const t = cy.now(), dist = dD.v, xl = xL.v, tr = 0.5 ** (xl / XH);
    const TX = J.x + dist * S, DX = TX - 64, GC = F.el('gamma');
    const head = xl > 0 ? 'The scattered x rays thin out as they spread, and $\\kx = ' + fmt(xl, 2) + '$ mm of lead stops ' + fmt(100 * (1 - tr), 0) + '% of those that reach the door.'
      : 'The scattered x rays thin out as they spread, and with no lead in the door every one that reaches it passes through.';
    const lab = labeller(ctx, H, { headline: topline(ctx, head) });
    hits = [];

    line(ctx, 20, FLOOR, 1380, FLOOR, alpha(PAL.ink, 0.5), 2);
    line(ctx, 20, CEIL, 1380, CEIL, alpha(PAL.ink, 0.25), 2);

    /* the tube head, lined with lead, and its collimator */
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.3); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2;
    ctx.fillRect(110, A.y - 56, 220, 112); ctx.strokeRect(110, A.y - 56, 220, 112);
    ctx.fillStyle = PAL.panel; ctx.fillRect(126, A.y - 40, 188, 80);
    ctx.fillStyle = alpha(PAL.ink, 0.3); ctx.beginPath(); ctx.moveTo(CX, A.y - 24); ctx.lineTo(CX2, A.y - 14); ctx.lineTo(CX2, A.y + 14); ctx.lineTo(CX, A.y + 24); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.fillStyle = PAL.panel; ctx.fillRect(CX - 2, A.y - 7, CX2 - CX + 4, 14);
    ctx.restore();
    line(ctx, 220, A.y - 56, 220, CEIL, alpha(PAL.ink, 0.5), 10);
    dot(ctx, A.x, A.y, PAL.ink, true, 7);
    lab.add('x-ray tube', 150, A.y - 56, 0, -1, PAL.ink, 20, 16);
    lab.add('lead collimator', (CX + CX2) / 2, A.y + 24, 0, 1, PAL.ink, 20, 20);
    hits.push({ x: A.x, y: A.y, r: 14, name: 'the x-ray tube, where the x rays are made' });
    hits.push({ x: 230, y: A.y + 48, r: 16, name: 'the lead lining of the tube head, which stops the x rays that leave sideways' });

    /* the chair, the patient and the apron */
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.45); ctx.lineWidth = 6; ctx.lineCap = 'round'; ctx.beginPath();
    ctx.moveTo(PX - 60, FLOOR - 104); ctx.lineTo(PX + 52, FLOOR - 104); ctx.lineTo(PX + 60, FLOOR - 270);
    ctx.moveTo(PX - 40, FLOOR - 104); ctx.lineTo(PX - 40, FLOOR); ctx.moveTo(PX + 40, FLOOR - 104); ctx.lineTo(PX + 40, FLOOR); ctx.stroke(); ctx.restore();
    F.silhouette(ctx, { x: PX, y: FLOOR, s: SP, pose: 'sit', face: -1, color: alpha(PAL.ink, 0.7) });
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.35); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.beginPath();
    apron.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
    line(ctx, J.x, J.y - 11, J.x, J.y + 11, PAL.ink, 4);
    lab.add('film', J.x, J.y + 11, 0.4, 1, PAL.ink, 20, 40);
    lab.add('lead apron', apron[2][0] - 6, apron[2][1] + 30, -1, 0, PAL.ink, 20, 70);
    hits.push({ x: PX, y: FLOOR - 140, r: 30, name: 'the patient, under a lead apron' });

    /* the door and the technician */
    const DT = CEIL, dk = 0.1 + 0.35 * xl / 2;
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, dk); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2;
    ctx.fillRect(DX - 10, DT, 20, FLOOR - DT); ctx.strokeRect(DX - 10, DT, 20, FLOOR - DT);
    ctx.fillStyle = alpha(PAL.soft, 0.9); ctx.fillRect(DX - 6, DT + 40, 12, 80); ctx.restore();
    lab.add(xl > 0 ? 'lead-lined door' : 'door', DX + 10, DT + 18, 1, 0, PAL.ink, 20, 8);
    hits.push({ x: DX, y: DT + 80, r: 18, name: xl > 0 ? 'the lead glass window of the door' : 'the window of the door' });
    F.silhouette(ctx, { x: TX, y: FLOOR, s: SP, pose: 'stand', face: -1, color: alpha(PAL.ink, 0.7) });
    hits.push({ x: TX, y: FLOOR - 200, r: 34, name: 'the technician' });
    const top = FLOOR - F.silhouette.height(SP);

    /* the x rays: primaries along the beam, and strays the tube's lining stops; each primary
       absorbed at the film scatters one ring, whose dots end at the apron, the door, the
       technician or the edge of the page */
    const nP = Math.max(1, Math.round(TE() / EVERY)), aj = (J.x - A.x) / V;
    let stuck = 0;
    for (let i = 0; i < nP; i++) {
      const s = t - i * EVERY;
      if (s < 0) continue;
      const r = rng(1009 * i + 7), sa = (0.25 + 0.5 * r()) * Math.PI * (r() < 0.5 ? 1 : -1);
      if (V * s < 40) wiggle(ctx, A.x + Math.cos(sa) * V * s, A.y + Math.sin(sa) * V * s, Math.cos(sa), Math.sin(sa), GC);
      if (s < aj) { wiggle(ctx, A.x + V * s, A.y, 1, 0, GC); continue; }
      const R = V * (s - aj);
      ring(i, TX, DX, DT, top, tr).forEach((q) => {
        if (R < q.end) { if (R >= 14) pip(ctx, J.x + q.ux * R, J.y + q.uy * R, 3.2, GC); return; }
        if (q.kind === 'tech') { stuck++; pip(ctx, J.x + q.ux * q.end, J.y + q.uy * q.end, 4, GC); }
      });
    }
    hits.push({ x: J.x + 40, y: J.y - 30, r: 24, name: 'x rays scattered from the jaw, spreading in every direction' });
    if (stuck) hits.push({ x: TX, y: FLOOR - 260, r: 30, name: stuck + ' scattered x rays reached the technician' });

    /* the distance from the jaw to the technician */
    const by = FLOOR + 30;
    line(ctx, J.x, by, TX, by, C('position'), 3);
    line(ctx, J.x, by - 10, J.x, by + 10, C('position'), 3); line(ctx, TX, by - 10, TX, by + 10, C('position'), 3);
    text(ctx, '$\\kd = ' + fmt(dist, 1) + '$ m', (J.x + TX) / 2, by + 30, C('position'), { size: 22, align: 'center', weight: 600, tex: true, bg: PAL.panel });
    lab.place({ l: (J.x + TX) / 2 - 70, r: (J.x + TX) / 2 + 70, t: by - 14, b: by + 46 });
    lab.flush();

    const ex = xl / XH, rel = tE.v / (dist * dist) * tr;
    ro.set('\\frac{\\kdose}{\\kdose_{1}} = \\frac{\\kt}{1\\;\\text{s}}\\left(\\frac{1\\;\\text{m}}{\\kd}\\right)^{2}\\left(\\frac{1}{2}\\right)^{\\kx/0.170\\;\\text{mm}} = (' + fmt(tE.v, 2) + ')\\left(\\frac{1}{' + fmt(dist, 1) + '}\\right)^{2}\\left(\\frac{1}{2}\\right)^{' + fmt(ex, 2) + '} = ' + sciTex(rel, 2));
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
