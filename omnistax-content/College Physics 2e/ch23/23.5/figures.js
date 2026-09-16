/* Figures for section 23.5 Electric Generators.
   The page binds magnetic-flux, magnetic-field, voltage, velocity, angular-rate
   and time. ch23/COLOR.md gives this page the first five; the sixth is drawn
   because Figure 23.20, whose whole content is the velocity of the two side
   wires standing at an angle to the field, is folded into the generator, and
   plan.md asks for the chapter's colour line to be widened accordingly.

   The rule ch23/COLOR.md sets above every other one here is that flux is not the
   field. The lines drawn across the gap wear the field hue; the marks where
   those same lines pierce the face of the coil, and the patch that fills that
   face, wear the flux hue, so that a reader watching the coil come edge-on sees
   the marks thin out to none while the field itself never changes. The emf the
   coil induces wears the voltage hue on the wires and on the curve, the two
   velocity arrows wear the velocity hue, the rotation wears the angular-rate
   hue, and the graphs' time and angle axes are ink, an angle being untyped. No
   body is tinted: the pole pieces are ink lettered N and S, and the coil, the
   shaft, the crank, the rings, the brushes, the leads and the load are ink.

   The generator moves and the averaging figure does not (rule 14). A generator
   turns and its result is a function of time, so that figure registers a cycle
   and takes the app's transport; the coil is drawn far slower than it turns,
   and the readout states the true period and the factor drawn (rule 28.4). The
   averaging figure draws a curve and the mean of it over an interval, which is
   a relation and not a process, so it registers no cycle.

   The generator is the chapter's one moving three-dimensional scene, argued in
   plan.md under root rule 28.3: the field, the coil's perpendicular, the
   velocity of each side wire and the emf along it run along four different
   directions, the flux is a count of lines through a face that a flat drawing
   must draw as a line, and the book needs three pictures and five letters to
   say what one turning coil says by turning. Where WebGL is missing it falls
   back to the top view of Figure 23.20 on the canvas, and a browser that
   defines the constructor and still refuses a context is caught by probing for
   one first, as 22.4, 22.8 and 22.9 do it. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['23.5'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, select, cycle, register, begin, line, arrow, dot, text, topline, note, axes, curve, pinned, vbracket, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

const RAD = Math.PI / 180, TAU = 2 * Math.PI;
const deg = (x) => fmt(x, 0) + '°';
const degTex = (x) => fmt(x, 0) + '^\\circ';      /* an angle is ° outside math and ^\circ inside it */
/* a quantity of the order of a thousandth, written the way the book writes it */
const milli = (x, d) => fmt(x * 1000, d) + ' × 10⁻³';
const milliTex = (x, d) => fmt(x * 1000, d) + '\\times 10^{-3}';
/* a flux small enough to be nothing is said to be nothing */
const fluxStr = (x) => (Math.abs(x) < 5e-6 ? 'zero' : milli(x, 2) + ' T⋅m²');
/* a curved arrow about (x, y) on the canvas: an arc of radius r from a0 through
   the span, and an arrowhead on the end it finishes at */
function turnArrow(ctx, x, y, r, a0, span, color, w) {
  const a1 = a0 + span;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath();
  ctx.arc(x, y, r, Math.min(a0, a1), Math.max(a0, a1), false); ctx.stroke(); ctx.restore();
  const tip = [x + r * Math.cos(a1), y + r * Math.sin(a1)], back = a1 - Math.sign(span) * 0.16;
  arrow(ctx, x + r * Math.cos(back), y + r * Math.sin(back), tip[0], tip[1], color, w);
}

/* =====================================================================
   FIGURE 23.19 + 23.20 + 23.21 + 23.22: the generator. One square coil of
   N turns on a shaft between the poles of a magnet, turned from outside by
   a crank, with the contacts a choice between the two slip rings of Figure
   23.21 and the split ring of Figure 23.22, and the output drawn beneath
   the machine. The axes of the scene are the book's: x runs from the north
   pole on the left to the south pole on the right, so the field is along
   +x; y is up the shaft; z comes toward the reader in the book's own view.
   The angle the coil has turned is measured from the position where its
   perpendicular lies along the field, which is where the flux is greatest
   and the emf is zero, so the angle is ωt and the emf is emf₀ sin ωt. The
   sliders are Example 23.3's and Example 23.4's own numbers, so the figure
   reads their average of 131 V over a quarter revolution and their peak as
   it comes past the edge-on position.
===================================================================== */
(function () {
  const THREE = window.THREE;
  /* a browser may define the constructor and still refuse a context, so the
     scene is attempted only where one can really be made; otherwise the flat
     drawing below takes the canvas and the figure loses nothing but the turn */
  const glOk = () => { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch (e) { return false; } };
  const hasGL = !!(THREE && glOk());
  const GH = 340;                                   /* the canvas carries the graph */
  const d = sim('sim-generator', hasGL ? GH : 900); /* with no scene, it carries the top view as well */
  const nS = ctl(d.controls, { label: 'N', cls: '', min: 50, max: 250, step: 5, value: 200, unit: 'turns', dec: 0, aria: 'the number of turns of wire in the coil' });
  const aS = ctl(d.controls, { label: 'A', cls: '', min: 2, max: 12, step: 0.05, value: 7.85, unit: '× 10⁻³ m²', dec: 2, aria: 'the area of the coil' });
  const bS = ctl(d.controls, { label: '\\kBmag', cls: 'magnetic-field', min: 0, max: 1.5, step: 0.05, value: 1.25, unit: 'T', dec: 2, aria: 'the strength of the magnetic field between the poles' });
  const wS = ctl(d.controls, { label: '\\kw', cls: 'angular-rate', min: 20, max: 125, step: 0.1, value: 104.7, unit: 'rad/s', dec: 1, aria: 'the angular velocity at which the coil is turned' });
  const ringC = select(d.controls, { label: '\\text{the contacts}', options: [{ value: 'rings', label: 'slip rings' }, { value: 'split', label: 'a split ring' }], value: 'rings', aria: 'whether the coil meets the outside circuit through two slip rings or through one split ring' });
  const labC = choice(d.controls, { label: '\\text{Labels}', options: [{ value: 'off', label: 'off' }, { value: 'on', label: 'on' }], value: 'off', aria: 'the names of the arrows and of the parts of the generator' });

  const T = 5.0;                                    /* two revolutions in five seconds */
  const cy = cycle(() => T, 1.0);
  const area = () => aS.v * 1e-3;                   /* the slider is in thousandths of a square metre */
  const side = () => Math.sqrt(area());             /* the coil is drawn square, of the area the slider sets */
  /* 564 V is what the four sliders reach together, 250 turns of 12.0 × 10⁻³ m² at
     1.50 T and 125 rad/s, and it is the height of the graph's fixed axis. */
  const EMAX = 250 * 12e-3 * 1.5 * 125;
  const peak = () => nS.v * area() * bS.v * wS.v;
  const VMAX = (Math.sqrt(12e-3) / 2) * 125;        /* the fastest a side wire is drawn moving, 6.85 m/s */

  function state() {
    const t = cy.now();
    const turned = 720 * (t / T);                   /* the angle the coil has turned, two revolutions to the loop */
    const th = ((turned % 360) + 360) % 360;
    const s = Math.sin(th * RAD), c = Math.cos(th * RAD);
    const split = ringC.value === 'split';
    const emf = peak() * s;
    return {
      turned, th, s, c, split, emf,
      out: split ? Math.abs(emf) : emf,             /* what the contacts hand to the circuit */
      flux: bS.v * area() * c,
      v: (side() / 2) * wS.v,                       /* the speed of each side wire, v = rω with r = w/2 */
      period: TAU / wS.v,
    };
  }
  const headText = (st) => {
    if (bS.v === 0) return 'With no field across the gap there is no flux through the coil however fast it is turned, so no emf is induced and nothing comes out of the brushes.';
    return `Turned ${deg(st.th)} from the position where it faces the field, the coil catches a flux of ${fluxStr(st.flux)} and induces ${fmt(st.emf, 0)} V.${st.split ? ' The split ring keeps what the circuit receives positive.' : ''}`;
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
        const hl = Math.min(0.24, L * 0.45), u = dd.clone().normalize(), base = B.clone().sub(u.clone().multiplyScalar(hl));
        F.mesh.setStick(shaft, a, base.toArray());
        cone.position.copy(base).add(u.clone().multiplyScalar(hl / 2));
        cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), u);
        cone.scale.set(r * 3.3, hl, r * 3.3);
      },
      show(v) { shaft.visible = cone.visible = v; },
    };
  }
  const GAP = 1.25, PW = 0.85, PH = 1.1, PD = 1.25; /* the pole faces stand at x = ±1.25 */
  const UPM = 16;                                   /* sixteen scene units to the metre */
  const YR1 = -1.42, YR2 = -1.74, YSP = -1.58;      /* the two slip rings, and the split ring between them */
  const WIND = 5, ARCN = 18, ARCR = 0.52, ANGN = 14, ANGR = 0.58;
  /* the field lines, on a grid across the gap. How many of them the coil catches is
     the flux, so the count is fixed and does not follow the field slider as Chapter
     22's figures let it: here the lines are counted, not merely shown, and the
     field's strength is told by the slider, the readout and the height of the curve. */
  const LINES = [];
  [-0.4, 0, 0.4].forEach((y0) => [-0.45, -0.16, 0.16, 0.45].forEach((z0) => LINES.push([y0, z0])));

  function build() {
    if (!V || !V.scene || !turn) return;
    V.clear(); paint.length = 0;
    const inkC = () => PAL.ink, mutedC = () => PAL.muted;
    const BC = () => C('magnetic-field'), PC = () => C('magnetic-flux'), EC = () => C('voltage'), VC = () => C('velocity'), WC = () => C('angular-rate');
    S = { coil: new THREE.Group() };
    /* the two pole pieces, lettered on their faces, and the field between them */
    [-1, 1].forEach((sx) => {
      const m = F.mesh.box(turn, [sx * (GAP + PW / 2), 0, 0], [PW, PH, PD], PAL.muted);
      keep(m, mutedC); V.pickable(m, sx < 0 ? 'the north pole of the magnet' : 'the south pole of the magnet');
    });
    S.field = LINES.map(([y0, z0]) => {
      const a = vec(turn, BC, 0.02, 'the magnetic field, running from the north pole to the south pole');
      a.set([-GAP + 0.06, y0, z0], [GAP - 0.06, y0, z0]); return a;
    });
    /* the mark where each of those lines pierces the face of the coil: the flux is
       how many of them the coil catches, so the marks wear the flux hue and not the
       field's, and they thin out to none as the coil comes edge-on */
    S.mark = LINES.map(() => {
      const m = F.mesh.sphere(turn, [0, 0, 0], 0.055, C('magnetic-flux'));
      keep(m, PC); V.pickable(m, 'a field line caught by the coil, one of the lines whose count is the flux'); return m;
    });
    /* the shaft, the foot it stands on, and the coil hanging from it */
    const shaft = F.mesh.stick(turn, [0, -1.94, 0], [0, 1.4, 0], 0.05, PAL.ink); keep(shaft, inkC); V.pickable(shaft, 'the shaft the coil turns on');
    const foot = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.56, 0.12, 36), pmat(mutedC)); foot.position.set(0, -2.0, 0); turn.add(foot); V.pickable(foot, 'the foot the generator stands on');
    turn.add(S.coil);
    /* the windings: five of them drawn, four sticks each, and how many are shown says
       how many turns the slider asks for */
    S.wind = [];
    for (let j = 0; j < WIND; j++) {
      const g = [0, 1, 2, 3].map(() => keep(F.mesh.stick(S.coil, [0, 0, 0], [0, 1, 0], 0.022, PAL.ink), inkC));
      g.forEach((m) => V.pickable(m, 'the coil of wire, in which the emf is induced'));
      S.wind.push(g);
    }
    /* the patch that fills the face of the coil. Seen along the field its apparent
       area is the flux itself, which is what the view button beside it is for. */
    S.patch = F.mesh.box(S.coil, [0, 0, 0], [0.014, 1, 1], C('magnetic-flux'), { transparent: true, opacity: 0.3, side: 2 });
    keep(S.patch, PC); V.pickable(S.patch, 'the face of the coil, whose apparent area seen along the field is the flux');
    S.lead = [-1, 1].map(() => keep(F.mesh.stick(S.coil, [0, 0, 0], [0, 1, 0], 0.022, PAL.ink), inkC));
    /* the crank, which turns with the coil: this machine is driven from outside */
    S.crank = [keep(F.mesh.stick(S.coil, [0, 1.36, 0], [0.42, 1.36, 0], 0.03, PAL.ink), inkC), keep(F.mesh.stick(S.coil, [0.42, 1.36, 0], [0.42, 1.1, 0], 0.045, PAL.ink), inkC)];
    S.crank.forEach((m) => V.pickable(m, 'the crank, by which the coil is turned from outside'));
    /* the contacts: two slip rings, each carrying one end of the coil out to its own
       brush, or one split ring whose halves change brushes twice a revolution */
    S.slip = [YR1, YR2].map((y) => {
      const m = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.2, 24), pmat(mutedC));
      m.position.set(0, y, 0); S.coil.add(m); V.pickable(m, 'a slip ring, which keeps one end of the coil on one brush all the way round'); return m;
    });
    S.split = [0, Math.PI].map((a) => {
      const m = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.3, 18, 1, false, a + 0.09, Math.PI - 0.18), pmat(mutedC));
      m.position.set(0, YSP, 0); S.coil.add(m); V.pickable(m, 'one half of the split ring, which changes brushes twice a revolution'); return m;
    });
    S.brush = [[-1, YR1], [1, YR2], [-1, YSP], [1, YSP]].map(([sx, y], i) => {
      const m = F.mesh.box(turn, [sx * 0.29, y, 0], [0.16, 0.18, 0.2], PAL.ink); keep(m, inkC);
      V.pickable(m, 'a brush, the sliding contact the emf reaches the outside circuit through'); return m;
    });
    /* the circuit the generator feeds, and the two wires that reach it */
    S.load = F.mesh.box(turn, [0, -1.58, -1.25], [0.55, 0.34, 0.16], PAL.muted); keep(S.load, mutedC);
    V.pickable(S.load, 'the circuit the generator feeds, the galvanometer of Figure 23.19 and the lamp of Figure 23.21');
    S.wire = [-1, 1].map((sx) => keep(F.mesh.stick(turn, [sx * 0.36, YSP, 0], [sx * 0.2, -1.58, -1.17], 0.022, PAL.ink), inkC));
    /* the velocity of each side wire, along the perpendicular to the coil, and the emf
       it drives along that wire, which runs the same way round the loop on both sides */
    S.vel = [-1, 1].map(() => vec(S.coil, VC, 0.032, 'the velocity of one side wire, which stands at the angle θ to the field'));
    S.emf = [-1, 1].map(() => vec(S.coil, EC, 0.038, 'the emf driven along one side wire; the two run the same way round the loop and add'));
    /* the perpendicular to the coil, and the arc from the field round to it */
    S.norm = keep(F.mesh.stick(S.coil, [0, 0, 0], [0.9, 0, 0], 0.012, PAL.muted), mutedC);
    S.ang = [];
    for (let i = 0; i < ANGN; i++) S.ang.push(keep(F.mesh.stick(turn, [0, 0, 0], [0, 0.01, 0], 0.012, PAL.muted), mutedC));
    /* the rotation, a curved arrow about the top of the shaft */
    S.arc = [];
    for (let i = 0; i < ARCN; i++) S.arc.push(keep(F.mesh.stick(turn, [0, 0, 0], [0, 0.01, 0], 0.028, PAL.ink), WC));
    S.arcHead = new THREE.Mesh(F.mesh.geo().cone, pmat(WC)); S.arcHead.scale.set(0.085, 0.19, 0.085); turn.add(S.arcHead);
    V.pickable(S.arcHead, 'the angular velocity at which the coil is turned');
    /* the names. The letters on the poles are the frame and are always drawn; every
       other name sits on something that turns, so they wait behind the Labels button
       (rule 26.7) and are on hover meanwhile. */
    const dim = (e, col) => { e.style.background = 'transparent'; e.style.border = '0'; e.style.fontWeight = '600'; e.style.color = col; return e; };
    S.pole = [dim(V.label('N', [-(GAP + PW + 0.22), 0, 0], turn, 0), PAL.ink), dim(V.label('S', [GAP + PW + 0.22, 0, 0], turn, 0), PAL.ink)];
    S.lab = {
      B: V.label('B', [GAP - 0.22, 0.4, 0.45], turn, 10),
      Phi: V.label('Φ', [0, 0, 0], S.coil, 10),
      v: V.label('v', [0, 0, 0], S.coil, 10),
      emf: V.label('emf', [0, 0, 0], S.coil, 10),
      th: V.label('θ', [0, 0, 0], turn, 8),
      w: V.label('ω', [0, 0, 0], turn, 8),
    };
    V.invalidate();
  }

  function apply(st) {
    if (!S) return;
    paint.forEach((p) => { try { p.m.color.set(p.col()); } catch (e) { /* a palette value the renderer cannot read is left as it was */ } });
    const hh = (side() / 2) * UPM;                  /* half the side of the coil, in scene units */
    const on = bS.v > 0;
    S.field.forEach((a) => a.show(on));
    S.coil.rotation.y = st.th * RAD;
    /* the windings, spread a little across the coil's own perpendicular */
    const k = Math.max(1, Math.min(WIND, Math.round(nS.v / 50)));
    S.wind.forEach((g, j) => {
      const vis = j < k, o = (j - (k - 1) / 2) * 0.03;
      g.forEach((m) => { m.visible = vis; });
      if (!vis) return;
      F.mesh.setStick(g[0], [o, -hh, -hh], [o, hh, -hh]);
      F.mesh.setStick(g[1], [o, -hh, hh], [o, hh, hh]);
      F.mesh.setStick(g[2], [o, hh, -hh], [o, hh, hh]);
      F.mesh.setStick(g[3], [o, -hh, -hh], [o, -hh, hh]);
    });
    S.patch.scale.set(1, 2 * hh, 2 * hh);
    S.patch.visible = on;
    S.lead.forEach((m, i) => F.mesh.setStick(m, [0, -hh, (i ? 1 : -1) * 0.12], [0, (st.split ? YSP : i ? YR2 : YR1) + 0.1, (i ? 1 : -1) * 0.12]));
    S.slip.forEach((m) => { m.visible = !st.split; });
    S.split.forEach((m) => { m.visible = st.split; });
    S.brush.forEach((m, i) => { m.visible = st.split ? i > 1 : i < 2; });
    S.wire.forEach((m, i) => F.mesh.setStick(m, [(i ? 1 : -1) * 0.36, st.split ? YSP : i ? YR2 : YR1, 0], [(i ? 1 : -1) * 0.2, -1.58, -1.17]));
    /* the marks where the field lines pierce the face of the coil. A line at height
       y and depth z crosses the coil's plane at x = z tan θ, and it is caught only
       where that crossing lies inside the coil, which is |z / cos θ| ≤ hh: the count
       is therefore proportional to cos θ, which is the flux itself. */
    const cs = Math.cos(st.th * RAD);
    S.mark.forEach((m, i) => {
      const [y0, z0] = LINES[i];
      const inside = on && Math.abs(cs) > 0.035 && Math.abs(y0) <= hh && Math.abs(z0 / cs) <= hh;
      m.visible = inside;
      if (inside) m.position.set(z0 * Math.tan(st.th * RAD), y0, z0);
    });
    /* the velocity of each side wire: along the perpendicular to the coil, which is
       the coil's own x direction, one way on the near side and the other on the far */
    const vl = 0.18 + 0.62 * (st.v / VMAX);
    S.vel.forEach((a, i) => {
      const sz = i ? 1 : -1;
      a.show(wS.v > 0);
      a.set([0, 0, sz * hh], [sz * vl, 0, sz * hh]);
    });
    /* the emf along each side wire. The force on a positive charge is qv × B, which
       runs down the near wire and up the far one while sin θ is positive, and turns
       over with it: the two always run the same way round the loop. */
    const el0 = Math.abs(st.emf) / EMAX, dir = st.s >= 0 ? -1 : 1;
    const eln = 0.2 + 0.62 * el0;
    S.emf.forEach((a, i) => {
      const sz = i ? 1 : -1, u = dir * sz;
      const show = on && Math.abs(st.emf) > 0.5;
      a.show(show);
      if (show) a.set([0.1, -u * eln / 2, sz * hh], [0.1, u * eln / 2, sz * hh]);
    });
    /* the perpendicular to the coil and the arc from the field round to it */
    const nlen = Math.max(0.95, hh * 1.2);
    F.mesh.setStick(S.norm, [0.02, 0, 0], [nlen, 0, 0]);
    const span = st.th * RAD;
    S.ang.forEach((m, i) => {
      const a0 = (span * i) / ANGN, a1 = (span * (i + 1)) / ANGN, use = span > 0.06;
      m.visible = use;
      if (use) F.mesh.setStick(m, [ANGR * Math.cos(a0), 0, -ANGR * Math.sin(a0)], [ANGR * Math.cos(a1), 0, -ANGR * Math.sin(a1)]);
    });
    /* the rotation: a fixed arc about the shaft, pointing the way the coil turns */
    const tot = 2.1;
    S.arc.forEach((m, i) => {
      const a0 = 0.5 + (tot * i) / ARCN, a1 = 0.5 + (tot * (i + 1)) / ARCN;
      F.mesh.setStick(m, [ARCR * Math.cos(a0), 0.98, -ARCR * Math.sin(a0)], [ARCR * Math.cos(a1), 0.98, -ARCR * Math.sin(a1)]);
    });
    const ae = 0.5 + tot, tip = new THREE.Vector3(ARCR * Math.cos(ae), 0.98, -ARCR * Math.sin(ae));
    const dv = new THREE.Vector3(-Math.sin(ae), 0, -Math.cos(ae)).normalize();
    S.arcHead.position.copy(tip).add(dv.clone().multiplyScalar(0.06));
    S.arcHead.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dv);
    /* where each name sits, and whether it is drawn at all */
    const labOn = labC.value === 'on';
    V.move(S.lab.Phi, [0.12, -hh - 0.3, 0]);
    V.move(S.lab.v, [vl + 0.16, 0.2, hh]);
    V.move(S.lab.emf, [0.34, dir * eln * 0.7, -hh]);
    V.move(S.lab.th, [ANGR * 2.1 * Math.cos(span / 2), -0.26, -ANGR * 2.1 * Math.sin(span / 2)]);
    V.move(S.lab.w, [ARCR * 1.7 * Math.cos(0.5 + tot / 2), 1.06, -ARCR * 1.7 * Math.sin(0.5 + tot / 2)]);
    S.lab.B.style.color = C('magnetic-field'); S.lab.Phi.style.color = C('magnetic-flux');
    S.lab.v.style.color = C('velocity'); S.lab.emf.style.color = C('voltage'); S.lab.w.style.color = C('angular-rate');
    S.lab.th.textContent = 'θ = ' + deg(st.th);
    S.lab.Phi.textContent = 'Φ = ' + milli(st.flux, 2) + ' T⋅m²';
    S.lab.emf.textContent = 'emf = ' + fmt(st.emf, 0) + ' V';
    S.lab.v.textContent = 'v = ' + fmt(st.v, 2) + ' m/s';
    S.lab.w.textContent = 'ω = ' + fmt(wS.v, 1) + ' rad/s';
    S.pole.forEach((e) => { e.style.color = PAL.ink; });
    Object.entries(S.lab).forEach(([key, e]) => {
      e.hidden = !labOn || ((key === 'B' || key === 'Phi') && !on)
        || (key === 'emf' && (!on || Math.abs(st.emf) <= 0.5))
        || (key === 'th' && span <= 0.06);
    });
    V.headline(headText(st));
    V.invalidate();
  }

  /* ---------- the top view of Figure 23.20, where there is no WebGL ---------- */
  function drawFlat(ctx, st) {
    const cx = 700, cy0 = 285, K = 170, hh = (side() / 2) * UPM * K;
    const cB = C('magnetic-field'), cP = C('magnetic-flux'), cV = C('velocity'), cE = C('voltage');
    /* the field, running from the north pole on the left to the south pole on the
       right, one arrow for each depth the lines are drawn at, so that the marks
       where the coil catches them sit on those lines */
    const ZS = [-0.45, -0.16, 0.16, 0.45];
    if (bS.v > 0) ZS.forEach((z0) => arrow(ctx, cx - 430, cy0 - z0 * K, cx + 430, cy0 - z0 * K, alpha(cB, 0.75), 3.5));
    text(ctx, 'N', cx - 470, cy0, PAL.ink, { size: 34, weight: 700, align: 'center' });
    text(ctx, 'S', cx + 470, cy0, PAL.ink, { size: 34, weight: 700, align: 'center' });
    if (bS.v > 0) text(ctx, 'B = ' + fmt(bS.v, 2) + ' T', 1350, 104, cB, { size: 21, weight: 600, align: 'right' });
    /* the coil, seen edge on from above: a line through the shaft with a side wire at
       each end, and the marks where the field lines pierce its face */
    const ux = Math.sin(st.th * RAD), uy = -Math.cos(st.th * RAD);
    const pA = [cx + ux * hh, cy0 + uy * hh], pB = [cx - ux * hh, cy0 - uy * hh];
    line(ctx, pA[0], pA[1], pB[0], pB[1], PAL.ink, 6);
    if (bS.v > 0 && Math.abs(st.c) > 0.035) ZS.forEach((z0) => {
      if (Math.abs(z0 / st.c) > (side() / 2) * UPM) return;
      dot(ctx, cx + z0 * Math.tan(st.th * RAD) * K, cy0 - z0 * K, cP, true, 9);
    });
    /* the velocity of each side wire, at the angle θ to the field */
    const vl = (0.18 + 0.62 * (st.v / VMAX)) * K;
    arrow(ctx, pA[0], pA[1], pA[0] + Math.cos(st.th * RAD) * vl, pA[1] + Math.sin(st.th * RAD) * vl, cV, 5);
    arrow(ctx, pB[0], pB[1], pB[0] - Math.cos(st.th * RAD) * vl, pB[1] - Math.sin(st.th * RAD) * vl, cV, 5);
    text(ctx, 'v = ' + fmt(st.v, 2) + ' m/s', pA[0] + Math.cos(st.th * RAD) * vl + 16, pA[1] + Math.sin(st.th * RAD) * vl - 24, cV, { size: 20, weight: 600, align: 'left', bg: PAL.panel });
    /* the angle the perpendicular, and so the velocity, makes with the field */
    if (st.th > 3 && st.th < 357) {
      turnArrow(ctx, cx, cy0, 104, 0, st.th * RAD, alpha(PAL.ink, 0.45), 2.5);
      text(ctx, 'θ = ' + deg(st.th), cx + 152 * Math.cos(st.th * RAD / 2), cy0 + 152 * Math.sin(st.th * RAD / 2), PAL.ink, { size: 20, weight: 600, align: 'left', bg: PAL.panel });
    }
    if (bS.v > 0) text(ctx, 'Φ = ' + fluxStr(st.flux), 50, 104, cP, { size: 21, weight: 600, align: 'left' });
    if (bS.v > 0) text(ctx, 'emf = ' + fmt(st.emf, 0) + ' V', 50, 134, cE, { size: 21, weight: 600, align: 'left' });
    dot(ctx, cx, cy0, PAL.ink, true, 8);
    text(ctx, 'This browser cannot turn the scene, so the coil is drawn from above, as the book draws it in Figure 23.20,', 700, 506, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'with a side wire at each end of it and the field lines it catches marked where they cross its face.', 700, 530, PAL.muted, { size: 17, align: 'center' });
    topline(ctx, headText(st));
  }

  /* ---------- the emf over two revolutions ---------- */
  function drawGraph(ctx, st, y0) {
    const BOX = { l: 180, r: 1250, t: y0 + 62, b: y0 + 254 };
    const { X, Y } = axes(ctx, BOX, [0, 720], [-600, 600], {
      xl: 'the angle the coil has turned from the position where it faces the field (degrees)',
      yl: 'the emf the contacts hand to the circuit (V)', yc: C('voltage'),
      nx: 8, ny: 6, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0),
    });
    const pk = peak();
    ctx.save(); ctx.beginPath(); ctx.rect(BOX.l, BOX.t, BOX.r - BOX.l, BOX.b - BOX.t); ctx.clip();
    curve(ctx, (a) => pk * (st.split ? Math.abs(Math.sin(a * RAD)) : Math.sin(a * RAD)), 0, 720, X, Y, C('voltage'), 5, 360);
    ctx.restore();
    if (pk > 1) {
      line(ctx, BOX.l, Y(pk), BOX.r, Y(pk), alpha(C('voltage'), 0.45), 2, [10, 10]);
      text(ctx, 'emf₀ = ' + fmt(pk, 0) + ' V', BOX.r - 10, Y(pk) - 17, C('voltage'), { size: 18, weight: 600, align: 'right', bg: PAL.panel });
    }
    if (st.split) [180, 360, 540].forEach((a) => line(ctx, X(a), BOX.t, X(a), BOX.b, alpha(PAL.ink, 0.4), 2, [6, 8]));
    line(ctx, X(st.turned), Math.min(Y(st.out), Y(0)), X(st.turned), Math.max(Y(st.out), Y(0)), alpha(PAL.ink, 0.35), 2.5, [4, 8]);
    pinned(ctx, BOX, X, Y, st.turned, st.out, C('voltage'), fmt(st.out, 0) + ' V');
  }

  function draw() {
    const st = state();
    const { ctx } = begin(d.c);
    if (!hasGL) drawFlat(ctx, st);
    else if (S) apply(st);
    drawGraph(ctx, st, hasGL ? 8 : 550);
    const drawnPeriod = T / 2, slow = drawnPeriod / st.period;
    readout(d.readout,
      `\\kemf = NA\\kBmag\\kw\\sin\\kw\\kt = (${fmt(nS.v, 0)})(${milliTex(area(), 2)}\\ \\text{m}^2)(${fmt(bS.v, 2)}\\ \\text{T})(${fmt(wS.v, 1)}\\ \\text{rad/s})\\sin ${degTex(st.th)} = ${fmt(st.emf, 0)}\\ \\text{V}`,
      `The angle is measured from the position where the coil faces the field squarely, which is where the flux through it is greatest, ${fluxStr(bS.v * area())}, and where the emf is zero; a quarter revolution on, the coil stands edge-on, the flux is zero and the emf is at its peak of ${fmt(peak(), 0)} V. The coil turns at ${fmt(wS.v, 1)} rad/s, so its period is ${fmt(st.period * 1000, 1)} ms and its frequency ${fmt(1 / st.period, 1)} Hz, but the scene is drawn at one revolution every ${fmt(drawnPeriod, 1)} s, about ${fmt(slow, 0)} times slower than the coil really turns, because a machine turning sixteen times a second shows the reader nothing. At the settings the figure opens on it is Example 23.3 and Example 23.4: two hundred turns of 7.85 × 10⁻³ m² in a 1.25 T field at 104.7 rad/s, whose average emf over a quarter revolution is 131 V and whose peak is 205 V, which Example 23.4 rounds to 206 V. Stop the motion with the transport and drag the scrubber from 0° to 90° to make that quarter revolution, over which the flux falls from its greatest value to zero in 15.0 ms. ${st.split ? 'The split ring turns the connection over each half revolution, so the coil still induces the same sinusoid but the circuit receives a train of positive pulses.' : 'The slip rings keep each end of the coil on its own brush all the way round, so the circuit receives the sinusoid just as the coil induces it.'}`);
  }

  if (hasGL) {
    V = F.view3d(d.stage, {
      h: 640, dist: 9.0, tilt: 0.32, spin: 'off',
      views: [{ label: 'the book’s view', yaw: 0.44, pitch: 0.28 }, { label: 'from above', yaw: 0, pitch: 1.47 }, { label: 'along the field', yaw: 1.5708, pitch: 0.42 }],
      pitch: [0.07, 1.52], yaw: 'free', zoomMin: 0.7, zoomMax: 2.4,
    });
    if (!V.scene) V = null;
    else { turn = V.part(0); V.setView(0.44, 0.28); d.stage.appendChild(d.c); }
  }
  if (V) { try { build(); } catch (e) { console.error('sim-generator: the scene could not be built', e); S = null; } }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
  if (!hasGL) hover(d.stage, () => {
    const st = state(), cx = 700, cy0 = 285, K = 170, hh = (side() / 2) * UPM * K;
    const ux = Math.sin(st.th * RAD), uy = -Math.cos(st.th * RAD);
    return [
      { x: cx, y: cy0, r: 40, name: 'the shaft the coil turns on, seen end on' },
      { x: cx + ux * hh, y: cy0 + uy * hh, r: 34, name: 'one side wire of the coil, moving along the perpendicular to the coil' },
      { x: cx - ux * hh, y: cy0 - uy * hh, r: 34, name: 'the other side wire, moving the opposite way' },
    ];
  });
})();

/* =====================================================================
   SIM: the average emf over a turn, against the peak. The section works
   Example 23.3 and Example 23.4 on one coil and gets 131 V and 206 V, and
   says only that the maximum should be the greater. Here the flux is drawn
   against the angle above and the emf against the same angle below, and
   the reader chooses where the turn starts and how far it goes: the chord
   across the flux curve is the slope Faraday's law takes, and the dashed
   level below is the mean of the sine over the same span, which is the
   same number. Still (rule 14): a curve and a mean over an interval are a
   relation, not a process. Flat (rule 28.1): the graph is the idea.
===================================================================== */
(function () {
  const H = 770;
  const d = sim('sim-average-emf', H);
  const t1S = ctl(d.controls, { label: '\\theta_1', cls: '', min: 0, max: 180, step: 5, value: 0, unit: '°', dec: 0, aria: 'the angle the coil has already turned when the interval begins' });
  const dtS = ctl(d.controls, { label: '\\Delta\\theta', cls: '', min: 10, max: 180, step: 5, value: 90, unit: '°', dec: 0, aria: 'the angle the coil turns through during the interval' });
  const wS = ctl(d.controls, { label: '\\kw', cls: 'angular-rate', min: 20, max: 125, step: 0.1, value: 104.7, unit: 'rad/s', dec: 1, aria: 'the angular velocity at which the coil is turned' });

  const N0 = 200, A0 = 7.85e-3, B0 = 1.25;          /* Example 23.3's own coil and field */
  const PHI0 = B0 * A0;                             /* 9.81 × 10⁻³ T⋅m², the greatest flux through it */
  const flux = (a) => PHI0 * Math.cos(a * RAD);
  function state() {
    const t1 = t1S.v, t2 = t1S.v + dtS.v, w = wS.v;
    const dt = (dtS.v * RAD) / w, dPhi = flux(t2) - flux(t1);
    return { t1, t2, w, dt, dPhi, peak: N0 * A0 * B0 * w, avg: -N0 * dPhi / dt };
  }

  function draw() {
    const st = state();
    const { ctx } = begin(d.c);
    const cP = C('magnetic-flux'), cE = C('voltage');
    const BA = { l: 200, r: 1250, t: 142, b: 344 }, BB = { l: 200, r: 1250, t: 480, b: 682 };
    /* the flux through the coil, and the chord Faraday's law takes the slope of */
    const A = axes(ctx, BA, [0, 360], [-0.010, 0.010], {
      yl: 'Φ, the flux through the coil (T⋅m²)', yc: cP,
      nx: 8, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 3),
    });
    ctx.save(); ctx.fillStyle = alpha(cP, 0.12); ctx.fillRect(A.X(st.t1), BA.t, A.X(st.t2) - A.X(st.t1), BA.b - BA.t); ctx.restore();
    curve(ctx, flux, 0, 360, A.X, A.Y, cP, 5, 180);
    const p1 = [A.X(st.t1), A.Y(flux(st.t1))], p2 = [A.X(st.t2), A.Y(flux(st.t2))];
    line(ctx, p1[0], p1[1], p2[0], p2[1], PAL.ink, 3.5, [10, 10]);
    dot(ctx, p1[0], p1[1], cP, false, 10); dot(ctx, p2[0], p2[1], cP, true, 10);
    line(ctx, p1[0], p1[1], p2[0] + 44, p1[1], alpha(PAL.ink, 0.35), 2, [4, 8]);
    vbracket(ctx, p2[0] + 44, p1[1], p2[1], cP, 'ΔΦ = ' + milli(st.dPhi, 2) + ' T⋅m²', 1);
    note(ctx, BA, 'The chord is the change in flux over the change in time.', [
      { l: Math.min(p1[0], p2[0]) - 30, r: Math.max(p1[0], p2[0]) + 280, t: BA.t, b: BA.b },
      { l: BA.l, r: A.X(60), t: BA.t, b: A.Y(0) }, { l: A.X(300), r: BA.r, t: BA.t, b: A.Y(0) },
      { l: A.X(135), r: A.X(225), t: A.Y(0), b: BA.b },
    ]);
    /* the emf the same turn induces, and the mean of it over the same span */
    const Bx = axes(ctx, BB, [0, 360], [-250, 250], {
      xl: 'the angle the coil has turned from the position where it faces the field (degrees)',
      yl: 'emf (V)', yc: cE, nx: 8, ny: 4, fx: (v) => fmt(v, 0), fy: (v) => fmt(v, 0),
    });
    ctx.save(); ctx.fillStyle = alpha(cE, 0.12); ctx.fillRect(Bx.X(st.t1), BB.t, Bx.X(st.t2) - Bx.X(st.t1), BB.b - BB.t); ctx.restore();
    curve(ctx, (a) => st.peak * Math.sin(a * RAD), 0, 360, Bx.X, Bx.Y, cE, 5, 180);
    line(ctx, BB.l, Bx.Y(st.peak), BB.r, Bx.Y(st.peak), alpha(cE, 0.4), 2, [10, 10]);
    text(ctx, 'emf₀ = ' + fmt(st.peak, 0) + ' V', BB.r - 10, Bx.Y(st.peak) - 17, cE, { size: 18, weight: 600, align: 'right', bg: PAL.panel });
    line(ctx, Bx.X(st.t1), Bx.Y(st.avg), Bx.X(st.t2), Bx.Y(st.avg), cE, 4, [12, 8]);
    text(ctx, 'the average over this span, ' + fmt(st.avg, 0) + ' V', (Bx.X(st.t1) + Bx.X(st.t2)) / 2, Bx.Y(st.avg) - 20, cE, { size: 19, weight: 600, align: 'center', bg: PAL.panel });
    note(ctx, BB, 'The level is the mean of the curve over the span.', [
      { l: Bx.X(st.t1) - 40, r: Bx.X(st.t2) + 40, t: BB.t, b: BB.b },
      { l: Bx.X(45), r: Bx.X(135), t: BB.t, b: Bx.Y(0) }, { l: Bx.X(225), r: Bx.X(315), t: Bx.Y(0), b: BB.b },
    ]);
    topline(ctx, `Turned through ${deg(dtS.v)} from ${st.t1 === 0 ? 'the position where it faces the field' : deg(st.t1) + ' past the position where it faces the field'}, the coil's flux goes from ${fluxStr(flux(st.t1))} to ${fluxStr(flux(st.t2))} in ${fmt(st.dt * 1000, 1)} ms, so the average emf over that turn is ${fmt(st.avg, 0)} V against a peak of ${fmt(st.peak, 0)} V.`);
    readout(d.readout,
      `\\kemf = -N\\frac{\\kdPhi}{\\kdt} = -(${fmt(N0, 0)})\\frac{${milliTex(st.dPhi, 2)}\\ \\text{T}\\cdot\\text{m}^2}{${milliTex(st.dt, 2)}\\ \\text{s}} = ${fmt(st.avg, 0)}\\ \\text{V}, \\qquad \\kemfo = NA\\kBmag\\kw = ${fmt(st.peak, 0)}\\ \\text{V}`,
      `The coil is Example 23.3's own: two hundred turns of area 7.85 × 10⁻³ m² in a field of 1.25 T, so the greatest flux through it is 9.81 × 10⁻³ T⋅m² and the peak emf is 205 V at 104.7 rad/s, which Example 23.4 rounds to 206 V. Set the turn to a quarter revolution beginning where the coil faces the field and the average comes to 131 V, which is 2/π of that peak, because that is what the mean of a sine over a quarter of its cycle comes to; the figure then reads Example 23.3 and Example 23.4 together. Move the start of the turn to 90° and the same quarter revolution gives the same average the other way about, since the flux is now climbing rather than falling. Open the turn to a whole revolution and the average falls to zero, because the coil ends where it began and the flux has not changed at all, which is why an average emf has to be quoted with the interval it was taken over. The angular velocity scales both the peak and the average together, since turning the coil twice as fast halves the time as well as leaving the change in flux alone.`);
  }
  register(d.fig, { update: () => {}, draw });
})();

};
