/* Figures for section 11.1 What Is a Fluid? Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['11.1'] = function (root, F) {
const { el, PAL, alpha, cycle, register, begin, line, arrow, text, topline, spring, fixed, choice, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI;

/* a small seeded generator, so that the page loads to the same picture every time and a stopped figure is the same figure */
function rng(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

/* an atom or ion: a filled disc in the element palette; hydrogen takes an ink outline so that its light disc reads on a light page */
function atom(ctx, sym, x, y, r) {
  ctx.save(); ctx.fillStyle = F.el(sym); ctx.strokeStyle = sym === 'H' ? PAL.ink : alpha(PAL.ink, 0.35); ctx.lineWidth = sym === 'H' ? 1.5 : 1;
  ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); ctx.stroke(); ctx.restore();
}
/* a water molecule centred on its oxygen and turned by a: the two hydrogens sit 104.5 degrees apart */
function water(ctx, x, y, a) {
  const b = 1.823 / 2;
  atom(ctx, 'H', x + 11 * Math.cos(a - b), y + 11 * Math.sin(a - b), 5);
  atom(ctx, 'H', x + 11 * Math.cos(a + b), y + 11 * Math.sin(a + b), 5);
  atom(ctx, 'O', x, y, 9);
}
/* an oxygen molecule, two oxygens side by side, turned by a */
function dioxygen(ctx, x, y, a) { const c = 6.5 * Math.cos(a), s = 6.5 * Math.sin(a); atom(ctx, 'O', x - c, y - s, 7); atom(ctx, 'O', x + c, y + s, 7); }
/* the darker of the page's ink and ground, so that a mark on hydrogen's light disc reads in both themes */
const lum = (c) => { const m = /^#([0-9a-f]{6})$/i.exec(c.trim()); if (m) return [0, 2, 4].reduce((a, i) => a + parseInt(m[1].slice(i, i + 2), 16), 0); const g = /rgb\((\d+)[, ]+(\d+)[, ]+(\d+)/.exec(c); return g ? +g[1] + +g[2] + +g[3] : 0; };
const onLight = () => (lum(PAL.bg || '') < lum(PAL.ink || '') ? PAL.bg : PAL.ink);
/* a proton, drawn as hydrogen with its charge on it, and an electron, a small ink dot */
function proton(ctx, x, y) { atom(ctx, 'H', x, y, 8); text(ctx, '+', x, y, onLight(), { size: 14, weight: 600, align: 'center' }); }
function electron(ctx, x, y) { ctx.save(); ctx.fillStyle = PAL.ink; ctx.beginPath(); ctx.arc(x, y, 4.5, 0, TAU); ctx.fill(); ctx.restore(); }

/* =====================================================================
   FIGURE 11.2: the four phases. A crystal of iron, water in an open
   beaker, oxygen in a closed container and a hydrogen plasma in another,
   each in motion: the atoms of the solid vibrate about fixed places, the
   molecules of the liquid stay in contact and slide past one another, the
   molecules of the gas and the particles of the plasma fly freely. A
   choice pushes on all four at once, sideways, downward, or by taking the
   lids off, and each sample answers as the text says it does. The motion
   has no period, so the cycle is unbounded and the figure carries play,
   stop and speed with no scrubber. The page binds no type: every particle
   takes the element palette, the electrons and the apparatus are ink.
   ===================================================================== */
(function () {
  const H = 580, d = sim('sim-phases', H);
  const PX = (i) => 40 + i * 340;                    /* the left edge of each panel, 300 wide with 40 between */
  const BT = 130, BB = 470, BW = 240;                /* the sample box: top, bottom and width, inset 30 into the panel */
  const XL = (i) => PX(i) + 30, XR = (i) => PX(i) + 30 + BW;
  const PLATE_W = 120, PLATE_H = 14, PLATE_V = 56;   /* the shearing plate and how fast it slides across a fluid */
  const PISTON_V = 85;                               /* how fast the piston travels where nothing stops it */
  const random = rng(11);
  const rnd = (lo, hi) => lo + (hi - lo) * random();

  const mode = choice(d.controls, { label: '\\text{push on the samples}', aria: 'push on the samples', options: [
    { value: 'leave', label: 'leave them' }, { value: 'shear', label: 'shear them' }, { value: 'compress', label: 'compress them' }, { value: 'open', label: 'open the lids' }],
    value: 'leave', onInput: (v) => setMode(v) });

  /* ---------- (a) the solid: a four-by-four lattice of iron atoms on a ground ---------- */
  const S = 60, AR = 12, CX0 = PX(0) + 150, ROWS = 4, COLS = 4;
  const lattice = [];
  for (let k = 0; k < ROWS; k++) for (let j = 0; j < COLS; j++) lattice.push({ j, k, ph: rnd(0, TAU), ps: rnd(0, TAU) });
  const solid = { lean: 0, depth: 0 };
  const siteY = (k) => BB - 2 - AR - k * S * (1 - solid.depth / (S * (ROWS - 1)));
  const siteX = (j, k) => CX0 - 90 + j * S + solid.lean * (k / (ROWS - 1));
  const solidTop = () => siteY(ROWS - 1) - AR;                                    /* where the plate or the piston rests on the crystal */

  /* ---------- (b) the liquid: water molecules packed under gravity in an open beaker ---------- */
  const LR = 13, LN = 40, G = 900, K = 6000, KC = 600, DAMP = 2.5, KICK = 420;
  const liq = [];
  for (let n = 0; n < LN; n++) { const k = Math.floor(n / 8), j = n % 8; liq.push({ x: XL(1) + 4 + LR + 2 + j * 28 + (k % 2 ? 8 : 0), y: BB - 4 - LR - k * 26, vx: 0, vy: 0, a: rnd(0, TAU), w: rnd(-1.5, 1.5) }); }
  const liquid = { plateX: 0, plateY: 0, depth: 0 };
  const surface = () => Math.min(...liq.map((q) => q.y)) - LR;

  /* ---------- (c) the gas and (d) the plasma: free particles in closed containers ---------- */
  function free(i, n, r, lo, hi, kind) {
    const out = [];
    for (let m = 0; m < n; m++) { const a = rnd(0, TAU), v = rnd(lo, hi); out.push({ x: rnd(XL(i) + 20, XR(i) - 20), y: rnd(BT + 20, BB - 20), vx: v * Math.cos(a), vy: v * Math.sin(a), a: rnd(0, TAU), w: rnd(-2, 2), r, kind, gone: false }); }
    return out;
  }
  const gas = { p: free(2, 10, 12, 110, 170, 'O2'), plateX: 0, depth: 0, open: false };
  const plasma = { p: free(3, 8, 8, 90, 130, 'p').concat(free(3, 8, 6, 220, 300, 'e')), plateX: 0, depth: 0, open: false };
  const refill = (b, i) => b.p.forEach((q) => { if (!q.gone) return; const a = rnd(0, TAU), v = Math.hypot(q.vx, q.vy); Object.assign(q, { x: rnd(XL(i) + 20, XR(i) - 20), y: rnd(BT + 20, BB - 20), vx: v * Math.cos(a), vy: v * Math.sin(a), gone: false }); });

  let m = 'leave', t = 0;
  function setMode(v) {
    m = v; t = 0;
    liquid.plateX = 0; gas.plateX = 0; plasma.plateX = 0;
    if (v === 'shear') liquid.plateY = surface();
    if (v === 'compress') liquid.plateY = surface();
    gas.open = plasma.open = v === 'open';
    if (v !== 'open') { refill(gas, 2); refill(plasma, 3); }
  }
  const approach = (x, target, rate, h) => x + (target - x) * (1 - Math.exp(-rate * h));
  const travel = (x, target, v, h) => (x < target ? Math.min(target, x + v * h) : Math.max(target, x - v * h));

  /* the free particles of one container: straight lines, reflected at the walls, at the piston and under the plate; with the lid off they leave */
  function stepFree(b, i, h) {
    const top = BT + b.depth, xl = XL(i), xr = XR(i);
    for (const q of b.p) {
      if (q.gone) continue;
      q.x += q.vx * h; q.y += q.vy * h; q.a += q.w * h;
      if (b.open && q.y < BT - q.r) { if (q.y < 100 || q.x < 10 || q.x > 1390) q.gone = true; continue; }   /* out of the box and away */
      if (q.x < xl + q.r) { q.x = xl + q.r; q.vx = Math.abs(q.vx); } else if (q.x > xr - q.r) { q.x = xr - q.r; q.vx = -Math.abs(q.vx); }
      const underPlate = m === 'shear' && q.x > xl + 4 + b.plateX - q.r && q.x < xl + 4 + b.plateX + PLATE_W + q.r;
      const ceiling = b.open ? -Infinity : top + (underPlate ? PLATE_H : 0);
      if (q.y < ceiling + q.r) { q.y = ceiling + q.r; q.vy = Math.abs(q.vy); } else if (q.y > BB - 4 - q.r) { q.y = BB - 4 - q.r; q.vy = -Math.abs(q.vy); }
    }
  }
  /* the liquid: gravity, a stiff repulsion where two molecules overlap, a weak attraction just beyond contact, damping, and a thermal kick */
  function stepLiquid(h) {
    const xl = XL(1) + 4, xr = XR(1) - 4, floor = BB - 4;
    for (let a = 0; a < liq.length; a++) {
      const p = liq[a];
      for (let b = a + 1; b < liq.length; b++) {
        const q = liq[b], dx = q.x - p.x, dy = q.y - p.y, dd = Math.hypot(dx, dy) || 0.01;
        if (dd > 2.6 * LR) continue;
        const f = dd < 2 * LR ? K * (2 * LR - dd) : -KC * (dd - 2 * LR), ux = dx / dd, uy = dy / dd;
        p.vx -= f * ux * h; p.vy -= f * uy * h; q.vx += f * ux * h; q.vy += f * uy * h;
      }
    }
    const plateL = xl + liquid.plateX, plateR = plateL + PLATE_W;
    for (const p of liq) {
      p.vy += G * h; p.vx += (random() - 0.5) * 2 * KICK * h; p.vy += (random() - 0.5) * 2 * KICK * h;
      p.vx -= DAMP * p.vx * h; p.vy -= DAMP * p.vy * h;
      if (m === 'shear' && p.x > plateL - LR && p.x < plateR + LR) {
        if (p.y < liquid.plateY + LR) { p.y = liquid.plateY + LR; p.vy = Math.max(0, p.vy); }        /* under the plate */
        if (p.y < liquid.plateY + 2.4 * LR) p.vx += (PLATE_V - p.vx) * 6 * h;                        /* the top layer is dragged along with it */
      }
      if (m === 'compress' || liquid.depth > 0) { const lid = liquid.plateY + liquid.depth; if (p.y < lid + LR) { p.y = lid + LR; p.vy = Math.max(0, p.vy); } }
      p.x += p.vx * h; p.y += p.vy * h; p.a += p.w * h;
      if (p.x < xl + LR) { p.x = xl + LR; p.vx = Math.abs(p.vx) * 0.3; } else if (p.x > xr - LR) { p.x = xr - LR; p.vx = -Math.abs(p.vx) * 0.3; }
      if (p.y > floor - LR) { p.y = floor - LR; p.vy = -Math.abs(p.vy) * 0.3; }
    }
  }
  function step(dt) {
    t += dt;
    const n = Math.ceil(dt / 0.008), h = dt / n;
    for (let s = 0; s < n; s++) {
      solid.lean = approach(solid.lean, m === 'shear' ? 16 : 0, 4, h);
      solid.depth = travel(solid.depth, m === 'compress' ? 6.8 : 0, PISTON_V, h);
      liquid.depth = travel(liquid.depth, m === 'compress' ? 6 : 0, PISTON_V, h);
      gas.depth = travel(gas.depth, m === 'compress' ? 170 : 0, PISTON_V, h);
      plasma.depth = travel(plasma.depth, m === 'compress' ? 170 : 0, PISTON_V, h);
      if (m === 'shear') { liquid.plateX = Math.min(BW - 8 - PLATE_W, liquid.plateX + PLATE_V * h); gas.plateX = liquid.plateX; plasma.plateX = liquid.plateX; }
      stepLiquid(h); stepFree(gas, 2, h); stepFree(plasma, 3, h);
    }
  }

  /* ---------- drawing ---------- */
  const hits = [];
  const hit = (x, y, r, name) => hits.push({ x, y, r, name });
  /* the plate or the piston, with the push on it drawn as an arrow in ink, since this page binds no type: sideways onto a plate's left end, downward onto a piston's middle */
  function plate(ctx, x, y, w, name, dir) {
    fixed(ctx, x, y, w, PLATE_H); for (let s = 15; s < w; s += 30) hit(x + s, y + PLATE_H / 2, 17, name);
    if (dir === 'right') arrow(ctx, x - 46, y + PLATE_H / 2, x - 3, y + PLATE_H / 2, PAL.ink, 4);
    if (dir === 'down') arrow(ctx, x + w / 2, y - 46, x + w / 2, y - 3, PAL.ink, 4);
  }
  /* a closed container, or one with its lid swung open on its right-hand hinge */
  function box(ctx, i, open, name) {
    const xl = XL(i), xr = XR(i);
    line(ctx, xl, BT, xl, BB, PAL.ink, 4); line(ctx, xr, BT, xr, BB, PAL.ink, 4); line(ctx, xl - 2, BB, xr + 2, BB, PAL.ink, 4);
    if (!open) line(ctx, xl - 2, BT, xr + 2, BT, PAL.ink, 4);   /* the lid is simply gone when the reader takes it off */
    hit(xl, (BT + BB) / 2, 12, name); hit(xr, (BT + BB) / 2, 12, name);
  }
  const HEAD = {
    leave: 'Left alone, the atoms of the solid vibrate about fixed places, the molecules of the liquid slide past one another in contact, and the molecules of the gas and the particles of the plasma fly freely.',
    shear: 'The sideways push slides the plate freely across the liquid, the gas and the plasma, and hardly moves it across the solid, which leans a little and holds.',
    compress: 'The piston stops almost at once on the solid and the liquid, whose atoms are already in contact, and travels half way down the gas and the plasma.',
    open: 'With the lids off, the gas and the plasma escape, and the liquid stays in its open container.',
  };
  const READ = {
    leave: ['Liquids, gases, and plasmas are fluids because they yield to shearing forces, whereas solids resist them.', 'The atoms of the solid keep the same neighbors and only vibrate; the molecules of the liquid stay in contact but slide past one another; the molecules of the gas and the particles of the plasma are far apart and move about freely.'],
    shear: ['A fluid yields to a shearing force and flows; a solid resists one.', 'The atoms of the solid lean a little toward new positions and spring back when the push is removed, because the forces between them act like springs. The molecules of the liquid change neighbors and do not spring back, and the molecules of the gas and the particles of the plasma simply move out of the way.'],
    compress: ['Solids and liquids resist compression; gases and plasmas are easy to compress.', 'The atoms of the solid and the molecules of the liquid are already in contact, so pushing them closer would force them into one another. There is much space and little force between the molecules of a gas and the particles of a plasma, so the piston travels far.'],
    open: ['A liquid remains in an open container; a gas or a plasma escapes from one.', 'The molecules of the liquid are held together by their mutual attraction and by the floor of the beaker. The molecules of the gas and the particles of the plasma move freely in every direction, so nothing keeps them in a container with no lid.'],
  };
  let shown = '';
  function readout(main, small) {
    if (shown === m) return; shown = m;
    const s = el('span'); s.style.fontFamily = 'var(--sans)'; s.style.fontSize = '1rem'; s.textContent = main;
    d.readout.replaceChildren(s, el('small', null, small));
  }
  const CAP = [['(a) solid: a crystal of iron', 'atoms in contact, vibrating in place'], ['(b) liquid: water in a beaker', 'molecules in contact, sliding past one another'],
    ['(c) gas: oxygen in a closed box', 'molecules far apart, moving freely'], ['(d) plasma: protons and electrons', 'particles far apart, moving freely']];
  function draw() {
    const { ctx } = begin(d.c);
    hits.length = 0;
    topline(ctx, HEAD[m]);
    /* (a) the crystal: springs first, then the atoms over them */
    const pos = lattice.map((q) => ({ x: siteX(q.j, q.k) + 3.5 * Math.sin(7 * t + q.ph), y: siteY(q.k) + 3.5 * Math.cos(9 * t + q.ps), j: q.j, k: q.k }));
    const at = (j, k) => pos[k * COLS + j];
    for (const p of pos) {
      if (p.j + 1 < COLS) { const q = at(p.j + 1, p.k), L = Math.hypot(q.x - p.x, q.y - p.y), ux = (q.x - p.x) / L, uy = (q.y - p.y) / L; spring(ctx, p.x + ux * AR, p.y + uy * AR, q.x - ux * AR, q.y - uy * AR, 3, 5, PAL.muted, 2); }
      if (p.k + 1 < ROWS) { const q = at(p.j, p.k + 1), L = Math.hypot(q.x - p.x, q.y - p.y), ux = (q.x - p.x) / L, uy = (q.y - p.y) / L; spring(ctx, p.x + ux * AR, p.y + uy * AR, q.x - ux * AR, q.y - uy * AR, 3, 5, PAL.muted, 2); }
    }
    for (const p of pos) { atom(ctx, 'Fe', p.x, p.y, AR); hit(p.x, p.y, AR + 3, 'an iron atom, held near home by the forces the springs stand for'); }
    line(ctx, PX(0) + 24, BB, PX(0) + 276, BB, PAL.ink, 4); hit(PX(0) + 150, BB, 10, 'the ground the crystal stands on');
    if (m === 'shear') { const x = CX0 - 100 + solid.lean, y = solidTop() - PLATE_H; plate(ctx, x, y, 200, 'a plate pushed sideways, which the solid holds after a hair of lean', 'right'); text(ctx, 'a sideways push', CX0, y - 18, PAL.ink, { size: 17, align: 'center', bg: PAL.panel }); }
    if (m === 'compress' || solid.depth > 0) { const y = solidTop() - PLATE_H; plate(ctx, CX0 - 100, y, 200, 'a piston pushed down, which the solid stops almost at once', 'down'); text(ctx, 'a piston pushed down', CX0, y - 62, PAL.ink, { size: 17, align: 'center', bg: PAL.panel }); }
    /* (b) the beaker and the water in it */
    line(ctx, XL(1), BT + 20, XL(1), BB, PAL.ink, 4); line(ctx, XR(1), BT + 20, XR(1), BB, PAL.ink, 4); line(ctx, XL(1) - 2, BB, XR(1) + 2, BB, PAL.ink, 4);
    hit(XL(1), (BT + BB) / 2, 12, 'an open beaker'); hit(XR(1), (BT + BB) / 2, 12, 'an open beaker');
    for (const p of liq) { water(ctx, p.x, p.y, p.a); hit(p.x, p.y, LR + 2, 'a water molecule, an oxygen atom with two hydrogens'); }
    if (m === 'shear') plate(ctx, XL(1) + 4 + liquid.plateX, liquid.plateY - PLATE_H, PLATE_W, 'a plate pushed sideways, which slides across the liquid', 'right');
    if (m === 'compress' || liquid.depth > 0) plate(ctx, XL(1) + 4, liquid.plateY + liquid.depth - PLATE_H, BW - 8, 'a piston pushed down, which the liquid stops almost at once', 'down');
    /* (c) the oxygen and (d) the plasma in their boxes */
    box(ctx, 2, gas.open, 'a closed container of oxygen'); box(ctx, 3, plasma.open, 'a closed container of hydrogen plasma');
    for (const q of gas.p) { if (q.gone) continue; dioxygen(ctx, q.x, q.y, q.a); hit(q.x, q.y, 16, 'an oxygen molecule, O₂'); }
    for (const q of plasma.p) { if (q.gone) continue; if (q.kind === 'p') { proton(ctx, q.x, q.y); hit(q.x, q.y, 12, 'a proton, the nucleus of a hydrogen atom'); } else { electron(ctx, q.x, q.y); hit(q.x, q.y, 10, 'an electron'); } }
    for (const [b, i] of [[gas, 2], [plasma, 3]]) {
      if (m === 'shear') plate(ctx, XL(i) + 4 + b.plateX, BT, PLATE_W, 'a plate pushed sideways, which nothing resists', 'right');
      if (m === 'compress' || b.depth > 0) plate(ctx, XL(i) + 4, BT + b.depth - PLATE_H, BW - 8, 'a piston pushed down, which travels half way before it is stopped', 'down');
    }
    /* the captions under the four panels */
    CAP.forEach(([cap, note], i) => { text(ctx, cap, PX(i) + 150, 502, PAL.ink, { size: 19, weight: 600, align: 'center' }); text(ctx, note, PX(i) + 150, 530, PAL.muted, { size: 16, align: 'center' }); });
    readout(READ[m][0], READ[m][1]);
  }
  hover(d.stage, () => hits);
  const cy = cycle(() => Infinity, 0);
  register(d.fig, { update: (dt) => { cy.step(dt, () => 1); step(dt); }, draw });
})();
};
