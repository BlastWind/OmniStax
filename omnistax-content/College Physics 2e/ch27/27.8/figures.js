/* Figures for section 27.8 Polarization. Every polarization arrow and dot
   wears electric-field, the intensities of Malus's law wear intensity, and
   every angle wears angle. Indices and the rope's amplitude are untyped and in
   ink. The rope and the slit, the two filters of the chain, the surface and
   its three rays, the filter face on with its molecules and electron, the
   sunlight and the molecule that scatters it, and the polarizer, layer,
   analyzer and pixel of the LCD are the section's referents; any other ray is
   ink, since the section gives its light no wavelength. The one colour that is
   the physical fact is the grey of the LCD pixel, drawn as bright as the light
   the analyzer passes, through F.fact. The rope's wave and the chain's pulse of
   light move, because the rope's wave travels and the book's slender arrow is the
   ray's propagation; every other filter, surface and molecule figure is a state
   of its controls. The chain of filters is drawn from one locked viewpoint, the book's
   own, by F.view (root rule 28.2). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['27.8'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, cycle, begin, line, arrow, dot, text, topline, label, angleArc, face, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) { const nb = el('small', null, small); host.appendChild(nb); F.renderMath(nb); } }

const RAD = Math.PI / 180;
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));

/* a double-headed arrow from a to b through their midpoint */
function dbl(ctx, a, b, color, w) {
  const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
  if (Math.hypot(b[0] - a[0], b[1] - a[1]) < 6) return;
  arrow(ctx, mx, my, a[0], a[1], color, w ?? 4); arrow(ctx, mx, my, b[0], b[1], color, w ?? 4);
}
/* a direction across the beam, a from the vertical and turning to the right as
   seen looking along the beam (+x), which is +z in the scene */
const across = (a) => [0, Math.cos(a), Math.sin(a)];
const add = (p, u, s) => [p[0] + u[0] * s, p[1] + u[1] * s, p[2] + u[2] * s];

/* one polarizing filter across the beam at x, its square turned with its axis,
   lines drawn along the axis as the book draws them */
function filter(ctx, P, x, a, h, name, col = PAL.ink) {
  const c = [x, 0, 0], u = across(a), w = across(a + Math.PI / 2);
  const corner = (su, sw) => P(add(add(c, u, su * h), w, sw * h));
  ctx.save(); ctx.globalAlpha = 0.9;
  const rim = [corner(1, 1), corner(1, -1), corner(-1, -1), corner(-1, 1)];
  face(ctx, rim, 0.1, 2.5);
  ctx.restore();
  ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 2.5; ctx.beginPath(); rim.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath(); ctx.stroke(); ctx.restore();
  for (let k = -3; k <= 3; k++) {
    if (k === 0) continue;
    const p = P(add(add(c, w, (k * h) / 4), u, h * 0.9)), q = P(add(add(c, w, (k * h) / 4), u, -h * 0.9));
    line(ctx, p[0], p[1], q[0], q[1], alpha(PAL.ink, 0.25), 2);
  }
  const t = P(add(c, u, h * 0.8)), b = P(add(c, u, -h * 0.8));
  dbl(ctx, b, t, col, 3);
  if (name) {
    const top = P(add(c, [0, 1, 0], h * 1.45));
    text(ctx, name, top[0], top[1], col, { size: 19, align: 'center', bg: PAL.panel });
  }
  return { axisEnd: t };
}
/* the burst of an unpolarized ray: eight fields across the beam at x */
function burst(ctx, P, x, L, color) {
  const o = P([x, 0, 0]);
  for (let i = 0; i < 8; i++) { const q = P(add([x, 0, 0], across((i * Math.PI) / 4), L)); arrow(ctx, o[0], o[1], q[0], q[1], color, 3.5); }
  return o;
}
/* the field of a polarized stretch of the ray at x: a double arrow of half-length L along a */
function field(ctx, P, x, a, L, color) {
  if (L < 4) return null;
  const p = P(add([x, 0, 0], across(a), L)), q = P(add([x, 0, 0], across(a), -L));
  dbl(ctx, q, p, color, 5);
  return p;
}
/* a stretch of the ray, as bright as the share k of the light it carries */
function ray(ctx, P, x1, x2, k, head) {
  const a = P([x1, 0, 0]), b = P([x2, 0, 0]), col = alpha(PAL.ink, 0.15 + 0.75 * clamp(k, 0, 1));
  if (head) arrow(ctx, a[0], a[1], b[0], b[1], col, 3); else line(ctx, a[0], a[1], b[0], b[1], col, 3);
}

/* =====================================================================
   Figure 27.38 · sim-rope-slit · moving · locked view (root rule 28.2)
   A wave is sent down a rope toward a slit in a board. The model clock runs
   5 s, over which the front of the wave travels the 1040 scene units of rope,
   then holds 1.2 s. Beyond the slit the amplitude is A cos θ, θ being 0° or
   90° between the rope's plane and the slit.
===================================================================== */
(function () {
  const d = sim('sim-rope-slit', 520);
  const rope = choice(d.controls, { label: '\\text{the rope}', options: [{ value: 'v', label: 'vertical' }, { value: 'h', label: 'horizontal' }], value: 'v', aria: 'the plane the rope is shaken in', onInput: () => cy.reset() });
  const slit = choice(d.controls, { label: '\\text{the slit}', options: [{ value: 'v', label: 'vertical' }, { value: 'h', label: 'horizontal' }], value: 'v', aria: 'the direction of the slit', onInput: () => cy.reset() });
  const V = F.view({ yaw: -0.62, pitch: -0.4, dist: 3200, cx: 640, cy: 290 });
  const P = V.P;
  const X0 = -520, X1 = 560, XS = 40, A = 70, LAM = 260, T = 5;
  const cy = cycle(() => T, 1.2);

  function draw() {
    const { ctx } = begin(d.c);
    const tau = cy.now(), front = X0 + ((X1 - X0) * tau) / T;
    const ra = rope.mix((v) => (v === 'v' ? 0 : 90)) * RAD, sa = slit.mix((v) => (v === 'v' ? 0 : 90)) * RAD;
    const th = Math.abs((rope.value === 'v' ? 0 : 90) - (slit.value === 'v' ? 0 : 90));
    const pass = Math.abs(Math.cos(ra - sa));
    const u = across(ra);
    const disp = (x) => {
      if (x > front) return 0;
      const s = Math.sin((2 * Math.PI * (x - front)) / LAM) * Math.min(1, (front - x) / 60);
      return A * s * (x > XS ? pass : 1);
    };
    const pts = (xa, xb) => { const out = []; for (let x = xa; x <= xb; x += 6) out.push(P(add([x, 0, 0], u, disp(x)))); return out; };
    const RP = F.ref('rope'), SL = F.ref('slit');
    const stroke = (list, w) => { ctx.save(); ctx.strokeStyle = RP; ctx.lineWidth = w; ctx.beginPath(); list.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.stroke(); ctx.restore(); };

    /* the far side of the board first, then the board, then the near rope */
    stroke(pts(XS, X1), 4);
    const H = 150, SW = 20, su = across(sa), sw = across(sa + Math.PI / 2), c = [XS, 0, 0];
    const corner = (a, b) => P(add(add(c, su, a), sw, b));
    face(ctx, [corner(H, H), corner(H, -H), corner(-H, -H), corner(-H, H)], 0.12, 2.5);
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.beginPath();
    [[H * 0.85, SW], [H * 0.85, -SW], [-H * 0.85, -SW], [-H * 0.85, SW]].forEach(([a, b], i) => { const p = corner(a, b); if (i) ctx.lineTo(p[0], p[1]); else ctx.moveTo(p[0], p[1]); });
    ctx.closePath(); ctx.fill(); ctx.strokeStyle = SL; ctx.lineWidth = 2.5; ctx.stroke(); ctx.restore();
    stroke(pts(X0, XS), 4);
    const hand = P(add([X0, 0, 0], u, disp(X0)));
    dot(ctx, hand[0], hand[1], RP, true, 8);

    const bt = corner(H, 0);
    label(ctx, slit.value === 'v' ? 'a vertical slit' : 'a horizontal slit', bt[0], bt[1] - 10, { side: 'above', size: 20, color: SL });
    text(ctx, rope.value === 'v' ? 'the rope shaken in a vertical plane' : 'the rope shaken in a horizontal plane', 40, 470, RP, { size: 19, align: 'left' });

    const ok = pass > 0.5;
    topline(ctx, ok
      ? `A ${rope.value === 'v' ? 'vertically' : 'horizontally'} polarized wave passes the ${slit.value === 'v' ? 'vertical' : 'horizontal'} slit unchanged.`
      : `A ${rope.value === 'v' ? 'vertically' : 'horizontally'} polarized wave is blocked by the ${slit.value === 'v' ? 'vertical' : 'horizontal'} slit.`);
    readout(d.readout,
      `A_{\\text{passed}} = A\\cos\\ktheta = A\\cos ${fmt(th, 0)}^\\circ = ${th === 0 ? 'A' : '0'}`,
      ok ? 'The rope’s motion lies along the slit, so the slit leaves it free to move and the whole wave goes through.'
        : 'The rope’s motion lies across the slit, so the edges of the slit hold it still and nothing of the wave goes on.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   Figure 27.39 + 27.40 + 27.41 + 27.42 · sim-filter-chain · moving · locked view
   Unpolarized light, a first filter with a vertical axis and a second at θ.
   A pulse of light runs the ray from its tail to its head over 5 s of model
   time, then holds 1.2 s with its head at the ray's end, where the book draws
   the arrow of the ray's direction; it dims with the stretch it is in.
   The field after the first filter has half-length 80 scene units; after the
   second, 80 cos θ. The ray's brightness is the share of the light it carries:
   1 before the first filter, 1/2 after it, cos²θ / 2 after the second. The
   inset looks along the ray at the second filter, which is Figure 27.42.
===================================================================== */
(function () {
  const d = sim('sim-filter-chain', 560);
  const thS = ctl(d.controls, { label: '\\ktheta', cls: 'angle', min: 0, max: 90, step: 0.1, value: 45, unit: '°', dec: 1, aria: 'the angle between the axes of the two filters', onInput: () => cy.reset(),
    specials: [{ at: 45, label: '45°' }, { at: 71.6, label: 'Example 27.8' }, { at: 90, label: 'crossed' }] });
  const V = F.view({ yaw: -0.62, pitch: -0.14, dist: 3200, cx: 520, cy: 300 });
  const P = V.P;
  const XS = -470, XF1 = -230, XE1 = -40, XF2 = 150, XE2 = 360, XEND = 520, HF = 95, L = 80;
  const IX = 1150, IY = 300, IR = 150;
  const X0 = XS - 140, PL = 90, T = 5;
  const cy = cycle(() => T, 1.2);
  /* the part of the pulse inside the stretch x1..x2, as bright as the share k */
  function pulse(x1, x2, k, ctx) {
    const head = X0 + ((XEND - X0) * cy.now()) / T, a = Math.max(head - PL, x1), b = Math.min(head, x2);
    if (b - a < 2 || k < 0.004) return;
    const p = P([a, 0, 0]), q = P([b, 0, 0]), col = alpha(PAL.ink, 0.25 + 0.75 * Math.sqrt(clamp(k, 0, 1)));
    if (head <= x2) arrow(ctx, p[0], p[1], q[0], q[1], col, 7); else line(ctx, p[0], p[1], q[0], q[1], col, 7);
  }

  hover(d.stage, () => {
    const s = P([XS, 0, 0]), f1 = P([XF1, 0, 0]), f2 = P([XF2, 0, 0]);
    return [
      { x: s[0], y: s[1], r: 60, name: 'E, the fields of unpolarized light, pointing in all directions across the ray' },
      { x: f1[0], y: f1[1], r: 50, name: 'the first polarizing filter, its axis vertical' },
      { x: f2[0], y: f2[1], r: 50, name: 'the second polarizing filter, its axis at ' + fmt(thS.v, 1) + '° to the first' },
    ];
  });

  function draw() {
    const { ctx } = begin(d.c);
    const th = thS.v, t = th * RAD, c = Math.cos(t), c2 = c * c, EC = C('electric-field');

    /* from the far end of the ray to the near one */
    ray(ctx, P, XF2, XEND, c2 / 2, false);
    pulse(XF2, XEND, c2 / 2, ctx);
    const e2 = field(ctx, P, XE2, t, L * c, EC);
    filter(ctx, P, XF2, t, HF, 'the second filter', F.ref('filter-2'));
    ray(ctx, P, XF1, XF2, 0.5, false);
    pulse(XF1, XF2, 0.5, ctx);
    const e1 = field(ctx, P, XE1, 0, L, EC);
    const f1 = filter(ctx, P, XF1, 0, HF, 'the first filter', F.ref('filter-1'));
    text(ctx, 'axis', f1.axisEnd[0] + 12, f1.axisEnd[1] + 10, PAL.ink, { size: 17, align: 'left', bg: PAL.panel });
    ray(ctx, P, X0, XF1, 1, false);
    pulse(X0, XF1, 1, ctx);
    burst(ctx, P, XS, L, EC);
    const sTop = P([XS, L + 40, 0]);
    text(ctx, 'unpolarized light', sTop[0], sTop[1] - 10, PAL.muted, { size: 19, align: 'center', bg: PAL.panel });
    if (e1) text(ctx, 'E', e1[0] + 18, e1[1] + 4, EC, { size: 24, weight: 600, align: 'left', bg: PAL.panel });
    if (e2) text(ctx, 'E cos θ', e2[0] + 18, e2[1] + 4, EC, { size: 22, weight: 600, align: 'left', bg: PAL.panel });
    else { const q = P([XE2, 0, 0]); text(ctx, 'no light', q[0], q[1] - 30, PAL.muted, { size: 19, align: 'center', bg: PAL.panel }); }

    /* the end-on view of the second filter */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = F.ref('filter-2'); ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(IX, IY, IR, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, 'looking along the ray', IX, IY - IR - 42, PAL.muted, { size: 17, align: 'center' });
    const ux = Math.sin(t), uy = -Math.cos(t), LI = 110;
    line(ctx, IX - ux * (IR - 8), IY - uy * (IR - 8), IX + ux * (IR - 8), IY + uy * (IR - 8), alpha(PAL.ink, 0.55), 2, [10, 8]);
    text(ctx, 'axis', IX + ux * (IR - 4) + 22, IY + uy * (IR - 4), PAL.muted, { size: 17, align: 'left', bg: PAL.panel });
    dbl(ctx, [IX, IY + LI], [IX, IY - LI], alpha(EC, 0.45), 3);
    text(ctx, 'E', IX - 16, IY - LI + 6, EC, { size: 22, weight: 600, align: 'right', bg: PAL.panel });
    const cl = LI * c, tip = [IX + ux * cl, IY + uy * cl];
    if (cl > 4) {
      line(ctx, IX, IY - LI, tip[0], tip[1], alpha(PAL.ink, 0.4), 2, [4, 8]);
      dbl(ctx, [IX - ux * cl, IY - uy * cl], tip, EC, 5);
    }
    if (th > 3) angleArc(ctx, { x: IX, y: IY }, 44, Math.PI / 2 - t, Math.PI / 2, 'θ', undefined, C('angle'));

    topline(ctx, th >= 89.95
      ? 'The axes of the two filters are perpendicular, and the second filter passes no light at all.'
      : `The second filter is turned ${fmt(th, 1)}° from the first and passes ${fmt(100 * c2, 1)}% of the light that reaches it.`);
    readout(d.readout,
      `\\kIntens = \\kIopol\\cos^2\\ktheta = \\kIopol\\cos^2 ${fmt(th, 1)}^\\circ = ${fmt(c2, 3)}\\,\\kIopol`,
      `The field that reaches the second filter is vertical; only its component $\\kEf\\cos\\ktheta = ${fmt(c, 3)}\\,\\kEf$ along the axis passes, and the intensity goes as the square of that amplitude.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   Figure 27.43 · sim-brewster · still · flat
   Unpolarized light from air onto water or crown glass. The share of each
   polarization in the reflected and refracted rays is drawn from the
   reflection and transmission amplitudes for the two polarizations, each ray
   normalized to its larger part so the proportion is honest and the size is
   not; the bar gives the share of the reflected intensity polarized parallel
   to the surface, which reaches 100% at Brewster's angle.
===================================================================== */
(function () {
  const d = sim('sim-brewster', 560);
  const N2 = { water: 1.333, glass: 1.52 };
  let surf = { value: 'water' };
  const thB = () => Math.atan(N2[surf.value] / 1.0) / RAD;
  const iS = ctl(d.controls, { label: '\\ktheta', cls: 'angle', min: 0, max: 85, step: 0.1, value: 53.1, unit: '°', dec: 1, aria: 'the angle of incidence', specials: [{ at: () => Math.round(thB() * 10) / 10, label: 'θb' }] });
  surf = choice(d.controls, { label: '\\text{the surface}', options: [{ value: 'water', label: 'water' }, { value: 'glass', label: 'crown glass' }], value: 'water', aria: 'the medium that reflects the light', onInput: () => iS.refresh() });
  const OX = 470, OY = 320, R = 250;

  function markers(ctx, x1, y1, x2, y2, s, p, EC) {
    const dx = x2 - x1, dy = y2 - y1, Lr = Math.hypot(dx, dy), nx = -dy / Lr, ny = dx / Lr;
    [0.42, 0.74].forEach((f) => {
      const x = x1 + dx * f, y = y1 + dy * f;
      if (p > 0.03) dbl(ctx, [x - nx * 30 * p, y - ny * 30 * p], [x + nx * 30 * p, y + ny * 30 * p], EC, 4);
      if (s > 0.03) dot(ctx, x, y, EC, true, 3 + 8 * s);
    });
  }

  function draw() {
    const { ctx } = begin(d.c);
    const n1 = 1.0, n2 = N2[surf.value], th = iS.v, ti = th * RAD, tt = Math.asin((n1 * Math.sin(ti)) / n2);
    const ci = Math.cos(ti), ct = Math.cos(tt);
    const rs = (n1 * ci - n2 * ct) / (n1 * ci + n2 * ct), rp = (n2 * ci - n1 * ct) / (n2 * ci + n1 * ct);
    const ts = (2 * n1 * ci) / (n1 * ci + n2 * ct), tp = (2 * n1 * ci) / (n2 * ci + n1 * ct);
    const Rs = rs * rs, Rp = rp * rp, share = Rs / (Rs + Rp || 1), EC = C('electric-field');
    const mr = Math.max(Math.abs(rs), Math.abs(rp)) || 1, mt = Math.max(ts, tp) || 1;
    const b = thB(), atB = Math.abs(th - Math.round(b * 10) / 10) < 0.05;

    /* the two media and the normal */
    const SU = F.ref('surface');
    ctx.save(); ctx.fillStyle = alpha(SU, 0.08); ctx.fillRect(60, OY, 840, 210); ctx.restore();
    line(ctx, 60, OY, 900, OY, SU, 3);
    line(ctx, OX, OY - 230, OX, OY + 200, alpha(PAL.ink, 0.35), 2, [10, 10]);
    text(ctx, 'air, n₁ = 1.00', 80, OY - 24, PAL.ink, { size: 20, align: 'left' });
    text(ctx, (surf.value === 'water' ? 'water' : 'crown glass') + ', n₂ = ' + fmt(n2, 3), 80, OY + 28, SU, { size: 20, align: 'left' });

    const ix = OX - R * Math.sin(ti), iy = OY - R * ci, rx = OX + R * Math.sin(ti), ry = iy;
    const tx = OX + R * 0.85 * Math.sin(tt), ty = OY + R * 0.85 * ct;
    const RI = F.ref('incident-ray'), RR = F.ref('reflected-ray'), RT = F.ref('refracted-ray');
    arrow(ctx, ix, iy, OX, OY, RI, 3);
    arrow(ctx, OX, OY, rx, ry, alpha(RR, 0.35 + 0.65 * Math.sqrt((Rs + Rp) / 2)), 3);
    arrow(ctx, OX, OY, tx, ty, RT, 3);
    markers(ctx, ix, iy, OX, OY, 1, 1, EC);
    markers(ctx, OX, OY, rx, ry, Math.abs(rs) / mr, Math.abs(rp) / mr, EC);
    markers(ctx, OX, OY, tx, ty, ts / mt, tp / mt, EC);
    if (th > 2) angleArc(ctx, { x: OX, y: OY }, 70, Math.PI / 2, Math.PI / 2 + ti, 'θ', undefined, C('angle'));
    label(ctx, 'unpolarized light', ix, Math.min(Math.max(iy, 130), OY - 60), { side: 'left', size: 19, color: RI });
    label(ctx, atB ? 'completely polarized' : 'partially polarized', rx, Math.min(Math.max(ry, 130), OY - 60), { side: 'right', size: 19, color: RR });
    label(ctx, 'refracted light', tx, ty, { side: 'right', size: 19, color: RT });

    /* the share of the reflected intensity polarized parallel to the surface */
    const BX = 1080, BT = 140, BB = 480, BW = 70;
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2; ctx.strokeRect(BX, BT, BW, BB - BT); ctx.restore();
    const hgt = (BB - BT) * share;
    ctx.save(); ctx.fillStyle = alpha(EC, 0.75); ctx.fillRect(BX, BB - hgt, BW, hgt); ctx.restore();
    [0, 50, 100].forEach((v) => { const y = BB - ((BB - BT) * v) / 100; line(ctx, BX - 8, y, BX, y, PAL.muted, 2); text(ctx, v + '%', BX - 14, y, PAL.muted, { size: 17, align: 'right' }); });
    text(ctx, 'reflected light polarized', BX + BW / 2, BB + 28, PAL.ink, { size: 18, align: 'center' });
    text(ctx, 'parallel to the surface', BX + BW / 2, BB + 52, PAL.ink, { size: 18, align: 'center' });
    text(ctx, fmt(100 * share, 1) + '%', BX + BW + 14, BB - hgt, PAL.ink, { size: 20, weight: 600, align: 'left', bg: PAL.panel });

    topline(ctx, atB
      ? `At ${fmt(th, 1)}° on ${surf.value === 'water' ? 'water' : 'crown glass'} the reflected light is completely polarized parallel to the surface.`
      : `At ${fmt(th, 1)}° on ${surf.value === 'water' ? 'water' : 'crown glass'}, ${fmt(100 * share, 1)}% of the reflected light is polarized parallel to the surface.`);
    readout(d.readout,
      `\\tan\\kthetab = \\frac{n_2}{n_1} = \\frac{${fmt(n2, 3)}}{1.00} = ${fmt(n2, 3)}, \\quad \\kthetab = ${fmt(b, 1)}^\\circ`,
      'The dots and arrows of each ray are drawn in proportion to one another, not to the other rays; the reflected ray is much weaker than the other two.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   Figure 27.44 + 27.45 · sim-filter-molecules · still · flat, face on
   The field arrives at θ from the filter's axis. Its half-length is 170
   units; the part along the axis, 170 cos θ, passes, and the part along the
   molecules, 170 sin θ, drives the electron along its molecule and is
   absorbed.
===================================================================== */
(function () {
  const d = sim('sim-filter-molecules', 560);
  const thS = ctl(d.controls, { label: '\\ktheta', cls: 'angle', min: 0, max: 90, step: 0.1, value: 30, unit: '°', dec: 1, aria: 'the angle between the electric field and the axis of the filter' });
  const CX = 450, CY = 330, HS = 190, LE = 160;

  hover(d.stage, () => [
    { x: CX - 120, y: CY - 3 * 52, r: 24, name: 'a long molecule of the filter' },
    { x: CX + 90, y: CY, r: 20, name: 'an electron in a molecule' },
  ]);

  function draw() {
    const { ctx } = begin(d.c);
    const th = thS.v, t = th * RAD, c = Math.cos(t), s = Math.sin(t), EC = C('electric-field');
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = F.ref('filter'); ctx.lineWidth = 2.5; ctx.fillRect(CX - HS, CY - HS, 2 * HS, 2 * HS); ctx.strokeRect(CX - HS, CY - HS, 2 * HS, 2 * HS); ctx.restore();
    for (let k = -3; k <= 3; k++) line(ctx, CX - HS + 26, CY + k * 52, CX + HS - 26, CY + k * 52, alpha(F.ref('molecules'), 0.35), 12);
    line(ctx, CX, CY - HS - 20, CX, CY + HS + 20, PAL.ink, 2.5, [10, 8]);
    text(ctx, 'axis', CX, CY - HS - 38, PAL.ink, { size: 20, align: 'center' });
    text(ctx, 'long molecules', CX + HS + 20, CY - 3 * 52, F.ref('molecules'), { size: 19, align: 'left' });

    /* the incoming field and its two components */
    const ex = LE * s, ey = -LE * c;
    dbl(ctx, [CX - ex, CY - ey], [CX + ex, CY + ey], alpha(EC, 0.45), 3);
    text(ctx, 'E', CX + ex + 14, CY + ey - 12, EC, { size: 24, weight: 600, align: 'left', bg: PAL.panel });
    line(ctx, CX + ex, CY + ey, CX, CY + ey, alpha(PAL.ink, 0.4), 2, [4, 8]);
    line(ctx, CX + ex, CY + ey, CX + ex, CY, alpha(PAL.ink, 0.4), 2, [4, 8]);
    if (LE * c > 4) {
      dbl(ctx, [CX, CY + LE * c], [CX, CY - LE * c], EC, 6);
      text(ctx, 'E cos θ passes', CX - 16, CY - LE * c + 4, EC, { size: 21, weight: 600, align: 'right', bg: PAL.panel });
    }
    if (LE * s > 4) {
      ctx.save(); ctx.setLineDash([12, 8]); dbl(ctx, [CX - LE * s, CY], [CX + LE * s, CY], alpha(EC, 0.7), 4); ctx.restore();
      text(ctx, 'E sin θ absorbed', CX + LE * s + 14, CY + 30, EC, { size: 21, weight: 600, align: 'left', bg: PAL.panel });
    }
    if (th > 3) angleArc(ctx, { x: CX, y: CY }, 60, Math.PI / 2 - t, Math.PI / 2, 'θ', undefined, C('angle'));

    /* the electron on the middle molecule, driven along it by E sin θ */
    const exl = CX + 90;
    dot(ctx, exl, CY + 52, F.el('e-'), true, 10);
    if (s > 0.03) { arrow(ctx, exl + 14, CY + 52, exl + 14 + 60 * s, CY + 52, PAL.ink, 3); arrow(ctx, exl - 14, CY + 52, exl - 14 - 60 * s, CY + 52, PAL.ink, 3); }
    text(ctx, 'an electron driven along its molecule', 1000, CY + 52, F.ref('electron'), { size: 18, align: 'left' });
    line(ctx, exl + 80, CY + 52, 990, CY + 52, alpha(PAL.ink, 0.3), 1.5, [5, 6]);

    topline(ctx, th < 0.05
      ? 'The field lies along the axis, across the molecules, and all of it passes.'
      : th > 89.95
        ? 'The field lies along the molecules, and all of it is absorbed.'
        : `The field makes ${fmt(th, 1)}° with the axis; ${fmt(c, 3)} of it passes and the part along the molecules is absorbed.`);
    readout(d.readout,
      `\\kEf\\cos\\ktheta = \\kEf\\cos ${fmt(th, 1)}^\\circ = ${fmt(c, 3)}\\,\\kEf`,
      `The part along the molecules, ${fmt(s, 3)} of the field, sets the electrons oscillating and gives up its energy to them, so the intensity that passes is ${fmt(c * c, 3)} of the intensity that arrived.`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   Figure 27.46 · sim-scattering · still · flat
   Sunlight along +x meets a molecule; the observer looks back along a line
   at φ from the original ray, in the plane of the page. The field
   perpendicular to the page is always perpendicular to the line of sight and
   is scattered whole; the field in the page is scattered as E cos φ.
===================================================================== */
(function () {
  const d = sim('sim-scattering', 560);
  const phS = ctl(d.controls, { label: '\\varphi', cls: 'angle', min: 0, max: 180, step: 0.5, value: 90, unit: '°', dec: 1, aria: 'the angle between the original ray and the line of sight', specials: [{ at: 90, label: '90°' }] });
  const OX = 560, OY = 200, RL = 320;

  function marks(ctx, x, y, dx, dy, p, EC) {
    const n = Math.hypot(dx, dy), nx = -dy / n, ny = dx / n;
    if (p > 0.03) dbl(ctx, [x - nx * 44 * p, y - ny * 44 * p], [x + nx * 44 * p, y + ny * 44 * p], EC, 4);
    dot(ctx, x, y, EC, true, 7);
  }

  function draw() {
    const { ctx } = begin(d.c);
    const ph = phS.v, f = ph * RAD, c = Math.cos(f), EC = C('electric-field');
    const pol = (1 - c * c) / (1 + c * c);
    arrow(ctx, 60, OY, OX - 14, OY, F.ref('sunlight'), 3);
    [180, 360].forEach((x) => marks(ctx, x, OY, 1, 0, 1, EC));
    text(ctx, 'unpolarized sunlight', 120, OY - 50, F.ref('sunlight'), { size: 19, align: 'left' });
    line(ctx, OX + 14, OY, OX + 300, OY, alpha(PAL.ink, 0.25), 2, [10, 10]);

    const dx = Math.cos(f), dy = Math.sin(f), ex = OX + RL * dx, ey = OY + RL * dy;
    arrow(ctx, OX, OY, ex, ey, PAL.ink, 3);
    [0.45, 0.75].forEach((k) => marks(ctx, OX + RL * dx * k, OY + RL * dy * k, dx, dy, Math.abs(c), EC));
    dot(ctx, OX, OY, F.ref('molecule'), false, 12);
    label(ctx, 'molecule', OX, OY - 14, { side: 'above', size: 19, color: F.ref('molecule') });
    label(ctx, 'to the observer', ex, ey, { side: dx > 0.3 ? 'right' : dx < -0.3 && Math.abs(dy) > 0.4 ? 'left' : 'below', size: 19, color: PAL.muted });
    if (ph > 3) angleArc(ctx, { x: OX, y: OY }, 60, -f, 0, 'φ', undefined, C('angle'));

    /* the key to the two marks */
    const KX = 1010;
    dot(ctx, KX, 380, EC, true, 7);
    text(ctx, 'field perpendicular to the page', KX + 24, 380, PAL.ink, { size: 18, align: 'left' });
    dbl(ctx, [KX, 420], [KX, 468], EC, 4);
    text(ctx, 'field in the page', KX + 24, 444, PAL.ink, { size: 18, align: 'left' });

    topline(ctx, Math.abs(c) < 0.0005
      ? `Seen at ${fmt(ph, 1)}° from the sunlight, the scattered light is completely polarized.`
      : Math.abs(c) > 0.9995
        ? `Seen along the line of the sunlight, the scattered light is unpolarized.`
        : `Seen at ${fmt(ph, 1)}° from the sunlight, the scattered light is ${fmt(100 * pol, 0)}% polarized.`);
    readout(d.readout,
      `\\kEfpar = \\kEf\\,|\\cos\\varphi| = \\kEf\\,|\\cos ${fmt(ph, 1)}^\\circ| = ${fmt(Math.abs(c) < 0.0005 ? 0 : Math.abs(c), 3)}\\,\\kEf`,
      'The field perpendicular to the page, $\\kEf_{\\perp}$, is always across the line of sight and is scattered whole; the field in the page can be scattered only in the part of it that lies across the line of sight.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   Figure 27.47 + 27.48 · sim-rotator · still · locked view
   A vertical filter, a layer that turns the polarization through ρ, and an
   analyzer, horizontal for the LCD and vertical for the optically active
   sample. The analyzer passes cos² of the angle between the turned
   polarization and its axis. The pixel is filled in the grey of that share of
   the light, the one colour of the figure that is the physical fact.
===================================================================== */
(function () {
  const d = sim('sim-rotator', 560);
  const layer = choice(d.controls, { label: '\\text{the layer}', options: [{ value: 'lcd', label: 'liquid crystal' }, { value: 'sample', label: 'optically active sample' }], value: 'lcd', aria: 'what stands between the two filters' });
  const rS = ctl(d.controls, { label: '\\text{rotation}', cls: 'angle', min: 0, max: 90, step: 0.5, value: 90, unit: '°', dec: 1, aria: 'the angle the layer turns the direction of polarization through',
    specials: [{ at: 0, label: '0°' }, { at: 90, label: '90°' }] });
  const V = F.view({ yaw: -0.62, pitch: -0.14, dist: 3200, cx: 500, cy: 300 });
  const P = V.P;
  const XS = -470, XF1 = -320, XE1 = -205, XL = -60, XE2 = 90, XA = 230, XE3 = 390, XEND = 520, HF = 90, L = 76;
  const PX = 1150, PY = 290, PS = 150;

  function slab(ctx, x, h, w, col) {
    const c = (dx, y, z) => P([x + dx, y, z]);
    face(ctx, [c(-w, h, -h), c(w, h, -h), c(w, h, h), c(-w, h, h)], 0.04, 2);
    face(ctx, [c(-w, h, h), c(w, h, h), c(w, -h, h), c(-w, -h, h)], 0.16, 2);
    face(ctx, [c(-w, h, -h), c(-w, h, h), c(-w, -h, h), c(-w, -h, -h)], 0.1, 2);
    const rim = [c(-w, h, h), c(w, h, h), c(w, -h, h), c(-w, -h, h)];
    ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 2.5; ctx.beginPath(); rim.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath(); ctx.stroke(); ctx.restore();
  }

  function draw() {
    const { ctx } = begin(d.c);
    const lcd = layer.value === 'lcd', rho = rS.v, r = rho * RAD, EC = C('electric-field'), IC = C('intensity');
    const an = layer.mix((v) => (v === 'lcd' ? 90 : 0)), aNow = lcd ? 90 : 0;
    const th = Math.abs(aNow - rho), c = Math.cos(th * RAD), c2 = c * c;

    ray(ctx, P, XA, XEND, c2 / 2, true);
    const e3 = field(ctx, P, XE3, an * RAD, L * Math.abs(Math.cos((an - rho) * RAD)), EC);
    filter(ctx, P, XA, an * RAD, HF, 'the analyzer', F.ref('analyzer'));
    ray(ctx, P, XL, XA, 0.5, false);
    field(ctx, P, XE2, r, L, EC);
    slab(ctx, XL, HF * 0.9, 45, F.ref('layer'));
    const lt = P([XL, HF * 1.45, 0]);
    text(ctx, lcd ? 'the liquid crystal' : 'the optically active sample', lt[0], lt[1] - 12, F.ref('layer'), { size: 19, align: 'center', bg: PAL.panel });
    ray(ctx, P, XF1, XL, 0.5, false);
    field(ctx, P, XE1, 0, L, EC);
    filter(ctx, P, XF1, 0, HF, 'the first filter', F.ref('polarizer'));
    ray(ctx, P, XS - 100, XF1, 1, false);
    burst(ctx, P, XS, L, EC);
    if (!e3) { const q = P([XE3, 0, 0]); text(ctx, 'no light', q[0], q[1] - 30, PAL.muted, { size: 19, align: 'center', bg: PAL.panel }); }

    /* the pixel, or the patch of light the analyzer lets through */
    const g = Math.round(255 * c2);
    ctx.save(); ctx.fillStyle = F.shown.facts ? F.fact(`rgb(${g}, ${g}, ${g})`) : alpha(PAL.ink, c2); ctx.strokeStyle = F.ref('pixel'); ctx.lineWidth = 2.5;
    ctx.fillRect(PX - PS / 2, PY - PS / 2, PS, PS); ctx.strokeRect(PX - PS / 2, PY - PS / 2, PS, PS); ctx.restore();
    text(ctx, lcd ? 'the pixel' : 'the light after the analyzer', PX, PY - PS / 2 - 24, F.ref('pixel'), { size: 19, align: 'center' });
    text(ctx, fmt(100 * c2, 1) + '% of I₀', PX, PY + PS / 2 + 28, IC, { size: 20, weight: 600, align: 'center' });

    topline(ctx, lcd
      ? (rho >= 89.95 ? 'With no voltage the liquid crystal turns the polarization 90.0°, so the horizontal analyzer passes all of it and the pixel is bright.'
        : rho <= 0.05 ? 'With the voltage on the liquid crystal does not turn the polarization, so the horizontal analyzer blocks it and the pixel is dark.'
          : `The liquid crystal turns the polarization ${fmt(rho, 1)}°, and the horizontal analyzer passes ${fmt(100 * c2, 1)}% of the light.`)
      : `The sample turns the polarization ${fmt(rho, 1)}°, and the vertical analyzer passes ${fmt(100 * c2, 1)}% of the light.`);
    readout(d.readout,
      `\\kIntens = \\kIopol\\cos^2\\ktheta = \\kIopol\\cos^2 ${fmt(th, 1)}^\\circ = ${fmt(c2, 3)}\\,\\kIopol`,
      `Here $\\ktheta$ is the angle between the turned polarization and the axis of the analyzer, ${lcd ? '90° less the rotation, since the analyzer is horizontal' : 'the rotation itself, since the analyzer is vertical'}.`);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
