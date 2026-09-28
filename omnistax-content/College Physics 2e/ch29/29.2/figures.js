/* Figures for section 29.2 The Photoelectric Effect. The page binds energy,
   frequency and position (the wavelength). Planck's constant, the count of
   photons and the name of the metal are ink. A photon is drawn in the color of
   its wavelength, the physical fact of rule 7, through `wavelengthColor` alone;
   below 380 nm it is ink. An electron is F.el('e-'). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['29.2'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, select, register, cycle, begin, line, arrow, dot, text, topline, label, axes, curve, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);

/* the book's constants: h = 6.63 × 10⁻³⁴ J·s, c = 3.00 × 10⁸ m/s, 1 eV = 1.6 × 10⁻¹⁹ J */
const HC = 6.63e-34 * 3.00e8 / 1.6e-19 * 1e9;        /* hc in eV·nm, 1243 */
const H_EV = 6.63e-34 / 1.6e-19;                      /* h in eV·s */

/* the color of visible light of wavelength nm, the usual piecewise fit to the
   spectrum from 380 to 700 nm, dimmed toward both ends; ultraviolet is ink */
function wavelengthColor(nm) {
  if (nm < 380) return PAL.ink;
  let r = 0, g = 0, b = 0;
  if (nm < 440) { r = (440 - nm) / 60; b = 1; }
  else if (nm < 490) { g = (nm - 440) / 50; b = 1; }
  else if (nm < 510) { g = 1; b = (510 - nm) / 20; }
  else if (nm < 580) { r = (nm - 510) / 70; g = 1; }
  else if (nm < 645) { r = 1; g = (645 - nm) / 65; }
  else r = 1;
  const k = nm < 420 ? 0.4 + 0.6 * (nm - 380) / 40 : nm > 680 ? 0.4 + 0.6 * (700 - nm) / 20 : 1;
  const c = (x) => Math.round(255 * Math.pow(x * Math.max(k, 0.55), 0.8));
  return 'rgb(' + c(r) + ',' + c(g) + ',' + c(b) + ')';
}
const tint = (col, a) => (col.startsWith('rgb(') ? col.replace('rgb(', 'rgba(').replace(')', ',' + a + ')') : alpha(col, a));

/* =====================================================================
   FIGURE 29.7 + 29.8 · sim-photoelectric · moving · flat (rule 28.1)
   A lamp sends photons of one wavelength onto a metal plate at the chosen
   rate; each one that carries more than the binding energy frees one electron
   the moment it lands, and every freed electron leaves at the one speed its
   kinetic energy gives it. The graph beneath is Figure 29.8 for the chosen
   metal with the live point on it. Everything at time t follows from t alone,
   so the scrubber is exact. Graph: f from 0 to 16 × 10¹⁴ Hz (200 nm is
   15.0 × 10¹⁴ Hz), KEₑ from 0 to 4 eV (6.22 eV − 2.24 eV = 3.98 eV at most).
===================================================================== */
(function () {
  const METALS = {
    Ca: { name: 'calcium', BE: 2.71 }, Na: { name: 'sodium', BE: 2.28 }, K: { name: 'potassium', BE: 2.24 },
    Mg: { name: 'magnesium', BE: 3.68 }, Ag: { name: 'silver', BE: 4.73 }, Au: { name: 'gold', BE: 4.82 },
  };
  const d = sim('sim-photoelectric', 800);
  const metal = select(d.controls, { label: '\\text{Metal}', options: Object.keys(METALS).map((k) => ({ value: k, label: METALS[k].name })), value: 'Ca', aria: 'the metal of the plate', onInput: reset });
  const lam = ctl(d.controls, { label: '\\klam', cls: 'position', min: 200, max: 700, step: 1, value: 420, unit: 'nm', dec: 0, onInput: reset, aria: 'the wavelength of the light',
    specials: [{ at: () => HC / METALS[metal.value].BE, label: 'threshold' }] });
  const rate = ctl(d.controls, { label: '\\text{rate}', cls: '', min: 2, max: 12, step: 1, value: 6, unit: 'photons/s', dec: 0, onInput: reset, aria: 'the number of photons drawn per second' });

  const T = 5, FLY = 0.55;                                   /* the loop, and a photon's flight from lamp to plate, in seconds */
  const LAMP = { x: 250, y: 150 }, PL = { l: 470, r: 1130, y: 400 };
  const GB = { l: 200, r: 1250, t: 520, b: 710 };
  const cy = cycle(() => T, 1.2);
  function reset() { cy.reset(); }
  const hash = (i, s) => { const x = Math.sin(i * 127.1 + s * 311.7) * 43758.5453; return x - Math.floor(x); };
  let hits = [];
  hover(d.stage, () => hits);
  const ro = readout(d);

  /* a photon as a short wave packet along its direction of travel */
  function packet(ctx, x, y, ux, uy, color) {
    const px = -uy, py = ux, L = 40, N = 28;
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.beginPath();
    for (let i = 0; i <= N; i++) {
      const s = i / N - 0.5, env = Math.cos(Math.PI * s), a = 8 * env * Math.sin(s * 6 * Math.PI);
      const qx = x + ux * s * L + px * a, qy = y + uy * s * L + py * a;
      if (i) ctx.lineTo(qx, qy); else ctx.moveTo(qx, qy);
    }
    ctx.stroke(); ctx.restore();
  }
  function lamp(ctx, color) {
    ctx.save();
    ctx.translate(LAMP.x, LAMP.y); ctx.rotate(Math.atan2(PL.y - LAMP.y, (PL.l + PL.r) / 2 - LAMP.x));
    ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.muted; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(-70, -22); ctx.lineTo(-10, -22); ctx.lineTo(24, -46); ctx.lineTo(24, 46); ctx.lineTo(-10, 22); ctx.lineTo(-70, 22); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.fillStyle = tint(color, 0.55); ctx.beginPath(); ctx.ellipse(24, 0, 8, 44, 0, 0, 2 * Math.PI); ctx.fill();
    ctx.restore();
  }

  function draw() {
    const { ctx } = begin(d.c);
    const M = METALS[metal.value], nm = lam.v, E = HC / nm, KE = E - M.BE, frees = KE > -1e-9;
    const f14 = 3.00e8 / (nm * 1e-9) / 1e14, f0 = M.BE / H_EV / 1e14;
    const col = wavelengthColor(nm), t = cy.now();
    const EC = C('energy'), FC = C('frequency');
    hits = [];

    /* the beam, the lamp and the plate */
    ctx.save(); ctx.fillStyle = tint(col, 0.1); ctx.beginPath(); ctx.moveTo(LAMP.x + 20, LAMP.y - 30); ctx.lineTo(PL.r, PL.y); ctx.lineTo(PL.l, PL.y); ctx.lineTo(LAMP.x + 10, LAMP.y + 36); ctx.closePath(); ctx.fill(); ctx.restore();
    lamp(ctx, col);
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(PL.l, PL.y, PL.r - PL.l, 26); ctx.restore();
    line(ctx, PL.l, PL.y, PL.r, PL.y, PAL.muted, 3);
    text(ctx, M.name + ', BE = ' + fmt(M.BE, 2) + ' eV', (PL.l + PL.r) / 2, PL.y + 48, PAL.ink, { size: 20, align: 'center' });
    text(ctx, nm < 380 ? 'ultraviolet lamp' : 'lamp', LAMP.x - 60, LAMP.y - 62, PAL.muted, { size: 18, align: 'left' });

    /* photon i leaves the lamp at (i + 0.5)/rate and lands FLY s later; an electron leaves at once */
    const n = Math.floor((T - FLY) * rate.v - 0.5) + 1;
    let arrived = 0, freed = 0, lastPhoton = null, lastElectron = null;
    const vE = frees ? 820 * Math.sqrt(Math.max(KE, 0) / 4) : 0;        /* units per second; the same for every electron */
    for (let i = 0; i < n; i++) {
      const t0 = (i + 0.5) / rate.v, tl = t0 + FLY;
      if (t < t0) break;
      const hx = PL.l + 40 + hash(i, 1) * (PL.r - PL.l - 80), sx = LAMP.x + 30, sy = LAMP.y + (hash(i, 2) - 0.5) * 40;
      if (t < tl) {
        const k = (t - t0) / FLY, dx = hx - sx, dy = PL.y - sy, L = Math.hypot(dx, dy);
        const x = sx + dx * k, y = sy + dy * k;
        packet(ctx, x, y, dx / L, dy / L, col);
        hits.push({ x, y, r: 26, name: 'a photon of ' + fmt(E, 2) + ' eV' });
        lastPhoton = { x, y };
        continue;
      }
      arrived++;
      if (!frees) { dot(ctx, hx, PL.y - 2, tint(col, Math.max(0, 1 - (t - tl) * 2)), true, 5); continue; }
      freed++;
      const a = -Math.PI / 2 + (hash(i, 3) - 0.5) * 1.3, s = vE * (t - tl);
      const x = hx + Math.cos(a) * s, y = PL.y - 12 + Math.sin(a) * s;
      if (y < 84 || x < 20 || x > 1380) continue;
      dot(ctx, x, y, F.el('e-'), true, 8);
      if (vE > 0) arrow(ctx, x + Math.cos(a) * 12, y + Math.sin(a) * 12, x + Math.cos(a) * (12 + 14 + vE * 0.06), y + Math.sin(a) * (12 + 14 + vE * 0.06), alpha(EC, 0.8), 3);
      hits.push({ x, y, r: 14, name: 'an electron with ' + fmt(KE, 2) + ' eV of kinetic energy' });
      lastElectron = { x, y };
    }
    if (lastPhoton) label(ctx, 'E = hf = ' + fmt(E, 2) + ' eV', lastPhoton.x, lastPhoton.y, { side: 'left', color: nm < 380 ? PAL.ink : EC, size: 20, gap: 34 });
    if (lastElectron) label(ctx, 'e⁻, KEₑ = ' + fmt(KE, 2) + ' eV', lastElectron.x, lastElectron.y, { side: 'right', color: EC, size: 20, gap: 26 });
    text(ctx, arrived + ' photons in, ' + freed + ' electrons out', 1360, PL.y + 48, PAL.muted, { size: 18, align: 'right' });

    /* Figure 29.8: KEₑ against f, the line of slope h from f₀; the line bends with the metal */
    const BEd = metal.mix((v) => METALS[v].BE), f0d = BEd / H_EV / 1e14;
    const { X, Y } = axes(ctx, GB, [0, 16], [0, 4], { nx: 4, ny: 4, xl: 'f (10¹⁴ Hz)', xc: FC, yl: 'KEₑ (eV)', yc: EC });
    curve(ctx, (f) => H_EV * f * 1e14 - BEd, f0d, 16, X, Y, EC, 5);
    dot(ctx, X(f0), Y(0), FC, false, 10);
    text(ctx, 'f₀ = ' + fmt(f0, 2), X(f0) - 14, GB.b - 22, FC, { size: 18, weight: 600, align: 'right', bg: PAL.panel });
    const py = frees ? Y(KE) : Y(0);
    line(ctx, X(f14), GB.b, X(f14), py, alpha(FC, 0.6), 2, [4, 8]);
    dot(ctx, X(f14), py, frees ? EC : PAL.muted, frees, 10);

    topline(ctx, frees
      ? 'Each ' + fmt(E, 2) + '-eV photon frees one electron from ' + M.name + ' with ' + fmt(KE, 2) + ' eV of kinetic energy.'
      : 'Each ' + fmt(E, 2) + '-eV photon carries less than the ' + fmt(M.BE, 2) + '-eV binding energy of ' + M.name + ', so no electron leaves.');
    const hf = '\\mk{hfv}{' + fmt(E, 2) + '\\ \\text{eV}}', be = '\\mk{bev}{' + fmt(M.BE, 2) + '\\ \\text{eV}}';
    const fnote = 'The light has f = ' + fmt(f14, 2) + ' × 10¹⁴ Hz, and the threshold for ' + M.name + ' is f₀ = ' + fmt(f0, 2) + ' × 10¹⁴ Hz.';
    if (frees) ro.set('\\mk{ke}{\\kKEe} = \\mk{hf}{h\\kf} - \\mk{be}{\\kBE} = ' + hf + ' - ' + be + ' = \\mk{kev}{' + fmt(Math.max(KE, 0), 2) + '\\ \\text{eV}}', fnote, { form: 'free' });
    else ro.set('\\mk{hf}{h\\kf} = ' + hf + ' < \\mk{be}{\\kBE} = ' + be, fnote, { form: 'held' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
