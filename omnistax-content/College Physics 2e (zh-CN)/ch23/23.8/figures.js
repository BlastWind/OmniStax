/* Figures for section 23.8 Electrical Safety: Systems and Devices.
   Every figure here is a wiring diagram, and a fault is a state and not a
   process, so all six are still pictures: none registers a cycle, none carries
   a transport, and a slider or a choice alone redraws it (rule 14, and the
   chapter's config, which makes that decision for the whole of this section).
   The page binds voltage, current and resistance, which is what ch23/COLOR.md
   gives 23.8, and `sim-gfi` binds the magnetic field as well, for the field the
   live and neutral wires raise inside the sensing coil's core; the plan says so
   and the chapter pass is asked to widen the colour plan's line. The things the text
   names throughout the section are its referents, all indexed on the first
   figure so that no two of them share a colour on any figure that draws both:
   the live/hot, neutral and earth/ground wires, the circuit breaker, the case,
   the appliance, the person, the plug, the GFI's sensing coil and the isolation
   transformer, each drawn in its referent colour through F.ref. The outlet, the
   cores, the source, the earth connections and the pipe stay ink. What wears a
   hue as a quantity is the voltage a
   conductor sits at, the current along a wire, the resistance of the appliance,
   of an earth/ground wire, of a person and of the material between a
   transformer's coils. Insulation is never drawn in its colour code, since the
   section's own note is that the codes differ from one region to another; the
   conductors are told apart by their names and their referent colours. Nothing in any scene moves and no
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
const wires = (ctx, pts, color) => { for (let i = 1; i < pts.length; i++) line(ctx, pts[i - 1][0], pts[i - 1][1], pts[i][0], pts[i][1], color || PAL.ink, WIRE); };
/* the three conductors the text names, each in its referent colour */
const LIVE_C = () => F.ref('live-wire'), NEUT_C = () => F.ref('neutral-wire'), EARTH_C = () => F.ref('earth-wire');
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
  ctx.strokeStyle = F.ref('appliance'); ctx.lineWidth = WIRE; ctx.lineJoin = 'miter';
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
  const bc = F.ref('breaker');
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = bc; ctx.lineWidth = 3; ctx.lineJoin = 'round';
  ctx.beginPath(); ctx.roundRect(x - 52, y - 32, 104, 64, 8); ctx.fill(); ctx.stroke(); ctx.restore();
  node(ctx, x - 30, y, 6); node(ctx, x + 30, y, 6);
  if (closed) line(ctx, x - 30, y, x + 30, y - 7, bc, 4);
  else line(ctx, x - 30, y, x + 16, y - 26, bc, 4);
}
/* the case round an appliance. A metal case is one stroke; a nonconducting one
   is drawn with a second outline inside it, as a doubly insulated tool has. */
function caseBox(ctx, l, t, r, b, insulated) {
  ctx.save(); ctx.strokeStyle = F.ref('case'); ctx.lineWidth = 3; ctx.lineJoin = 'round';
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
function coil(ctx, x, y1, y2, n, side, color) {
  const h = (y2 - y1) / n, r = 26 * (side || 1);
  ctx.save(); ctx.strokeStyle = color || PAL.ink; ctx.lineWidth = 3.5; ctx.lineCap = 'round';
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
    label: '\\text{布线方式}',
    options: [{ value: 'two', label: '没有安全装置' }, { value: 'three', label: '三线制' }],
    value: 'three', aria: '用电器采用哪种布线',
  });
  const rS = ctl(d.controls, { label: '\\kRes', cls: 'resistance', min: 4, max: 120, step: 1, value: 12, unit: 'Ω', dec: 1, aria: '用电器的电阻' });
  const bS = ctl(d.controls, {
    label: '\\text{断路器}', cls: 'current', min: 10, max: 30, step: 1, value: 20, unit: 'A', dec: 0,
    detents: [15, 20, 30], snap: true, aria: '断路器的额定电流',
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
    wires(ctx, [[SX, SY - 44], [SX, LIVE], [RX, LIVE], [RX, CT + 22]], LIVE_C());
    wires(ctx, [[RX, 368], [RX, NEUT], [SX, NEUT], [SX, SY + 44]], NEUT_C());
    const a3 = mode.a('three'), a2 = mode.a('two');
    F.faded(ctx, a3, [0, 0], () => caseBox(ctx, CL, CT, CR, CB, false));
    zig(ctx, RX, 320, Math.PI / 2);
    acSource(ctx, SX, SY, 44);
    tag(ctx, fmt(VS, 0) + ' V', SX, SY + 78, cV);
    F.faded(ctx, a3, [0, 0], () => breaker(ctx, 420, LIVE, !open));

    /* the current, where the breaker has not taken it away */
    if (!open) {
      flow(ctx, 790, LIVE, 1, 0);
      flow(ctx, 640, NEUT, -1, 0);
      tag(ctx, amps(I), 880, LIVE - 38, cI);
    } else {
      tag(ctx, '完全没有电流', 880, LIVE - 38, cI);
    }

    /* the names of the conductors, and the voltages the three-wire system holds
       them at */
    tag(ctx, three ? '火线' : '来自电源的导线', three ? 640 : 430, LIVE - 38, LIVE_C());
    tag(ctx, three ? '中性线' : '返回导线', 430, NEUT - 38, NEUT_C());
    tag(ctx, '用电器', 1060, 300, F.ref('appliance'), { align: 'right' });
    tag(ctx, ohms(R, 1), 1060, 340, cR, { align: 'right', weight: 400 });

    F.faded(ctx, a3, [0, 0], () => {
      tag(ctx, '断路器', 420, LIVE + 62, F.ref('breaker'), { size: 19, weight: 400 });
      tag(ctx, '用电器的外壳', 1030, CT - 26, F.ref('case'));
      /* the three connections to earth: two on the neutral wire and one on the case */
      wires(ctx, [[280, NEUT], [280, 580]]); node(ctx, 280, NEUT); earth(ctx, 280, 580);
      wires(ctx, [[700, NEUT], [700, 580]]); node(ctx, 700, NEUT); earth(ctx, 700, 580);
      wires(ctx, [[CR, 390], [1300, 390], [1300, 580]], EARTH_C()); earth(ctx, 1300, 580);
      tag(ctx, '0 V', 480, NEUT + 40, cV);
      tag(ctx, '0 V', 1190, 410, cV, { align: 'right' });
      tag(ctx, '地线', 1390, 648, EARTH_C(), { align: 'right', size: 20 });
      /* the earth itself as the alternative return path the section names */
      line(ctx, 280, 620, 700, 620, alpha(PAL.ink, 0.35), 3, [12, 10]);
      tag(ctx, '经大地的另一条返回路径', 490, 652, PAL.muted, { size: 19, weight: 400 });
    });
    F.faded(ctx, a2, [0, 0], () => tag(ctx, '没有断路器 · 没有外壳 · 没有与地的连接', 620, 600, PAL.muted, { size: 20, weight: 400 }));

    topline(ctx, three
      ? open
        ? '用电器要取用 ' + amps(I) + '，电源为 ' + fmt(VS, 0) + ' V，这超过了 ' + fmt(rate, 0) + ' A 断路器所能承载的电流，所以断路器已断开，完全没有电流流动。'
        : '用电器取用 ' + amps(I) + '，电源为 ' + fmt(VS, 0) + ' V，' + fmt(rate, 0) + ' A 断路器承载得了它，中性线和外壳都保持在零伏。'
      : '用电器取用 ' + amps(I) + '，电源为 ' + fmt(VS, 0) + ' V，这个电路中没有任何东西限制这个电流，也没有东西使用电器的外壳不处在电流之中。');
    readout(d.readout,
      `\\kIcur = \\dfrac{\\kVrms}{\\kRes} = \\dfrac{${fmt(VS, 0)}\\ \\text{V}}{${ohmsTex(R, 1)}} = ${ampsTex(I)}${three && open ? `\\ > ${fmt(rate, 0)}\\ \\text{A，所以断路器断开}` : ''}`,
      three
        ? open
          ? '断路器串联在火线上，所以它一断开，整个电路中的电流就都没有了，这正是保护导线不致过热的原因。'
          : '中性线上的两处与地的连接迫使它处于零伏，第三处则迫使外壳也处于零伏，所以触摸其中任何一个的人都不在电路中。'
        : '如果用电器取用的电流超过导线所能承载的，没有断路器可断开，也没有地线把用电器的外壳保持在零伏。');
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
    label: '\\text{插头}',
    options: [{ value: 'three', label: '三个插脚' }, { value: 'two', label: '两个插脚，双重绝缘' }, { value: 'cut', label: '第三个插脚被剪掉' }],
    value: 'three', aria: '用电器带的是哪种插头',
  });
  const LIVE = 210, NEUT = 330, GND = 450;
  const OL = 520, OR = 645, PL = 660, PR = 790;
  const CL = 1010, CT = 150, CR = 1340, CB = 390, RX = 1175;

  function draw() {
    const { ctx } = begin(d.c);
    const k = kind.value, three = k === 'three', two = k === 'two';
    const a3 = kind.a('three'), a2 = kind.a('two'), aCut = kind.a('cut'), aGnd = 1 - a2;   /* the earth run is there for every plug but the two-prong one */
    const cV = C('voltage'), cI = C('current');

    /* behind the wall: the source, the breaker and the three runs to the outlet */
    acSource(ctx, 150, 270, 40);
    wires(ctx, [[150, 230], [150, LIVE], [OL, LIVE]], LIVE_C());
    wires(ctx, [[150, 310], [150, NEUT], [OL, NEUT]], NEUT_C());
    wires(ctx, [[250, NEUT], [250, 404]]); node(ctx, 250, NEUT); earth(ctx, 250, 404);
    breaker(ctx, 330, LIVE, true);
    F.faded(ctx, aGnd, [0, 0], () => { wires(ctx, [[400, 530], [400, GND], [OL, GND]], EARTH_C()); earth(ctx, 400, 530); });
    tag(ctx, fmt(VS, 0) + ' V', 95, 270, cV, { align: 'right' });
    tag(ctx, '断路器', 330, LIVE - 62, F.ref('breaker'), { size: 19, weight: 400 });

    /* the outlet: a faceplate with two slots and a round hole */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.roundRect(OL, 160, OR - OL, 350, 14); ctx.fill(); ctx.stroke(); ctx.restore();
    [LIVE, NEUT].forEach((y) => {
      ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.roundRect(566, y - 22, 16, 44, 6); ctx.fill(); ctx.stroke(); ctx.restore();
    });
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.arc(574, GND, 17, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
    F.faded(ctx, aGnd, [0, 0], () => wires(ctx, [[OL, GND], [557, GND]], EARTH_C()));

    /* the plug and its prongs */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = F.ref('plug'); ctx.lineWidth = 3; ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.roundRect(PL, 175, PR - PL, 320, 16); ctx.fill(); ctx.stroke(); ctx.restore();
    [LIVE, NEUT].forEach((y) => line(ctx, PL, y, 574, y, PAL.ink, 8));
    F.faded(ctx, a3, [0, 0], () => line(ctx, PL, GND, 574, GND, PAL.ink, 8));
    F.faded(ctx, aCut, [0, 0], () => { line(ctx, PL, GND, PL - 18, GND, PAL.ink, 8); broken(ctx, PL - 34, GND, true); });

    /* the cord and the appliance */
    wires(ctx, [[PR, LIVE], [RX, LIVE], [RX, CT + 72]], LIVE_C());
    wires(ctx, [[RX, 318], [RX, NEUT], [PR, NEUT]], NEUT_C());
    caseBox(ctx, CL, CT, CR, CB, two);
    zig(ctx, RX, 270, Math.PI / 2);
    F.faded(ctx, aGnd, [0, 0], () => { wires(ctx, [[PR, GND], [RX, GND], [RX, CB]], EARTH_C()); node(ctx, RX, CB); });
    flow(ctx, 960, LIVE, 1, 0);
    flow(ctx, 960, NEUT, -1, 0);
    tag(ctx, '10.0 A', 960, 265, cI);

    /* the names */
    tag(ctx, '插座', 582, 136, PAL.ink, { size: 20 });
    tag(ctx, '插头', 725, 530, F.ref('plug'), { size: 20 });
    tag(ctx, '火线', 895, LIVE - 36, LIVE_C(), { size: 20 });
    tag(ctx, '中性线', 895, NEUT + 38, NEUT_C(), { size: 20 });
    F.faded(ctx, a3, [0, 0], () => tag(ctx, '地线', 905, GND + 40, EARTH_C(), { size: 20 }));
    F.faded(ctx, a2, [0, 0], () => tag(ctx, '没有地线；外壳不导电', 1120, GND + 46, PAL.muted, { size: 20, weight: 400 }));
    F.faded(ctx, aCut, [0, 0], () => tag(ctx, '地线，未接到任何大地', 990, GND + 40, PAL.muted, { size: 20, weight: 400 }));
    tag(ctx, two ? '不导电的外壳' : '用电器的金属外壳', RX, CT - 26, F.ref('case'));
    tag(ctx, '用电器', 1145, 250, F.ref('appliance'), { align: 'right' });

    topline(ctx, three
      ? '三脚插头把火线、中性线和地线都送到用电器，其中第三根使金属外壳保持在零伏。'
      : two
        ? '双重绝缘用电器的外壳不导电，所以不需要地线，它的插头只有两个插脚。'
        : '第三个插脚已被剪掉，所以地线仍然通到用电器的外壳，却没有接到大地，外壳没有被保持在任何电压上。');
    readout(d.readout,
      three ? '\\kV_{\\text{case}} = \\kV_{\\text{neutral}} = 0' : `\\kV_{\\text{live}} = ${fmt(VS, 0)}\\ \\text{V}`,
      three
        ? '插头只能以一种方向插入，所以火线总是到达用电器的同一个接线端，地线总是到达外壳。'
        : two
          ? '抗冲击塑料外壳不会因绝缘层磨损而进入电路，这就是这类电动工具可以放心地配两个插脚出售的原因。'
          : '用电器照常运转，这就是这种故障很容易被将就忍受的原因：在火线碰到外壳之前，什么迹象也没有。');
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
    label: '\\text{地线}',
    options: [{ value: 'broken', label: '断开' }, { value: 'intact', label: '完好' }],
    value: 'intact', aria: '地线是否完好',
  });
  const fS = ctl(d.controls, { label: '\\kRes_{\\text{f}}', cls: 'resistance', min: 0.5, max: 5, step: 0.05, value: 1.4, unit: 'Ω', dec: 2, aria: '磨损接触处的电阻' });
  const gS = ctl(d.controls, { label: '\\kRes_{\\text{g}}', cls: 'resistance', min: 0.05, max: 1, step: 0.005, value: 0.2, unit: 'Ω', dec: 3, aria: '地线的电阻' });
  const pS = ctl(d.controls, { label: '\\kRes_{\\text{person}}', cls: 'resistance', min: 1, max: 100, step: 0.5, value: 3, unit: 'kΩ', dec: 2, aria: '人对大地的电阻' });
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
    wires(ctx, [[140, 298], [140, LIVE], [FX, LIVE], [FX, CT]], LIVE_C());
    wires(ctx, [[FX, 368], [FX, NEUT], [140, NEUT], [140, 382]], NEUT_C());
    caseBox(ctx, CL, CT, CR, CB, false);
    zig(ctx, FX, 320, Math.PI / 2);
    acSource(ctx, 140, 340, 42);
    tag(ctx, fmt(VS, 0) + ' V', 140, 424, cV);
    breaker(ctx, 330, LIVE, !trips);
    tag(ctx, '断路器，' + fmt(RATE, 1) + ' A', 330, LIVE - 58, F.ref('breaker'), { size: 19, weight: 400 });
    wires(ctx, [[300, NEUT], [300, 620]]); node(ctx, 300, NEUT); earth(ctx, 300, 620);

    /* the worn contact where the live/hot wire meets the case */
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(FX, CT, 20, 0, TAU); ctx.stroke(); ctx.restore();
    node(ctx, FX, CT, 8);
    tag(ctx, '绝缘层磨损', 670, CT + 4, PAL.ink, { align: 'right', size: 20 });

    /* the earth/ground wire from the case, intact or cut */
    wires(ctx, [[930, CB], [930, 620]], EARTH_C()); node(ctx, 930, CB, 6); earth(ctx, 930, 620);
    F.faded(ctx, earthed.a('broken'), [0, 0], () => broken(ctx, 930, 545, false));
    tag(ctx, on ? '地线' : '地线，已断开', 930, 666, on ? EARTH_C() : alpha(EARTH_C(), 0.6), { size: 20, weight: on ? 600 : 400 });

    /* the person, one hand on the case and one on a water pipe */
    const PX = 1115, PY = 660, S = 2.4;
    line(ctx, 1250, 180, 1250, 690, PAL.muted, 5);
    line(ctx, 1268, 180, 1268, 690, PAL.muted, 5);
    tag(ctx, '水管，与大地相连', 1259, 152, PAL.muted, { size: 19, weight: 400 });
    groundLine(ctx, 1045, 1400, PY + 2);
    silhouette(ctx, { x: PX, y: PY, s: S, face: -1, pose: 'stand', color: F.ref('person'), hands: [{ x: 52, y: -130 }, { x: -54, y: -120 }] });
    tag(ctx, '人，' + ohms(Rp), PX, 702, cR, { size: 20 });

    /* the fault current: down the earth/ground wire where there is one, and
       through the person either way */
    F.faded(ctx, earthed.a('intact'), [0, 0], () => { flow(ctx, 930, 560, 0, 1, 50); tag(ctx, amps(VS / (Rf + Rg)), 878, 560, cI, { align: 'right' }); });
    flow(ctx, 1035, 318, 1, 0, 44);
    tag(ctx, amps(Iperson), 1035, 280, cI);
    flow(ctx, 1259, 560, 0, 1, 50);

    /* the voltage the case is left at */
    tag(ctx, '金属外壳', 850, CT - 24, F.ref('case'));
    tag(ctx, fmt(Vcase, Vcase < 10 ? 2 : 1) + ' V', 960, 250, cV, { align: 'right' });

    topline(ctx, on
      ? '地线完好时，短路取用 ' + amps(Ishort) + '，这' + (trips ? '超过了' : '仍未超过') + '断路器所能承载的 ' + fmt(RATE, 1) + ' A，而握着外壳的人只承受 ' + amps(Iperson) + '。'
      : '地线断开时，外壳处于 ' + fmt(Vcase, 1) + ' V，人把 ' + amps(Iperson) + ' 的电流带到水管，而断路器纹丝不动。');
    readout(d.readout,
      on
        ? `\\kV_{\\text{case}} = \\kIcur_{\\text{short}}\\kRes_{\\text{g}} = (${fmt(Ishort, 1)}\\ \\text{A})(${ohmsTex(Rg)}) = ${fmt(Vcase, Vcase < 10 ? 2 : 1)}\\ \\text{V}`
        : `\\kIcur_{\\text{person}} = \\dfrac{\\kVrms}{\\kRes_{\\text{f}} + \\kRes_{\\text{person}}} = \\dfrac{${fmt(VS, 0)}\\ \\text{V}}{${ohmsTex(Rf)} + ${ohmsTex(Rp)}} = ${ampsTex(Iperson)}`,
      on
        ? '人的电阻为 ' + ohms(Rp) + '，承受其中的 ' + amps(Iperson) + '，而短路中的 ' + amps(Ishort) + ' ' + (trips ? '超过了' : '仍低于') + '额定值 ' + fmt(RATE, 1) + ' A，所以断路器' + (trips ? '断开，用电器必须修理' : '保持接通，故障无人察觉') + '。'
        : '在这种情况下，用电器可能仍然运转得完全正常，这就是这种故障如此危险的原因：在有人使通向大地的电路闭合之前，没有任何迹象。');
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
    label: '\\text{外壳}',
    options: [{ value: 'no', label: '未接地' }, { value: 'yes', label: '已接地' }],
    value: 'no', aria: '外壳是否接地',
  });
  const eS = ctl(d.controls, { label: '\\kemf_{\\text{case}}', cls: 'voltage', min: 0, max: 24, step: 0.5, value: 12, unit: 'V', dec: 1, aria: '外壳上感应的电动势' });
  const pS = ctl(d.controls, { label: '\\kRes_{\\text{person}}', cls: 'resistance', min: 1, max: 100, step: 0.5, value: 3, unit: 'kΩ', dec: 2, aria: '人对大地的电阻' });
  const SAFE = 0.005;                   /* the accepted maximum harmless shock */
  const LIVE = 180, NEUT = 510, AX = 700;
  const CL = 620, CT = 220, CR = 960, CB = 440;

  function draw() {
    const { ctx } = begin(d.c);
    const on = grounded.value === 'yes', E = eS.v, Rp = pS.v * 1000;
    const Vcase = on ? 0 : E, Ileak = Vcase / Rp;
    const cV = C('voltage'), cI = C('current'), cR = C('resistance');

    /* the appliance on its supply */
    wires(ctx, [[140, 278], [140, LIVE], [AX, LIVE], [AX, 252]], LIVE_C());
    wires(ctx, [[AX, 348], [AX, NEUT], [140, NEUT], [140, 362]], NEUT_C());
    caseBox(ctx, CL, CT, CR, CB, false);
    zig(ctx, AX, 300, Math.PI / 2);
    acSource(ctx, 140, 320, 42);
    tag(ctx, fmt(VS, 0) + ' V', 140, 404, cV);
    wires(ctx, [[300, NEUT], [300, 590]]); node(ctx, 300, NEUT); earth(ctx, 300, 590);
    flow(ctx, 460, LIVE, 1, 0);
    flow(ctx, 460, NEUT, -1, 0);
    tag(ctx, '用电器中的交流电流', 470, LIVE - 40, cI, { size: 20 });
    tag(ctx, '用电器', 740, 300, F.ref('appliance'), { align: 'left' });
    tag(ctx, '用电器的外壳', 760, CT - 26, F.ref('case'));

    /* the emf induced on the case, drawn as a source on its wall */
    wires(ctx, [[CR, 320], [1000, 320]]);
    acSource(ctx, 1020, 320, 22);
    wires(ctx, [[1042, 320], [1118, 320]]);           /* the lead runs on to the hand that holds the case */
    tag(ctx, '外壳上感应的电动势', 1090, 214, PAL.ink, { size: 20 });
    tag(ctx, fmt(E, 1) + ' V', 1090, 250, cV);

    /* the person holding it, and the earth under them */
    const PX = 1180, PY = 600, S = 2.1;
    groundLine(ctx, 1000, 1400, PY + 2);
    earth(ctx, 1320, PY + 16);
    silhouette(ctx, { x: PX, y: PY, s: S, face: -1, pose: 'stand', color: F.ref('person'), hands: [{ x: 60, y: -120 }, { x: -18, y: -76 }] });
    tag(ctx, '人，' + ohms(Rp), PX, 660, cR, { size: 20 });

    /* the earth/ground wire, where the case has one */
    F.faded(ctx, grounded.a('yes'), [0, 0], () => {
      wires(ctx, [[900, CB], [900, 560]], EARTH_C()); node(ctx, 900, CB, 6); earth(ctx, 900, 560);
      tag(ctx, '地线', 890, 620, EARTH_C(), { size: 20 });
      flow(ctx, 900, 500, 0, 1, 44);
    });

    /* the leakage current through the person */
    F.faded(ctx, grounded.a('no'), [0, 0], () => {
      if (E > 0) {
        flow(ctx, 1080, 300, 1, 0, 40);
        flow(ctx, 1178, 556, 0, 1, 44);
        tag(ctx, amps(E / Rp), 1090, 386, cI, { align: 'right' });
      } else tag(ctx, '完全没有', 1090, 386, cI, { align: 'right' });
    });
    F.faded(ctx, grounded.a('yes'), [0, 0], () => tag(ctx, '没有电流通过人体', 1090, 386, cI, { align: 'right', size: 20 }));

    topline(ctx, on
      ? '地线使外壳保持在零伏，所以外壳上感应的 ' + fmt(E, 1) + ' V 驱动它的漏电流沿这根线流下，完全没有电流通过人体。'
      : Ileak > SAFE
        ? '没有接地的外壳上感应出 ' + fmt(E, 1) + ' V 的电动势，驱动 ' + amps(Ileak) + ' 的电流通过握着它的人，这超过了被认为是最大无害电击的 5 mA。'
        : '没有接地的外壳上感应出 ' + fmt(E, 1) + ' V 的电动势，驱动 ' + amps(Ileak) + ' 的电流通过握着它的人，这低于被认为是最大无害电击的 5 mA。');
    readout(d.readout,
      on
        ? '\\kIcur_{\\text{leak}} = 0'
        : `\\kIcur_{\\text{leak}} = \\dfrac{\\kemf_{\\text{case}}}{\\kRes_{\\text{person}}} = \\dfrac{${fmt(E, 1)}\\ \\text{V}}{${ohmsTex(Rp)}} = ${ampsTex(Ileak)}`,
      on
        ? '外壳是与大地相连的导体，而与大地相连的导体处于大地本身的电势，所以人两端根本没有电压。'
        : '要出现这种情况，电流并不一定要从用电器流到外壳：是用电器中的交流电流感应出电动势，而人为它提供了通向大地的唯一路径。');
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
    label: '\\text{漏电}',
    options: [{ value: 'person', label: '通过人体' }, { value: 'earth', label: '沿地线流下' }],
    value: 'person', aria: '漏电流的去向',
  });
  const iS = ctl(d.controls, { label: '\\kIcur', cls: 'current', min: 0, max: 15, step: 0.1, value: 10, unit: 'A', dec: 3, aria: '用电器取用的电流' });
  const lS = ctl(d.controls, { label: '\\kIcur_{\\text{leak}}', cls: 'current', min: 0, max: 20, step: 0.25, value: 8, unit: 'mA', dec: 2, aria: '漏电流' });
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
    wires(ctx, [[130, 298], [130, LIVE], [300, LIVE], [360, 330], [500, 330], [560, LIVE], [RX, LIVE], [RX, CT + 52]], LIVE_C());
    wires(ctx, [[RX, 378], [RX, NEUT], [560, NEUT], [500, 380], [360, 380], [300, NEUT], [130, NEUT], [130, 382]], NEUT_C());
    tag(ctx, fmt(VS, 0) + ' V', 130, 424, cV);

    /* the iron core, with its hole and the sensing coil wound on it */
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.fillStyle = PAL.soft;
    ctx.beginPath(); ctx.arc(KX, KY, 120, 0, TAU); ctx.arc(KX, KY, 62, 0, TAU, true); ctx.fill();
    ctx.beginPath(); ctx.arc(KX, KY, 120, 0, TAU); ctx.stroke();
    ctx.beginPath(); ctx.arc(KX, KY, 62, 0, TAU); ctx.stroke(); ctx.restore();
    /* the coil: turns laid across the ring on its upper left */
    const gc = F.ref('gfi-coil');
    ctx.save(); ctx.strokeStyle = gc; ctx.lineWidth = 3; ctx.lineCap = 'round';
    for (let i = 0; i <= 6; i++) {
      const a = Math.PI * (1.30 + 0.041 * i);
      ctx.beginPath();
      ctx.moveTo(KX + 50 * Math.cos(a), KY + 50 * Math.sin(a));
      ctx.lineTo(KX + 132 * Math.cos(a), KY + 132 * Math.sin(a));
      ctx.stroke();
    }
    ctx.restore();
    wires(ctx, [[KX + 132 * Math.cos(Math.PI * 1.546), KY + 132 * Math.sin(Math.PI * 1.546)], [470, 168]], gc);
    wires(ctx, [[KX + 132 * Math.cos(Math.PI * 1.30), KY + 132 * Math.sin(Math.PI * 1.30)], [352, 168]], gc);

    /* the breaker the coil operates */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = F.ref('breaker'); ctx.lineWidth = 3; ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.roundRect(340, 92, 200, 76, 10); ctx.fill(); ctx.stroke(); ctx.restore();
    tag(ctx, '断路器', 440, 118, F.ref('breaker'), { size: 20 });
    tag(ctx, trips ? '已跳闸' : '保持接通', 440, 148, trips ? cI : PAL.muted, { size: 19, weight: 400 });
    wires(ctx, [[470, 168], [470, 190]]);

    /* the field the two wires raise inside the core, which is nothing at all
       while the currents match */
    if (leak > 1e-6) {
      const f = Math.min(1, leak / 0.02), a0 = -0.6, a1 = a0 + 1.2 + 2.6 * f;
      ctx.save(); ctx.strokeStyle = cB; ctx.lineWidth = 6;
      ctx.beginPath(); ctx.arc(KX, KY, 91, a0, a1); ctx.stroke(); ctx.restore();
      const hx = KX + 91 * Math.cos(a1), hy = KY + 91 * Math.sin(a1);
      arrow(ctx, hx - 26 * Math.cos(a1 + Math.PI / 2), hy - 26 * Math.sin(a1 + Math.PI / 2), hx, hy, cB, 5);
      tag(ctx, '铁芯中的磁场', KX, KY + 168, cB, { size: 20 });
    } else {
      tag(ctx, '铁芯中没有磁场', KX, KY + 168, PAL.muted, { size: 20, weight: 400 });
    }
    tag(ctx, '检测线圈', 250, 250, gc, { align: 'right', size: 20 });
    tag(ctx, '铁芯', KX + 150, KY + 96, PAL.ink, { align: 'left', size: 20 });

    /* the appliance */
    caseBox(ctx, CL, CT, CR, CB, false);
    zig(ctx, RX, 330, Math.PI / 2);
    tag(ctx, '用电器', RX, CB + 32, F.ref('appliance'));

    /* the two currents, and the leakage that makes them differ */
    flow(ctx, 760, LIVE, 1, 0);
    flow(ctx, 760, NEUT, -1, 0);
    tag(ctx, '火线', 700, LIVE - 38, LIVE_C(), { size: 20 });
    tag(ctx, fmt(I, 3) + ' A', 890, LIVE - 38, cI);
    tag(ctx, '中性线', 700, NEUT + 40, NEUT_C(), { size: 20 });
    tag(ctx, fmt(back, 3) + ' A', 890, NEUT + 40, cI);

    F.faded(ctx, path.a('person'), [0, 0], () => {
      const PX = 1290, PY = 660, S = 2;
      groundLine(ctx, 1150, 1400, PY + 2);
      wires(ctx, [[CR, 392], [1232, 392]]);           /* the lead from the case to the hand that holds it */
      silhouette(ctx, { x: PX, y: PY, s: S, face: -1, pose: 'stand', color: F.ref('person'), hands: [{ x: 56, y: -122 }, { x: -20, y: -76 }] });
      if (leak > 1e-6) { flow(ctx, 1200, 372, 1, 0, 40); flow(ctx, 1288, 600, 0, 1, 44); }
      tag(ctx, '人，通向大地的路径', 1392, 702, cR, { size: 20, align: 'right' });
      if (leak > 1e-6) tag(ctx, amps(leak), 1230, 480, cI, { align: 'right' });
    });
    F.faded(ctx, path.a('earth'), [0, 0], () => {
      wires(ctx, [[CR, 400], [1310, 400], [1310, 600]], EARTH_C()); earth(ctx, 1310, 600);
      if (leak > 1e-6) flow(ctx, 1310, 520, 0, 1, 44);
      tag(ctx, '地线', 1392, 666, EARTH_C(), { size: 20, align: 'right' });
      if (leak > 1e-6) tag(ctx, amps(leak), 1262, 520, cI, { align: 'right' });
    });

    topline(ctx, leak > 1e-6
      ? '火线中的电流为 ' + fmt(I, 3) + ' A，中性线中为 ' + fmt(back, 3) + ' A，差值为 ' + amps(leak) + '，所以铁芯中出现磁场，保护器' + (trips ? '切断电路' : '尚未达到动作的设定值') + '。'
      : '从火线流出的每一安培电流都从中性线返回，所以线圈中的两个电动势恰好抵消，铁芯中没有磁场，什么也不会发生。');
    readout(d.readout,
      `\\kIcur_{\\text{live}} - \\kIcur_{\\text{neutral}} = ${fmt(I, 3)}\\ \\text{A} - ${fmt(back, 3)}\\ \\text{A} = ${ampsTex(leak)}`,
      leak > 1e-6
        ? 'GFI 设定为在差值大于 5 mA（公认的最大无害电击）时动作，所以这个 GFI' + (trips ? '会切断电路，无论漏电是通过人体还是安全地流入大地' : '让电路保持原状，因为差值尚未达到它的设定值') + '。'
        : '两根导线以相反的方向穿过同一个线圈，所以这个装置能够看到的是二者的差值，而不是其中任何一个电流本身。');
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
  const iso = select(d.controls, {
    label: '\\text{电源}',
    options: [{ value: 'yes', label: '已隔离' }, { value: 'no', label: '未隔离' }],
    value: 'yes', aria: '电源中是否接有隔离变压器',
  });
  const nS = ctl(d.controls, { label: '\\kRes_{\\text{ins}}', cls: 'resistance', min: 10, max: 500, step: 10, value: 100, unit: 'MΩ', dec: 0, aria: '线圈之间材料的电阻' });
  const pS = ctl(d.controls, { label: '\\kRes_{\\text{person}}', cls: 'resistance', min: 1, max: 100, step: 0.5, value: 3, unit: 'kΩ', dec: 2, aria: '人对大地的电阻' });
  const RAPP = 12;                     /* the appliance, the same 12.0 Ω one the page has drawn throughout */
  const TOP = 180, BOT = 560, RX = 1080;
  const CL = 900, CT = 225, CR = 1260, CB = 415;

  function draw() {
    const { ctx } = begin(d.c);
    const on = iso.value === 'yes', Rins = nS.v * 1e6, Rp = pS.v * 1000;
    const Iperson = on ? VS / (Rins + Rp) : VS / Rp, Iapp = VS / RAPP;
    const cV = C('voltage'), cI = C('current'), cR = C('resistance');

    acSource(ctx, 130, 330, 42);
    tag(ctx, fmt(VS, 0) + ' V', 78, 330, cV, { align: 'right' });
    breaker(ctx, 280, TOP, true);
    tag(ctx, '断路器', 280, TOP - 62, F.ref('breaker'), { size: 19, weight: 400 });

    F.faded(ctx, iso.a('yes'), [0, 0], () => {
      /* the primary, the core and the secondary */
      wires(ctx, [[130, 288], [130, TOP], [440, TOP], [440, 250]]);
      const ic = F.ref('isolation-transformer');
      coil(ctx, 440, 250, 470, 6, -1, ic);
      wires(ctx, [[440, 470], [440, 620], [130, 620], [130, 372]]);
      node(ctx, 300, 620); earth(ctx, 300, 620);
      ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = ic; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.rect(478, 220, 44, 280); ctx.fill(); ctx.stroke(); ctx.restore();
      line(ctx, 500, 220, 500, 500, alpha(PAL.ink, 0.35), 2);
      coil(ctx, 560, 250, 470, 6, 1, ic);
      wires(ctx, [[560, 250], [620, 250], [620, TOP], [RX, TOP], [RX, CT + 47]]);
      wires(ctx, [[RX, 368], [RX, BOT], [620, BOT], [620, 470], [560, 470]]);
      tag(ctx, '原线圈', 386, 360, ic, { align: 'right', size: 20 });
      tag(ctx, '副线圈', 614, 360, ic, { align: 'left', size: 20 });
      line(ctx, 500, 505, 500, 528, alpha(PAL.ink, 0.35), 2);
      tag(ctx, ohms(Rins), 500, 545, cR, { size: 21 });
      tag(ctx, '线圈之间的材料', 500, 580, PAL.ink, { size: 20 });
      tag(ctx, '匝数相等，所以用电器得到的与原来得到的一样', 500, 700, PAL.muted, { size: 19, weight: 400 });
    });
    F.faded(ctx, iso.a('no'), [0, 0], () => {
      wires(ctx, [[130, 288], [130, TOP], [RX, TOP], [RX, CT + 47]]);
      wires(ctx, [[RX, 368], [RX, BOT], [130, BOT], [130, 372]]);
      wires(ctx, [[300, BOT], [300, 620]]); node(ctx, 300, BOT); earth(ctx, 300, 620);
      tag(ctx, '电源接了地，所以这个人是电路的一部分', 560, 650, PAL.muted, { size: 20, weight: 400 });
    });

    /* the appliance, which runs the same either way */
    caseBox(ctx, CL, CT, CR, CB, false);
    zig(ctx, RX, 320, Math.PI / 2);
    tag(ctx, '用电器的外壳', RX, CT - 26, F.ref('case'));
    tag(ctx, '用电器', 1040, 320, F.ref('appliance'), { align: 'right' });
    flow(ctx, 820, TOP, 1, 0);
    flow(ctx, 820, BOT, -1, 0);
    tag(ctx, amps(Iapp), 820, TOP - 38, cI);

    /* the person, holding one output wire */
    const PX = 1180, PY = 700, S = 1.8;
    groundLine(ctx, 1040, 1400, PY + 2);
    earth(ctx, 1350, PY + 16);
    wires(ctx, [[RX, 464], [1118, 464]]); node(ctx, RX, 464, 6);   /* the output wire the person holds */
    silhouette(ctx, { x: PX, y: PY, s: S, face: -1, pose: 'stand', color: F.ref('person'), hands: [{ x: 53, y: -128 }, { x: -20, y: -76 }] });
    tag(ctx, '人，' + ohms(Rp), PX, 740, cR, { size: 20 });
    flow(ctx, 1100, 444, 1, 0, 40); flow(ctx, 1178, 650, 0, 1, 44);
    tag(ctx, amps(Iperson), 1290, 470, cI, { align: 'right' });

    topline(ctx, on
      ? '经过隔离变压器，握着一根输出线的人承受 ' + amps(Iperson) + '，而用电器仍像以前一样取用 ' + amps(Iapp) + '。'
      : '直接由接地的电源供电时，同一个人握着同一根导线，就成了完整电路的一部分，承受 ' + amps(Iperson) + '，这是危险的电击。');
    readout(d.readout,
      on
        ? `\\kIcur_{\\text{person}} = \\dfrac{\\kVrms}{\\kRes_{\\text{ins}} + \\kRes_{\\text{person}}} = \\dfrac{${fmt(VS, 0)}\\ \\text{V}}{${ohmsTex(Rins)} + ${ohmsTex(Rp)}} = ${ampsTex(Iperson)}`
        : `\\kIcur_{\\text{person}} = \\dfrac{\\kVrms}{\\kRes_{\\text{person}}} = \\dfrac{${fmt(VS, 0)}\\ \\text{V}}{${ohmsTex(Rp)}} = ${ampsTex(Iperson)}`,
      on
        ? '电流要流过人体，必须先穿过线圈之间的材料，而这个电阻比另一个大得多，以致它决定了整个结果。'
        : '隔离变压器的两根输出线都没有接地，这就是全部的区别：这里其中一根接了地，人脚下的大地使电路闭合。');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
