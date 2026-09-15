/* Figures for section 19.6 Capacitors in Series and Parallel. Boots against the section's text article.
   A charged combination of capacitors sits at its voltage, so both figures
   here are still pictures: neither registers a cycle, neither carries a
   transport, and a slider's input alone redraws them. The plates, the wires
   and the battery are the frame of a circuit diagram and are drawn in ink
   (ch19/COLOR.md); the capacitances, the voltages, the charges and the
   equivalent separation wear their type hues. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['19.6'] = function (root, F) {
const { el, fmt, tex, C, PAL, ctl, choice, register, begin, line, arrow, dot, text, headline, hbracket, vbracket } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- the pieces of a circuit diagram, all in ink ---------- */
/* a capacitor in a wire: 'h' sits in a horizontal wire and has vertical
   plates, 'v' sits in a vertical wire and has horizontal plates */
function capacitor(ctx, x, y, orient, gap, half) {
  const g = gap / 2;
  ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 5; ctx.lineCap = 'butt';
  ctx.beginPath();
  if (orient === 'h') { ctx.moveTo(x - g, y - half); ctx.lineTo(x - g, y + half); ctx.moveTo(x + g, y - half); ctx.lineTo(x + g, y + half); }
  else { ctx.moveTo(x - half, y - g); ctx.lineTo(x + half, y - g); ctx.moveTo(x - half, y + g); ctx.lineTo(x + half, y + g); }
  ctx.stroke(); ctx.restore();
}
/* a battery in a wire, the long plate the positive terminal */
function battery(ctx, x, y, orient) {
  ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineCap = 'butt';
  const pairs = [[-26, 30, 4], [-10, 15, 7], [10, 30, 4], [26, 15, 7]];
  for (const [o, h, w] of pairs) {
    ctx.lineWidth = w; ctx.beginPath();
    if (orient === 'h') { ctx.moveTo(x + o, y - h); ctx.lineTo(x + o, y + h); }
    else { ctx.moveTo(x - h, y + o); ctx.lineTo(x + h, y + o); }
    ctx.stroke();
  }
  ctx.restore();
}
/* the wire of a circuit, drawn along a path of corner points */
function wire(ctx, pts) {
  ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
  ctx.stroke(); ctx.restore();
}
/* a plus and a minus sign on the two plates of a capacitor, in the charge hue */
function signs(ctx, x, y, orient, gap, half, color) {
  const g = gap / 2 + 20, o = half + 24;
  const put = (s, px, py) => text(ctx, s, px, py, color, { size: 22, weight: 600, align: 'center' });
  if (orient === 'h') { put('+', x - g, y - o + 10); put('−', x + g, y - o + 10); }
  else { put('+', x - o, y - g + 4); put('−', x - o, y + g + 4); }
}

/* =====================================================================
   FIGURES 19.20 + 19.21, folded: the same three capacitors across the
   same source, connected first in series and then in parallel, with the
   single capacitor each combination is equivalent to drawn beside it.
   Still: a charged combination sits at its voltage and the figure answers
   its sliders, so it registers no cycle.
===================================================================== */
(function () {
  const d = sim('sim-series-parallel', 760);
  const conn = choice(d.controls, { label: '\\text{the connection}', options: [{ value: 'series', label: 'series' }, { value: 'parallel', label: 'parallel' }], value: 'series', aria: 'how the three capacitors are connected' });
  const c1 = ctl(d.controls, { label: '\\kCone', cls: 'capacitance', min: 0.5, max: 10, step: 0.25, value: 1, unit: 'µF', dec: 3, aria: 'the capacitance of the first capacitor' });
  const c2 = ctl(d.controls, { label: '\\kCtwo', cls: 'capacitance', min: 0.5, max: 10, step: 0.25, value: 5, unit: 'µF', dec: 3, aria: 'the capacitance of the second capacitor' });
  const c3 = ctl(d.controls, { label: '\\kCthree', cls: 'capacitance', min: 0.5, max: 10, step: 0.25, value: 8, unit: 'µF', dec: 3, aria: 'the capacitance of the third capacitor' });
  const vs = ctl(d.controls, { label: '\\kV', cls: 'voltage', min: 2, max: 24, step: 0.5, value: 12, unit: 'V', dec: 1, aria: 'the voltage of the source' });
  /* the gap and the plate width of the equivalent capacitor are drawn to a
     fixed scale, bounded so that the widest separation and the widest plates
     the sliders can reach still stand inside the panel */
  const XS = [280, 450, 620], TOP = 260, BOT = 530, LFT = 160, RGT = 740, DIV = 820, EQ = 1110;
  function draw() {
    const { ctx } = begin(d.c);
    const cc = C('capacitance'), vc = C('voltage'), qc = C('charge'), pc = C('position');
    const cs = [c1.v, c2.v, c3.v], V = vs.v, ser = conn.value === 'series';
    const Cs = 1 / (1 / cs[0] + 1 / cs[1] + 1 / cs[2]), Cp = cs[0] + cs[1] + cs[2];
    const Ctot = ser ? Cs : Cp, Q = Ctot * V;                 /* µF times V is µC */
    line(ctx, DIV, 130, DIV, 660, PAL.rule, 2, [10, 10]);
    text(ctx, ser ? 'three capacitors in series' : 'three capacitors in parallel', 110, 134, PAL.muted, { size: 19 });
    text(ctx, 'the one capacitor the combination is equivalent to', 880, 134, PAL.muted, { size: 19 });
    if (ser) {
      /* the loop, with the three capacitors along the top and the source below */
      wire(ctx, [[XS[0] - 34, TOP], [LFT, TOP], [LFT, BOT], [RGT, BOT], [RGT, TOP], [XS[2] + 34, TOP]]);
      wire(ctx, [[XS[0] + 34, TOP], [XS[1] - 34, TOP]]);
      wire(ctx, [[XS[1] + 34, TOP], [XS[2] - 34, TOP]]);
      battery(ctx, 450, BOT, 'h');
      text(ctx, 'V = ' + fmt(V, 1) + ' V', 450, BOT + 62, vc, { size: 22, weight: 600, align: 'center' });
      XS.forEach((x, i) => {
        capacitor(ctx, x, TOP, 'h', 34, 46);
        signs(ctx, x, TOP, 'h', 34, 46, qc);
        text(ctx, 'C_' + (i + 1) + ' = ' + fmt(cs[i], 3) + ' µF', x, TOP - 84, cc, { size: 21, weight: 600, align: 'center' });
        text(ctx, 'V_' + (i + 1) + ' = ' + fmt(Q / cs[i], 2) + ' V', x, TOP + 116, vc, { size: 21, weight: 600, align: 'center', bg: PAL.panel });
      });
      text(ctx, 'The same charge Q = ' + fmt(Q, 2) + ' µC is separated in every capacitor.', 450, 636, qc, { size: 20, weight: 600, align: 'center' });
      /* the equivalent capacitor: the same charge behind a larger separation */
      const gap = 40 + 150 * Math.min(1, 1 / Math.max(Cs, 0.35) / 3);
      wire(ctx, [[EQ, 260], [EQ - 200, 260], [EQ - 200, 560], [EQ + 200, 560], [EQ + 200, 260], [EQ, 260]]);
      wire(ctx, [[EQ, 260], [EQ, 380 - gap / 2]]);
      wire(ctx, [[EQ, 380 + gap / 2], [EQ, 560]]);
      capacitor(ctx, EQ, 380, 'v', gap, 116);
      signs(ctx, EQ, 380, 'v', gap, 116, qc);
      battery(ctx, EQ - 200, 410, 'v');
      text(ctx, 'V = ' + fmt(V, 1) + ' V', EQ - 252, 410, vc, { size: 21, weight: 600, align: 'right' });
      vbracket(ctx, EQ + 152, 380 - gap / 2, 380 + gap / 2, pc, 'd', 1);
      text(ctx, 'C_S = ' + fmt(Cs, 3) + ' µF', EQ, 200, cc, { size: 23, weight: 600, align: 'center' });
      text(ctx, 'a larger plate separation', EQ + 40, 636, PAL.muted, { size: 19, align: 'center' });
      headline(ctx, 'Three capacitors of ' + fmt(cs[0], 3) + ', ' + fmt(cs[1], 3) + ' and ' + fmt(cs[2], 3) + ' µF in series across ' + fmt(V, 1) + ' V hold ' + fmt(Q, 2) + ' µC each and act as one capacitor of ' + fmt(Cs, 3) + ' µF.');
      readout(d.readout, `\\frac{1}{\\kCS} = \\frac{1}{\\kCone} + \\frac{1}{\\kCtwo} + \\frac{1}{\\kCthree} = \\frac{${fmt(1 / cs[0] + 1 / cs[1] + 1 / cs[2], 3)}}{\\mu\\text{F}}, \\quad \\kCS = ${fmt(Cs, 3)}\\ \\mu\\text{F}`,
        'The three voltages add to the source voltage, ' + fmt(Q / cs[0], 2) + ' + ' + fmt(Q / cs[1], 2) + ' + ' + fmt(Q / cs[2], 2) + ' = ' + fmt(V, 1) + ' V, because the same charge sits on every capacitor and the smallest capacitance takes the largest share. The total is ' + fmt(Cs, 3) + ' µF, less than the smallest of the three, which is what a larger effective plate separation means.');
    } else {
      /* the loop, with the three capacitors on branches of their own */
      const LP = 250, XP = [350, 520, 690];
      wire(ctx, [[LP, TOP], [RGT, TOP]]);
      wire(ctx, [[LP, BOT], [RGT, BOT]]);
      wire(ctx, [[LP, TOP], [LP, BOT]]);
      battery(ctx, LP, 395, 'v');
      text(ctx, 'V = ' + fmt(V, 1) + ' V', LP - 44, 395, vc, { size: 22, weight: 600, align: 'right' });
      XP.forEach((x, i) => {
        wire(ctx, [[x, TOP], [x, 395 - 17]]);
        wire(ctx, [[x, 395 + 17], [x, BOT]]);
        capacitor(ctx, x, 395, 'v', 34, 46);
        signs(ctx, x, 395, 'v', 34, 46, qc);
        dot(ctx, x, TOP, PAL.ink, true, 6); dot(ctx, x, BOT, PAL.ink, true, 6);
        text(ctx, 'C_' + (i + 1) + ' = ' + fmt(cs[i], 3) + ' µF', x + 12, 300, cc, { size: 21, weight: 600, align: 'center', bg: PAL.panel });
        text(ctx, 'Q_' + (i + 1) + ' = ' + fmt(cs[i] * V, 2) + ' µC', x + 12, 492, qc, { size: 21, weight: 600, align: 'center', bg: PAL.panel });
      });
      text(ctx, 'Every capacitor has the whole ' + fmt(V, 1) + ' V across it.', 470, 636, vc, { size: 20, weight: 600, align: 'center' });
      /* the equivalent capacitor: the same separation behind a larger plate area */
      const half = 50 + 3.5 * Math.min(Cp, 30);
      wire(ctx, [[EQ, 260], [EQ - 200, 260], [EQ - 200, 560], [EQ + 200, 560], [EQ + 200, 260], [EQ, 260]]);
      capacitor(ctx, EQ, 380, 'v', 46, half);
      wire(ctx, [[EQ, 260], [EQ, 380 - 23]]);
      wire(ctx, [[EQ, 380 + 23], [EQ, 560]]);
      signs(ctx, EQ, 380, 'v', 46, half, qc);
      battery(ctx, EQ - 200, 410, 'v');
      text(ctx, 'V = ' + fmt(V, 1) + ' V', EQ - 252, 410, vc, { size: 21, weight: 600, align: 'right' });
      hbracket(ctx, EQ - half, EQ + half, 522, PAL.ink, 'the plate area A');
      text(ctx, 'C_p = ' + fmt(Cp, 3) + ' µF', EQ, 200, cc, { size: 23, weight: 600, align: 'center' });
      text(ctx, 'a larger plate area', EQ, 636, PAL.muted, { size: 19, align: 'center' });
      headline(ctx, 'The same three capacitors in parallel across ' + fmt(V, 1) + ' V hold ' + fmt(Q, 2) + ' µC between them and act as one capacitor of ' + fmt(Cp, 3) + ' µF.');
      readout(d.readout, `\\kCp = \\kCone + \\kCtwo + \\kCthree = ${fmt(cs[0], 3)} + ${fmt(cs[1], 3)} + ${fmt(cs[2], 3)} = ${fmt(Cp, 3)}\\ \\mu\\text{F}`,
        'Each capacitor is connected straight across the source, so each holds the charge it would hold alone, Q = CV, and the three charges add to ' + fmt(Q, 2) + ' µC. The total is larger than any of the three, which is what a larger effective plate area means.');
    }
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 19.22: the circuit that has both connections in it, reduced in
   two steps drawn side by side. Still: the reduction is a way of reading
   a circuit and not a process in time, so the three panels stand together
   and nothing runs on a clock.
===================================================================== */
(function () {
  const d = sim('sim-mixed', 620);
  const c1 = ctl(d.controls, { label: '\\kCone', cls: 'capacitance', min: 0.5, max: 10, step: 0.25, value: 1, unit: 'µF', dec: 3, aria: 'the capacitance of the first capacitor' });
  const c2 = ctl(d.controls, { label: '\\kCtwo', cls: 'capacitance', min: 0.5, max: 10, step: 0.25, value: 5, unit: 'µF', dec: 3, aria: 'the capacitance of the second capacitor' });
  const c3 = ctl(d.controls, { label: '\\kCthree', cls: 'capacitance', min: 0.5, max: 10, step: 0.25, value: 8, unit: 'µF', dec: 3, aria: 'the capacitance of the third capacitor' });
  const PX = [80, 520, 960], PW = 360, TOP = 250, BOT = 430, MID = 340;
  function draw() {
    const { ctx } = begin(d.c);
    const cc = C('capacitance');
    const a = c1.v, b = c2.v, c = c3.v, Cs = (a * b) / (a + b), Ctot = Cs + c;
    /* one panel of the reduction: `top` is the list of capacitors on the
       upper branch and `bot` the one on the lower branch, or null where the
       circuit has come down to a single capacitor */
    function panel(x0, letter, top, bot, title) {
      const L = x0 + 30, R = x0 + PW - 30;
      text(ctx, '(' + letter + ')', x0 + 8, 132, PAL.muted, { size: 21, weight: 600 });
      text(ctx, title, x0 + 44, 132, PAL.muted, { size: 19 });
      if (!bot) {
        wire(ctx, [[L, MID], [(L + R) / 2 - 24, MID]]);
        wire(ctx, [[(L + R) / 2 + 24, MID], [R, MID]]);
        capacitor(ctx, (L + R) / 2, MID, 'h', 30, 42);
        text(ctx, top[0][0] + ' = ' + fmt(top[0][1], 3) + ' µF', (L + R) / 2, MID - 96, cc, { size: 21, weight: 600, align: 'center' });
        dot(ctx, L, MID, PAL.ink, true, 6); dot(ctx, R, MID, PAL.ink, true, 6);
        return;
      }
      wire(ctx, [[L, MID], [L, TOP]]); wire(ctx, [[R, MID], [R, TOP]]);
      wire(ctx, [[L, MID], [L, BOT]]); wire(ctx, [[R, MID], [R, BOT]]);
      dot(ctx, L, MID, PAL.ink, true, 6); dot(ctx, R, MID, PAL.ink, true, 6);
      /* the upper branch, with one capacitor or two in series along it */
      const n = top.length, step = (R - L) / (n + 1);
      let x = L;
      top.forEach(([nm, val], i) => {
        const cx = L + step * (i + 1);
        wire(ctx, [[x, TOP], [cx - 24, TOP]]);
        capacitor(ctx, cx, TOP, 'h', 30, 42);
        /* with two capacitors on one branch the names would collide, so the second is set below the wire */
        text(ctx, nm + ' = ' + fmt(val, 3) + ' µF', cx, n > 1 && i === 1 ? TOP + 78 : TOP - 74, cc, { size: 20, weight: 600, align: 'center' });
        x = cx + 24;
      });
      wire(ctx, [[x, TOP], [R, TOP]]);
      /* the lower branch, with the capacitor that stands in parallel with it */
      const bx = (L + R) / 2;
      wire(ctx, [[L, BOT], [bx - 24, BOT]]); wire(ctx, [[bx + 24, BOT], [R, BOT]]);
      capacitor(ctx, bx, BOT, 'h', 30, 42);
      text(ctx, bot[0] + ' = ' + fmt(bot[1], 3) + ' µF', bx, BOT + 96, cc, { size: 20, weight: 600, align: 'center' });
    }
    panel(PX[0], 'a', [['C_1', a], ['C_2', b]], ['C_3', c], 'the circuit as it stands');
    panel(PX[1], 'b', [['C_S', Cs]], ['C_3', c], 'C_1 and C_2 are in series');
    panel(PX[2], 'c', [['C_tot', Ctot]], null, 'C_S is in parallel with C_3');
    /* the arrows that carry one panel into the next */
    for (const x of [PX[0] + PW + 10, PX[1] + PW + 10]) arrow(ctx, x, MID, x + 60, MID, PAL.muted, 4);
    headline(ctx, 'With ' + fmt(a, 3) + ' µF and ' + fmt(b, 3) + ' µF in series, and ' + fmt(c, 3) + ' µF across them, the circuit is one capacitor of ' + fmt(Ctot, 3) + ' µF.');
    readout(d.readout, `\\frac{1}{\\kCS} = \\frac{1}{\\kCone} + \\frac{1}{\\kCtwo} \\Rightarrow \\kCS = ${fmt(Cs, 3)}\\ \\mu\\text{F}, \\quad \\kCtot = \\kCS + \\kCthree = ${fmt(Cs, 3)} + ${fmt(c, 3)} = ${fmt(Ctot, 3)}\\ \\mu\\text{F}`,
      'The two steps are the same two every time: replace the series pair by the one capacitor equivalent to it, which is smaller than either of them, and then add that capacitor to the one it stands in parallel with. Larger combinations come down the same way, a piece at a time, until a single capacitance is left.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
