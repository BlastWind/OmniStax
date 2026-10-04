/* Figures for section 28.1 Einstein’s Postulates. The figure draws velocity; the
   ship, the observer and the two pulses are referents; v/c is a ratio and its
   number is untyped. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['28.1'] = function (root, F) {
const { fmt, tex, C, PAL, alpha, ctl, choice, cycle, register, begin, line, arrow, text, topline, label, curve } = F;
const sim = (id, H) => F.sim(root, id, H);

/* =====================================================================
   Sim · sim-light-from-moving-source · moving · flat (root rule 28.1)
   A ship moving at v sends a pulse of light to an observer on its right.
   Newton’s addition of velocities sends it at c + v when the ship moves
   toward the observer and c − v when it moves away; the pulse actually
   observed travels at c in both cases. The clock is the flight of the real
   pulse, one model unit long; the predicted pulse runs on its own speed and
   stops at the observer. Scene: the observer at x = 1250; the emission point
   at x = 160 (toward) or 660 (away), so the real pulse crosses 1090 or 590
   units; arrows 130 units per c.
===================================================================== */
(function () {
  const d = sim('sim-light-from-moving-source', 420);
  const dirC = choice(d.controls, { label: '\\text{the ship moves}', options: [{ value: '1', label: 'toward the observer' }, { value: '-1', label: 'away from the observer' }], value: '1', aria: 'the direction the ship moves', onInput: reset });
  const vS = ctl(d.controls, { label: '\\kv/\\kc', cls: 'velocity', min: 0, max: 0.9, step: 0.01, value: 0.5, unit: '', dec: 2, onInput: reset, aria: 'the speed of the ship as a fraction of the speed of light',
    specials: [{ at: 0.5, label: '0.500c' }] });
  const cy = cycle(() => 1, 1.2);
  function reset() { cy.reset(); }

  const OBS = 1250, YREAL = 170, YNEWT = 250, YSHIP = 330, GROUND = 372, PER_C = 130;

  function ship(ctx, x, y, face) {
    const s = face, L = 110, h = 22;
    ctx.save(); ctx.fillStyle = alpha(F.ref('ship'), 0.85); ctx.beginPath();
    ctx.moveTo(x, y); ctx.lineTo(x - s * 34, y - h); ctx.lineTo(x - s * L, y - h);
    ctx.lineTo(x - s * (L + 18), y - h - 16); ctx.lineTo(x - s * (L + 18), y + h + 16);
    ctx.lineTo(x - s * L, y + h); ctx.lineTo(x - s * 34, y + h); ctx.closePath(); ctx.fill(); ctx.restore();
  }
  function packet(ctx, xc, y, dashed) {
    const col = dashed ? alpha(F.ref('newton-pulse'), 0.75) : F.ref('light-pulse');
    ctx.save(); if (dashed) ctx.setLineDash([6, 6]);
    curve(ctx, (t) => y - 14 * Math.sin(t * 6 * Math.PI) * Math.sin(t * Math.PI), 0, 1, (t) => xc - 36 + 72 * t, (yy) => yy, col, 4, 90);
    ctx.restore();
  }

  function draw() {
    const { ctx } = begin(d.c);
    const VEL = C('velocity');
    const dir = +dirC.value, v = vS.v, x0 = dir > 0 ? 160 : 660, D = OBS - x0;
    const t = cy.now(), uN = 1 + dir * v;
    const xReal = x0 + D * Math.min(t, 1);
    const xNewt = x0 + Math.min(D, D * uN * t);
    const xShip = x0 + dir * v * D * Math.min(t, 1);
    const sum = dir > 0 ? '+' : '−';

    topline(ctx, 'Newton predicts the light travels at c ' + sum + ' v = ' + fmt(uN, 2) + 'c; it is observed to travel at c.');

    line(ctx, 60, GROUND, 1360, GROUND, alpha(PAL.ink, 0.3), 2);
    line(ctx, x0, YREAL - 40, x0, GROUND, alpha(PAL.ink, 0.3), 2, [4, 8]);
    text(ctx, 'emitted here', x0, GROUND + 22, PAL.muted, { size: 17 });
    line(ctx, OBS - 30, YREAL - 40, OBS - 30, YNEWT + 30, alpha(PAL.ink, 0.35), 3);

    line(ctx, x0, YREAL, OBS - 30, YREAL, alpha(PAL.ink, 0.12), 2);
    line(ctx, x0, YNEWT, OBS - 30, YNEWT, alpha(PAL.ink, 0.12), 2);
    text(ctx, 'observed', 70, YREAL, F.ref('light-pulse'), { size: 17, align: 'left', bg: PAL.panel });
    text(ctx, 'Newton', 70, YNEWT, F.ref('newton-pulse'), { size: 17, align: 'left', bg: PAL.panel });

    packet(ctx, Math.min(xReal, OBS - 66), YREAL, false);
    packet(ctx, Math.min(xNewt, OBS - 66), YNEWT, true);
    const aR = Math.min(xReal, OBS - 66) + 44, aN = Math.min(xNewt, OBS - 66) + 44;
    if (xReal < OBS - 30) {
      arrow(ctx, aR - 50, YREAL - 34, aR - 50 + PER_C, YREAL - 34, VEL, 4);
      label(ctx, 'c', aR - 50 + PER_C / 2, YREAL - 34, { side: 'above', color: VEL, size: 22 });
    }
    if (xNewt < OBS - 30) {
      line(ctx, aN - 50, YNEWT + 30, aN - 50 + PER_C * uN - 20, YNEWT + 30, VEL, 4, [10, 8]);
      arrow(ctx, aN - 50 + PER_C * uN - 22, YNEWT + 30, aN - 50 + PER_C * uN, YNEWT + 30, VEL, 4);
      label(ctx, 'c ' + sum + ' v', aN - 50 + PER_C * uN / 2, YNEWT + 30, { side: 'below', color: VEL, size: 22 });
    }

    ship(ctx, xShip, YSHIP, dir);
    if (v > 0.005) {
      const ax0 = xShip - dir * 60, ax1 = ax0 + dir * PER_C * v;
      arrow(ctx, ax0, YSHIP - 44, ax1, YSHIP - 44, VEL, 4);
      label(ctx, 'v', (ax0 + ax1) / 2, YSHIP - 44, { side: 'above', color: VEL, size: 22 });
    }
    F.silhouette(ctx, { x: OBS + 50, y: GROUND, s: 0.9, face: -1, pose: 'stand', color: F.ref('observer') });

    tex(d.readout, '\\ku_{\\text{Newton}} = \\kc ' + (dir > 0 ? '+' : '-') + ' \\kv = ' + fmt(uN, 2) + '\\,\\kc,\\quad \\ku_{\\text{observed}} = \\kc');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1 / 4.5), draw });
})();
};
