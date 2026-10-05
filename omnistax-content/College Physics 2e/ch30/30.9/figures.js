/* Figures for section 30.9 The Pauli Exclusion Principle.
   No type is drawn: n, l, m_l, m_s, Z and every count are untyped and in ink.
   Every electron is F.el('e-'); the subshells the text names are referents
   (F.ref('sub-2p')), and 4p and 4f, which no sentence names, take F.cat. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['30.9'] = function (root, F) {
const { PAL, alpha, ctl, register, begin, line, arrow, dot, text, topline, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);

const LETTER = ['s', 'p', 'd', 'f'];
const half = (ms) => (ms > 0 ? '+1/2' : '−1/2');
const signed = (m) => (m < 0 ? '−' + (-m) : String(m));
const set = (n, l, ml, ms) => '(' + n + ', ' + l + ', ' + signed(ml) + ', ' + half(ms) + ')';

/* an electron with its spin: the arrow through the ball is the book's notation for m_s */
function electron(ctx, x, y, ms, r = 12, reach = 28) {
  if (ms > 0) arrow(ctx, x, y + reach, x, y - reach - 4, PAL.ink, 3);
  else arrow(ctx, x, y - reach, x, y + reach + 4, PAL.ink, 3);
  dot(ctx, x, y, F.el('e-'), true, r);
}

/* =====================================================================
   FIGURE 30.55 · sim-shell-filling · still · flat (rule 28.1)
   The states of n = 1 to 4 as the book draws its levels, one line per m_l,
   the s, p and d subshells in three columns. Electrons go in the order of
   Table 30.3 (1s, 2s, 2p, 3s, 3p, 4s); within a subshell one of each m_l
   spin up first, then spin down. Z runs 1 to 20, 3 by default (lithium,
   the book's allowed arrangement with a third electron in n = 2).
===================================================================== */
(function () {
  const H = 580;
  const d = sim('sim-shell-filling', H);
  const NAMES = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium', 'Boron', 'Carbon', 'Nitrogen', 'Oxygen', 'Fluorine', 'Neon',
    'Sodium', 'Magnesium', 'Aluminum', 'Silicon', 'Phosphorus', 'Sulfur', 'Chlorine', 'Argon', 'Potassium', 'Calcium'];
  const ROWY = { 1: 510, 2: 405, 3: 300, 4: 195 };
  const SEG = 84, GAP = 16, X0 = { 0: 230, 1: 390, 2: 760 };
  const SUBS = [[1, 0], [2, 0], [2, 1], [3, 0], [3, 1], [3, 2], [4, 0]];
  const segX = (l, ml) => X0[l] + (ml + l) * (SEG + GAP) + SEG / 2;
  const ORDER = [[1, 0], [2, 0], [2, 1], [3, 0], [3, 1], [4, 0]];
  const REFS = { '1s': 'sub-1s', '2s': 'sub-2s', '2p': 'sub-2p', '3s': 'sub-3s', '3p': 'sub-3p', '3d': 'sub-3d', '4s': 'sub-4s' };
  const subColor = (n, l) => F.ref(REFS[n + LETTER[l]]);
  const states = [];
  ORDER.forEach(([n, l]) => [1, -1].forEach((ms) => { for (let ml = -l; ml <= l; ml++) states.push({ n, l, ml, ms }); }));

  const z = ctl(d.controls, { label: 'Z', cls: '', min: 1, max: 20, step: 1, value: 3, unit: '', dec: 0, aria: 'the atomic number',
    specials: [{ at: 2, label: 'He' }, { at: 10, label: 'Ne' }, { at: 18, label: 'Ar' }], onInput: () => grow.to(z.v, 320) });
  const grow = F.tween(d, z.v);
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);

  function headlineFor(Z) {
    const e = states[Z - 1], sub = e.n + LETTER[e.l], q = '$' + set(e.n, e.l, e.ml, e.ms) + '$';
    const who = NAMES[Z - 1] + ', $Z = ' + Z + '$: ';
    if (Z === 1) return who + 'its one electron takes ' + q + ' in ' + sub + '.';
    if (Z === 2) return who + 'the second electron takes ' + q + ', the only state left in $n = 1$.';
    if (Z === 3) return who + 'the $n = 1$ level is full, so the third electron takes ' + q + ' in ' + sub + '.';
    if (Z === 11) return who + 'the $n = 2$ shell is full, so the newest electron takes ' + q + ' in ' + sub + '.';
    if (Z === 19) return who + 'the newest electron takes ' + q + ' in 4s, while 3d is still empty.';
    return who + 'the newest electron takes ' + q + ' in ' + sub + '.';
  }

  function draw() {
    const { ctx } = begin(d.c);
    const Z = Math.round(z.v), k = grow.v;
    hits = [];
    const lines = topline(ctx, headlineFor(Z));

    /* the key, as the book draws it */
    const KX = 1010, KY = lines === 2 ? 132 : 118;
    electron(ctx, KX, KY, 1, 10, 20); text(ctx, 'spin up, m_{s} = +1/2', KX + 30, KY, PAL.ink, { size: 20 });
    electron(ctx, KX, KY + 58, -1, 10, 20); text(ctx, 'spin down, m_{s} = −1/2', KX + 30, KY + 58, PAL.ink, { size: 20 });

    /* the rows and their states */
    [1, 2, 3, 4].forEach((n) => text(ctx, 'n = ' + n, 150, ROWY[n], PAL.ink, { size: 22, weight: 600, align: 'right' }));
    SUBS.forEach(([n, l]) => {
      const col = subColor(n, l), y = ROWY[n];
      for (let ml = -l; ml <= l; ml++) {
        const cx = segX(l, ml);
        line(ctx, cx - SEG / 2, y, cx + SEG / 2, y, col, 4);
        hits.push({ x: cx, y: y + 6, r: 16, name: 'a state of ' + n + LETTER[l] + ', m_l = ' + signed(ml) + ', with room for two electrons of opposite spin' });
      }
      const gx = (segX(l, -l) + segX(l, l)) / 2;
      text(ctx, n + LETTER[l], gx, y + 44, col, { size: 22, weight: 600, align: 'center' });
    });

    /* the electrons, the newest arriving from above */
    const shown = Math.ceil(k - 1e-6);
    for (let i = 0; i < Math.min(shown, 20); i++) {
      const e = states[i], a = Math.max(0, Math.min(1, k - i));
      if (a <= 0) continue;
      const x = segX(e.l, e.ml) + (e.ms > 0 ? -17 : 17), y = ROWY[e.n] - (1 - a) * 26;
      ctx.save(); ctx.globalAlpha *= a; electron(ctx, x, y, e.ms); ctx.restore();
      hits.push({ x, y, r: 16, name: 'an electron in ' + e.n + LETTER[e.l] + ', ' + set(e.n, e.l, e.ml, e.ms) });
    }
    const last = states[Z - 1], lx = segX(last.l, last.ml) + (last.ms > 0 ? -17 : 17);
    ctx.save(); ctx.globalAlpha *= Math.max(0, Math.min(1, k - Z + 1)); ctx.strokeStyle = alpha(PAL.ink, 0.55); ctx.lineWidth = 2; ctx.setLineDash([5, 5]);
    ctx.beginPath(); ctx.arc(lx, ROWY[last.n], 21, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();

    /* the configuration, subshell by subshell */
    const count = {};
    states.slice(0, Z).forEach((e) => { const s = e.n + LETTER[e.l]; count[s] = (count[s] || 0) + 1; });
    const subs = ORDER.map(([n, l]) => n + LETTER[l]).filter((s) => count[s]);
    const conf = subs.map((s) => s + '^{' + count[s] + '}').join('\\,');
    const sum = subs.map((s) => count[s]).join(' + ');
    const outer = subs[subs.length - 1], cap = 2 * (2 * LETTER.indexOf(outer[1]) + 1), have = count[outer];
    ro.set(conf + ':\\quad Z = ' + (subs.length > 1 ? sum + ' = ' : '') + Z,
      have === cap ? '$' + outer + '$ holds all ' + cap + ' of its places: the outer subshell is filled.' : '$' + outer + '$ holds ' + have + ' of its ' + cap + ' places.',
      { form: 'conf' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   Sim · sim-shell-capacity · still · flat (rule 28.1)
   Every state of the shell n: one row per subshell l = 0 to n − 1, one box
   per m_l in columns from −3 to 3, each box holding a spin-up and a
   spin-down electron. The layout is fixed for n = 4 so the rows two shells
   share stay put when n changes; the rows only one has fade, staggered.
   Opens on n = 2, the shell of Example 30.5.
===================================================================== */
(function () {
  const H = 560;
  const d = sim('sim-shell-capacity', H);
  const CX = 700, COL = 116, BW = 98, BH = 74, Y0 = 190, ROW = 92;
  const REFS = { '1s': 'sub-1s', '2s': 'sub-2s', '2p': 'sub-2p', '3s': 'sub-3s', '3p': 'sub-3p', '3d': 'sub-3d', '4s': 'sub-4s', '4d': 'sub-4d' };
  const subColor = (n, l) => { const s = n + LETTER[l]; return REFS[s] ? F.ref(REFS[s]) : F.cat(s === '4p' ? 0 : 1); };
  const nPick = F.choice(d.controls, { label: 'n', options: ['1', '2', '3', '4'].map((v) => ({ value: v, label: v })), value: '2', aria: 'the shell n' });
  const ro = readout(d);
  let hits = [];
  hover(d.stage, () => hits);

  function presence(l, from, to, k) {
    const inOld = l < from, inNew = l < to;
    if (inOld && inNew) return 1;
    if (inNew) return F.ease.smooth(Math.max(0, Math.min(1, (F.stagger(k, l - from, Math.max(1, to - from), 0.2) - 0.3) / 0.7)));
    if (inOld) return 1 - F.ease.smooth(Math.max(0, Math.min(1, k / 0.6)));
    return 0;
  }

  function draw() {
    const { ctx } = begin(d.c);
    const n = +nPick.value, from = +nPick.from, k = nPick.k;
    hits = [];
    const head = n === 1 ? 'Shell $n = 1$: a single subshell, 1s, with the single value $m_l = 0$.'
      : 'Shell $n = ' + n + '$: each subshell has two more values of $m_l$ than the one before it.';
    topline(ctx, head);

    /* the m_l column heads */
    text(ctx, 'm_{l}', CX - 4 * COL + 10, 112, PAL.ink, { size: 22, weight: 600, align: 'center' });
    for (let m = -3; m <= 3; m++) {
      const a = Math.max(presence(Math.abs(m), from, n, k), 0);
      if (a <= 0) continue;
      ctx.save(); ctx.globalAlpha *= a;
      text(ctx, signed(m), CX + m * COL, 112, PAL.muted, { size: 20, align: 'center' });
      ctx.restore();
    }
    line(ctx, CX - 3.5 * COL, 136, CX + 3.5 * COL, 136, alpha(PAL.ink, 0.3), 2);

    for (let l = 0; l < 4; l++) {
      const a = presence(l, from, n, k);
      if (a <= 0) continue;
      const shellN = l < n ? n : from, col = subColor(shellN, l), y = Y0 + l * ROW;
      ctx.save(); ctx.globalAlpha *= a; ctx.translate(0, (1 - a) * (l < n ? -14 : 14));
      text(ctx, shellN + LETTER[l], CX - 4 * COL + 10, y - 12, col, { size: 24, weight: 600, align: 'center' });
      text(ctx, 'l = ' + l, CX - 4 * COL + 10, y + 16, PAL.ink, { size: 18, align: 'center' });
      for (let m = -l; m <= l; m++) {
        const bx = CX + m * COL;
        ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 3; ctx.beginPath(); ctx.roundRect(bx - BW / 2, y - BH / 2, BW, BH, 8); ctx.stroke(); ctx.restore();
        electron(ctx, bx - 20, y, 1, 11, 24);
        electron(ctx, bx + 20, y, -1, 11, 24);
        if (l < n) {
          hits.push({ x: bx - 20, y, r: 15, name: 'an electron in ' + shellN + LETTER[l] + ', ' + set(shellN, l, m, 1) });
          hits.push({ x: bx + 20, y, r: 15, name: 'an electron in ' + shellN + LETTER[l] + ', ' + set(shellN, l, m, -1) });
        }
      }
      text(ctx, '2(2l + 1) = ' + 2 * (2 * l + 1), CX + 3.5 * COL + 24, y, PAL.ink, { size: 20, align: 'left' });
      ctx.restore();
    }

    const caps = Array.from({ length: n }, (_, l) => 2 * (2 * l + 1));
    const odd = Array.from({ length: n }, (_, l) => 2 * l + 1);
    ro.set((n > 1 ? caps.join(' + ') + ' = ' : '') + 2 * n * n + ' = 2n^{2} = 2(' + n + ')^{2}',
      n > 1 ? '$' + odd.join(' + ') + ' = ' + n * n + ' = n^{2}$ values of $m_l$, two electrons each.' : '$1 = n^{2}$ value of $m_l$, with two electrons.',
      { form: 'sum' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 30.56 · fig-notation · faithful copy, still
   The notation 2p³ with its three parts pointed out, as the book prints it.
===================================================================== */
(function () {
  const H = 300;
  const d = sim('fig-notation', H);
  function draw() {
    const { ctx } = begin(d.c);
    const y = 120;
    const w2 = F.measure(ctx, '2', { size: 64, italic: true }), wp = F.measure(ctx, 'p', { size: 64, italic: true });
    const x2 = 640, xp = x2 + w2, x3 = xp + wp + 2;
    text(ctx, '2', x2, y, PAL.ink, { size: 64, italic: true });
    text(ctx, 'p', xp, y, PAL.ink, { size: 64, italic: true });
    text(ctx, '3', x3, y - 22, PAL.ink, { size: 38, italic: true });
    arrow(ctx, 560, 236, x2 + w2 / 2 - 4, y + 34, PAL.ink, 3);
    text(ctx, 'n', 550, 258, PAL.ink, { size: 30, italic: true, align: 'center' });
    arrow(ctx, 820, 236, xp + wp / 2 + 2, y + 34, PAL.ink, 3);
    text(ctx, '$l$ symbol', 820, 258, PAL.ink, { size: 28, align: 'center', tex: true });
    arrow(ctx, 860, 72, x3 + 22, y - 36, PAL.ink, 3);
    text(ctx, 'number of electrons', 874, 66, PAL.ink, { size: 28, align: 'left' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 30.57 · fig-n2-states · faithful copy, still
   The table of Example 30.5: the eight sets (n, l, m_l, m_s) of the n = 2
   shell, braced by subshell and by shell, as the book sets it.
===================================================================== */
(function () {
  const H = 560;
  const d = sim('fig-n2-states', H);
  const ROWS = [[0, 0, 1], [0, 0, -1], [1, 1, 1], [1, 1, -1], [1, 0, 1], [1, 0, -1], [1, -1, 1], [1, -1, -1]];
  const XS = [250, 350, 460, 570], Y0 = 158, DY = 48;
  /* a curly brace opening to the left, its point at the middle */
  function brace(ctx, x, y1, y2, color) {
    const m = (y1 + y2) / 2, w = 14;
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.beginPath();
    ctx.moveTo(x, y1); ctx.quadraticCurveTo(x + w, y1, x + w, y1 + 14); ctx.lineTo(x + w, m - 14); ctx.quadraticCurveTo(x + w, m, x + 2 * w, m);
    ctx.quadraticCurveTo(x + w, m, x + w, m + 14); ctx.lineTo(x + w, y2 - 14); ctx.quadraticCurveTo(x + w, y2, x, y2);
    ctx.stroke(); ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const hy = 84, b = { size: 22, weight: 600, italic: true, align: 'center' };
    text(ctx, 'n', XS[0], hy, PAL.ink, b);
    text(ctx, 'l', XS[1], hy, PAL.ink, b);
    text(ctx, 'm_{l}', XS[2], hy, PAL.ink, b);
    text(ctx, 'm_{s}', XS[3], hy, PAL.ink, b);
    text(ctx, 'Subshell', 760, hy, PAL.ink, b);
    text(ctx, 'Total in', 930, hy - 16, PAL.ink, b); text(ctx, 'subshell', 930, hy + 14, PAL.ink, b);
    text(ctx, 'Total in', 1130, hy - 16, PAL.ink, b); text(ctx, 'shell', 1130, hy + 14, PAL.ink, b);
    line(ctx, 200, 122, 1200, 122, PAL.ink, 4);
    ROWS.forEach(([l, ml, ms], i) => {
      const y = Y0 + i * DY;
      text(ctx, '2', XS[0], y, PAL.ink, { size: 22, align: 'center' });
      text(ctx, String(l), XS[1], y, PAL.ink, { size: 22, align: 'center' });
      text(ctx, signed(ml), XS[2], y, PAL.ink, { size: 22, align: 'center' });
      text(ctx, half(ms), XS[3], y, PAL.ink, { size: 22, align: 'center' });
    });
    const yA = Y0 - 18, yB = Y0 + DY + 18, yC = Y0 + 2 * DY - 18, yD = Y0 + 7 * DY + 18;
    const c2s = F.ref('sub-2s'), c2p = F.ref('sub-2p');
    brace(ctx, 630, yA, yB, c2s);
    text(ctx, '2s', 760, (yA + yB) / 2, c2s, { size: 24, weight: 600, italic: true, align: 'center' });
    text(ctx, '2', 930, (yA + yB) / 2, PAL.ink, { size: 22, align: 'center' });
    brace(ctx, 630, yC, yD, c2p);
    text(ctx, '2p', 760, (yC + yD) / 2, c2p, { size: 24, weight: 600, italic: true, align: 'center' });
    text(ctx, '6', 930, (yC + yD) / 2, PAL.ink, { size: 22, align: 'center' });
    brace(ctx, 1010, yA, yD, PAL.ink);
    text(ctx, '8', 1130, (yA + yD) / 2, PAL.ink, { size: 22, align: 'center' });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
