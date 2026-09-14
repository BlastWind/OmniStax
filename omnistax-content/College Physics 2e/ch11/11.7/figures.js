/* Figures for section 11.7 Archimedes’ Principle. Boots against the section's text article.
   Fluid statics has no time in it, so every figure here is a still picture:
   none registers a cycle, none carries a transport, and a slider's or a
   choice's input alone redraws it. The page binds force and density; depth,
   volume, mass and every fraction are ink. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['11.7'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, topline, hbracket, vbracket, fixed, view } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- small helpers shared by the figures ---------- */
const G = 9.80, TAU = 2 * Math.PI;
const SUP = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
const sup = (n) => String(n).split('').map((ch) => SUP[ch] ?? ch).join('');
/* a number to three significant figures, written out (98.0, 196, 0.830) */
const sf = (v, n = 3) => (Math.abs(v) < 1e-12 ? (0).toFixed(n - 1) : Number(v).toPrecision(n).replace(/e\+?(-?\d+)/, (m, e) => ' × 10' + sup(e)));
/* a number in scientific notation with three significant figures, in text and in TeX */
function sciParts(v, sig) {
  if (v === 0) return { m: '0', e: 0 };
  let e = Math.floor(Math.log10(Math.abs(v))), m = v / Math.pow(10, e);
  if (Math.abs(+m.toFixed(sig - 1)) >= 10) { m /= 10; e += 1; }
  return { m: m.toFixed(sig - 1), e };
}
const sci = (v, sig = 3) => { const { m, e } = sciParts(v, sig); return e === 0 ? m : m + ' × 10' + sup(e); };
const sciTex = (v, sig = 3) => { const { m, e } = sciParts(v, sig); return e === 0 ? m : m + '\\times 10^{' + e + '}'; };
/* a filled, outlined rectangle in the panel colour with an ink edge */
function panelRect(ctx, x, y, w, h, stroke = PAL.ink, fill = PAL.panel, lw = 3, dash) {
  ctx.save(); ctx.fillStyle = fill; ctx.strokeStyle = stroke; ctx.lineWidth = lw; if (dash) ctx.setLineDash(dash);
  ctx.beginPath(); ctx.rect(x, y, w, h); ctx.fill(); ctx.stroke(); ctx.restore();
}
/* a body of fluid: a soft panel, and a surface line along its top */
function fluidBox(ctx, x1, x2, ytop, ybot) {
  ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(x1, ytop, x2 - x1, ybot - ytop); ctx.restore();
}
/* the tint that says a thing is under the surface, laid over whatever is drawn in the fluid */
function fluidTint(ctx, x1, x2, ytop, ybot) {
  ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.07); ctx.fillRect(x1, ytop, x2 - x1, ybot - ytop); ctx.restore();
  line(ctx, x1, ytop, x2, ytop, PAL.muted, 2.5);
}
/* an open glass vessel: two walls and a floor in the muted ink */
function glass(ctx, x1, x2, ytop, ybot) {
  ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 4; ctx.lineJoin = 'round';
  ctx.beginPath(); ctx.moveTo(x1, ytop); ctx.lineTo(x1, ybot); ctx.lineTo(x2, ybot); ctx.lineTo(x2, ytop); ctx.stroke(); ctx.restore();
}
/* Table 11.1, the entries the sliders of this page settle on, in kg/m³ */
const LIQUIDS = [{ v: 680, label: 'gasoline' }, { v: 790, label: 'ethyl alcohol' }, { v: 920, label: 'olive oil' }, { v: 1000, label: 'water' }, { v: 1025 }, { v: 1050 }, { v: 1260, label: 'glycerin' }];
const LIQUIDS_SHORT = [{ v: 680, label: 'gasoline' }, { v: 790 }, { v: 920 }, { v: 1000, label: 'water' }, { v: 1025 }, { v: 1050 }, { v: 1260, label: 'glycerin' }];
const LIQUID_NAMES = [[680, 'gasoline'], [790, 'ethyl alcohol'], [920, 'olive oil'], [1000, 'water'], [1025, 'sea water'], [1050, 'blood'], [1260, 'glycerin']];
const METALS = [[2.7, 'aluminum'], [2.7, 'granite'], [2.6, 'common glass'], [7.8, 'iron or steel'], [8.44, 'brass'], [8.8, 'copper'], [10.49, 'silver'], [11.3, 'lead'], [18.70, 'uranium'], [19.30, 'tungsten'], [19.32, 'gold']];
/* the liquid of Table 11.1 a density is, when it is one, or nothing */
const liquidNamed = (rho) => { const hit = LIQUID_NAMES.find(([v]) => Math.abs(v - rho) < 0.5); return hit ? hit[1] : null; };
const fluidPhrase = (rho) => { const n = liquidNamed(rho); return n ? n : 'a fluid of density ' + fmt(rho, 0) + ' kg/m³'; };

/* =====================================================================
   FIGURE 11.18 + 11.19: the cylinder in the tank. The fluid presses down on
   its top face and up on its bottom face, harder on the bottom because it is
   deeper, and the difference is the buoyant force. A choice swaps the
   cylinder for the fluid that would fill its place, which is the argument
   of Figure 11.19. Still: a cylinder held at a depth has no time in it.
   The scene is a locked view straight on and a little above, as the book
   draws it; no orbit.
===================================================================== */
(function () {
  const d = sim('sim-cylinder', 720);
  const HC = 0.200, A = 0.0500, VOL = HC * A, R = Math.sqrt(A / Math.PI);          /* the cylinder: 20.0 cm tall, faces of 500 cm², 10.0 L */
  const h1 = ctl(d.controls, { label: 'h_1', cls: '', min: 0, max: 0.35, step: 0.01, value: 0.2, unit: 'm', dec: 2, aria: 'the depth of the top face of the cylinder' });
  const rf = ctl(d.controls, { label: '\\krhofl', cls: 'density', min: 600, max: 1400, step: 10, value: 1000, unit: 'kg/m³', dec: 0, detents: LIQUIDS_SHORT, snap: true, aria: 'the density of the fluid in the tank' });
  const ro = ctl(d.controls, { label: '\\krhoobj', cls: 'density', min: 100, max: 3000, step: 10, value: 1000, unit: 'kg/m³', dec: 0, detents: [{ v: 100, label: 'polystyrene' }, { v: 240 }, { v: 917 }, { v: 1000 }, { v: 2700, label: 'aluminum' }], snap: true, aria: 'the average density of the cylinder' });
  const what = choice(d.controls, { label: '\\text{in the outline}', options: [{ value: 'object', label: 'the cylinder' }, { value: 'fluid', label: 'the fluid' }], value: 'object', aria: 'whether the outline holds the cylinder or the fluid that replaces it', onInput: (v) => ro.disable(v === 'fluid') });   /* the cylinder's density says nothing about the fluid that replaces it */
  /* Scene: metres × S in canvas units, y up, z toward the viewer; the origin is the
     middle of the fluid surface. The scale is fixed from the slider maximum, 0.60 m of
     fluid, and never follows a slider. */
  const S = 560, DEPTH = 0.6, TW = 0.8, TD = 0.42, KF = 0.5;                       /* KF: canvas units per newton, one scale for every force */
  const V3 = view({ yaw: 0, pitch: 0.32, dist: 2300, cx: 640, cy: 190 });
  const P = (x, y, z) => V3.P([x, y, z]);
  const ring = (yc, r, n = 48) => Array.from({ length: n }, (_, i) => { const a = (TAU * i) / n; return P(r * Math.cos(a), yc, r * Math.sin(a)); });
  function poly(ctx, pts, fill, stroke, lw = 3, dash) {
    ctx.save(); ctx.beginPath(); pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath();
    if (fill) { ctx.fillStyle = fill; ctx.fill(); }
    if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = lw; if (dash) ctx.setLineDash(dash); ctx.stroke(); }
    ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('force'), dc = C('density');
    const hh1 = h1.v, hh2 = hh1 + HC, rho = rf.v, rob = ro.v, fluid = what.value === 'fluid';
    const F1 = hh1 * rho * G * A, F2 = hh2 * rho * G * A, FB = F2 - F1, W = rob * VOL * G;
    const hx = TW * S / 2, hz = TD * S / 2, yb = -DEPTH * S, y1 = -hh1 * S, y2 = -hh2 * S, rr = R * S;
    /* the tank: back wall, floor, fluid surface, then the cylinder, then the front of the fluid over it */
    poly(ctx, [P(-hx, 30, -hz), P(hx, 30, -hz), P(hx, yb, -hz), P(-hx, yb, -hz)], PAL.soft, null);
    poly(ctx, [P(-hx, yb, -hz), P(hx, yb, -hz), P(hx, yb, hz), P(-hx, yb, hz)], alpha(PAL.ink, 0.12), null);
    poly(ctx, [P(-hx, 0, -hz), P(hx, 0, -hz), P(hx, 0, hz), P(-hx, 0, hz)], alpha(PAL.ink, 0.06), PAL.muted, 2);
    /* the cylinder, or the outline of the fluid that fills its place */
    const top = ring(y1, rr), bot = ring(y2, rr);
    const L1 = P(-rr, y1, 0), R1 = P(rr, y1, 0), L2 = P(-rr, y2, 0), R2 = P(rr, y2, 0);
    if (fluid) {
      poly(ctx, bot, null, PAL.ink, 2.5, [8, 8]);
      line(ctx, L1[0], L1[1], L2[0], L2[1], PAL.ink, 2.5, [8, 8]); line(ctx, R1[0], R1[1], R2[0], R2[1], PAL.ink, 2.5, [8, 8]);
      poly(ctx, top, null, PAL.ink, 2.5, [8, 8]);
    } else {
      poly(ctx, bot, PAL.panel, null);
      poly(ctx, [L1, R1, R2, L2], PAL.panel, null);
      poly(ctx, bot.slice(0, 25), null, PAL.ink, 3, [6, 6]);                         /* the far half of the bottom rim, seen through */
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); bot.slice(24).forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.lineTo(bot[0][0], bot[0][1]); ctx.stroke(); ctx.restore();
      line(ctx, L1[0], L1[1], L2[0], L2[1], PAL.ink, 3); line(ctx, R1[0], R1[1], R2[0], R2[1], PAL.ink, 3);
      poly(ctx, top, alpha(PAL.ink, 0.1), PAL.ink, 3);
    }
    /* the front of the fluid, laid over the cylinder so it reads as under the surface, and the front rim of the tank */
    poly(ctx, [P(-hx, 0, hz), P(hx, 0, hz), P(hx, yb, hz), P(-hx, yb, hz)], alpha(PAL.ink, 0.05), null);
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 4; ctx.lineJoin = 'round';
    const fl = P(-hx, 30, hz), fr = P(hx, 30, hz), bl = P(-hx, yb, hz), br = P(hx, yb, hz), bkl = P(-hx, yb, -hz), bkr = P(hx, yb, -hz), tkl = P(-hx, 30, -hz), tkr = P(hx, 30, -hz);
    ctx.beginPath(); ctx.moveTo(fl[0], fl[1]); ctx.lineTo(bl[0], bl[1]); ctx.lineTo(br[0], br[1]); ctx.lineTo(fr[0], fr[1]); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(bl[0], bl[1]); ctx.lineTo(bkl[0], bkl[1]); ctx.moveTo(br[0], br[1]); ctx.lineTo(bkr[0], bkr[1]); ctx.moveTo(tkl[0], tkl[1]); ctx.lineTo(bkl[0], bkl[1]); ctx.moveTo(tkr[0], tkr[1]); ctx.lineTo(bkr[0], bkr[1]); ctx.moveTo(tkl[0], tkl[1]); ctx.lineTo(tkr[0], tkr[1]); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(fl[0], fl[1]); ctx.lineTo(tkl[0], tkl[1]); ctx.moveTo(fr[0], fr[1]); ctx.lineTo(tkr[0], tkr[1]); ctx.stroke(); ctx.restore();
    /* the two forces of the fluid on the faces: down on the top, up on the bottom, one scale */
    const c1 = P(0, y1, 0), c2 = P(0, y2, 0);
    if (F1 > 0.5) {
      arrow(ctx, c1[0], c1[1] - F1 * KF, c1[0], c1[1], fc, 5);
      text(ctx, 'F_1 = ' + sf(F1) + ' N', c1[0] + 18, c1[1] - F1 * KF / 2 - (F1 * KF < 30 ? 22 : 0), fc, { size: 21, weight: 600, bg: alpha(PAL.panel, 0.85) });
    } else text(ctx, 'F_1 = 0', c1[0] + 18, c1[1] - 26, fc, { size: 20, weight: 600, bg: alpha(PAL.panel, 0.85) });
    arrow(ctx, c2[0], c2[1] + F2 * KF, c2[0], c2[1], fc, 5);
    text(ctx, 'F_2 = ' + sf(F2) + ' N', c2[0] + 18, c2[1] + F2 * KF / 2, fc, { size: 21, weight: 600, bg: alpha(PAL.panel, 0.85) });
    /* the depths, measured from the surface at the left of the tank */
    const sL = P(-hx, 0, 0), f1L = P(-hx, y1, 0), f2L = P(-hx, y2, 0);
    const bx1 = sL[0] - 60, bx2 = sL[0] - 120;
    if (hh1 > 0.005) { vbracket(ctx, bx1, sL[1], f1L[1], PAL.ink); text(ctx, 'h_1 = ' + fmt(hh1, 2) + ' m', bx2 - 16, (sL[1] + f1L[1]) / 2, PAL.ink, { align: 'right', weight: 600 }); }
    else text(ctx, 'h_1 = 0', bx2 - 16, sL[1] - 26, PAL.ink, { align: 'right', weight: 600 });
    vbracket(ctx, bx2, sL[1], f2L[1], PAL.ink); text(ctx, 'h_2 = ' + fmt(hh2, 2) + ' m', bx2 - 16, (sL[1] + f2L[1]) / 2 + (hh1 > 0.005 && hh1 < 0.06 ? 30 : 0), PAL.ink, { align: 'right', weight: 600 });
    line(ctx, bx2, f2L[1], f2L[0] - 4, f2L[1], alpha(PAL.ink, 0.35), 2, [4, 8]);
    if (hh1 > 0.005) line(ctx, bx1, f1L[1], f1L[0] - 4, f1L[1], alpha(PAL.ink, 0.35), 2, [4, 8]);
    text(ctx, fluidPhrase(rho) === liquidNamed(rho) ? liquidNamed(rho) + ', ρ_fl = ' + fmt(rho, 0) + ' kg/m³' : 'a fluid of density ρ_fl = ' + fmt(rho, 0) + ' kg/m³', bl[0] - 10, bl[1] + 34, dc, { size: 20, weight: 600, align: 'right' });
    text(ctx, fluid ? 'the fluid that would fill the cylinder’s place' : 'a cylinder 20.0 cm tall, faces of 500 cm², 10.0 L', bl[0] - 10, bl[1] + 62, PAL.muted, { size: 18, align: 'right' });
    /* the free-body diagram of what is in the outline */
    const FX = 1170, FY = 340, wgt = fluid ? FB : W;
    text(ctx, 'free-body diagram', FX, 160, PAL.muted, { size: 19, align: 'center' });
    text(ctx, fluid ? 'of the fluid in the outline' : 'of the cylinder', FX, 186, PAL.muted, { size: 19, align: 'center' });
    arrow(ctx, FX - 14, FY, FX - 14, FY - FB * KF, fc, 5);
    text(ctx, 'F_B = ' + sf(FB) + ' N', FX + 4, FY - FB * KF / 2 - 10, fc, { size: 21, weight: 600 });
    arrow(ctx, FX + 14, FY, FX + 14, FY + wgt * KF, fc, 5);
    text(ctx, (fluid ? 'w_fl' : 'w') + ' = ' + sf(wgt) + ' N', FX + 32, FY + wgt * KF / 2 + 10, fc, { size: 21, weight: 600 });
    dot(ctx, FX, FY, PAL.ink, true, 9);
    const verdict = fluid ? 'The fluid weighs exactly what holds it up.'
      : Math.abs(W - FB) < 0.05 ? 'The cylinder remains suspended.' : W < FB ? 'The cylinder will rise.' : 'The cylinder will sink.';
    text(ctx, verdict, FX, Math.max(FY + wgt * KF, FY + 90) + 44, PAL.ink, { size: 20, weight: 600, align: 'center' });
    const f1s = F1 < 0.05 ? '0' : sf(F1);
    topline(ctx, F1 < 0.05 ? 'The fluid pushes up on the bottom of the cylinder with ' + sf(F2) + ' N and not at all on its top, which is at the surface, so the buoyant force is ' + sf(FB) + ' N.'
      : 'The fluid pushes up on the bottom of the cylinder with ' + sf(F2) + ' N and down on its top with ' + sf(F1) + ' N, so the buoyant force is ' + sf(FB) + ' N.');
    readout(d.readout, `\\kFB = \\kFtwo - \\kFone = ${sf(F2)}\\ \\text{N} - ${f1s}\\ \\text{N} = ${sf(FB)}\\ \\text{N} = \\kwfl`,
      'The two forces are F₁ = h₁ρg A = ' + f1s + ' N and F₂ = h₂ρg A = ' + sf(F2) + ' N, and their difference is (h₂ − h₁)ρg A, the weight of the 10.0 L of fluid the cylinder displaces, whatever the depth. '
      + (fluid ? 'With the cylinder taken out, that 10.0 L of fluid fills its place and weighs ' + sf(FB) + ' N, which the surrounding fluid holds up with the same ' + sf(FB) + ' N, so the buoyant force on any object here is the weight of the fluid it displaces.'
        : 'The cylinder itself weighs ' + sf(W) + ' N, ' + (Math.abs(W - FB) < 0.05 ? 'the same, so it remains suspended at this depth.' : W < FB ? 'less than that, so it will rise to the surface and float.' : 'more than that, so it will sink.')));
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 11.20: the ship, unloaded and loaded. The steel boat of Example
   11.8 in side view; cargo on the deck raises its average density and it
   settles, denser water lifts it, and past the example's load it sinks.
   Still: a floating ship sits where its density puts it.
===================================================================== */
(function () {
  const d = sim('sim-ship', 700);
  const MS = 1.00e7, VH = 1.00e5, HH = 25, LEN = 100;                              /* the hull: 1.00 × 10⁷ kg of steel, 1.00 × 10⁵ m³, 100 m by 40 m by 25 m */
  const cargo = ctl(d.controls, { label: '\\text{cargo}', cls: '', min: 0, max: 100, step: 1, value: 0, unit: '× 10⁶ kg', dec: 0, detents: [{ v: 0, label: 'empty' }, { v: 90, label: 'the deck awash' }], snap: false, aria: 'the mass of cargo on the deck, in millions of kilograms' });
  const rf = ctl(d.controls, { label: '\\krhofl', cls: 'density', min: 900, max: 1300, step: 5, value: 1000, unit: 'kg/m³', dec: 0, detents: [{ v: 1000 }, { v: 1025, label: 'sea water' }], snap: true, aria: 'the density of the water the ship floats in' });
  const U = 6.5, SURF = 320, X0 = 375, SEA = 35, KW = 2e-7;                          /* U: canvas units per metre, fixed; KW: units per newton */
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('force'), dc = C('density');
    const mc = cargo.v * 1e6, rho = rf.v, mt = MS + mc, rav = mt / VH, f = rav / rho, floats = f <= 1;
    const W = mt * G, FB = floats ? W : rho * VH * G;
    const bottom = floats ? SURF + f * HH * U : SURF + SEA * U, top = bottom - HH * U, x1 = X0 + LEN * U;
    /* the water, the seabed, the hull, then the water's tint over what is under */
    fluidBox(ctx, 60, 1340, SURF, SURF + SEA * U);
    line(ctx, 60, SURF + SEA * U, 1340, SURF + SEA * U, PAL.muted, 4);
    text(ctx, fluidPhrase(rho) === liquidNamed(rho) ? liquidNamed(rho) + ', ρ_fl = ' + fmt(rho, 0) + ' kg/m³' : 'water of density ρ_fl = ' + fmt(rho, 0) + ' kg/m³', 1330, SURF + 32, dc, { size: 20, weight: 600, align: 'right' });
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3.5; ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.moveTo(X0, top); ctx.lineTo(x1 - 70, top); ctx.lineTo(x1, top + 30); ctx.lineTo(x1 - 40, bottom); ctx.lineTo(X0 + 30, bottom); ctx.lineTo(X0, top + 60); ctx.closePath(); ctx.fill(); ctx.stroke();
    /* the deckhouse at the stern */
    ctx.fillRect(X0 + 40, top - 46, 78, 46); ctx.strokeRect(X0 + 40, top - 46, 78, 46); ctx.restore();
    /* the cargo, one box for every 5 × 10⁶ kg and a part box for the rest */
    const boxes = mc / 5e6, full = Math.floor(boxes + 1e-9), part = boxes - full;
    for (let i = 0; i < 20; i++) {
      const row = Math.floor(i / 10), col = i % 10, bx = X0 + 150 + col * 50, by = top - 24 - row * 24;
      if (i < full) panelRect(ctx, bx, by, 46, 22, PAL.ink, alpha(PAL.ink, 0.12), 2);
      else if (i === full && part > 0.02) panelRect(ctx, bx, by, 46 * part, 22, PAL.ink, alpha(PAL.ink, 0.12), 2);
    }
    if (mc > 0) text(ctx, 'cargo, ' + fmt(cargo.v, 0) + ' × 10⁶ kg', X0 + 150 + Math.min(10, Math.max(1, Math.ceil(boxes))) * 50 + 10, top - 36, PAL.ink, { size: 19, weight: 600, bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'steel hull, 1.00 × 10⁷ kg', X0 - 16, (top + bottom) / 2 - 14, PAL.ink, { size: 19, weight: 600, align: 'right' });
    text(ctx, '100 m by 40 m by 25 m, 1.00 × 10⁵ m³', X0 - 16, (top + bottom) / 2 + 14, PAL.muted, { size: 18, align: 'right' });
    fluidTint(ctx, 60, 1340, SURF, SURF + SEA * U);
    text(ctx, 'the surface', 1330, SURF - 18, PAL.muted, { size: 18, align: 'right' });
    /* the two forces on the ship, at its centre, one scale */
    const cx = (X0 + x1) / 2, cy = (top + bottom) / 2;
    arrow(ctx, cx - 14, cy, cx - 14, cy - FB * KW, fc, 5);
    text(ctx, 'F_B = ' + sci(FB) + ' N', cx - 30, cy - FB * KW / 2, fc, { size: 21, weight: 600, align: 'right', bg: alpha(PAL.panel, 0.85) });
    arrow(ctx, cx + 14, cy, cx + 14, cy + W * KW, fc, 5);
    text(ctx, 'w = ' + sci(W) + ' N', cx + 30, cy + W * KW / 2, fc, { size: 21, weight: 600, bg: alpha(PAL.panel, 0.85) });
    dot(ctx, cx, cy, PAL.ink, true, 9);
    /* how much of the hull is under */
    if (floats) {
      vbracket(ctx, x1 + 40, SURF, bottom, PAL.ink, 'fraction submerged ' + fmt(f, 3), 1);
      line(ctx, x1 - 40, bottom, x1 + 40, bottom, alpha(PAL.ink, 0.35), 2, [4, 8]);
    } else text(ctx, 'the ship rests on the bottom', x1 + 40, SURF + SEA * U - 60, PAL.ink, { size: 20, weight: 600 });
    topline(ctx, mc === 0 ? 'With no cargo the hull’s average density is ' + fmt(rav, 0) + ' kg/m³, ' + (rho === 1000 ? 'a tenth of the water’s' : fmt(f * 100, 1) + ' percent of the water’s') + ', so ' + (rho === 1000 ? 'a tenth' : fmt(f * 100, 1) + ' percent') + ' of the hull is submerged.'
      : floats ? 'With a cargo of ' + fmt(cargo.v, 0) + ' × 10⁶ kg the hull’s average density is ' + fmt(rav, 0) + ' kg/m³, so ' + fmt(f * 100, 1) + ' percent of it is submerged.'
        : 'With a cargo of ' + fmt(cargo.v, 0) + ' × 10⁶ kg the hull’s average density is ' + fmt(rav, 0) + ' kg/m³, more than the water’s, so the ship sinks.');
    const fsea = rav / 1025, ffresh = rav / 1000;
    readout(d.readout, `\\text{fraction submerged} = \\frac{\\krhoobj}{\\krhofl} = \\frac{${fmt(rav, 0)}\\ \\text{kg/m}^3}{${fmt(rho, 0)}\\ \\text{kg/m}^3} = ${fmt(f, 3)}` + (floats ? '' : ' > 1'),
      'The steel and its cargo together, ' + sci(mt) + ' kg spread over the hull’s 1.00 × 10⁵ m³, give the average density. '
      + (floats ? 'While the ship floats the buoyant force equals its weight, F_B = w = ' + sci(W) + ' N, and it displaces ' + sci(f * VH) + ' m³ of water. '
        + (rho === 1000 ? 'In sea water of 1025 kg/m³ the same load would sit at ' + fmt(fsea, 3) + ', a little higher.' : 'In fresh water of 1000 kg/m³ the same load would sit at ' + fmt(ffresh, 3) + (ffresh > 1 ? ', which is more than one, so there it would sink.' : ', a little lower.'))
        : 'Even with every one of its 1.00 × 10⁵ m³ under water the hull displaces only ' + sci(FB) + ' N of water, less than its weight of ' + sci(W) + ' N, so nothing holds it up and it goes to the bottom. Example 11.8 gives the limit: a load of 90 × 10⁶ kg, nine times the steel’s own mass, brings the deck to the water.'));
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 11.21: the hydrometer. A weighted glass float sinks until it has
   displaced its own mass of fluid, and the stem is marked where the surface
   falls in fluids of each specific gravity. One slider, the fluid, because
   the instrument has one input. Still.
===================================================================== */
(function () {
  const d = sim('sim-hydrometer', 720);
  const MH = 35.0, VB = 20.0, AS = 3.00, STEM = 12.3;                                /* 35.0 g, a bulb of 20.0 cm³, a stem of 3.00 cm² and 12.3 cm */
  const rf = ctl(d.controls, { label: '\\krhofl', cls: 'density', min: 650, max: 1300, step: 5, value: 870, unit: 'kg/m³', dec: 0, detents: LIQUIDS, snap: true, aria: 'the density of the fluid the hydrometer floats in' });
  const K = 23, SURF = 345, HX = 560, BX1 = 360, BX2 = 760, BOT = 700, RB = Math.cbrt(3 * VB / (4 * Math.PI)) * K, SW = Math.sqrt(AS / Math.PI) * K;
  const zOf = (s) => (MH / s - VB) / AS;                                              /* cm of stem under the surface in a fluid of specific gravity s */
  function draw() {
    const { ctx } = begin(d.c);
    const dc = C('density');
    const rho = rf.v, s = rho / 1000, z = zOf(s), vsub = MH / s;
    const bulbTop = SURF + z * K, stemTop = bulbTop - STEM * K, bulbC = bulbTop + RB;
    /* the beaker and its fluid */
    fluidBox(ctx, BX1, BX2, SURF, BOT);
    glass(ctx, BX1, BX2, 130, BOT);
    /* the hydrometer: the lead at the bottom of the bulb, the bulb, the stem */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(HX, bulbC, RB, 0, TAU); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.rect(HX - SW, stemTop, 2 * SW, bulbTop - stemTop + RB * 0.4); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.arc(HX, bulbC, RB, 0, TAU); ctx.fill(); ctx.stroke();
    ctx.fillStyle = PAL.ink; ctx.beginPath(); ctx.arc(HX, bulbC, RB, 0.35, Math.PI - 0.35); ctx.closePath(); ctx.fill();
    ctx.restore();
    text(ctx, 'lead shot', HX + RB + 14, bulbC + RB * 0.6, PAL.ink, { size: 18, bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'air-filled glass bulb', HX + RB + 14, bulbC - RB * 0.3, PAL.muted, { size: 18, bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'the hydrometer, 35.0 g', HX - RB - 14, bulbC, PAL.muted, { size: 18, align: 'right', bg: alpha(PAL.panel, 0.85) });
    /* the scale on the stem: a mark wherever the surface falls in a fluid of that specific gravity */
    for (let m = 65; m <= 130; m += 5) {
      const sg = m / 100, y = bulbTop - zOf(sg) * K, labelled = m <= 85 || m % 10 === 0;
      line(ctx, HX - SW + 2, y, HX - SW + (labelled ? 16 : 9), y, PAL.ink, 2);
      if (labelled) text(ctx, sg.toFixed(2), HX - SW + 22, y, PAL.ink, { size: m <= 100 ? 17 : 15, weight: 600 });
    }
    fluidTint(ctx, BX1, BX2, SURF, BOT);
    /* the stem near the surface, magnified, so the reading can be read: the same marks at 2.4 times the scale */
    const IX = 1130, IY1 = 130, IY2 = 690, IYS = (IY1 + IY2) / 2, K2 = 2.4 * K, SW2 = 2.4 * SW, IW = 150;
    line(ctx, HX + SW, SURF - 14, IX - IW, IY1, alpha(PAL.ink, 0.3), 1.5, [5, 6]);
    line(ctx, HX + SW, SURF + 14, IX - IW, IY2, alpha(PAL.ink, 0.3), 1.5, [5, 6]);
    ctx.save(); ctx.beginPath(); ctx.rect(IX - IW, IY1, 2 * IW, IY2 - IY1); ctx.clip();
    ctx.fillStyle = PAL.panel; ctx.fillRect(IX - IW, IY1, 2 * IW, IY2 - IY1);
    fluidBox(ctx, IX - IW, IX + IW, IYS, IY2);
    panelRect(ctx, IX - SW2, IY1 - 10, 2 * SW2, IY2 - IY1 + 20, PAL.ink, PAL.panel, 3);
    for (let m = 65; m <= 130; m += 1) {
      const sg = m / 100, y = IYS - (zOf(sg) - z) * K2, five = m % 5 === 0;
      if (y < IY1 - 4 || y > IY2 + 4) continue;
      line(ctx, IX - SW2 + 2, y, IX - SW2 + (five ? 22 : 11), y, PAL.ink, five ? 2.5 : 1.5);
      if (five) text(ctx, sg.toFixed(2), IX - SW2 + 30, y, PAL.ink, { size: 21, weight: 600 });
    }
    fluidTint(ctx, IX - IW, IX + IW, IYS, IY2);
    ctx.restore();
    ctx.save(); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.strokeRect(IX - IW, IY1, 2 * IW, IY2 - IY1); ctx.restore();
    text(ctx, 'the stem at the surface, magnified', IX, IY1 - 18, PAL.muted, { size: 18, align: 'center' });
    arrow(ctx, IX + IW - 12, IYS, IX + SW2 + 14, IYS, PAL.ink, 3);
    text(ctx, 'reads ' + s.toFixed(2), IX + SW2 + 30, IYS - 26, PAL.ink, { size: 21, weight: 600 });
    text(ctx, fluidPhrase(rho) === liquidNamed(rho) ? liquidNamed(rho) + ', ρ_fl = ' + fmt(rho, 0) + ' kg/m³' : 'a fluid of density ρ_fl = ' + fmt(rho, 0) + ' kg/m³', BX1 - 14, SURF + 30, dc, { size: 20, weight: 600, align: 'right' });
    topline(ctx, 'In ' + fluidPhrase(rho) + ' the hydrometer sinks until it displaces its own weight, and the surface crosses the stem at ' + s.toFixed(2) + '.');
    readout(d.readout, `\\text{specific gravity} = \\frac{\\krhofl}{\\krhow} = \\frac{${fmt(rho, 0)}\\ \\text{kg/m}^3}{1000\\ \\text{kg/m}^3} = ${s.toFixed(3)}`,
      'The hydrometer has a mass of 35.0 g, so it sinks until it has displaced 35.0 g of fluid, which is ' + fmt(vsub, 1) + ' cm³ of this one' + (rho === 1000 ? '.' : ' and would be 35.0 cm³ of water.') + ' A denser fluid is displaced in a smaller volume, so less of the stem goes under and the instrument rides higher, which is why the smallest numbers are printed at the top. The marks are set where the surface falls in each fluid, and they crowd together toward the top because each step in specific gravity buys less stem as the number grows.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 11.23: the coin weighed in air and submerged. Two balances side by
   side read the coin's mass and its apparent mass; the loss is the mass of
   the liquid the coin displaces, and the readout works back to its density
   as Example 11.10 does. Still: two weighings have no clock.
===================================================================== */
(function () {
  const d = sim('sim-coin', 700);
  const mass = ctl(d.controls, { label: 'm', cls: '', min: 1, max: 20, step: 0.01, value: 8.63, unit: 'g', dec: 3, aria: 'the mass of the coin' });
  const rc = ctl(d.controls, { label: '\\krho_{\\text{c}}', cls: 'density', min: 2, max: 20, step: 0.01, value: 10.4, unit: 'g/cm³', dec: 2, detents: [{ v: 2.7, label: 'aluminum' }, { v: 7.8 }, { v: 8.44 }, { v: 8.8 }, { v: 10.49, label: 'silver' }, { v: 11.3 }, { v: 19.3 }, { v: 19.32, label: 'gold' }], snap: true, aria: 'the density of the metal the coin is made of' });
  const rf = ctl(d.controls, { label: '\\krhofl', cls: 'density', min: 0.6, max: 1.4, step: 0.005, value: 1, unit: 'g/cm³', dec: 3, detents: [{ v: 0.68, label: 'gasoline' }, { v: 0.79 }, { v: 0.92 }, { v: 1, label: 'water' }, { v: 1.025 }, { v: 1.05 }, { v: 1.26, label: 'glycerin' }], snap: true, aria: 'the density of the liquid the coin is submerged in' });
  const KM = 8;                                                                       /* canvas units per gram of force, one scale for every arrow */
  /* one balance: a mount, the scale with its reading, a wire, and the coin at (x, cy) */
  function balance(ctx, x, cy, reading, sub) {
    fixed(ctx, x - 110, 100, 220, 18);
    line(ctx, x, 118, x, 132, PAL.ink, 3);
    panelRect(ctx, x - 80, 132, 160, 64, PAL.ink, PAL.panel, 3);
    text(ctx, reading, x, 164, PAL.ink, { size: 28, weight: 600, align: 'center' });
    line(ctx, x, 196, x, cy - 44, PAL.ink, 2);
    text(ctx, sub, x, 220, PAL.muted, { size: 18, align: 'center', bg: PAL.panel });
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(x, cy, 44, 0, TAU); ctx.fill(); ctx.stroke();
    ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(x, cy, 33, 0, TAU); ctx.stroke(); ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('force'), dc = C('density');
    const m = mass.v, rhoc = rc.v, rho = rf.v, V = m / rhoc, mw = rho * V, mapp = m - mw;
    const AX = 340, BX = 1040, CY = 410;
    /* (a) in air */
    balance(ctx, AX, CY, m.toFixed(3) + ' g', 'the balance reads the mass, m');
    arrow(ctx, AX + 56, CY - 30, AX + 56, CY - 30 - m * KM, fc, 4);
    text(ctx, 'T = w', AX + 70, CY - 30 - m * KM / 2, fc, { size: 20, weight: 600 });
    arrow(ctx, AX, CY + 44, AX, CY + 44 + m * KM, fc, 4);
    text(ctx, 'w = mg', AX + 14, CY + 44 + m * KM / 2, fc, { size: 20, weight: 600 });
    text(ctx, '(a) in air', AX, 660, PAL.muted, { size: 19, align: 'center' });
    /* (b) submerged: the beaker, the coin in it, the tint over it */
    const BL = BX - 150, BR = BX + 150, ST = CY - 120, BT = CY + 220;
    fluidBox(ctx, BL, BR, ST, BT);
    glass(ctx, BL, BR, ST - 40, BT);
    balance(ctx, BX, CY, (mapp > 0 ? mapp : 0).toFixed(3) + ' g', 'the balance reads the apparent mass');
    arrow(ctx, BX + 56, CY - 30, BX + 56, CY - 30 - mapp * KM, fc, 4);
    text(ctx, 'T = w − F_B', BX + 70, CY - 30 - mapp * KM / 2, fc, { size: 20, weight: 600, bg: alpha(PAL.panel, 0.85) });
    arrow(ctx, BX - 56, CY + 30, BX - 56, CY + 30 - mw * KM, fc, 4);
    text(ctx, 'F_B', BX - 70, CY + 30 - Math.max(mw * KM, 24) / 2, fc, { size: 20, weight: 600, align: 'right', bg: alpha(PAL.panel, 0.85) });
    arrow(ctx, BX, CY + 44, BX, CY + 44 + m * KM, fc, 4);
    text(ctx, 'w = mg', BX + 14, CY + 44 + m * KM / 2, fc, { size: 20, weight: 600, bg: alpha(PAL.panel, 0.85) });
    fluidTint(ctx, BL, BR, ST, BT);
    text(ctx, (liquidNamed(rho * 1000) ?? 'a liquid') + ', ρ_fl = ' + rho.toFixed(3) + ' g/cm³', BL + 12, BT - 22, dc, { size: 19, weight: 600, bg: alpha(PAL.panel, 0.85) });
    text(ctx, '(b) submerged', BX, 660, PAL.muted, { size: 19, align: 'center' });
    /* what the coin is */
    text(ctx, 'the coin: ' + m.toFixed(3) + ' g, V = ' + sf(V) + ' cm³', 700, 380, PAL.ink, { size: 20, weight: 600, align: 'center' });
    text(ctx, 'ρ_c = ' + rhoc.toFixed(2) + ' g/cm³', 700, 410, dc, { size: 20, weight: 600, align: 'center' });
    const near = METALS.filter(([v]) => Math.abs(v - rhoc) / v < 0.03).map(([, n]) => n);
    const below = METALS.filter(([v]) => v < rhoc).sort((a, b) => b[0] - a[0])[0], above = METALS.filter(([v]) => v > rhoc).sort((a, b) => a[0] - b[0])[0];
    const nameLine = near.length ? 'A density of ' + rhoc.toFixed(2) + ' g/cm³ is within three percent of ' + near.join(' and ') + ' in Table 11.1.'
      : 'A density of ' + rhoc.toFixed(2) + ' g/cm³ matches no metal of Table 11.1; it lies between ' + (below ? below[1] + ' (' + below[0] + ')' : 'nothing') + ' and ' + (above ? above[1] + ' (' + above[0] + ')' : 'nothing') + '.';
    topline(ctx, 'A coin of ' + m.toFixed(3) + ' g whose density is ' + rhoc.toFixed(2) + ' g/cm³ displaces ' + sf(V) + ' cm³ of ' + (liquidNamed(rho * 1000) ?? 'the liquid') + ', so its apparent mass submerged is ' + mapp.toFixed(3) + ' g.');
    readout(d.readout, `m - m_{\\text{app}} = ${mw.toFixed(3)}\\ \\text{g} = \\krhofl V_{\\text{w}} \\quad\\Rightarrow\\quad \\krho_{\\text{c}} = \\frac{m}{V_{\\text{w}}} = \\frac{${m.toFixed(3)}\\ \\text{g}}{${sf(V)}\\ \\text{cm}^3} = ${sf(rhoc)}\\ \\text{g/cm}^3`,
      'The balance reads ' + mw.toFixed(3) + ' g less with the coin under the surface because the liquid pushes up on it with a buoyant force equal to the weight of ' + sf(V) + ' cm³ of liquid, which is the coin’s own volume; dividing the mass by that volume gives the density back. ' + nameLine + ' Gold and tungsten, at 19.32 and 19.30 g/cm³, differ by a tenth of a percent, so telling a gold-plated tungsten ingot from gold this way asks for a balance good to a few parts in a hundred thousand.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM: a block of one average density in a fluid of another. The two
   densities of the fraction submerged on two sliders, and the block settles
   to their ratio or sinks when it passes one. Still: it answers its sliders
   and nothing else.
===================================================================== */
(function () {
  const d = sim('sim-floating', 600);
  const ro = ctl(d.controls, { label: '\\krhoobj', cls: 'density', min: 50, max: 1500, step: 5, value: 970, unit: 'kg/m³', dec: 0, detents: [{ v: 100, label: 'polystyrene' }, { v: 240 }, { v: 917, label: 'ice' }, { v: 970 }, { v: 1000 }], snap: true, aria: 'the average density of the block' });
  const rf = ctl(d.controls, { label: '\\krhofl', cls: 'density', min: 600, max: 1300, step: 5, value: 1000, unit: 'kg/m³', dec: 0, detents: LIQUIDS_SHORT, snap: true, aria: 'the density of the fluid' });
  const X1 = 330, X2 = 1010, SURF = 300, BOT = 570, SIDE = 190, KW = 0.06;              /* KW: canvas units per kg/m³ of density-weight, one scale for both arrows */
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('force'), dc = C('density');
    const rob = ro.v, rho = rf.v, f = rob / rho, floats = f < 1, even = Math.abs(f - 1) < 1e-9;
    const bottom = floats ? SURF + f * SIDE : even ? SURF + 60 + SIDE : BOT, top = bottom - SIDE, bx = (X1 + X2) / 2 - SIDE / 2;
    fluidBox(ctx, X1, X2, SURF, BOT);
    glass(ctx, X1, X2, 130, BOT);
    panelRect(ctx, bx, top, SIDE, SIDE, PAL.ink, PAL.panel, 3.5);
    fluidTint(ctx, X1, X2, SURF, BOT);
    /* the two forces on the block, one scale; while it floats they are equal */
    const cx = bx + SIDE / 2, cy = top + SIDE / 2, W = rob * KW, FB = (floats || even ? rob : rho) * KW;
    arrow(ctx, cx - 14, cy, cx - 14, cy - FB, fc, 5);
    text(ctx, 'F_B', cx - 30, cy - FB / 2, fc, { size: 21, weight: 600, align: 'right', bg: alpha(PAL.panel, 0.85) });
    arrow(ctx, cx + 14, cy, cx + 14, cy + W, fc, 5);
    text(ctx, 'w', cx + 30, cy + W / 2, fc, { size: 21, weight: 600, bg: alpha(PAL.panel, 0.85) });
    dot(ctx, cx, cy, PAL.ink, true, 9);
    /* the block and the fluid named, and the part under the surface bracketed */
    text(ctx, 'the block, ρ̄_obj = ' + fmt(rob, 0) + ' kg/m³', X1 - 20, top + 30 < 130 ? 150 : top + 30, dc, { size: 20, weight: 600, align: 'right' });
    text(ctx, fluidPhrase(rho) === liquidNamed(rho) ? liquidNamed(rho) + ', ρ_fl = ' + fmt(rho, 0) + ' kg/m³' : 'a fluid of density ρ_fl = ' + fmt(rho, 0) + ' kg/m³', X1 + 16, SURF + 30, dc, { size: 20, weight: 600 });
    text(ctx, 'the surface', X2 - 14, SURF - 18, PAL.muted, { size: 18, align: 'right' });
    if (floats) {
      vbracket(ctx, X2 + 40, SURF, bottom, PAL.ink, 'fraction submerged ' + fmt(f, 3), 1);
      line(ctx, bx + SIDE, bottom, X2 + 40, bottom, alpha(PAL.ink, 0.35), 2, [4, 8]);
    } else text(ctx, even ? 'the block hangs wherever it is placed' : 'the block rests on the bottom', X2 + 40, BOT - 60, PAL.ink, { size: 20, weight: 600 });
    topline(ctx, floats ? 'An object whose average density is ' + fmt(rob, 0) + ' kg/m³ floats in ' + fluidPhrase(rho) + ' with ' + fmt(f * 100, 1) + ' percent of its volume submerged.'
      : even ? 'An object whose average density is ' + fmt(rob, 0) + ' kg/m³ equals the fluid’s, so it hangs wherever it is placed, neither rising nor sinking.'
        : 'An object whose average density is ' + fmt(rob, 0) + ' kg/m³ is denser than ' + fluidPhrase(rho) + ', so it sinks to the bottom.');
    const sg = rob / 1000;
    readout(d.readout, `\\text{fraction submerged} = \\frac{\\krhoobj}{\\krhofl} = \\frac{${fmt(rob, 0)}\\ \\text{kg/m}^3}{${fmt(rho, 0)}\\ \\text{kg/m}^3} = ${fmt(f, 3)}` + (floats ? '' : even ? ' = 1' : ' > 1'),
      (rho === 1000 ? 'Its specific gravity, ρ̄/ρ_w, is ' + fmt(sg, 3) + ', and since the fluid here is water the fraction submerged and the specific gravity are the same number. ' + (floats ? 'In sea water at 1025 kg/m³ the same object would float with ' + fmt(rob / 1025, 3) + ' of its volume under.' : sg > 1 ? 'A specific gravity above one sinks in water.' : '')
        : 'Its specific gravity, ρ̄/ρ_w, is ' + fmt(sg, 3) + ' whatever it floats in, since that ratio is taken against water; the fraction submerged in this fluid is ' + fmt(f, 3) + (floats ? ', so the two numbers differ here.' : '.')) + (floats ? ' While it floats the buoyant force equals its weight, so the two arrows on the block are the same length.' : even ? '' : ' Under water the buoyant force is the weight of the fluid the whole block displaces, which is less than the block’s own weight, so the two arrows differ.'));
  }
  register(d.fig, { update: () => {}, draw });
})();
};
