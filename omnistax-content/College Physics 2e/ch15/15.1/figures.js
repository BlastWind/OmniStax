/* Figures for section 15.1 The First Law of Thermodynamics. Boots against the section's text article.
   The first law is a balance struck between the start and the end of a
   process, and nothing in it runs on a clock, so every figure here is a
   still picture: none registers a cycle, none carries a transport, and a
   slider's input alone redraws it. The page binds energy alone: heat
   transfer, work and internal energy are one type and wear one hue, told
   apart by where they are drawn, heat on the left of the system, work on
   the right and internal energy as a gauge inside. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['15.1'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, topline, strip, person } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

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
/* the boundary of a system, an ellipse in ink filled the colour of the page, named once at the top */
function system(ctx, cx, cy, rx, ry, name) {
  ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
  if (name) text(ctx, name, cx, cy - ry + 34, PAL.ink, { size: 20, align: 'center' });
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
const rises = (v, d) => (eps(v, d) > 0 ? 'raises' : eps(v, d) < 0 ? 'lowers' : 'leaves');

/* =====================================================================
   FIGURE 15.3: the system with its four transfers. Heat transfer in and
   out on the left, work done by and on the system on the right, each an
   arrow as wide as the energy it carries; the two nets summed beneath and
   the internal energy rising or falling in the gauge. Still: the law
   balances the start and the end of a process and has no clock in it.
===================================================================== */
(function () {
  const d = sim('sim-first-law', 640);
  const qi = ctl(d.controls, { label: '\\kQin', cls: 'energy', min: 0, max: 100, step: 1, value: 40, unit: 'J', dec: 0, aria: 'the heat transfer into the system' });
  const qo = ctl(d.controls, { label: '\\kQout', cls: 'energy', min: 0, max: 100, step: 1, value: 25, unit: 'J', dec: 0, aria: 'the heat transfer out of the system' });
  const wo = ctl(d.controls, { label: '\\kWout', cls: 'energy', min: 0, max: 100, step: 1, value: 10, unit: 'J', dec: 0, aria: 'the work done by the system' });
  const wi = ctl(d.controls, { label: '\\kWin', cls: 'energy', min: 0, max: 100, step: 1, value: 4, unit: 'J', dec: 0, aria: 'the work done on the system' });
  const CX = 700, CY = 330, RX = 210, RY = 150, K = 0.45, KG = 1.0;     /* the gauge holds −100 to +100 J, one unit a joule */
  /* the x where the ellipse's edge sits at a height dy above or below its centre */
  const edge = (dy) => RX * Math.sqrt(Math.max(0, 1 - (dy / RY) * (dy / RY)));
  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('energy');
    const Qin = qi.v, Qout = qo.v, Wout = wo.v, Win = wi.v, Q = Qin - Qout, W = Wout - Win, dE = Q - W;
    system(ctx, CX, CY, RX, RY, 'the system');
    /* the heat transfers cross the boundary on the left, the work on the right */
    const yu = CY - 60, yl = CY + 60, xl = CX - edge(60), xr = CX + edge(60), far = 340;
    const flows = [
      ['Q_in = ' + fmt(Qin, 0) + ' J', Qin, xl - far, yu, xl - 4, yu, 'heat transfer into the system', 'no heat transfer in', -1, yu],
      ['Q_out = ' + fmt(Qout, 0) + ' J', Qout, xl + 4, yl, xl - far, yl, 'heat transfer out of the system', 'no heat transfer out', 1, yl],
      ['W_out = ' + fmt(Wout, 0) + ' J', Wout, xr - 4, yu, xr + far, yu, 'work done by the system', 'no work done by the system', -1, yu],
      ['W_in = ' + fmt(Win, 0) + ' J', Win, xr + far, yl, xr + 4, yl, 'work done on the system', 'no work done on the system', 1, yl],
    ];
    for (const [lab, v, x1, y1, x2, y2, how, none, side, y] of flows) {
      const w = wOf(v, K), mx = (x1 + x2) / 2;
      if (w > 0) fatArrow(ctx, x1, y1, x2, y2, w, ec); else line(ctx, x1, y1, x2, y2, alpha(ec, 0.35), 2, [6, 8]);
      const ly = y + side * (w / 2 + 34);
      text(ctx, lab, mx, ly, ec, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
      text(ctx, v > 0 ? how : none, mx, ly + side * 26, PAL.muted, { size: 17, align: 'center' });
    }
    /* the internal energy inside, the level at the start dashed and the change as a bar */
    gauge(ctx, CX, CY - 100, 120, 206, CY + 3, dE * KG, ec);
    text(ctx, 'E_int', CX, CY + 128, PAL.ink, { size: 21, weight: 600, align: 'center' });
    text(ctx, 'ΔE_int = ' + plus(dE, 0) + ' J', CX + 74, CY + 3 - (dE * KG) / 2, ec, { size: 21, weight: 600, align: 'left', bg: alpha(PAL.panel, 0.85) });
    /* the two nets, summed beneath the system as the book sums them in its margin */
    const ys = 560;
    text(ctx, 'Q = Q_in − Q_out = ' + num(Q, 0) + ' J', 330, ys, ec, { size: 22, weight: 600, align: 'center' });
    text(ctx, Q > 0 ? 'net heat transfer into the system' : Q < 0 ? 'net heat transfer out of the system' : 'no net heat transfer', 330, ys + 30, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'W = W_out − W_in = ' + num(W, 0) + ' J', 1070, ys, ec, { size: 22, weight: 600, align: 'center' });
    text(ctx, W > 0 ? 'net work done by the system' : W < 0 ? 'net work done on the system' : 'no net work', 1070, ys + 30, PAL.muted, { size: 17, align: 'center' });
    topline(ctx, 'Heat transfer of ' + fmt(Qin, 0) + ' J in and ' + fmt(Qout, 0) + ' J out, with ' + fmt(Wout, 0) + ' J of work done by the system and ' + fmt(Win, 0) + ' J done on it, '
      + rises(dE, 0) + ' the internal energy ' + (eps(dE, 0) === 0 ? 'unchanged.' : 'by ' + fmt(Math.abs(dE), 0) + ' J.'));
    readout(d.readout, `\\kdEint = \\kQh - \\kW = (\\kQin - \\kQout) - (\\kWout - \\kWin) = (${fmt(Qin, 0)} - ${fmt(Qout, 0)})\\ \\text{J} - (${fmt(Wout, 0)} - ${fmt(Win, 0)})\\ \\text{J} = ${texnum(dE, 0)}\\ \\text{J}`,
      'Q is positive when the net heat transfer is into the system and W is positive when the net work is done by the system, so here Q = ' + num(Q, 0) + ' J and W = ' + num(W, 0) + ' J. '
      + (eps(dE, 0) > 0 ? 'More energy comes in as heat than leaves as work, and the difference is stored as internal energy.'
        : eps(dE, 0) < 0 ? 'More energy leaves than comes in, and the internal energy of the system falls by the difference.'
          : 'What comes in as heat is exactly what leaves as work, and the internal energy does not change.'));
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
  const de = ctl(d.controls, { label: '\\kdEint', cls: 'energy', min: -40, max: 40, step: 1, value: 9, unit: 'J', dec: 2, aria: 'the change in internal energy both processes produce' });
  const qa = ctl(d.controls, { label: '\\kQh\\ \\text{of (a)}', cls: 'energy', min: -60, max: 60, step: 1, value: 15, unit: 'J', dec: 2, aria: 'the net heat transfer of process (a)' });
  const qb = ctl(d.controls, { label: '\\kQh\\ \\text{of (b)}', cls: 'energy', min: -200, max: 200, step: 1, value: -150, unit: 'J', dec: 2, aria: 'the net heat transfer of process (b)' });
  const R = 120, CY = 340, LEN = 190, K = 0.22, KG = 2.2;    /* the gauge holds −40 to +40 J */
  function draw() {
    const { ctx } = begin(d.c);
    const ec = C('energy');
    const dE = de.v, Qa = qa.v, Qb = qb.v, Wa = Qa - dE, Wb = Qb - dE;
    const procs = [['(a)', 360, Qa, Wa], ['(b)', 1040, Qb, Wb]];
    for (const [nm, cx, Q, W] of procs) {
      system(ctx, cx, CY, R, R, 'the system');
      text(ctx, 'process ' + nm, cx, CY - R - 34, PAL.ink, { size: 22, weight: 600, align: 'center' });
      /* the net heat transfer on the left: in when Q is positive, out when it is negative */
      const y = CY - 30, xl = cx - R, xr = cx + R;
      const wq = wOf(Math.abs(Q), K), ww = wOf(Math.abs(W), K);
      if (wq > 0) { if (Q > 0) fatArrow(ctx, xl - LEN, y, xl - 4, y, wq, ec); else fatArrow(ctx, xl + 4, y, xl - LEN, y, wq, ec); }
      else line(ctx, xl - LEN, y, xl, y, alpha(ec, 0.35), 2, [6, 8]);
      text(ctx, 'Q = ' + plus(Q, 2) + ' J', xl - LEN / 2, y - wq / 2 - 34, ec, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
      text(ctx, Q > 0 ? 'heat into the system' : Q < 0 ? 'heat out of the system' : 'no net heat transfer', xl - LEN / 2, y + wq / 2 + 34, PAL.muted, { size: 17, align: 'center' });
      /* the net work on the right: out when W is positive, in when it is negative */
      if (ww > 0) { if (W > 0) fatArrow(ctx, xr + 4, y, xr + LEN, y, ww, ec); else fatArrow(ctx, xr + LEN, y, xr + 4, y, ww, ec); }
      else line(ctx, xr, y, xr + LEN, y, alpha(ec, 0.35), 2, [6, 8]);
      text(ctx, 'W = ' + num(W, 2) + ' J', xr + LEN / 2, y - ww / 2 - 34, ec, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
      text(ctx, W > 0 ? 'work by the system' : W < 0 ? 'work on the system' : 'no net work', xr + LEN / 2, y + ww / 2 + 34, PAL.muted, { size: 17, align: 'center' });
      /* the internal energy inside, the same rise or fall in both */
      gauge(ctx, cx, CY - 60, 96, 160, CY + 20, dE * KG, ec);
      text(ctx, 'ΔE_int = ' + plus(dE, 2) + ' J', cx, CY + R + 36, ec, { size: 22, weight: 600, align: 'center' });
    }
    text(ctx, 'The dashed line in each gauge is the internal energy E_int1 at the start, and the bar is the change to E_int2, the same for both processes.', 700, 562, PAL.muted, { size: 18, align: 'center' });
    const gain = (v) => (eps(v, 2) >= 0 ? 'takes in ' + fmt(Math.abs(v), 2) + ' J of heat' : 'gives up ' + fmt(Math.abs(v), 2) + ' J of heat');
    const works = (v) => (eps(v, 2) >= 0 ? 'does ' + fmt(Math.abs(v), 2) + ' J of work' : 'has ' + fmt(Math.abs(v), 2) + ' J of work done on it');
    topline(ctx, 'Process (a) ' + gain(Qa) + ' and ' + works(Wa) + ', process (b) ' + gain(Qb) + ' and ' + works(Wb) + ', and both '
      + (eps(dE, 2) > 0 ? 'raise' : eps(dE, 2) < 0 ? 'lower' : 'leave') + ' the internal energy ' + (eps(dE, 2) === 0 ? 'unchanged.' : 'by ' + fmt(Math.abs(dE), 2) + ' J.'));
    const par = (v) => (eps(v, 2) < 0 ? `(${texnum(v, 2)}\\ \\text{J})` : `${texnum(v, 2)}\\ \\text{J}`);
    readout(d.readout, `\\kdEint = \\kQh - \\kW = ${par(Qa)} - ${par(Wa)} = ${par(Qb)} - ${par(Wb)} = ${texnum(dE, 2)}\\ \\text{J}`,
      'The heat transfer and the work are different in the two processes, and each depends on the path taken, but the change in internal energy depends only on the starting state and the final state. Whatever heat transfer you give a process, its work must make up the same difference, because the system ends in the same state either way.');
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
  const which = choice(d.controls, { label: '\\text{the system}', options: [{ value: 'body', label: 'the body' }, { value: 'plant', label: 'a plant' }], value: 'body', aria: 'which system the first law is applied to' });
  /* each system's sliders sit in a wrapper of their own so the row can show one set at a time */
  const bodyCtl = el('div'), plantCtl = el('div'); d.controls.append(bodyCtl, plantCtl);
  const food = ctl(bodyCtl, { label: '\\text{food}', cls: 'energy', min: 0, max: 15000, step: 100, value: 10500, unit: 'kJ', dec: 0, aria: 'the food energy taken in over the day' });
  const qout = ctl(bodyCtl, { label: '\\kQout', cls: 'energy', min: 0, max: 15000, step: 100, value: 8400, unit: 'kJ', dec: 0, aria: 'the heat transfer out of the body over the day' });
  const work = ctl(bodyCtl, { label: '\\kWout', cls: 'energy', min: 0, max: 5000, step: 100, value: 2100, unit: 'kJ', dec: 0, aria: 'the work the body does over the day' });
  const sun = ctl(plantCtl, { label: '\\kQin', cls: 'energy', min: 0, max: 1000, step: 10, value: 500, unit: 'kJ', dec: 0, aria: 'the radiant heat transfer from sunlight into the plant' });
  const pout = ctl(plantCtl, { label: '\\kQout', cls: 'energy', min: 0, max: 1000, step: 10, value: 450, unit: 'kJ', dec: 0, aria: 'the heat transfer out of the plant' });
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
  /* a flowering plant in ink, its roots at (x, y) */
  function plantSprite(ctx, x, y) {
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.panel; ctx.lineWidth = 5; ctx.lineCap = 'round';
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
      const kw = (v) => wOf(v, 0.0035), KG = 0.026;                     /* the gauge holds −5,000 to +5,000 kJ */
      const PX = 500; person(ctx, PX, GY, PAL.ink, { s: 2.8 });
      text(ctx, 'the body', PX, GY + 52, PAL.ink, { size: 20, align: 'center' });
      /* food comes in at the mouth, heat transfer leaves from the trunk, work leaves at the hands */
      const mouth = { x: PX - 44, y: GY - 232 }, chest = { x: PX + 48, y: GY - 172 }, hand = { x: PX - 48, y: GY - 122 };
      const wf = kw(Fd), wq = kw(Qo), ww = kw(Wo);
      if (wf > 0) fatArrow(ctx, mouth.x - 300, mouth.y - 60, mouth.x, mouth.y, wf, ec); else line(ctx, mouth.x - 300, mouth.y - 60, mouth.x, mouth.y, alpha(ec, 0.35), 2, [6, 8]);
      text(ctx, 'food = ' + kJ(Fd) + ' kJ', mouth.x - 150, mouth.y - 60 - wf / 2 - 34, ec, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
      text(ctx, Fd > 0 ? 'chemical potential energy in' : 'nothing eaten', mouth.x - 150, mouth.y - 60 - wf / 2 - 60, PAL.muted, { size: 17, align: 'center' });
      if (wq > 0) fatArrow(ctx, chest.x, chest.y, chest.x + 270, chest.y - 110, wq, ec); else line(ctx, chest.x, chest.y, chest.x + 270, chest.y - 110, alpha(ec, 0.35), 2, [6, 8]);
      text(ctx, 'Q_out = ' + kJ(Qo) + ' kJ', chest.x + 160, chest.y - 55 - wq / 2 - 40, ec, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
      text(ctx, Qo > 0 ? 'heat transfer to the surroundings' : 'no heat transfer out', chest.x + 160, chest.y - 55 - wq / 2 - 66, PAL.muted, { size: 17, align: 'center' });
      if (ww > 0) fatArrow(ctx, hand.x, hand.y, hand.x - 270, hand.y + 50, ww, ec); else line(ctx, hand.x, hand.y, hand.x - 270, hand.y + 50, alpha(ec, 0.35), 2, [6, 8]);
      text(ctx, 'W_out = ' + kJ(Wo) + ' kJ', hand.x - 140, hand.y + 25 + ww / 2 + 38, ec, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
      text(ctx, Wo > 0 ? 'work done on the outside world' : 'no work done', hand.x - 140, hand.y + 25 + ww / 2 + 64, PAL.muted, { size: 17, align: 'center' });
      /* the internal energy stored over the day */
      gauge(ctx, GX, GT, GW, GH, GB, dE * KG, ec);
      text(ctx, 'E_int', GX, GT + GH + 30, PAL.ink, { size: 21, weight: 600, align: 'center' });
      text(ctx, 'ΔE_int = ' + (eps(dE, 0) > 0 ? '+' : '') + kJ(dE) + ' kJ', GX + GW / 2 + 18, GB - (dE * KG) / 2, ec, { size: 21, weight: 600, align: 'left', bg: alpha(PAL.panel, 0.85) });
      text(ctx, eps(dE, 0) > 0 ? 'stored as fat' : eps(dE, 0) < 0 ? 'met by metabolizing fat' : 'no fat stored or lost', GX + GW / 2 + 18, GB - (dE * KG) / 2 + 26, PAL.muted, { size: 17, align: 'left', bg: alpha(PAL.panel, 0.85) });
      topline(ctx, 'Food brings in ' + kJ(Fd) + ' kJ, heat transfer takes out ' + kJ(Qo) + ' kJ and work takes out ' + kJ(Wo) + ' kJ, so the internal energy of the body '
        + (eps(dE, 0) > 0 ? 'rises by ' + kJ(dE) + ' kJ over the day.' : eps(dE, 0) < 0 ? 'falls by ' + grp(dE) + ' kJ over the day.' : 'is unchanged over the day.'));
      readout(d.readout, `\\kdEint = \\kQh - \\kW = (${kJtex(-Qo)}\\ \\text{kJ}) - (${kJtex(Wo)}\\ \\text{kJ} - ${kJtex(Fd)}\\ \\text{kJ}) = ${kJtex(dE)}\\ \\text{kJ}`,
        'Heat transfer out of the body makes Q negative and work done on the outside world makes W positive, and the food comes in as chemical potential energy, which counts as work done on the body, so W = W_out − food. '
        + (Fd > 0 ? 'The body turns ' + fmt(eff, 1) + '% of its food energy into work; the rest leaves as heat transfer or stays. ' : '')
        + (eps(dE, 0) > 0 ? 'The surplus is stored as fat.' : eps(dE, 0) < 0 ? 'The deficit is met by metabolizing fat, which is how dieting produces weight loss.' : 'The food exactly replaces what was lost, and the average internal energy stays constant.'));
    } else {
      const Qi = sun.v, Qo = pout.v, dE = Qi - Qo;
      const kw = (v) => wOf(v, 0.052), KG = 0.13;                        /* the gauge holds −1,000 to +1,000 kJ */
      sunSprite(ctx, 230, 200, 48); text(ctx, 'the Sun', 230, 296, PAL.ink, { size: 20, align: 'center' });
      const PX = 640; plantSprite(ctx, PX, GY);
      text(ctx, 'the plant', PX, GY + 52, PAL.ink, { size: 20, align: 'center' });
      const wi = kw(Qi), wo = kw(Qo);
      if (wi > 0) fatArrow(ctx, 318, 226, PX - 76, GY - 214, wi, ec); else line(ctx, 318, 226, PX - 76, GY - 214, alpha(ec, 0.35), 2, [6, 8]);
      text(ctx, 'Q_in = ' + kJ(Qi) + ' kJ', 440, 256 - wi / 2 - 46, ec, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
      text(ctx, Qi > 0 ? 'radiant heat transfer from sunlight' : 'no sunlight', 440, 256 - wi / 2 - 72, PAL.muted, { size: 17, align: 'center' });
      if (wo > 0) fatArrow(ctx, PX + 70, GY - 206, PX + 280, GY - 164, wo, ec); else line(ctx, PX + 70, GY - 206, PX + 280, GY - 164, alpha(ec, 0.35), 2, [6, 8]);
      text(ctx, 'Q_out = ' + kJ(Qo) + ' kJ', PX + 200, GY - 183 + wo / 2 + 44, ec, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
      text(ctx, Qo > 0 ? 'heat transfer back to the surroundings' : 'no heat transfer out', PX + 200, GY - 183 + wo / 2 + 70, PAL.muted, { size: 17, align: 'center' });
      gauge(ctx, GX + 60, GT, GW, GH, GB, dE * KG, ec);
      text(ctx, 'E_int', GX + 60, GT + GH + 30, PAL.ink, { size: 21, weight: 600, align: 'center' });
      text(ctx, 'ΔE_int = ' + (eps(dE, 0) > 0 ? '+' : '') + kJ(dE) + ' kJ', GX + 60 + GW / 2 + 18, GB - (dE * KG) / 2, ec, { size: 21, weight: 600, align: 'left', bg: alpha(PAL.panel, 0.85) });
      text(ctx, eps(dE, 0) > 0 ? 'stored chemical energy' : eps(dE, 0) < 0 ? 'drawn from its stores' : 'nothing stored', GX + 60 + GW / 2 + 18, GB - (dE * KG) / 2 + 26, PAL.muted, { size: 17, align: 'left', bg: alpha(PAL.panel, 0.85) });
      topline(ctx, 'Sunlight brings ' + kJ(Qi) + ' kJ of radiant heat transfer to the plant and ' + kJ(Qo) + ' kJ leaves again, so '
        + (eps(dE, 0) > 0 ? kJ(dE) + ' kJ is stored as chemical energy by photosynthesis.' : eps(dE, 0) < 0 ? 'the plant loses ' + grp(dE) + ' kJ of its stored energy.' : 'the plant stores nothing.'));
      readout(d.readout, `\\kdEint = \\kQh - \\kW = (\\kQin - \\kQout) - 0 = (${kJtex(Qi)}\\ \\text{kJ} - ${kJtex(Qo)}\\ \\text{kJ}) - 0 = ${kJtex(dE)}\\ \\text{kJ}`,
        'The plant is taken to do no work on its surroundings, so the part of the sunlight it does not send back as heat transfer is what it keeps, stored as chemical potential energy. This is photosynthesis, and like metabolism it runs one way only: the plant cannot turn its stores back into sunlight.');
    }
  }
  register(d.fig, { update: () => {}, draw });
})();
};
