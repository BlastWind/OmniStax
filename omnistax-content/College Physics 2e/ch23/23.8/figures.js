/* Figures for section 23.8 Electrical Safety: Systems and Devices.
   Every figure here is a wiring diagram, and a fault is a state and not a
   process, so all six are still pictures: none registers a cycle, none carries
   a transport, and a slider or a choice alone redraws it (rule 14, and the
   chapter's config, which makes that decision for the whole of this section).
   The page binds voltage, current and resistance, which is what ch23/COLOR.md
   gives 23.8, and `sim-gfi` binds the magnetic field as well, for the field the
   live and neutral wires raise inside the sensing coil's core; the plan says so
   and the chapter pass is asked to widen the colour plan's line. No device is
   tinted: every wire, plug, outlet, case, core, coil, breaker and pipe is ink,
   and so is the person. What wears a hue is the quantity: the voltage a
   conductor sits at, the current along a wire, the resistance of the appliance,
   of an earth/ground wire, of a person and of the material between a
   transformer's coils. Insulation is never drawn in its colour code, since the
   section's own note is that the codes differ from one region to another; the
   conductors are told apart by their names. Nothing in any scene moves and no
   two names can meet at any setting of any slider, so the labels are on
   (rule 26.7). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['23.8'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, select, register, begin, line, arrow, dot, text, topline, silhouette } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

const TAU = 2 * Math.PI;
const VS = 120;                       /* the supply, 120 V rms, as every household circuit of this book has it */

/* A current written with the prefix that suits its size. */
function amps(I) {
  const a = Math.abs(I);
  if (a === 0) return '0';
  if (a < 1e-3) return fmt(I * 1e6, 2) + ' µA';
  if (a < 1) return fmt(I * 1e3, 2) + ' mA';
  return fmt(I, a < 10 ? 2 : 1) + ' A';
}
/* The same, for the inside of math, where the micro sign is written \mu. */
function ampsTex(I) {
  const a = Math.abs(I);
  if (a === 0) return '0';
  if (a < 1e-3) return fmt(I * 1e6, 2) + '\\ \\mu\\text{A}';
  if (a < 1) return fmt(I * 1e3, 2) + '\\ \\text{mA}';
  return fmt(I, a < 10 ? 2 : 1) + '\\ \\text{A}';
}
const ohmsTex = (R, d) => (R >= 1e6 ? fmt(R / 1e6, 0) + '\\ \\text{M}\\Omega' : R >= 1000 ? fmt(R / 1000, 2) + '\\ \\text{k}\\Omega' : fmt(R, d === undefined ? (R < 1 ? 3 : 2) : d) + '\\ \\Omega');
const ohms = (R, d) => (R >= 1e6 ? fmt(R / 1e6, 0) + ' MΩ' : R >= 1000 ? fmt(R / 1000, 2) + ' kΩ' : fmt(R, d === undefined ? (R < 1 ? 3 : 2) : d) + ' Ω');

/* ---------- the pieces every one of these diagrams is drawn from ----------
   A wire is ink, a piece paints out the wire beneath itself so that a caller
   may draw a run whole and set the pieces on it, and every name is set on a
   panel beside the thing it names and never on it. */
const WIRE = 3.5;
const wires = (ctx, pts) => { for (let i = 1; i < pts.length; i++) line(ctx, pts[i - 1][0], pts[i - 1][1], pts[i][0], pts[i][1], PAL.ink, WIRE); };
const node = (ctx, x, y, r) => dot(ctx, x, y, PAL.ink, true, r || 7);
/* a name on a panel, so that it reads over whatever it is set beside */
function tag(ctx, s, x, y, color, o) {
  o = o || {};
  text(ctx, s, x, y, color || PAL.ink, { size: o.size || 21, weight: o.weight === undefined ? 600 : o.weight, align: o.align || 'center', bg: PAL.panel });
}
/* the wire under a piece, painted out over a length L along the angle a */
function gap(ctx, x, y, a, L, w) { ctx.save(); ctx.translate(x, y); ctx.rotate(a); line(ctx, -L / 2, 0, L / 2, 0, PAL.panel, w || 9); ctx.restore(); }
/* a resistor, the zigzag the book draws every appliance as, centred at (x, y)
   and running along the angle a */
function zig(ctx, x, y, a, len) {
  const L = len || 96, n = 6, s = L / n, A = 13;
  gap(ctx, x, y, a, L, 7);
  ctx.save(); ctx.translate(x, y); ctx.rotate(a);
  ctx.strokeStyle = PAL.ink; ctx.lineWidth = WIRE; ctx.lineJoin = 'miter';
  ctx.beginPath(); ctx.moveTo(-L / 2, 0);
  for (let i = 0; i < n; i++) { ctx.lineTo(-L / 2 + (i + 0.25) * s, -A); ctx.lineTo(-L / 2 + (i + 0.75) * s, A); }
  ctx.lineTo(L / 2, 0); ctx.stroke(); ctx.restore();
}
/* an alternating source: a ring on the wire with one cycle of a sine inside it */
function acSource(ctx, x, y, r) {
  ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = WIRE; ctx.fillStyle = PAL.panel;
  ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke();
  ctx.beginPath();
  for (let i = 0; i <= 40; i++) { const u = i / 40, px = x - r * 0.6 + r * 1.2 * u, py = y - Math.sin(u * TAU) * r * 0.42; if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py); }
  ctx.stroke(); ctx.restore();
}
/* an earth/ground connection: three bars under the end of its wire */
function earth(ctx, x, y, k) {
  const s = k || 1;
  [[46, 0], [30, 12], [15, 24]].forEach(([w, dy]) => line(ctx, x - (w / 2) * s, y + dy * s, x + (w / 2) * s, y + dy * s, PAL.ink, dy ? 3 : 4));
}
/* a circuit breaker: a block on the wire with a hinged blade in it, closed when
   it is carrying and thrown open when it has tripped */
function breaker(ctx, x, y, closed) {
  gap(ctx, x, y, 0, 110, 10);
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.lineJoin = 'round';
  ctx.beginPath(); ctx.roundRect(x - 52, y - 32, 104, 64, 8); ctx.fill(); ctx.stroke(); ctx.restore();
  node(ctx, x - 30, y, 6); node(ctx, x + 30, y, 6);
  if (closed) line(ctx, x - 30, y, x + 30, y - 7, PAL.ink, 4);
  else line(ctx, x - 30, y, x + 16, y - 26, PAL.ink, 4);
}
/* the case round an appliance. A metal case is one stroke; a nonconducting one
   is drawn with a second outline inside it, as a doubly insulated tool has. */
function caseBox(ctx, l, t, r, b, insulated) {
  ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.lineJoin = 'round';
  ctx.beginPath(); ctx.roundRect(l, t, r - l, b - t, 10); ctx.stroke();
  if (insulated) { ctx.lineWidth = 2; ctx.beginPath(); ctx.roundRect(l + 9, t + 9, r - l - 18, b - t - 18, 8); ctx.stroke(); }
  ctx.restore();
}
/* a current arrow set along a wire, its head the way the current runs */
function flow(ctx, x, y, dx, dy, L, color) {
  const l = L || 56, c = color || C('current');
  gap(ctx, x, y, Math.atan2(dy, dx), l + 22, 10);
  arrow(ctx, x - (dx * l) / 2, y - (dy * l) / 2, x + (dx * l) / 2, y + (dy * l) / 2, c, 5);
}
/* the ground a person stands on: a line with hatching under it */
function groundLine(ctx, x1, x2, y) {
  line(ctx, x1, y, x2, y, PAL.muted, 3);
  for (let x = x1 + 12; x < x2; x += 26) line(ctx, x, y, x - 12, y + 14, alpha(PAL.muted, 0.7), 2);
}
/* a break in a wire, drawn where an earth/ground connection has been cut */
function broken(ctx, x, y, horiz) {
  const d = 22;
  ctx.save(); ctx.strokeStyle = PAL.panel; ctx.lineWidth = 9;
  ctx.beginPath();
  if (horiz) { ctx.moveTo(x - d, y); ctx.lineTo(x + d, y); } else { ctx.moveTo(x, y - d); ctx.lineTo(x, y + d); }
  ctx.stroke(); ctx.restore();
  const c = PAL.muted, k = 13;
  line(ctx, x - k, y - k, x + k, y + k, c, 3);
  line(ctx, x - k, y + k, x + k, y - k, c, 3);
}
/* a coil wound on a former: n turns along the segment from (x, y1) to (x, y2),
   bulging to the side `side` */
function coil(ctx, x, y1, y2, n, side) {
  const h = (y2 - y1) / n, r = 26 * (side || 1);
  ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3.5; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(x, y1);
  for (let i = 0; i < n; i++) {
    const a = y1 + i * h;
    ctx.bezierCurveTo(x + r, a, x + r, a + h, x, a + h);
  }
  ctx.stroke(); ctx.restore();
}

/* =====================================================================
   FIGURE 23.29 + 23.30: one appliance on one supply, drawn first with
   nothing to protect it and then with the three wires modern wiring uses.
   The book draws the same circuit twice, and the whole content of the
   pair is the difference between the two drawings, so they are folded
   into one figure whose choice walks from the first to the second. Still:
   a circuit at its working current is a state, and so is a breaker that
   has opened, so the figure answers its controls and registers no cycle.
===================================================================== */
(function () {
  const H = 700;
  const d = sim('sim-three-wire', H);
  const mode = choice(d.controls, {
    label: '\\text{the wiring}',
    options: [{ value: 'two', label: 'no safety features' }, { value: 'three', label: 'the three-wire system' }],
    value: 'three', aria: 'which wiring the appliance is on',
  });
  const rS = ctl(d.controls, { label: '\\kRes', cls: 'resistance', min: 4, max: 120, step: 1, value: 12, unit: 'Ω', dec: 1, aria: 'the resistance of the appliance' });
  const bS = ctl(d.controls, {
    label: '\\text{the breaker}', cls: 'current', min: 10, max: 30, step: 1, value: 20, unit: 'A', dec: 0,
    detents: [15, 20, 30], snap: true, aria: 'the rating of the circuit breaker',
  });
  const SX = 150, SY = 360, LIVE = 190, NEUT = 500, RX = 1090;
  const CL = 850, CT = 250, CR = 1210, CB = 430;

  function draw() {
    const { ctx } = begin(d.c);
    const three = mode.value === 'three', R = rS.v, rate = bS.v;
    const I = VS / R, open = three && I > rate;
    const cV = C('voltage'), cI = C('current'), cR = C('resistance');

    /* the loop: the live wire along the top, the appliance at the right, the
       return along the bottom */
    wires(ctx, [[SX, SY - 44], [SX, LIVE], [RX, LIVE], [RX, CT + 22]]);
    wires(ctx, [[RX, 368], [RX, NEUT], [SX, NEUT], [SX, SY + 44]]);
    if (three) caseBox(ctx, CL, CT, CR, CB, false);
    zig(ctx, RX, 320, Math.PI / 2);
    acSource(ctx, SX, SY, 44);
    tag(ctx, fmt(VS, 0) + ' V', SX, SY + 78, cV);
    if (three) breaker(ctx, 420, LIVE, !open);

    /* the current, where the breaker has not taken it away */
    if (!open) {
      flow(ctx, 790, LIVE, 1, 0);
      flow(ctx, 640, NEUT, -1, 0);
      tag(ctx, amps(I), 880, LIVE - 38, cI);
    } else {
      tag(ctx, 'no current at all', 880, LIVE - 38, cI);
    }

    /* the names of the conductors, and the voltages the three-wire system holds
       them at */
    tag(ctx, three ? 'the live/hot wire' : 'the wire from the source', three ? 640 : 430, LIVE - 38, PAL.ink);
    tag(ctx, three ? 'the neutral wire' : 'the return wire', 430, NEUT - 38, PAL.ink);
    tag(ctx, 'the appliance', 1060, 300, PAL.ink, { align: 'right' });
    tag(ctx, ohms(R, 1), 1060, 340, cR, { align: 'right', weight: 400 });

    if (three) {
      tag(ctx, 'circuit breaker', 420, LIVE + 62, PAL.muted, { size: 19, weight: 400 });
      tag(ctx, 'the case of the appliance', 1030, CT - 26, PAL.ink);
      /* the three connections to earth: two on the neutral wire and one on the case */
      wires(ctx, [[280, NEUT], [280, 580]]); node(ctx, 280, NEUT); earth(ctx, 280, 580);
      wires(ctx, [[700, NEUT], [700, 580]]); node(ctx, 700, NEUT); earth(ctx, 700, 580);
      wires(ctx, [[CR, 390], [1300, 390], [1300, 580]]); earth(ctx, 1300, 580);
      tag(ctx, '0 V', 480, NEUT + 40, cV);
      tag(ctx, '0 V', 1190, 410, cV, { align: 'right' });
      tag(ctx, 'the earth/ground wire', 1390, 648, PAL.ink, { align: 'right', size: 20 });
      /* the earth itself as the alternative return path the section names */
      line(ctx, 280, 620, 700, 620, alpha(PAL.ink, 0.35), 3, [12, 10]);
      tag(ctx, 'an alternative return path through the earth', 490, 652, PAL.muted, { size: 19, weight: 400 });
    } else {
      tag(ctx, 'no circuit breaker · no case · no earth/ground connection', 620, 600, PAL.muted, { size: 20, weight: 400 });
    }

    topline(ctx, three
      ? open
        ? 'The appliance would draw ' + amps(I) + ' from the ' + fmt(VS, 0) + ' V supply, which is more than the ' + fmt(rate, 0) + ' A breaker will carry, so the breaker has opened and nothing flows at all.'
        : 'The appliance draws ' + amps(I) + ' from the ' + fmt(VS, 0) + ' V supply, the ' + fmt(rate, 0) + ' A breaker carries it, and the neutral wire and the case are both held at zero volts.'
      : 'The appliance draws ' + amps(I) + ' from the ' + fmt(VS, 0) + ' V supply, and nothing in this circuit limits that current or keeps the case of the appliance out of it.');
    readout(d.readout,
      `\\kIcur = \\dfrac{\\kVrms}{\\kRes} = \\dfrac{${fmt(VS, 0)}\\ \\text{V}}{${ohmsTex(R, 1)}} = ${ampsTex(I)}`,
      three
        ? open
          ? 'The breaker is in series on the live/hot wire, so opening it takes the current from the whole circuit, which is what protects the wiring from overheating.'
          : 'The two earth/ground connections on the neutral wire force it to zero volts, and the third forces the case there as well, so a person who touches either one is not in the circuit.'
        : 'There is no breaker to open if the appliance draws more than the wiring can carry, and no earth/ground wire to hold the case of the appliance at zero volts.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 23.31: the three-prong plug in its outlet, with the wiring
   behind the wall drawn as well, so that each conductor can be followed
   from the supply to the appliance. The choice is the plug, since what
   this figure teaches is which conductor is present and what it was
   doing, which is three states and not a quantity (rule 26.1). Still: a
   plug in an outlet has no time in it.
===================================================================== */
(function () {
  const H = 640;
  const d = sim('sim-plug', H);
  const kind = choice(d.controls, {
    label: '\\text{the plug}',
    options: [{ value: 'three', label: 'three prongs' }, { value: 'two', label: 'two prongs, doubly insulated' }, { value: 'cut', label: 'the third prong cut off' }],
    value: 'three', aria: 'which plug the appliance carries',
  });
  const LIVE = 210, NEUT = 330, GND = 450;
  const OL = 520, OR = 645, PL = 660, PR = 790;
  const CL = 1010, CT = 150, CR = 1340, CB = 390, RX = 1175;

  function draw() {
    const { ctx } = begin(d.c);
    const k = kind.value, three = k === 'three', two = k === 'two';
    const cV = C('voltage'), cI = C('current');

    /* behind the wall: the source, the breaker and the three runs to the outlet */
    acSource(ctx, 150, 270, 40);
    wires(ctx, [[150, 230], [150, LIVE], [OL, LIVE]]);
    wires(ctx, [[150, 310], [150, NEUT], [OL, NEUT]]);
    wires(ctx, [[250, NEUT], [250, 404]]); node(ctx, 250, NEUT); earth(ctx, 250, 404);
    breaker(ctx, 330, LIVE, true);
    if (!two) { wires(ctx, [[400, 530], [400, GND], [OL, GND]]); earth(ctx, 400, 530); }
    tag(ctx, fmt(VS, 0) + ' V', 95, 270, cV, { align: 'right' });
    tag(ctx, 'circuit breaker', 330, LIVE - 62, PAL.muted, { size: 19, weight: 400 });

    /* the outlet: a faceplate with two slots and a round hole */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.roundRect(OL, 160, OR - OL, 350, 14); ctx.fill(); ctx.stroke(); ctx.restore();
    [LIVE, NEUT].forEach((y) => {
      ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.roundRect(566, y - 22, 16, 44, 6); ctx.fill(); ctx.stroke(); ctx.restore();
    });
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.arc(574, GND, 17, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
    if (!two) wires(ctx, [[OL, GND], [557, GND]]);

    /* the plug and its prongs */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.roundRect(PL, 175, PR - PL, 320, 16); ctx.fill(); ctx.stroke(); ctx.restore();
    [LIVE, NEUT].forEach((y) => line(ctx, PL, y, 574, y, PAL.ink, 8));
    if (three) line(ctx, PL, GND, 574, GND, PAL.ink, 8);
    if (k === 'cut') { line(ctx, PL, GND, PL - 18, GND, PAL.ink, 8); broken(ctx, PL - 34, GND, true); }

    /* the cord and the appliance */
    wires(ctx, [[PR, LIVE], [RX, LIVE], [RX, CT + 72]]);
    wires(ctx, [[RX, 318], [RX, NEUT], [PR, NEUT]]);
    caseBox(ctx, CL, CT, CR, CB, two);
    zig(ctx, RX, 270, Math.PI / 2);
    if (!two) { wires(ctx, [[PR, GND], [RX, GND], [RX, CB]]); node(ctx, RX, CB); }
    flow(ctx, 960, LIVE, 1, 0);
    flow(ctx, 960, NEUT, -1, 0);
    tag(ctx, '10.0 A', 960, 265, cI);

    /* the names */
    tag(ctx, 'the outlet', 582, 136, PAL.ink, { size: 20 });
    tag(ctx, 'the plug', 725, 530, PAL.ink, { size: 20 });
    tag(ctx, 'the live/hot wire', 860, LIVE - 36, PAL.ink, { size: 20 });
    tag(ctx, 'the neutral wire', 860, NEUT + 38, PAL.ink, { size: 20 });
    if (three) tag(ctx, 'the earth/ground wire', 880, GND + 40, PAL.ink, { size: 20 });
    else if (two) tag(ctx, 'no earth/ground wire, and a case that does not conduct', 780, GND + 46, PAL.muted, { size: 20, weight: 400 });
    else tag(ctx, 'the earth/ground wire, joined to no earth', 900, GND + 40, PAL.muted, { size: 20, weight: 400 });
    tag(ctx, two ? 'a nonconducting case' : 'the metal case of the appliance', RX, CT - 26, PAL.ink);
    tag(ctx, 'the appliance', 1145, 250, PAL.ink, { align: 'right' });

    topline(ctx, three
      ? 'The three-prong plug carries the live/hot wire, the neutral wire and the earth/ground wire to the appliance, and the third of them holds the metal case at zero volts.'
      : two
        ? 'A doubly insulated appliance has a case that does not conduct, so it needs no earth/ground wire and its plug carries only two prongs.'
        : 'The third prong has been cut off, so the earth/ground wire still runs to the case of the appliance but reaches no earth, and the case is held at nothing.');
    readout(d.readout,
      `\\kV_{\\text{live}} = ${fmt(VS, 0)}\\ \\text{V},\\qquad \\kV_{\\text{neutral}} = 0,\\qquad ` +
      (three ? '\\kV_{\\text{case}} = 0' : two ? '\\text{the case does not conduct}' : '\\text{the case is joined to no earth}'),
      three
        ? 'The plug can be inserted only one way round, so the live/hot wire always reaches the same terminal of the appliance and the earth/ground wire always reaches the case.'
        : two
          ? 'A case of impact resistant plastic cannot be brought into the circuit by worn insulation, which is why a power tool of this kind is safely sold with two prongs.'
          : 'The appliance runs exactly as it did, which is why the fault is so easily lived with: nothing shows until the live/hot wire touches the case.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 23.32: the live/hot wire worn through onto the metal case, with
   a person holding the case and a water pipe. The book draws the fault
   twice, once with the earth/ground connection broken and once with it
   intact, and those two drawings are the two positions of this figure's
   choice. The three sliders are the resistances the section's own problem
   names, and they load at its numbers, so the figure opens showing 15.0 V
   on the case, 75.0 A in the short and 5.00 mA through the person. Still:
   a fault is a state and not a process.
===================================================================== */
(function () {
  const H = 730;
  const d = sim('sim-worn-insulation', H);
  const earthed = choice(d.controls, {
    label: '\\text{the earth/ground wire}',
    options: [{ value: 'broken', label: 'broken' }, { value: 'intact', label: 'intact' }],
    value: 'intact', aria: 'whether the earth/ground wire is intact',
  });
  const fS = ctl(d.controls, { label: '\\kRes_{\\text{f}}', cls: 'resistance', min: 0.5, max: 5, step: 0.05, value: 1.4, unit: 'Ω', dec: 2, aria: 'the resistance of the worn contact' });
  const gS = ctl(d.controls, { label: '\\kRes_{\\text{g}}', cls: 'resistance', min: 0.05, max: 1, step: 0.005, value: 0.2, unit: 'Ω', dec: 3, aria: 'the resistance of the earth/ground wire' });
  const pS = ctl(d.controls, { label: '\\kRes_{\\text{person}}', cls: 'resistance', min: 1, max: 100, step: 0.5, value: 3, unit: 'kΩ', dec: 2, aria: 'the resistance of the person to earth/ground' });
  const RATE = 20;                     /* the breaker the section's own problem names */
  const LIVE = 190, NEUT = 540, FX = 760;
  const CL = 680, CT = 230, CR = 990, CB = 470;

  function draw() {
    const { ctx } = begin(d.c);
    const on = earthed.value === 'intact';
    const Rf = fS.v, Rg = gS.v, Rp = pS.v * 1000;
    /* The person's branch is so much the larger that it does not change the
       short, which is how the book works its own problem: with the earth/ground
       wire intact the fault current runs down it and the person takes the
       little that the voltage on the case will drive through them; with it
       broken the person is the only path there is. */
    const Ishort = on ? VS / (Rf + Rg) : 0;
    const Vcase = on ? Ishort * Rg : (VS * Rp) / (Rf + Rp);
    const Iperson = Vcase / Rp;
    const trips = Ishort > RATE;
    const cV = C('voltage'), cI = C('current'), cR = C('resistance');

    /* the supply, the breaker and the appliance in its case */
    wires(ctx, [[140, 298], [140, LIVE], [FX, LIVE], [FX, CT]]);
    wires(ctx, [[FX, 368], [FX, NEUT], [140, NEUT], [140, 382]]);
    caseBox(ctx, CL, CT, CR, CB, false);
    zig(ctx, FX, 320, Math.PI / 2);
    acSource(ctx, 140, 340, 42);
    tag(ctx, fmt(VS, 0) + ' V', 140, 424, cV);
    breaker(ctx, 330, LIVE, !trips);
    tag(ctx, 'circuit breaker, ' + fmt(RATE, 1) + ' A', 330, LIVE - 58, PAL.muted, { size: 19, weight: 400 });
    wires(ctx, [[300, NEUT], [300, 620]]); node(ctx, 300, NEUT); earth(ctx, 300, 620);

    /* the worn contact where the live/hot wire meets the case */
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(FX, CT, 20, 0, TAU); ctx.stroke(); ctx.restore();
    node(ctx, FX, CT, 8);
    tag(ctx, 'worn insulation', 670, CT + 4, PAL.ink, { align: 'right', size: 20 });

    /* the earth/ground wire from the case, intact or cut */
    wires(ctx, [[930, CB], [930, 620]]); node(ctx, 930, CB, 6); earth(ctx, 930, 620);
    if (!on) broken(ctx, 930, 545, false);
    tag(ctx, on ? 'the earth/ground wire' : 'the earth/ground wire, broken', 930, 666, on ? PAL.ink : PAL.muted, { size: 20, weight: on ? 600 : 400 });

    /* the person, one hand on the case and one on a water pipe */
    const PX = 1115, PY = 660, S = 2.4;
    line(ctx, 1250, 180, 1250, 690, PAL.muted, 5);
    line(ctx, 1268, 180, 1268, 690, PAL.muted, 5);
    tag(ctx, 'a water pipe, at earth', 1259, 152, PAL.muted, { size: 19, weight: 400 });
    groundLine(ctx, 1045, 1400, PY + 2);
    silhouette(ctx, { x: PX, y: PY, s: S, face: -1, pose: 'stand', color: PAL.ink, hands: [{ x: 52, y: -130 }, { x: -54, y: -120 }] });
    tag(ctx, 'the person, ' + ohms(Rp), PX, 702, cR, { size: 20 });

    /* the fault current: down the earth/ground wire where there is one, and
       through the person either way */
    if (on) { flow(ctx, 930, 560, 0, 1, 50); tag(ctx, amps(Ishort), 878, 560, cI, { align: 'right' }); }
    flow(ctx, 1035, 318, 1, 0, 44);
    tag(ctx, amps(Iperson), 1035, 280, cI);
    flow(ctx, 1259, 560, 0, 1, 50);

    /* the voltage the case is left at */
    tag(ctx, 'the metal case', 850, CT - 24, PAL.ink);
    tag(ctx, fmt(Vcase, Vcase < 10 ? 2 : 1) + ' V', 960, 250, cV, { align: 'right' });

    topline(ctx, on
      ? 'With the earth/ground wire intact the short draws ' + amps(Ishort) + ', which is ' + (trips ? 'far more than' : 'still within') + ' the ' + fmt(RATE, 1) + ' A the breaker will carry, and the person holding the case takes only ' + amps(Iperson) + '.'
      : 'With the earth/ground wire broken the case sits at ' + fmt(Vcase, 1) + ' V, the person carries ' + amps(Iperson) + ' to the water pipe, and the breaker never stirs.');
    readout(d.readout,
      on
        ? `\\kV_{\\text{case}} = \\kIcur_{\\text{short}}\\kRes_{\\text{g}} = (${fmt(Ishort, 1)}\\ \\text{A})(${ohmsTex(Rg)}) = ${fmt(Vcase, Vcase < 10 ? 2 : 1)}\\ \\text{V}`
        : `\\kIcur_{\\text{person}} = \\dfrac{\\kVrms}{\\kRes_{\\text{f}} + \\kRes_{\\text{person}}} = \\dfrac{${fmt(VS, 0)}\\ \\text{V}}{${ohmsTex(Rf)} + ${ohmsTex(Rp)}} = ${ampsTex(Iperson)}`,
      on
        ? 'The person, at ' + ohms(Rp) + ', takes ' + amps(Iperson) + ' of that, while the ' + amps(Ishort) + ' in the short is ' + (trips ? 'far past' : 'still under') + ' the ' + fmt(RATE, 1) + ' A rating, so the breaker ' + (trips ? 'opens and the appliance must be repaired' : 'holds and the fault goes unnoticed') + '.'
        : 'The appliance may go on working perfectly while this is true, which is why the fault is so dangerous: nothing announces it until somebody completes the circuit to earth.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 23.33: the emf that the alternating current in an appliance
   induces on its own case, and the leakage current it drives through
   anyone touching it. The book gives that emf no number, so the slider
   carries it and the readout says what it drives. Still: what the section
   asks the reader to compare is two arrangements of one circuit, not the
   passage of a cycle, and a transport here would animate a quantity the
   book never states.
===================================================================== */
(function () {
  const H = 700;
  const d = sim('sim-case-emf', H);
  const grounded = choice(d.controls, {
    label: '\\text{the case is}',
    options: [{ value: 'no', label: 'not grounded' }, { value: 'yes', label: 'grounded' }],
    value: 'no', aria: 'whether the case is grounded',
  });
  const eS = ctl(d.controls, { label: '\\kemf_{\\text{case}}', cls: 'voltage', min: 0, max: 24, step: 0.5, value: 12, unit: 'V', dec: 1, aria: 'the emf induced on the case' });
  const pS = ctl(d.controls, { label: '\\kRes_{\\text{person}}', cls: 'resistance', min: 1, max: 100, step: 0.5, value: 3, unit: 'kΩ', dec: 2, aria: 'the resistance of the person to earth/ground' });
  const SAFE = 0.005;                   /* the accepted maximum harmless shock */
  const LIVE = 180, NEUT = 510, AX = 700;
  const CL = 620, CT = 220, CR = 960, CB = 440;

  function draw() {
    const { ctx } = begin(d.c);
    const on = grounded.value === 'yes', E = eS.v, Rp = pS.v * 1000;
    const Vcase = on ? 0 : E, Ileak = Vcase / Rp;
    const cV = C('voltage'), cI = C('current'), cR = C('resistance');

    /* the appliance on its supply */
    wires(ctx, [[140, 278], [140, LIVE], [AX, LIVE], [AX, 252]]);
    wires(ctx, [[AX, 348], [AX, NEUT], [140, NEUT], [140, 362]]);
    caseBox(ctx, CL, CT, CR, CB, false);
    zig(ctx, AX, 300, Math.PI / 2);
    acSource(ctx, 140, 320, 42);
    tag(ctx, fmt(VS, 0) + ' V', 140, 404, cV);
    wires(ctx, [[300, NEUT], [300, 590]]); node(ctx, 300, NEUT); earth(ctx, 300, 590);
    flow(ctx, 460, LIVE, 1, 0);
    flow(ctx, 460, NEUT, -1, 0);
    tag(ctx, 'the alternating current in the appliance', 470, LIVE - 40, cI, { size: 20 });
    tag(ctx, 'the appliance', 740, 300, PAL.ink, { align: 'left' });
    tag(ctx, 'the case of the appliance', 760, CT - 26, PAL.ink);

    /* the emf induced on the case, drawn as a source on its wall */
    wires(ctx, [[CR, 320], [1000, 320]]);
    acSource(ctx, 1020, 320, 22);
    tag(ctx, 'the emf induced on the case', 1090, 214, PAL.ink, { size: 20 });
    tag(ctx, fmt(E, 1) + ' V', 1090, 250, cV);

    /* the person holding it, and the earth under them */
    const PX = 1180, PY = 600, S = 2.1;
    groundLine(ctx, 1000, 1400, PY + 2);
    earth(ctx, 1320, PY + 16);
    silhouette(ctx, { x: PX, y: PY, s: S, face: -1, pose: 'stand', color: PAL.ink, hands: [{ x: 60, y: -120 }, { x: -18, y: -76 }] });
    tag(ctx, 'the person, ' + ohms(Rp), PX, 660, cR, { size: 20 });

    /* the earth/ground wire, where the case has one */
    if (on) {
      wires(ctx, [[900, CB], [900, 560]]); node(ctx, 900, CB, 6); earth(ctx, 900, 560);
      tag(ctx, 'the earth/ground wire', 890, 620, PAL.ink, { size: 20 });
      flow(ctx, 900, 500, 0, 1, 44);
    }

    /* the leakage current through the person */
    if (!on && Ileak > 0) {
      flow(ctx, 1072, 330, 1, 0, 40);
      flow(ctx, 1178, 556, 0, 1, 44);
      tag(ctx, amps(Ileak), 1090, 386, cI, { align: 'right' });
    } else if (!on) {
      tag(ctx, 'nothing at all', 1090, 386, cI, { align: 'right' });
    } else {
      tag(ctx, 'nothing through the person', 1090, 386, cI, { align: 'right', size: 20 });
    }

    topline(ctx, on
      ? 'The earth/ground wire holds the case at zero volts, so the ' + fmt(E, 1) + ' V induced on it drives its leakage current down that wire and nothing whatever through the person.'
      : Ileak > SAFE
        ? 'An emf of ' + fmt(E, 1) + ' V induced on an ungrounded case drives ' + amps(Ileak) + ' through a person holding it, which is past the 5 mA taken to be the largest harmless shock.'
        : 'An emf of ' + fmt(E, 1) + ' V induced on an ungrounded case drives ' + amps(Ileak) + ' through a person holding it, which is under the 5 mA taken to be the largest harmless shock.');
    readout(d.readout,
      on
        ? `\\kV_{\\text{case}} = 0,\\qquad \\kIcur_{\\text{leak}} = 0`
        : `\\kIcur_{\\text{leak}} = \\dfrac{\\kemf_{\\text{case}}}{\\kRes_{\\text{person}}} = \\dfrac{${fmt(E, 1)}\\ \\text{V}}{${ohmsTex(Rp)}} = ${ampsTex(Ileak)}`,
      on
        ? 'The case is a conductor joined to the earth, and a conductor joined to the earth is at the earth’s own potential, so there is no voltage across the person at all.'
        : 'Current does not have to pass from the appliance to the case for this to happen: the alternating current in the appliance induces the emf, and the person offers it the only path to earth there is.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 23.34 + 23.35: the ground fault interrupter. The book draws the
   same device twice, once far enough away to show the hazardous path and
   once close enough to show the two wires threaded through the core, and
   the two are folded here into one drawing that carries both, since the
   comparison the device makes is only legible when the circuit and the
   core are seen together. The field inside the core is drawn because it
   is what vanishes when the two currents are equal; it is the one thing
   on this page that binds the magnetic field. Still: the comparison is of
   two currents at one moment, and the trip is a threshold.
===================================================================== */
(function () {
  const H = 730;
  const d = sim('sim-gfi', H);
  const path = choice(d.controls, {
    label: '\\text{the leakage}',
    options: [{ value: 'person', label: 'through a person' }, { value: 'earth', label: 'down the earth wire' }],
    value: 'person', aria: 'where the leakage current goes',
  });
  const iS = ctl(d.controls, { label: '\\kIcur', cls: 'current', min: 0, max: 15, step: 0.1, value: 10, unit: 'A', dec: 3, aria: 'the current the appliance draws' });
  const lS = ctl(d.controls, { label: '\\kIcur_{\\text{leak}}', cls: 'current', min: 0, max: 20, step: 0.25, value: 8, unit: 'mA', dec: 2, aria: 'the leakage current' });
  const TRIP = 0.005;                  /* the difference a GFI is set to act on */
  const LIVE = 190, NEUT = 520, KX = 430, KY = 355;
  const CL = 940, CT = 230, CR = 1170, CB = 430, RX = 1055;

  function draw() {
    const { ctx } = begin(d.c);
    const person = path.value === 'person';
    const I = iS.v, leak = lS.v / 1000, back = Math.max(0, I - leak), trips = leak > TRIP;
    const cV = C('voltage'), cI = C('current'), cR = C('resistance'), cB = C('magnetic-field');

    /* the two wires, brought together to pass through the core and parted again */
    acSource(ctx, 130, 340, 42);
    wires(ctx, [[130, 298], [130, LIVE], [300, LIVE], [360, 330], [500, 330], [560, LIVE], [RX, LIVE], [RX, CT + 52]]);
    wires(ctx, [[RX, 378], [RX, NEUT], [560, NEUT], [500, 380], [360, 380], [300, NEUT], [130, NEUT], [130, 382]]);
    tag(ctx, fmt(VS, 0) + ' V', 130, 424, cV);

    /* the iron core, with its hole and the sensing coil wound on it */
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.fillStyle = PAL.soft;
    ctx.beginPath(); ctx.arc(KX, KY, 120, 0, TAU); ctx.arc(KX, KY, 62, 0, TAU, true); ctx.fill();
    ctx.beginPath(); ctx.arc(KX, KY, 120, 0, TAU); ctx.stroke();
    ctx.beginPath(); ctx.arc(KX, KY, 62, 0, TAU); ctx.stroke(); ctx.restore();
    /* the coil: turns laid across the ring on its upper left */
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.lineCap = 'round';
    for (let i = 0; i <= 6; i++) {
      const a = Math.PI * (1.30 + 0.041 * i);
      ctx.beginPath();
      ctx.moveTo(KX + 50 * Math.cos(a), KY + 50 * Math.sin(a));
      ctx.lineTo(KX + 132 * Math.cos(a), KY + 132 * Math.sin(a));
      ctx.stroke();
    }
    ctx.restore();
    wires(ctx, [[KX + 132 * Math.cos(Math.PI * 1.546), KY + 132 * Math.sin(Math.PI * 1.546)], [470, 168]]);
    wires(ctx, [[KX + 132 * Math.cos(Math.PI * 1.30), KY + 132 * Math.sin(Math.PI * 1.30)], [352, 168]]);

    /* the breaker the coil operates */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.roundRect(340, 92, 200, 76, 10); ctx.fill(); ctx.stroke(); ctx.restore();
    tag(ctx, 'circuit breaker', 440, 118, PAL.ink, { size: 20 });
    tag(ctx, trips ? 'tripped' : 'holding', 440, 148, trips ? cI : PAL.muted, { size: 19, weight: 400 });
    wires(ctx, [[470, 168], [470, 190]]);

    /* the field the two wires raise inside the core, which is nothing at all
       while the currents match */
    if (leak > 1e-6) {
      const f = Math.min(1, leak / 0.02), a0 = -0.6, a1 = a0 + 1.2 + 2.6 * f;
      ctx.save(); ctx.strokeStyle = cB; ctx.lineWidth = 6;
      ctx.beginPath(); ctx.arc(KX, KY, 91, a0, a1); ctx.stroke(); ctx.restore();
      const hx = KX + 91 * Math.cos(a1), hy = KY + 91 * Math.sin(a1);
      arrow(ctx, hx - 26 * Math.cos(a1 + Math.PI / 2), hy - 26 * Math.sin(a1 + Math.PI / 2), hx, hy, cB, 5);
      tag(ctx, 'a field in the core', KX, KY + 168, cB, { size: 20 });
    } else {
      tag(ctx, 'no field in the core', KX, KY + 168, PAL.muted, { size: 20, weight: 400 });
    }
    tag(ctx, 'the sensing coil', 250, 250, PAL.ink, { align: 'right', size: 20 });
    tag(ctx, 'the iron core', KX + 150, KY + 96, PAL.ink, { align: 'left', size: 20 });

    /* the appliance */
    caseBox(ctx, CL, CT, CR, CB, false);
    zig(ctx, RX, 330, Math.PI / 2);
    tag(ctx, 'the appliance', RX, CB + 32, PAL.ink);

    /* the two currents, and the leakage that makes them differ */
    flow(ctx, 760, LIVE, 1, 0);
    flow(ctx, 760, NEUT, -1, 0);
    tag(ctx, 'the live/hot wire', 700, LIVE - 38, PAL.ink, { size: 20 });
    tag(ctx, fmt(I, 3) + ' A', 890, LIVE - 38, cI);
    tag(ctx, 'the neutral wire', 700, NEUT + 40, PAL.ink, { size: 20 });
    tag(ctx, fmt(back, 3) + ' A', 890, NEUT + 40, cI);

    if (person) {
      const PX = 1290, PY = 660, S = 2;
      groundLine(ctx, 1150, 1400, PY + 2);
      silhouette(ctx, { x: PX, y: PY, s: S, face: -1, pose: 'stand', color: PAL.ink, hands: [{ x: 56, y: -122 }, { x: -20, y: -76 }] });
      if (leak > 1e-6) { flow(ctx, 1216, 392, 1, 0, 40); flow(ctx, 1288, 600, 0, 1, 44); }
      tag(ctx, 'the person, a path to earth', 1392, 702, cR, { size: 20, align: 'right' });
      if (leak > 1e-6) tag(ctx, amps(leak), 1230, 480, cI, { align: 'right' });
    } else {
      wires(ctx, [[CR, 400], [1310, 400], [1310, 600]]); earth(ctx, 1310, 600);
      if (leak > 1e-6) flow(ctx, 1310, 520, 0, 1, 44);
      tag(ctx, 'the earth/ground wire', 1392, 666, PAL.ink, { size: 20, align: 'right' });
      if (leak > 1e-6) tag(ctx, amps(leak), 1262, 520, cI, { align: 'right' });
    }

    topline(ctx, leak > 1e-6
      ? 'The live/hot wire carries ' + fmt(I, 3) + ' A and the neutral wire ' + fmt(back, 3) + ' A, a difference of ' + amps(leak) + ', so a field appears in the core and the interrupter ' + (trips ? 'opens the circuit' : 'is not yet set to act') + '.'
      : 'Every ampere that leaves by the live/hot wire returns by the neutral wire, so the two emfs in the coil cancel exactly, there is no field in the core, and nothing happens.');
    readout(d.readout,
      `\\kIcur_{\\text{live}} - \\kIcur_{\\text{neutral}} = ${fmt(I, 3)}\\ \\text{A} - ${fmt(back, 3)}\\ \\text{A} = ${ampsTex(leak)}`,
      leak > 1e-6
        ? 'A GFI is set to act on a difference greater than 5 mA, the accepted maximum harmless shock, so this one ' + (trips ? 'interrupts the circuit, whether the leakage is going through a person or safely to earth' : 'lets the circuit stand, since the difference has not yet reached what it is set for') + '.'
        : 'The two wires are threaded through the same coil in opposite directions, so it is their difference and not either current itself that the device can see.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 23.36: the isolation transformer. Its two windings carry the
   same number of turns, so the appliance receives what it always
   received; what has changed is that neither output wire is joined to
   the original source or to the earth, and a person holding one of them
   is part of no complete circuit. Still: the appliance runs and the
   person stands there, and the question is what is joined to what.
===================================================================== */
(function () {
  const H = 780;
  const d = sim('sim-isolation', H);
  const iso = choice(d.controls, {
    label: '\\text{the appliance is run}',
    options: [{ value: 'yes', label: 'through the transformer' }, { value: 'no', label: 'straight from the source' }],
    value: 'yes', aria: 'whether the isolation transformer is in the supply',
  });
  const nS = ctl(d.controls, { label: '\\kRes_{\\text{ins}}', cls: 'resistance', min: 10, max: 500, step: 10, value: 100, unit: 'MΩ', dec: 0, aria: 'the resistance of the material between the coils' });
  const pS = ctl(d.controls, { label: '\\kRes_{\\text{person}}', cls: 'resistance', min: 1, max: 100, step: 0.5, value: 3, unit: 'kΩ', dec: 2, aria: 'the resistance of the person to earth/ground' });
  const RAPP = 12;                     /* the appliance, the same 12.0 Ω one the page has drawn throughout */
  const TOP = 180, BOT = 560, RX = 1080;
  const CL = 900, CT = 225, CR = 1260, CB = 415;

  function draw() {
    const { ctx } = begin(d.c);
    const on = iso.value === 'yes', Rins = nS.v * 1e6, Rp = pS.v * 1000;
    const Iperson = on ? VS / (Rins + Rp) : VS / Rp, Iapp = VS / RAPP;
    const cV = C('voltage'), cI = C('current'), cR = C('resistance');

    acSource(ctx, 130, 330, 42);
    tag(ctx, fmt(VS, 0) + ' V', 130, 414, cV);
    breaker(ctx, 280, TOP, true);
    tag(ctx, 'circuit breaker', 280, TOP - 62, PAL.muted, { size: 19, weight: 400 });

    if (on) {
      /* the primary, the core and the secondary */
      wires(ctx, [[130, 288], [130, TOP], [440, TOP], [440, 250]]);
      coil(ctx, 440, 250, 470, 6, -1);
      wires(ctx, [[440, 470], [440, 620], [130, 620], [130, 372]]);
      node(ctx, 300, 620); earth(ctx, 300, 620);
      ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.rect(478, 220, 44, 280); ctx.fill(); ctx.stroke(); ctx.restore();
      line(ctx, 500, 220, 500, 500, alpha(PAL.ink, 0.35), 2);
      coil(ctx, 560, 250, 470, 6, 1);
      wires(ctx, [[560, 250], [620, 250], [620, TOP], [RX, TOP], [RX, CT + 47]]);
      wires(ctx, [[RX, 368], [RX, BOT], [620, BOT], [620, 470], [560, 470]]);
      tag(ctx, 'the primary', 386, 360, PAL.ink, { align: 'right', size: 20 });
      tag(ctx, 'the secondary', 614, 360, PAL.ink, { align: 'left', size: 20 });
      line(ctx, 500, 505, 500, 528, alpha(PAL.ink, 0.35), 2);
      tag(ctx, ohms(Rins), 500, 545, cR, { size: 21 });
      tag(ctx, 'the material between the coils', 500, 580, PAL.ink, { size: 20 });
      tag(ctx, 'equal numbers of turns, so the appliance receives what it always received', 500, 700, PAL.muted, { size: 19, weight: 400 });
    } else {
      wires(ctx, [[130, 288], [130, TOP], [RX, TOP], [RX, CT + 47]]);
      wires(ctx, [[RX, 368], [RX, BOT], [130, BOT], [130, 372]]);
      wires(ctx, [[300, BOT], [300, 620]]); node(ctx, 300, BOT); earth(ctx, 300, 620);
      tag(ctx, 'the source is earthed, and so the person is part of a circuit', 560, 650, PAL.muted, { size: 20, weight: 400 });
    }

    /* the appliance, which runs the same either way */
    caseBox(ctx, CL, CT, CR, CB, false);
    zig(ctx, RX, 320, Math.PI / 2);
    tag(ctx, 'the case of the appliance', RX, CT - 26, PAL.ink);
    tag(ctx, 'the appliance', 1040, 320, PAL.ink, { align: 'right' });
    flow(ctx, 820, TOP, 1, 0);
    flow(ctx, 820, BOT, -1, 0);
    tag(ctx, amps(Iapp), 820, TOP - 38, cI);

    /* the person, holding one output wire */
    const PX = 1180, PY = 700, S = 1.8;
    groundLine(ctx, 1040, 1400, PY + 2);
    earth(ctx, 1350, PY + 16);
    silhouette(ctx, { x: PX, y: PY, s: S, face: -1, pose: 'stand', color: PAL.ink, hands: [{ x: 53, y: -128 }, { x: -20, y: -76 }] });
    tag(ctx, 'the person, ' + ohms(Rp), PX, 740, cR, { size: 20 });
    flow(ctx, 1122, 464, 1, 0, 40); flow(ctx, 1178, 650, 0, 1, 44);
    tag(ctx, amps(Iperson), 1290, 470, cI, { align: 'right' });

    topline(ctx, on
      ? 'Through the isolation transformer the person holding one output wire takes ' + amps(Iperson) + ', while the appliance goes on drawing ' + amps(Iapp) + ' exactly as before.'
      : 'Run straight from the earthed source, the same person holding the same wire is part of a complete circuit and takes ' + amps(Iperson) + ', which is a dangerous shock.');
    readout(d.readout,
      on
        ? `\\kIcur_{\\text{person}} = \\dfrac{\\kVrms}{\\kRes_{\\text{ins}} + \\kRes_{\\text{person}}} = \\dfrac{${fmt(VS, 0)}\\ \\text{V}}{${ohmsTex(Rins)} + ${ohmsTex(Rp)}} = ${ampsTex(Iperson)}`
        : `\\kIcur_{\\text{person}} = \\dfrac{\\kVrms}{\\kRes_{\\text{person}}} = \\dfrac{${fmt(VS, 0)}\\ \\text{V}}{${ohmsTex(Rp)}} = ${ampsTex(Iperson)}`,
      on
        ? 'For current to flow through the person it must first cross the material between the coils, and that resistance is so much the larger of the two that it settles the whole answer.'
        : 'Neither output wire of an isolation transformer is earthed, which is the whole of the difference: here one of them is, and the earth under the person’s feet completes the circuit.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
