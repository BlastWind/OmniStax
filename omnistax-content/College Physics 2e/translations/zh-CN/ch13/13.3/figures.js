/* Figures for section 13.3 The Ideal Gas Law. Boots against the section's text article.
   Two of the three figures are still pictures that answer their sliders: the
   box of widely separated molecules and the layer of a mole of balls on the
   Earth register no cycle and carry no transport. The tire moves, because the
   pressure it shows is molecules striking a wall per unit time and no still
   can show a rate; its readout counts the strikes, so the motion carries the
   number the gauge reads. Temperature is never a tint on anything here: the
   molecules wear the element palette, the tube and the box are ink, and the
   temperature hue sits on the slider, the symbol and the readout only. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['13.3'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, cycle, hover, register, begin, line, arrow, dot, text, topline, hbracket, vbracket, fixed, plane } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) { const n = el('small', null, small); host.appendChild(n); F.renderMath(n); } }

/* ---------- small helpers shared by the figures ---------- */
const TAU = 2 * Math.PI;
const K_B = 1.38e-23, N_A = 6.02e23, P_ATM = 1.01e5;
/* a number in scientific form for the readout (KaTeX) and for the canvas (unicode superscripts) */
const SUP = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
const sup = (n) => String(n).split('').map((c) => SUP[c] ?? c).join('');
function parts(x, d) { const e = Math.floor(Math.log10(Math.abs(x))); let m = x / Math.pow(10, e); if (+m.toFixed(d) >= 10) { m /= 10; return { m: m.toFixed(d), e: e + 1 }; } return { m: m.toFixed(d), e }; }
const sciK = (x, d) => { const p = parts(x, d); return `${p.m}\\times10^{${p.e}}`; };
const sciU = (x, d) => { const p = parts(x, d); return `${p.m} × 10${sup(p.e)}`; };
/* a small deterministic random sequence, so a still figure draws the same scatter every time */
function rng(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
/* one molecule of a gas drawn at (x, y) with its long axis along angle a: nitrogen and
   oxygen are two atoms side by side, helium one atom; the size s is the molecule's length */
function molecule(ctx, x, y, kind, s, a = 0) {
  const col = F.el(kind);
  ctx.save(); ctx.fillStyle = col; ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 1.2;
  if (kind === 'He') { ctx.beginPath(); ctx.arc(x, y, s / 2, 0, TAU); ctx.fill(); ctx.stroke(); }
  else {
    const r = s * 0.31, o = s * 0.22, dx = o * Math.cos(a), dy = o * Math.sin(a);
    ctx.beginPath(); ctx.arc(x - dx, y - dy, r, 0, TAU); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(x + dx, y + dy, r, 0, TAU); ctx.fill(); ctx.stroke();
  }
  ctx.restore();
}
const GAS = { N: { name: '氮', formula: 'N₂', size: 0.30 }, O: { name: '氧', formula: 'O₂', size: 0.30 }, He: { name: '氦', formula: 'He', size: 0.26 } };

/* =====================================================================
   FIGURE 13.18: the widely separated molecules of a gas. A box seen in
   section, the molecules on a jittered grid whose spacing the reader sets in
   molecular diameters, so that packing them to one diameter gives the
   liquid and spreading them to ten gives a gas of one thousandth the
   density. Still: where the molecules are is a snapshot with no time in it.
===================================================================== */
(function () {
  const d = sim('sim-gas-molecules', 600);
  const ds = ctl(d.controls, { label: '\\text{间距}', cls: '', min: 1, max: 12, step: 0.5, value: 10, unit: '个直径', dec: 1, aria: '相邻分子之间的间距，以分子直径为单位' });
  const gas = choice(d.controls, { label: '\\text{气体}', options: [{ value: 'N', label: '氮 N₂' }, { value: 'O', label: '氧 O₂' }, { value: 'He', label: '氦 He' }], value: 'N', aria: '盒中充的是哪种气体' });
  const A = 14;                                     /* one molecular diameter on the canvas */
  const box = { l: 60, r: 860, t: 100, b: 570 };    /* the box of gas */
  function draw() {
    const { ctx } = begin(d.c);
    const sp = ds.v, kind = gas.value, g = GAS[kind], step = sp * A, ratio = Math.pow(sp, 3);
    /* the box, in ink */
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.strokeRect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.restore();
    /* the molecules on a grid, jittered by a share of the room each has, so that a gas looks like a gas and a packed liquid like a liquid */
    const rnd = rng(1303), jit = Math.max(0, (step - A) * 0.42), cols = Math.floor((box.r - box.l - A) / step), rows = Math.floor((box.b - box.t - A) / step);
    const ox = box.l + ((box.r - box.l) - (cols - 1) * step) / 2, oy = box.t + ((box.b - box.t) - (rows - 1) * step) / 2;
    ctx.save(); ctx.beginPath(); ctx.rect(box.l + 2, box.t + 2, box.r - box.l - 4, box.b - box.t - 4); ctx.clip();
    let first = null, second = null;
    for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
      const x = ox + i * step + (rnd() * 2 - 1) * jit, y = oy + j * step + (rnd() * 2 - 1) * jit, a = rnd() * Math.PI;
      molecule(ctx, x, y, kind, A, kind === 'He' ? 0 : a);
      if (j === 0 && i === 0) first = { x, y }; if (j === 0 && i === 1) second = { x, y };
    }
    ctx.restore();
    /* one spacing, bracketed above the first two molecules of the top row */
    if (first && second && step >= 48) hbracket(ctx, first.x, second.x, Math.min(first.y, second.y) - 20, PAL.ink, 'd = ' + fmt(sp, 1) + ' 个直径');
    /* the legend and the numbers, at the right */
    const lx = 900;
    molecule(ctx, lx + 10, 150, kind, 30, kind === 'He' ? 0 : -0.3);
    text(ctx, '一个' + g.name + '分子，' + g.formula, lx + 40, 150, PAL.ink, { size: 20 });
    text(ctx, '宽约 ' + fmt(g.size, 2) + ' nm', lx + 40, 180, PAL.muted, { size: 17 });
    text(ctx, '间距 d = ' + fmt(sp, 1) + ' 个直径', lx, 250, PAL.ink, { size: 22, weight: 600 });
    text(ctx, '每个分子占据的空间 ∝ d³ = ' + fmt(ratio, 0) + ' a³', lx, 292, PAL.ink, { size: 20 });
    text(ctx, '密度（相对于紧密堆积的液体）', lx, 340, PAL.muted, { size: 19 });
    text(ctx, ratio === 1 ? '1' : '1 / ' + fmt(ratio, ratio < 10 ? 1 : 0), lx, 378, PAL.ink, { size: 26, weight: 600 });
    text(ctx, sp === 1 ? '相距一个直径紧密堆积，如同液体' : sp < 3 ? '仍然拥挤，如同稠密的气体' : '大部分是空的，如同气体', lx, 420, PAL.muted, { size: 17 });
    text(ctx, '在同一温度和压强下，', lx, 462, PAL.muted, { size: 17 });
    text(ctx, '相同体积含有相同数目的', lx, 486, PAL.muted, { size: 17 });
    text(ctx, '分子，与气体种类无关。', lx, 510, PAL.muted, { size: 17 });
    topline(ctx, sp === 1 ? '紧密堆积、相距一个直径时，分子彼此接触，如同在液体中，密度就是液体的密度。'
      : '相距 ' + fmt(sp, 1) + ' 个直径时，无论是哪种气体，气体的密度都是紧密堆积的液体的 1/' + fmt(ratio, ratio < 10 ? 1 : 0) + '。');
    readout(d.readout, `\\frac{\\krho_{\\text{gas}}}{\\krho_{\\text{liquid}}} = \\left(\\frac{a}{d}\\right)^3 = \\left(\\frac{1}{${fmt(sp, 1)}}\\right)^3 = ${ratio === 1 ? '1' : '\\frac{1}{' + fmt(ratio, ratio < 10 ? 1 : 0) + '}'}`,
      '标准状况下一立方米含有 2.68 × 10²⁵ 个分子，所以每个分子独占一个边长 3.3 nm 的立方体，约为一个' + g.name + '分子直径的十倍。');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 13.19: the tire pumped up and then warmed. The tube of a bicycle
   tire in section, the molecules of the air moving inside it and striking
   the wall, and a gauge reading the absolute pressure. Moving, because the
   pressure is momentum delivered to the wall per unit time and a still
   cannot show a rate: the readout counts the strikes of the last second,
   so the motion is the number the gauge reads. An endless cycle, so play,
   stop and speed and no scrubber. One drawn molecule stands for 10^22
   real ones, four in five nitrogen and one in five oxygen.
===================================================================== */
(function () {
  const d = sim('sim-tire', 680);
  const Ns = ctl(d.controls, { label: 'N', cls: '', min: 0, max: 6, step: 0.002, value: 3.486, unit: '× 10²³ 个分子', dec: 2, onInput: () => { recount(); }, aria: '轮胎中的分子数，以 10²³ 为单位' });
  const Ts = ctl(d.controls, { label: '\\kTemp', cls: 'temperature', min: -40, max: 60, step: 1, value: 18, unit: '°C', dec: 0, onInput: () => { respeed(); }, aria: '轮胎中空气的温度' });
  const ro = F.readout(d);
  const cy = cycle(() => Infinity, 0);
  const V_FULL = 2.00e-3;                          /* the tube holds 2.00 L when full, as in Examples 13.4 and 13.7 */
  Ns.mark([{ at: () => (P_ATM * V_FULL) / (K_B * (Ts.v + 273)) / 1e23, label: '充满' }]);
  const RIM_Y = 600, CX = 520, R_FULL = 200, R_MIN = 28, RM = 7, DRAWN = 1e22, KV = 170;
  const rnd = rng(1319);
  const mol = [];                                  /* the drawn molecules, in coordinates relative to the tube's centre */
  const hits = [];                                 /* the model times of the strikes on the wall */
  let tm = 0;                                      /* the model clock, in seconds */
  /* the state of the gas from the sliders: still filling at atmospheric pressure, or full with the pressure rising */
  function state() {
    const N = Ns.v * 1e23, TK = Ts.v + 273, NkT = N * K_B * TK;
    const Vfree = NkT / P_ATM, full = Vfree >= V_FULL * (1 - 1e-9);
    const V = N === 0 ? 0 : full ? V_FULL : Vfree, P = N === 0 ? P_ATM : full ? NkT / V_FULL : P_ATM;
    return { N, TK, NkT, V, P, full };
  }
  const radius = (V) => (V <= 0 ? 0 : Math.max(R_MIN, R_FULL * Math.sqrt(V / V_FULL)));
  const speed = (TK) => KV * Math.sqrt(TK / 291);
  function spawn(R, TK) {
    const kind = mol.length % 5 === 4 ? 'O' : 'N', a = rnd() * TAU, rr = Math.sqrt(rnd()) * Math.max(0, R - RM - 2), b = rnd() * TAU, f = 0.7 + 0.6 * rnd();
    mol.push({ x: rr * Math.cos(b), y: rr * Math.sin(b), vx: f * speed(TK) * Math.cos(a), vy: f * speed(TK) * Math.sin(a), f, kind, ang: rnd() * Math.PI });
  }
  function recount() {
    const s = state(), want = Math.round(s.N / DRAWN), R = radius(s.V);
    while (mol.length > want) mol.pop();
    while (mol.length < want) spawn(R, s.TK);
    confine(R); hits.length = 0;
  }
  function respeed() {
    const v = speed(state().TK);
    for (const m of mol) { const L = Math.hypot(m.vx, m.vy) || 1; m.vx = (m.vx / L) * v * m.f; m.vy = (m.vy / L) * v * m.f; }
  }
  /* keep every molecule inside a tube that has just shrunk */
  function confine(R) { const lim = Math.max(1, R - RM - 1); for (const m of mol) { const r = Math.hypot(m.x, m.y); if (r > lim) { m.x *= lim / r; m.y *= lim / r; } } }
  function step(dt) {
    const s = state(), R = radius(s.V), lim = R - RM;
    tm += dt;
    for (const m of mol) {
      m.x += m.vx * dt; m.y += m.vy * dt;
      const r = Math.hypot(m.x, m.y);
      if (r > lim) {
        const nx = m.x / r, ny = m.y / r, vn = m.vx * nx + m.vy * ny;
        if (vn > 0) { m.vx -= 2 * vn * nx; m.vy -= 2 * vn * ny; hits.push(tm); }
        m.x = nx * lim; m.y = ny * lim;
      }
      m.ang += 1.6 * dt;
    }
    while (hits.length && hits[0] < tm - 1) hits.shift();
  }
  recount();
  hover(d.stage, () => { const s = state(), cyy = RIM_Y - 4 - radius(s.V); return mol.map((m) => ({ x: CX + m.x, y: cyy + m.y, r: 14, name: m.kind === 'O' ? '一个氧分子，O₂' : '一个氮分子，N₂' })); });
  /* the gauge: a dial reading absolute pressure from 0 to 14 × 10^5 Pa, sweeping 270° clockwise from the lower left */
  function gauge(ctx, gx, gy, GR, P) {
    const pc = C('pressure'), a0 = 0.75 * Math.PI, sweep = 1.5 * Math.PI, PMAX = 14;
    const ang = (v) => a0 + (v / PMAX) * sweep;
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(gx, gy, GR, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.strokeStyle = pc; ctx.lineWidth = 6; ctx.beginPath(); ctx.arc(gx, gy, GR - 16, a0, a0 + sweep); ctx.stroke(); ctx.restore();
    for (let v = 0; v <= PMAX; v++) {
      const a = ang(v), big = v % 2 === 0, r1 = GR - 16, r2 = r1 - (big ? 18 : 10);
      line(ctx, gx + r1 * Math.cos(a), gy + r1 * Math.sin(a), gx + r2 * Math.cos(a), gy + r2 * Math.sin(a), PAL.ink, big ? 3 : 2);
      if (big) text(ctx, String(v), gx + (r2 - 22) * Math.cos(a), gy + (r2 - 22) * Math.sin(a), PAL.ink, { size: 17, align: 'center' });
    }
    /* the mark for atmospheric pressure, which is what an empty gauge sits at */
    const aa = ang(P_ATM / 1e5); line(ctx, gx + (GR - 10) * Math.cos(aa), gy + (GR - 10) * Math.sin(aa), gx + (GR + 8) * Math.cos(aa), gy + (GR + 8) * Math.sin(aa), PAL.muted, 3);
    text(ctx, '大气压', gx + (GR + 30) * Math.cos(aa), gy + (GR + 30) * Math.sin(aa) - 4, PAL.muted, { size: 15, align: 'right' });
    text(ctx, '× 10⁵ Pa', gx, gy + GR * 0.45, PAL.muted, { size: 16, align: 'center' });
    const an = ang(Math.min(PMAX, P / 1e5));
    arrow(ctx, gx - 22 * Math.cos(an), gy - 22 * Math.sin(an), gx + (GR - 72) * Math.cos(an), gy + (GR - 72) * Math.sin(an), PAL.ink, 8);
    arrow(ctx, gx - 22 * Math.cos(an), gy - 22 * Math.sin(an), gx + (GR - 72) * Math.cos(an), gy + (GR - 72) * Math.sin(an), pc, 4);
    dot(ctx, gx, gy, PAL.ink, true, 8);
  }
  function draw() {
    const { ctx } = begin(d.c);
    const pc = C('pressure'), tc = C('temperature'), vc = C('volume'), rc = F.ref('tire');
    const s = state(), R = radius(s.V), cyy = RIM_Y - 4 - (s.N === 0 ? 14 : R), nhit = hits.length;
    /* the rim and the tube in section, in ink; a flat tube lies on the rim as an ellipse */
    fixed(ctx, CX - 130, RIM_Y, 260, 26);
    text(ctx, '轮辋', CX, RIM_Y + 46, PAL.muted, { size: 17, align: 'center' });
    ctx.save(); ctx.strokeStyle = rc; ctx.lineWidth = s.full ? 7 : 4; ctx.fillStyle = alpha(PAL.soft, 0.5); ctx.beginPath();
    if (s.N === 0) ctx.ellipse(CX, cyy, R_FULL * 0.9, 14, 0, 0, TAU); else ctx.arc(CX, cyy, R, 0, TAU);
    ctx.fill(); ctx.stroke(); ctx.restore();
    /* the molecules inside it, nitrogen and oxygen in their own colours */
    for (const m of mol) molecule(ctx, CX + m.x, cyy + m.y, m.kind, 2 * RM, m.ang);
    /* what the tube is doing */
    text(ctx, s.N === 0 ? '瘪了' : s.full ? 'V = ' + fmt(s.V * 1e3, 2) + ' L，已充满' : 'V = ' + fmt(s.V * 1e3, 2) + ' L，仍在充气', CX, cyy - R - 30, s.N === 0 ? rc : vc, { size: 20, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    if (s.full && s.N > 0) text(ctx, '胎壁限定了体积', CX, cyy - R - 58, PAL.muted, { size: 17, align: 'center' });
    /* the strikes on the wall, and the legend */
    text(ctx, '撞击胎壁的次数', 40, 120, PAL.ink, { size: 20, weight: 600 });
    text(ctx, '最近一秒内：' + nhit, 40, 150, PAL.ink, { size: 20, weight: 600 });
    molecule(ctx, 50, 200, 'N', 16, -0.3); text(ctx, '氮气，N₂', 72, 200, PAL.muted, { size: 17 });
    molecule(ctx, 50, 230, 'O', 16, -0.3); text(ctx, '氧气，O₂', 72, 230, PAL.muted, { size: 17 });
    text(ctx, '每个画出的分子', 40, 272, PAL.muted, { size: 17 });
    text(ctx, '代表 10²² 个分子', 40, 296, PAL.muted, { size: 17 });
    text(ctx, '速率由 T = ' + fmt(s.TK, 0) + ' K 决定', 40, 338, tc, { size: 17, weight: 600 });
    /* the gauge and its readings */
    const GX = 1080, GY = 340, GR = 150;
    gauge(ctx, GX, GY, GR, s.P);
    text(ctx, '绝对压强', GX, GY - GR - 40, PAL.muted, { size: 19, align: 'center' });
    text(ctx, 'P = ' + sciU(s.P, 2) + ' Pa', GX, GY + GR + 44, pc, { size: 24, weight: 600, align: 'center' });
    const gp = s.P - P_ATM;
    text(ctx, gp > 0 ? '表压强 ' + sciU(gp, 2) + ' Pa，即 ' + fmt(gp / 6894.76, 1) + ' lb/in²' : '表压强为零', GX, GY + GR + 80, PAL.muted, { size: 17, align: 'center' });
    const Nt = fmt(Ns.v, 2) + ' × 10²³ 个分子', Tt = fmt(Ts.v, 0) + ' °C';
    topline(ctx, s.N === 0 ? '轮胎里没有空气时，它瘪在轮辋上，里面没有任何东西去推它的胎壁。'
      : !s.full ? '有 ' + Nt + '、温度为 ' + Tt + ' 时，轮胎仍在充气：它的体积已增大到 ' + fmt(s.V * 1e3, 2) + ' L，压强保持为大气压。'
      : '有 ' + Nt + '、温度为 ' + Tt + ' 时，轮胎已充满，压强计读出的绝对压强为 ' + sciU(s.P, 2) + ' Pa。');
    /* one equation in three forms: the variables keep their tags, so reaching the circle on N bends V = NkT/P into P = NkT/V */
    const sym = { P: '\\mk{P}{\\kPr}', V: '\\mk{V}{\\kvol}', N: '\\mk{N}{N}', k: '\\mk{k}{k}', T: '\\mk{T}{\\kTemp}' };
    const nums = `(\\mk{nN}{${sciK(s.N || 1, 2)}})(\\mk{nk}{1.38\\times10^{-23}}\\ \\text{J/K})(\\mk{nT}{${fmt(s.TK, 0)}}\\ \\text{K})`;
    const now = s.N === 0 ? 'flat' : s.full ? 'full' : 'filling';
    const tx = now === 'flat' ? `${sym.P} ${sym.V} = ${sym.N}${sym.k}${sym.T} = \\mk{z}{0}`
      : now === 'filling' ? `${sym.V} = \\frac{${sym.N}${sym.k}${sym.T}}{${sym.P}} = \\frac{${nums}}{\\mk{nP}{${sciK(P_ATM, 2)}}\\ \\text{Pa}} = \\mk{nV}{${sciK(s.V, 2)}}\\ \\text{m}^3`
      : `${sym.P} = \\frac{${sym.N}${sym.k}${sym.T}}{${sym.V}} = \\frac{${nums}}{\\mk{nV}{${sciK(V_FULL, 2)}}\\ \\text{m}^3} = \\mk{nP}{${sciK(s.P, 2)}}\\ \\text{Pa}`;
    ro.set(tx, undefined, { form: now });
    if (s.N === 0) ro.note.textContent = '';
    else if (!s.full) ro.note.textContent = '轮胎在充气期间，里面的压强基本上就是大气压，体积与充入的分子数成正比地增大，这就是本书原图的（a）图；一旦体积达到 2.00 L，就由胎壁接管。';
    else {
      const P18 = s.N * K_B * 291 / V_FULL;
      ro.note.textContent = (Math.abs(s.TK - 291) < 0.5
          ? '体积和分子数保持不变时，压强随热力学温度变化：把轮胎加热到 35.0 °C，读数按 308 K/291 K 的比值升到 ' + sciU(P18 * 308 / 291, 2) + ' Pa，这正是例题 13.4 的结果。'
          : '体积和分子数保持不变时，压强按例题 13.4 所取的比值随热力学温度变化：在 18.0 °C 时这只轮胎的读数为 ' + sciU(P18, 2) + ' Pa，而在 ' + Tt + ' 时读数是它的 ' + fmt(s.TK / 291, 3) + ' 倍。');
    }
  }
  register(d.fig, { update: (dt) => { cy.step(dt, () => 1); step(dt); }, draw });
})();

/* =====================================================================
   FIGURE 13.20: how big a mole is. The Earth's surface with Everest to
   scale, the height airliners fly and the edge of space marked, and the
   layer a mole of balls would make spread over the whole planet. Still: a
   layer of balls at rest has no time in it; the diameter of the ball and
   the space between the balls are the sliders.
===================================================================== */
(function () {
  const d = sim('sim-mole', 620);
  const dd = ctl(d.controls, { label: '\\text{直径}', cls: 'position', min: 5, max: 50, step: 0.5, value: 37.5, unit: 'mm', dec: 1, detents: [{ v: 37.5, label: '一只乒乓球' }], snap: true, aria: '每只球的直径' });
  const fs = ctl(d.controls, { label: '\\text{额外空隙}', cls: '', min: 0, max: 50, step: 1, value: 25, unit: '%', dec: 0, aria: '球间的空隙，占球自身体积的比例' });
  const R_E = 6.371e6, AREA = 4 * Math.PI * R_E * R_E;   /* the Earth's surface, 5.10 × 10^14 m² */
  const EVEREST = 8.85, CRUISE = 11, SPACE = 100;        /* km */
  const GY = 560, TOP = 130, KM = (GY - TOP) / 100;      /* the vertical scale, 0 to 100 km, fixed */
  const Y = (km) => GY - km * KM;
  const L = 190, Rr = 1240;                              /* the scene runs from L to Rr */
  function draw() {
    const { ctx } = begin(d.c);
    const poc = C('position'), bc = F.ref('balls'), evc = F.ref('everest');
    const dm = dd.v / 1000, f = fs.v / 100, vBall = (Math.PI / 6) * dm * dm * dm, vMole = N_A * vBall * (1 + f), h = vMole / AREA, hkm = h / 1000;
    const out = hkm > SPACE, top = Y(Math.min(hkm, SPACE));
    /* the ground and the Earth beneath it */
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.10); ctx.fillRect(L, GY, Rr - L, 44); ctx.restore();
    line(ctx, L, GY, Rr, GY, PAL.ink, 4);
    text(ctx, '地球表面', Rr, GY + 30, PAL.muted, { size: 17, align: 'right' });
    /* the layer of balls, a band from the ground up to the depth, textured with rows of balls */
    ctx.save(); ctx.beginPath(); ctx.rect(L, top, Rr - L, GY - top); ctx.clip();
    ctx.fillStyle = alpha(PAL.ink, 0.08); ctx.fillRect(L, top, Rr - L, GY - top);
    ctx.strokeStyle = alpha(bc, 0.4); ctx.lineWidth = 1.5;
    const br = 6, pitch = 14;
    for (let j = 0, y = GY - br; y > top - br; j++, y -= pitch) for (let x = L + br + (j % 2) * (pitch / 2); x < Rr; x += pitch) { ctx.beginPath(); ctx.arc(x, y, br, 0, TAU); ctx.stroke(); }
    ctx.restore();
    line(ctx, L, top, Rr, top, bc, 3);
    /* Everest, to scale, and the two heights above it */
    const ex = 520, ew = 34;
    ctx.save(); ctx.fillStyle = evc; ctx.beginPath(); ctx.moveTo(ex - ew, GY); ctx.lineTo(ex - 8, Y(EVEREST) + 4); ctx.lineTo(ex, Y(EVEREST)); ctx.lineTo(ex + 10, Y(EVEREST) + 8); ctx.lineTo(ex + ew, GY); ctx.closePath(); ctx.fill(); ctx.restore();
    text(ctx, '珠穆朗玛峰，8.85 km', ex + ew + 12, Y(EVEREST) + 2, evc, { size: 17, bg: alpha(PAL.panel, 0.85) });
    plane(ctx, 840, Y(CRUISE), PAL.muted, 0.45);
    text(ctx, '客机巡航高度约 11 km', 880, Y(CRUISE), PAL.muted, { size: 17, bg: alpha(PAL.panel, 0.85) });
    line(ctx, L, Y(SPACE), Rr, Y(SPACE), PAL.muted, 2, [10, 10]);
    text(ctx, '太空边缘，100 km', Rr, Y(SPACE) - 18, PAL.muted, { size: 17, align: 'right' });
    /* the depth of the layer, bracketed at the right, or pinned at the top of the picture */
    if (!out) vbracket(ctx, Rr + 30, top, GY, poc, fmt(hkm, 1) + ' km', 1);
    else { arrow(ctx, Rr + 30, GY, Rr + 30, TOP - 24, poc, 3); text(ctx, fmt(hkm, 0) + ' km', Rr + 46, TOP + 10, poc, { size: 22, weight: 600 }); text(ctx, '超出顶端', Rr + 46, TOP + 36, PAL.muted, { size: 16 }); }
    /* one ball, at the left, its drawn size following the slider */
    const bx = 60, by = 300, brad = dd.v * 0.9;
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = bc; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(bx + 50, by, brad, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, '一只球', bx + 50, by + brad + 28, bc, { size: 18, align: 'center' });
    text(ctx, 'd = ' + fmt(dd.v, 1) + ' mm', bx + 50, by + brad + 54, poc, { size: 18, weight: 600, align: 'center' });
    text(ctx, '额外空隙 ' + fmt(fs.v, 0) + '%', bx + 50, by + brad + 80, PAL.muted, { size: 16, align: 'center' });
    const times = hkm / EVEREST;
    topline(ctx, '一摩尔直径 ' + fmt(dd.v, 1) + ' mm 的球，球间空隙的体积又占球自身体积的 ' + fmt(fs.v, 0) + '%，可以把地球覆盖到 ' + fmt(hkm, hkm < 10 ? 2 : 1) + ' km 的深度，' + (times < 0.5 ? '不到珠穆朗玛峰高度的' + (times < 0.1 ? '十分之一' : '一半') + '。' : '是珠穆朗玛峰高度的 ' + fmt(times, 1) + ' 倍。'));
    readout(d.readout, `h = \\frac{N_{\\text{A}}\\,\\tfrac{\\pi}{6}d^3\\,(1 + f)}{4\\pi R_{\\text{E}}^2} = \\frac{(6.02\\times10^{23})(${sciK(vBall, 2)}\\ \\text{m}^3)(${fmt(1 + f, 2)})}{${sciK(AREA, 2)}\\ \\text{m}^2} = ${sciK(h, 2)}\\ \\text{m}`,
      '一摩尔这样的球占据 ' + sciU(vMole, 2) + ' m³ 的体积，把这个体积铺在地球 ' + sciU(AREA, 2) + ' m² 的表面上，就是一层 ' + fmt(hkm, hkm < 10 ? 2 : 1) + ' km 深的球层。');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
