/* Figures for section 15.1 The First Law of Thermodynamics. Boots against the section's text article.
   The first law is a balance struck between the start and the end of a
   process, and nothing in it runs on a clock, so every figure here is a
   still picture: none registers a cycle, none carries a transport, and a
   slider's input alone redraws it. Heat transfer, work and internal
   energy are one category and wear one hue, told apart by where they are
   drawn, heat on the left of the system, work on the right and internal
   energy as a gauge inside; the two processes of 15.4 and the body and
   the plant of 15.5 are referents. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['15.1'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, topline, strip, person } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) { const n = el('small', null, small); host.appendChild(n); F.renderMath(n); } }

/* ---------- small helpers shared by the figures ---------- */
const TAU = 2 * Math.PI;
/* a value that rounds to nothing at d decimals is nothing, so that no reading shows a signed zero */
const eps = (v, d) => (Math.abs(v) < 0.5 * Math.pow(10, -d) ? 0 : v);
/* a number with the typographic minus, and one that always carries its sign */
const num = (v, d) => { const x = eps(v, d); return (x < 0 ? '−' : '') + fmt(Math.abs(x), d); };
const plus = (v, d) => { const x = eps(v, d); return (x === 0 ? '' : x < 0 ? '−' : '+') + fmt(Math.abs(x), d); };
/* a whole number of kilojoules written the way the book writes 10,500 kJ */
const grp = (v) => Math.round(Math.abs(v)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const kJ = (v) => (eps(v, 0) < 0 ? '−' : '') + grp(v);
/* the same number in LaTeX, the comma braced so the math does not space it */
const kJtex = (v) => (eps(v, 0) < 0 ? '-' : '') + grp(v).replace(/,/g, '{,}');
const texnum = (v, d) => { const x = eps(v, d); return (x < 0 ? '-' : '') + fmt(Math.abs(x), d); };
/* a bold arrow in the style of the book's: a shaft of width w and a head a little wider,
   drawn as one filled shape from (x1, y1) to the tip at (x2, y2) */
function fatArrow(ctx, x1, y1, x2, y2, w, color) {
  const L = Math.hypot(x2 - x1, y2 - y1); if (L < 4) return;
  const ux = (x2 - x1) / L, uy = (y2 - y1) / L, px = -uy, py = ux;
  const hl = Math.min(L * 0.5, w + 26), hw = w / 2 + 12, sw = w / 2;
  const bx = x2 - ux * hl, by = y2 - uy * hl;
  ctx.save(); ctx.fillStyle = color; ctx.beginPath();
  ctx.moveTo(x1 + px * sw, y1 + py * sw); ctx.lineTo(bx + px * sw, by + py * sw); ctx.lineTo(bx + px * hw, by + py * hw);
  ctx.lineTo(x2, y2); ctx.lineTo(bx - px * hw, by - py * hw); ctx.lineTo(bx - px * sw, by - py * sw); ctx.lineTo(x1 - px * sw, y1 - py * sw);
  ctx.closePath(); ctx.fill(); ctx.restore();
}
/* the width of an arrow for the energy it carries: a hairline for nothing, and never fatter than 58 */
const wOf = (v, k) => (v <= 0 ? 0 : Math.min(58, 6 + k * v));
/* the boundary of a system, an ellipse in ink or a referent's hue filled the colour of the page, named once at the top */
function system(ctx, cx, cy, rx, ry, name, color = PAL.ink) {
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = color; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
  if (name) text(ctx, name, cx, cy - ry + 34, color, { size: 20, align: 'center' });
}
/* a gauge of the internal energy: a tank whose dashed line is the level at the start and whose
   bar is the change, filled when the internal energy rises and hatched when it falls. dy is the
   change in canvas units, positive upward. */
function gauge(ctx, x, y0, w, h, base, dy, color) {
  ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2.5;
  ctx.fillRect(x - w / 2, y0, w, h); ctx.strokeRect(x - w / 2, y0, w, h); ctx.restore();
  const yb = base, yt = base - dy;
  if (Math.abs(dy) >= 1) {
    ctx.save(); ctx.beginPath(); ctx.rect(x - w / 2 + 2, Math.min(yb, yt), w - 4, Math.abs(dy)); ctx.clip();
    if (dy > 0) { ctx.fillStyle = alpha(color, 0.55); ctx.fillRect(x - w / 2, yt, w, dy); }
    else { ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.beginPath(); for (let s = -h; s < w; s += 12) { ctx.moveTo(x - w / 2 + s, y0 + h); ctx.lineTo(x - w / 2 + s + h, y0); } ctx.stroke(); }
    ctx.restore();
    line(ctx, x - w / 2, yt, x + w / 2, yt, color, 4);
  }
  line(ctx, x - w / 2 - 8, yb, x + w / 2 + 8, yb, color, 2.5, [8, 8]);
}
/* the lines a change in internal energy is announced with */
const rises = (v, d) => (eps(v, d) > 0 ? '使内能增加' : eps(v, d) < 0 ? '使内能减少' : '使内能保持不变');

/* =====================================================================
   FIGURE 15.3: the system with its four transfers. Heat transfer in and
   out on the left, work done by and on the system on the right, each an
   arrow as wide as the energy it carries; the two nets summed beneath and
   the internal energy rising or falling in the gauge. Still: the law
   balances the start and the end of a process and has no clock in it.
===================================================================== */
(function () {
  const d = sim('sim-first-law', 640);
  const qi = ctl(d.controls, { label: '\\kQin', cls: 'energy', min: 0, max: 100, step: 1, value: 40, unit: 'J', dec: 0, aria: '进入系统的热传递量' });
  const qo = ctl(d.controls, { label: '\\kQout', cls: 'energy', min: 0, max: 100, step: 1, value: 25, unit: 'J', dec: 0, aria: '离开系统的热传递量' });
  const wo = ctl(d.controls, { label: '\\kWout', cls: 'energy', min: 0, max: 100, step: 1, value: 10, unit: 'J', dec: 0, aria: '系统所做的功' });
  const wi = ctl(d.controls, { label: '\\kWin', cls: 'energy', min: 0, max: 100, step: 1, value: 4, unit: 'J', dec: 0, aria: '对系统所做的功' });
  const CX = 700, CY = 330, RX = 250, RY = 150, K = 0.45, KG = 0.5;     /* the gauge holds −200 to +200 J, half a unit a joule */
  /* the x where the ellipse's edge sits at a height dy above or below its centre */
  const edge = (dy) => RX * Math.sqrt(Math.max(0, 1 - (dy / RY) * (dy / RY)));
  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('energy');
    const Qin = qi.v, Qout = qo.v, Wout = wo.v, Win = wi.v, Q = Qin - Qout, W = Wout - Win, dE = Q - W;
    system(ctx, CX, CY, RX, RY, '系统');
    /* the heat transfers cross the boundary on the left, the work on the right */
    const yu = CY - 60, yl = CY + 60, xl = CX - edge(60), xr = CX + edge(60), far = 340;
    const flows = [
      ['Q_in = ' + fmt(Qin, 0) + ' J', Qin, xl - far, yu, xl - 4, yu, '进入系统的热传递量', '没有热传递进入', -1, yu],
      ['Q_out = ' + fmt(Qout, 0) + ' J', Qout, xl + 4, yl, xl - far, yl, '离开系统的热传递量', '没有热传递流出', 1, yl],
      ['W_out = ' + fmt(Wout, 0) + ' J', Wout, xr - 4, yu, xr + far, yu, '系统所做的功', '系统没有做功', -1, yu],
      ['W_in = ' + fmt(Win, 0) + ' J', Win, xr + far, yl, xr + 4, yl, '对系统所做的功', '没有对系统做功', 1, yl],
    ];
    for (const [lab, v, x1, y1, x2, y2, how, none, side, y] of flows) {
      const w = wOf(v, K), mx = (x1 + x2) / 2;
      if (w > 0) fatArrow(ctx, x1, y1, x2, y2, w, ec); else line(ctx, x1, y1, x2, y2, alpha(ec, 0.35), 2, [6, 8]);
      const ly = y + side * (w / 2 + 34);
      text(ctx, lab, mx, ly, ec, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
      text(ctx, v > 0 ? how : none, mx, ly + side * 26, PAL.muted, { size: 17, align: 'center' });
    }
    /* the internal energy inside, the level at the start dashed and the change as a bar */
    gauge(ctx, CX, CY - 100, 90, 206, CY + 3, dE * KG, ec);
    text(ctx, 'E_int', CX, CY + 128, PAL.ink, { size: 21, weight: 600, align: 'center' });
    text(ctx, 'ΔE_int = ' + plus(dE, 0) + ' J', CX + 56, CY + 3 - (dE * KG) / 2, ec, { size: 19, weight: 600, align: 'left', bg: alpha(PAL.panel, 0.85) });
    /* the two nets, summed beneath the system as the book sums them in its margin */
    const ys = 560;
    text(ctx, 'Q = Q_in − Q_out = ' + num(Q, 0) + ' J', 330, ys, ec, { size: 22, weight: 600, align: 'center' });
    text(ctx, Q > 0 ? '进入系统的净热传递量' : Q < 0 ? '离开系统的净热传递量' : '没有净热传递量', 330, ys + 30, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'W = W_out − W_in = ' + num(W, 0) + ' J', 1070, ys, ec, { size: 22, weight: 600, align: 'center' });
    text(ctx, W > 0 ? '系统所做的净功' : W < 0 ? '对系统所做的净功' : '没有净功', 1070, ys + 30, PAL.muted, { size: 17, align: 'center' });
    topline(ctx, '传入 ' + fmt(Qin, 0) + ' J、传出 ' + fmt(Qout, 0) + ' J 的热传递量，加上系统所做的 ' + fmt(Wout, 0) + ' J 的功和外界对它所做的 ' + fmt(Win, 0) + ' J 的功，'
      + rises(dE, 0) + (eps(dE, 0) === 0 ? '。' : ' ' + fmt(Math.abs(dE), 0) + ' J。'));
    readout(d.readout, `\\kdEint = \\kQh - \\kW = (\\kQin - \\kQout) - (\\kWout - \\kWin) = (${fmt(Qin, 0)} - ${fmt(Qout, 0)})\\ \\text{J} - (${fmt(Wout, 0)} - ${fmt(Win, 0)})\\ \\text{J} = ${texnum(dE, 0)}\\ \\text{J}`,
      '传入系统的净热传递量使 $\\kQh$ 为正，系统所做的净功使 $\\kW$ 为正。');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 15.4: two processes that produce the same change. The change in
   internal energy is set once and the net heat transfer of each process
   separately; the net work of each follows, since W = Q − ΔE_int is fixed
   by the two end states. Still: two processes compared by their end states
   have no time in them.
===================================================================== */
(function () {
  const d = sim('sim-two-paths', 600);
  const de = ctl(d.controls, { label: '\\kdEint', cls: 'energy', min: -40, max: 40, step: 1, value: 9, unit: 'J', dec: 2, aria: '两个过程所产生的内能变化' });
  const qa = ctl(d.controls, { label: '\\text{（a）的}\\ \\kQh', cls: 'energy', min: -60, max: 60, step: 1, value: 15, unit: 'J', dec: 2, aria: '过程（a）的净热传递量' });
  const qb = ctl(d.controls, { label: '\\text{（b）的}\\ \\kQh', cls: 'energy', min: -200, max: 200, step: 1, value: -150, unit: 'J', dec: 2, aria: '过程（b）的净热传递量' });
  const R = 120, CY = 340, LEN = 190, K = 0.22, KG = 2.2;    /* the gauge holds −40 to +40 J */
  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('energy');
    const dE = de.v, Qa = qa.v, Qb = qb.v, Wa = Qa - dE, Wb = Qb - dE;
    const procs = [['（a）', 360, Qa, Wa, F.ref('process-a')], ['（b）', 1040, Qb, Wb, F.ref('process-b')]];
    for (const [nm, cx, Q, W, rc] of procs) {
      system(ctx, cx, CY, R, R, '系统', rc);
      text(ctx, '过程' + nm, cx, CY - R - 34, rc, { size: 22, weight: 600, align: 'center' });
      /* the net heat transfer on the left: in when Q is positive, out when it is negative */
      const y = CY - 30, xl = cx - R, xr = cx + R;
      const wq = wOf(Math.abs(Q), K), ww = wOf(Math.abs(W), K);
      if (wq > 0) { if (Q > 0) fatArrow(ctx, xl - LEN, y, xl - 4, y, wq, ec); else fatArrow(ctx, xl + 4, y, xl - LEN, y, wq, ec); }
      else line(ctx, xl - LEN, y, xl, y, alpha(ec, 0.35), 2, [6, 8]);
      text(ctx, 'Q = ' + plus(Q, 2) + ' J', xl - LEN / 2, y - wq / 2 - 34, ec, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
      text(ctx, Q > 0 ? '吸热' : Q < 0 ? '放热' : '没有净热传递量', xl - LEN / 2, y + wq / 2 + 34, PAL.muted, { size: 17, align: 'center' });
      /* the net work on the right: out when W is positive, in when it is negative */
      if (ww > 0) { if (W > 0) fatArrow(ctx, xr + 4, y, xr + LEN, y, ww, ec); else fatArrow(ctx, xr + LEN, y, xr + 4, y, ww, ec); }
      else line(ctx, xr, y, xr + LEN, y, alpha(ec, 0.35), 2, [6, 8]);
      text(ctx, 'W = ' + num(W, 2) + ' J', xr + LEN / 2, y - ww / 2 - 34, ec, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
      text(ctx, W > 0 ? '它所做的功' : W < 0 ? '对它所做的功' : '没有净功', xr + LEN / 2, y + ww / 2 + 34, PAL.muted, { size: 17, align: 'center' });
      /* the internal energy inside, the same rise or fall in both */
      gauge(ctx, cx, CY - 60, 96, 160, CY + 20, dE * KG, ec);
      text(ctx, 'ΔE_int = ' + plus(dE, 2) + ' J', cx, CY + R + 36, ec, { size: 22, weight: 600, align: 'center' });
    }
    text(ctx, '每个量表中的虚线是起始时的内能 E_int1，条形表示变为 E_int2 的变化，两个过程相同。', 700, 562, PAL.muted, { size: 18, align: 'center' });
    const gain = (v) => (eps(v, 2) >= 0 ? '吸收 ' + fmt(Math.abs(v), 2) + ' J 的热量' : '放出 ' + fmt(Math.abs(v), 2) + ' J 的热量');
    const works = (v) => (eps(v, 2) >= 0 ? '做了 ' + fmt(Math.abs(v), 2) + ' J 的功' : '外界对它做了 ' + fmt(Math.abs(v), 2) + ' J 的功');
    topline(ctx, '过程（a）' + gain(Qa) + '并' + works(Wa) + '，过程（b）' + gain(Qb) + '并' + works(Wb) + '，两者都'
      + (eps(dE, 2) > 0 ? '使内能增加' : eps(dE, 2) < 0 ? '使内能减少' : '使内能保持不变') + (eps(dE, 2) === 0 ? '。' : ' ' + fmt(Math.abs(dE), 2) + ' J。'));
    const par = (v) => (eps(v, 2) < 0 ? `(${texnum(v, 2)}\\ \\text{J})` : `${texnum(v, 2)}\\ \\text{J}`);
    readout(d.readout, `\\kdEint = \\kQh - \\kW = ${par(Qa)} - ${par(Wa)} = ${par(Qb)} - ${par(Wb)} = ${texnum(dE, 2)}\\ \\text{J}`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 15.5: metabolism and photosynthesis. The body is the system and a
   day's food, heat transfer and work are its account; switch to the plant
   and sunlight arrives as heat transfer, part leaves again and the rest is
   stored. Still: a day's balance has no clock the figure could run. The two
   systems are a choice, not a slider, since they are two states of the
   figure and not a quantity; each has sliders of its own.
===================================================================== */
(function () {
  const d = sim('sim-metabolism', 620);
  const which = choice(d.controls, { label: '\\text{系统}', options: [{ value: 'body', label: '人体' }, { value: 'plant', label: '一株植物' }], value: 'body', aria: '热力学第一定律应用于哪个系统' });
  /* each system's sliders sit in a wrapper of their own so the row can show one set at a time */
  const bodyCtl = el('div'), plantCtl = el('div'); d.controls.append(bodyCtl, plantCtl);
  const food = ctl(bodyCtl, { label: '\\text{食物}', cls: 'energy', min: 0, max: 15000, step: 100, value: 10500, unit: 'kJ', dec: 0, aria: '一天中摄入的食物能量' });
  const qout = ctl(bodyCtl, { label: '\\kQout', cls: 'energy', min: 0, max: 15000, step: 100, value: 8400, unit: 'kJ', dec: 0, aria: '一天中离开人体的热传递量' });
  const work = ctl(bodyCtl, { label: '\\kWout', cls: 'energy', min: 0, max: 5000, step: 100, value: 2100, unit: 'kJ', dec: 0, aria: '人体一天中所做的功' });
  const sun = ctl(plantCtl, { label: '\\kQin', cls: 'energy', min: 0, max: 1000, step: 10, value: 500, unit: 'kJ', dec: 0, aria: '从阳光进入植物的辐射热传递量' });
  const pout = ctl(plantCtl, { label: '\\kQout', cls: 'energy', min: 0, max: 1000, step: 10, value: 450, unit: 'kJ', dec: 0, aria: '离开植物的热传递量' });
  const show = () => { const body = which.value === 'body'; bodyCtl.style.display = body ? 'contents' : 'none'; plantCtl.style.display = body ? 'none' : 'contents'; };
  show(); d.fig.addEventListener('input', show);
  const GY = 480, GX = 980, GW = 120, GT = 190, GH = 260, GB = GY - 130;   /* the gauge, and its base level */
  /* a sun in ink, its rays drawn as strokes */
  function sunSprite(ctx, x, y, r) {
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.panel; ctx.lineWidth = 3.5;
    ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke();
    ctx.beginPath(); for (let i = 0; i < 12; i++) { const a = (i / 12) * TAU; ctx.moveTo(x + (r + 10) * Math.cos(a), y + (r + 10) * Math.sin(a)); ctx.lineTo(x + (r + 30) * Math.cos(a), y + (r + 30) * Math.sin(a)); } ctx.stroke();
    ctx.restore();
  }
  /* a flowering plant in the plant's referent hue, its roots at (x, y) */
  function plantSprite(ctx, x, y, color) {
    ctx.save(); ctx.strokeStyle = color; ctx.fillStyle = PAL.panel; ctx.lineWidth = 5; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(x, y); ctx.quadraticCurveTo(x - 10, y - 90, x, y - 170); ctx.stroke();
    ctx.lineWidth = 3.5;
    for (const [sx, sy, dir] of [[x - 4, y - 70, -1], [x - 2, y - 110, 1]]) {
      ctx.beginPath(); ctx.moveTo(sx, sy); ctx.quadraticCurveTo(sx + dir * 30, sy - 40, sx + dir * 70, sy - 26); ctx.quadraticCurveTo(sx + dir * 30, sy - 2, sx, sy); ctx.fill(); ctx.stroke();
    }
    for (let i = 0; i < 10; i++) { const a = (i / 10) * TAU; ctx.beginPath(); ctx.ellipse(x + 34 * Math.cos(a), y - 176 + 34 * Math.sin(a), 22, 12, a, 0, TAU); ctx.fill(); ctx.stroke(); }
    ctx.beginPath(); ctx.arc(x, y - 176, 16, 0, TAU); ctx.fill(); ctx.stroke();
    ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('energy');
    const body = which.value === 'body';
    strip(ctx, 120, 1280, GY + 12, 24);
    if (body) {
      const Fd = food.v, Qo = qout.v, Wo = work.v, dE = -Qo - (Wo - Fd), eff = Fd > 0 ? (100 * Wo) / Fd : 0;
      const kw = (v) => wOf(v, 0.0035), KG = 0.005;                     /* the gauge holds the −20,000 to +15,000 kJ the sliders reach */
      const PX = 500; person(ctx, PX, GY, F.ref('body'), { s: 2.8 });
      text(ctx, '人体', PX, GY + 52, F.ref('body'), { size: 20, align: 'center' });
      /* food comes in at the mouth, heat transfer leaves from the trunk, work leaves at the hands */
      const mouth = { x: PX - 44, y: GY - 232 }, chest = { x: PX + 48, y: GY - 172 }, hand = { x: PX - 48, y: GY - 122 };
      const wf = kw(Fd), wq = kw(Qo), ww = kw(Wo);
      if (wf > 0) fatArrow(ctx, mouth.x - 300, mouth.y - 60, mouth.x, mouth.y, wf, ec); else line(ctx, mouth.x - 300, mouth.y - 60, mouth.x, mouth.y, alpha(ec, 0.35), 2, [6, 8]);
      text(ctx, '食物 = ' + kJ(Fd) + ' kJ', mouth.x - 150, mouth.y - 60 - wf / 2 - 34, ec, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
      text(ctx, Fd > 0 ? '输入的化学势能' : '没有进食', mouth.x - 150, mouth.y - 60 - wf / 2 - 60, PAL.muted, { size: 17, align: 'center' });
      if (wq > 0) fatArrow(ctx, chest.x, chest.y, chest.x + 270, chest.y - 110, wq, ec); else line(ctx, chest.x, chest.y, chest.x + 270, chest.y - 110, alpha(ec, 0.35), 2, [6, 8]);
      text(ctx, 'Q_out = ' + kJ(Qo) + ' kJ', chest.x + 80, chest.y - 55 - wq / 2 - 40, ec, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
      text(ctx, Qo > 0 ? '向周围环境的热传递量' : '没有热传递流出', chest.x + 80, chest.y - 55 - wq / 2 - 66, PAL.muted, { size: 17, align: 'center' });
      if (ww > 0) fatArrow(ctx, hand.x, hand.y, hand.x - 270, hand.y + 50, ww, ec); else line(ctx, hand.x, hand.y, hand.x - 270, hand.y + 50, alpha(ec, 0.35), 2, [6, 8]);
      text(ctx, 'W_out = ' + kJ(Wo) + ' kJ', hand.x - 140, hand.y + 25 + ww / 2 + 38, ec, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
      text(ctx, Wo > 0 ? '对外界所做的功' : '没有做功', hand.x - 140, hand.y + 25 + ww / 2 + 64, PAL.muted, { size: 17, align: 'center' });
      /* the internal energy stored over the day */
      gauge(ctx, GX, GT, GW, GH, GB, dE * KG, ec);
      text(ctx, 'E_int', GX, GT + GH + 30, PAL.ink, { size: 21, weight: 600, align: 'center' });
      text(ctx, 'ΔE_int = ' + (eps(dE, 0) > 0 ? '+' : '') + kJ(dE) + ' kJ', GX + GW / 2 + 18, GB - (dE * KG) / 2, ec, { size: 21, weight: 600, align: 'left', bg: alpha(PAL.panel, 0.85) });
      text(ctx, eps(dE, 0) > 0 ? '储存为脂肪' : eps(dE, 0) < 0 ? '由代谢脂肪来补足' : '没有脂肪储存或消耗', GX + GW / 2 + 18, GB - (dE * KG) / 2 + 26, PAL.muted, { size: 17, align: 'left', bg: alpha(PAL.panel, 0.85) });
      topline(ctx, '食物带入 ' + kJ(Fd) + ' kJ，热传递带出 ' + kJ(Qo) + ' kJ，功带出 ' + kJ(Wo) + ' kJ，因此人体的内能在一天中'
        + (eps(dE, 0) > 0 ? '增加 ' + kJ(dE) + ' kJ。' : eps(dE, 0) < 0 ? '减少 ' + grp(dE) + ' kJ。' : '保持不变。'));
      readout(d.readout, `\\kdEint = \\kQh - \\kW = (${kJtex(-Qo)}\\ \\text{kJ}) - (${kJtex(Wo)}\\ \\text{kJ} - ${kJtex(Fd)}\\ \\text{kJ}) = ${kJtex(dE)}\\ \\text{kJ}`,
        '食物算作外界对人体所做的功，所以 $\\kW = \\kWout - \\text{食物}$。' + (Fd > 0 ? '人体把其食物能量的 ' + fmt(eff, 1) + '% 转化为功。' : ''));
    } else {
      const Qi = sun.v, Qo = pout.v, dE = Qi - Qo;
      const kw = (v) => wOf(v, 0.052), KG = 0.1;                         /* the gauge holds the −1,000 to +1,000 kJ the sliders reach */
      sunSprite(ctx, 230, 200, 48); text(ctx, '太阳', 230, 296, PAL.ink, { size: 20, align: 'center' });
      const PX = 640; plantSprite(ctx, PX, GY, F.ref('plant'));
      text(ctx, '植物', PX, GY + 52, F.ref('plant'), { size: 20, align: 'center' });
      const wi = kw(Qi), wo = kw(Qo);
      if (wi > 0) fatArrow(ctx, 318, 226, PX - 76, GY - 214, wi, ec); else line(ctx, 318, 226, PX - 76, GY - 214, alpha(ec, 0.35), 2, [6, 8]);
      text(ctx, 'Q_in = ' + kJ(Qi) + ' kJ', 480, 256 - wi / 2 - 46, ec, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
      text(ctx, Qi > 0 ? '来自阳光的辐射热传递量' : '没有阳光', 480, 256 - wi / 2 - 72, PAL.muted, { size: 17, align: 'center' });
      if (wo > 0) fatArrow(ctx, PX + 70, GY - 206, PX + 240, GY - 310, wo, ec); else line(ctx, PX + 70, GY - 206, PX + 240, GY - 310, alpha(ec, 0.35), 2, [6, 8]);
      text(ctx, 'Q_out = ' + kJ(Qo) + ' kJ', PX + 260, GY - 310, ec, { size: 21, weight: 600, align: 'left', bg: alpha(PAL.panel, 0.85) });
      text(ctx, Qo > 0 ? '返回周围环境的热传递量' : '没有热传递流出', PX + 260, GY - 336, PAL.muted, { size: 17, align: 'left' });
      gauge(ctx, GX + 60, GT, GW, GH, GB, dE * KG, ec);
      text(ctx, 'E_int', GX + 60, GT + GH + 30, PAL.ink, { size: 21, weight: 600, align: 'center' });
      text(ctx, 'ΔE_int = ' + (eps(dE, 0) > 0 ? '+' : '') + kJ(dE) + ' kJ', GX + 60 + GW / 2 + 18, GB - (dE * KG) / 2, ec, { size: 21, weight: 600, align: 'left', bg: alpha(PAL.panel, 0.85) });
      text(ctx, eps(dE, 0) > 0 ? '储存的化学能' : eps(dE, 0) < 0 ? '取自其储备' : '没有储存', GX + 60 + GW / 2 + 18, GB - (dE * KG) / 2 + 26, PAL.muted, { size: 17, align: 'left', bg: alpha(PAL.panel, 0.85) });
      topline(ctx, '阳光给植物带来 ' + kJ(Qi) + ' kJ 的辐射热传递量，又有 ' + kJ(Qo) + ' kJ 离开，因此'
        + (eps(dE, 0) > 0 ? '光合作用把 ' + kJ(dE) + ' kJ 储存为化学能。' : eps(dE, 0) < 0 ? '植物损失了 ' + grp(dE) + ' kJ 的储存能量。' : '植物没有储存任何能量。'));
      readout(d.readout, `\\kdEint = \\kQh - \\kW = (\\kQin - \\kQout) - 0 = (${kJtex(Qi)}\\ \\text{kJ} - ${kJtex(Qo)}\\ \\text{kJ}) - 0 = ${kJtex(dE)}\\ \\text{kJ}`,
        '假定植物不对周围环境做功，所以 $\\kW = 0$。');
    }
  }
  register(d.fig, { update: () => {}, draw });
})();
};
