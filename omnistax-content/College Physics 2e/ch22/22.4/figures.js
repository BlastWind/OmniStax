/* Figures for section 22.4 Magnetic Field Strength: Force on a Moving Charge in
   a Magnetic Field. The page binds magnetic-field, force, velocity and charge,
   which is what ch22/COLOR.md gives it; the angle, the lengths and the labels on
   every scale are untyped and in ink, no body is tinted, and the sign of the
   charge is told by its label and by which way the force points, never by a hue.
   Both figures answer their controls and register no cycle: a charge crossing a
   field at a given angle feels a force that is a state of that arrangement, and
   a scale of field strengths is a state the reader steps through. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['22.4'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, topline, label, axes, curve, pinned, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

const RAD = Math.PI / 180;
const Q_C = 20e-9;                     /* the charge on the book's glass rod, in coulombs */
const G_TO_T = 1e-4;                   /* one gauss is ten thousandths of a tesla */

/* a number as a×10^b for the canvas, and the same for KaTeX */
function sci(x, dp) {
  if (!(Math.abs(x) > 0)) return '0';
  const e = Math.floor(Math.log10(Math.abs(x))), m = x / Math.pow(10, e);
  const sup = String(e).replace(/-/g, '\u2212').replace(/[0-9]/g, (c) => '\u2070\u00B9\u00B2\u00B3\u2074\u2075\u2076\u2077\u2078\u2079'[+c]);
  return fmt(m, dp ?? 2) + ' \u00D7 10' + sup;
}
function sciTex(x, dp) {
  if (!(Math.abs(x) > 0)) return '0';
  const e = Math.floor(Math.log10(Math.abs(x))), m = x / Math.pow(10, e);
  return fmt(m, dp ?? 2) + ' \\times 10^{' + e + '}';
}
const supOf = (e) => String(e).replace(/-/g, '\u2212').replace(/[0-9]/g, (c) => '\u2070\u00B9\u00B2\u00B3\u2074\u2075\u2076\u2077\u2078\u2079'[+c]);

/* =====================================================================
   FIGURE 22.16 + 22.17: the vector trio, in three dimensions. The lesson
   is that the force stands perpendicular to the plane the velocity and
   the field lie in, which no flat drawing can say without asking the
   reader to supply the third axis, so this is the full 3D scene root rule
   28.3 allows and ch22/config.md grants the section. Still: the force is a
   state of the arrangement and nothing here has a clock (rule 14). The
   orbit is held above the plane of v and B, from 6° to 82°, because right
   hand rule 1 is a statement about a right-handed arrangement and a reader
   who drifted underneath would be shown the left hand rule; the yaw is
   free, since every compass direction round the charge is a place worth
   standing. The arrows are drawn to a fixed scale taken from the slider
   maxima: the velocity reaches 2.0 units at 15 m/s and the force 2.6 units
   at the greatest force the sliders give, 3.0 × 10⁻¹¹ N. The field's
   strength is told the way 22.3 tells it, by how closely its lines are
   drawn, one line to every tenth of a gauss.
===================================================================== */
(function () {
  const THREE = window.THREE;
  /* a browser may define the constructor and still refuse a context, so the
     scene is attempted only where one can really be made; otherwise the flat
     drawing below takes the canvas and the figure loses nothing but the turn */
  const glOk = () => { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch (e) { return false; } };
  const hasGL = !!(THREE && glOk());
  const H2D = hasGL ? 360 : 860;                 /* with no scene to mount, the canvas draws the plane from above as well as the graph */
  const d = sim('sim-rhr-1', H2D);
  const signC = choice(d.controls, { label: '\\text{the charge}', options: [{ value: 'pos', label: 'positive' }, { value: 'neg', label: 'negative' }], value: 'pos', aria: 'the sign of the charge that crosses the field' });
  const vS = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 0, max: 15, step: 0.5, value: 10, unit: 'm/s', dec: 1, aria: 'the speed of the charge through the field' });
  const bS = ctl(d.controls, { label: '\\kBmag', cls: 'magnetic-field', min: 0, max: 1, step: 0.05, value: 0.5, unit: 'G', dec: 2, aria: 'the strength of the magnetic field, in gauss' });
  const thS = ctl(d.controls, { label: '\\theta', cls: '', min: 0, max: 180, step: 1, value: 90, unit: '°', dec: 0, aria: 'the angle between the velocity of the charge and the magnetic field' });
  const handC = choice(d.controls, { label: '\\text{the right hand}', options: [{ value: 'on', label: 'shown' }, { value: 'off', label: 'hidden' }], value: 'on', aria: 'whether the right hand of the rule is drawn over the three vectors' });

  const V_MAX = 15, B_MAX = 1, F_MAX = Q_C * V_MAX * B_MAX * G_TO_T;   /* 3.0 × 10⁻¹¹ N, and the graph's axis */
  const LV = 2.0, LB = 2.0, LF = 3.2, R_DISC = 1.9;
  const state = () => {
    const th = thS.v * RAD, s = signC.value === 'pos' ? 1 : -1;
    const sn = (thS.v === 0 || thS.v === 180) ? 0 : Math.sin(th);      /* exactly zero along the field, not a rounding crumb */
    const B_T = bS.v * G_TO_T, Fv = Q_C * vS.v * B_T * sn;
    /* x east, y up, z south: the field runs due north and the velocity swings from north through west */
    return { th, s, sn, B_T, Fv, vdir: [-Math.sin(th), 0, -Math.cos(th)], bdir: [0, 0, -1], fdir: [0, -s, 0] };
  };
  const dirWord = () => {
    const st = state();
    if (bS.v === 0) return 'there is no field to push it';
    if (vS.v === 0) return 'a charge at rest feels no magnetic force';
    if (thS.v === 0 || thS.v === 180) return 'it travels along the field and feels no force at all';
    return st.s > 0 ? 'it is pushed straight down' : 'it is pushed straight up';
  };

  /* ---------- the scene ---------- */
  let V = null, S = null, root3 = null, lastLines = -1, lastTh = -1;
  const paint = [];
  const pmat = (col, extra) => { const m = F.mesh.mat(col(), extra); paint.push({ m, col }); return m; };
  /* an arrow of shaft radius r that can be re-pointed each frame */
  function vec(g, col, r, name) {
    const shaft = new THREE.Mesh(F.mesh.geo().cyl, pmat(col)); shaft.scale.set(r, 1, r); g.add(shaft);
    const cone = new THREE.Mesh(F.mesh.geo().cone, pmat(col)); g.add(cone);
    V.pickable(shaft, name); V.pickable(cone, name);
    return {
      set(a, b) {
        const A = new THREE.Vector3(a[0], a[1], a[2]), B = new THREE.Vector3(b[0], b[1], b[2]);
        const dd = B.clone().sub(A), L = dd.length();
        if (L < 0.04) { shaft.visible = cone.visible = false; return; }
        shaft.visible = cone.visible = true;
        const hl = Math.min(0.34, L * 0.45), u = dd.clone().normalize(), base = B.clone().sub(u.clone().multiplyScalar(hl));
        F.mesh.setStick(shaft, a, base.toArray());
        cone.position.copy(base).add(u.clone().multiplyScalar(hl / 2));
        cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), u);
        cone.scale.set(r * 3.3, hl, r * 3.3);
      },
    };
  }
  const dim = (e, col) => { e.style.background = 'transparent'; e.style.border = '0'; e.style.fontWeight = '500'; e.style.color = col; return e; };

  function build() {
    if (!V || !V.scene || !root3) return;
    V.clear(); paint.length = 0; lastLines = -1; lastTh = -1;
    const inkC = () => PAL.ink, mutedC = () => PAL.muted;
    const BC = () => C('magnetic-field'), VC = () => C('velocity'), FC = () => C('force'), QC = () => C('charge');
    /* the plane the velocity and the field lie in, drawn as a ring with the four compass points */
    const ring = [];
    for (let i = 0; i <= 96; i++) { const a = (i / 96) * 2 * Math.PI; ring.push([R_DISC * Math.cos(a), 0, R_DISC * Math.sin(a)]); }
    const rim = F.mesh.polyline(root3, ring, alpha(PAL.ink, 0.35)); paint.push({ m: rim.material, col: () => alpha(PAL.ink, 0.35) });
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * 2 * Math.PI, c = Math.cos(a), s2 = Math.sin(a);
      const tk = F.mesh.polyline(root3, [[R_DISC * 0.94 * c, 0, R_DISC * 0.94 * s2], [R_DISC * c, 0, R_DISC * s2]], alpha(PAL.ink, 0.35));
      paint.push({ m: tk.material, col: () => alpha(PAL.ink, 0.35) });
    }
    S = { lines: new THREE.Group(), arc: new THREE.Group(), hand: new THREE.Group() };
    root3.add(S.lines); root3.add(S.arc); root3.add(S.hand);
    /* the right hand of the rule: the palm above the plane facing the way the
       force goes on a positive charge, the fingers along the field and the thumb
       along the velocity. Only the thumb moves, since the field is due north */
    const hm = pmat(mutedC, { transparent: true, opacity: 0.5 });
    const palm = new THREE.Mesh(new THREE.BoxGeometry(0.74, 0.13, 0.82), hm); palm.position.set(0, 0.62, -0.06); S.hand.add(palm); V.pickable(palm, 'the palm of the right hand: the force on a positive charge comes out of it');
    [-0.27, -0.09, 0.09, 0.27].forEach((x) => {
      const f2 = new THREE.Mesh(F.mesh.geo().cyl, hm); f2.scale.set(0.055, 1, 0.055);
      F.mesh.setStick(f2, [x, 0.62, -0.46], [x, 0.62, -1.02]); S.hand.add(f2); V.pickable(f2, 'the fingers, pointing the way the magnetic field runs');
    });
    const wrist = new THREE.Mesh(F.mesh.geo().cyl, hm); wrist.scale.set(0.17, 1, 0.17);
    F.mesh.setStick(wrist, [0, 0.62, 0.33], [0, 0.62, 1.05]); S.hand.add(wrist); V.pickable(wrist, 'the wrist');
    S.thumb = new THREE.Mesh(F.mesh.geo().cyl, hm); S.thumb.scale.set(0.072, 1, 0.072); S.hand.add(S.thumb); V.pickable(S.thumb, 'the thumb, pointing the way the charge travels');
    /* the charge and the three vectors */
    S.ball = F.mesh.sphere(root3, [0, 0, 0], 0.14, C('charge')); paint.push({ m: S.ball.material, col: QC }); V.pickable(S.ball, 'the charge, 20 nC');
    S.B = vec(root3, BC, 0.045, 'B, the magnetic field, running due north');
    S.v = vec(root3, VC, 0.045, 'v, the velocity of the charge');
    S.F = vec(root3, FC, 0.055, 'F, the magnetic force, perpendicular to the plane of v and B');
    /* the names. Five belong to things the figure draws and are on; the four
       compass points are the frame and are drawn quieter (rule 26.7) */
    S.lab = {
      v: V.label('v', [0, 0, 0], root3, 10), B: V.label('B', [0, 0, 0], root3, 10),
      F: V.label('F', [0, 0, 0], root3, 10), q: V.label('q', [0, 0, 0], root3, -8),
      th: V.label('θ', [0, 0, 0], root3, -16),
    };
    S.lab.v.style.color = C('velocity'); S.lab.B.style.color = C('magnetic-field');
    S.lab.F.style.color = C('force'); S.lab.q.style.color = C('charge');
    const comp = [['N', [0, 0, -R_DISC - 0.3]], ['E', [R_DISC + 0.3, 0, 0]], ['S', [0, 0, R_DISC + 0.3]], ['W', [-R_DISC - 0.3, 0, 0]]];
    S.comp = comp.map(([s, p]) => dim(V.label(s, p, root3, 0), PAL.muted));
    V.invalidate();
  }

  function apply(st) {
    if (!S) return;
    paint.forEach((p) => { try { p.m.color.set(p.col()); } catch (e) { /* a palette value the renderer cannot read is left as it was */ } });
    S.lab.v.style.color = C('velocity'); S.lab.B.style.color = C('magnetic-field');
    S.lab.F.style.color = C('force'); S.lab.q.style.color = C('charge');
    S.comp.forEach((e) => { e.style.color = PAL.muted; });
    const lv = LV * (vS.v / V_MAX), lf = LF * (st.Fv / F_MAX), lb = bS.v > 0 ? LB : 0;
    const vt = [st.vdir[0] * lv, 0, st.vdir[2] * lv];
    const bt = [0, 0, -lb], ft = [0, st.fdir[1] * lf, 0];
    S.v.set([0, 0, 0], vt); S.B.set([0, 0, 0], bt); S.F.set([0, 0, 0], ft);
    S.hand.visible = handC.value === 'on';
    F.mesh.setStick(S.thumb, [st.vdir[0] * 0.33, 0.62, st.vdir[2] * 0.33], [st.vdir[0] * 0.95, 0.62, st.vdir[2] * 0.95]);
    /* the field lines: one to every tenth of a gauss, spread across the plane */
    const n = Math.round(bS.v * 10);
    if (n !== lastLines) {
      S.lines.children.forEach((c) => { c.geometry?.dispose(); c.material?.dispose(); });
      S.lines.clear(); lastLines = n;
      for (let i = 0; i < n; i++) {
        const x = n === 1 ? 0 : -1.5 + (3.0 * i) / (n - 1);
        if (Math.abs(x) < 0.12) continue;                       /* the bold arrow already stands on the middle line */
        const half = Math.sqrt(Math.max(0.16, R_DISC * R_DISC - x * x));
        F.mesh.polyline(S.lines, [[x, 0, half], [x, 0, -half + 0.22]], alpha(C('magnetic-field'), 0.5));
        const cone = new THREE.Mesh(F.mesh.geo().cone, F.mesh.mat(alpha(C('magnetic-field'), 0.5)));
        cone.position.set(x, 0, -half + 0.11); cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, -1));
        cone.scale.set(0.075, 0.26, 0.075); S.lines.add(cone);
      }
    }
    S.lines.children.forEach((c) => { try { c.material.color.set(alpha(C('magnetic-field'), 0.5)); } catch (e) { /* left as it was */ } });
    /* the angle between the two, redrawn when it changes */
    if (thS.v !== lastTh) {
      S.arc.children.forEach((c) => { c.geometry?.dispose(); c.material?.dispose(); });
      S.arc.clear(); lastTh = thS.v;
      S.arcPt = (thS.v > 2 && thS.v < 178) ? F.mesh.arc(S.arc, st.vdir, st.bdir, 1.45, [0, 0, 0], PAL.muted) : [0.9, 0, -0.9];
    }
    S.arc.children.forEach((c) => { try { c.material.color.set(PAL.muted); } catch (e) { /* left as it was */ } });
    V.move(S.lab.v, [vt[0] * 0.62, 0, vt[2] * 0.62]); V.move(S.lab.B, [0, 0, bt[2] * 0.5]);
    V.move(S.lab.F, ft); V.move(S.lab.q, [1.15, -0.08, 0.85]); V.move(S.lab.th, S.arcPt ?? [0.9, 0, -0.9]);
    S.lab.v.textContent = 'v'; S.lab.B.textContent = 'B'; S.lab.F.textContent = 'F';
    S.lab.q.textContent = 'q = ' + (st.s > 0 ? '+' : '\u2212') + '20 nC';
    S.lab.th.textContent = 'θ = ' + fmt(thS.v, 0) + '°';
    S.lab.v.hidden = vS.v === 0; S.lab.B.hidden = bS.v === 0;
    S.lab.F.hidden = !(st.Fv > 0); S.lab.th.hidden = thS.v <= 2 || thS.v >= 178;
    V.headline(`A charge of ${st.s > 0 ? '+' : '\u2212'}20 nC crossing a ${fmt(bS.v, 2)} G field at ${fmt(vS.v, 1)} m/s and ${fmt(thS.v, 0)}° feels a force of ${sci(st.Fv, 1)} N: ${dirWord()}.`);
    V.invalidate();
  }

  /* ---------- the plane from above, where there is no WebGL for the scene ---------- */
  function drawFlat(ctx, st) {
    const cx = 700, cy = 288, R = 140;    /* set low enough that the compass N clears a headline that has wrapped to two lines */
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, 2 * Math.PI); ctx.stroke(); ctx.restore();
    [['N', 0, -1], ['E', 1, 0], ['S', 0, 1], ['W', -1, 0]].forEach(([s, ux, uy]) =>
      text(ctx, s, cx + ux * (R + 26), cy + uy * (R + 26), PAL.muted, { size: 19, align: 'center' }));
    /* the field: one line to every tenth of a gauss, all of them running due north */
    const n = Math.round(bS.v * 10);
    for (let i = 0; i < n; i++) {
      const x = cx + (n === 1 ? 0 : -118 + (236 * i) / (n - 1));
      if (Math.abs(x - cx) < 9) continue;
      arrow(ctx, x, cy + 130, x, cy - 130, alpha(C('magnetic-field'), 0.5), 2.5);
    }
    if (bS.v > 0) {
      arrow(ctx, cx, cy, cx, cy - 130, C('magnetic-field'), 5);
      text(ctx, 'B = ' + fmt(bS.v, 2) + ' G', cx + 16, cy - 108, C('magnetic-field'), { size: 21, weight: 600, align: 'left', bg: PAL.panel });
    }
    if (vS.v > 0) {
      const L = 132 * (vS.v / V_MAX), ax = cx + st.vdir[0] * L, ay = cy + st.vdir[2] * L;
      arrow(ctx, cx, cy, ax, ay, C('velocity'), 5);
      text(ctx, 'v = ' + fmt(vS.v, 1) + ' m/s', ax - 12, ay - 22, C('velocity'), { size: 21, weight: 600, align: 'right', bg: PAL.panel });
    }
    dot(ctx, cx, cy, C('charge'), true, 11);
    text(ctx, 'q = ' + (st.s > 0 ? '+' : '\u2212') + '20 nC', cx + 18, cy + 28, C('charge'), { size: 20, weight: 600, align: 'left', bg: PAL.panel });
    /* the force leaves the plane, so it is drawn as 22.3 draws a vector out of or into the page */
    const sx = 1145, sy = cy;
    if (st.Fv > 0) {
      ctx.save(); ctx.strokeStyle = C('force'); ctx.lineWidth = 4;
      ctx.beginPath(); ctx.arc(sx, sy, 30, 0, 2 * Math.PI); ctx.stroke();
      if (st.s > 0) { const k = 30 * 0.707; ctx.beginPath(); ctx.moveTo(sx - k, sy - k); ctx.lineTo(sx + k, sy + k); ctx.moveTo(sx + k, sy - k); ctx.lineTo(sx - k, sy + k); ctx.stroke(); }
      ctx.restore();
      if (st.s < 0) dot(ctx, sx, sy, C('force'), true, 11);
      text(ctx, 'F = ' + sci(st.Fv, 1) + ' N,', sx, sy - 74, C('force'), { size: 21, weight: 600, align: 'center' });
      text(ctx, st.s > 0 ? 'into the ground' : 'out of the ground', sx, sy - 48, C('force'), { size: 19, align: 'center' });
    } else text(ctx, 'no force', sx, sy, PAL.muted, { size: 20, align: 'center' });
    text(ctx, 'This browser cannot turn the scene, so the plane of the velocity and the field is drawn from above,', 700, 488, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'and the force, which leaves that plane, is drawn as a cross going in or a dot coming out.', 700, 512, PAL.muted, { size: 17, align: 'center' });
    topline(ctx, `A charge of ${st.s > 0 ? '+' : '\u2212'}20 nC crossing a ${fmt(bS.v, 2)} G field at ${fmt(vS.v, 1)} m/s and ${fmt(thS.v, 0)}° feels a force of ${sci(st.Fv, 1)} N: ${dirWord()}.`);
  }

  /* ---------- the graph of the force against the angle ---------- */
  function drawGraph(ctx, st, y0) {
    const box = { l: 170, r: 1280, t: y0 + 54, b: y0 + 232 };
    const { X, Y } = axes(ctx, box, [0, 180], [0, 3], {
      xl: 'θ, the angle between v and B (degrees)', xc: PAL.ink, yl: 'F (10⁻¹¹ N)', yc: C('force'),
      nx: 6, ny: 3, fx: (t) => fmt(t, 0), fy: (t) => fmt(t, 1),
    });
    const peak = (Q_C * vS.v * st.B_T) / 1e-11;
    curve(ctx, (t) => peak * Math.sin(t * RAD), 0, 180, X, Y, C('force'), 5, 120);
    const p = pinned(ctx, box, X, Y, thS.v, st.Fv / 1e-11, C('force'));
    line(ctx, p.x, p.y, p.x, box.b, alpha(PAL.ink, 0.4), 2, [4, 8]);
    text(ctx, 'the sine is what the angle costs the force', box.r - 10, box.t + 22, PAL.muted, { size: 17, align: 'right' });
  }

  function draw() {
    const st = state();
    const { ctx } = begin(d.c);
    if (!hasGL) drawFlat(ctx, st);
    else if (S) apply(st);
    drawGraph(ctx, st, hasGL ? 40 : 536);
    readout(d.readout,
      `\\kF = \\kq\\kv\\kBmag\\sin\\theta = (${st.s > 0 ? '' : '-'}20 \\times 10^{-9}\\ \\text{C})(${fmt(vS.v, 1)}\\ \\text{m/s})(${sciTex(st.B_T, 2)}\\ \\text{T})\\sin ${fmt(thS.v, 0)}^\\circ = ${st.Fv > 0 ? sciTex(st.Fv, 1) : '0'}\\ \\text{N}`,
      'The field is set in gauss, the smaller unit the section names, and the readout gives it in teslas: 0.50 G is the 5 × 10⁻⁵ T of the Earth’s field at its surface, so the figure opens on Example 22.1 and gives its answer of 1 × 10⁻¹¹ N. Point the thumb of your right hand along the velocity and your fingers along the field, and your palm pushes the way the force arrow goes; a negative charge is pushed into the palm instead. The arrows are drawn to a fixed scale, the velocity at its full length when the speed is 15 m/s and the force at its full length when the force is 3.0 × 10⁻¹¹ N, and the field is drawn with one line to every tenth of a gauss.');
  }

  if (hasGL) {
    V = F.view3d(d.stage, {
      h: 680, dist: 8.0, tilt: 0.42, spin: 'off',
      views: [{ label: 'the book’s view', yaw: -0.55, pitch: 0.42 }, { label: 'along the field', yaw: 0, pitch: 0.16 }, { label: 'from above', yaw: 0, pitch: 1.30 }],
      pitch: [0.10, 1.43], yaw: 'free', zoomMin: 0.7, zoomMax: 2.4,
    });
    if (!V.scene) V = null;
    else { root3 = V.part(0); V.setView(-0.55, 0.42); d.stage.appendChild(d.c); }
  }
  if (V) { try { build(); } catch (e) { console.error('sim-rhr-1: the scene could not be built', e); S = null; } }
  register(d.fig, { update: () => {}, draw });
})();
/* =====================================================================
   SIM: how strong a tesla is. The section names four field strengths in
   four sentences and they span five powers of ten, so they are laid on one
   logarithmic scale, and a second scale below carries the force such a
   field puts on a charge crossing it at right angles. Still: a scale of
   magnitudes is a state the reader steps through (rule 14). Flat: a
   relation between numbers is clearest drawn flat with a fixed frame
   (rule 28.1). The field is a dropdown rather than a button row because
   the three names are long enough to wrap one (rule 26.1).
===================================================================== */
(function () {
  const d = sim('sim-tesla', 620);
  const FIELDS = [
    { v: 'earth', label: 'the Earth’s field at its surface', short: 'the Earth', B: 5e-5, name: 'the Earth’s field at its surface', disp: '5 \u00D7 10\u207B\u2075 T', gauss: '0.5 G', tex: '5 \\times 10^{-5}' },
    { v: 'permanent', label: 'the strongest permanent magnets', short: 'a permanent magnet', B: 2, name: 'the strongest permanent magnets', disp: '2 T', gauss: '2 \u00D7 10\u2074 G', tex: '2' },
    { v: 'super', label: 'a superconducting electromagnet', short: 'a superconducting magnet', B: 10, name: 'a superconducting electromagnet', disp: '10 T', gauss: '1 \u00D7 10\u2075 G', tex: '10' },
  ];
  const fieldC = F.select(d.controls, { label: '\\text{the field}', options: FIELDS.map((f) => ({ value: f.v, label: f.short })), value: 'earth', aria: 'which of the fields the section names the charge crosses' });
  const qS = ctl(d.controls, { label: '\\kq', cls: 'charge', min: 1, max: 100, step: 1, value: 20, unit: 'nC', dec: 0, aria: 'the charge that crosses the field' });
  const vS = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 1, max: 100, step: 1, value: 10, unit: 'm/s', dec: 0, aria: 'the speed at which the charge crosses the field' });
  const now = () => FIELDS.find((f) => f.v === fieldC.value) ?? FIELDS[0];

  const GX = { l: 160, r: 1240 };
  const B_LO = -5.4, B_HI = 1.4, F_LO = -14.4, F_HI = -3.6;       /* fixed from the three fields and the slider maxima */
  const XB = (lg) => GX.l + ((lg - B_LO) / (B_HI - B_LO)) * (GX.r - GX.l);
  const XF = (lg) => GX.l + ((lg - F_LO) / (F_HI - F_LO)) * (GX.r - GX.l);
  const YB = 262, YF = 486;
  const TIER = [0, 0, 46];                                         /* the 2 T and the 10 T marks stand close, so the third name is raised clear */
  const force = () => qS.v * 1e-9 * vS.v * now().B;

  hover(d.stage, () => FIELDS.map((f, i) => ({ x: XB(Math.log10(f.B)), y: YB - 34 - TIER[i], r: 20, name: f.name + ', ' + f.disp + ', or ' + f.gauss })));

  function decades(ctx, y, X, lo, hi, shift, below) {
    line(ctx, GX.l, y, GX.r, y, PAL.muted, 2);
    for (let e = Math.ceil(lo); e <= Math.floor(hi); e++) {
      line(ctx, X(e), y - 9, X(e), y + 9, PAL.muted, 2);
      text(ctx, '10' + supOf(e), X(e), below ? y + 30 : y - 28, PAL.muted, { size: 17, align: 'center' });
      if (shift !== null) text(ctx, '10' + supOf(e + shift), X(e), y + 30, PAL.muted, { size: 17, align: 'center' });
    }
  }

  function draw() {
    const { ctx } = begin(d.c);
    const f = now(), Fv = force(), BC = C('magnetic-field'), FC = C('force');
    /* the field, in teslas above the line and in gauss below it */
    text(ctx, 'magnetic field strength B (T), each step a factor of ten', GX.l, 124, PAL.ink, { align: 'left', weight: 600, size: 20 });
    decades(ctx, YB, XB, B_LO, B_HI, 4, false);
    text(ctx, 'the same field in gauss (G)', GX.r, YB + 62, PAL.ink, { align: 'right', weight: 600, size: 20 });
    FIELDS.forEach((k, i) => {
      const x = XB(Math.log10(k.B)), on = k.v === f.v, col = on ? BC : PAL.muted, up = TIER[i];
      dot(ctx, x, YB, BC, on, on ? 12 : 9);
      if (up) line(ctx, x, YB - 14, x, YB - 20 - up, alpha(PAL.ink, 0.35), 2, [4, 6]);
      text(ctx, k.disp, x, YB - 54 - up, col, { size: 17, align: 'center', bg: PAL.panel });
      text(ctx, k.short, x, YB - 78 - up, col, { size: on ? 21 : 18, weight: 600, align: 'center', bg: PAL.panel });
    });
    /* the charge the reader has set, and the force that field puts on it */
    text(ctx, 'A charge of ' + fmt(qS.v, 0) + ' nC crossing that field at ' + fmt(vS.v, 0) + ' m/s at right angles', 700, 356, PAL.muted, { size: 19, align: 'center' });
    text(ctx, 'is pushed with the force marked below.', 700, 382, PAL.muted, { size: 19, align: 'center' });
    const xr = XF(Math.log10(1e-11));
    const near = Math.abs(Math.log10(Math.max(Fv, 1e-15)) + 11) < 0.45;   /* the reader's own force is standing on the book's mark */
    line(ctx, xr, YF - 14, xr, YF - (near ? 30 : 52), alpha(PAL.ink, 0.35), 2, [4, 6]);
    if (!near) text(ctx, 'the glass rod of Example 22.1', xr, YF - 68, PAL.muted, { size: 17, align: 'center', bg: PAL.panel });
    decades(ctx, YF, XF, F_LO, F_HI, null, true);
    text(ctx, 'the force F on that charge (N), each step a factor of ten', GX.r, YF + 62, PAL.ink, { align: 'right', weight: 600, size: 20 });
    const xf = XF(Math.log10(Math.max(Fv, 1e-15)));
    dot(ctx, xf, YF, FC, true, 12);
    text(ctx, sci(Fv, 1) + ' N', xf, YF - 34, FC, { size: 21, weight: 600, align: 'center', bg: PAL.panel });
    if (near) text(ctx, 'the glass rod of Example 22.1', xf, YF - 60, PAL.muted, { size: 17, align: 'center', bg: PAL.panel });
    topline(ctx, `${f.name.charAt(0).toUpperCase() + f.name.slice(1)} is ${f.disp}, or ${f.gauss}, and it pushes a ${fmt(qS.v, 0)} nC charge crossing it at ${fmt(vS.v, 0)} m/s at right angles with ${sci(Fv, 1)} N.`);
    readout(d.readout,
      `\\kBmag = \\frac{\\kF}{\\kq\\kv\\sin\\theta} = \\frac{${sciTex(Fv, 1)}\\ \\text{N}}{(${fmt(qS.v, 0)} \\times 10^{-9}\\ \\text{C})(${fmt(vS.v, 0)}\\ \\text{m/s})} = ${f.tex}\\ \\text{T}`,
      'Read the other way round, this is the definition the section gives: the strength of a field is the force it exerts on a charge, divided by the charge and by the speed at which the charge crosses it. The scale makes plain how far apart the three fields stand. A superconducting electromagnet is two hundred thousand times the Earth’s field, and even so the force on a charge anyone can rub onto a glass rod stays too small to feel, which is why the section says the effect is negligible on any macroscopic object.');
  }
  register(d.fig, { update: () => {}, draw });
})();

};
