/* Figures for section 22.8 Torque on a Current Loop: Motors and Meters.
   The page binds magnetic-field, torque, force and current, the four ch22/COLOR.md
   gives it: the field arrows and the field slider wear the field hue, the arrows
   along the wire and the current slider the current hue, every force on a side of
   the loop the force hue, and the turning effect about the shaft — the field's on
   the motor and the spring's on the meter — Chapter 9's torque hue, although its
   dimension matches energy's. The number of turns, the side of the loop, its area,
   the angle, the spring's torsion constant and every axis title are untyped and in
   ink, and no body is tinted: the pole pieces are ink lettered N and S, the wire,
   the shaft, the commutator, the brushes, the needle and the spring are ink.

   The motor moves and the meter does not (rule 14). A motor has a clock in it —
   the loop comes round, the torque falls to zero and reverses, and the brushes
   reverse the current there twice a revolution — so that figure registers a cycle
   and takes the app's transport. A meter's needle takes up the deflection at which
   its spring balances the magnetic torque and stays there, which is a state, so
   that figure answers its controls and registers no cycle.

   The motor is the chapter's one moving three-dimensional scene, argued in plan.md
   under root rule 28.3: the field, the two currents, the two forces and the torque
   run along four different directions, the book needs a perspective drawing and a
   top view to say so, and a flat drawing of a turning loop would have to lie about
   its depth at every angle but two. Where WebGL is missing it falls back to the
   book's own top view on the canvas. The meter is flat (rule 28.1): it is a
   relation between a current and an angle, and there is nothing in its depth. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['22.8'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, cycle, register, begin, line, arrow, dot, text, topline, label, note, axes, curve, pinned, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

const RAD = Math.PI / 180, TAU = 2 * Math.PI;
const deg = (x) => fmt(x, 0) + '°';
const degTex = (x) => fmt(x, 0) + '^\\circ';   /* an angle is ° outside math and ^\\circ inside it */
/* a dot for a current coming out of the page and a cross for one going into it, as
   22.3 drew them, at radius r about (x, y) */
function outMark(ctx, x, y, color, r) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 3.5; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.stroke(); ctx.restore();
  dot(ctx, x, y, color, true, Math.max(4, r * 0.34));
}
function inMark(ctx, x, y, color, r) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 3.5; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU);
  const k = r * 0.707; ctx.moveTo(x - k, y - k); ctx.lineTo(x + k, y + k); ctx.moveTo(x + k, y - k); ctx.lineTo(x - k, y + k); ctx.stroke(); ctx.restore();
}
/* a curved arrow about (x, y) on the canvas: an arc of radius r from a0 through the
   span, and an arrowhead on the end it finishes at */
function turnArrow(ctx, x, y, r, a0, span, color, w) {
  const a1 = a0 + span;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath();
  ctx.arc(x, y, r, Math.min(a0, a1), Math.max(a0, a1), false); ctx.stroke(); ctx.restore();
  const tip = [x + r * Math.cos(a1), y + r * Math.sin(a1)], back = a1 - Math.sign(span) * 0.16;
  arrow(ctx, x + r * Math.cos(back), y + r * Math.sin(back), tip[0], tip[1], color, w);
}

/* =====================================================================
   FIGURE 22.33 + 22.34 + 22.35: the motor. One square loop of N turns on
   a vertical shaft between the poles of a magnet, turning, with the four
   top views of Figure 22.34 reachable as instants of the turn and the
   brushes of Figure 22.35 as a choice. The axes of the scene are the
   book's: x runs from the north pole on the left to the south pole on the
   right, so the field is along +x; y is up the shaft; z comes toward the
   reader in the book's own view. The angle θ is measured from the field to
   the perpendicular to the loop, and the loop turns clockwise as seen from
   above, which is θ falling. The book's numbers are the defaults, so the
   figure reads Example 22.5's 30.0 N·m as it comes past θ = 90°.
===================================================================== */
(function () {
  const THREE = window.THREE;
  /* a browser may define the constructor and still refuse a context, so the
     scene is attempted only where one can really be made; otherwise the flat
     drawing below takes the canvas and the figure loses nothing but the turn */
  const glOk = () => { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch (e) { return false; } };
  const hasGL = !!(THREE && glOk());
  const GH = 340;                                   /* the canvas carries the graph */
  const d = sim('sim-motor', hasGL ? GH : 830);     /* with no scene, it carries the top view as well */
  const nS = ctl(d.controls, { label: 'N', cls: '', min: 1, max: 120, step: 1, value: 100, unit: 'turns', dec: 0, aria: 'the number of turns of wire in the loop' });
  const iS = ctl(d.controls, { label: '\\kIcur', cls: 'current', min: 0, max: 20, step: 0.5, value: 15, unit: 'A', dec: 1, aria: 'the current in the loop' });
  const bS = ctl(d.controls, { label: '\\kBmag', cls: 'magnetic-field', min: 0, max: 2.5, step: 0.05, value: 2, unit: 'T', dec: 2, aria: 'the strength of the magnetic field between the poles' });
  const wS = ctl(d.controls, { label: 'w', cls: '', min: 5, max: 12, step: 0.5, value: 10, unit: 'cm', dec: 1, aria: 'the side of the square loop' });
  const brushC = choice(d.controls, { label: '\\text{the brushes}', options: [{ value: 'on', label: 'on' }, { value: 'off', label: 'off' }], value: 'on', aria: 'whether the brushes reverse the current twice a revolution', onInput: reset });
  const labC = choice(d.controls, { label: '\\text{Labels}', options: [{ value: 'off', label: 'off' }, { value: 'on', label: 'on' }], value: 'off', aria: 'the names of the arrows and of the parts of the motor' });

  const T = 4.0;                                    /* one revolution, or one swing, in four seconds */
  const cy = cycle(() => T, 1.0);
  function reset() { cy.reset(); }
  const area = () => Math.pow(wS.v / 100, 2);       /* the loop is square, so its area is the side squared */
  /* 86.4 N·m is what the four sliders reach together, 120 turns × 20.0 A × 0.0144 m² × 2.50 T,
     and it is the full length of the torque arc and the top of the graph's axis. */
  const TMAX = 120 * 20 * 0.0144 * 2.5;
  const FMAX = 20 * 0.12 * 2.5;                     /* 6.00 N on one side, and the full length of a force arrow */
  const dead = () => iS.v === 0 || bS.v === 0;      /* no current or no field: no torque, and nothing turns */

  function state() {
    const t = cy.now(), on = brushC.value === 'on';
    const raw = dead() ? 90 : on ? 90 - 360 * (t / T) : 90 * Math.cos(TAU * (t / T));
    const th = ((((raw + 180) % 360) + 360) % 360) - 180;   /* the angle from the field to the perpendicular */
    const s = Math.sin(th * RAD), c = Math.cos(th * RAD);
    const sgn = on && s < 0 ? -1 : 1;               /* the brushes reverse the current each half revolution */
    const side = iS.v * (wS.v / 100) * bS.v;        /* the force on each vertical side, IlB */
    /* θ in the formula is measured from the field to the perpendicular the right hand rule
       makes from the current as it now runs, and the brushes turn that perpendicular over
       each half revolution, which is why the sine never changes sign while they are on. */
    const thEff = sgn > 0 ? th : th > 0 ? th - 180 : th + 180;
    return { th, thEff, s, c, sgn, on, side, tau: nS.v * side * (wS.v / 100) * sgn * s };
  }
  const headText = (st) => {
    if (dead()) return iS.v === 0
      ? 'With no current in the loop there is no force on its sides, so there is no torque and the shaft does not turn.'
      : 'With no field across the gap there is no force on the loop, so there is no torque and the shaft does not turn.';
    const t = Math.abs(st.tau);
    if (st.on) return `The perpendicular to the loop stands ${deg(Math.abs(st.thEff))} from the field, so the torque about the shaft is ${fmt(t, 1)} N⋅m clockwise as seen from above, and the brushes reverse the current as the loop comes through.`;
    return st.tau > 0.05
      ? `The perpendicular to the loop stands ${deg(Math.abs(st.thEff))} from the field, so the torque about the shaft is ${fmt(t, 1)} N⋅m clockwise as seen from above, carrying the loop toward the position where it faces the field.`
      : st.tau < -0.05
        ? `The loop has turned ${deg(Math.abs(st.thEff))} past the field, so the torque of ${fmt(t, 1)} N⋅m has reversed and is now counterclockwise as seen from above, pulling the loop back the way it came.`
        : 'The perpendicular to the loop lies along the field, so the sine is zero and there is no torque at all: this is the position the loop swings about.';
  };

  /* ---------- the scene ---------- */
  let V = null, S = null, turn = null;
  const paint = [];
  const pmat = (col, extra) => { const m = F.mesh.mat(col(), extra); paint.push({ m, col }); return m; };
  const keep = (m, col) => { paint.push({ m: m.material, col }); return m; };
  /* an arrow of shaft radius r that can be re-pointed every frame */
  function vec(g, col, r, name) {
    const shaft = new THREE.Mesh(F.mesh.geo().cyl, pmat(col)); shaft.scale.set(r, 1, r); g.add(shaft);
    const cone = new THREE.Mesh(F.mesh.geo().cone, pmat(col)); g.add(cone);
    if (name) { V.pickable(shaft, name); V.pickable(cone, name); }
    return {
      set(a, b) {
        const A = new THREE.Vector3(a[0], a[1], a[2]), B = new THREE.Vector3(b[0], b[1], b[2]);
        const dd = B.clone().sub(A), L = dd.length();
        if (L < 0.06) { shaft.visible = cone.visible = false; return; }
        shaft.visible = cone.visible = true;
        const hl = Math.min(0.26, L * 0.45), u = dd.clone().normalize(), base = B.clone().sub(u.clone().multiplyScalar(hl));
        F.mesh.setStick(shaft, a, base.toArray());
        cone.position.copy(base).add(u.clone().multiplyScalar(hl / 2));
        cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), u);
        cone.scale.set(r * 3.3, hl, r * 3.3);
      },
      show(v) { shaft.visible = cone.visible = v; },
    };
  }
  const GAP = 1.2, PW = 0.85, PH = 1.5, PD = 1.7;   /* the pole faces stand at x = ±1.2 */
  const YTOP = 1.04, YRING = -1.55, KF = 1.7 / FMAX, WIND = 5;
  const ARCN = 20, ARCR = 0.52;                     /* the torque's arc, at the top of the shaft */
  const ANGN = 14, ANGR = 0.66;                     /* the angle's arc, about the centre of the loop */

  function build() {
    if (!V || !V.scene || !turn) return;
    V.clear(); paint.length = 0;
    const inkC = () => PAL.ink, mutedC = () => PAL.muted;
    const BC = () => C('magnetic-field'), IC = () => C('current'), FC = () => C('force'), TC = () => C('torque');
    S = { coil: new THREE.Group() };
    /* the two pole pieces, lettered on their faces, and the field between them */
    [-1, 1].forEach((sx) => {
      const m = F.mesh.box(turn, [sx * (GAP + PW / 2), 0, 0], [PW, PH, PD], PAL.muted, { transparent: true, opacity: 0.55 });   /* a little see-through, so the loop still shows from along the field */
      keep(m, mutedC); V.pickable(m, sx < 0 ? 'the north pole of the magnet' : 'the south pole of the magnet');
    });
    S.field = [[0.5, 0.52], [0.5, -0.52], [-0.5, 0.52], [-0.5, -0.52]].map(([y, z]) => {
      const a = vec(turn, BC, 0.035, 'the magnetic field, running from the north pole to the south pole');
      a.set([-GAP + 0.07, y, z], [GAP - 0.07, y, z]); return a;
    });
    /* the shaft, the base it stands on, and the coil hanging from it */
    const shaft = F.mesh.stick(turn, [0, -1.82, 0], [0, 1.62, 0], 0.05, PAL.ink); keep(shaft, inkC); V.pickable(shaft, 'the shaft the loop turns');
    const foot = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.56, 0.12, 36), pmat(mutedC)); foot.position.set(0, -1.88, 0); turn.add(foot); V.pickable(foot, 'the foot the motor stands on');
    turn.add(S.coil);
    /* the windings: five of them drawn, four sticks each, and how many are shown says
       how many turns the slider asks for */
    S.wind = [];
    for (let j = 0; j < WIND; j++) {
      const g = [0, 1, 2, 3].map(() => keep(F.mesh.stick(S.coil, [0, 0, 0], [0, 1, 0], 0.022, PAL.ink), inkC));
      g.forEach((m) => V.pickable(m, 'the loop of wire, which carries the current through the field'));
      S.wind.push(g);
    }
    S.lead = [-1, 1].map((sz) => keep(F.mesh.stick(S.coil, [0, 0, 0], [0, 1, 0], 0.022, PAL.ink), inkC));
    /* the split ring of a commutator, which turns with the coil, or the plain slip ring
       that stands in its place when the brushes are taken away, and the two brushes */
    S.split = [0, Math.PI].map((a) => {
      const m = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.26, 18, 1, false, a + 0.09, Math.PI - 0.18), pmat(mutedC));
      m.position.set(0, YRING, 0); S.coil.add(m); V.pickable(m, 'one half of the split ring the brushes press on'); return m;
    });
    S.ring = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.26, 24), pmat(mutedC));
    S.ring.position.set(0, YRING, 0); S.coil.add(S.ring); V.pickable(S.ring, 'a plain ring, which cannot reverse the current');
    S.brush = [-1, 1].map((sx) => {
      const m = F.mesh.box(turn, [sx * 0.29, YRING, 0], [0.16, 0.2, 0.2], PAL.ink); keep(m, inkC);
      V.pickable(m, 'a brush, the sliding contact the current reaches the coil through'); return m;
    });
    /* the current along the two vertical sides, and the four forces the field puts on
       the four segments: two horizontal ones that turn the loop and two along the shaft
       that do not */
    S.cur = [-1, 1].map((sz) => vec(S.coil, IC, 0.032, 'the current in the loop'));
    S.fs = [-1, 1].map((sz) => vec(turn, FC, 0.05, 'the force on one vertical side of the loop, at right angles to both the current and the field'));
    S.fv = [-1, 1].map((sy) => vec(turn, FC, 0.05, 'the force on the top or the bottom segment, along the shaft, which turns the loop no way at all'));
    /* the perpendicular to the loop, and the arc of the angle it makes with the field */
    S.norm = keep(F.mesh.stick(S.coil, [0, 0, 0], [0.9, 0, 0], 0.012, PAL.muted), mutedC);
    S.ang = [];
    for (let i = 0; i < ANGN; i++) S.ang.push(keep(F.mesh.stick(turn, [0, 0, 0], [0, 0.01, 0], 0.012, PAL.muted), mutedC));
    /* the torque, a curved arrow about the top of the shaft whose span carries its size */
    S.arc = [];
    for (let i = 0; i < ARCN; i++) S.arc.push(keep(F.mesh.stick(turn, [0, 0, 0], [0, 0.01, 0], 0.03, PAL.ink), TC));
    S.arcHead = new THREE.Mesh(F.mesh.geo().cone, pmat(TC)); S.arcHead.scale.set(0.09, 0.2, 0.09); turn.add(S.arcHead);
    V.pickable(S.arcHead, 'the torque about the shaft');
    /* the names. The letters on the poles are the frame and are always drawn; every
       other name sits on something that turns, so they wait behind the Labels button
       (rule 26.7) and are on hover meanwhile. */
    const dim = (e, col) => { e.style.background = 'transparent'; e.style.border = '0'; e.style.fontWeight = '600'; e.style.color = col; return e; };
    S.pole = [dim(V.label('N', [-(GAP + PW + 0.2), 0, 0], turn, 0), PAL.ink), dim(V.label('S', [GAP + PW + 0.2, 0, 0], turn, 0), PAL.ink)];
    S.lab = {
      B: V.label('B', [GAP - 0.2, 0.5, 0.52], turn, 10),
      I: V.label('I', [0, 0, 0], S.coil, 10),
      Fs: V.label('F', [0, 0, 0], turn, 10),
      Fv: V.label('F', [0, 0, 0], turn, 10),
      tau: V.label('τ', [0, 0, 0], turn, 10),
      th: V.label('θ', [0, 0, 0], turn, 8),
      perp: V.label('the perpendicular', [0, 0, 0], S.coil, 8),
    };
    V.invalidate();
  }

  function apply(st) {
    if (!S) return;
    paint.forEach((p) => { try { p.m.color.set(p.col()); } catch (e) { /* a palette value the renderer cannot read is left as it was */ } });
    const hh = (wS.v / 100) * 16 / 2;               /* sixteen scene units to the metre: a 10 cm loop is 1.6 across */
    /* the field, told the way 22.3 tells it, by how many lines are drawn across the gap */
    S.field.forEach((a, i) => a.show(bS.v > 0 && (i < 2 || bS.v > 1.25)));
    const k = Math.max(1, Math.min(WIND, Math.round(nS.v / 24)));
    S.coil.rotation.y = st.th * RAD;
    /* the windings, spread a little across the loop's own perpendicular */
    S.wind.forEach((g, j) => {
      const on = j < k, o = (j - (k - 1) / 2) * 0.034;
      g.forEach((m) => { m.visible = on; });
      if (!on) return;
      F.mesh.setStick(g[0], [o, -hh, -hh], [o, hh, -hh]);
      F.mesh.setStick(g[1], [o, -hh, hh], [o, hh, hh]);
      F.mesh.setStick(g[2], [o, hh, -hh], [o, hh, hh]);
      F.mesh.setStick(g[3], [o, -hh, -hh], [o, -hh, hh]);
    });
    S.lead.forEach((m, i) => F.mesh.setStick(m, [0, -hh, (i ? 1 : -1) * 0.12], [0, YRING + 0.13, (i ? 1 : -1) * 0.12]));
    S.split.forEach((m) => { m.visible = st.on; });
    S.ring.visible = !st.on;
    /* the current: up the side the right hand rule makes the perpendicular from, down
       the other, and both the other way about once the brushes have reversed them */
    S.cur.forEach((a, i) => {
      const z = (i ? 1 : -1) * hh, up = (i ? -1 : 1) * st.sgn;
      a.show(iS.v > 0.01);
      if (iS.v > 0.01) a.set([0.11, -up * hh * 0.62, z], [0.11, up * hh * 0.62, z]);
    });
    /* the forces. On the two vertical sides they are horizontal, at right angles to the
       field and to the current, and they are what turns the loop; on the top and bottom
       segments they run along the shaft and turn it no way at all. */
    const sn = Math.sin(st.th * RAD), cs = Math.cos(st.th * RAD);
    S.fs.forEach((a, i) => {
      const sz = i ? 1 : -1, p = [sz * hh * sn, 0, sz * hh * cs], len = st.side * KF;
      a.show(len > 0.06);
      if (len > 0.06) a.set(p, [p[0], 0, p[2] + sz * st.sgn * len]);
    });
    const fv = Math.abs(st.side * cs) * KF;
    S.fv.forEach((a, i) => {
      const sy = i ? 1 : -1, p = [0, sy * hh, 0];
      a.show(fv > 0.06);
      if (fv > 0.06) a.set(p, [0, sy * hh + sy * st.sgn * Math.sign(cs || 1) * fv, 0]);
    });
    /* the perpendicular the current gives, which the brushes turn over with it, and the
       arc from the field round to it, which is the angle the formula takes the sine of */
    const nlen = Math.max(0.9, hh * 1.15);
    F.mesh.setStick(S.norm, [st.sgn * 0.02, 0, 0], [st.sgn * nlen, 0, 0]);
    const span = st.thEff * RAD;
    S.ang.forEach((m, i) => {
      const a0 = (span * i) / ANGN, a1 = (span * (i + 1)) / ANGN, use = Math.abs(span) > 0.06;
      m.visible = use;
      if (use) F.mesh.setStick(m, [ANGR * Math.cos(a0), 0, -ANGR * Math.sin(a0)], [ANGR * Math.cos(a1), 0, -ANGR * Math.sin(a1)]);
    });
    /* the torque: an arc about the top of the shaft, clockwise seen from above when the
       torque is positive, whose span is its size against the 86.4 N·m the sliders reach */
    const mag = Math.min(1, Math.abs(st.tau) / TMAX), tot = (0.5 + 3.3 * mag) * (st.tau >= 0 ? -1 : 1);
    const show = Math.abs(st.tau) > 0.02;
    S.arc.forEach((m, i) => {
      m.visible = show;
      if (!show) return;
      const a0 = 1.2 + (tot * i) / ARCN, a1 = 1.2 + (tot * (i + 1)) / ARCN;
      F.mesh.setStick(m, [ARCR * Math.sin(a0), YTOP, ARCR * Math.cos(a0)], [ARCR * Math.sin(a1), YTOP, ARCR * Math.cos(a1)]);
    });
    S.arcHead.visible = show;
    if (show) {
      const ae = 1.2 + tot, tip = new THREE.Vector3(ARCR * Math.sin(ae), YTOP, ARCR * Math.cos(ae));
      const dir = new THREE.Vector3(Math.cos(ae) * Math.sign(tot), 0, -Math.sin(ae) * Math.sign(tot)).normalize();
      S.arcHead.position.copy(tip).add(dir.clone().multiplyScalar(0.06));
      S.arcHead.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
    }
    /* where each name sits, and whether it is drawn at all */
    const on = labC.value === 'on';
    V.move(S.lab.I, [0.11, hh * 0.72 * (st.sgn > 0 ? 1 : -1), -hh]);
    V.move(S.lab.Fs, [-hh * sn, 0, -hh * cs - st.sgn * st.side * KF * 0.7]);
    V.move(S.lab.Fv, [0, hh + st.sgn * Math.sign(cs || 1) * fv, 0]);
    V.move(S.lab.tau, [ARCR * Math.sin(1.2 + tot / 2) * 1.35, YTOP - 0.1, ARCR * Math.cos(1.2 + tot / 2) * 1.35]);
    V.move(S.lab.th, [ANGR * 1.35 * Math.cos(span / 2), 0.12, -ANGR * 1.35 * Math.sin(span / 2)]);
    V.move(S.lab.perp, [st.sgn * (nlen + 0.12), 0, 0]);
    S.lab.B.style.color = C('magnetic-field'); S.lab.I.style.color = C('current');
    S.lab.Fs.style.color = C('force'); S.lab.Fv.style.color = C('force'); S.lab.tau.style.color = C('torque');
    S.lab.th.textContent = 'θ = ' + deg(Math.abs(st.thEff));
    S.pole.forEach((e) => { e.style.color = PAL.ink; });
    Object.entries(S.lab).forEach(([key, e]) => {
      e.hidden = !on
        || (key === 'B' && bS.v === 0) || (key === 'I' && iS.v === 0)
        || ((key === 'Fs' || key === 'Fv') && st.side * KF <= 0.06)
        || (key === 'tau' && !show) || (key === 'th' && Math.abs(span) <= 0.06);
    });
    V.headline(headText(st));
    V.invalidate();
  }

  /* ---------- the book's top view, where there is no WebGL for the scene ---------- */
  function drawFlat(ctx, st) {
    const cx = 700, cy0 = 300, R = 190, hh = (wS.v / 100) * 900;
    /* the field, running left to right across the whole view */
    if (bS.v > 0) for (let i = -2; i <= 2; i++) {
      const y = cy0 + i * 64;
      arrow(ctx, cx - 460, y, cx + 460, y, alpha(C('magnetic-field'), i === 0 ? 1 : 0.55), i === 0 ? 5 : 3);
    }
    if (bS.v > 0) text(ctx, 'B = ' + fmt(bS.v, 2) + ' T', cx + 470, cy0, C('magnetic-field'), { size: 21, weight: 600, align: 'left' });
    /* the loop, edge on: a line through the pivot with the current out of the view at
       one end and into it at the other */
    const ux = Math.sin(st.th * RAD), uy = Math.cos(st.th * RAD);   /* the loop's own direction, seen from above */
    const half = Math.min(hh, 250);
    const pA = [cx - ux * half, cy0 + uy * half], pB = [cx + ux * half, cy0 - uy * half];
    line(ctx, pA[0], pA[1], pB[0], pB[1], PAL.ink, 4);
    const outAt = st.sgn > 0 ? pA : pB, inAt = st.sgn > 0 ? pB : pA;
    outMark(ctx, outAt[0], outAt[1], C('current'), 17);
    inMark(ctx, inAt[0], inAt[1], C('current'), 17);
    /* the forces on the two sides, at right angles to the field */
    const fl = st.side * 42;
    if (fl > 6) {
      arrow(ctx, outAt[0], outAt[1], outAt[0], outAt[1] - fl, C('force'), 5);
      arrow(ctx, inAt[0], inAt[1], inAt[0], inAt[1] + fl, C('force'), 5);
      text(ctx, 'F = ' + fmt(st.side, 2) + ' N', outAt[0] + 18, outAt[1] - fl - 18, C('force'), { size: 20, weight: 600, align: 'left', bg: PAL.panel });
    }
    /* the perpendicular to the loop, the angle it makes with the field, and the torque */
    const nx = Math.cos(st.th * RAD), ny = -Math.sin(st.th * RAD);
    line(ctx, cx, cy0, cx + nx * 150, cy0 + ny * 150, alpha(PAL.ink, 0.5), 2.5, [8, 8]);
    if (Math.abs(st.th) > 3) {
      turnArrow(ctx, cx, cy0, 96, 0, -st.th * RAD, alpha(PAL.ink, 0.45), 2.5);
      text(ctx, 'θ = ' + deg(Math.abs(st.th)), cx + 118 * Math.cos(st.th * RAD / 2), cy0 - 118 * Math.sin(st.th * RAD / 2), PAL.ink, { size: 20, weight: 600, align: 'left', bg: PAL.panel });
    }
    if (Math.abs(st.tau) > 0.02) {
      const sp = (0.5 + 2.2 * Math.min(1, Math.abs(st.tau) / TMAX)) * (st.tau >= 0 ? 1 : -1);
      turnArrow(ctx, cx, cy0, 54, -2.4, sp, C('torque'), 4.5);
      text(ctx, 'τ = ' + fmt(Math.abs(st.tau), 1) + ' N⋅m', cx - 70, cy0 - 74, C('torque'), { size: 21, weight: 600, align: 'right', bg: PAL.panel });
    }
    dot(ctx, cx, cy0, PAL.ink, true, 8);
    text(ctx, 'This browser cannot turn the scene, so the loop is drawn from above,', 700, 468, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'with the current coming out of the view at one side of it and going into the view at the other.', 700, 492, PAL.muted, { size: 17, align: 'center' });
    topline(ctx, headText(st));
  }

  /* ---------- the torque against the angle, over one whole revolution ---------- */
  function drawGraph(ctx, st, y0) {
    const BOX = { l: 180, r: 1250, t: y0 + 62, b: y0 + 254 };
    const { X, Y } = axes(ctx, BOX, [-180, 180], [-90, 90], {
      xl: 'the angle the loop has turned from the position where it faces the field (degrees)',
      yl: 'τ (N⋅m), clockwise seen from above', yc: C('torque'),
      nx: 6, ny: 6, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0),
    });
    const peak = nS.v * iS.v * area() * bS.v;
    ctx.save(); ctx.beginPath(); ctx.rect(BOX.l, BOX.t, BOX.r - BOX.l, BOX.b - BOX.t); ctx.clip();
    curve(ctx, (t) => peak * (st.on ? Math.abs(Math.sin(t * RAD)) : Math.sin(t * RAD)), -180, 180, X, Y, C('torque'), 5, 180);
    ctx.restore();
    if (st.on) [-180, 0, 180].forEach((v) => line(ctx, X(v), BOX.t, X(v), BOX.b, alpha(PAL.ink, 0.4), 2, [6, 8]));
    line(ctx, X(st.th), Math.min(Y(st.tau), Y(0)), X(st.th), Math.max(Y(st.tau), Y(0)), alpha(PAL.ink, 0.35), 2.5, [4, 8]);
    const p = pinned(ctx, BOX, X, Y, st.th, st.tau, C('torque'), fmt(Math.abs(st.tau), 1) + ' N⋅m');
    note(ctx, BOX, st.on
      ? 'The current reverses at each dashed line, so the torque keeps one sign.'
      : 'With no brushes the torque changes sign as the loop passes zero.',
      [{ l: p.x - 190, r: p.x + 190, t: BOX.t, b: BOX.b }]);
  }

  function draw() {
    const st = state();
    const { ctx } = begin(d.c);
    if (!hasGL) drawFlat(ctx, st);
    else if (S) apply(st);
    drawGraph(ctx, st, hasGL ? 8 : 486);
    readout(d.readout,
      `\\ktau = N\\kIcur A\\kBmag\\sin\\theta = (${fmt(nS.v, 0)})(${fmt(iS.v, 1)}\\ \\text{A})(${fmt(area(), 4)}\\ \\text{m}^2)(${fmt(bS.v, 2)}\\ \\text{T})\\sin ${st.thEff < 0 ? '(' + degTex(st.thEff) + ')' : degTex(st.thEff)} = ${fmt(st.tau, 1)}\\ \\text{N}\\cdot\\text{m}`,
      `A positive torque is clockwise as seen from above, and the angle in the formula is measured from the field round to the perpendicular the right hand rule makes from the current, which the brushes turn over twice a revolution: that is why the sine never goes negative while they are on, and why it does once they are taken away. The loop is square, so its area is the side squared, and at the settings the figure opens on it is Example 22.5: a hundred turns of 10.0 cm square carrying 15.0 A in a 2.00 T field, whose greatest torque is 30.0 N⋅m. The loop is drawn turning steadily at one revolution every ${fmt(T, 1)} s, which is what a motor does against the load it drives; with the brushes off it is drawn swinging back and forth in the same time, and how quickly it would really swing depends on how heavy the coil is, which the section does not give. The forces on the top and bottom segments are drawn as well: they are equal and opposite, they run along the shaft, and they turn the loop no way at all.`);
  }

  if (hasGL) {
    V = F.view3d(d.stage, {
      h: 620, dist: 8.8, tilt: 0.34, spin: 'off',
      views: [{ label: 'the book’s view', yaw: 0.42, pitch: 0.30 }, { label: 'from above', yaw: 0, pitch: 1.47 }, { label: 'along the field', yaw: 1.5708, pitch: 0.12 }],
      pitch: [0.07, 1.52], yaw: 'free', zoomMin: 0.7, zoomMax: 2.4,
    });
    if (!V.scene) V = null;
    else { turn = V.part(0); V.setView(0.42, 0.30); d.stage.appendChild(d.c); }
  }
  if (V) { try { build(); } catch (e) { console.error('sim-motor: the scene could not be built', e); S = null; } }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 22.36: the meter. The same loop between the same poles, with a
   spring on its shaft and a needle on its end, drawn from above as the
   book draws it. Still: a deflection is the state at which the spring
   balances the magnetic torque, and nothing here has a clock (rule 14).
   Flat (rule 28.1): it is a relation between a current and an angle. The
   pole faces are a choice, because the book's one sentence about the
   design — that they are shaped to keep the field perpendicular to the
   loop, so that the torque goes with the current and not with the angle —
   is a claim the reader cannot see in a still drawing.
===================================================================== */
(function () {
  const H = 980;
  const d = sim('sim-meter', H);
  const iS = ctl(d.controls, { label: '\\kIcur', cls: 'current', min: 0, max: 1, step: 0.01, value: 0.5, unit: 'mA', dec: 2, aria: 'the current through the meter' });
  const nS = ctl(d.controls, { label: 'N', cls: '', min: 50, max: 400, step: 10, value: 200, unit: 'turns', dec: 0, aria: 'the number of turns in the coil' });
  const bS = ctl(d.controls, { label: '\\kBmag', cls: 'magnetic-field', min: 0.02, max: 0.2, step: 0.005, value: 0.1, unit: 'T', dec: 3, aria: 'the strength of the field between the shaped poles' });
  const poleC = choice(d.controls, { label: '\\text{the pole faces}', options: [{ value: 'shaped', label: 'shaped' }, { value: 'flat', label: 'flat' }], value: 'shaped', aria: 'whether the pole faces are shaped to keep the field perpendicular to the coil' });

  const AREA = 6.0e-4;            /* the coil is 3.00 cm by 2.00 cm */
  const KSPR = 1.15e-5;           /* the spring, in newton metres to the radian */
  const STOP = 75 * RAD;          /* the needle's stop */
  const FULL = 60 * RAD;          /* full scale, which the shaped meter reaches at 1.00 mA on its defaults */
  /* the deflection at which the spring balances the magnetic torque. With the poles
     shaped the field stays perpendicular to the coil, so the balance is kφ = NIAB and
     the deflection goes with the current; with them flat the torque falls away as the
     coil turns, kφ = NIAB cos φ, and the same current gives less deflection. */
  function deflect(mA, shaped) {
    const M = nS.v * mA * 1e-3 * AREA * bS.v;
    if (shaped) return M / KSPR;
    let lo = 0, hi = Math.min(M / KSPR, Math.PI / 2);
    for (let i = 0; i < 40; i++) { const m = (lo + hi) / 2; if (KSPR * m - M * Math.cos(m) < 0) lo = m; else hi = m; }
    return (lo + hi) / 2;
  }

  const CX = 700, CY = 480, RIN = 95, ROUT = 150, RSC = 270, PB = 139, POUT = 285;
  function draw() {
    const { ctx } = begin(d.c);
    const shaped = poleC.value === 'shaped';
    const phi = deflect(iS.v, shaped), drawn = Math.min(phi, STOP);
    const M = nS.v * iS.v * 1e-3 * AREA * bS.v, torque = shaped ? M : M * Math.cos(drawn);
    const cB = C('magnetic-field'), cI = C('current'), cT = C('torque');
    /* the pole faces: curved about the pivot where they are shaped, straight where they
       are not, each lettered on its outer edge */
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 5;
    [-1, 1].forEach((sx) => {
      ctx.beginPath();
      if (shaped) ctx.arc(CX, CY, ROUT, sx < 0 ? 0.62 * Math.PI : -0.38 * Math.PI, sx < 0 ? 1.38 * Math.PI : 0.38 * Math.PI);
      else { ctx.moveTo(CX + sx * ROUT, CY - PB); ctx.lineTo(CX + sx * ROUT, CY + PB); }
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(CX + sx * ROUT * 0.4, CY - PB); ctx.lineTo(CX + sx * POUT, CY - PB);
      ctx.lineTo(CX + sx * POUT, CY + PB); ctx.lineTo(CX + sx * ROUT * 0.4, CY + PB); ctx.stroke();
    });
    ctx.restore();
    text(ctx, 'N', CX - 232, CY, PAL.ink, { size: 38, weight: 700, align: 'center' });
    text(ctx, 'S', CX + 232, CY, PAL.ink, { size: 38, weight: 700, align: 'center' });
    /* the field across the gap: radial through the coil where the poles are shaped, so
       that it crosses the coil squarely wherever the coil stands, and parallel where
       they are flat */
    if (shaped) {
      ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.18); ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(CX, CY, RIN, 0, TAU); ctx.stroke(); ctx.restore();
      for (let i = -2; i <= 2; i++) {
        const a = i * 0.32;
        [-1, 1].forEach((sx) => {
          const cx0 = Math.cos(a) * sx, sy0 = Math.sin(a);
          const x0 = CX + cx0 * ROUT, y0 = CY + sy0 * ROUT, x1 = CX + cx0 * RIN, y1 = CY + sy0 * RIN;
          if (sx < 0) arrow(ctx, x0, y0, x1, y1, cB, 3.5); else arrow(ctx, x1, y1, x0, y0, cB, 3.5);
        });
      }
      text(ctx, 'the shaped faces keep the field square to the coil at every deflection', CX, CY + 176, PAL.muted, { size: 18, align: 'center' });
    } else {
      for (let i = -2; i <= 2; i++) arrow(ctx, CX - ROUT, CY + i * 70, CX + ROUT, CY + i * 70, cB, i === 0 ? 4 : 3);
      text(ctx, 'the flat faces leave the field running straight across the gap', CX, CY + 176, PAL.muted, { size: 18, align: 'center' });
    }
    text(ctx, 'B = ' + fmt(bS.v, 3) + ' T', CX - POUT, CY - PB - 30, cB, { size: 21, weight: 600, align: 'left' });
    /* the coil, edge on, turned through the deflection from the position it rests in */
    const ux = Math.cos(drawn), uy = Math.sin(drawn), CL = 82;
    const eA = [CX - ux * CL, CY - uy * CL], eB = [CX + ux * CL, CY + uy * CL];
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 13; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(eA[0], eA[1]); ctx.lineTo(eB[0], eB[1]); ctx.stroke(); ctx.restore();
    if (iS.v > 0.004) { outMark(ctx, eA[0], eA[1], cI, 15); inMark(ctx, eB[0], eB[1], cI, 15); }
    label(ctx, 'I = ' + fmt(iS.v, 2) + ' mA', eA[0], eA[1], { side: 'left', size: 21, color: cI, gap: 26, H });
    /* the spring, a spiral about the pivot that winds tighter as the coil turns, and the
       two torques that balance on it */
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2.5; ctx.beginPath();
    const turns = 3.2 + drawn / TAU * 2;
    for (let i = 0; i <= 180; i++) { const t = (i / 180) * turns * TAU, r = 13 + (48 - 13) * (i / 180); const x = CX + r * Math.cos(t), y = CY + r * Math.sin(t); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
    ctx.stroke(); ctx.restore();
    if (torque > 1e-9) {
      turnArrow(ctx, CX, CY, 66, Math.PI * 1.18, 0.82, cT, 4);
      turnArrow(ctx, CX, CY, 66, Math.PI * 0.18, -0.82, cT, 4);
      text(ctx, 'τ = ' + fmt(torque * 1e6, 2) + ' μN⋅m from the field,', CX - POUT, CY - PB - 82, cT, { size: 20, weight: 600, align: 'left' });
      text(ctx, 'and as much the other way from the spring', CX - POUT, CY - PB - 56, PAL.muted, { size: 18, align: 'left' });
    }
    dot(ctx, CX, CY, PAL.ink, true, 9);
    /* the needle and the scale it sweeps, marked in the current a shaped meter reads */
    const na = -Math.PI / 2 + drawn;
    line(ctx, CX, CY, CX + Math.cos(na) * RSC * 0.94, CY + Math.sin(na) * RSC * 0.94, PAL.ink, 4);
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(CX, CY, RSC, -Math.PI / 2, -Math.PI / 2 + FULL); ctx.stroke(); ctx.restore();
    for (let i = 0; i <= 10; i++) {
      const a = -Math.PI / 2 + (FULL * i) / 10, big = i % 2 === 0, r0 = RSC - (big ? 18 : 10);
      line(ctx, CX + Math.cos(a) * r0, CY + Math.sin(a) * r0, CX + Math.cos(a) * RSC, CY + Math.sin(a) * RSC, PAL.muted, big ? 3 : 2);
      if (big) text(ctx, fmt(i / 10, 1), CX + Math.cos(a) * (RSC + 26), CY + Math.sin(a) * (RSC + 26), PAL.muted, { size: 17, align: 'center' });
    }
    text(ctx, 'the scale, in milliamperes', CX + Math.cos(-Math.PI / 2 + FULL / 2) * (RSC + 70), CY + Math.sin(-Math.PI / 2 + FULL / 2) * (RSC + 70), PAL.muted, { size: 18, align: 'center' });
    if (phi > STOP) text(ctx, 'the needle is against its stop', CX + 150, CY - 150, PAL.ink, { size: 19, weight: 600, align: 'left', bg: PAL.panel });
    /* the deflection against the current, with the other kind of pole face drawn faint
       beside the one now chosen */
    const BOX = { l: 200, r: 1240, t: 730, b: 916 };
    const { X, Y } = axes(ctx, BOX, [0, 1], [0, 90], {
      xl: 'I, the current through the meter (mA)', xc: C('current'),
      yl: 'the deflection of the needle (degrees)', nx: 5, ny: 3, fx: (v) => fmt(v, 2), fy: (v) => fmt(v, 0),
    });
    line(ctx, BOX.l, Y(75), BOX.r, Y(75), alpha(PAL.ink, 0.35), 2, [10, 10]);
    text(ctx, 'the stop', BOX.l + 10, Y(75) - 16, PAL.muted, { size: 17, align: 'left' });
    ctx.save(); ctx.beginPath(); ctx.rect(BOX.l, BOX.t, BOX.r - BOX.l, BOX.b - BOX.t); ctx.clip();
    curve(ctx, (t) => deflect(t, !shaped) / RAD, 0, 1, X, Y, alpha(PAL.ink, 0.3), 3, 90);
    curve(ctx, (t) => deflect(t, shaped) / RAD, 0, 1, X, Y, PAL.ink, 5, 90);
    ctx.restore();
    pinned(ctx, BOX, X, Y, iS.v, phi / RAD, PAL.ink, deg(phi / RAD));
    note(ctx, BOX, shaped
      ? 'The deflection is proportional to the current, so the divisions of the scale are even.'
      : 'The torque falls away as the coil turns, so the divisions close up toward the top of the scale.',
      [{ l: X(iS.v) - 200, r: X(iS.v) + 200, t: BOX.t, b: BOX.b }]);
    topline(ctx, iS.v < 0.005
      ? 'With no current through the coil there is no torque on it, and the spring holds the needle at zero.'
      : `A current of ${fmt(iS.v, 2)} mA through ${fmt(nS.v, 0)} turns in a ${fmt(bS.v, 3)} T field turns the coil against its spring to ${deg(Math.min(phi, STOP) / RAD)}${phi > STOP ? ', which is past the stop' : ' of the 60° scale'}.`);
    readout(d.readout,
      `N\\kIcur A\\kBmag\\sin\\theta = ${fmt(torque * 1e6, 2)}\\ \\mu\\text{N}\\cdot\\text{m} = k\\varphi, \\qquad \\varphi = ${fmt(phi / RAD, 1)}^\\circ`,
      `The coil is 3.00 cm by 2.00 cm, so its area is 6.00 cm², and the spring takes 1.15 × 10⁻⁵ N⋅m to every radian it is wound, which puts the needle at full scale when 1.00 mA runs through two hundred turns in a 0.100 T field.${phi > STOP ? ' At this setting the spring would balance the coil only at ' + fmt(phi / RAD, 1) + '°, which is past the stop, so the needle rests against the stop and the meter is reading over its range.' : ''} The scale is marked for those two hundred turns in that field, so raising either sends the needle past the mark the current belongs to, which is what calibrating a gauge has to put right. Shaped faces keep the field square to the coil at every deflection, so the sine stays 1 and the deflection is proportional to the current; flat faces leave the torque falling away as the coil turns, which is the same sine that makes the motor above reverse.`);
  }
  register(d.fig, { update: () => {}, draw });
  hover(d.stage, () => {
    const shaped = poleC.value === 'shaped', drawn = Math.min(deflect(iS.v, shaped), STOP);
    const ux = Math.cos(drawn), uy = Math.sin(drawn), na = -Math.PI / 2 + drawn;
    return [
      { x: CX - 232, y: CY, r: 80, name: 'the north pole of the meter’s magnet' },
      { x: CX + 232, y: CY, r: 80, name: 'the south pole of the meter’s magnet' },
      { x: CX, y: CY, r: 48, name: 'the spring, which winds up as the coil turns and holds it back' },
      { x: CX - ux * 82, y: CY - uy * 82, r: 30, name: 'one side of the coil, with the current coming out of the view' },
      { x: CX + ux * 82, y: CY + uy * 82, r: 30, name: 'one side of the coil, with the current going into the view' },
      { x: CX + Math.cos(na) * RSC * 0.6, y: CY + Math.sin(na) * RSC * 0.6, r: 40, name: 'the needle, which the coil carries round with it' },
    ];
  });
})();

};
