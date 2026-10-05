/* Figures for section 26.3 Color and Color Vision. The figures colour position,
   for the wavelength, and intensity, for the primaries' sliders and the emission
   spectra's axis; the relative sensitivity is a ratio and stays in ink. This is the
   one page of the chapter about colour itself, so light, the cone curves at their
   peaks, the primaries, the dark screen, the objects' faces, the tint a source gives
   a white cloth and the grey strips are drawn in their true colours through F.fact:
   those hex literals are the physical fact. The four light sources and the tablecloth
   are referents, and each source's emission spectrum wears its referent colour.
   Nothing here moves, so every figure registers no cycle and redraws on its controls
   alone (root rule 14). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['26.3'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, cat, ctl, choice, register, begin, line, arrow, dot, text, topline, axes, curve, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* the hue the eye sees for light of one wavelength in nanometres */
function spectral(nm) {
  let r = 0, g = 0, b = 0;
  if (nm >= 380 && nm < 440) { r = -(nm - 440) / 60; b = 1; }
  else if (nm < 490) { g = (nm - 440) / 50; b = 1; }
  else if (nm < 510) { g = 1; b = -(nm - 510) / 20; }
  else if (nm < 580) { r = (nm - 510) / 70; g = 1; }
  else if (nm < 645) { r = 1; g = -(nm - 645) / 65; }
  else if (nm <= 780) { r = 1; }
  let k = 1;
  if (nm >= 380 && nm < 420) k = 0.3 + (0.7 * (nm - 380)) / 40;
  else if (nm > 700 && nm <= 780) k = 0.3 + (0.7 * (780 - nm)) / 80;
  const ch = (v) => Math.round(255 * Math.pow(Math.max(0, Math.min(1, v)) * k, 0.8)).toString(16).padStart(2, '0');
  return '#' + ch(r) + ch(g) + ch(b);
}
const hex = (r, g, b) => '#' + [r, g, b].map((v) => Math.round(255 * Math.max(0, Math.min(1, v))).toString(16).padStart(2, '0')).join('');
/* the name of the hue of an (r, g, b) mixture, each 0..1 */
function hueName(r, g, b) {
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b);
  if (mx < 0.08) return 'black';
  if (mx - mn < 0.12 * mx) return mx > 0.85 ? 'white' : 'grey';
  let h;
  if (mx === r) h = (60 * ((g - b) / (mx - mn)) + 360) % 360;
  else if (mx === g) h = 60 * ((b - r) / (mx - mn)) + 120;
  else h = 60 * ((r - g) / (mx - mn)) + 240;
  const pale = mn > 0.45 * mx;
  const name = h < 15 || h >= 335 ? (pale ? 'pink' : 'red') : h < 45 ? 'orange' : h < 70 ? 'yellow' : h < 160 ? 'green' : h < 200 ? 'cyan' : h < 255 ? 'blue' : h < 290 ? 'violet' : 'magenta';
  return name;
}

/* =====================================================================
   FIGURE 26.11 · sim-cone-sensitivity · still · flat graph
   Normalized sensitivity, 0 to 100, against wavelength, 400 to 700 nm. Each curve
   is a skewed bell through the book's peaks, 420, 498, 534 and 564 nm, wider on its
   short-wavelength side, with the long flat foot the book draws under the green and
   red cones and the rods. The strip beneath is painted in its true colours.
===================================================================== */
(function () {
  const d = sim('sim-cone-sensitivity', 600);
  const lam = ctl(d.controls, { label: '\\klam', cls: 'position', min: 400, max: 700, step: 1, value: 580, unit: 'nm', dec: 0, aria: 'the wavelength of the light',
    detents: [420, 534, 564] });
  /* a skewed bell through its peak p, with the flat foot the book draws on its short side */
  const bell = (p, wl, wr, foot) => (x) => {
    const g = Math.exp(-0.5 * ((x - p) / (x < p ? wl : wr)) ** 2);
    return x < p ? foot + (100 - foot) * g : 100 * g;
  };
  const CURVES = [
    { key: 'blue', name: 'blue cones', f: bell(420, 55, 42, 0), nm: 440 },
    { key: 'green', name: 'green cones', f: bell(534, 42, 42, 34), nm: 534 },
    { key: 'red', name: 'red cones', f: bell(564, 50, 36, 28), nm: 640 },
    { key: 'rods', name: 'rods', f: bell(498, 36, 38, 32), nm: 0 },
  ];
  const box = { l: 150, r: 1300, t: 160, b: 430 };

  function draw() {
    const { ctx } = begin(d.c);
    const v = lam.v;
    CURVES.forEach((c) => { c.color = c.nm ? F.fact(spectral(c.nm)) : PAL.ink; });
    const { X, Y } = axes(ctx, box, [400, 700], [0, 100], { nx: 6, ny: 2, xl: 'λ (nm)', xc: C('position'), yl: 'normalized sensitivity', yc: PAL.ink });
    /* the visible strip beneath the axis */
    for (let x = box.l; x < box.r; x += 2) { ctx.save(); ctx.fillStyle = F.fact(spectral(400 + ((x - box.l) / (box.r - box.l)) * 300)); ctx.fillRect(x, box.b + 72, 2.6, 20); ctx.restore(); }
    CURVES.forEach((c) => {
      if (c.key === 'rods') {
        ctx.save(); ctx.setLineDash([3, 8]); ctx.lineCap = 'round'; curve(ctx, c.f, 400, 700, X, Y, alpha(PAL.ink, 0.85), 4, 160); ctx.restore();
      } else curve(ctx, c.f, 400, 700, X, Y, c.color, 5, 160);
    });
    /* each curve named at its peak */
    const LAB = { blue: [420, 100, 'center', 52], rods: [498, 100, 'center', 18], green: [534, 100, 'center', 52], red: [575, 100, 'left', 18] };
    CURVES.forEach((c) => {
      const [p, yv, al, up] = LAB[c.key];
      text(ctx, c.name + (c.key === 'blue' ? ' · 420 nm' : ' · ' + p + ' nm').replace('575', '564'), X(p), Y(yv) - up, c.key === 'rods' ? PAL.muted : PAL.ink, { size: 18, align: al, bg: PAL.panel });
    });
    /* the light itself: a drop line at λ and the hue it produces */
    const xl = X(v), sw = spectral(v);
    line(ctx, xl, box.t - 4, xl, box.b, C('position'), 3, [4, 8]);
    const resp = CURVES.map((c) => c.f(v));
    CURVES.forEach((c, i) => { if (c.key !== 'rods') dot(ctx, xl, Y(resp[i]), c.color, true, 9); });
    ctx.save(); ctx.fillStyle = F.fact(sw); ctx.strokeStyle = alpha(PAL.ink, 0.6); ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(xl, box.b + 82, 16, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, 'λ = ' + fmt(v, 0) + ' nm', xl, box.b + 125, C('position'), { size: 20, weight: 600, align: 'center', bg: PAL.panel });

    const [b, g, r] = resp.slice(0, 3);
    const hue = hueName(...[1, 3, 5].map((i) => parseInt(sw.slice(i, i + 2), 16) / 255));
    const order = [['red', r], ['green', g], ['blue', b]].sort((a, c) => c[1] - a[1]);
    topline(ctx, `Light of ${fmt(v, 0)} nm is seen as ${hue}; it stimulates the ${order[0][0]} cones most and the ${order[2][0]} cones least.`);
    const n = (x) => fmt(x, x >= 10 ? 0 : x >= 1 ? 1 : 2);
    readout(d.readout, `\\klam = ${fmt(v, 0)}\\ \\text{nm},\\quad \\text{red} : \\text{green} : \\text{blue} = ${n(r)} : ${n(g)} : ${n(b)}`,
      'The hue is set by the ratio of the three stimulations, not by any one of them.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   SIM · sim-three-primaries · still · flat
   Three discs of red, green and blue light overlapping on a dark screen; where they
   overlap the light adds channel by channel. The swatch at the right is the whole
   mixture, and its hue is named.
===================================================================== */
(function () {
  const d = sim('sim-three-primaries', 520);
  const R = ctl(d.controls, { label: '\\text{red}', cls: 'intensity', min: 0, max: 100, step: 1, value: 100, unit: '%', dec: 0, aria: 'the intensity of the red light', detents: [0, 50, 100] });
  const G = ctl(d.controls, { label: '\\text{green}', cls: 'intensity', min: 0, max: 100, step: 1, value: 100, unit: '%', dec: 0, aria: 'the intensity of the green light', detents: [0, 50, 100] });
  const B = ctl(d.controls, { label: '\\text{blue}', cls: 'intensity', min: 0, max: 100, step: 1, value: 0, unit: '%', dec: 0, aria: 'the intensity of the blue light', detents: [0, 50, 100] });
  const CX = 450, CY = 270, RR = 130, SEP = 78;
  const CENT = [[CX - SEP, CY - 50], [CX + SEP, CY - 50], [CX, CY + 80]];

  function draw() {
    const { ctx } = begin(d.c);
    const r = R.v / 100, g = G.v / 100, b = B.v / 100;
    /* the dark screen */
    ctx.save(); ctx.fillStyle = F.fact('#111111'); ctx.fillRect(160, 80, 580, 420); ctx.restore();
    ctx.save(); ctx.beginPath(); ctx.rect(160, 80, 580, 420); ctx.clip();
    ctx.globalCompositeOperation = 'lighter';
    [[r, 0, 0], [0, g, 0], [0, 0, b]].forEach((c, i) => {
      ctx.fillStyle = F.fact(hex(...c)); ctx.beginPath(); ctx.arc(CENT[i][0], CENT[i][1], RR, 0, 2 * Math.PI); ctx.fill();
    });
    ctx.restore();
    text(ctx, 'red', CENT[0][0] - 95, CENT[0][1] - 105, PAL.ink, { size: 20, align: 'center', bg: PAL.panel });
    text(ctx, 'green', CENT[1][0] + 95, CENT[1][1] - 105, PAL.ink, { size: 20, align: 'center', bg: PAL.panel });
    text(ctx, 'blue', CENT[2][0] + 180, CENT[2][1] + 70, PAL.ink, { size: 20, align: 'center', bg: PAL.panel });

    /* the mixture of all three */
    const mix = hex(r, g, b), name = hueName(r, g, b);
    ctx.save(); ctx.fillStyle = F.fact(mix); ctx.strokeStyle = alpha(PAL.ink, 0.6); ctx.lineWidth = 2; ctx.fillRect(900, 170, 300, 200); ctx.strokeRect(900, 170, 300, 200); ctx.restore();
    text(ctx, 'all three together', 1050, 145, PAL.ink, { size: 20, align: 'center' });
    text(ctx, name, 1050, 400, PAL.ink, { size: 24, weight: 600, align: 'center' });

    topline(ctx, `Red at ${fmt(R.v, 0)} %, green at ${fmt(G.v, 0)} % and blue at ${fmt(B.v, 0)} % together are seen as ${name}.`);
    readout(d.readout, `\\text{${name}} = ${fmt(r, 2)}\\,\\text{red} + ${fmt(g, 2)}\\,\\text{green} + ${fmt(b, 2)}\\,\\text{blue}`);
  }
  hover(d.stage, () => [
    { x: CX, y: CY - 40, r: 30, name: 'red and green: yellow' },
    { x: CX, y: CY + 20, r: 22, name: 'all three: white' },
  ]);
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 26.12 · sim-true-color · still · flat
   Six rays, red to violet, fall from the upper left on the face of one object and
   the ones it reflects leave toward the upper right; an absorbed ray ends in a dot
   on the surface. A light carries the rays it names; an object reflects the rays
   of its true color.
===================================================================== */
(function () {
  const d = sim('sim-true-color', 520);
  const RAYS = [['red', 650], ['orange', 605], ['yellow', 578], ['green', 530], ['blue', 465], ['violet', 415]];
  const LIGHTS = { white: RAYS.map((r) => r[0]), red: ['red'], green: ['green'], blue: ['blue'] };
  const OBJECTS = {
    white: { reflects: RAYS.map((r) => r[0]), face: '#f4f4f0' },
    red: { reflects: ['red'], face: '#d42a20' },
    blue: { reflects: ['blue'], face: '#2a4fd4' },
    black: { reflects: [], face: '#141414' },
  };
  const opts = (o) => Object.keys(o).map((k) => ({ value: k, label: k }));
  const light = choice(d.controls, { label: '\\text{light}', options: opts(LIGHTS), value: 'white', aria: 'the light that falls on the object' });
  const obj = choice(d.controls, { label: '\\text{object}', options: opts(OBJECTS), value: 'blue', aria: 'the object' });
  const Y0 = 400, X0 = 700;

  function draw() {
    const { ctx } = begin(d.c);
    const L = light.value, O = obj.value, inc = LIGHTS[L], refl = inc.filter((c) => OBJECTS[O].reflects.includes(c));
    /* the object, a slab seen edge-on with its face up */
    ctx.save(); ctx.fillStyle = F.fact(obj.mixColor((k) => OBJECTS[k].face)); ctx.strokeStyle = alpha(PAL.ink, 0.7); ctx.lineWidth = 2;
    ctx.fillRect(X0 - 330, Y0, 660, 46); ctx.strokeRect(X0 - 330, Y0, 660, 46); ctx.restore();
    text(ctx, O + ' object', X0, Y0 + 80, PAL.ink, { size: 22, align: 'center' });
    RAYS.forEach(([name, nm], i) => {
      const on = inc.includes(name), a = light.mix((k) => (LIGHTS[k].includes(name) ? 1 : 0));
      if (a <= 0.01) return;
      const hx = X0 - 150 + i * 60, col = F.fact(spectral(nm));
      F.faded(ctx, a, [0, 0], () => {
        arrow(ctx, hx - 330, Y0 - 300, hx - 4, Y0 - 6, col, 4);
        if (refl.includes(name) && on) arrow(ctx, hx + 4, Y0 - 6, hx + 330, Y0 - 300, col, 4);
        else dot(ctx, hx, Y0 - 3, col, true, 7);
      });
    });
    text(ctx, L + ' light', X0 - 500, Y0 - 300, PAL.ink, { size: 22, align: 'right', base: 'middle' });
    /* what the eye receives */
    const seen = refl.length === 0 ? 'black' : refl.length === RAYS.length ? 'white' : refl.join(' and ');
    if (refl.length) text(ctx, 'reflected', X0 + 500, Y0 - 300, PAL.ink, { size: 22, align: 'left', base: 'middle' });
    const trueC = O;
    topline(ctx, refl.length === 0
      ? `The ${O} object absorbs all the ${L} light falling on it and appears black.`
      : `The ${O} object reflects only the ${seen === 'white' ? 'whole mixture' : seen} and appears ${seen}.`);
    readout(d.readout, `\\text{${L} light on a ${trueC} object} \\;\\rightarrow\\; \\text{appears ${seen}}`,
      `Its true color is ${trueC}, whatever the light.`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 26.13 · sim-emission-spectra · still · flat graph beside a cloth
   Relative intensity, 0 to 240, against wavelength, 400 to 700 nm, traced from the
   book's curves: A the Sun, B a fluorescent lamp with its four mercury spikes, C an
   incandescent bulb rising toward the red, D the 632.8 nm line of a helium-neon laser.
   Each source is a referent and its curve and label wear its colour; the tablecloth
   is a referent too, its outline and name in its colour and its face in the tint it
   takes, which is the fact.
===================================================================== */
(function () {
  const d = sim('sim-emission-spectra', 560);
  const interp = (pts) => (x) => {
    if (x <= pts[0][0]) return pts[0][1];
    for (let i = 1; i < pts.length; i++) if (x <= pts[i][0]) { const [a, fa] = pts[i - 1], [b, fb] = pts[i], t = (x - a) / (b - a), s = t * t * (3 - 2 * t); return fa + (fb - fa) * s; }
    return pts[pts.length - 1][1];
  };
  const spike = (x, p, h) => h * Math.exp(-0.5 * ((x - p) / 1.6) ** 2);
  const sun = interp([[400, 65], [420, 98], [450, 123], [465, 120], [482, 126], [500, 116], [520, 97], [540, 98], [560, 107], [580, 98], [600, 93], [612, 84], [660, 84], [700, 75]]);
  const fluoBase = interp([[400, 28], [430, 50], [436, 56], [475, 82], [515, 72], [545, 112], [553, 127], [575, 178], [590, 188], [610, 168], [630, 110], [660, 52], [700, 20]]);
  const SOURCES = [
    { key: 'A', ref: 'sun', name: 'sun', long: 'the Sun', f: sun, tint: '#fff2cf', seen: 'yellowish white' },
    { key: 'B', ref: 'fluorescent', name: 'fluorescent', long: 'a fluorescent lamp', f: (x) => fluoBase(x) + spike(x, 404, 60) + spike(x, 434, 142) + spike(x, 548, 68) + spike(x, 577, 34), tint: '#eaf2ff', seen: 'bluish white' },
    { key: 'C', ref: 'incandescent', name: 'incandescent', long: 'an incandescent light', f: (x) => 15 + 0.35 * (x - 400) + 0.00082 * (x - 400) ** 2, tint: '#ffd8a6', seen: 'reddish white' },
    { key: 'D', ref: 'laser', name: 'He-Ne', long: 'a helium-neon laser', f: (x) => spike(x, 632.8, 208), tint: '#ff2d1f', seen: 'pure red' },
  ];
  const src = choice(d.controls, { label: '\\text{source}', options: SOURCES.map((s) => ({ value: s.key, label: s.key + ' ' + s.name })), value: 'A', aria: 'the light source' });
  const box = { l: 130, r: 930, t: 110, b: 470 };
  const LAB = { A: [470, 150], B: [560, 222], C: [520, 20], D: [640, 225] };

  function draw() {
    const { ctx } = begin(d.c);
    const s = SOURCES.find((o) => o.key === src.value);
    const { X, Y } = axes(ctx, box, [400, 700], [0, 240], { nx: 6, ny: 6, xl: 'λ (nm)', xc: C('position'), yl: 'relative intensity', yc: C('intensity') });
    SOURCES.forEach((o) => {
      const on = src.mix((k) => (k === o.key ? 1 : 0)), oc = F.ref(o.ref);
      curve(ctx, o.f, 400, 700, X, Y, alpha(oc, 0.3 + 0.7 * on), 2.5 + 2.5 * on, 900);
      const [lx, ly] = LAB[o.key];
      text(ctx, o.key + ' (' + o.name + ')', X(lx), Y(ly), oc, { size: 18, weight: on > 0.5 ? 600 : 400, align: 'center', bg: PAL.panel });
    });
    /* the white tablecloth under this source */
    const tint = F.fact(src.mixColor((k) => SOURCES.find((o) => o.key === k).tint)), TC = F.ref('tablecloth');
    ctx.save(); ctx.fillStyle = tint; ctx.strokeStyle = TC; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(1010, 200); ctx.lineTo(1330, 200); ctx.lineTo(1300, 400); ctx.lineTo(1040, 400); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
    text(ctx, 'a white tablecloth', 1170, 175, TC, { size: 20, weight: 600, align: 'center' });
    text(ctx, s.seen, 1170, 430, PAL.ink, { size: 22, weight: 600, align: 'center' });
    const bl = s.f(450), rd = s.f(650);
    topline(ctx, `Under ${s.long}, a white tablecloth sends ${s.seen} light to the eye.`);
    readout(d.readout, s.key === 'D' ? `I(632.8\\ \\text{nm}) = ${fmt(s.f(632.8), 0)},\\quad I(450\\ \\text{nm}) = I(650\\ \\text{nm}) = 0`
      : `I(450\\ \\text{nm}) : I(650\\ \\text{nm}) = ${fmt(bl, 0)} : ${fmt(rd, 0)}`,
      'The balance of short and long wavelengths in the source sets the tint of the light a white object reflects.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 26.14 · sim-edges · still · flat, a faithful copy
   Five uniform grey strips from black to pale grey; beneath them, on the same
   horizontal run, the step graph of the light they send and the graph of the signal
   from the rods and cones, which overshoots on each side of every edge.
===================================================================== */
(function () {
  const d = sim('sim-edges', 760);
  const L = 300, Rt = 1100, N = 5, w = (Rt - L) / N;
  const GREYS = ['#000000', '#474747', '#838383', '#ababab', '#d8d8d8'];
  function stepGraph(ctx, top, bot, withSpikes) {
    arrow(ctx, L, bot, L, top, PAL.muted, 3); arrow(ctx, L, bot, Rt + 30, bot, PAL.muted, 3);
    const level = (i) => bot - 25 - i * (withSpikes ? 16 : 26);
    ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4; ctx.beginPath();
    for (let i = 0; i < N; i++) {
      const x0 = L + i * w, x1 = x0 + w, y = level(i);
      if (i === 0) ctx.moveTo(x0 + 2, y);
      if (!withSpikes) { ctx.lineTo(x0, y); ctx.lineTo(x1, y); if (i < N - 1) ctx.lineTo(x1, level(i + 1)); continue; }
      for (let x = x0; x <= x1; x += 2) {
        const u = x - x0, v = x1 - x;
        const up = i > 0 ? 34 * Math.exp(-u / 9) : 0, down = i < N - 1 ? 10 * Math.exp(-v / 7) : 0;
        ctx.lineTo(x, y - up + down);
      }
    }
    ctx.stroke(); ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    GREYS.forEach((g, i) => { ctx.save(); ctx.fillStyle = F.fact(g); ctx.fillRect(L + i * w, 30, w + 0.5, 230); ctx.restore(); });
    stepGraph(ctx, 300, 500, false);
    text(ctx, 'actual light', L - 20, 380, PAL.ink, { size: 20, align: 'right' });
    text(ctx, 'intensities', L - 20, 408, PAL.ink, { size: 20, align: 'right' });
    stepGraph(ctx, 540, 740, true);
    text(ctx, 'signal intensities', L - 20, 620, PAL.ink, { size: 20, align: 'right' });
    text(ctx, 'from rods and cones', L - 20, 648, PAL.ink, { size: 20, align: 'right' });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
