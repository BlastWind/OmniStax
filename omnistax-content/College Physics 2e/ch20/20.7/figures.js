/* Figures for section 20.7 Nerve Conduction–Electrocardiograms. Boots against the section's text article.
   The figures colour voltage, charge, electric-field, position, velocity, time, pressure and frequency. The
   axon of 20.24, the membrane of 20.25, the bare membrane and the myelinated axon of 20.27 + 20.28, and the
   heart and its three electrodes of 20.30 + 20.31 are referents; the ions are drawn from the element palette. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['20.7'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, cycle, register, begin, line, arrow, dot, text, topline, axes, curve, pinned, labeller, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

const TAU = 2 * Math.PI;
/* three significant figures, never in exponent form */
const sig3 = (x) => { const s = Math.abs(x).toPrecision(3); return (x < 0 ? '−' : '') + (s.includes('e') ? String(Math.round(Number(s))) : s); };

/* ---------- pieces the membrane figures share ---------- */
/* one ion at (x, y): a filled disc in the element palette with its own formula written on it,
   so that sodium and potassium, which share the alkali hue, are told apart by their names */
function ion(ctx, x, y, sym, r) {
  const rr = r || 17;
  dot(ctx, x, y, F.el(sym), true, rr);
  const name = sym === 'Cl' ? 'Cl−' : sym + '+';
  text(ctx, name, x, y, PAL.panel, { size: rr * 0.82, weight: 700, align: 'center' });
}
/* a person seen from the front, filled, standing on (x, y) with the frame 150 units tall at s = 1:
   head, neck, a torso that narrows to the waist, arms hanging a little out from the sides, and two
   legs; drawn here because the library's silhouette is a side view and electrodes go on a chest */
function frontBody(ctx, x, y, s, color) {
  const P = (dx, dy) => [x + dx * s, y + dy * s];
  ctx.save(); ctx.fillStyle = color; ctx.strokeStyle = color; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  ctx.beginPath(); ctx.arc(...P(0, -136), 13 * s, 0, TAU); ctx.fill();
  ctx.fillRect(x - 4 * s, y - 124 * s, 8 * s, 8 * s);
  ctx.beginPath(); ctx.moveTo(...P(-24, -116)); ctx.lineTo(...P(24, -116)); ctx.lineTo(...P(20, -66)); ctx.lineTo(...P(-20, -66)); ctx.closePath(); ctx.fill();
  ctx.lineWidth = 9 * s;
  ctx.beginPath(); ctx.moveTo(...P(-24, -112)); ctx.lineTo(...P(-34, -84)); ctx.lineTo(...P(-40, -56)); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(...P(24, -112)); ctx.lineTo(...P(34, -84)); ctx.lineTo(...P(40, -56)); ctx.stroke();
  ctx.lineWidth = 12 * s;
  ctx.beginPath(); ctx.moveTo(...P(-10, -66)); ctx.lineTo(...P(-12, -34)); ctx.lineTo(...P(-13, -6)); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(...P(10, -66)); ctx.lineTo(...P(12, -34)); ctx.lineTo(...P(13, -6)); ctx.stroke();
  ctx.restore();
}
/* a row of charge signs lying on one face of a membrane, n of them across the span, fading in with p */
function chargeLayer(ctx, x1, x2, y, n, p, positive) {
  ctx.save(); ctx.globalAlpha = Math.max(0.15, Math.min(1, p));
  for (let i = 0; i < n; i++) {
    const x = x1 + ((x2 - x1) * (i + 0.5)) / n;
    text(ctx, positive ? '+' : '−', x, y, C('charge'), { size: 26, weight: 700, align: 'center' });
  }
  ctx.restore();
}

/* =====================================================================
   FIGURE 20.24: the neuron. A still drawing of the whole cell, because
   an anatomy has no clock in it; what varies is the axon, which the book
   calls many centimetres long, so the reader sets its length and reads
   the time a signal takes to cross it at about 1 m/s.
===================================================================== */
(function () {
  const d = sim('sim-neuron', 700);
  const SPEED = 1.0;                               /* the section's figure for a nerve impulse, in m/s */
  const len = ctl(d.controls, { label: '\\kd', cls: 'position', min: 2, max: 100, step: 1, value: 30, unit: 'cm', dec: 0, aria: 'length of the axon' });
  /* the parts too small or too many to label carry hover names, placed by the last draw */
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    const lab = labeller(ctx, 700, { headline: 2 });
    const on = (part) => (part === 'axon' ? F.ref('axon') : PAL.ink);
    /* the cell is laid out in a frame of its own and drawn at k times that size, so that it
       fills the canvas; M maps a point of the frame to the canvas for the labels and the bracket */
    const k = 1.25, ox = -110, oy = 390 - 330 * k;
    const M = (x, y) => [ox + k * x, oy + k * y];
    const soma = { x: 330, y: 330, r: 60 };
    /* the axon grows with the slider: 2 cm sits at 260 units of the frame and 100 cm at 660 */
    const AL = 260 + ((len.v - 2) / 98) * 400, ax0 = soma.x + soma.r - 4, ax1 = ax0 + AL;
    ctx.save(); ctx.translate(ox, oy); ctx.scale(k, k);
    /* the dendrites, and the terminal of another neuron making a synapse on one of them */
    ctx.save(); ctx.strokeStyle = on('dend'); ctx.lineWidth = 6; ctx.lineCap = 'round';
    const dends = [[-150, -120], [-175, -30], [-150, 90], [-90, -165], [-95, 150]];
    dends.forEach(([dx, dy]) => {
      ctx.beginPath(); ctx.moveTo(soma.x - soma.r * 0.6, soma.y); ctx.lineTo(soma.x + dx * 0.55, soma.y + dy * 0.55); ctx.lineTo(soma.x + dx, soma.y + dy); ctx.stroke();
      ctx.lineWidth = 4;
      ctx.beginPath(); ctx.moveTo(soma.x + dx, soma.y + dy); ctx.lineTo(soma.x + dx - 34, soma.y + dy - 26); ctx.moveTo(soma.x + dx, soma.y + dy); ctx.lineTo(soma.x + dx - 30, soma.y + dy + 30); ctx.stroke();
      ctx.lineWidth = 6;
    });
    ctx.restore();
    /* the other cell's ending, meeting the topmost dendrite across a synapse */
    const syn = { x: soma.x + dends[3][0] - 34, y: soma.y + dends[3][1] - 26 };
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 5; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(syn.x - 18, syn.y - 14); ctx.lineTo(syn.x - 80, syn.y - 56); ctx.stroke(); ctx.restore();
    dot(ctx, syn.x - 14, syn.y - 12, alpha(PAL.ink, 0.35), true, 12);
    /* the cell body and its nucleus */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = on('soma'); ctx.lineWidth = 6;
    ctx.beginPath(); ctx.arc(soma.x, soma.y, soma.r, 0, TAU); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(soma.x + 6, soma.y - 4, 23, 0, TAU); ctx.stroke(); ctx.restore();
    /* the axon, its myelin sheaths and the nodes of Ranvier between them */
    const cAx = on('axon');
    line(ctx, ax0, soma.y, ax1, soma.y, cAx, 9);
    const nSh = Math.max(3, Math.round(AL / 86)), shW = (AL / nSh) * 0.82;
    for (let i = 0; i < nSh; i++) {
      const cx = ax0 + (AL * (i + 0.5)) / nSh;
      ctx.save(); ctx.fillStyle = alpha(cAx, 0.18); ctx.strokeStyle = cAx; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.ellipse(cx, soma.y, shW / 2, 21, 0, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
    }
    /* the nerve endings on a muscle fibre */
    ctx.save(); ctx.strokeStyle = cAx; ctx.lineWidth = 5; ctx.lineCap = 'round';
    [-52, -18, 18, 52].forEach((dy) => { ctx.beginPath(); ctx.moveTo(ax1, soma.y); ctx.lineTo(ax1 + 46, soma.y + dy); ctx.lineTo(ax1 + 78, soma.y + dy * 1.25); ctx.stroke(); });
    ctx.restore();
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.12); ctx.strokeStyle = alpha(PAL.ink, 0.45); ctx.lineWidth = 4;
    ctx.beginPath(); ctx.roundRect(ax1 + 72, soma.y - 105, 56, 210, 26); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = alpha(PAL.ink, 0.2); ctx.lineWidth = 2;
    for (let q = -80; q <= 80; q += 20) { ctx.beginPath(); ctx.moveTo(ax1 + 82, soma.y + q); ctx.lineTo(ax1 + 118, soma.y + q); ctx.stroke(); }
    ctx.restore();
    ctx.restore();
    /* the axon's length, bracketed under it, which is what the slider sets */
    F.hbracket(ctx, M(ax0, 0)[0], M(ax1, 0)[0], M(0, soma.y + 130)[1], C('position'), fmt(len.v, 0) + ' cm of axon');
    /* six labels (rule 26.7); the synapse, the nucleus and the nodes are named on hover */
    const add = (s, x, y, ux, uy, sz, start, c) => { const q = M(x, y); lab.add(s, q[0], q[1], ux, uy, c || PAL.ink, sz, start); };
    add('dendrites', soma.x - 170, soma.y + 50, -0.5, 1, 21, 34);
    add('cell body', soma.x, soma.y - soma.r, 0, -1, 21, 34);
    add('axon', (ax0 + ax1) / 2, soma.y - 24, 0, -1, 21, 40, cAx);
    add('myelin sheath', ax0 + AL * 0.22, soma.y + 22, -0.2, 1, 20, 36);
    add('nerve endings', ax1 + 60, soma.y + 80, 0.2, 1, 20, 30);
    add('a muscle fiber', ax1 + 100, soma.y - 105, 0.3, -1, 20, 26);
    lab.flush();
    const hit = (x, y, r, name) => { const q = M(x, y); return { x: q[0], y: q[1], r: r * k, name }; };
    hits = [hit(syn.x - 14, syn.y - 12, 22, 'a synapse, where another neuron’s ending meets a dendrite'), hit(soma.x + 6, soma.y - 4, 23, 'the nucleus')]
      .concat(Array.from({ length: nSh - 1 }, (_, i) => hit(ax0 + (AL * (i + 1)) / nSh, soma.y, 16, 'a node of Ranvier')));
    const tt = len.v / 100 / SPEED;
    topline(ctx, 'A signal crossing a ' + fmt(len.v, 0) + '-cm axon at about 1 m/s takes ' + sig3(tt) + ' s, which is why a reflex is quick but not instant.');
    readout(d.readout, `\\kt = \\frac{\\kd}{\\kv} = \\frac{${fmt(len.v, 0)}\\ \\text{cm}}{1.0\\ \\text{m/s}} = ${sig3(tt * 1000)}\\ \\text{ms}`,
      'Each sheath along this axon is about a millimeter long and the node between two of them about a thousandth of that, so a real axon carries far more of them than one drawing can show.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 20.25: the resting membrane. It moves because the balance the
   section describes is reached over time: potassium and chlorine cross
   until the layers of charge they leave behind hold the rest back, and
   the reader would otherwise have to imagine both the crossing and the
   halt. One crossing is one cycle, so it takes the app's transport.
===================================================================== */
(function () {
  const d = sim('sim-membrane', 760);
  const dV = ctl(d.controls, { label: '\\kdV', cls: 'voltage', min: 70, max: 90, step: 1, value: 90, unit: 'mV', dec: 0, aria: 'potential difference across the membrane' });
  const th = ctl(d.controls, { label: '\\kd', cls: 'position', min: 4, max: 12, step: 0.5, value: 8, unit: 'nm', dec: 1, aria: 'thickness of the membrane' });
  const st = F.select(d.controls, {
    label: '\\text{Membrane passes}', value: 'rest', aria: 'which ions the membrane passes',
    options: [{ value: 'rest', label: 'K+ and Cl− (resting)' }, { value: 'k', label: 'K+ only' }, { value: 'cl', label: 'Cl− only' }, { value: 'na', label: 'Na+ (stimulated)' }],
  });
  const cy = cycle(() => 1, 1.6);
  const TOP = 300, BOT = 356;                       /* the two faces of the membrane */
  const XL = 200, XR = 1150;
  /* a deterministic scatter, so the ions sit still between frames */
  const rnd = (i, k) => { const s = Math.sin(i * 12.9898 + k * 78.233) * 43758.5453; return s - Math.floor(s); };
  const fixedOut = [], fixedIn = [];
  for (let i = 0; i < 14; i++) fixedOut.push({ x: XL + 40 + rnd(i, 1) * (XR - XL - 80), y: 120 + rnd(i, 2) * 150, s: i % 4 === 3 ? 'Cl' : 'Na' });
  for (let i = 0; i < 14; i++) fixedIn.push({ x: XL + 40 + rnd(i, 3) * (XR - XL - 80), y: 430 + rnd(i, 4) * 150, s: i % 4 === 3 ? 'Na' : 'K' });
  /* the ions that cross, each with where it starts and where it ends up */
  const movers = () => {
    const s = st.value, out = [], IN = [];
    const mk = (n, sym, dir, seed) => { const a = []; for (let i = 0; i < n; i++) a.push({ sym, dir, x: XL + 140 + ((XR - XL - 280) * (i + 0.5)) / n + rnd(i, seed) * 40 - 20, y0: dir > 0 ? 250 - rnd(i, seed + 1) * 90 : 470 + rnd(i, seed + 1) * 90 }); return a; };
    if (s === 'rest' || s === 'k') IN.push(...mk(4, 'K', -1, 5));
    if (s === 'rest' || s === 'cl') out.push(...mk(3, 'Cl', 1, 7));
    if (s === 'na') out.push(...mk(4, 'Na', 1, 9));
    return out.concat(IN);
  };
  function draw() {
    const { ctx } = begin(d.c);
    const raw = cy.now(), p = 1 - Math.pow(1 - raw, 2);    /* the transfer slows as the charge layers build */
    const stim = st.value === 'na', lab = labeller(ctx, 760, { headline: 2 });
    /* the fluids and the membrane between them */
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.04); ctx.fillRect(XL, 90, XR - XL, TOP - 90); ctx.fillRect(XL, BOT, XR - XL, 640 - BOT); ctx.restore();
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = F.ref('membrane'); ctx.lineWidth = 4;
    ctx.fillRect(XL, TOP, XR - XL, BOT - TOP); ctx.strokeRect(XL, TOP, XR - XL, BOT - TOP); ctx.restore();
    for (let x = XL + 14; x < XR; x += 28) { dot(ctx, x, TOP + 9, alpha(PAL.ink, 0.35), true, 6); dot(ctx, x, BOT - 9, alpha(PAL.ink, 0.35), true, 6); }
    /* the ions that stay where they are */
    fixedOut.concat(fixedIn).forEach((q) => ion(ctx, q.x, q.y, q.s));
    /* the ions that cross, and the arrows that say which way diffusion carries them */
    const mv = movers();
    mv.forEach((m) => {
      const y1 = m.dir > 0 ? 470 + ((m.x * 7) % 60) : 250 - ((m.x * 7) % 60);
      const y = m.y0 + (y1 - m.y0) * p;
      if (p < 0.97) arrow(ctx, m.x, y + m.dir * 20, m.x, y + m.dir * 54, alpha(PAL.ink, 0.5), 3);
      ion(ctx, m.x, y, m.sym);
    });
    /* the two layers of charge the crossings leave on the faces of the membrane */
    const n = 12;
    chargeLayer(ctx, XL, XR, TOP - 18, n, p, !stim);
    chargeLayer(ctx, XL, XR, BOT + 18, n, p, stim);
    /* the field the two layers make, pointing from the positive face to the negative one */
    const xa = XR + 50;
    arrow(ctx, xa, stim ? BOT + 60 : TOP - 60, xa, stim ? TOP - 60 : BOT + 60, C('electric-field'), 6);
    const E = (dV.v / 1000) / (th.v * 1e-9) / 1e6;
    lab.add('E = ' + sig3(E) + ' MV/m', xa, (TOP + BOT) / 2, 1, 0, C('electric-field'), 22, 22);
    lab.add(fmt(dV.v, 0) + ' mV across the membrane', XL + 30, (TOP + BOT) / 2, 0.1, -1, C('voltage'), 22, 74);
    lab.add(fmt(th.v, 1) + ' nm thick', XL + 30, BOT + 6, -0.1, 1, C('position'), 21, 44);
    lab.add('outside the cell', XL + 6, 110, 1, 0, PAL.ink, 22, 10);
    lab.add('inside the cell', XL + 6, 622, 1, 0, PAL.ink, 22, 10);
    lab.flush();
    /* the legend: each kind named once, the individuals left to their hover names (rule 26.6) */
    const ly = 690;
    ['Na', 'K', 'Cl'].forEach((s, i) => { const x = 460 + i * 190; ion(ctx, x, ly, s, 15); text(ctx, s === 'Na' ? 'sodium' : s === 'K' ? 'potassium' : 'chlorine', x + 26, ly, PAL.ink, { size: 20, align: 'left' }); });
    const halted = p > 0.97;
    topline(ctx, stim
      ? 'The membrane has been opened to sodium, which crosses inward under both diffusion and the Coulomb force, and the two layers of charge change places.'
      : halted
        ? 'The layers of charge are now strong enough that the Coulomb force balances diffusion, and no more ions cross.'
        : 'Potassium diffuses out and chlorine diffuses in, and every ion that crosses adds to the charge that holds the next one back.');
    readout(d.readout, `\\kEf = \\frac{\\kdV}{\\kd} = \\frac{${fmt(dV.v, 0)}\\ \\text{mV}}{${fmt(th.v, 1)}\\ \\text{nm}} = ${sig3(E)}\\ \\text{MV/m}`,
      'A tiny fraction of the ions cross, so both fluids stay electrically neutral; what the membrane holds is two thin layers of charge lying right against its faces.');
  }
  hover(d.stage, () => fixedOut.map((q) => ({ x: q.x, y: q.y, r: 20, name: q.s === 'Cl' ? 'chlorine ion, outside the cell' : 'sodium ion, outside the cell' }))
    .concat(fixedIn.map((q) => ({ x: q.x, y: q.y, r: 20, name: q.s === 'Na' ? 'sodium ion, inside the cell' : 'potassium ion, inside the cell' }))));
  register(d.fig, { update: (dt) => cy.step(dt, () => 0.34), draw });
})();

/* =====================================================================
   FIGURE 20.26: the action potential. A pulse in time is the whole of
   the idea, so the figure moves: the trace is drawn as the clock runs
   and the membrane above it shows which ions are crossing at that
   moment. One pulse is one cycle and it takes the app's transport.
===================================================================== */
(function () {
  const d = sim('sim-action-potential', 820);
  const WIN = 8;                                   /* the window the graph shows, 8 ms, fixed */
  const pk = ctl(d.controls, { label: '\\kVo', cls: 'voltage', min: 0, max: 60, step: 5, value: 50, unit: 'mV', dec: 0, onInput: () => cy.reset(), aria: 'peak of the action potential' });
  const rest = ctl(d.controls, { label: '\\kdV', cls: 'voltage', min: -110, max: -70, step: 5, value: -90, unit: 'mV', dec: 0, onInput: () => cy.reset(), aria: 'resting potential' });
  const cy = cycle(() => WIN, 1.0);
  /* the pulse: rest, then the inrush of sodium, then the return of potassium, then the recovery */
  const V = (t) => {
    const R = rest.v, P = pk.v, U = R - 20;
    if (t < 2.8) return R;
    if (t < 4.2) return R + (P - R) * (0.5 - 0.5 * Math.cos((Math.PI * (t - 2.8)) / 1.4));
    if (t < 5.5) return P + (U - P) * (0.5 - 0.5 * Math.cos((Math.PI * (t - 4.2)) / 1.3));
    if (t < 7.0) return U + (R - U) * (0.5 - 0.5 * Math.cos((Math.PI * (t - 5.5)) / 1.5));
    return R;
  };
  const phase = (t) => (t < 2.8 ? 'resting' : t < 4.2 ? 'depolarizing' : t < 5.5 ? 'repolarizing' : t < 7.0 ? 'returning to rest' : 'resting');
  function draw() {
    const { ctx } = begin(d.c);
    const t = cy.now(), v = V(t), ph = phase(t), lab = labeller(ctx, 820, { headline: 2 });
    /* the membrane above the graph, in the state the trace has reached */
    {
      const XL = 440, XR = 960, TOP = 120, BOT = 168;
      ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
      ctx.fillRect(XL, TOP, XR - XL, BOT - TOP); ctx.strokeRect(XL, TOP, XR - XL, BOT - TOP); ctx.restore();
      const inPos = ph === 'depolarizing' || (ph === 'repolarizing' && v > 0);
      chargeLayer(ctx, XL, XR, TOP - 16, 10, 1, !inPos);
      chargeLayer(ctx, XL, XR, BOT + 16, 10, 1, inPos);
      if (ph === 'depolarizing') { for (let i = 0; i < 3; i++) { const x = XL + 120 + i * 140; arrow(ctx, x, TOP - 54, x, BOT + 54, alpha(PAL.ink, 0.45), 4); ion(ctx, x, TOP + (BOT - TOP) / 2, 'Na', 15); } lab.add('sodium rushing in', XR, (TOP + BOT) / 2, 1, 0, PAL.ink, 21, 40); }
      else if (ph === 'repolarizing') { for (let i = 0; i < 3; i++) { const x = XL + 120 + i * 140; arrow(ctx, x, BOT + 54, x, TOP - 54, alpha(PAL.ink, 0.45), 4); ion(ctx, x, TOP + (BOT - TOP) / 2, 'K', 15); } lab.add('potassium leaving', XR, (TOP + BOT) / 2, 1, 0, PAL.ink, 21, 40); }
      else lab.add(ph === 'resting' ? 'no ions crossing' : 'the pump restoring the ions', XR, (TOP + BOT) / 2, 1, 0, PAL.ink, 21, 40);
      lab.add('outside', XL, TOP - 16, -1, 0, PAL.ink, 19, 26);
      lab.add('inside', XL, BOT + 16, -1, 0, PAL.ink, 19, 26);
    }
    /* the graph: 8 ms across and −120 to 60 mV up, both fixed from the slider extremes */
    const box = { l: 200, r: 1250, t: 300, b: 700 };
    const { X, Y } = axes(ctx, box, [0, WIN], [-120, 60], { nx: 4, ny: 6, xl: 'time (ms)', xc: C('time'), yl: 'membrane voltage (mV)', yc: C('voltage'), fx: (q) => fmt(q, 0), fy: (q) => fmt(q, 0) });
    line(ctx, box.l, Y(0), box.r, Y(0), alpha(PAL.ink, 0.3), 2, [6, 8]);
    line(ctx, box.l, Y(rest.v), box.r, Y(rest.v), alpha(C('voltage'), 0.4), 2, [10, 10]);
    curve(ctx, V, 0, WIN, X, Y, C('voltage'), 5, 240);
    line(ctx, X(t), box.t, X(t), box.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    pinned(ctx, box, X, Y, t, v, C('voltage'), sig3(v) + ' mV');
    lab.add('resting potential ' + fmt(rest.v, 0) + ' mV', box.l + 150, Y(rest.v), 0, rest.v < -100 ? -1 : 1, C('voltage'), 20, 28);
    lab.add('peak ' + fmt(pk.v, 0) + ' mV', X(3.5), Y(pk.v), 0.4, -1, C('voltage'), 20, 30);
    lab.flush();
    topline(ctx, 'At ' + fmt(t, 1) + ' ms the membrane is ' + ph + ' and the inside of the cell stands at ' + sig3(v) + ' mV.');
    readout(d.readout, `\\kdV = ${sig3(v)}\\ \\text{mV}\\quad\\text{at}\\quad \\kt = ${fmt(t, 1)}\\ \\text{ms}`,
      'Only small fractions of the ions move in one pulse, so the cell can fire many hundreds of times before the sodium-potassium pump has to restore the concentration differences.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 2.6), draw });
})();

/* =====================================================================
   FIGURE 20.27 + 20.28: the nerve impulse, on a bare membrane and on a
   myelinated axon. The book draws five frozen stages of a thing whose
   subject is propagation, so the figure moves: one crossing of the
   strip is one cycle and it takes the app's transport. The sheaths are
   a state, not a slider, and their length is the slider (rule 26.1).
===================================================================== */
(function () {
  const d = sim('sim-impulse', 600);
  const STRIP_MM = 20;                             /* the length of axon the strip stands for */
  const kind = choice(d.controls, { label: '\\text{Axon}', value: 'myelin', aria: 'kind of axon', options: [{ value: 'bare', label: 'Bare membrane' }, { value: 'myelin', label: 'Myelinated' }], onInput: () => sync() });
  const sh = ctl(d.controls, { label: '\\kd', cls: 'position', min: 0.2, max: 2, step: 0.1, value: 1, unit: 'mm', dec: 1, onInput: () => cy.reset(), aria: 'length of one myelin sheath' });
  const speed = () => (kind.value === 'bare' ? 1.0 : 20 * sh.v);          /* m/s */
  const T = () => STRIP_MM / 1000 / speed();                              /* the true time of one crossing, in seconds */
  const wall = () => 4.0 / Math.pow(speed(), 0.35);                       /* the time the drawing takes over it */
  const cy = cycle(T, 0.6);
  function sync() { sh.disable(kind.value === 'bare'); cy.reset(); }
  sync();
  const XL = 150, XR = 1270, TOP = 330, BOT = 390;
  function draw() {
    const { ctx } = begin(d.c);
    const my = kind.value === 'myelin', u = cy.now() / Math.max(1e-9, T());
    const lab = labeller(ctx, 600, { headline: 2 });
    const nSh = Math.max(2, Math.round(STRIP_MM / sh.v)), frac = 1 / nSh;
    /* the membrane strip, its outside above and its inside below, in the colour of the axon chosen */
    const mc = F.ref('myelinated-axon');
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = kind.mixColor((v) => F.ref(v === 'bare' ? 'bare-membrane' : 'myelinated-axon')); ctx.lineWidth = 4;
    ctx.fillRect(XL, TOP, XR - XL, BOT - TOP); ctx.strokeRect(XL, TOP, XR - XL, BOT - TOP); ctx.restore();
    /* the myelin sheaths, with an unmyelinated node between each pair */
    if (my) for (let i = 0; i < nSh; i++) {
      const a = XL + (XR - XL) * (i * frac) + 6, b = XL + (XR - XL) * ((i + 1) * frac) - 6;
      ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.16); ctx.strokeStyle = mc; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.roundRect(a, TOP - 16, Math.max(6, b - a), BOT - TOP + 32, 12); ctx.fill(); ctx.stroke(); ctx.restore();
    }
    /* the charge layers, reversed inside the depolarized patch that travels with the pulse */
    const W = 0.075, n = 44;
    const dep = (q) => q > u - W && q < u;
    for (let i = 0; i < n; i++) {
      const q = (i + 0.5) / n, x = XL + (XR - XL) * q, flip = dep(q);
      text(ctx, flip ? '−' : '+', x, TOP - 24, C('charge'), { size: 24, weight: 700, align: 'center' });
      text(ctx, flip ? '+' : '−', x, BOT + 24, C('charge'), { size: 24, weight: 700, align: 'center' });
    }
    /* the height the pulse still carries: it falls across a sheath and is restored at each node */
    const amp = (q) => (my ? 1 - 0.45 * ((q / frac) % 1) : 1);
    const px = XL + (XR - XL) * Math.min(1, u);
    if (u <= 1) {
      const a = amp(Math.min(1, u));
      ion(ctx, px - 14, TOP - 70, 'Na', 15);
      arrow(ctx, px - 14, TOP - 52, px - 14, BOT - 8, alpha(PAL.ink, 0.5), 4);
      if (u > W) { ion(ctx, px - (XR - XL) * W - 14, BOT + 76, 'K', 15); arrow(ctx, px - (XR - XL) * W - 14, BOT + 60, px - (XR - XL) * W - 14, TOP + 8, alpha(PAL.ink, 0.5), 4); }
    }
    /* the pulse itself, a bump of voltage riding over the depolarized patch, and behind it the faint
       envelope of the height it has when it reaches each point: full on the bare membrane, sagging
       across every sheath and restored at every node on the myelinated axon */
    const vy = (a) => 292 - a * 78;
    line(ctx, XL, vy(0), XR, vy(0), alpha(PAL.ink, 0.25), 1.5);
    if (my) {
      ctx.save(); ctx.strokeStyle = alpha(C('voltage'), 0.45); ctx.lineWidth = 2.5; ctx.setLineDash([6, 8]); ctx.beginPath();
      for (let i = 0; i <= 300; i++) { const q = i / 300, y = vy(amp(q)); if (i) ctx.lineTo(XL + (XR - XL) * q, y); else ctx.moveTo(XL + (XR - XL) * q, y); }
      ctx.stroke(); ctx.restore();
      lab.add('the height the pulse has when it reaches each point', XL + (XR - XL) * 0.5, vy(1), 0, -1, C('voltage'), 19, 30);
    }
    if (u <= 1) {
      const a = amp(Math.min(1, u)), c = Math.min(1, u) - W / 2, w = W / 2.4;
      ctx.save(); ctx.strokeStyle = C('voltage'); ctx.lineWidth = 4; ctx.fillStyle = alpha(C('voltage'), 0.18); ctx.beginPath();
      for (let i = 0; i <= 200; i++) { const q = i / 200, h = a * Math.exp(-Math.pow((q - c) / w, 2)), x = XL + (XR - XL) * q; if (i) ctx.lineTo(x, vy(h)); else ctx.moveTo(x, vy(h)); }
      ctx.lineTo(XR, vy(0)); ctx.lineTo(XL, vy(0)); ctx.closePath(); ctx.fill();
      ctx.beginPath();
      for (let i = 0; i <= 200; i++) { const q = i / 200, h = a * Math.exp(-Math.pow((q - c) / w, 2)), x = XL + (XR - XL) * q; if (i) ctx.lineTo(x, vy(h)); else ctx.moveTo(x, vy(h)); }
      ctx.stroke(); ctx.restore();
      const pkx = XL + (XR - XL) * Math.max(0, c);
      dot(ctx, pkx, vy(a), C('voltage'), true, 10);
      lab.add('the pulse, at ' + sig3(a * 100) + ' % of full height', pkx, vy(a), c < 0.5 ? 0.5 : -0.5, -1, C('voltage'), 21, 26);
    }
    lab.add(my ? 'myelin sheath, ' + fmt(sh.v, 1) + ' mm' : 'bare membrane', XL + (XR - XL) * 0.5, BOT + 58, 0, 1, my ? C('position') : F.ref('bare-membrane'), 21, 36);
    if (my) lab.add('node of Ranvier', XL + (XR - XL) * frac, BOT + 26, 0.2, 1, PAL.ink, 20, 60);
    lab.add('outside', XL, TOP - 24, -1, 0, PAL.ink, 20, 26);
    lab.add('inside', XL, BOT + 24, -1, 0, PAL.ink, 20, 26);
    lab.flush();
    const v = speed();
    topline(ctx, my
      ? 'On the myelinated axon the pulse runs through each ' + fmt(sh.v, 1) + '-mm sheath losing voltage and is regenerated at full height in the node, so it crosses at about ' + sig3(v) + ' m/s.'
      : 'On the bare membrane every patch has to depolarize in its turn, so the impulse crawls along at about 1 m/s.');
    readout(d.readout, `\\kv = \\frac{\\kd}{\\kt} = \\frac{${fmt(STRIP_MM, 0)}\\ \\text{mm}}{${sig3(T() * 1000)}\\ \\text{ms}} = ${sig3(v)}\\ \\text{m/s}`,
      'The drawing takes ' + sig3(wall()) + ' s over a crossing that really takes ' + sig3(T() * 1000) + ' ms, and it slows the fast axon more than the slow one so that both can be watched; the speeds in the readout are the true ones.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T() / wall()), draw });
})();

/* =====================================================================
   FIGURE 20.30 + 20.31: the depolarization wave crossing the heart, and
   the lead potential it writes. It moves because a heartbeat is a
   period: the wave leaves the SA node across the atria, waits at the AV
   node, runs down the septum and out through the ventricles, and the
   trace is written beside the heart as it goes. One 1.5-s window is one
   cycle of the app's transport, drawn at a quarter of the true speed.
===================================================================== */
(function () {
  const d = sim('sim-ecg', 800);
  const WIN = 1.5;                                  /* the window both graphs show, 1.5 s, fixed */
  const SLOW = 4;                                   /* the drawing runs this many times slower than the heart (rule 28.4) */
  const bpm = ctl(d.controls, { label: '\\text{heart rate}', cls: 'frequency', min: 40, max: 160, step: 5, value: 80, unit: 'beats/min', dec: 0, onInput: () => cy.reset(), aria: 'heart rate' });
  const lead = choice(d.controls, { label: '\\text{Lead}', value: 'II', aria: 'which lead is read', options: [{ value: 'I', label: 'I' }, { value: 'II', label: 'II' }, { value: 'III', label: 'III' }], onInput: () => cy.reset() });
  const cy = cycle(() => WIN, 0.8);
  const period = () => 60 / bpm.v;
  /* the beat's timings stretch with the square root of the period, as the QT interval does; 1 at 80 beats/min */
  const kq = () => Math.sqrt(period() / 0.75);
  const bump = (x, c, w) => Math.exp(-Math.pow((x - c) / w, 2));
  const deg = Math.PI / 180;
  /* the depolarization vector, in millivolts, as the sum of the five features of the beat: each with its
     direction on the page (0° toward LA, 90° straight down) and the size that gives the book's lead II
     trace, P 0.25, Q −0.09, R 1.0, S −0.30 and T 0.30 mV; a lead reads the component along its own side */
  const FEAT = [['P', 0.25, 50, 0.105, 0.026], ['Q', -0.09, 200, 0.191, 0.009], ['R', 1.0, 60, 0.214, 0.0098], ['S', -0.30, -100, 0.236, 0.0105], ['T', 0.30, 45, 0.375, 0.041]]
    .map(([nm, a2, th, c, w]) => ({ nm, a: a2 / Math.cos((th - 60) * deg), th: th * deg, c, w }));
  const LEADS = { I: ['RA', 'LA'], II: ['RA', 'LL'], III: ['LA', 'LL'] };
  const UNIT = { I: [1, 0], II: [Math.cos(60 * deg), Math.sin(60 * deg)], III: [Math.cos(120 * deg), Math.sin(120 * deg)] };
  const inBeat = (t) => ((t % period()) + period()) % period();
  function vec(tb) {
    const k = kq(); let x = 0, y = 0;
    FEAT.forEach((f) => { const m = f.a * bump(tb, f.c * k, f.w * k); x += m * Math.cos(f.th); y += m * Math.sin(f.th); });
    return [x, y];
  }
  const reading = (t, L) => { const v = vec(inBeat(t)), u = UNIT[L || lead.value]; return v[0] * u[0] + v[1] * u[1]; };
  /* arterial pressure, 80 mm Hg diastolic to 122 systolic: a rise just after the QRS complex, a dicrotic
     notch, and a fall that reaches the diastolic value as the next rise begins */
  function press(t) {
    const k = kq(), RR = period(), up = 0.23 * k, rise = 0.09 * k;
    let s = inBeat(t) - up; if (s < 0) s += RR;
    if (s < rise) return 80 + 42 * Math.pow(Math.sin((Math.PI / 2) * (s / rise)), 2);
    const u = (s - rise) / (RR - rise), ue = (x) => (x * x) / (x + 0.06);   /* rounds the systolic peak */
    const fall = (Math.exp(-2.4 * ue(u)) - Math.exp(-2.4 * ue(1))) / (1 - Math.exp(-2.4 * ue(1)));
    return 80 + 42 * fall + 6 * bump(s, 0.23 * k, 0.035 * k) * (1 - u);
  }
  const mv = (x) => (Math.abs(x) < 0.005 ? 0 : x).toFixed(2).replace('-', '−');   /* a lead potential to the hundredth of a millivolt */
  const ramp = (tb, a, b) => { const k = kq(); return Math.min(1, Math.max(0, (tb - a * k) / ((b - a) * k))); };

  /* the four-chamber heart in front view, the patient's right on the reader's left, in a local frame about
     260 by 300 units centred on the origin, y down: the atria above the atrioventricular plane at y = −38,
     the ventricles below it, the two septa, the SA node high in the right atrium and the AV node at the
     foot of the interatrial septum, the bundle of His and its two branches down the septum to the apex.
     Drawn here because figlib has no heart; a candidate for figlib as F.heart. */
  const AVY = -38, SA = [-92, -108], AV = [-6, -46], VC = [15, 55], VS = 1.6;   /* VC, VS: where the ventricles' wave starts and its stretch along the septum */
  const outline = new Path2D();
  outline.moveTo(0, -122);
  outline.bezierCurveTo(40, -140, 100, -138, 118, -108);
  outline.bezierCurveTo(132, -90, 128, -60, 122, -40);
  outline.bezierCurveTo(140, 40, 90, 140, 28, 165);
  outline.bezierCurveTo(-40, 180, -130, 60, -125, -30);
  outline.bezierCurveTo(-138, -55, -136, -90, -118, -105);
  outline.bezierCurveTo(-95, -135, -35, -140, 0, -122);
  outline.closePath();
  const septa = new Path2D();
  septa.moveTo(0, -122); septa.bezierCurveTo(-6, -90, -4, -60, 2, AVY);
  septa.moveTo(-127, AVY); septa.bezierCurveTo(-60, AVY - 6, 60, AVY - 6, 126, AVY);
  septa.moveTo(2, AVY); septa.bezierCurveTo(10, 40, 30, 110, 34, 150);
  const bundle = new Path2D();
  bundle.moveTo(AV[0], AV[1]); bundle.lineTo(6, -20);
  bundle.moveTo(6, -20); bundle.bezierCurveTo(24, 40, 42, 110, 44, 140); bundle.bezierCurveTo(70, 140, 108, 90, 112, 20);
  bundle.moveTo(6, -20); bundle.bezierCurveTo(-6, 40, 12, 110, 22, 144); bundle.bezierCurveTo(-30, 150, -100, 90, -108, 10);
  /* the sign of the outer surface at a grid of points inside the outline, as the book marks it */
  const signs = (() => {
    const g = document.createElement('canvas').getContext('2d'), out = [];
    g.lineWidth = 40;
    for (let y = -100; y <= 150; y += 46) for (let x = -110; x <= 120; x += 46) {
      const p = [x + (((y + 100) / 46) % 2) * 23, y];
      if (!g.isPointInPath(outline, p[0], p[1]) || g.isPointInStroke(outline, p[0], p[1]) || Math.abs(p[1] - AVY) < 16) continue;
      if (p[1] < AVY && Math.abs(p[0]) < 16) continue;
      out.push(p);
    }
    return out;
  })();
  /* the wave's reach at time tb into the beat: rA the atria's depolarized radius about the SA node and rAr
     the radius they have repolarized within, rV the ventricles' depolarized radius about VC */
  const reach = (tb) => ({ rA: 230 * ramp(tb, 0.06, 0.15), rAr: 230 * ramp(tb, 0.18, 0.25), rV: 165 * ramp(tb, 0.18, 0.25) * (1 - ramp(tb, 0.33, 0.43)) });
  const depolarized = (p, r) => {
    if (p[1] < AVY) { const q = Math.hypot(p[0] - SA[0], p[1] - SA[1]); return q < r.rA && q >= r.rAr; }
    return Math.hypot(p[0] - VC[0], (p[1] - VC[1]) / VS) < r.rV;
  };
  const ROT = -22 * deg, SC = 1.15, G = { x: 380, y: 352 };
  const toPage = (p) => ({ x: G.x + SC * (p[0] * Math.cos(ROT) - p[1] * Math.sin(ROT)), y: G.y + SC * (p[0] * Math.sin(ROT) + p[1] * Math.cos(ROT)) });
  /* Einthoven's triangle, equilateral so that its sides run at 0°, 60° and 120°, centred on the heart */
  const elec = { RA: { x: 30, y: 150 }, LA: { x: 730, y: 150 }, LL: { x: 380, y: 150 + 700 * Math.sqrt(3) / 2 } };
  const VSCALE = 170;                               /* page units per millivolt of the depolarization vector */
  let hits = [];
  hover(d.stage, () => hits);

  function draw() {
    const { ctx } = begin(d.c);
    const t = cy.now(), tb = inBeat(t), k = kq(), lab = labeller(ctx, 800, { headline: 2 });
    const r = reach(tb), L = lead.value;
    /* the heart: muscle, the depolarized parts clipped to their chambers, the septa and conduction paths, the outline */
    ctx.save(); ctx.translate(G.x, G.y); ctx.rotate(ROT); ctx.scale(SC, SC);
    ctx.fillStyle = alpha(PAL.ink, 0.06); ctx.fill(outline);
    ctx.fillStyle = alpha(C('charge'), 0.3);
    if (r.rA > r.rAr) {
      ctx.save(); ctx.clip(outline); ctx.beginPath(); ctx.rect(-200, -200, 400, 200 + AVY); ctx.clip();
      ctx.beginPath(); ctx.arc(SA[0], SA[1], r.rA, 0, TAU); if (r.rAr > 0) ctx.arc(SA[0], SA[1], r.rAr, 0, TAU, true); ctx.fill(); ctx.restore();
    }
    if (r.rV > 0) {
      ctx.save(); ctx.clip(outline); ctx.beginPath(); ctx.rect(-200, AVY, 400, 260); ctx.clip();
      ctx.beginPath(); ctx.ellipse(VC[0], VC[1], r.rV, r.rV * VS, 0, 0, TAU); ctx.fill(); ctx.restore();
    }
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.strokeStyle = alpha(PAL.ink, 0.45); ctx.lineWidth = 3 / SC; ctx.stroke(septa);
    ctx.strokeStyle = alpha(PAL.ink, 0.6); ctx.lineWidth = 2 / SC; ctx.setLineDash([2 / SC, 5 / SC]); ctx.stroke(bundle); ctx.setLineDash([]);
    ctx.strokeStyle = F.ref('heart'); ctx.lineWidth = 4 / SC; ctx.stroke(outline);
    ctx.restore();
    const sa = toPage(SA), av = toPage(AV);
    const avLive = tb > 0.14 * k && tb < 0.2 * k;
    dot(ctx, sa.x, sa.y, PAL.ink, true, 8);
    dot(ctx, av.x, av.y, avLive ? C('charge') : PAL.ink, true, avLive ? 11 : 8);
    /* the triangle, each lead's component of the vector on its own side, and the chosen lead's drop lines */
    const v = vec(tb), head = { x: G.x + v[0] * VSCALE, y: G.y + v[1] * VSCALE };
    const offVector = (q) => { const dx = head.x - G.x, dy = head.y - G.y, L2 = dx * dx + dy * dy || 1, s = Math.min(1, Math.max(0, ((q.x - G.x) * dx + (q.y - G.y) * dy) / L2));
      return Math.hypot(q.x - G.x - s * dx, q.y - G.y - s * dy) > 18; };
    signs.forEach((p) => { const q = toPage(p); if (offVector(q)) text(ctx, depolarized(p, r) ? '−' : '+', q.x, q.y, PAL.ink, { size: 20, weight: 700, align: 'center' }); });
    Object.keys(LEADS).forEach((nm) => {
      const [a, b] = LEADS[nm].map((e) => elec[e]), on = nm === L;
      line(ctx, a.x, a.y, b.x, b.y, on ? alpha(C('voltage'), 0.55) : alpha(PAL.ink, 0.3), 3);
      const u = UNIT[nm], foot = (p) => { const s = (p.x - a.x) * u[0] + (p.y - a.y) * u[1]; return { x: a.x + s * u[0], y: a.y + s * u[1] }; };
      const f0 = foot(G), f1 = foot(head);
      if (on) { line(ctx, G.x, G.y, f0.x, f0.y, alpha(PAL.ink, 0.35), 2, [4, 8]); line(ctx, head.x, head.y, f1.x, f1.y, alpha(PAL.ink, 0.35), 2, [4, 8]); }
      if (Math.hypot(f1.x - f0.x, f1.y - f0.y) > 8) arrow(ctx, f0.x, f0.y, f1.x, f1.y, on ? C('voltage') : alpha(PAL.ink, 0.5), on ? 6 : 4);
      const out = nm === 'I' ? [0, -1] : nm === 'II' ? [-u[1], u[0]] : [u[1], -u[0]];
      lab.add(nm, (a.x + b.x) / 2, (a.y + b.y) / 2, out[0], out[1], on ? C('voltage') : PAL.muted, 24, 30);
    });
    if (Math.hypot(head.x - G.x, head.y - G.y) > 10) arrow(ctx, G.x, G.y, head.x, head.y, C('voltage'), 6);
    Object.keys(elec).forEach((e) => { const c = F.ref(e.toLowerCase()), p = elec[e]; dot(ctx, p.x, p.y, PAL.panel, true, 17); dot(ctx, p.x, p.y, c, false, 17); text(ctx, e, p.x, p.y, c, { size: 17, weight: 700, align: 'center' }); });
    lab.add('SA node', sa.x, sa.y, -0.7, -0.7, PAL.ink, 20, 34);
    lab.add('AV node', av.x, av.y, -0.99, 0.12, PAL.ink, 20, 250);
    const atr = toPage([126, -80]), ven = toPage([118, 50]);
    lab.add('atria', atr.x, atr.y, 1, -0.4, PAL.muted, 20, 26);
    lab.add('ventricles', ven.x, ven.y, 0.958, 0.287, PAL.muted, 20, 150);
    hits = [['right atrium', [-62, -84]], ['left atrium', [66, -92]], ['right ventricle', [-62, 50]], ['left ventricle', [78, 40]], ['septum and bundle branches', [18, 60]], ['SA node', SA], ['AV node', AV]]
      .map(([name, p]) => { const q = toPage(p); return { x: q.x, y: q.y, r: name.endsWith('node') ? 16 : 34, name }; })
      .concat(Math.hypot(head.x - G.x, head.y - G.y) > 10 ? [{ x: head.x, y: head.y, r: 20, name: 'depolarization vector' }] : []);
    /* the trace, written up to now: 1.5 s across, −0.6 to 1.2 mV up, fixed; the pressure beneath, 60 to 140 mm Hg */
    const b1 = { l: 840, r: 1320, t: 150, b: 380 };
    const a1 = axes(ctx, b1, [0, WIN], [-0.6, 1.2], { nx: 3, ny: 3, yl: 'lead ' + L + ' potential (mV)', yc: C('voltage'), fx: (q) => fmt(q, 1), fy: (q) => fmt(q, 1) });
    line(ctx, b1.l, a1.Y(0), b1.r, a1.Y(0), alpha(PAL.ink, 0.3), 2, [6, 8]);
    if (t > 0) curve(ctx, (q) => reading(q), 0, t, a1.X, a1.Y, C('voltage'), 4, Math.max(2, Math.round(480 * t / WIN)));
    line(ctx, a1.X(t), b1.t, a1.X(t), b1.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    pinned(ctx, b1, a1.X, a1.Y, t, reading(t), C('voltage'));
    /* the five features, named once, on the first beat, as the trace reaches them */
    FEAT.forEach((f) => {
      const q = f.c * k; if (q > t) return;
      const y = reading(q), below = f.nm === 'Q' || f.nm === 'S';
      text(ctx, f.nm, a1.X(q), a1.Y(y) + (below ? 24 : -22), PAL.ink, { size: 20, weight: 700, align: 'center', bg: PAL.panel });
    });
    const b2 = { l: 840, r: 1320, t: 480, b: 700 };
    const a2 = axes(ctx, b2, [0, WIN], [60, 140], { nx: 3, ny: 4, xl: 'time (s)', xc: C('time'), yl: 'arterial pressure (mm Hg)', yc: C('pressure'), fx: (q) => fmt(q, 1), fy: (q) => fmt(q, 0) });
    if (t > 0) { ctx.save(); ctx.setLineDash([10, 8]); curve(ctx, press, 0, t, a2.X, a2.Y, C('pressure'), 4, Math.max(2, Math.round(480 * t / WIN))); ctx.restore(); }
    line(ctx, a2.X(t), b2.t, a2.X(t), b2.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    pinned(ctx, b2, a2.X, a2.Y, t, press(t), C('pressure'));
    lab.flush();
    const what = tb < 0.06 * k ? 'the heart rests between beats'
      : tb < 0.15 * k ? 'the wave spreads from the SA node across the atria, writing the P wave'
      : tb < 0.18 * k ? 'the wave waits at the AV node while the atria contract'
      : tb < 0.25 * k ? 'the wave runs down the septum and out through the ventricles, writing the QRS complex'
      : tb < 0.33 * k ? 'the ventricles stay depolarized while they contract'
      : tb < 0.43 * k ? 'the ventricles repolarize, writing the T wave'
      : 'the heart rests between beats';
    topline(ctx, 'At ' + fmt(t, 2) + ' s ' + what + ', and the lead ' + L + ' potential reads ' + mv(reading(t)) + ' mV.');
    readout(d.readout, `\\kt_{\\text{beat}} = \\frac{1}{\\kf} = \\frac{60\\ \\text{s}}{${fmt(bpm.v, 0)}} = ${sig3(period())}\\ \\text{s}`,
      'The beat is drawn at a quarter of its true speed.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1 / SLOW), draw });
})();

/* =====================================================================
   FIGURE 20.32: where the electrodes go. Still, because a placement
   does not change with time: it answers its two choices, registers no
   cycle and takes no transport.
===================================================================== */
(function () {
  const d = sim('sim-electrodes', 700);
  const set = choice(d.controls, { label: '\\text{Placement}', value: 'twelve', aria: 'placement', options: [{ value: 'three', label: 'Three electrodes' }, { value: 'twelve', label: 'Twelve leads' }] });
  const lead = choice(d.controls, { label: '\\text{Lead drawn}', value: 'II', aria: 'which lead is drawn', options: [{ value: 'I', label: 'I' }, { value: 'II', label: 'II' }, { value: 'III', label: 'III' }] });
  function draw() {
    const { ctx } = begin(d.c);
    const lab = labeller(ctx, 700, { headline: 2 });
    const s = 3.6, x = 700, y = 650;                 /* the feet, and the frame the body is drawn in, 150 units tall */
    frontBody(ctx, x, y, s, alpha(PAL.ink, 0.22));
    const P = (dx, dy) => ({ x: x + dx * s, y: y + dy * s });
    /* the patient's right is the reader's left */
    const limbs = { RA: P(-40, -58), LA: P(40, -58), RL: P(-13, -6), LL: P(13, -6) };
    const chest = [P(-1, -104), P(7, -102), P(14, -98), P(20, -93), P(25, -87), P(29, -81)];
    /* the electrodes only the twelve-lead placement has arrive one after another, and leave the same way */
    const a12 = set.a('twelve');
    chest.forEach((q, i) => { const a = F.stagger(a12, i, chest.length); if (a > 0.01) { ctx.save(); ctx.globalAlpha = a; dot(ctx, q.x, q.y, C('voltage'), true, 9); ctx.restore(); } });
    Object.keys(limbs).forEach((k) => {
      const q = limbs[k], a = k === 'RL' ? a12 : 1;
      if (a <= 0.01) return;
      ctx.save(); ctx.globalAlpha = a;
      dot(ctx, q.x, q.y, PAL.panel, true, 15); dot(ctx, q.x, q.y, C('voltage'), false, 15);
      text(ctx, k, q.x, q.y, PAL.ink, { size: 17, weight: 700, align: 'center' });
      ctx.restore();
    });
    const pair = lead.value === 'I' ? ['RA', 'LA'] : lead.value === 'II' ? ['RA', 'LL'] : ['LA', 'LL'];
    line(ctx, limbs[pair[0]].x, limbs[pair[0]].y, limbs[pair[1]].x, limbs[pair[1]].y, C('voltage'), 5, [12, 8]);
    lab.add('lead ' + lead.value, (limbs[pair[0]].x + limbs[pair[1]].x) / 2, (limbs[pair[0]].y + limbs[pair[1]].y) / 2, 1, 0, C('voltage'), 22, 36);
    if (set.value === 'twelve') lab.add('six chest electrodes', chest[5].x, chest[5].y, 1, -0.3, C('voltage'), 21, 40);
    lab.add(set.value === 'three' ? 'three limb electrodes' : 'four limb electrodes', limbs.LL.x, limbs.LL.y, 1, 0.4, C('voltage'), 21, 40);
    lab.flush();
    topline(ctx, set.value === 'three'
      ? 'Lead ' + lead.value + ' is the potential between ' + pair[0] + ' and ' + pair[1] + ', and lead II, from the right arm to the left leg, is the one most often graphed.'
      : 'A twelve-lead ECG reads the same heart from many directions at once: six electrodes across the chest and four on the limbs.');
    readout(d.readout, set.value === 'three'
      ? `\\kdV_{\\text{lead ${lead.value}}} = \\kV_{\\text{${pair[1]}}} - \\kV_{\\text{${pair[0]}}}`
      : `\\text{10 electrodes} \\rightarrow \\text{12 leads}`,
      set.value === 'three'
        ? 'Each pair of electrodes reads the component of the depolarization vector along the line between them, which is why three pairs give three different traces of one heartbeat.'
        : 'Ten electrodes give twelve leads, because a lead is a potential difference read between electrodes or combinations of them.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
