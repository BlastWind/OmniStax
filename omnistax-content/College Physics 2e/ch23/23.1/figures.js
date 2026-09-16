/* Figures for section 23.1 Induced Emf and Magnetic Flux. The page binds
   magnetic-flux, magnetic-field and voltage, which is what ch23/COLOR.md gives
   it, and two more that plan.md argues for: velocity, for the speed of the
   magnet in sim-magnet-coil, and angular-rate, for the rate the coil is turned
   in sim-rotating-coil. A flux never wears the field's hue: the lines drawn in
   space are in the field hue and the part of them a surface catches is in the
   flux hue. Every body is ink — the coils, the iron ring, the magnet with N and
   S on its ends, the pole faces, the battery, the switch and the meter case —
   and the number of turns, the area and the angle stay in ink with them. The
   galvanometer's needle is in the voltage hue, since what it stands for here is
   the induced emf, which the section says is more basic than the current.
   Three of the four figures move, because induction is a rate; the flux
   geometry of Figure 23.6 is an orientation, which is a state and not a
   process, so it registers no cycle and takes no transport. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['23.1'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, cycle, register, begin, line, arrow, dot, text, topline, label, angleArc, view, face, fist } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

const RAD = Math.PI / 180, TAU = 2 * Math.PI;
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
/* A meter reading that grows with what it is given and never quite reaches the
   end of its scale, so that no setting of the sliders pins the needle. */
const soft = (x) => x / Math.sqrt(1 + x * x);
/* a number as a × 10^b, for the canvas and for KaTeX */
function sci(x, dp) {
  if (!(Math.abs(x) > 0)) return '0';
  const e = Math.floor(Math.log10(Math.abs(x))), m = x / Math.pow(10, e);
  const sup = String(e).replace(/-/g, '−').replace(/[0-9]/g, (c) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[+c]);
  return fmt(m, dp ?? 2) + ' × 10' + sup;
}
function sciTex(x, dp) {
  if (!(Math.abs(x) > 0)) return '0';
  const e = Math.floor(Math.log10(Math.abs(x))), m = x / Math.pow(10, e);
  return fmt(m, dp ?? 2) + ' \\times 10^{' + e + '}';
}

/* A galvanometer: a case, a scale with its zero in the middle and a needle
   standing at r of full scale, from −1 to 1. The needle and the name of what it
   reads are in the voltage hue; the case and the scale are ink. */
function meter(ctx, cx, cy, R, r, title) {
  const sw = 1.06, a = -Math.PI / 2 + clamp(r, -1, 1) * sw;
  ctx.save();
  ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.arc(cx, cy, R, Math.PI, 0); ctx.lineTo(cx + R, cy + R * 0.26); ctx.lineTo(cx - R, cy + R * 0.26); ctx.closePath();
  ctx.fill(); ctx.stroke(); ctx.restore();
  for (let i = -4; i <= 4; i++) {
    const t = -Math.PI / 2 + (i / 4) * sw;
    line(ctx, cx + Math.cos(t) * R * 0.76, cy + Math.sin(t) * R * 0.76, cx + Math.cos(t) * R * 0.9, cy + Math.sin(t) * R * 0.9, i === 0 ? PAL.ink : PAL.muted, i === 0 ? 3 : 2);
  }
  line(ctx, cx, cy, cx + Math.cos(a) * R * 0.8, cy + Math.sin(a) * R * 0.8, C('voltage'), 4);
  dot(ctx, cx, cy, PAL.ink, true, 6);
  text(ctx, '0', cx, cy - R * 0.6, PAL.muted, { size: 17, align: 'center' });
  text(ctx, title, cx, cy - R - 24, C('voltage'), { size: 20, weight: 600, align: 'center' });
}

/* The flux through a coil as a bar standing out of a zero line, up for one sign
   and down for the other. `frac` runs from −1 to 1 of the tallest bar the
   sliders reach, so the bar keeps one fixed scale whatever they are set to. */
function fluxBar(ctx, cx, cy, h, frac, capt, value) {
  const w = 38, f = clamp(frac, -1, 1);
  ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.35); ctx.lineWidth = 2;
  ctx.strokeRect(cx - w / 2, cy - h, w, 2 * h); ctx.restore();
  line(ctx, cx - w / 2 - 10, cy, cx + w / 2 + 10, cy, PAL.muted, 2);
  if (Math.abs(f) > 0.002) {
    ctx.save(); ctx.fillStyle = C('magnetic-flux');
    ctx.fillRect(cx - w / 2 + 2, f > 0 ? cy - f * h : cy, w - 4, Math.abs(f) * h);
    ctx.restore();
  }
  text(ctx, capt, cx, cy + h + 26, C('magnetic-flux'), { size: 19, weight: 600, align: 'center' });
  text(ctx, value, cx, cy + h + 50, PAL.muted, { size: 17, align: 'center' });
}

/* =====================================================================
   FIGURE 23.3 · sim-faraday-ring · moving · 2D from a locked view
   Faraday's iron ring: a coil on its upper part driven by a battery through a
   switch, a coil on its lower part read by a galvanometer. The cycle throws the
   switch for the reader — closed at 0.5 s, opened at 3.6 s, the field rising
   and dying with a time constant of 0.28 s — because the one thing the book's
   still cannot show is that the needle moves only while the field is changing.
   The ring is projected from the book's own viewpoint with view()/face() and
   does not orbit (root rule 28.2), as ch23/config.md asks. The lower coil
   encloses 0.012 m² of the ring's cross-section; with the iron taken away only
   a small part of the upper coil's field reaches it, which is what the
   section's first conceptual question is about. The needle is set on one fixed
   scale taken from the sliders' maxima.
===================================================================== */
(function () {
  const d = sim('sim-faraday-ring', 700);
  const B = ctl(d.controls, { label: '\\kBmag', cls: 'magnetic-field', min: 0.05, max: 0.60, step: 0.05, value: 0.25, unit: 'T', dec: 2, aria: 'the field the upper coil raises in the ring', onInput: () => cy.reset() });
  const N = ctl(d.controls, { label: 'N', cls: '', min: 1, max: 20, step: 1, value: 8, unit: 'turns', dec: 0, aria: 'the number of turns on the lower coil' });
  const core = choice(d.controls, { label: '\\text{the core}', options: [{ value: 'iron', label: 'the iron ring' }, { value: 'air', label: 'air' }], value: 'iron', aria: 'whether a ring of iron carries the field from one coil to the other' });

  const TC = 0.28, T_ON = 0.5, T_OFF = 3.6, T_END = 6.4, AREA = 0.012;
  const FULL = 20 * AREA * (0.60 / TC);            /* the greatest N ΔΦ/Δt the sliders reach */
  const cy = cycle(() => T_END, 0.8);
  const k = () => (core.value === 'iron' ? 1 : 0.04);
  const rise = 1 - Math.exp(-(T_OFF - T_ON) / TC);
  const field = (t) => (t < T_ON ? 0 : t < T_OFF ? B.v * (1 - Math.exp(-(t - T_ON) / TC)) : B.v * rise * Math.exp(-(t - T_OFF) / TC));
  const slope = (t) => (t < T_ON ? 0 : t < T_OFF ? (B.v / TC) * Math.exp(-(t - T_ON) / TC) : -((B.v * rise) / TC) * Math.exp(-(t - T_OFF) / TC));

  const CX = 460, CY = 380, R0 = 185, TUBE = 44;
  const V = view({ yaw: 0, pitch: 0.55, dist: 2400, cx: CX, cy: CY });
  const at = (r, a) => V.P([r * Math.cos(a), 0, r * Math.sin(a)]);
  const circle = (r) => { const p = []; for (let i = 0; i <= 96; i++) p.push(at(r, (i / 96) * TAU)); return p; };
  function winding(ctx, a0, a1, n) {
    for (let i = 0; i < n; i++) {
      const a = a0 + ((a1 - a0) * (i + 0.5)) / n;
      const p1 = at(R0 - TUBE - 14, a), p2 = at(R0 + TUBE + 14, a);
      line(ctx, p1[0], p1[1], p2[0], p2[1], PAL.ink, 5);
    }
  }
  function ring(ctx) {
    face(ctx, circle(R0 + TUBE), 0.1, 3);
    const inner = circle(R0 - TUBE);
    ctx.save(); ctx.beginPath(); inner.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath();
    ctx.fillStyle = PAL.panel; ctx.fill(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.stroke(); ctx.restore();
  }
  function fieldArrows(ctx, b) {
    if (b < 0.004) return;
    const a = clamp(b / 0.60, 0.12, 1), whole = core.value === 'iron';
    for (let i = 0; i < 12; i++) {
      const c = (i / 12) * TAU + 0.26;
      if (!whole && !(c > 200 * RAD && c < 340 * RAD)) continue;
      const p1 = at(R0, c - 0.13), p2 = at(R0, c + 0.13);
      arrow(ctx, p1[0], p1[1], p2[0], p2[1], alpha(C('magnetic-field'), 0.25 + 0.75 * a), 4);
    }
  }
  function circuits(ctx, closed) {
    const pl = at(R0, 250 * RAD), pr = at(R0, 290 * RAD), sl = at(R0, 110 * RAD), sr = at(R0, 70 * RAD);
    const YT = 150;
    /* the battery's circuit: up from the back of the ring, the battery standing on
       one upright and the switch on the other, joined across the top */
    line(ctx, pl[0], pl[1], pl[0], 236, PAL.ink, 3); line(ctx, pl[0], 214, pl[0], YT, PAL.ink, 3);
    line(ctx, pl[0] - 26, 236, pl[0] + 26, 236, PAL.ink, 4); line(ctx, pl[0] - 15, 222, pl[0] + 15, 222, PAL.ink, 7);
    line(ctx, pl[0], YT, pr[0], YT, PAL.ink, 3);
    line(ctx, pr[0], pr[1], pr[0], 248, PAL.ink, 3); line(ctx, pr[0], 188, pr[0], YT, PAL.ink, 3);
    dot(ctx, pr[0], 248, PAL.ink, true, 7); dot(ctx, pr[0], 188, PAL.ink, true, 7);
    const a = closed ? -Math.PI / 2 : -Math.PI / 2 + 0.62;
    line(ctx, pr[0], 248, pr[0] + 62 * Math.cos(a), 248 + 62 * Math.sin(a), PAL.ink, 5);
    /* the meter's two leads, down from the front of the ring */
    line(ctx, sr[0], sr[1], sr[0], 600, PAL.ink, 3); line(ctx, sr[0], 600, 1058, 600, PAL.ink, 3); line(ctx, 1058, 600, 1058, 496, PAL.ink, 3);
    line(ctx, sl[0], sl[1], sl[0], 645, PAL.ink, 3); line(ctx, sl[0], 645, 1202, 645, PAL.ink, 3); line(ctx, 1202, 645, 1202, 496, PAL.ink, 3);
  }
  function draw() {
    const t = cy.now(), { ctx } = begin(d.c);
    const b = field(t), db = slope(t), closed = t >= T_ON && t < T_OFF;
    const phi = k() * b * AREA, emf = N.v * k() * db * AREA, r = soft((2.2 * emf) / FULL);
    ring(ctx);
    winding(ctx, 210 * RAD, 330 * RAD, 7);
    winding(ctx, 30 * RAD, 150 * RAD, clamp(N.v, 1, 11));   /* a coil of more than eleven turns is drawn with eleven */
    fieldArrows(ctx, b);
    circuits(ctx, closed);
    meter(ctx, 1130, 470, 95, r, 'induced emf');
    fluxBar(ctx, 880, 380, 110, phi / (0.60 * AREA), 'Φ through the lower coil', sci(phi, 1) + ' T·m²');
    label(ctx, 'the battery and the switch', at(R0, 250 * RAD)[0] - 28, 214, { side: 'left', size: 20, color: PAL.ink });
    label(ctx, core.value === 'iron' ? 'the iron ring' : 'no iron: the coils stand in air', CX - R0 - TUBE, CY, { side: 'left', size: 20, color: PAL.ink });
    label(ctx, 'the coil the meter reads, ' + fmt(N.v, 0) + (N.v === 1 ? ' turn' : ' turns'), at(R0, 130 * RAD)[0], at(R0, 130 * RAD)[1], { side: 'left', size: 20, gap: 130, color: PAL.ink });
    if (b > 0.004) text(ctx, 'B = ' + fmt(b, 2) + ' T in the ring', CX, CY, C('magnetic-field'), { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    const head = t < T_ON ? 'The switch is open, there is no field in the ring, and the needle sits at zero.'
      : Math.abs(db) > 0.06
        ? `The switch has just ${closed ? 'closed' : 'opened'}, the field in the ring is ${closed ? 'rising' : 'dying away'}, and the needle swings to the ${closed ? 'right' : 'left'}.`
        : closed
          ? `The switch has been closed for ${fmt(t - T_ON, 1)} s, the field in the ring is steady at ${fmt(b, 2)} T, and the needle has fallen back to zero.`
          : `The switch has been open for ${fmt(t - T_OFF, 1)} s, the field is gone, and the needle is back at zero.`;
    topline(ctx, head);
    readout(d.readout,
      `\\kPhi = \\kBmag A = (${fmt(k() * b, 3)}\\ \\text{T})(0.012\\ \\text{m}^2) = ${sciTex(phi, 2)}\\ \\text{T}\\cdot\\text{m}^2`,
      `The lower coil encloses 0.012 m² of the ring, and the meter answers the change in this flux and nothing else: while the switch stays closed the field is as strong as it ever gets and the needle stands at zero. ${core.value === 'iron' ? 'The iron ring carries almost the whole of the upper coil’s field round to the lower coil.' : 'With the iron taken away, only about a twenty-fifth of the upper coil’s field reaches the lower coil, and the swing is that much smaller.'} ${N.v === 1 ? 'The lower coil has a single turn here; give it more and each of them carries the same flux, so the emf grows with the number of turns.' : `Each of the ${fmt(N.v, 0)} turns of the lower coil carries the same flux, so the emf grows with the number of turns.`}`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 23.4 · sim-magnet-coil · moving · flat
   A bar magnet pushed into a coil and pulled out again. The book draws five
   stills of this one experiment and they are five states of this figure: the
   pole that faces the coil is a choice, what moves is a choice, and the speed
   is a slider, so the reader can reach every stage the book prints and the ones
   between. The magnet's field is drawn as a bundle of lines out of its pole
   that spread as they go, so the field at the coil falls as B/(1 + z/0.05)² and
   the lines the coil catches fall with it; the coil is 0.0050 m² in two turns
   and the magnet travels 0.12 m. The needle is set on one fixed scale taken
   from the sliders' maxima.
===================================================================== */
(function () {
  const d = sim('sim-magnet-coil', 640);
  const v = ctl(d.controls, { label: '\\kv', cls: 'velocity', min: 0.05, max: 1.20, step: 0.05, value: 0.40, unit: 'm/s', dec: 2, aria: 'the speed the magnet or the coil is moved at', onInput: () => cy.reset() });
  const Bs = ctl(d.controls, { label: '\\kBmag', cls: 'magnetic-field', min: 0.02, max: 0.20, step: 0.01, value: 0.08, unit: 'T', dec: 2, aria: 'the field at the face of the magnet’s pole' });
  const pole = choice(d.controls, { label: '\\text{the pole facing the coil}', options: [{ value: 'n', label: 'north' }, { value: 's', label: 'south' }], value: 'n', aria: 'which pole of the magnet faces the coil' });
  const mover = choice(d.controls, { label: '\\text{what moves}', options: [{ value: 'magnet', label: 'the magnet' }, { value: 'coil', label: 'the coil' }, { value: 'none', label: 'neither' }], value: 'magnet', aria: 'whether the magnet moves, the coil moves, or both are held still', onInput: () => cy.reset() });
  const LAB = choice(d.controls, { label: '\\text{Labels}', options: [{ value: 'off', label: 'off' }, { value: 'on', label: 'on' }], value: 'off', aria: 'the names of the parts of the drawing' });

  const ZM = 0.12, ZS = 0.05, AC = 0.0050, NL = 2, PX = 2500, CY = 330, APER = 100, ML = 180;
  const spread = (z) => 1 + z / ZS;
  const Bat = (z) => Bs.v / (spread(z) * spread(z));
  const sign = () => (pole.value === 'n' ? 1 : -1);
  const dphidz = (z) => -sign() * ((2 * Bs.v * AC) / (ZS * Math.pow(spread(z), 3)));
  const FULL = NL * ((2 * 0.20 * AC) / (ZS * Math.pow(spread(ZM / 2), 3))) * 1.20;   /* a middling emf at the greatest settings */
  const still = () => mover.value === 'none';
  const leg = () => ZM / v.v;
  const cy = cycle(() => (still() ? 3 : 2 * leg()), 0.9);
  const at = (t) => {
    if (still()) return { z: 0.045, dz: 0 };
    const L = leg();
    return t < L ? { z: ZM * (1 - t / L), dz: -v.v } : { z: ZM * ((t - L) / L), dz: v.v };
  };

  function draw() {
    const t = cy.now(), st = at(t), { ctx } = begin(d.c);
    const zpx = st.z * PX;
    const coilX = mover.value === 'coil' ? 400 + zpx : 700;
    const poleX = mover.value === 'coil' ? 420 : coilX + 20 - zpx;
    const phi = sign() * Bat(st.z) * AC, emf = -NL * dphidz(st.z) * st.dz, r = soft((2.2 * emf) / FULL);
    const on = LAB.value === 'on';

    /* the magnet's field: a bundle of lines out of the pole, spreading as they go */
    const n = Math.max(3, Math.round(3 + (8 * Bs.v) / 0.20)), BAND = 190;
    let caught = 0;
    for (let i = 0; i < n; i++) {
      const off = n === 1 ? 0 : -80 + (160 * i) / (n - 1);
      const xp = poleX;
      const yAt = (x) => CY + off * (1 + Math.max(0, x - xp) / 125);
      /* a line is drawn until it leaves the band the figure keeps for it */
      const reach = Math.abs(off) < 1 ? 1e4 : 125 * (BAND / Math.abs(off) - 1);
      const xe = Math.min(coilX + 150, xp + reach);
      const inside = Math.abs(off * (1 + Math.max(0, coilX - xp) / 125)) < APER;
      if (inside) caught++;
      const out = sign() > 0;
      arrow(ctx, out ? xp : xe, out ? yAt(xp) : yAt(xe), out ? xe : xp, out ? yAt(xe) : yAt(xp), alpha(C('magnetic-field'), 0.55), 3);
      if (inside) line(ctx, coilX - 46, yAt(coilX - 46), coilX + 46, yAt(coilX + 46), C('magnetic-flux'), 6);
    }
    /* the magnet, its poles lettered */
    const mx = poleX - ML;
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.rect(mx, CY - 30, ML, 60); ctx.fill(); ctx.stroke(); ctx.restore();
    line(ctx, mx + ML / 2, CY - 30, mx + ML / 2, CY + 30, PAL.ink, 2);
    text(ctx, sign() > 0 ? 'S' : 'N', mx + ML / 4, CY, PAL.ink, { size: 24, weight: 600, align: 'center' });
    text(ctx, sign() > 0 ? 'N' : 'S', mx + (3 * ML) / 4, CY, PAL.ink, { size: 24, weight: 600, align: 'center' });
    /* the coil: two turns seen from the side, drawn over the magnet where it is inside */
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 6;
    [-16, 16].forEach((dx) => { ctx.beginPath(); ctx.ellipse(coilX + dx, CY, 26, APER, 0, 0, TAU); ctx.stroke(); });
    ctx.restore();
    line(ctx, coilX + 16, CY + APER, coilX + 16, 556, PAL.ink, 3); line(ctx, coilX + 16, 556, 1106, 556, PAL.ink, 3); line(ctx, 1106, 556, 1106, 492, PAL.ink, 3);
    line(ctx, coilX - 16, CY + APER, coilX - 16, 598, PAL.ink, 3); line(ctx, coilX - 16, 598, 1194, 598, PAL.ink, 3); line(ctx, 1194, 598, 1194, 492, PAL.ink, 3);
    /* the hand on whatever moves, and the way it is going */
    if (!still()) {
      const onCoil = mover.value === 'coil';
      fist(ctx, onCoil ? coilX + 26 : mx, onCoil ? CY - APER - 24 : CY, onCoil ? 0 : -1, onCoil ? -1 : 0, 0.9, PAL.ink);
      const way = onCoil ? (st.dz < 0 ? -1 : 1) : (st.dz < 0 ? 1 : -1);
      const ax = onCoil ? coilX + 150 : mx + ML / 2, ay = onCoil ? CY - APER - 96 : CY - 62;
      arrow(ctx, ax - way * 46, ay, ax + way * 46, ay, C('velocity'), 5);
      text(ctx, fmt(v.v, 2) + ' m/s', ax, ay - 26, C('velocity'), { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    }
    meter(ctx, 1150, 462, 95, r, 'induced emf');
    fluxBar(ctx, 950, 300, 100, phi / (0.20 * AC), 'Φ through the coil', sci(phi, 1) + ' T·m²');
    if (on) {
      label(ctx, 'the bar magnet', mx + ML / 2, CY + 34, { side: 'below', size: 20, color: PAL.ink });
      label(ctx, 'the coil, two turns', coilX, CY - APER - 6, { side: 'above', size: 20, color: PAL.ink });
      label(ctx, 'the field of the magnet', poleX + 130, CY + 92, { side: 'below', size: 20, color: C('magnetic-field') });
      label(ctx, 'the lines the coil catches', coilX, CY + APER + 14, { side: 'below', size: 20, color: C('magnetic-flux') });
    }
    const head = still()
      ? 'Nothing is moving, the flux through the coil is as steady as the magnet is, and the needle sits at zero however strong the magnet is.'
      : `${mover.value === 'coil' ? `The coil is moving ${st.dz < 0 ? 'onto' : 'off'} the magnet` : `The magnet is moving ${st.dz < 0 ? 'into' : 'out of'} the coil`} at ${fmt(v.v, 2)} m/s, the flux through the coil is ${st.dz < 0 ? 'growing' : 'falling'}, and the needle stands to the ${r > 0 ? 'right' : 'left'}.`;
    topline(ctx, head);
    readout(d.readout,
      `\\kPhi = \\kBmag A = (${fmt(Bat(st.z), 4)}\\ \\text{T})(0.0050\\ \\text{m}^2) = ${sciTex(Math.abs(phi), 2)}\\ \\text{T}\\cdot\\text{m}^2\\ \\text{, with the coil}\\ ${fmt(st.z * 100, 1)}\\ \\text{cm from the pole}`,
      `The coil catches ${caught} of the ${n} lines drawn, and that count is the flux: bring the magnet up and the lines crowd into it, take it away and they spread past it. The needle answers how fast the flux is changing and not how much of it there is, which is why it falls back to zero the moment the motion stops, and why it changes ends when the magnet is pulled out instead of pushed in, or turned round so that the other pole faces the coil. Moving the coil onto a magnet held still does exactly what moving the magnet does: it is the relative motion that counts.`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   FIGURE 23.5 · sim-rotating-coil · moving · flat
   The coil of a generator turned in the field of a magnet, seen from above, so
   that the angle between the field and the perpendicular to the coil is drawn
   full size and the width of field the coil catches foreshortens as cos θ. The
   field and the area never change here; only the angle runs round, and that is
   enough to carry the flux from its greatest value through zero to its greatest
   value the other way. The sinusoid a generator draws belongs to 23.5, where
   the book draws it; this figure carries the flux on a bar and the emf on the
   needle. The rings and brushes on the axle are drawn beneath, seen from the
   side, as the book draws them.
===================================================================== */
(function () {
  const d = sim('sim-rotating-coil', 700);
  const B = ctl(d.controls, { label: '\\kBmag', cls: 'magnetic-field', min: 0.10, max: 0.40, step: 0.05, value: 0.20, unit: 'T', dec: 2, aria: 'the field between the poles of the magnet' });
  const w = ctl(d.controls, { label: '\\kw', cls: 'angular-rate', min: 1, max: 12, step: 0.5, value: 4, unit: 'rad/s', dec: 1, aria: 'the rate the coil is turned at', onInput: () => cy.reset() });
  const A = ctl(d.controls, { label: 'A', cls: '', min: 0.04, max: 0.16, step: 0.01, value: 0.08, unit: 'm²', dec: 2, aria: 'the area of the coil' });
  const LAB = choice(d.controls, { label: '\\text{Labels}', options: [{ value: 'off', label: 'off' }, { value: 'on', label: 'on' }], value: 'off', aria: 'the names of the coil and of the perpendicular to it' });

  const CX = 520, CY = 320, FULL = 0.30, PHI_MAX = 0.40 * 0.16, RY = 540;
  const cy = cycle(() => TAU / w.v, 0);
  const half = () => 50 + 95 * Math.sqrt(A.v / 0.16);

  function poles(ctx) {
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
    [[-1, 'N'], [1, 'S']].forEach(([s, name]) => {
      const x = CX + s * 300;
      ctx.beginPath(); ctx.rect(x - 46, CY - 166, 92, 332); ctx.fill(); ctx.stroke();
      text(ctx, name, x, CY, PAL.ink, { size: 26, weight: 600, align: 'center' });
    });
    ctx.restore();
  }
  function rings(ctx) {
    text(ctx, 'the rings and brushes on the axle, seen from the side', CX, 668, PAL.muted, { size: 17, align: 'center' });
    line(ctx, CX, RY - 40, CX, RY + 48, PAL.ink, 4);
    [0, 28].forEach((dy, i) => {
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.ellipse(CX, RY + dy, 26, 9, 0, 0, TAU); ctx.stroke(); ctx.restore();
      const s = i ? -1 : 1, x = CX + s * 66, xe = i ? 1118 : 1182;
      line(ctx, CX + s * 26, RY + dy, x, RY + dy, PAL.ink, 5);
      line(ctx, x, RY + dy, x, 636, PAL.ink, 3); line(ctx, x, 636, xe, 636, PAL.ink, 3); line(ctx, xe, 636, xe, 508, PAL.ink, 3);
    });
  }
  function draw() {
    const t = cy.now(), th = (w.v * t) % TAU, { ctx } = begin(d.c);
    const sgn = th > Math.PI ? th - TAU : th;         /* the angle the book measures, never more than 180° */
    const deg = Math.abs(sgn) / RAD;
    const L = half(), c = Math.cos(th), s = Math.sin(th);
    const phi = B.v * A.v * c, emf = B.v * A.v * w.v * s, r = soft((2.2 * emf) / FULL);
    poles(ctx);
    const catchH = L * Math.abs(c);
    for (let i = -5; i <= 5; i++) {
      const y = CY + i * 30;
      arrow(ctx, CX - 250, y, CX + 250, y, alpha(C('magnetic-field'), 0.5), 3);
      if (Math.abs(i * 30) < catchH) line(ctx, CX - 120, y, CX + 120, y, C('magnetic-flux'), 6);
    }
    const ex = s * L, ey = c * L;
    line(ctx, CX - ex, CY - ey, CX + ex, CY + ey, PAL.ink, 9);
    dot(ctx, CX + ex, CY + ey, PAL.ink, true, 10); dot(ctx, CX - ex, CY - ey, PAL.ink, true, 10);
    const nx = c * 130, ny = -s * 130;
    line(ctx, CX, CY, CX + nx * 0.72, CY + ny * 0.72, PAL.muted, 3, [10, 8]);
    arrow(ctx, CX + nx * 0.7, CY + ny * 0.7, CX + nx, CY + ny, PAL.muted, 3);
    angleArc(ctx, { x: CX, y: CY }, 78, 0, sgn, 'θ = ' + fmt(deg, 0) + '°');
    dot(ctx, CX, CY, PAL.ink, true, 7);
    line(ctx, CX, CY, CX, RY - 40, alpha(PAL.ink, 0.35), 2, [6, 8]);
    rings(ctx);
    meter(ctx, 1150, 478, 95, r, 'induced emf');
    fluxBar(ctx, 940, 300, 104, phi / PHI_MAX, 'Φ through the coil', sci(phi, 1) + ' T·m²');
    text(ctx, 'seen from above', 210, 120, PAL.muted, { size: 17, align: 'center' });
    label(ctx, 'B between the poles', CX, CY - 172, { side: 'above', size: 20, color: C('magnetic-field'), leader: false });
    if (LAB.value === 'on') {
      label(ctx, 'the coil, edge on', CX + ex, CY + ey, { side: ey < 0 ? 'above' : 'below', size: 20, color: PAL.ink });
      label(ctx, 'the perpendicular to the coil', CX + nx, CY + ny, { side: ny < 0 ? 'above' : 'below', size: 20, color: PAL.muted });
    }
    topline(ctx, `The perpendicular to the coil stands at ${fmt(deg, 0)}° to the field, so the flux through the coil is ${sci(phi, 1)} T·m² and ${Math.abs(s) < 0.06 ? 'at a turning point' : s > 0 ? 'falling' : 'growing'}.`);
    readout(d.readout,
      `\\kPhi = \\kBmag A\\cos\\theta = (${fmt(B.v, 2)}\\ \\text{T})(${fmt(A.v, 2)}\\ \\text{m}^2)\\cos ${fmt(deg, 0)}^\\circ = ${sciTex(phi, 2)}\\ \\text{T}\\cdot\\text{m}^2`,
      `Neither the field nor the area changes as the coil turns: the angle alone does the work, and the flux follows its cosine. The needle stands at zero twice a turn, at the two angles where the coil faces the field squarely and the flux is greatest, and swings furthest as the coil passes edge on, where the flux is zero and changing fastest. Turn the coil faster and every swing grows, which is what the section means when it says the emf depends on the rotation rate.`);
  }
  register(d.fig, {
    update: (dt) => { if (cy.tau >= cy.period()) { cy.tau = 0; cy.wait = 0; } cy.step(dt, () => 1); },
    draw,
  });
})();

/* =====================================================================
   FIGURE 23.6 · sim-flux-angle · still · a full 3D scene (root rule 28.3)
   A square loop of area A in a uniform field, the field drawn as parallel lines
   through the space around it and coloured in the flux hue where they cross the
   loop, so the flux is the count of lines the loop catches. What is taught is an
   arrangement in space — a plane surface and a direction in the space round it —
   and a flat drawing has to lie about one of the two. The orbit is held from 8°
   below the plane the field lies in to 85° above it, since the scene is
   symmetric about that plane and a view from underneath only repeats one from
   above; the yaw is free, since there is no ground and no front to the scene.
   Still: an orientation is a state, so it registers no cycle and takes no
   transport. The defaults are the numbers of the section's second test-prep
   item, 0.20 m² at 60° to a 1.5 mT field. Where WebGL is missing the canvas
   draws the book's own side view instead.
===================================================================== */
(function () {
  const THREE = window.THREE;
  const glOk = () => { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch (e) { return false; } };
  const hasGL = !!(THREE && glOk());
  const d = sim('sim-flux-angle', hasGL ? 0 : 620);
  const B = ctl(d.controls, { label: '\\kBmag', cls: 'magnetic-field', min: 0.5, max: 3.0, step: 0.1, value: 1.5, unit: 'mT', dec: 1, aria: 'the strength of the uniform magnetic field' });
  const A = ctl(d.controls, { label: 'A', cls: '', min: 0.05, max: 0.40, step: 0.01, value: 0.20, unit: 'm²', dec: 2, aria: 'the area of the loop' });
  const th = ctl(d.controls, { label: '\\theta', cls: '', min: 0, max: 90, step: 1, value: 60, unit: '°', dec: 0, aria: 'the angle between the field and the perpendicular to the loop' });

  const U = 3.5;                                   /* scene units to the metre, so 0.40 m² fills the frame */
  const REG = 1.15, ZEND = 2.2;                    /* the lines cover a square of side 2 REG and run from −ZEND to ZEND */
  const state = () => {
    const t = th.v * RAD, c = th.v >= 90 ? 0 : Math.cos(t), a = (Math.sqrt(A.v) * U) / 2;   /* a right angle catches exactly nothing */
    const B_T = B.v * 1e-3, phi = B_T * A.v * c;
    const n = clamp(Math.round(2 + (B.v / 3.0) * 5), 3, 7);   /* the lines are drawn more closely as the field grows */
    const rows = [];
    let caught = 0, face = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const x = -REG + (2 * REG * i) / (n - 1);
        const y = -REG + (2 * REG * j) / (n - 1);
        const hit = c > 0.02 && Math.abs(x) < a * c && Math.abs(y) < a;
        if (hit) caught++;
        if (Math.abs(x) < a && Math.abs(y) < a) face++;      /* what the same loop would catch face on */
        rows.push({ x, y, hit, z: hit ? -x * Math.tan(t) : 0 });
      }
    }
    return { t, c, a, B_T, phi, n: n * n, caught, face, rows };
  };
  const word = () => (th.v >= 89 ? 'the loop lies along the field and catches nothing at all' : th.v <= 1 ? 'the loop faces the field squarely and catches all the field its area can hold' : `the loop catches ${fmt(Math.cos(th.v * RAD) * 100, 0)} per cent of what it would catch face on`);

  /* ---------- the scene ---------- */
  let V = null, S = null, g3 = null, sig = '';
  const paint = [];
  const pmat = (col, extra) => { const m = F.mesh.mat(col(), extra); paint.push({ m, col }); return m; };
  const inkC = () => PAL.ink, mutedC = () => PAL.muted, BC = () => C('magnetic-field'), FC = () => C('magnetic-flux');
  /* an arrow of shaft radius r that keeps its materials, so a change of theme repaints it */
  function vec(g, a, b, r, col, name) {
    const A3 = new THREE.Vector3(a[0], a[1], a[2]), B3 = new THREE.Vector3(b[0], b[1], b[2]);
    const dd = B3.clone().sub(A3), L = dd.length(), hl = Math.min(0.34, L * 0.45), u = dd.clone().normalize();
    const base = B3.clone().sub(u.clone().multiplyScalar(hl));
    const shaft = new THREE.Mesh(F.mesh.geo().cyl, pmat(col)); shaft.scale.set(r, 1, r);
    F.mesh.setStick(shaft, a, base.toArray()); g.add(shaft);
    const cone = new THREE.Mesh(F.mesh.geo().cone, pmat(col));
    cone.position.copy(base).add(u.clone().multiplyScalar(hl / 2));
    cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), u);
    cone.scale.set(r * 3.2, hl, r * 3.2); g.add(cone);
    if (name) { V.pickable(shaft, name); V.pickable(cone, name); }
  }
  function build() {
    if (!V || !V.scene || !g3) return;
    V.clear(); paint.length = 0; sig = '';
    S = { lines: new THREE.Group(), loop: new THREE.Group(), arc: new THREE.Group() };
    g3.add(S.lines); g3.add(S.loop); g3.add(S.arc);
    S.plate = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 0.02), pmat(FC, { transparent: true, opacity: 0.18 }));
    S.loop.add(S.plate); V.pickable(S.plate, 'the area A the flux is counted through');
    S.edges = [0, 1, 2, 3].map(() => {
      const m = new THREE.Mesh(F.mesh.geo().cyl, pmat(inkC)); m.scale.set(0.028, 1, 0.028);
      S.loop.add(m); V.pickable(m, 'the loop that bounds the area'); return m;
    });
    vec(S.loop, [0, 0, 0], [0, 0, 1.85], 0.032, mutedC, 'the perpendicular to the area, which the angle θ is measured from');
    vec(g3, [0, 0, -2.0], [0, 0, 2.0], 0.05, BC, 'B, the magnetic field, the same everywhere in the space');
    S.lab = {
      B: V.label('B', [0, 0, 2.05], g3, 12),
      th: V.label('θ', [0, 0, 0], g3, 0),
      n: V.label('the perpendicular', [0, 0, 1.85], S.loop, 12),
      A: V.label('A', [0, 0, 0], S.loop, 0),
    };
    V.invalidate();
  }
  /* the field lines, rebuilt when their number, the tilt or the area changes */
  function rebuildLines(st) {
    const key = `${st.n}|${th.v}|${A.v}`;
    if (key === sig) return;
    sig = key;
    S.lines.children.forEach((c) => { c.geometry?.dispose(); c.material?.dispose(); });
    S.lines.clear();
    const faint = (o) => { o.material.transparent = true; o.material.opacity = 0.5; return o; };
    st.rows.forEach((L) => {
      faint(F.mesh.polyline(S.lines, [[L.x, L.y, -ZEND], [L.x, L.y, ZEND]], C('magnetic-field')));
      const cone = new THREE.Mesh(F.mesh.geo().cone, F.mesh.mat(C('magnetic-field'), { transparent: true, opacity: 0.5 }));
      cone.position.set(L.x, L.y, ZEND - 0.12);
      cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 1));
      cone.scale.set(0.055, 0.22, 0.055); S.lines.add(cone);
      if (L.hit) {
        F.mesh.polyline(S.lines, [[L.x, L.y, L.z - 0.46], [L.x, L.y, L.z + 0.46]], C('magnetic-flux'));
        F.mesh.sphere(S.lines, [L.x, L.y, L.z], 0.06, C('magnetic-flux'));
      }
    });
  }
  function apply(st) {
    if (!S) return;
    paint.forEach((p) => { try { p.m.color.set(p.col()); } catch (e) { /* a palette value the renderer cannot read is left as it was */ } });
    S.loop.rotation.y = st.t;
    S.plate.scale.set(2 * st.a, 2 * st.a, 1);
    const a = st.a, corners = [[-a, -a], [a, -a], [a, a], [-a, a]];
    corners.forEach((p, i) => {
      const q = corners[(i + 1) % 4];
      F.mesh.setStick(S.edges[i], [p[0], p[1], 0], [q[0], q[1], 0]);
    });
    rebuildLines(st);
    S.arc.children.forEach((c) => { c.geometry?.dispose(); c.material?.dispose(); });
    S.arc.clear();
    const pt = th.v > 3 ? F.mesh.arc(S.arc, [0, 0, 1], [Math.sin(st.t), 0, Math.cos(st.t)], 1.5, [0, 0, 0], PAL.muted) : [1.1, 0, 1.1];
    V.move(S.lab.th, pt);
    S.lab.th.textContent = 'θ = ' + fmt(th.v, 0) + '°'; S.lab.th.hidden = th.v <= 3;
    S.lab.A.textContent = 'A = ' + fmt(A.v, 2) + ' m²';
    V.move(S.lab.A, [-a * 0.86, a * 0.88, 0]);
    S.lab.B.style.color = C('magnetic-field'); S.lab.A.style.color = C('magnetic-flux');
    S.lab.th.style.color = PAL.muted; S.lab.n.style.color = PAL.muted;
    V.headline(`A ${fmt(B.v, 1)} mT field through ${fmt(A.v, 2)} m² at ${fmt(th.v, 0)}° to the perpendicular gives a flux of ${sci(st.phi, 1)} T·m²: ${word()}.`);
    V.invalidate();
  }

  /* ---------- the book's own side view, where there is no WebGL for the scene ---------- */
  function drawFlat(ctx, st) {
    const cx = 620, cy = 330, a = 155, K = 170;
    const nx = Math.cos(st.t), ny = -Math.sin(st.t);          /* the perpendicular to the loop */
    const lx = Math.sin(st.t), ly = Math.cos(st.t);           /* the loop, seen edge on */
    for (let i = -3; i <= 3; i++) {
      if (i === 0) continue;
      arrow(ctx, cx - 280, cy + i * 46, cx + 280, cy + i * 46, alpha(C('magnetic-field'), 0.4), 3);
    }
    line(ctx, cx - lx * a, cy - ly * a, cx + lx * a, cy + ly * a, PAL.ink, 9);
    line(ctx, cx, cy, cx + nx * K * 0.72, cy + ny * K * 0.72, PAL.muted, 3, [10, 8]);
    arrow(ctx, cx + nx * K * 0.7, cy + ny * K * 0.7, cx + nx * K, cy + ny * K, PAL.muted, 3);
    arrow(ctx, cx - 280, cy, cx + 280, cy, C('magnetic-field'), 5);
    const k = K * st.c;
    arrow(ctx, cx, cy, cx + nx * k, cy + ny * k, C('magnetic-flux'), 5);
    angleArc(ctx, { x: cx, y: cy }, 84, 0, st.t, 'θ = ' + fmt(th.v, 0) + '°');
    text(ctx, 'B = ' + fmt(B.v, 1) + ' mT', cx + 286, cy, C('magnetic-field'), { size: 21, weight: 600, align: 'left', bg: PAL.panel });
    label(ctx, 'B cos θ, the part that goes through', cx + nx * k, cy + ny * k, { side: 'right', size: 20, color: C('magnetic-flux') });
    label(ctx, 'the perpendicular to the area', cx + nx * K, cy + ny * K, { side: 'above', size: 20, color: PAL.muted });
    label(ctx, 'A = ' + fmt(A.v, 2) + ' m², seen edge on', cx - lx * a, cy - ly * a, { side: 'left', size: 20, color: PAL.ink });
    text(ctx, 'This browser cannot turn the scene, so the loop is drawn edge on from the book’s own viewpoint,', 700, 540, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'with the component of the field along the perpendicular, which is the part the area catches.', 700, 564, PAL.muted, { size: 17, align: 'center' });
    topline(ctx, `A ${fmt(B.v, 1)} mT field through ${fmt(A.v, 2)} m² at ${fmt(th.v, 0)}° to the perpendicular gives a flux of ${sci(st.phi, 1)} T·m²: ${word()}.`);
  }

  function draw() {
    const st = state();
    if (hasGL && S) apply(st);
    if (!hasGL && d.c) { const { ctx } = begin(d.c); drawFlat(ctx, st); }
    readout(d.readout,
      `\\kPhi = \\kBmag A\\cos\\theta = (${sciTex(st.B_T, 2)}\\ \\text{T})(${fmt(A.v, 2)}\\ \\text{m}^2)\\cos ${fmt(th.v, 0)}^\\circ = ${sciTex(st.phi, 2)}\\ \\text{T}\\cdot\\text{m}^2`,
      `The same flux is Φ = B⊥A, the area times the part of the field that goes straight through it, and here B⊥ = B cos θ = ${sci(st.B_T * st.c, 2)} T. ${hasGL ? `The loop catches ${st.caught} of the lines drawn, where face on it would catch ${st.face} of them, and turning it to 90° leaves it catching none at all while the field is as strong as it ever was. The lines are drawn more closely as the field is made stronger.` : 'Turning the loop to 90° leaves it catching nothing at all, while the field is as strong as it ever was.'} The figure opens on the coil of the section’s second test-prep item, 0.20 m² at 60° to a field of 1.5 mT.`);
  }

  if (hasGL) {
    V = F.view3d(d.stage, {
      h: 620, dist: 7.0, tilt: 0.32, spin: 'off',
      views: [{ label: 'the book’s view', yaw: -0.55, pitch: 0.32 }, { label: 'along the field', yaw: 0, pitch: 0 }, { label: 'from above', yaw: 0, pitch: 1.40 }],
      pitch: [-0.14, 1.48], yaw: 'free', zoomMin: 0.7, zoomMax: 2.4,
    });
    if (!V.scene) V = null;
    else { g3 = V.part(0); V.setView(-0.55, 0.32); }
  }
  if (V) { try { build(); } catch (e) { console.error('sim-flux-angle: the scene could not be built', e); S = null; } }
  register(d.fig, { update: () => {}, draw });
})();

};
