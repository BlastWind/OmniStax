/* Figures for section 25.5 Dispersion: The Rainbow and Prisms. The figures
   colour position, for the wavelength, the entry height and where the observer
   stands, and angle, for every angle drawn or set. The index of refraction is a
   rating and stays in ink, and so do the frames. The prism, the drop and the
   observer of the rainbow are the section's referents and wear F.ref. A ray's
   color is its wavelength, drawn as the fact by spectral(), and sunlight is the
   one pale yellow SUN; both go through F.fact and are the page's only literal
   colors. Optics has no clock in it, so nothing here moves: every figure
   registers no cycle and redraws on its controls alone. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['25.5'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, select, register, begin, line, arrow, dot, text, topline, label, angleArc, axes, curve, pinned } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

const RAD = Math.PI / 180;
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const SUN = '#f4d35e';                        /* sunlight, pale yellow as the book draws it */

/* Table 25.2, the wavelengths in nanometers from the violet end up */
const LAMS = [410, 470, 550, 580, 610, 660];
const MEDIA = {
  water: { name: '水', label: '水', n: [1.342, 1.338, 1.335, 1.333, 1.332, 1.331] },
  diamond: { name: '金刚石', label: '金刚石', n: [2.458, 2.444, 2.426, 2.417, 2.415, 2.410] },
  crown: { name: '冕牌玻璃', label: '玻璃（冕牌）', n: [1.530, 1.524, 1.519, 1.518, 1.514, 1.512] },
  flint: { name: '火石玻璃', label: '玻璃（火石）', n: [1.698, 1.684, 1.674, 1.667, 1.665, 1.662] },
  poly: { name: '聚苯乙烯', label: '聚苯乙烯', n: [1.506, 1.499, 1.493, 1.492, 1.490, 1.488] },
  quartz: { name: '熔融石英', label: '石英（熔融）', n: [1.468, 1.462, 1.459, 1.458, 1.456, 1.455] },
};
const MEDIA_OPTS = Object.keys(MEDIA).map((k) => ({ value: k, label: MEDIA[k].label }));
/* the index between the table's columns, read along the straight line joining them */
function nOf(key, lam) {
  const n = MEDIA[key].n, l = clamp(lam, LAMS[0], LAMS[LAMS.length - 1]);
  let i = 0;
  while (i < LAMS.length - 2 && l > LAMS[i + 1]) i++;
  const k = (l - LAMS[i]) / (LAMS[i + 1] - LAMS[i]);
  return n[i] + k * (n[i + 1] - n[i]);
}
/* the color a wavelength is seen as, in sRGB; null outside the visible */
function spectral(lam) {
  let r = 0, g = 0, b = 0;
  if (lam < 380 || lam > 750) return null;
  if (lam < 440) { r = (440 - lam) / 60; b = 1; }
  else if (lam < 490) { g = (lam - 440) / 50; b = 1; }
  else if (lam < 510) { g = 1; b = (510 - lam) / 20; }
  else if (lam < 580) { r = (lam - 510) / 70; g = 1; }
  else if (lam < 645) { r = 1; g = (645 - lam) / 65; }
  else r = 1;
  const f = lam < 420 ? 0.3 + (0.7 * (lam - 380)) / 40 : lam > 700 ? 0.3 + (0.7 * (750 - lam)) / 50 : 1;
  const c = (x) => Math.round(255 * Math.pow(x * f, 0.8));
  return F.fact(`rgb(${c(r)}, ${c(g)}, ${c(b)})`);
}
function colorName(lam) {
  return lam < 440 ? '紫' : lam < 500 ? '蓝' : lam < 565 ? '绿' : lam < 595 ? '黄' : lam < 635 ? '橙' : '红';
}
const LAM_DETENTS = LAMS.map((v) => (v === 410 || v === 580 || v === 660 ? { v, label: String(v) } : { v }));

/* =====================================================================
   Figure 25.21 · sim-spectrum-index
   The book's band of colors against wavelength, laid along an axis that runs
   from the ultraviolet at 300 nm to the infrared at 800 nm, and beneath it the
   index of the chosen medium of Table 25.2 against the same wavelengths, so a
   wavelength picked on the band is picked on the graph too. The graph's
   horizontal axis is the band's own from 400 to 700 nm. Each medium has a fixed
   vertical range that holds its six values, so the rise toward the violet reads
   at the same size in every medium. Still.
===================================================================== */
(function () {
  const d = sim('sim-spectrum-index', 620);
  const lam = ctl(d.controls, { label: '\\klam', cls: 'position', min: 410, max: 660, step: 1, value: 580, unit: 'nm', dec: 0, aria: '光的波长', detents: LAM_DETENTS, snap: true });
  const med = select(d.controls, { label: '\\text{介质}', options: MEDIA_OPTS, value: 'water', aria: '其折射率被绘出的表 25.2 中的介质' });
  const RANGE = { water: [1.330, 1.345], diamond: [2.40, 2.47], crown: [1.510, 1.535], flint: [1.66, 1.70], poly: [1.485, 1.510], quartz: [1.450, 1.470] };
  const XB = (l) => 150 + ((l - 300) / 500) * 1100;
  const BAND = { t: 116, b: 176 };

  function draw() {
    const { ctx } = begin(d.c);
    const L = lam.v, key = med.value, m = MEDIA[key], n = nOf(key, L), PC = C('position');
    topline(ctx, `${fmt(L, 0)} nm 的光看起来是${colorName(L)}色，${m.name}以 ${fmt(n, 3)} 的折射率使它偏折。`);

    for (let l = 300; l < 800; l += 2) {
      const c = spectral(l + 1);
      ctx.save(); ctx.fillStyle = c ?? alpha(PAL.muted, 0.18); ctx.fillRect(XB(l), BAND.t, XB(l + 2) - XB(l) + 0.6, BAND.b - BAND.t); ctx.restore();
    }
    line(ctx, XB(300), BAND.t, XB(800), BAND.t, PAL.rule, 1.5); line(ctx, XB(300), BAND.b, XB(800), BAND.b, PAL.rule, 1.5);
    text(ctx, '紫外线', XB(340), (BAND.t + BAND.b) / 2, PAL.ink, { size: 20, align: 'center' });
    text(ctx, '红外线', XB(775), (BAND.t + BAND.b) / 2, PAL.ink, { size: 20, align: 'center' });
    for (let l = 300; l <= 800; l += 100) {
      line(ctx, XB(l), BAND.b, XB(l), BAND.b + 8, PAL.muted, 2);
      text(ctx, fmt(l, 0), XB(l), BAND.b + 26, PAL.muted, { size: 17, align: 'center' });
    }
    text(ctx, '波长 λ（nm）', XB(800), BAND.b + 54, PC, { size: 20, weight: 600, align: 'right' });
    [['紫', 410], ['蓝', 470], ['绿', 530], ['黄', 570], ['橙', 622], ['红', 675]].forEach(([s, l]) =>
      text(ctx, s, XB(l), BAND.t - 16, PAL.muted, { size: 17, align: 'center' }));

    const box = { l: XB(400), r: XB(700), t: 290, b: 540 };
    const [y0, y1] = RANGE[key];
    const { X, Y } = axes(ctx, box, [400, 700], [y0, y1], { nx: 6, ny: 5, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 3), yl: '折射率 n', yc: PAL.ink });
    curve(ctx, (l) => nOf(key, l), 410, 660, X, Y, PAL.ink, 4, 120);
    LAMS.forEach((l, i) => dot(ctx, X(l), Y(m.n[i]), PAL.ink, false, 7));
    const p = pinned(ctx, box, X, Y, L, n, spectral(L) ?? PAL.ink);
    ctx.save(); ctx.lineWidth = 3; ctx.strokeStyle = PAL.ink; ctx.beginPath(); ctx.arc(p.x, p.y, 9, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
    line(ctx, XB(L), BAND.t - 4, XB(L), BAND.b + 4, PAL.ink, 3);
    line(ctx, p.x, BAND.b + 62, p.x, p.y - 12, alpha(PAL.ink, 0.4), 2, [4, 8]);
    label(ctx, `n = ${fmt(n, 3)}`, p.x, p.y - 26, { side: 'right', size: 20, color: PAL.ink, gap: 14 });   /* above right, clear of a curve that falls to the right */
    text(ctx, `${m.label}，表 25.2 中的六个点用直线连接`, box.r, box.b + 58, PAL.muted, { size: 17, align: 'right' });

    readout(d.readout, `n\\,(\\klam = ${fmt(L, 0)}\\ \\text{nm}) = ${fmt(n, 3)}`,
      `在${m.name}中，折射率由 660 nm（红）处的 ${fmt(m.n[5], 3)} 变到 410 nm（紫）处的 ${fmt(m.n[0], 3)}。`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   Figure 25.22 · sim-prism
   A prism with a 60° apex, 380 units on a side, the light striking the middle
   of its left face at the angle θ₁ the reader sets. Each wavelength takes its
   index from Table 25.2 at both faces. With white light the fan of colors is
   drawn with every angle's departure from the 580 nm ray multiplied by FAN, as
   the book says its own drawing is exaggerated, and the note gives the true
   spread; a ray that meets the second face beyond the critical angle is totally
   reflected there, as in 25.4, and is drawn to the next face. Still.
===================================================================== */
(function () {
  const d = sim('sim-prism', 600);
  const mode = choice(d.controls, { label: '\\text{光}', options: [{ value: 'one', label: '单一波长' }, { value: 'white', label: '白光' }], value: 'white', aria: '入射到棱镜上的是单一波长还是白光' });
  const lam = ctl(d.controls, { label: '\\klam', cls: 'position', min: 410, max: 660, step: 1, value: 580, unit: 'nm', dec: 0, aria: '在棱镜中追迹的波长', detents: LAM_DETENTS, snap: true });
  const th = ctl(d.controls, { label: '\\kthetaone', cls: 'angle', min: 30, max: 80, step: 0.5, value: 45, unit: '°', dec: 1, aria: '第一个面上的入射角', detents: [{ v: 45, label: '45' }] });
  const med = select(d.controls, { label: '\\text{棱镜}', options: MEDIA_OPTS, value: 'crown', aria: '棱镜所用的表 25.2 中的介质' });

  const FAN = 8, REF = 580;
  const S = 380, CX = 560, BASE = 480, HGT = S * Math.sqrt(3) / 2;
  const A = { x: CX, y: BASE - HGT }, BL = { x: CX - S / 2, y: BASE }, BR = { x: CX + S / 2, y: BASE };
  const P = { x: (A.x + BL.x) / 2, y: (A.y + BL.y) / 2 };
  const FACES = [[A, BL], [BL, BR], [BR, A]];
  const dir = (a) => ({ x: Math.cos(a * RAD), y: -Math.sin(a * RAD) });     /* an angle in degrees, counterclockwise, as a screen direction */
  /* where a ray from p along u first meets a face other than the one it leaves */
  function hit(p, u, skip) {
    let best = null;
    FACES.forEach(([a, b], i) => {
      if (i === skip) return;
      const ex = b.x - a.x, ey = b.y - a.y, den = u.x * ey - u.y * ex;
      if (Math.abs(den) < 1e-9) return;
      const t = ((a.x - p.x) * ey - (a.y - p.y) * ex) / den, s = ((a.x - p.x) * u.y - (a.y - p.y) * u.x) / den;
      if (t > 1e-6 && s >= 0 && s <= 1 && (!best || t < best.t)) best = { t, i, x: p.x + t * u.x, y: p.y + t * u.y };
    });
    return best;
  }
  /* the true angles, in degrees counterclockwise from the right: inside, and out of the second face (null when totally reflected) */
  function path(n, t1) {
    const t2 = Math.asin(Math.sin(t1 * RAD) / n) / RAD, a2 = -30 + t2, phi = a2 - 30, s = n * Math.sin(phi * RAD);
    return { t2, a2, phi, out: Math.abs(s) > 1 ? null : Math.asin(s) / RAD };
  }

  function draw() {
    const { ctx } = begin(d.c);
    const key = med.value, m = MEDIA[key], t1 = th.v, white = mode.value === 'white';
    const ref = path(nOf(key, REF), t1);
    const lamList = white ? Array.from({ length: 26 }, (_, i) => 410 + i * 10) : [];
    const aIn = -30 + t1, uIn = dir(aIn);

    /* the prism and its first normal */
    ctx.save(); ctx.fillStyle = alpha(PAL.muted, 0.1); ctx.beginPath(); ctx.moveTo(A.x, A.y); ctx.lineTo(BL.x, BL.y); ctx.lineTo(BR.x, BR.y); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = F.ref('prism'); ctx.lineWidth = 3; ctx.stroke(); ctx.restore();
    const n1 = dir(150);
    line(ctx, P.x - n1.x * 110, P.y - n1.y * 110, P.x + n1.x * 130, P.y + n1.y * 130, alpha(PAL.ink, 0.4), 2, [10, 10]);
    text(ctx, '60°', A.x, A.y + 44, C('angle'), { size: 17, align: 'center' });
    text(ctx, m.name, CX, BASE - 70, F.ref('prism'), { size: 22, align: 'center' });

    /* one ray of wavelength l, its angles drawn from the reference ray's by the factor k */
    function ray(l, w, k) {
      const tr = path(nOf(key, l), t1), col = spectral(l);
      const aDraw = ref.a2 + k * (tr.a2 - ref.a2);
      const q = hit(P, dir(aDraw), 0);
      if (!q) return null;
      line(ctx, P.x, P.y, q.x, q.y, col, w);
      if (tr.out === null || q.i !== 2) {
        const aR = -120 - aDraw, r2 = hit(q, dir(aR), q.i);
        if (r2) line(ctx, q.x, q.y, r2.x, r2.y, col, w);
        return { q, tir: true, tr };
      }
      const aOut = 30 + (ref.out ?? tr.out) + k * (tr.out - (ref.out ?? tr.out)), u = dir(aOut);
      line(ctx, q.x, q.y, q.x + u.x * 560, q.y + u.y * 560, col, w);
      return { q, tir: false, tr, end: { x: q.x + u.x * 560, y: q.y + u.y * 560 }, u };
    }

    line(ctx, P.x - uIn.x * 420, P.y - uIn.y * 420, P.x, P.y, white ? F.fact(SUN) : spectral(lam.v), 5);
    let chosen, red, vio;
    const fan = path(nOf(key, 410), t1).out === null || path(nOf(key, 660), t1).out === null ? 1 : FAN;
    if (white) {
      lamList.forEach((l) => ray(l, 3, fan));
      red = ray(660, 3, fan); vio = ray(410, 3, fan);
      chosen = ray(lam.v, 5, fan);
    } else chosen = ray(lam.v, 5, 1);
    const cur = chosen?.tr ?? path(nOf(key, lam.v), t1);

    const back = 180 + aIn;
    angleArc(ctx, { x: P.x, y: P.y }, 76, 150 * RAD, back * RAD, `θ₁ = ${fmt(t1, 1)}°`, undefined, C('angle'));
    if (chosen?.q && chosen.q.i === 2) {
      const n2 = dir(30);
      line(ctx, chosen.q.x - n2.x * 110, chosen.q.y - n2.y * 110, chosen.q.x + n2.x * 120, chosen.q.y + n2.y * 120, alpha(PAL.ink, 0.4), 2, [10, 10]);
    }
    label(ctx, white ? '白光' : `${fmt(lam.v, 0)} nm`, P.x - uIn.x * 380, P.y - uIn.y * 380, { side: 'above', size: 20, color: PAL.ink });
    if (white && red?.end && vio?.end) {
      label(ctx, '红，660 nm', red.end.x, red.end.y, { side: 'right', size: 20, gap: 14, color: PAL.ink });
      label(ctx, '紫，410 nm', vio.end.x, vio.end.y, { side: 'right', size: 20, gap: 14, color: PAL.ink });
    } else if (!white && chosen?.end) {
      label(ctx, `与法线成 ${fmt(chosen.tr.out < 0 ? -chosen.tr.out : chosen.tr.out, 1)}°`, chosen.end.x - chosen.u.x * 120, chosen.end.y - chosen.u.y * 120, { side: 'above', size: 20, color: C('angle') });
    }

    const nT = nOf(key, lam.v), outAbs = cur.out === null ? null : Math.abs(cur.out);
    const trR = path(nOf(key, 660), t1), trV = path(nOf(key, 410), t1);
    if (white) {
      topline(ctx, trR.out === null || trV.out === null
        ? `在${m.name}中，光到达第二个面时超过临界角，在棱镜内部发生全反射。`
        : `在${m.name}中，红光以 ${fmt(Math.abs(trR.out), 1)}° 射出，紫光以 ${fmt(Math.abs(trV.out), 1)}° 射出，展开了 ${fmt(Math.abs(trV.out - trR.out), 2)}°。`);
    } else {
      topline(ctx, outAbs === null
        ? `${m.label}把以 ${fmt(t1, 1)}° 射入的 ${fmt(lam.v, 0)} nm 光折射到 ${fmt(cur.t2, 1)}°，第二个面把它全部反射。`
        : `${m.label}把以 ${fmt(t1, 1)}° 射入的 ${fmt(lam.v, 0)} nm 光折射到 ${fmt(cur.t2, 1)}°，并使它以 ${fmt(outAbs, 1)}° 射出。`);
    }
    const note = white
      ? (trR.out === null || trV.out === null
        ? `${m.name}在 ${fmt(lam.v, 0)} nm 处的临界角为 ${fmt(Math.asin(1 / nOf(key, lam.v)) / RAD, 1)}°；第一个面上较大的入射角会使光更接近垂直地射到第二个面上。`
        : `${fmt(lam.v, 0)} nm 的光线画得较粗，与法线成 ${fmt(outAbs ?? 0, 1)}° 射出。`)
      : `在 ${fmt(lam.v, 0)} nm 处，${m.name}的折射率为 ${fmt(nT, 3)}；波长越短，折射率越大，偏折越多。`;
    readout(d.readout, `\\sin\\kthetaone = n\\sin\\kthetatwo:\\quad \\sin ${fmt(t1, 1)}^\\circ = ${fmt(nT, 3)}\\,\\sin ${fmt(cur.t2, 1)}^\\circ`, note);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   Figure 25.23 · sim-drop
   A drop of radius 220 units, the sunlight arriving from the left at a height b
   of the radius above the center (below it for two reflections, so that the
   light leaves downward toward an observer in both cases). Inside, each chord
   turns the path by 180° − 2θ₂ about the center. The graph beside is the angle
   θ between the light leaving and the sunlight against b, fixed at 0 to 90°;
   one reflection climbs to its greatest angle, two fall to their least, and
   the dashed circle on b is that turning point for red. Still.
===================================================================== */
(function () {
  const d = sim('sim-drop', 620);
  const bS = ctl(d.controls, { label: 'b', cls: 'position', min: 0, max: 0.99, step: 0.005, value: 0.86, unit: '× 半径', dec: 3, aria: '阳光射入处的高度，以半径的分数表示',
    specials: [{ at: () => (refl.value === 'one' ? 0.862 : 0.951), label: '彩虹光线' }] });
  const refl = choice(d.controls, { label: '\\text{内部反射次数}', options: [{ value: 'one', label: '一次' }, { value: 'two', label: '两次' }], value: 'one', aria: '光在水滴内部被反射的次数', onInput: () => bS.refresh() });
  const NR = 1.331, NV = 1.342, OUT = 230;
  const O = { x: 390, y: 270 }, R = 165;
  /* the angle between the light leaving and the sunlight, in degrees */
  const theta = (b, n, k) => { const i = Math.asin(b), r = Math.asin(b / n); return (k === 1 ? 4 * r - 2 * i : Math.PI + 2 * i - 6 * r) / RAD; };
  function trace(b, n, k) {
    const s = k === 1 ? 1 : -1, i = Math.asin(b), r = Math.asin(b / n);
    const pts = [];
    for (let j = 0; j <= k + 1; j++) { const a = Math.PI - s * i - s * j * (Math.PI - 2 * r); pts.push({ x: O.x + R * Math.cos(a), y: O.y - R * Math.sin(a) }); }
    const D = 2 * (i - r) + k * (Math.PI - 2 * r), ex = -s * D;
    return { pts, u: { x: Math.cos(ex), y: -Math.sin(ex) }, t2: r / RAD, t1: i / RAD };
  }

  function draw() {
    const { ctx } = begin(d.c);
    const b = bS.v, k = refl.value === 'one' ? 1 : 2, s = k === 1 ? 1 : -1;
    const red = spectral(660), vio = spectral(410);
    const thR = theta(b, NR, k), thV = theta(b, NV, k);
    topline(ctx, b <= 0.001
      ? '在水滴中心射入的光径直穿过去，又径直折回来，没有任何展开。'
      : `射入点在半径的 ${fmt(b, 2)} 处时，红光离开时与阳光成 ${fmt(thR, 1)}° 角，紫光成 ${fmt(thV, 1)}° 角。`);

    const cDrop = F.ref('drop');
    ctx.save(); ctx.fillStyle = alpha(PAL.muted, 0.12); ctx.strokeStyle = cDrop; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(O.x, O.y, R, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, '水滴', O.x + (s > 0 ? 40 : 40), O.y + s * 30, cDrop, { size: 20, align: 'center' });

    const tr = trace(b, NR, k), tv = trace(b, NV, k);
    const e = tr.pts[0];
    line(ctx, 30, e.y, e.x, e.y, F.fact(SUN), 5);
    arrow(ctx, 60, e.y, 130, e.y, F.fact(SUN), 4);
    label(ctx, '阳光', k === 1 ? 70 : Math.max(70, e.x - 90), e.y, { side: s > 0 ? 'above' : 'below', size: 20, color: PAL.ink });
    [[tv, vio], [tr, red]].forEach(([t, c]) => {
      for (let j = 0; j < t.pts.length - 1; j++) line(ctx, t.pts[j].x, t.pts[j].y, t.pts[j + 1].x, t.pts[j + 1].y, c, 3);
      const q = t.pts[t.pts.length - 1];
      arrow(ctx, q.x, q.y, q.x + t.u.x * OUT, q.y + t.u.y * OUT, c, 4);
    });
    const q = tr.pts[tr.pts.length - 1];
    if (b > 0.05) {
      line(ctx, q.x, q.y, q.x - 150, q.y, alpha(PAL.ink, 0.4), 2, [10, 10]);
      angleArc(ctx, { x: q.x, y: q.y }, 90, Math.PI, (180 + (k === 1 ? thR : -thR)) * RAD, `θ = ${fmt(thR, 1)}°`, undefined, C('angle'));
    }
    const qv = tv.pts[tv.pts.length - 1];
    if (b > 0.05) {          /* at the center red and violet run back along the sunlight as one ray */
      label(ctx, '红', q.x + tr.u.x * OUT, q.y + tr.u.y * OUT, { side: 'left', size: 20, color: PAL.ink });
      label(ctx, '紫', qv.x + tv.u.x * OUT, qv.y + tv.u.y * OUT, { side: 'right', size: 20, color: PAL.ink });
    }

    const box = { l: 860, r: 1320, t: 130, b: 500 };
    const { X, Y } = axes(ctx, box, [0, 1], [0, 90], { nx: 5, ny: 6, fx: (v) => fmt(v, 1), fy: (v) => fmt(v, 0) + '°', xl: '入射高度 b（× 半径）', xc: C('position'), yl: '与阳光方向的夹角 θ', yc: C('angle') });
    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
    curve(ctx, (x) => theta(x, NV, k), 0, 0.999, X, Y, vio, 4, 160);
    curve(ctx, (x) => theta(x, NR, k), 0, 0.999, X, Y, red, 4, 160);
    ctx.restore();
    const turnR = k === 1 ? 42.4 : 50.4;
    line(ctx, box.l, Y(turnR), box.r, Y(turnR), alpha(PAL.ink, 0.4), 2, [10, 10]);
    text(ctx, (k === 1 ? '最大角，红 ' : '最小角，红 ') + fmt(turnR, 1) + '°', box.r, Y(turnR) + (k === 1 ? -16 : 18), C('angle'), { size: 17, align: 'right' });
    pinned(ctx, box, X, Y, b, thV, vio);
    pinned(ctx, box, X, Y, b, thR, red);

    readout(d.readout, `\\sin\\kthetaone = n\\sin\\kthetatwo:\\quad \\sin ${fmt(tr.t1, 1)}^\\circ = ${fmt(NR, 3)}\\,\\sin ${fmt(tr.t2, 1)}^\\circ`,
      `这是射入水滴的红光，水在 660 nm 处的折射率取自表 25.2；紫光的折射率为 ${fmt(NV, 3)}，偏折得稍多一些，离开时与红光相差 ${fmt(Math.abs(thR - thV), 1)}°。`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   Figure 25.24 · sim-rainbow-arc
   Physical 3D. The ground is y = 0 and the observer's head stands 1.2 scene
   units above it; the sun is behind the observer, and its rays travel along
   s = (0, −sin e, −cos e) for the sun's elevation e. Every direction from the
   head at the angle θ(λ) to s is a cone, and the rain is a curtain at z = −CURT,
   so the bow is where the cone meets the curtain, kept above the ground. The
   bands are one ribbon of the true colors, the angles from each wavelength's
   index in water; the secondary ribbon lies outside with its colors reversed.
   The scene is not to scale: a real curtain of rain stands far off. Orbit held
   from 4° to 70° above the ground and within 100° of the view from behind the
   observer, since the ground is never seen from beneath and a view facing the
   sun only puts the curtain in front of the cone. Where WebGL is missing, the
   canvas draws the book's side view (a). Still.
===================================================================== */
(function () {
  const THREE = window.THREE;
  const glOk = () => { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch (e) { return false; } };
  const hasGL = !!(THREE && glOk());
  const d = sim('sim-rainbow-arc', hasGL ? 0 : 620);
  const eS = ctl(d.controls, { label: '\\text{太阳}', cls: 'angle', min: 0, max: 50, step: 0.5, value: 20, unit: '°', dec: 1, aria: '太阳在地平线以上的高度' });
  const xS = hasGL ? ctl(d.controls, { label: '\\text{你}', cls: 'position', min: -4, max: 4, step: 0.1, value: 0, unit: 'm', dec: 1, aria: '观察者沿雨幕站立的位置' }) : { v: 0 };
  const bows = choice(d.controls, { label: '\\text{彩虹}', options: [{ value: 'one', label: '主虹' }, { value: 'two', label: '主虹和副虹' }], value: 'one', aria: '是否画出副虹' });

  /* the angle of the rainbow ray from the antisolar direction, for one and for two reflections */
  function bowAngle(n, k) {
    let best = k === 1 ? -1 : 1e9;
    for (let b = 0.5; b < 0.9999; b += 0.0005) {
      const i = Math.asin(b), r = Math.asin(b / n), t = k === 1 ? 4 * r - 2 * i : Math.PI + 2 * i - 6 * r;
      best = k === 1 ? Math.max(best, t) : Math.min(best, t);
    }
    return best;
  }
  const nW = (l) => nOf('water', l);
  const ANG = { 1: { red: bowAngle(nW(660), 1), vio: bowAngle(nW(410), 1) }, 2: { red: bowAngle(nW(660), 2), vio: bowAngle(nW(410), 2) } };
  const HEAD = 1.2, CURT = 9;
  const sunDir = (e) => [0, -Math.sin(e), -Math.cos(e)];
  /* the point of the curtain seen at angle th from the antisolar direction, at azimuth phi about it */
  function onCurtain(e, th, phi, ox) {
    const s = sunDir(e), e2 = [0, Math.cos(e), -Math.sin(e)];
    const u = [Math.sin(th) * Math.cos(phi), Math.cos(th) * s[1] + Math.sin(th) * Math.sin(phi) * e2[1], Math.cos(th) * s[2] + Math.sin(th) * Math.sin(phi) * e2[2]];
    if (u[2] > -0.05) return null;
    const t = CURT / -u[2], p = [ox + t * u[0], HEAD + t * u[1], -CURT];
    return p[1] >= 0 ? p : null;
  }
  const words = () => {
    const e = eS.v, top = ANG[1].red / RAD - e;
    return top > 0 ? `太阳高出地平线 ${fmt(e, 1)}° 时，红色带的顶端高出地平线 ${fmt(top, 1)}°。` : `太阳高出地平线 ${fmt(e, 1)}° 时，整个主虹都在地平线以下，从地面上看不到彩虹。`;
  };

  let V = null, g3 = null;
  function ribbon(g, e, ox, k) {
    const a1 = ANG[k].vio, a2 = ANG[k].red, pos = [], col = [], idx = [];
    const NL = 14, NP = 120;
    const rows = [];
    for (let j = 0; j <= NL; j++) {
      const l = 410 + (250 * j) / NL, th = k === 1 ? a1 + ((a2 - a1) * j) / NL : a1 + ((a2 - a1) * j) / NL;
      const c = new THREE.Color(spectral(l));
      const row = [];
      for (let q = 0; q <= NP; q++) {
        const p = onCurtain(e, th, -Math.PI / 2 + (2 * Math.PI * q) / NP, ox);
        row.push(p ? pos.length / 3 : -1);
        if (p) { pos.push(p[0], p[1], p[2] + 0.02); col.push(c.r, c.g, c.b); }
      }
      rows.push(row);
    }
    for (let j = 0; j < NL; j++) for (let q = 0; q < NP; q++) {
      const a = rows[j][q], b = rows[j][q + 1], c = rows[j + 1][q], dd = rows[j + 1][q + 1];
      if (a < 0 || b < 0 || c < 0 || dd < 0) continue;
      idx.push(a, b, c, b, dd, c);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    geo.setIndex(idx);
    const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide, transparent: true, opacity: k === 1 ? 0.95 : 0.6 }));
    g.add(m); V.pickable(m, k === 1 ? '主虹，红在外、紫在内' : '副虹，紫在外、红在内');
  }
  function build() {
    V.clear();
    const e = Math.max(eS.v, 0.3) * RAD, ox = xS.v, s = sunDir(e), head = [ox, HEAD, 0];
    const root3 = new THREE.Group(); root3.position.set(0, -3.2, 3.5); g3.add(root3);
    const ground = F.mesh.box(root3, [0, -0.03, -3], [30, 0.06, 20], PAL.soft);
    V.pickable(ground, '地面');
    const curtain = new THREE.Mesh(new THREE.PlaneGeometry(30, 12), F.mesh.mat(PAL.muted, { transparent: true, opacity: 0.12, side: THREE.DoubleSide, depthWrite: false }));
    curtain.position.set(0, 6, -CURT - 0.02); root3.add(curtain); V.pickable(curtain, '出现彩虹的雨幕');
    const cObs = F.ref('observer');
    F.mesh.stick(root3, [ox, 0, 0], [ox, HEAD - 0.2, 0], 0.12, cObs);
    V.pickable(F.mesh.sphere(root3, head, 0.14, cObs), '观察者的头部');
    const t0 = HEAD / Math.sin(e), shadow = [ox + t0 * s[0], 0.01, t0 * s[2]];
    const far = Math.min(t0, CURT / Math.cos(e));
    const axisEnd = [ox, HEAD + far * s[1], far * s[2]];
    F.mesh.polyline(root3, [[ox, HEAD - 6 * s[1], -6 * s[2]], axisEnd], PAL.muted);
    if (t0 < 30) V.pickable(F.mesh.sphere(root3, shadow, 0.1, PAL.muted), '头部的影子，位于背离太阳的正方向上');
    ribbon(root3, e, ox, 1);
    if (bows.value === 'two') ribbon(root3, e, ox, 2);
    const drops = [];
    [-0.95, -0.5, 0, 0.5, 0.95].forEach((ph) => {
      const p = onCurtain(e, ANG[1].red, Math.PI / 2 + ph, ox);
      if (!p) return;
      drops.push(p);
      V.pickable(F.mesh.sphere(root3, p, 0.14, PAL.panel), '向眼睛送来红光的雨滴');
      const from = [p[0] - 7 * s[0], p[1] - 7 * s[1], p[2] - 7 * s[2]];
      V.pickable(F.mesh.stick(root3, from, p, 0.025, F.fact(SUN)), '一束阳光');
      V.pickable(F.mesh.stick(root3, p, head, 0.025, spectral(660)), '以与阳光相同的夹角到达眼睛的红光');
    });
    const pv = onCurtain(e, ANG[1].vio, Math.PI / 2, ox);
    if (pv) V.pickable(F.mesh.stick(root3, pv, head, 0.025, spectral(410)), '从较低的雨滴到达眼睛的紫光');
    V.label('你', head, root3, -30);
    if (t0 < 30) V.label('你头部的影子', shadow, root3, 40);
    const top = drops[2];
    if (top) V.label(`红，${fmt(ANG[1].red / RAD, 1)}°`, [top[0] + 1.4, top[1] + 0.5, top[2]], root3, 0);
    if (drops[0]) V.label('阳光', [drops[0][0] - 7 * s[0], drops[0][1] - 7 * s[1], drops[0][2] - 7 * s[2]], root3, 12);
    if (bows.value === 'two') { const p2 = onCurtain(e, ANG[2].red, Math.PI / 2, ox); if (p2) V.label('副虹', [p2[0], p2[1] + 0.5, p2[2]], root3, 0); }
    V.headline(words());
    V.invalidate();
  }

  function drawFlat(ctx) {
    const e = eS.v * RAD, H = { x: 230, y: 470 }, G = 560;
    line(ctx, 40, G, 1360, G, PAL.muted, 2);
    F.silhouette(ctx, { x: H.x, y: G, s: 0.62, face: 1, pose: 'stand', color: F.ref('observer') });
    const aAxis = -e, show = [[ANG[1].red, 660], [ANG[1].vio, 410]];
    if (bows.value === 'two') show.push([ANG[2].red, 660], [ANG[2].vio, 410]);
    const dist = 760;
    line(ctx, H.x, H.y, H.x + Math.cos(aAxis) * 900, H.y - Math.sin(aAxis) * 900, alpha(PAL.ink, 0.4), 2, [10, 10]);
    show.forEach(([th, l]) => {
      const a = aAxis + th, D = { x: H.x + Math.cos(a) * dist, y: H.y - Math.sin(a) * dist };
      if (D.y > G - 10) return;
      line(ctx, D.x - Math.cos(aAxis) * 700, D.y + Math.sin(aAxis) * 700, D.x, D.y, F.fact(SUN), 3);
      arrow(ctx, D.x, D.y, H.x + (D.x - H.x) * 0.25, H.y + (D.y - H.y) * 0.25, spectral(l), 4);
      dot(ctx, D.x, D.y, PAL.ink, false, 12);
    });
    angleArc(ctx, { x: H.x, y: H.y }, 150, -eS.v * RAD, -eS.v * RAD + ANG[1].red, `θ = ${fmt(ANG[1].red / RAD, 1)}°`, undefined, C('angle'));
    label(ctx, '从太阳经过头部的直线', H.x + Math.cos(aAxis) * 700, H.y - Math.sin(aAxis) * 700, { side: 'below', size: 17, color: PAL.muted });
    topline(ctx, words());
  }

  function draw() {
    if (hasGL && V) build();
    if (!hasGL && d.c) { const { ctx } = begin(d.c); drawFlat(ctx); }
    const top = ANG[1].red / RAD - eS.v;
    readout(d.readout, `\\text{彩虹顶端} = \\theta - \\text{太阳高度角} = ${fmt(ANG[1].red / RAD, 1)}^\\circ - ${fmt(eS.v, 1)}^\\circ = ${fmt(top, 1)}^\\circ`,
      `红光以与穿过头部影子的直线成 ${fmt(ANG[1].red / RAD, 1)}° 的角度到达眼睛，紫光为 ${fmt(ANG[1].vio / RAD, 1)}°，所以紫在彩虹的内侧。` +
      (bows.value === 'two' ? `在副虹中，红在 ${fmt(ANG[2].red / RAD, 1)}°，紫在 ${fmt(ANG[2].vio / RAD, 1)}°，所以其颜色次序相反。` : ''));
  }

  if (hasGL) {
    V = F.view3d(d.stage, {
      h: 620, dist: 26, tilt: 0.12, spin: 'off',
      views: [{ label: '在你身后', yaw: 0, pitch: 0.12 }, { label: '从侧面', yaw: -1.5, pitch: 0.1 }],
      pitch: [4 * RAD, 70 * RAD], yaw: [-100 * RAD, 100 * RAD], zoomMin: 0.7, zoomMax: 2.4,
    });
    if (!V.scene) V = null;
    else { g3 = V.part(0); V.setView(0, 0.12); }
  }
  register(d.fig, { update: () => {}, draw });
})();

};
