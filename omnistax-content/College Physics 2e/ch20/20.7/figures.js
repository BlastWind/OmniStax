/* Figures for section 20.7 Nerve Conduction–Electrocardiograms. Boots against the section's text article. */
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
  const part = choice(d.controls, {
    label: 'Part', value: 'all', aria: 'part of the cell',
    options: [{ value: 'all', label: 'Whole cell' }, { value: 'dend', label: 'Dendrites' }, { value: 'soma', label: 'Cell body' }, { value: 'axon', label: 'Axon' }],
  });
  function draw() {
    const { ctx } = begin(d.c);
    const sel = part.value, lab = labeller(ctx, 700, { headline: 2 });
    const on = (k) => (sel === 'all' || sel === k ? PAL.ink : alpha(PAL.ink, 0.22));
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
    ctx.beginPath(); ctx.moveTo(syn.x - 18, syn.y - 14); ctx.lineTo(syn.x - 130, syn.y - 34); ctx.stroke(); ctx.restore();
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
    /* at most six labels at once, and the choice decides which six (rule 26.7) */
    const add = (s, x, y, ux, uy, sz, start) => { const q = M(x, y); lab.add(s, q[0], q[1], ux, uy, PAL.ink, sz, start); };
    if (sel === 'all' || sel === 'dend') {
      add('dendrites', soma.x - 170, soma.y + 50, -0.5, 1, 21, 34);
      add('synapse', syn.x - 14, syn.y - 12, -1, 0.15, 21, 30);
    }
    if (sel === 'all' || sel === 'soma') {
      add('cell body', soma.x, soma.y - soma.r, 0, -1, 21, 34);
      if (sel === 'soma') add('nucleus', soma.x + 6, soma.y - 4, 0.9, 0.7, 20, 46);
    }
    if (sel === 'all' || sel === 'axon') {
      add('axon', (ax0 + ax1) / 2, soma.y - 24, 0, -1, 21, 40);
      add('myelin sheath', ax0 + AL * 0.22, soma.y + 22, -0.2, 1, 20, 36);
      if (sel === 'axon') add('node of Ranvier', ax0 + (AL * 1.5) / Math.max(3, Math.round(AL / 86)), soma.y - 22, 0.3, -1, 20, 56);
      add('nerve endings', ax1 + 60, soma.y + 80, 0.2, 1, 20, 30);
      add('a muscle fiber', ax1 + 100, soma.y - 105, 0.3, -1, 20, 26);
    }
    lab.flush();
    const tt = len.v / 100 / SPEED;
    topline(ctx, 'A signal crossing a ' + fmt(len.v, 0) + '-cm axon at about 1 m/s takes ' + sig3(tt) + ' s, which is why a reflex is quick but not instant.');
    readout(d.readout, `\\kt = \\frac{\\kd}{v} = \\frac{${fmt(len.v, 0)}\\ \\text{cm}}{1.0\\ \\text{m/s}} = ${sig3(tt * 1000)}\\ \\text{ms}`,
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
  const st = choice(d.controls, {
    label: 'Membrane passes', value: 'rest', aria: 'which ions the membrane passes',
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
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
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
  const show = choice(d.controls, { label: 'Show', value: 'both', aria: 'what to show', options: [{ value: 'both', label: 'Trace and membrane' }, { value: 'trace', label: 'Trace alone' }] });
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
    if (show.value === 'both') {
      const XL = 440, XR = 960, TOP = 120, BOT = 168;
      ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
      ctx.fillRect(XL, TOP, XR - XL, BOT - TOP); ctx.strokeRect(XL, TOP, XR - XL, BOT - TOP); ctx.restore();
      const inPos = ph === 'depolarizing' || (ph === 'repolarizing' && v > 0);
      chargeLayer(ctx, XL, XR, TOP - 16, 10, 1, !inPos);
      chargeLayer(ctx, XL, XR, BOT + 16, 10, 1, inPos);
      if (ph === 'depolarizing') { for (let i = 0; i < 3; i++) { const x = XL + 120 + i * 140; arrow(ctx, x, TOP - 54, x, BOT + 54, alpha(PAL.ink, 0.45), 4); ion(ctx, x, TOP + (BOT - TOP) / 2, 'Na', 15); } lab.add('sodium rushing in', XR, (TOP + BOT) / 2, 1, 0, PAL.ink, 21, 40); }
      else if (ph === 'repolarizing') { for (let i = 0; i < 3; i++) { const x = XL + 120 + i * 140; arrow(ctx, x, BOT + 54, x, TOP - 54, alpha(PAL.ink, 0.45), 4); ion(ctx, x, TOP + (BOT - TOP) / 2, 'K', 15); } lab.add('potassium leaving', XR, (TOP + BOT) / 2, 1, 0, PAL.ink, 21, 40); }
      else lab.add(ph === 'resting' ? 'no ions crossing' : 'active transport restoring the concentrations', XR, (TOP + BOT) / 2, 1, 0, PAL.ink, 21, 40);
      lab.add('outside', XL, TOP - 16, -1, 0, PAL.ink, 19, 26);
      lab.add('inside', XL, BOT + 16, -1, 0, PAL.ink, 19, 26);
    }
    /* the graph: 8 ms across and −120 to 60 mV up, both fixed from the slider extremes */
    const box = { l: 200, r: 1250, t: show.value === 'both' ? 300 : 150, b: 700 };
    const { X, Y } = axes(ctx, box, [0, WIN], [-120, 60], { nx: 4, ny: 6, xl: 'time (ms)', yl: 'membrane voltage (mV)', yc: C('voltage'), fx: (q) => fmt(q, 0), fy: (q) => fmt(q, 0) });
    line(ctx, box.l, Y(0), box.r, Y(0), alpha(PAL.ink, 0.3), 2, [6, 8]);
    line(ctx, box.l, Y(rest.v), box.r, Y(rest.v), alpha(C('voltage'), 0.4), 2, [10, 10]);
    curve(ctx, V, 0, WIN, X, Y, C('voltage'), 5, 240);
    line(ctx, X(t), box.t, X(t), box.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    pinned(ctx, box, X, Y, t, v, C('voltage'), sig3(v) + ' mV');
    lab.add('resting potential ' + fmt(rest.v, 0) + ' mV', box.l + 150, Y(rest.v), 0, rest.v < -100 ? -1 : 1, C('voltage'), 20, 28);
    lab.add('peak ' + fmt(pk.v, 0) + ' mV', X(3.5), Y(pk.v), 0.4, -1, C('voltage'), 20, 30);
    lab.flush();
    topline(ctx, 'At ' + fmt(t, 1) + ' ms the membrane is ' + ph + ' and the inside of the cell stands at ' + sig3(v) + ' mV.');
    readout(d.readout, `\\kdV = ${sig3(v)}\\ \\text{mV}\\quad\\text{at}\\quad \\kt = ${fmt(t, 1)}\\ \\text{ms},\\qquad \\kVo = ${fmt(pk.v, 0)}\\ \\text{mV}`,
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
  const kind = choice(d.controls, { label: 'Axon', value: 'myelin', aria: 'kind of axon', options: [{ value: 'bare', label: 'Bare membrane' }, { value: 'myelin', label: 'Myelinated' }], onInput: () => sync() });
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
    /* the membrane strip, its outside above and its inside below */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
    ctx.fillRect(XL, TOP, XR - XL, BOT - TOP); ctx.strokeRect(XL, TOP, XR - XL, BOT - TOP); ctx.restore();
    /* the myelin sheaths, with an unmyelinated node between each pair */
    if (my) for (let i = 0; i < nSh; i++) {
      const a = XL + (XR - XL) * (i * frac) + 6, b = XL + (XR - XL) * ((i + 1) * frac) - 6;
      ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.16); ctx.strokeStyle = alpha(PAL.ink, 0.5); ctx.lineWidth = 3;
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
    lab.add(my ? 'myelin sheath, ' + fmt(sh.v, 1) + ' mm' : 'bare membrane', XL + (XR - XL) * 0.5, BOT + 58, 0, 1, C('position'), 21, 36);
    if (my) lab.add('node of Ranvier', XL + (XR - XL) * frac, BOT + 26, 0.2, 1, PAL.ink, 20, 60);
    lab.add('outside', XL, TOP - 24, -1, 0, PAL.ink, 20, 26);
    lab.add('inside', XL, BOT + 24, -1, 0, PAL.ink, 20, 26);
    lab.flush();
    const v = speed();
    topline(ctx, my
      ? 'On the myelinated axon the pulse runs through each ' + fmt(sh.v, 1) + '-mm sheath losing voltage and is regenerated at full height in the node, so it crosses at about ' + sig3(v) + ' m/s.'
      : 'On the bare membrane every patch has to depolarize in its turn, so the impulse crawls along at about 1 m/s.');
    readout(d.readout, `v = \\frac{\\kd}{\\kt} = \\frac{${fmt(STRIP_MM, 0)}\\ \\text{mm}}{${sig3(T() * 1000)}\\ \\text{ms}} = ${sig3(v)}\\ \\text{m/s}`,
      'The drawing takes ' + sig3(wall()) + ' s over a crossing that really takes ' + sig3(T() * 1000) + ' ms, and it slows the fast axon more than the slow one so that both can be watched; the speeds in the readout are the true ones.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T() / wall()), draw });
})();

/* =====================================================================
   FIGURE 20.30 + 20.31: the depolarization wave crossing the heart, and
   the lead potential it writes. It moves because a heartbeat is a
   period and the lesson is that each feature of the trace arrives as
   the part of the heart that makes it depolarizes; one beat's window is
   one cycle and it takes the app's transport.
===================================================================== */
(function () {
  const d = sim('sim-ecg', 820);
  const WIN = 1.5;                                  /* the window both graphs show, 1.5 s, fixed */
  const bpm = ctl(d.controls, { label: '\\text{heart rate}', cls: '', min: 40, max: 160, step: 5, value: 80, unit: 'beats/min', dec: 0, onInput: () => cy.reset(), aria: 'heart rate' });
  const lead = choice(d.controls, { label: 'Lead', value: 'II', aria: 'which lead is read', options: [{ value: 'I', label: 'I' }, { value: 'II', label: 'II' }, { value: 'III', label: 'III' }], onInput: () => cy.reset() });
  const cy = cycle(() => WIN, 0.8);
  const gain = () => (lead.value === 'II' ? 1 : lead.value === 'I' ? 0.6 : 0.45);
  const bump = (x, c, w) => Math.exp(-Math.pow((x - c) / w, 2));
  /* one beat of the lead potential, in millivolts, as a fraction f of the beat */
  const beat = (f) => gain() * (0.25 * bump(f, 0.14, 0.035) - 0.09 * bump(f, 0.255, 0.012) + 1.0 * bump(f, 0.285, 0.013) - 0.30 * bump(f, 0.315, 0.014) + 0.30 * bump(f, 0.50, 0.055));
  const press = (f) => 80 + 42 * bump(f, 0.40, 0.10) + 6 * bump(f, 0.56, 0.06);
  const period = () => 60 / bpm.v;
  const frac = (t) => ((t / period()) % 1 + 1) % 1;
  function draw() {
    const { ctx } = begin(d.c);
    const t = cy.now(), f = frac(t), lab = labeller(ctx, 820, { headline: 2 });
    /* the heart, its sinoatrial node and the three electrodes on the patient */
    const hx = 380, hy = 330, s = 1.5;
    const heart = new Path2D();
    heart.moveTo(hx, hy + 92 * s);
    heart.bezierCurveTo(hx - 92 * s, hy + 18 * s, hx - 74 * s, hy - 78 * s, hx - 20 * s, hy - 52 * s);
    heart.bezierCurveTo(hx - 6 * s, hy - 44 * s, hx + 4 * s, hy - 44 * s, hx + 18 * s, hy - 52 * s);
    heart.bezierCurveTo(hx + 72 * s, hy - 78 * s, hx + 90 * s, hy + 18 * s, hx, hy + 92 * s);
    heart.closePath();
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.06); ctx.fill(heart); ctx.restore();
    const sa = { x: hx + 38 * s, y: hy - 44 * s };
    dot(ctx, sa.x, sa.y, PAL.ink, true, 9);
    /* the depolarized part of the heart, and the vector that stands for the wave */
    const atria = f > 0.06 && f < 0.20, vent = f > 0.22 && f < 0.36, repol = f > 0.44 && f < 0.58;
    ctx.save(); ctx.clip(heart); ctx.fillStyle = alpha(C('charge'), 0.28);
    if (atria) ctx.fillRect(hx - 100 * s, hy - 80 * s, 200 * s, 66 * s);
    if (vent) ctx.fillRect(hx - 100 * s, hy - 14 * s, 200 * s, 110 * s);
    if (repol) { ctx.fillStyle = alpha(C('voltage'), 0.2); ctx.fillRect(hx - 100 * s, hy - 14 * s, 200 * s, 110 * s); }
    ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.stroke(heart); ctx.restore();
    line(ctx, hx - 74 * s, hy - 14 * s, hx + 78 * s, hy - 14 * s, alpha(PAL.ink, 0.4), 3, [8, 8]);
    lab.add('atria', hx - 60 * s, hy - 40 * s, -1, -0.3, PAL.muted, 18, 40);
    lab.add('ventricles', hx - 40 * s, hy + 40 * s, -1, 0.3, PAL.muted, 18, 60);
    const mag = Math.min(1, Math.abs(beat(f)) / Math.max(0.2, gain()));
    if (mag > 0.05) {
      const ang = atria ? 2.6 : vent ? 2.35 : 5.6;
      arrow(ctx, sa.x, sa.y, sa.x + Math.cos(ang) * 150 * mag, sa.y - Math.sin(ang) * 150 * mag, C('voltage'), 6);
      lab.add('depolarization vector', sa.x + Math.cos(ang) * 150 * mag, sa.y - Math.sin(ang) * 150 * mag, -0.4, 0.8, C('voltage'), 20, 34);
    }
    lab.add('SA node', sa.x, sa.y, 0.8, -0.6, PAL.ink, 20, 34);
    const elec = { RA: { x: 150, y: 140 }, LA: { x: 640, y: 140 }, LL: { x: 640, y: 600 } };
    const pair = lead.value === 'I' ? ['RA', 'LA'] : lead.value === 'II' ? ['RA', 'LL'] : ['LA', 'LL'];
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.3); ctx.lineWidth = 3; ctx.setLineDash([9, 9]);
    ctx.beginPath(); ctx.moveTo(elec.RA.x, elec.RA.y); ctx.lineTo(elec.LA.x, elec.LA.y); ctx.lineTo(elec.LL.x, elec.LL.y); ctx.closePath(); ctx.stroke(); ctx.restore();
    line(ctx, elec[pair[0]].x, elec[pair[0]].y, elec[pair[1]].x, elec[pair[1]].y, C('voltage'), 5);
    Object.keys(elec).forEach((k) => { dot(ctx, elec[k].x, elec[k].y, PAL.panel, true, 15); dot(ctx, elec[k].x, elec[k].y, PAL.ink, false, 15); text(ctx, k, elec[k].x, elec[k].y, PAL.ink, { size: 18, weight: 700, align: 'center' }); });
    lab.add('lead ' + lead.value, (elec[pair[0]].x + elec[pair[1]].x) / 2, (elec[pair[0]].y + elec[pair[1]].y) / 2, -0.8, 0, C('voltage'), 21, 32);
    /* the trace: 1.5 s across, −0.5 to 1.2 mV up, fixed, and the pressure beneath it in ink */
    const b1 = { l: 800, r: 1310, t: 120, b: 360 };
    const a1 = axes(ctx, b1, [0, WIN], [-0.5, 1.2], { nx: 3, ny: 4, yl: 'lead potential (mV)', yc: C('voltage'), fx: (q) => fmt(q, 1), fy: (q) => fmt(q, 1) });
    line(ctx, b1.l, a1.Y(0), b1.r, a1.Y(0), alpha(PAL.ink, 0.3), 2, [6, 8]);
    curve(ctx, (q) => beat(frac(q)), 0, WIN, a1.X, a1.Y, C('voltage'), 4, 420);
    line(ctx, a1.X(t), b1.t, a1.X(t), b1.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    pinned(ctx, b1, a1.X, a1.Y, t, beat(f), C('voltage'));
    /* the five features, named once on the first beat the window holds */
    [['P', 0.14], ['Q', 0.255], ['R', 0.285], ['S', 0.315], ['T', 0.50]].forEach(([nm, ff]) => {
      const q = ff * period(); if (q > WIN) return;
      text(ctx, nm, a1.X(q), a1.Y(beat(ff)) + (nm === 'Q' || nm === 'S' ? 24 : -22), PAL.ink, { size: 20, weight: 700, align: 'center', bg: PAL.panel });
    });
    const b2 = { l: 800, r: 1310, t: 470, b: 690 };
    const a2 = axes(ctx, b2, [0, WIN], [60, 140], { nx: 3, ny: 4, xl: 'time (s)', yl: 'arterial pressure (mm Hg)', fx: (q) => fmt(q, 1), fy: (q) => fmt(q, 0) });
    ctx.save(); ctx.setLineDash([10, 8]);
    curve(ctx, (q) => press(frac(q)), 0, WIN, a2.X, a2.Y, PAL.ink, 4, 420);
    ctx.restore();
    line(ctx, a2.X(t), b2.t, a2.X(t), b2.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    pinned(ctx, b2, a2.X, a2.Y, t, press(f), PAL.ink);
    lab.flush();
    const what = atria ? 'crossing the atria, which writes the P wave' : vent ? 'crossing the ventricles, which writes the QRS complex' : repol ? 'leaving the ventricles as they repolarize, which writes the T wave' : 'between beats, with the heart at rest';
    topline(ctx, 'At ' + fmt(t, 2) + ' s the wave is ' + what + ', and the lead ' + lead.value + ' potential reads ' + sig3(beat(f)) + ' mV.');
    readout(d.readout, `\\kdV_{\\text{lead ${lead.value}}} = ${sig3(beat(f))}\\ \\text{mV},\\qquad \\kt_{\\text{beat}} = \\frac{60\\ \\text{s}}{${fmt(bpm.v, 0)}} = ${sig3(period())}\\ \\text{s}`,
      'The systolic pressure of ' + sig3(press(0.40)) + ' mm Hg follows the QRS complex, because the ventricles contract only after the wave that depolarizes them has crossed.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 0.5), draw });
})();

/* =====================================================================
   FIGURE 20.32: where the electrodes go. Still, because a placement
   does not change with time: it answers its two choices, registers no
   cycle and takes no transport.
===================================================================== */
(function () {
  const d = sim('sim-electrodes', 700);
  const set = choice(d.controls, { label: 'Placement', value: 'twelve', aria: 'placement', options: [{ value: 'three', label: 'Three electrodes' }, { value: 'twelve', label: 'Twelve leads' }] });
  const lead = choice(d.controls, { label: 'Lead drawn', value: 'II', aria: 'which lead is drawn', options: [{ value: 'I', label: 'I' }, { value: 'II', label: 'II' }, { value: 'III', label: 'III' }] });
  function draw() {
    const { ctx } = begin(d.c);
    const lab = labeller(ctx, 700, { headline: 2 });
    const s = 3.6, x = 700, y = 650;                 /* the feet, and the frame the body is drawn in, 150 units tall */
    frontBody(ctx, x, y, s, alpha(PAL.ink, 0.22));
    const P = (dx, dy) => ({ x: x + dx * s, y: y + dy * s });
    /* the patient's right is the reader's left */
    const limbs = { RA: P(-40, -58), LA: P(40, -58), RL: P(-13, -6), LL: P(13, -6) };
    const chest = [P(-1, -104), P(7, -102), P(14, -98), P(20, -93), P(25, -87), P(29, -81)];
    if (set.value === 'twelve') chest.forEach((q) => { dot(ctx, q.x, q.y, C('voltage'), true, 9); });
    Object.keys(limbs).forEach((k) => {
      const q = limbs[k], three = set.value === 'three';
      if (three && k === 'RL') return;
      dot(ctx, q.x, q.y, PAL.panel, true, 15); dot(ctx, q.x, q.y, C('voltage'), false, 15);
      text(ctx, k, q.x, q.y, PAL.ink, { size: 17, weight: 700, align: 'center' });
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
      ? `\\kdV_{\\text{lead ${lead.value}}} = \\kV_{\\text{${pair[1]}}} - \\kV_{\\text{${pair[0]}}}\\qquad\\text{3 electrodes, 3 leads}`
      : `\\text{6 chest electrodes} + \\text{4 limb electrodes} = \\text{12 leads}`,
      set.value === 'three'
        ? 'Each pair of electrodes reads the component of the depolarization vector along the line between them, which is why three pairs give three different traces of one heartbeat.'
        : 'The three limb pairs of the older machines are still among the twelve, so the lead II trace above is read from this placement as well.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
