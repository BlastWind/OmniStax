/* Figures for section 10.6 Collisions of Extended Bodies in Two Dimensions. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['10.6'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, hover, cycle, register, begin, line, arrow, dot, text, topline, vbracket, labeller } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const TAU = 2 * Math.PI;
const sgn = (v) => (v < 0 ? '−' : '');
/* three significant figures, never in exponent form */
const sig3 = (x) => { const s = Math.abs(x).toPrecision(3); return sgn(x) + (s.includes('e') ? String(Math.round(Number(s))) : s); };
const ELL = 1.20;                                   /* the stick's length, the book's 1.20 m, held fixed */
/* a uniform stick of width w from (x1, y1) to (x2, y2), in ink */
function stick(ctx, x1, y1, x2, y2, w, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineCap = 'butt'; ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke(); ctx.restore();
}
/* a nail head at (x, y): a filled dot with a lighter centre */
function nail(ctx, x, y) { dot(ctx, x, y, PAL.ink, true, 8); dot(ctx, x, y, PAL.panel, true, 3); }
/* a flat disk of radius r centred on (x, y), seen from above */
function disk(ctx, x, y, r, color) { dot(ctx, x, y, color, true, r); dot(ctx, x, y, PAL.panel, false, r * 0.45); }
/* a clockwise arc arrow about (cx, cy) of radius R from angle a0 through da (radians, canvas sense) */
function arcArrow(ctx, cx, cy, R, a0, da, color, w = 4) {
  ctx.save(); ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = w; ctx.beginPath(); ctx.arc(cx, cy, R, a0, a0 + da, da < 0); ctx.stroke();
  const a1 = a0 + da, tx = cx + R * Math.cos(a1), ty = cy + R * Math.sin(a1), dir = Math.sign(da) || 1;
  const hx = -Math.sin(a1) * dir, hy = Math.cos(a1) * dir;   /* the tangent in the direction of travel */
  ctx.beginPath(); ctx.moveTo(tx + hx * 12, ty + hy * 12); ctx.lineTo(tx - hy * 8 - hx * 4, ty + hx * 8 - hy * 4); ctx.lineTo(tx + hy * 8 - hx * 4, ty - hx * 8 - hy * 4); ctx.closePath(); ctx.fill(); ctx.restore();
}
/* a bar of a pair: hollow before, filled after; the bar is clipped at the cap with a marker and its number always written */
function bar(ctx, x, base, w, hmax, value, cap, color, filled, label) {
  const h = Math.min(hmax, (value / cap) * hmax), over = value > cap, top = base - h;
  ctx.save();
  if (filled) { ctx.fillStyle = color; ctx.fillRect(x - w / 2, top, w, h); }
  else { ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.setLineDash([8, 6]); ctx.strokeRect(x - w / 2, top, w, h); }
  ctx.restore();
  if (over) { ctx.save(); ctx.fillStyle = filled ? PAL.panel : color; ctx.beginPath(); ctx.moveTo(x - 10, top + 22); ctx.lineTo(x + 10, top + 22); ctx.lineTo(x, top + 8); ctx.closePath(); ctx.fill(); ctx.restore(); }
  text(ctx, label, x, top - 16, color, { size: 17, weight: 600, align: 'center' });
}

/* =====================================================================
   FIGURE 10.33: the disk slides toward the nailed stick, sticks, and the
   two turn together about the nail. Bars below carry the angular momentum,
   the kinetic energy and the linear momentum before and after. Moving: the
   approach is the clock.
   Scene scale: 150 units per metre about the nail at (760, 300); the pair
   can turn full circles inside y 120 to 480. Bar caps from the book's
   defaults: 4 kg·m²/s, 40 J, 4 kg·m/s, never rescaled.
===================================================================== */
(function () {
  const d = sim('sim-disk-stick', 820);
  const m = ctl(d.controls, { label: 'm', cls: '', min: 10, max: 200, step: 1, value: 50, unit: 'g', dec: 0, onInput: reset, aria: 'mass of the disk' });
  const v = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 5, max: 40, step: 0.5, value: 30, unit: 'm/s', dec: 1, onInput: reset, aria: 'speed of the disk' });
  const r = ctl(d.controls, { label: '\\kr', cls: 'position', min: 0.1, max: 1.2, step: 0.01, value: 1.2, unit: 'm', dec: 2, onInput: reset, aria: 'where the disk strikes, from the nail', detents: [{ v: 0.1, label: 'nail' }, { v: 0.8, label: 'percussion point' }, { v: 1.2 }] });
  const M = ctl(d.controls, { label: 'M', cls: '', min: 0.5, max: 4, step: 0.05, value: 2, unit: 'kg', dec: 2, onInput: reset, aria: 'mass of the stick' });
  const labels = choice(d.controls, { label: 'Labels', options: [{ value: 'off', label: 'Off' }, { value: 'on', label: 'On' }], value: 'off', aria: 'names of the disk, the stick and the nail' });
  const APPROACH = 2.4;                            /* metres of table the disk crosses before it strikes */
  const state = () => {
    const mk = m.v / 1000, L = mk * v.v * r.v, Ip = mk * r.v * r.v + (M.v * ELL * ELL) / 3, w = L / Ip;
    const KE = 0.5 * mk * v.v * v.v, KEp = 0.5 * Ip * w * w, p = mk * v.v, pp = (mk * r.v + (M.v * ELL) / 2) * w;
    return { mk, L, Ip, w, KE, KEp, p, pp, tA: APPROACH / v.v, tR: 1.0 };
  };
  const cy = cycle(() => { const s = state(); return s.tA + s.tR; }, 1.2);
  function reset() { cy.reset(); }
  const NX = 760, NY = 300, SC = 150, K = 3;       /* the nail, units per metre, units per m/s of arrow */
  let hits = [];
  hover(d.stage, () => hits);
  function draw() {
    const { ctx, H } = begin(d.c);
    const s = state(), tau = cy.now(), struck = tau >= s.tA - 1e-9, th = struck ? s.w * (tau - s.tA) : 0;
    const lab = labeller(ctx, H); lab.block(0, 0, 1400, 90);
    /* the table */
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(340, 92, 700, 430); ctx.strokeStyle = PAL.rule; ctx.lineWidth = 1.5; ctx.strokeRect(340, 92, 700, 430); ctx.restore();
    text(ctx, 'frictionless surface, seen from above', 350, 508, PAL.muted, { size: 17 });
    const at = (dist, ang) => ({ x: NX + dist * SC * Math.sin(ang), y: NY - dist * SC * Math.cos(ang) });
    const tip = at(ELL, th), hit = at(r.v, th);
    if (struck) { const g = at(ELL, 0); line(ctx, NX, NY, g.x, g.y, alpha(PAL.ink, 0.3), 3, [10, 10]); }
    stick(ctx, NX, NY, tip.x, tip.y, 16, PAL.ink);
    nail(ctx, NX, NY);
    hits = [{ x: NX, y: NY, r: 22, name: 'the nail, the pivot' }, { x: (NX + tip.x) / 2, y: (NY + tip.y) / 2, r: 60, name: 'the stick, mass M' }];
    if (!struck) {
      const dx = NX - (APPROACH - v.v * tau) * SC, dy = NY - r.v * SC;
      disk(ctx, dx, dy, 13, PAL.ink); hits.push({ x: dx, y: dy, r: 24, name: 'the disk, mass m' });
      arrow(ctx, dx + 16, dy, dx + 16 + K * v.v, dy, C('velocity'), 5);
      lab.add('v', dx + 16 + (K * v.v) / 2, dy, 0, 1, C('velocity'), 24, 26);
      vbracket(ctx, NX + 34, NY, NY - r.v * SC, C('position'), 'r = ' + fmt(r.v, 2) + ' m', 1);
      if (labels.value === 'on') { lab.add('disk', dx, dy, 0, 1, PAL.ink, 20, 30); lab.add('stick', NX, NY - (ELL * SC) / 2, -1, 0, PAL.ink, 20, 24); lab.add('nail', NX, NY, 1, 0.6, PAL.ink, 20, 26); }
    } else {
      disk(ctx, hit.x, hit.y, 13, PAL.ink); hits.push({ x: hit.x, y: hit.y, r: 24, name: 'the disk, stuck to the stick' });
      /* the velocity of the disk and of the stick's centre, tangential and clockwise */
      const tx = Math.cos(th), ty = Math.sin(th), vp = r.v * s.w, vcm = (ELL / 2) * s.w;
      const ax = hit.x + 18 * tx, ay = hit.y + 18 * ty;
      arrow(ctx, ax, ay, ax + K * vp * tx, ay + K * vp * ty, C('velocity'), 5);
      lab.add("v′", ax + K * vp * tx, ay + K * vp * ty, tx, ty, C('velocity'), 24, 22);
      const cm = at(ELL / 2, th);
      arrow(ctx, cm.x + 12 * tx, cm.y + 12 * ty, cm.x + 12 * tx + K * vcm * tx, cm.y + 12 * ty + K * vcm * ty, C('velocity'), 4);
      lab.add('v_CM', cm.x + 12 * tx + K * vcm * tx, cm.y + 12 * ty + K * vcm * ty, tx, ty, C('velocity'), 22, 22);
      /* the angular velocity about the nail */
      arcArrow(ctx, NX, NY, 46, -Math.PI / 2 + th - 0.9, 1.8, C('angular-rate'), 4);
      const la = -Math.PI / 2 + th; lab.add("ω′", NX + 70 * Math.cos(la), NY + 70 * Math.sin(la), Math.cos(la), Math.sin(la), C('angular-rate'), 24, 16);
      if (labels.value === 'on') { lab.add('disk', hit.x, hit.y, -tx, -ty, PAL.ink, 20, 30); lab.add('stick', cm.x, cm.y, -tx, -ty, PAL.ink, 20, 30); lab.add('nail', NX, NY, -Math.sin(th) || -1, Math.cos(th), PAL.ink, 20, 26); }
    }
    /* the bars: before hollow, after filled, three fixed caps */
    const BY = 770, HM = 165;
    line(ctx, 60, BY, 1340, BY, PAL.rule, 2);
    text(ctx, 'Hollow bars are before the collision and filled bars after it.', 700, 548, PAL.muted, { size: 17, align: 'center' });
    const groups = [
      { x: 250, cap: 4, before: s.L, after: s.L, color: C('angular-momentum'), name: 'angular momentum L, kg·m²/s', unit: '' },
      { x: 700, cap: 40, before: s.KE, after: s.KEp, color: C('energy'), name: 'kinetic energy KE, J', unit: '' },
      { x: 1150, cap: 4, before: s.p, after: s.pp, color: C('momentum'), name: 'linear momentum p, kg·m/s', unit: '' },
    ];
    for (const g of groups) {
      bar(ctx, g.x - 50, BY, 64, HM, g.before, g.cap, g.color, false, sig3(g.before));
      if (struck) bar(ctx, g.x + 50, BY, 64, HM, g.after, g.cap, g.color, true, sig3(g.after));
      else { ctx.save(); ctx.strokeStyle = alpha(g.color, 0.35); ctx.lineWidth = 2; ctx.setLineDash([4, 8]); ctx.strokeRect(g.x + 18, BY - 4, 64, 4); ctx.restore(); }
      text(ctx, g.name, g.x, BY + 26, g.color, { size: 20, weight: 600, align: 'center' });
    }
    lab.flush();
    topline(ctx, !struck
      ? 'The ' + fmt(m.v, 0) + ' g disk slides toward the stick at ' + fmt(v.v, 1) + ' m/s and will strike it ' + fmt(r.v, 2) + ' m from the nail.'
      : 'Stuck together, the disk and the ' + fmt(M.v, 2) + ' kg stick turn about the nail at ' + sig3(s.w) + ' rad/s.');
    const dp = s.pp - s.p, same = Math.abs(dp) < 0.005 * s.p;
    readout(d.readout, `\\kwprime = \\frac{m\\kv\\kr}{\\kIprime} = \\frac{(${sig3(s.mk)}\\ \\text{kg})(${fmt(v.v, 1)}\\ \\text{m/s})(${fmt(r.v, 2)}\\ \\text{m})}{${sig3(s.Ip)}\\ \\text{kg}\\cdot\\text{m}^2} = ${sig3(s.w)}\\ \\text{rad/s}`,
      !struck ? 'Before the collision the disk’s angular momentum about the nail is L = mvr = ' + sig3(s.L) + ' kg·m²/s, its kinetic energy is ' + sig3(s.KE) + ' J and its linear momentum is ' + sig3(s.p) + ' kg·m/s.'
        : 'The angular momentum is still ' + sig3(s.L) + ' kg·m²/s and the kinetic energy has fallen to ' + sig3(s.KEp) + ' J, while the linear momentum '
          + (same ? 'is unchanged at ' + sig3(s.pp) + ' kg·m/s, because the disk struck at the percussion point and the nail pushed neither forward nor backward.'
            : dp > 0 ? 'has risen from ' + sig3(s.p) + ' to ' + sig3(s.pp) + ' kg·m/s, because the nail pushed forward on the stick.'
              : 'has fallen from ' + sig3(s.p) + ' to ' + sig3(s.pp) + ' kg·m/s, because the nail pushed backward on the stick.'));
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => { const s = state(); return cy.now() < s.tA ? s.tA / 1.5 : s.tR / 3.5; }), draw });
})();

/* =====================================================================
   FIGURE 10.34: the nailed stick and a racquet held at the end of its
   handle, struck the same fraction of the way along; the force each
   delivers to its pivot is drawn there. Still: one blow at one point is a
   picture, not a motion. Scale 350 units per metre, pivots on y = 540; the
   force on the pivot is drawn beneath it so that it never lies along the
   ball's blow when the ball lands near the pivot.
===================================================================== */
(function () {
  const d = sim('sim-percussion', 640);
  const f = ctl(d.controls, { label: 'r/\\ell', cls: '', min: 0.1, max: 1, step: 0.01, value: 0.95, unit: 'of the length', dec: 2, aria: 'where the ball strikes, as a fraction of the length from the pivot', detents: [{ v: 0.35, label: 'down the shaft' }, { v: 2 / 3, label: 'percussion point' }, { v: 0.95, label: 'near the end' }] });
  const SC = 350, PY = 540, LS = ELL, LR = 0.685, SX = 430, RX = 940, FL = 120;   /* lengths in m, body x positions, the ball's arrow length */
  function racquet(ctx, x, top, base) {
    const L = base - top, head = { cy: top + 0.24 * L, rx: 0.19 * L, ry: 0.24 * L }, throat = top + 0.5 * L, grip = base - 0.22 * L;
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.ink; ctx.lineWidth = 5; ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.ellipse(x, head.cy, head.rx, head.ry, 0, 0, TAU); ctx.stroke();
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 1.5; ctx.beginPath(); ctx.ellipse(x, head.cy, head.rx, head.ry, 0, 0, TAU); ctx.clip();
    for (let k = -4; k <= 4; k++) { ctx.moveTo(x + k * 9, head.cy - head.ry); ctx.lineTo(x + k * 9, head.cy + head.ry); ctx.moveTo(x - head.rx, head.cy + k * 12); ctx.lineTo(x + head.rx, head.cy + k * 12); }
    ctx.stroke(); ctx.restore();
    ctx.beginPath(); ctx.moveTo(x - head.rx * 0.55, head.cy + head.ry * 0.85); ctx.lineTo(x - 6, throat); ctx.lineTo(x - 6, base); ctx.lineTo(x + 6, base); ctx.lineTo(x + 6, throat); ctx.lineTo(x + head.rx * 0.55, head.cy + head.ry * 0.85); ctx.closePath(); ctx.stroke();
    ctx.fillRect(x - 6, grip, 12, base - grip);
    ctx.restore();
  }
  function hand(ctx, x, y) {
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.18); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.roundRect(x - 22, y - 34, 44, 40, 10); ctx.fill(); ctx.stroke();
    for (let k = 0; k < 3; k++) line(ctx, x - 22, y - 26 + k * 10, x + 22, y - 26 + k * 10, alpha(PAL.ink, 0.5), 1.5);
    ctx.restore();
  }
  function draw() {
    const { ctx, H } = begin(d.c);
    const k = 1 - 1.5 * f.v, zero = Math.abs(k) < 0.02, rs = f.v * LS, rr = f.v * LR;
    const lab = labeller(ctx, H); lab.block(0, 0, 1400, 90);
    const bodies = [
      { x: SX, len: LS, pivot: 'nail', force: 'F_nail', r: rs },
      { x: RX, len: LR, pivot: 'hand', force: 'F_hand', r: rr },
    ];
    for (const b of bodies) {
      const top = PY - b.len * SC, ys = PY - f.v * b.len * SC, yp = PY - (2 / 3) * b.len * SC;
      if (b.pivot === 'nail') { stick(ctx, b.x, PY, b.x, top, 18, PAL.ink); nail(ctx, b.x, PY); }
      else { racquet(ctx, b.x, top, PY); hand(ctx, b.x, PY); }
      /* the ball and its blow */
      dot(ctx, b.x - 34, ys, PAL.ink, true, 15); dot(ctx, b.x - 34, ys, PAL.panel, false, 8);
      arrow(ctx, b.x + 14, ys, b.x + 14 + FL, ys, C('force'), 5);
      lab.add('F_ball', b.x + 14 + FL, ys, 1, 0, C('force'), 22, 18);
      /* the force the body delivers to its pivot */
      const FY = PY + 44;                          /* the force on the pivot, drawn beneath it */
      if (zero) lab.add(b.force + ' = 0', b.x, FY, 0, 0, C('force'), 22, 0);
      else {
        const x0 = b.x - 8 * Math.sign(k), x1 = x0 + FL * k;
        arrow(ctx, x0, FY, x1, FY, C('force'), 5);
        lab.add(b.force, x1, FY, Math.sign(k), 0, C('force'), 22, 18);
      }
      /* the percussion point and the distance struck from the pivot */
      dot(ctx, b.x, yp, C('position'), false, 8);
      if (b.pivot === 'nail') lab.add('percussion point', b.x, yp, 1, 1, C('position'), 20, 22);
      vbracket(ctx, b.x - 110, PY, ys, C('position'), 'r = ' + fmt(b.r, b.r < 1 ? 3 : 2) + ' m', -1);
      lab.add(b.pivot, b.x, PY, -1, 0.3, PAL.ink, 20, 30);
    }
    text(ctx, 'stick, 1.20 m, nailed at one end', SX, 620, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'racquet, 0.685 m, held at the end of its handle', RX, 620, PAL.muted, { size: 17, align: 'center' });
    lab.flush();
    const where = zero ? 'at the percussion point' : f.v > 0.85 ? 'near its end' : k < 0 ? 'beyond the percussion point' : f.v < 0.4 ? 'down on its shaft' : 'short of the percussion point';
    topline(ctx, zero
      ? 'Struck ' + fmt(rr, 3) + ' m from the hand, at the percussion point, the racquet delivers no force to the hand, and the stick none to its nail.'
      : k < 0 ? 'Struck ' + fmt(rr, 3) + ' m from the hand, ' + where + ', the racquet pulls the hand backward with ' + fmt(-k, 2) + ' of the ball’s force, and the stick does the same to its nail.'
        : 'Struck ' + fmt(rr, 3) + ' m from the hand, ' + where + ', the racquet pushes into the hand with ' + fmt(k, 2) + ' of the ball’s force, and the stick does the same to its nail.');
    readout(d.readout, `\\kF_{\\text{hand}} = \\kF_{\\text{nail}} = \\left(1 - \\frac{3}{2}\\,\\frac{r}{\\ell}\\right)\\kF_{\\text{ball}} = \\left(1 - \\frac{3}{2}\\times${fmt(f.v, 2)}\\right)\\kF_{\\text{ball}} = ${zero ? '0' : sgn(k) + fmt(Math.abs(k), 2) + '\\,\\kF_{\\text{ball}}'}`,
      'Both bodies are taken as uniform rods pivoted at one end, for which the percussion point lies two thirds of the way along, 0.800 m from the nail and 0.457 m from the hand. A negative factor is a force opposite to the ball’s push, which pulls the handle out of the hand.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
