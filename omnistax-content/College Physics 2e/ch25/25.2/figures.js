/* Figures for section 25.2 The Law of Reflection. The page binds no type, as
   ch25/COLOR.md gives 25.2: every angle is untyped and every length here is a
   scene length, so all three figures are wholly in ink, which is the second branch
   of root rule 7's test. Nothing moves: a reflection is a path with no clock in it,
   so every figure registers no cycle and redraws on its sliders alone. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['25.2'] = function (root, F) {
const { fmt, tex, PAL, alpha, ctl, register, begin, line, arrow, dot, text, topline, hbracket, vbracket, angleArc } = F;
const sim = (id, H) => F.sim(root, id, H);
const RAD = Math.PI / 180;

/* a ray from a to b with its arrowhead partway along, as the book draws rays */
function ray(ctx, ax, ay, bx, by, color, w, at) {
  const k = at ?? 0.55, mx = ax + (bx - ax) * k, my = ay + (by - ay) * k;
  arrow(ctx, ax, ay, mx, my, color, w);
  line(ctx, mx, my, bx, by, color, w);
}
/* a surface seen edge-on: the line itself and short hatching on its far side */
function hatch(ctx, pts, depth) {
  for (let i = 0; i + 1 < pts.length; i++) {
    const [x1, y1] = pts[i], [x2, y2] = pts[i + 1], L = Math.hypot(x2 - x1, y2 - y1), n = Math.floor(L / 22);
    for (let j = 0; j < n; j++) {
      const x = x1 + (x2 - x1) * (j + 0.5) / n, y = y1 + (y2 - y1) * (j + 0.5) / n;
      line(ctx, x, y, x - depth * 0.6, y + depth, alpha(PAL.ink, 0.3), 2);
    }
  }
  ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.lineJoin = 'round'; ctx.beginPath();
  pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.stroke(); ctx.restore();
}

/* =====================================================================
   FIGURE 25.4 · sim-law-of-reflection · still · flat (root rule 28.1)
   The incident ray, the perpendicular and the reflected ray lie in one plane,
   and the lesson is the two angles inside it. The book draws one angle; the
   slider sets any, and 0° is marked, the ray that comes straight back.
===================================================================== */
(function () {
  const d = sim('sim-law-of-reflection', 560);
  const th = ctl(d.controls, { label: '\\theta_{\\text{i}}', cls: '', min: 0, max: 85, step: 1, value: 35, unit: '°', dec: 0, aria: 'the angle of incidence',
    specials: [{ at: 0, label: 'along the perpendicular' }] });
  const PX = 700, PY = 450, L = 330;

  function draw() {
    const { ctx } = begin(d.c);
    const t = th.v * RAD, s = Math.sin(t), c = Math.cos(t);
    topline(ctx, th.v === 0
      ? 'A ray striking along the perpendicular is reflected straight back the way it came.'
      : `A ray striking at ${fmt(th.v, 0)}° to the perpendicular leaves at ${fmt(th.v, 0)}° on the other side of it.`);
    hatch(ctx, [[260, PY], [1140, PY]], 18);
    text(ctx, 'smooth surface', 1140, PY + 44, PAL.muted, { size: 19, align: 'right' });
    line(ctx, PX, PY, PX, PY - 350, alpha(PAL.ink, 0.45), 2, [10, 10]);
    text(ctx, 'perpendicular', PX, PY - 364, PAL.muted, { size: 19, align: 'center', bg: PAL.panel });
    const ix = PX - L * s, iy = PY - L * c, rx = PX + L * s, ry = PY - L * c;
    if (th.v > 0) {
      angleArc(ctx, { x: PX, y: PY }, 96, Math.PI / 2, Math.PI / 2 + t, 'θᵢ');
      angleArc(ctx, { x: PX, y: PY }, 96, Math.PI / 2 - t, Math.PI / 2, 'θᵣ');
      ray(ctx, ix, iy, PX, PY, PAL.ink, 4);
      ray(ctx, PX, PY, rx, ry, PAL.ink, 4, 0.6);
      text(ctx, 'incident ray', ix - 14 * c, iy - 6, PAL.ink, { size: 20, align: 'right', bg: PAL.panel });
      text(ctx, 'reflected ray', rx + 14 * c, ry - 6, PAL.ink, { size: 20, align: 'left', bg: PAL.panel });
    } else {
      arrow(ctx, PX - 14, PY - 330, PX - 14, PY - 150, PAL.ink, 4);
      line(ctx, PX - 14, PY - 150, PX - 14, PY, PAL.ink, 4);
      arrow(ctx, PX + 14, PY, PX + 14, PY - 200, PAL.ink, 4);
      line(ctx, PX + 14, PY - 200, PX + 14, PY - 330, PAL.ink, 4);
      text(ctx, 'incident ray', PX - 34, PY - 250, PAL.ink, { size: 20, align: 'right', bg: PAL.panel });
      text(ctx, 'reflected ray', PX + 34, PY - 250, PAL.ink, { size: 20, align: 'left', bg: PAL.panel });
    }
    dot(ctx, PX, PY, PAL.ink, true, 6);
    tex(d.readout, `\\theta_{\\text{r}} = \\theta_{\\text{i}} = ${fmt(th.v, 0)}^\\circ`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 25.5 + 25.6 + 25.7 · sim-rough-and-smooth · still · flat
   The book draws a rough surface, a sheet of paper and a mirror as three
   pictures; they are one surface at three roughnesses. Nine parallel rays
   each obey the law of reflection at the patch they strike, and the patches
   tilt in proportion to the roughness, so a roughness of 0 is the mirror of
   Figure 25.7 (marked on the slider). The two observers are far away, so each
   is a direction: a ray reaches one when it leaves within 8° of that direction.
===================================================================== */
(function () {
  const d = sim('sim-rough-and-smooth', 660);
  const rough = ctl(d.controls, { label: '\\text{roughness}', cls: '', min: 0, max: 1, step: 0.01, value: 0.8, unit: '', dec: 2, aria: 'the roughness of the surface',
    specials: [{ at: 0, label: 'mirror' }] });
  const th = ctl(d.controls, { label: '\\theta_{\\text{i}}', cls: '', min: 15, max: 60, step: 1, value: 40, unit: '°', dec: 0, aria: 'the angle of incidence of the beam' });
  const N = 9, X0 = 420, DX = 70, Y0 = 520, HALF = 30, TILT = 30;
  /* the tilt of each patch at full roughness, as a fraction of 30°, fixed so the surface keeps its shape */
  const SHAPE = [0.7, -0.9, 0.25, 0.95, -0.45, -0.1, 0.85, -0.75, 0.4];
  const B_DIR = 78;                         /* the second observer's direction, in degrees right of the perpendicular */
  const CATCH = 8;

  function state() {
    const t = th.v * RAD, dv = [Math.sin(t), Math.cos(t)];
    const patches = SHAPE.map((f, i) => {
      const a = f * rough.v * TILT * RAD, x = X0 + i * DX;
      const n = [-Math.sin(a), -Math.cos(a)];
      const dn = dv[0] * n[0] + dv[1] * n[1];
      const r = [dv[0] - 2 * dn * n[0], dv[1] - 2 * dn * n[1]];
      const out = Math.atan2(r[0], -r[1]) / RAD;            /* degrees right of the vertical */
      const local = Math.acos(Math.max(-1, Math.min(1, -dn))) / RAD;
      return { x, a, n, r, out, local };
    });
    const outs = patches.map((p) => p.out);
    const seenA = outs.filter((o) => Math.abs(o - th.v) < CATCH).length;
    const seenB = outs.filter((o) => Math.abs(o - B_DIR) < CATCH).length;
    return { dv, patches, seenA, seenB, spread: Math.max(...outs) - Math.min(...outs) };
  }

  function eye(ctx, x, y, a, name, seen) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(a);
    ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.panel; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(-22, 0); ctx.quadraticCurveTo(0, -18, 22, 0); ctx.quadraticCurveTo(0, 18, -22, 0); ctx.fill(); ctx.stroke();
    ctx.fillStyle = seen ? PAL.ink : alpha(PAL.ink, 0.35); ctx.beginPath(); ctx.arc(0, 0, 8, 0, 2 * Math.PI); ctx.fill();
    ctx.restore();
    text(ctx, name, x, y - 40, PAL.ink, { size: 19, align: 'center', bg: PAL.panel });
  }
  /* a flashlight whose lens spans the beam, at (x, y) and pointing along the beam */
  function flashlight(ctx, x, y, t, half) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(Math.PI / 2 - t);
    ctx.fillStyle = alpha(PAL.ink, 0.85);
    ctx.beginPath(); ctx.rect(-190, -22, 80, 44); ctx.fill();
    ctx.beginPath(); ctx.moveTo(-110, -28); ctx.lineTo(-6, -half); ctx.lineTo(-6, half); ctx.lineTo(-110, 28); ctx.closePath(); ctx.fill();
    ctx.restore();
  }

  function draw() {
    const { ctx } = begin(d.c);
    const st = state(), t = th.v * RAD, L = 250 + 150 * Math.sin(th.v * RAD), C0 = X0 + 4 * DX;
    const mirror = rough.v === 0;
    const who = st.seenA && st.seenB ? 'both observers see the lit spot'
      : st.seenA ? `only the observer at ${fmt(th.v, 0)}° sees the reflected light`
      : st.seenB ? `only the observer at ${B_DIR}° sees the reflected light` : 'neither observer sees the reflected light';
    topline(ctx, mirror
      ? `The mirror sends all nine rays off at ${fmt(th.v, 0)}°, so ${who}.`
      : `The surface sends the nine rays off over ${fmt(st.spread, 0)}°, so ${who}.`);
    /* the surface: one patch per ray, joined */
    const pts = [];
    st.patches.forEach((p) => {
      const cx = Math.cos(p.a) * HALF, cy = Math.sin(p.a) * HALF;
      pts.push([p.x - cx, Y0 + cy], [p.x + cx, Y0 - cy]);
    });
    pts.unshift([X0 - 110, Y0]); pts.push([X0 + (N - 1) * DX + 110, Y0]);
    hatch(ctx, pts, 16);
    text(ctx, mirror ? 'mirror' : 'rough surface', X0 + (N - 1) * DX + 110, Y0 + 50, PAL.muted, { size: 19, align: 'right' });
    /* the middle patch carries its perpendicular, so the law can be read at one point */
    const mid = st.patches[4];
    line(ctx, mid.x, Y0, mid.x + 150 * mid.n[0], Y0 + 150 * mid.n[1], alpha(PAL.ink, 0.45), 2, [10, 10]);
    st.patches.forEach((p) => {
      const back = L + (p.x - C0) * st.dv[0], sx = p.x - back * st.dv[0], sy = Y0 - back * st.dv[1];
      ray(ctx, sx, sy, p.x, Y0, alpha(PAL.ink, 0.8), 3, 0.5);
      const ex = p.x + 230 * p.r[0], ey = Y0 + 230 * p.r[1];
      const hit = Math.abs(p.out - th.v) < CATCH || Math.abs(p.out - B_DIR) < CATCH;
      ray(ctx, p.x, Y0, ex, ey, hit ? PAL.ink : alpha(PAL.ink, 0.55), 3, 0.6);
    });
    const fx = C0 - L * st.dv[0], fy = Y0 - L * st.dv[1];
    flashlight(ctx, fx, fy, t, 4 * DX * st.dv[1] + 16);
    text(ctx, 'flashlight', fx - 150 * st.dv[0] - 40, fy - 150 * st.dv[1], PAL.muted, { size: 19, align: 'right', bg: PAL.panel });
    const R0 = 420;
    const place = (deg) => [C0 + R0 * Math.sin(deg * RAD), Y0 - R0 * Math.cos(deg * RAD)];
    const [ax, ay] = place(th.v), [bx, by] = place(B_DIR);
    eye(ctx, ax, ay, th.v * RAD, `observer at ${fmt(th.v, 0)}°`, st.seenA > 0);
    eye(ctx, bx, by, B_DIR * RAD, `observer at ${B_DIR}°`, st.seenB > 0);
    tex(d.readout, `\\theta_{\\text{r}} = \\theta_{\\text{i}} = ${fmt(mid.local, 0)}^\\circ \\text{ at the middle patch}`);
    d.readout.appendChild(F.el('small', null, `Measured from the perpendicular to the patch each ray strikes, every ray obeys the law of reflection. ${st.seenA} of the nine rays reach the observer at ${fmt(th.v, 0)}°, and ${st.seenB} reach the observer at ${B_DIR}°.`));
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 25.9 · sim-image-in-mirror · still · flat
   One ray from the feet and one from the top of the head reach the eyes after
   reflection; traced back, they meet at the image, as far behind the mirror as
   the person stands in front. The mirror is drawn only over the stretch the
   two rays use, which is half her height wherever she stands.
   Scale: 180 units per metre, fixed, from 3.0 m either side of the mirror.
===================================================================== */
(function () {
  const d = sim('sim-image-in-mirror', 660);
  const dist = ctl(d.controls, { label: '\\text{distance from the mirror}', cls: '', min: 0.5, max: 3, step: 0.05, value: 1.2, unit: 'm', dec: 2, aria: 'the distance from the person to the mirror' });
  const hgt = ctl(d.controls, { label: '\\text{height}', cls: '', min: 1.4, max: 1.9, step: 0.01, value: 1.7, unit: 'm', dec: 2, aria: 'the height of the person' });
  const MX = 700, FLOOR = 590, S = 180, EYE = 1.65 / 1.78;

  function draw() {
    const { ctx } = begin(d.c);
    const D = dist.v, h = hgt.v, px = MX - D * S, ix = MX + D * S, hp = h * S, s = hp / F.silhouette.height(1);
    const top = FLOOR - hp, eyeY = FLOOR - EYE * hp, ex = px + 8 * s;
    const mTop = (top + eyeY) / 2, mBot = (FLOOR + eyeY) / 2;
    topline(ctx, `She stands ${fmt(D, 2)} m in front of the mirror, and her image stands ${fmt(D, 2)} m behind it.`);
    line(ctx, 60, FLOOR, 1340, FLOOR, PAL.ink, 3);
    F.silhouette(ctx, { x: px, y: FLOOR, s, face: 1, pose: 'stand', color: alpha(PAL.ink, 0.7) });
    F.silhouette(ctx, { x: ix, y: FLOOR, s, face: -1, pose: 'stand', color: alpha(PAL.ink, 0.22) });
    /* the dashed lines behind the mirror, back to the image */
    line(ctx, MX, mTop, ix, top, alpha(PAL.ink, 0.6), 3, [10, 10]);
    line(ctx, MX, mBot, ix, FLOOR, alpha(PAL.ink, 0.6), 3, [10, 10]);
    /* the two rays */
    ray(ctx, px, top, MX, mTop, PAL.ink, 3, 0.55);
    ray(ctx, MX, mTop, ex, eyeY, PAL.ink, 3, 0.5);
    ray(ctx, px, FLOOR - 2, MX, mBot, PAL.ink, 3, 0.55);
    ray(ctx, MX, mBot, ex, eyeY, PAL.ink, 3, 0.5);
    /* the mirror, over the stretch the rays use */
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.18); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.rect(MX, mTop - 6, 10, mBot - mTop + 12); ctx.fill(); ctx.stroke(); ctx.restore();
    line(ctx, MX, mTop - 6, MX, mBot + 6, PAL.ink, 4);
    vbracket(ctx, MX + 30, mTop, mBot, PAL.ink);
    /* the angles of the ray from the feet, at the mirror */
    const t = Math.atan2(mBot - eyeY, MX - ex);
    const ar = Math.min(220, Math.max(70, 28 / Math.sin(t)));
    line(ctx, MX, mBot, MX - ar - 60, mBot, alpha(PAL.ink, 0.45), 2, [10, 10]);
    angleArc(ctx, { x: MX, y: mBot }, ar, Math.PI - t, Math.PI, 'θ');
    angleArc(ctx, { x: MX, y: mBot }, ar, Math.PI, Math.PI + Math.atan2(FLOOR - mBot, MX - px), 'θ');
    text(ctx, `mirror, ${fmt(h / 2, 2)} m long`, MX, top - 64, PAL.ink, { size: 20, align: 'center', bg: PAL.panel });
    text(ctx, 'image', ix, top - 26, PAL.muted, { size: 20, align: 'center', bg: PAL.panel });
    hbracket(ctx, px, MX, FLOOR + 30, PAL.ink, `${fmt(D, 2)} m`, { side: 'below' });
    hbracket(ctx, MX, ix, FLOOR + 30, alpha(PAL.ink, 0.6), `${fmt(D, 2)} m`, { side: 'below' });
    const deg = Math.atan2(FLOOR - mBot, MX - px) / RAD;
    tex(d.readout, `\\theta_{\\text{r}} = \\theta_{\\text{i}} = ${fmt(deg, 1)}^\\circ`);
    d.readout.appendChild(F.el('small', null, `The ray from her feet meets the mirror at ${fmt(deg, 1)}° to the perpendicular and leaves at the same angle, so traced back it reaches the floor ${fmt(D, 2)} m behind the mirror. The top of the mirror sits ${fmt((FLOOR - mTop) / S, 3)} m above the floor and the bottom ${fmt((FLOOR - mBot) / S, 3)} m, a stretch of ${fmt(h / 2, 3)} m, which is half her height.`));
  }
  register(d.fig, { update: () => {}, draw });
})();
};
