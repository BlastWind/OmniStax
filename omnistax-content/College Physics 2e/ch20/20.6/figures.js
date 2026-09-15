/* Figures for section 20.6 Electric Hazards and the Human Body. Boots against the
   section's text article.

   Four figures, every one of them still. A short that has been made, a fuse that
   holds or does not, a body of a stated resistance touching a wire of a stated
   voltage and a sensitivity curve of the nerves are all standing states: each
   answers its sliders, none has a clock in it, so none registers a cycle and none
   takes the app's transport (rule 14).

   The page binds current, voltage, resistance, power and frequency, the bindings
   `ch20/COLOR.md` predicts for 20.6. Wires, schematics, the fuse, the bimetallic
   strip, the person and every frame are ink; the seven bands of Table 20.3, which
   must be told apart as instances and carry no type, are `F.cat(i)`. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['20.6'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, select, register, begin, line, arrow, dot, text, headline, hbracket, strip, fixed, silhouette, fist, axes, curve, scale, label } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- pieces of a schematic, drawn in ink ---------- */
/* a resistor as the zigzag the book draws, laid along the segment from a to b */
function resistor(ctx, x1, y1, x2, y2, color) {
  const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy) || 1, ux = dx / L, uy = dy / L, nx = -uy, ny = ux;
  const lead = Math.max(10, (L - 96) / 2), zig = L - 2 * lead, n = 6, amp = 15;
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 4; ctx.lineJoin = 'round'; ctx.beginPath();
  ctx.moveTo(x1, y1); ctx.lineTo(x1 + ux * lead, y1 + uy * lead);
  for (let i = 0; i < n; i++) {
    const t = lead + (zig * (i + 0.5)) / n, s = i % 2 ? -1 : 1;
    ctx.lineTo(x1 + ux * t + nx * amp * s, y1 + uy * t + ny * amp * s);
  }
  ctx.lineTo(x1 + ux * (L - lead), y1 + uy * (L - lead)); ctx.lineTo(x2, y2); ctx.stroke(); ctx.restore();
}
/* an alternating-voltage source: a circle with one period of a sine inside it */
function acSource(ctx, x, y, r, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 4; ctx.fillStyle = PAL.panel;
  ctx.beginPath(); ctx.arc(x, y, r, 0, 2 * Math.PI); ctx.fill(); ctx.stroke();
  ctx.lineWidth = 3.5; ctx.beginPath();
  for (let i = 0; i <= 40; i++) { const t = i / 40, px = x - r * 0.62 + t * r * 1.24, py = y - Math.sin(t * 2 * Math.PI) * r * 0.42; if (i) ctx.lineTo(px, py); else ctx.moveTo(px, py); }
  ctx.stroke(); ctx.restore();
}
/* an arrowhead sitting on a wire at (x, y), pointing the way (ux, uy) runs */
function flowHead(ctx, x, y, ux, uy, color) { arrow(ctx, x - ux * 26, y - uy * 26, x + ux * 10, y + uy * 10, color, 4.5); }
/* a coil spring along a horizontal run, drawn in ink */
function coil(ctx, x1, x2, y, color, turns) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(x1, y);
  const n = turns * 8;
  for (let i = 1; i <= n; i++) { const t = i / n; ctx.lineTo(x1 + (x2 - x1) * t, y + Math.sin(t * turns * 2 * Math.PI) * 14); }
  ctx.lineTo(x2, y); ctx.stroke(); ctx.restore();
}
/* a small burst of light where two conductors touch or a contact arcs over, in ink */
function spark(ctx, x, y, r, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.beginPath();
  for (let i = 0; i < 8; i++) { const a = (i / 8) * 2 * Math.PI, k = i % 2 ? 0.5 : 1; ctx.moveTo(x + r * 0.3 * Math.cos(a), y + r * 0.3 * Math.sin(a)); ctx.lineTo(x + r * k * Math.cos(a), y + r * k * Math.sin(a)); }
  ctx.stroke(); ctx.restore();
}
/* a number in watts, kilowatts or milliwatts, whichever reads plainly */
function watts(P) {
  if (P >= 1e6) return fmt(P / 1e6, 2) + ' MW';
  if (P >= 1000) return fmt(P / 1000, P >= 1e5 ? 0 : 1) + ' kW';
  if (P >= 1) return fmt(P, P >= 100 ? 0 : 1) + ' W';
  return fmt(P * 1000, 0) + ' mW';
}
/* a current in amperes or milliamperes, whichever reads plainly */
function amps(I) { return I >= 1 ? fmt(I, I >= 100 ? 0 : 2) + ' A' : fmt(I * 1000, I >= 0.01 ? 1 : 3) + ' mA'; }

/* =====================================================================
   FIGURE 20.18: the short circuit. The worn cord of a toaster at the left,
   the schematic of what it has made at the right, and beneath them the two
   powers on one logarithmic scale, because the whole point of the passage is
   that they are orders of magnitude apart. Still: a short that has been made
   is a steady state, and the question is only how much power it dissipates,
   so the figure answers its sliders and registers no cycle.
===================================================================== */
(function () {
  const d = sim('sim-short-circuit', 800);
  const Vs = ctl(d.controls, { label: '\\kV', cls: 'voltage', min: 0, max: 480, step: 10, value: 120, unit: 'V', dec: 0, aria: 'the voltage of the source' });
  const rs = ctl(d.controls, { label: '\\krshort', cls: 'resistance', min: 0.02, max: 2, step: 0.01, value: 0.1, unit: 'Ω', dec: 3, aria: 'the resistance of the short' });
  const Rs = ctl(d.controls, { label: '\\kRes', cls: 'resistance', min: 5, max: 40, step: 1, value: 15, unit: 'Ω', dec: 0, aria: 'the resistance of the toaster' });
  /* 0.1 kW to 1000 kW, four decades, fixed: the short at its default sits at 144 kW
     and the toaster near 1 kW, and no slider setting leaves the frame. */
  const BAR = { l: 250, r: 1300, t: 560, b: 720 }, P0 = -1, P1 = 3;
  const XP = (kW) => BAR.l + ((Math.log10(Math.max(kW, 1e-4)) - P0) / (P1 - P0)) * (BAR.r - BAR.l);
  function draw() {
    const { ctx } = begin(d.c);
    const vc = C('voltage'), rc = C('resistance'), pc = C('power'), ic = C('current');
    const V = Vs.v, r = rs.v, R = Rs.v;
    const Ps = (V * V) / r, Pr = (V * V) / R, Is = V / r, Ir = V / R;

    /* ---- the worn cord, at the left ---- */
    text(ctx, 'the worn cord', 320, 118, PAL.muted, { size: 19, align: 'center' });
    fixed(ctx, 90, 250, 46, 120);                                        /* the wall the cord is plugged into */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.roundRect(136, 282, 54, 56, 8); ctx.fill(); ctx.stroke(); ctx.restore();
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.roundRect(400, 210, 180, 130, 14); ctx.fill(); ctx.stroke();
    ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(430, 224); ctx.lineTo(490, 224); ctx.moveTo(510, 224); ctx.lineTo(556, 224); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(586, 250); ctx.lineTo(604, 250); ctx.lineTo(604, 292); ctx.stroke(); ctx.restore();
    text(ctx, 'the toaster', 490, 366, PAL.ink, { size: 20, align: 'center', weight: 600 });
    /* the two conductors, and the place the insulation has worn through */
    for (const dy of [-9, 9]) line(ctx, 190, 300 + dy, 400, 300 + dy, PAL.ink, 4);
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2;
    ctx.strokeRect(190, 286, 70, 28); ctx.strokeRect(330, 286, 70, 28); ctx.restore();
    line(ctx, 295, 291, 295, 309, PAL.ink, 5);
    spark(ctx, 295, 300, 30, PAL.ink);
    label(ctx, 'the insulation has worn through', 295, 248, { side: 'above', gap: 8, size: 19, color: PAL.ink });

    /* ---- the schematic, at the right ---- */
    text(ctx, 'the circuit it has made', 1000, 118, PAL.muted, { size: 19, align: 'center' });
    const L = 700, Rr = 1310, T = 180, B = 400, BR1 = 950, BR2 = 1180;
    acSource(ctx, L, (T + B) / 2, 36, PAL.ink);
    line(ctx, L, T, L, (T + B) / 2 - 36, PAL.ink, 4); line(ctx, L, (T + B) / 2 + 36, L, B, PAL.ink, 4);
    line(ctx, L, T, Rr, T, PAL.ink, 4); line(ctx, L, B, Rr, B, PAL.ink, 4); line(ctx, Rr, T, Rr, B, PAL.ink, 4);
    resistor(ctx, BR1, T, BR1, B, PAL.ink); resistor(ctx, BR2, T, BR2, B, PAL.ink);
    text(ctx, 'V = ' + fmt(V, 0) + ' V', L, (T + B) / 2 + 74, vc, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'R = ' + fmt(R, 0) + ' Ω', BR1 - 22, (T + B) / 2, rc, { size: 22, weight: 600, align: 'right', bg: PAL.panel });
    text(ctx, 'the toaster', BR1 - 22, (T + B) / 2 + 34, PAL.muted, { size: 18, align: 'right', bg: PAL.panel });
    text(ctx, 'r = ' + fmt(r, 3) + ' Ω', BR2 + 22, (T + B) / 2, rc, { size: 22, weight: 600, align: 'left', bg: PAL.panel });
    text(ctx, 'the short', BR2 + 22, (T + B) / 2 + 34, PAL.muted, { size: 18, align: 'left', bg: PAL.panel });
    if (V > 0) {
      flowHead(ctx, 830, T, 1, 0, ic); flowHead(ctx, BR1, 244, 0, 1, ic); flowHead(ctx, BR2, 244, 0, 1, ic); flowHead(ctx, 830, B, -1, 0, ic);
      text(ctx, amps(Ir), BR1 + 18, 232, ic, { size: 20, weight: 600, align: 'left', bg: PAL.panel });
      text(ctx, amps(Is), BR2 + 18, 232, ic, { size: 20, weight: 600, align: 'left', bg: PAL.panel });
    }

    /* ---- the two powers, on one logarithmic scale ---- */
    text(ctx, 'the power each path dissipates', BAR.l, BAR.t - 46, pc, { size: 20, weight: 600, align: 'left' });
    for (let k = P0; k <= P1; k++) {
      const x = XP(Math.pow(10, k));
      line(ctx, x, BAR.t, x, BAR.b, PAL.rule, 1.5);
      text(ctx, (k < 0 ? fmt(Math.pow(10, k), 1) : fmt(Math.pow(10, k), 0)) + ' kW', x, BAR.b + 28, PAL.muted, { size: 17, align: 'center' });
    }
    line(ctx, BAR.l, BAR.t, BAR.l, BAR.b, PAL.muted, 2); line(ctx, BAR.l, BAR.b, BAR.r, BAR.b, PAL.muted, 2);
    const rows = [{ P: Pr, y: BAR.t + 34, name: 'the toaster' }, { P: Ps, y: BAR.t + 100, name: 'the short' }];
    for (const row of rows) {
      const kW = row.P / 1000, x = Math.min(XP(kW), BAR.r), h = 40;
      if (kW > 0.1) { ctx.save(); ctx.fillStyle = alpha(pc, 0.35); ctx.fillRect(BAR.l, row.y - h / 2, x - BAR.l, h); ctx.restore(); line(ctx, BAR.l, row.y, x, row.y, pc, 5); }
      text(ctx, row.name, BAR.l - 14, row.y, PAL.ink, { size: 20, align: 'right' });
      text(ctx, watts(row.P), Math.max(x + 14, BAR.l + 14), row.y, pc, { size: 21, weight: 600, align: 'left', bg: PAL.panel });
    }

    const times = Pr > 0 ? Ps / Pr : 0;
    headline(ctx, V === 0 ? 'With the source turned off nothing is dissipated anywhere, and the worn cord is harmless.'
      : 'A short of r = ' + fmt(r, 3) + ' Ω across ' + fmt(V, 0) + ' V dissipates ' + watts(Ps) + ', about ' + fmt(times, 0) + ' times what the toaster itself draws.');
    readout(d.readout, `\\kP = \\frac{\\kV^2}{\\krshort} = \\frac{(${fmt(V, 0)}\\ \\text{V})^2}{${fmt(r, 3)}\\ \\Omega} = ${watts(Ps).replace(/ (\w+)$/, '\\ \\text{$1}')}`,
      'The toaster, on its ' + fmt(R, 0) + ' Ω, draws ' + amps(Ir) + ' and dissipates ' + watts(Pr) + ', which is what the appliance is built for. The short draws ' + amps(Is) + ' through the same cord and dissipates ' + watts(Ps) + ' in a few centimeters of wire, and thermal energy delivered at that rate very quickly melts or ignites the materials around it. Should the heating ionize what is there, the resistance of the short falls further and the power rises again.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURES 20.19 and 20.20, folded: the fuse and the circuit breaker, each in
   the circuit it protects and opened up beside it. The book draws the two
   devices under one number and the circuit they sit in under the next, and
   one engine carries both, with the device as a choice (rule 26.1). Still:
   a fuse holds or it does not, and the trip answers the current slider
   rather than a clock.
===================================================================== */
(function () {
  const d = sim('sim-fuse-breaker', 700);
  const kind = choice(d.controls, { label: '\\text{The device}', options: [{ value: 'fuse', label: 'A fuse' }, { value: 'breaker', label: 'A circuit breaker' }], value: 'fuse', aria: 'which device protects the circuit' });
  const rating = choice(d.controls, { label: '\\text{Its rating}', options: [{ value: '15', label: '15 A' }, { value: '20', label: '20 A' }, { value: '30', label: '30 A' }], value: '15', aria: 'the current the device is rated for' });
  const Is = ctl(d.controls, { label: '\\kIcur', cls: 'current', min: 0, max: 40, step: 0.5, value: 10, unit: 'A', dec: 1, aria: 'the current the circuit draws' });
  const Rw = ctl(d.controls, { label: '\\kRw', cls: 'resistance', min: 0.05, max: 3, step: 0.05, value: 2, unit: 'Ω', dec: 3, aria: 'the resistance of the supply wires' });
  const SC = { l: 240, r: 1220, y: 612 };                              /* 0 to 40 A, fixed */
  const XI = (I) => SC.l + (I / 40) * (SC.r - SC.l);
  function draw() {
    const { ctx } = begin(d.c);
    const ic = C('current'), rc = C('resistance'), pc = C('power');
    const I = Is.v, Rww = Rw.v, rate = +rating.value, open = I > rate, P = I * I * Rww;
    const fuse = kind.value === 'fuse';

    /* ---- the circuit, at the left ---- */
    const L = 150, R = 620, T = 200, B = 440, DX = 400;
    text(ctx, 'the circuit it protects', (L + R) / 2, 122, PAL.muted, { size: 19, align: 'center' });
    acSource(ctx, L, (T + B) / 2, 34, PAL.ink);
    line(ctx, L, T, L, (T + B) / 2 - 34, PAL.ink, 5); line(ctx, L, (T + B) / 2 + 34, L, B, PAL.ink, 5);
    line(ctx, L, T, DX - 46, T, PAL.ink, 5); line(ctx, DX + 46, T, R, T, PAL.ink, 5); line(ctx, L, B, R, B, PAL.ink, 5);
    resistor(ctx, R, T + 40, R, B - 40, PAL.ink); line(ctx, R, T, R, T + 40, PAL.ink, 5); line(ctx, R, B - 40, R, B, PAL.ink, 5);
    text(ctx, 'R', R + 22, (T + B) / 2, rc, { size: 24, weight: 600, align: 'left', bg: PAL.panel });
    /* the device in the top rail, drawn as the book's box symbol */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.roundRect(DX - 46, T - 22, 92, 44, 8); ctx.fill(); ctx.stroke(); ctx.restore();
    if (open) { line(ctx, DX - 30, T, DX - 6, T, PAL.ink, 4); line(ctx, DX + 6, T, DX + 30, T, PAL.ink, 4); }
    else line(ctx, DX - 30, T, DX + 30, T, PAL.ink, 4);
    text(ctx, fuse ? 'the fuse' : 'the breaker', DX, T - 48, PAL.ink, { size: 19, align: 'center', bg: PAL.panel });
    hbracket(ctx, L, R, B + 74, rc, 'the supply wires, R_w = ' + fmt(Rww, 3) + ' Ω');
    if (!open && I > 0) { flowHead(ctx, 260, T, 1, 0, ic); flowHead(ctx, 540, T, 1, 0, ic); flowHead(ctx, 400, B, -1, 0, ic); text(ctx, fmt(I, 1) + ' A', 262, T + 40, ic, { size: 21, weight: 600, align: 'center', bg: PAL.panel }); }
    else if (open) text(ctx, 'the circuit is open and no current flows', (L + R) / 2, T + 40, PAL.ink, { size: 19, align: 'center', bg: PAL.panel });

    /* ---- the device, opened up, at the right ---- */
    text(ctx, fuse ? 'inside the fuse' : 'inside the circuit breaker', 1040, 122, PAL.muted, { size: 19, align: 'center' });
    if (fuse) {
      const x1 = 800, x2 = 1300, yc = 290;
      ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.06); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.roundRect(x1 + 60, yc - 54, x2 - x1 - 120, 108, 14); ctx.fill(); ctx.stroke();
      ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.roundRect(x1, yc - 46, 64, 92, 8); ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.roundRect(x2 - 64, yc - 46, 64, 92, 8); ctx.fill(); ctx.stroke(); ctx.restore();
      if (open) {
        line(ctx, x1 + 64, yc, 1010, yc, PAL.ink, 5); line(ctx, 1090, yc, x2 - 64, yc, PAL.ink, 5);
        line(ctx, 1010, yc, 1026, yc - 18, PAL.ink, 5); line(ctx, 1090, yc, 1074, yc + 18, PAL.ink, 5);
        label(ctx, 'the strip has melted through', 1050, yc + 62, { side: 'below', gap: 6, size: 19, color: PAL.ink });
      } else {
        line(ctx, x1 + 64, yc, x2 - 64, yc, PAL.ink, 5);
        label(ctx, 'a metal strip with a low melting point', 1050, yc + 62, { side: 'below', gap: 6, size: 19, color: PAL.ink });
      }
      text(ctx, 'the viewing window', 1050, yc - 92, PAL.muted, { size: 18, align: 'center' });
    } else {
      const yS = open ? 366 : 330, xA = 820, xB = 1210;
      /* the movable strip, the spring that pulls it down, and the contacts at its right end */
      coil(ctx, xA - 40, xA, yS, PAL.muted, 3);
      line(ctx, xA, yS, xB, yS, PAL.ink, 6);
      dot(ctx, xB, yS, PAL.ink, true, 8); dot(ctx, xB + 34, 330, PAL.ink, true, 8);
      line(ctx, xB + 34, 330, xB + 34, 430, PAL.ink, 5);
      if (open) { spark(ctx, xB + 17, 348, 22, PAL.ink); label(ctx, 'the contact has been broken', xB - 60, 442, { side: 'below', gap: 8, size: 19, color: PAL.ink }); }
      else label(ctx, 'the contacts, closed', xB - 60, 442, { side: 'below', gap: 8, size: 19, color: PAL.ink });
      /* the bimetallic strip, standing on the movable strip and bending to the right as it heats */
      const bend = open ? 46 : Math.min(30, (I / rate) * 30), bx = 1010;
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 7; ctx.beginPath(); ctx.moveTo(bx, yS);
      for (let i = 1; i <= 12; i++) { const t = i / 12; ctx.lineTo(bx + bend * t * t, yS - 130 * t); }
      ctx.stroke(); ctx.restore();
      ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.roundRect(bx + 44, yS - 152, 34, 40, 6); ctx.fill(); ctx.stroke(); ctx.restore();
      text(ctx, 'the notch', bx + 61, yS - 178, PAL.muted, { size: 18, align: 'center' });
      label(ctx, 'the bimetallic strip', bx - 20, yS - 80, { side: 'left', gap: 10, size: 19, color: PAL.ink });
      label(ctx, 'the spring', xA - 20, yS, { side: 'left', gap: 8, size: 19, color: PAL.ink });
    }

    /* ---- the current, against the rating ---- */
    line(ctx, SC.l, SC.y, SC.r, SC.y, PAL.muted, 3);
    scale(ctx, XI, 0, 40, 5, SC.y, 'A');
    line(ctx, XI(rate), SC.y - 46, XI(rate), SC.y + 14, PAL.ink, 3, [10, 10]);
    text(ctx, 'the ' + rate + '-A rating', XI(rate), SC.y - 62, PAL.ink, { size: 19, align: 'center', bg: PAL.panel });
    dot(ctx, XI(I), SC.y, ic, true, 11);
    text(ctx, fmt(I, 1) + ' A', XI(I), SC.y - 30, ic, { size: 21, weight: 600, align: 'center', bg: PAL.panel });

    headline(ctx, open
      ? fmt(I, 1) + ' A is more than the ' + rate + '-A rating, so the ' + (fuse ? 'fuse has melted through' : 'breaker has tripped') + ' and the circuit is open.'
      : fmt(I, 1) + ' A through supply wires of ' + fmt(Rww, 3) + ' Ω dissipates ' + watts(P) + ' in the wires alone, and the ' + rate + '-A ' + (fuse ? 'fuse' : 'breaker') + ' still holds.');
    readout(d.readout, `\\kP = \\kIcur^2\\kRw = (${fmt(I, 1)}\\ \\text{A})^2(${fmt(Rww, 3)}\\ \\Omega) = ${watts(P).replace(/ (\w+)$/, '\\ \\text{$1}')}`,
      'A sound cord of 0.100 Ω carrying 10.0 A dissipates only 10.0 W, but a worn cord whose braided wires have broken may have 2.00 Ω, and the same 10.0 A then dissipates 200 W in the cord itself, which is far more than is safe. '
      + (fuse ? 'A fuse holds a metal strip of low melting point across the circuit; an excessive current melts it and breaks the connection permanently, so a blown fuse is replaced.' : 'A circuit breaker is restorable: the bimetallic strip bends as it heats, and at the rated current it reaches the notch, whereupon the spring pulls the movable strip down and parts the contacts. The breaker is then reset by hand.'));
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 20.21: what a shock does. A person touches a live wire, the current
   runs down through the trunk to the earth, and the seven effects Table 20.3
   lists are laid along one logarithmic current scale beneath. The two cases
   the section works, 120 V through dry skin and through wet skin, are two
   settings of the resistance slider. Still: a shock of the stated duration
   is read off a table, and nothing here runs on a clock.
===================================================================== */
(function () {
  const d = sim('sim-shock', 820);
  const Vs = ctl(d.controls, { label: '\\kV', cls: 'voltage', min: 0, max: 480, step: 10, value: 120, unit: 'V', dec: 0, aria: 'the voltage the person touches' });
  /* the detents are the resistances the section names: wet grass, soaking wet, damp skin, dry skin, and a person on a rubber mat */
  const Rs = ctl(d.controls, { label: '\\kRes', cls: 'resistance', min: 1, max: 300, step: 0.5, value: 200, unit: 'kΩ', dec: 1, aria: 'the resistance of the person', detents: [4.5, 10, 100, 200, 300] });
  /* the bands of Table 20.3, in milliamperes, and the scale they are laid on: 0.01 mA to 10 A, six decades, fixed */
  const BANDS = [
    { at: 1, name: 'felt' },
    { at: 5, name: 'past the safe limit' },
    { at: 10, name: 'cannot let go' },
    { at: 50, name: 'pain' },
    { at: 100, name: 'fibrillation' },
    { at: 300, name: 'burns' },
    { at: 6000, name: 'heart and breathing stop' },
  ];
  const SC = { l: 200, r: 1300, y: 648 }, D0 = -2, D1 = 4;
  const XI = (mA) => SC.l + ((Math.log10(Math.max(mA, 1e-4)) - D0) / (D1 - D0)) * (SC.r - SC.l);
  function effect(mA) {
    if (mA < 1) return 'passes unfelt through the body';
    if (mA < 5) return 'is felt, but is within the maximum harmless current';
    if (mA < 10) return 'is past the 5 mA that safety rules take as the maximum allowed shock';
    if (mA < 50) return 'holds the muscles contracted, so that the hand cannot let go';
    if (mA < 100) return 'brings on pain as well as the contraction';
    if (mA < 300) return 'may put the heart into ventricular fibrillation, which is often fatal';
    if (mA < 6000) return 'can burn as well as fibrillate, depending on how concentrated it is';
    return 'contracts the heart and the diaphragm for the duration of the shock, which is how a defibrillator works';
  }
  function draw() {
    const { ctx } = begin(d.c);
    const ic = C('current'), vc = C('voltage'), rc = C('resistance');
    const V = Vs.v, Rk = Rs.v, I = V / (Rk * 1000), mA = I * 1000, held = mA >= 10;

    /* ---- the person, the wire and the path to earth ---- */
    const GY = 470, PX = 520, S = 2, WX = 637, WY = 187;
    strip(ctx, 140, 1000, GY + 10, 44);
    text(ctx, 'the earth, a natural electron sink', 880, GY + 64, PAL.muted, { size: 19, align: 'center' });
    /* the live wire, on two insulators */
    line(ctx, WX - 36, WY, 1000, WY, PAL.ink, 6);
    for (const x of [860, 980]) { line(ctx, x, WY, x, WY - 44, PAL.muted, 4); dot(ctx, x, WY - 50, PAL.muted, true, 8); }
    text(ctx, 'a live wire at V = ' + fmt(V, 0) + ' V', 930, WY - 76, vc, { size: 21, weight: 600, align: 'center', bg: PAL.panel });
    /* the path the current takes through the person, laid down before the body so that the
       drawing of the person is read first and the band runs behind it */
    const PATH = [[WX - 10, WY + 14], [PX + 30, GY - 250], [PX + 6, GY - 150], [PX + 12, GY - 20], [PX + 12, GY + 20]];
    if (I > 0) {
      ctx.save(); ctx.strokeStyle = alpha(ic, 0.34); ctx.lineWidth = 20; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(PATH[0][0], PATH[0][1]);
      for (let i = 1; i < PATH.length; i++) ctx.lineTo(PATH[i][0], PATH[i][1]); ctx.stroke(); ctx.restore();
    }
    /* the person: standing and reaching while the shock can be let go of, braced and gripping once it cannot */
    silhouette(ctx, held
      ? { x: PX, y: GY, s: S, face: 1, pose: 'pull', hands: [{ x: (WX - PX) / S, y: (WY - GY) / S }, { x: (WX - PX) / S - 8, y: (WY - GY) / S + 8 }], color: PAL.ink }
      : { x: PX, y: GY, s: S, face: 1, pose: 'reach', hands: [{ x: (WX - PX) / S, y: (WY - GY) / S }, { x: (WX - PX) / S - 10, y: (WY - GY) / S + 10 }], color: PAL.ink });
    text(ctx, 'R = ' + fmt(Rk, 1) + ' kΩ', PX - 130, GY - 190, rc, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'from hand to feet', PX - 130, GY - 158, PAL.muted, { size: 18, align: 'center' });
    /* the path the current takes: hand, arm, trunk, feet, earth */
    if (I > 0) {
      for (let i = 1; i < PATH.length; i++) {
        const a = PATH[i - 1], b = PATH[i], dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1;
        flowHead(ctx, (a[0] + b[0]) / 2, (a[1] + b[1]) / 2, dx / L, dy / L, ic);
      }
      text(ctx, 'I = ' + amps(I), PX + 96, GY - 176, ic, { size: 22, weight: 600, align: 'left', bg: PAL.panel });
    }
    /* the hand, seen close, once the current holds it shut */
    if (held) {
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 10; ctx.beginPath(); ctx.moveTo(1110, 300); ctx.lineTo(1290, 300); ctx.stroke(); ctx.restore();
      fist(ctx, 1190, 300, -1, 0.35, 1.5, PAL.ink);
      text(ctx, 'the muscles that close the fingers are', 1190, 386, PAL.ink, { size: 19, align: 'center' });
      text(ctx, 'stronger than those that open them', 1190, 412, PAL.ink, { size: 19, align: 'center' });
      text(ctx, 'the hand cannot let go', 1190, 214, PAL.ink, { size: 20, weight: 600, align: 'center' });
    }

    /* ---- the bands of Table 20.3, on a logarithmic current scale ---- */
    text(ctx, 'the effects Table 20.3 lists, by the current through the trunk', SC.l, SC.y - 132, ic, { size: 20, weight: 600, align: 'left' });
    for (let i = 0; i < BANDS.length; i++) {
      const x1 = XI(BANDS[i].at), x2 = i + 1 < BANDS.length ? XI(BANDS[i + 1].at) : SC.r;
      ctx.save(); ctx.fillStyle = alpha(F.cat(i), 0.55); ctx.fillRect(x1, SC.y - 22, x2 - x1, 44); ctx.restore();
      line(ctx, x1, SC.y - 22, x1, SC.y + 22, PAL.panel, 2);
      const up = i % 2 === 0, last = i === BANDS.length - 1;
      text(ctx, BANDS[i].name, last ? SC.r - 6 : x1 + 6, up ? SC.y - 46 : SC.y + 42, PAL.ink, { size: 17, align: last ? 'right' : 'left', bg: PAL.panel });
      line(ctx, x1, SC.y + (up ? -22 : 22), x1, SC.y + (up ? -30 : 30), PAL.muted, 2);
    }
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.07); ctx.fillRect(SC.l, SC.y - 22, XI(1) - SC.l, 44); ctx.restore();
    text(ctx, 'unfelt', SC.l + 6, SC.y + 42, PAL.muted, { size: 17, align: 'left' });
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.strokeRect(SC.l, SC.y - 22, SC.r - SC.l, 44); ctx.restore();
    for (let k = D0; k <= D1; k++) { const x = XI(Math.pow(10, k)); line(ctx, x, SC.y + 22, x, SC.y + 34, PAL.muted, 2); text(ctx, (k < 0 ? Math.pow(10, k).toFixed(-k) : fmt(Math.pow(10, k), 0)) + ' mA', x, SC.y + 68, PAL.muted, { size: 17, align: 'center' }); }
    if (I > 0) {
      const xm = Math.min(Math.max(XI(mA), SC.l), SC.r);
      line(ctx, xm, SC.y - 32, xm, SC.y + 22, ic, 4);
      dot(ctx, xm, SC.y, ic, true, 11);
      text(ctx, amps(I), xm, SC.y - 60, ic, { size: 22, weight: 600, align: xm > SC.r - 120 ? 'right' : xm < SC.l + 120 ? 'left' : 'center', bg: PAL.panel });
    }

    headline(ctx, V === 0 ? 'With nothing across the person no current passes at all, and the wire is safe to hold.'
      : fmt(V, 0) + ' V through ' + fmt(Rk, 1) + ' kΩ sends ' + amps(I) + ' through the trunk, a current that ' + effect(mA) + '.');
    readout(d.readout, `\\kIcur = \\frac{\\kV}{\\kRes} = \\frac{${fmt(V, 0)}\\ \\text{V}}{${fmt(Rk, 1)}\\ \\text{k}\\Omega} = ${amps(I).replace(/ (\w+)$/, '\\ \\text{$1}')}`,
      'A larger voltage is more hazardous, but the severity of a shock depends on the combination of voltage and resistance, so no voltage can be called hazardous without knowing the resistance. Most of the body’s resistance is in its dry skin, about 200 kΩ, and 120 V then passes 0.6 mA harmlessly; the same person soaking wet may have 10.0 kΩ and take 12 mA, which is above the can’t-let-go threshold. A person whose skin has been bypassed by an infusion, a catheter or a pacemaker lead is microshock sensitive, and currents about a thousandth of those on this scale produce the same effects.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 20.22: how the body's sensitivity depends on frequency. The graph
   is the idea, so it stands alone. The frequency is a dropdown of the values
   the section names rather than a slider, because the span is four decades
   and a linear slider would leave the whole of the story in its first
   hundredth (rule 26.1). Still: a sensitivity curve is a standing fact of
   the body and has no time in it.
===================================================================== */
(function () {
  const d = sim('sim-frequency-sensitivity', 640);
  const fs = select(d.controls, {
    label: '\\kf', value: '1.778', aria: 'the frequency of the current',
    options: [{ value: '0', label: 'DC (f = 0)' }, { value: '1', label: '10 Hz' }, { value: '1.699', label: '50 Hz' }, { value: '1.778', label: '60 Hz' }, { value: '2', label: '100 Hz' }, { value: '2.602', label: '400 Hz' }, { value: '3', label: '1 kHz' }, { value: '4', label: '10 kHz' }],
  });
  const Is = ctl(d.controls, { label: '\\kIcur', cls: 'current', min: 0, max: 30, step: 0.5, value: 10, unit: 'mA', dec: 1, aria: 'the current through the person' });
  /* u is the decade of the frequency, 0 at direct current and 4 at 10 kHz; the axes are
     fixed at 0 to 4 across and 0 to 30 mA up, and no setting leaves the frame. */
  const BOX = { l: 220, r: 1280, t: 150, b: 470 };
  const letGo = (u) => 10 * (u < 2 ? 1 + 0.2 * Math.pow(2 - u, 2) : 1 + 0.45 * Math.pow(u - 2, 2));
  const sense = (u) => 2.2 * (u < 2 ? 1 + 0.2 * Math.pow(2 - u, 2) : 1 + 1.55 * Math.pow(u - 2, 2));
  const NAME = { 0: 'direct current', 1: '10 Hz', 1.699: '50 Hz', 1.778: '60 Hz', 2: '100 Hz', 2.602: '400 Hz', 3: '1 kHz', 4: '10 kHz' };
  const TICK = ['DC', '10 Hz', '100 Hz', '1 kHz', '10 kHz'];
  function draw() {
    const { ctx } = begin(d.c);
    const ic = C('current'), fc = C('frequency');
    const u = +fs.value, I = Is.v, lg = letGo(u), sn = sense(u), name = NAME[u];
    const { X, Y } = axes(ctx, BOX, [0, 4], [0, 30], { nx: 4, ny: 6, xl: 'the frequency of the current', xc: fc, yl: 'current through the person (mA)', yc: ic, fx: (v) => TICK[Math.round(v)] });
    /* the two curves: the one that can be felt at all, dashed, and the one that closes the hand, solid */
    ctx.save(); ctx.setLineDash([10, 10]); curve(ctx, sense, 0, 4, X, Y, ic, 5, 160); ctx.restore();
    curve(ctx, letGo, 0, 4, X, Y, ic, 5, 160);
    text(ctx, 'the can’t-let-go current', X(3.1), Y(letGo(3.1)) - 26, ic, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    text(ctx, 'the threshold of sensation', X(1.1), Y(sense(1.1)) - 26, ic, { size: 20, weight: 600, align: 'center', bg: PAL.panel });
    /* the frequency chosen, and the current set against the two curves there */
    line(ctx, X(u), BOX.t, X(u), BOX.b, alpha(fc, 0.5), 3, [4, 8]);
    text(ctx, name, X(u), BOX.t - 24, fc, { size: 20, weight: 600, align: X(u) > BOX.r - 120 ? 'right' : 'center', bg: PAL.panel });
    dot(ctx, X(u), Y(lg), ic, true, 10); dot(ctx, X(u), Y(sn), ic, false, 10);
    line(ctx, BOX.l, Y(I), BOX.r, Y(I), ic, 4);
    text(ctx, fmt(I, 1) + ' mA', BOX.l + 12, Y(I) - 22, ic, { size: 21, weight: 600, align: 'left', bg: PAL.panel });
    const felt = I >= sn, stuck = I >= lg;
    headline(ctx, I === 0 ? 'With no current through the person there is nothing to feel at any frequency.'
      : 'At ' + name + ', ' + fmt(I, 1) + ' mA is ' + (stuck ? 'above the can’t-let-go current of ' + fmt(lg, 1) + ' mA, so the hand closes on the wire' : felt ? 'above the ' + fmt(sn, 1) + ' mA that can be felt but below the ' + fmt(lg, 1) + ' mA that closes the hand' : 'below the ' + fmt(sn, 1) + ' mA needed to feel anything at all') + '.');
    readout(d.readout, `\\kf = \\text{${name}}:\\quad \\kIcur = ${fmt(I, 1)}\\ \\text{mA},\\quad \\text{felt above } ${fmt(sn, 1)}\\ \\text{mA},\\quad \\text{held above } ${fmt(lg, 1)}\\ \\text{mA}`,
      'The lower a curve runs, the more sensitive the body is at that frequency, and both curves reach their lowest values near the 50 and 60 Hz in common use, so the frequencies carried by household wiring are the ones the body feels most readily. The body is slightly less sensitive at direct current, which mildly confirms Edison’s claims that alternating current presents the greater hazard, and it becomes progressively less sensitive at higher frequencies, because nerves can only fire so fast. At very high frequencies the current travels only on the surface of a person, which is why a wart can be burned off without stopping the heart.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
