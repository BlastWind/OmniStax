/* Figures for section 1.4 Approximation. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['1.4'] = function (root, F) {
const { el, fmt, tex, PAL, alpha, REDUCED, ctl, cycle, register, begin, line, text, headline, vbracket, nice } = F;
const demo = (id, H) => F.demo(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* a number written the way the book writes it: whole when it is whole, otherwise to one decimal */
const num = (x) => (Math.abs(x - Math.round(x)) < 1e-9 ? String(Math.round(x)) : fmt(x, 1));
/* a number with the digits its size calls for: none above ten, one above one, and just enough below that */
const dec = (x) => (x >= 10 ? fmt(x, 0) : x >= 1 ? fmt(x, 1) : plain(x));
/* a small decimal with only the digits it needs, for the values that round to less than one */
function plain(x) { if (x <= 0) return '0'; const d = Math.max(0, -Math.floor(Math.log10(x))); return fmt(x, d); }
/* a number rounded to one significant figure, as Example 1.4 rounds its result */
function round1(x) { if (x <= 0) return 0; const p = Math.pow(10, Math.floor(Math.log10(x))); return Math.round(x / p) * p; }
/* a number in scientific notation with up to three significant figures, trailing zeros dropped, as LaTeX */
function sci(x) {
  let e = Math.floor(Math.log10(x)); let m = +(x / Math.pow(10, e)).toFixed(2); if (m >= 10) { m = 1; e += 1; }
  return `${String(m)} \\times 10^{${e}}`;
}

/* a standing person of height h with their feet at (x, y): a head, a body, two legs and two arms, in ink */
function person(ctx, x, y, h, color) {
  const w = Math.min(8, Math.max(2, h * 0.05)), r = h * 0.09;
  ctx.save(); ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = w;
  ctx.beginPath(); ctx.arc(x, y - h + r, r, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.moveTo(x, y - h + 2 * r); ctx.lineTo(x, y - h * 0.42);
  ctx.moveTo(x, y - h * 0.42); ctx.lineTo(x - h * 0.14, y); ctx.moveTo(x, y - h * 0.42); ctx.lineTo(x + h * 0.14, y);
  ctx.moveTo(x, y - h * 0.74); ctx.lineTo(x - h * 0.17, y - h * 0.5); ctx.moveTo(x, y - h * 0.74); ctx.lineTo(x + h * 0.17, y - h * 0.5);
  ctx.stroke(); ctx.restore();
}

/* =====================================================================
   DEMO 1: the height of a building. A person stands beside a building
   on a common ground line, and the stories stack up one by one to the
   set count while a bracket on the right reads the running height. The
   ground story is shown magnified on the left with the persons that
   make it up, since at 39 stories a person to scale is a few units
   tall. Finite motion, so it gets the scrubber.
===================================================================== */
(function () {
  const d = demo('demo-building', 620);
  const N = ctl(d.controls, { label: '\\text{stories}', cls: '', min: 1, max: 100, step: 1, value: 39, unit: '', dec: 0, onInput: reset, aria: 'number of stories' });
  const P = ctl(d.controls, { label: '\\text{person}', cls: '', min: 1.5, max: 2, step: 0.1, value: 2, unit: 'm', dec: 1, onInput: reset, aria: 'height of a person' });
  const S = ctl(d.controls, { label: '\\text{persons per story}', cls: '', min: 1, max: 3, step: 0.5, value: 2, unit: '', dec: 1, onInput: reset, aria: 'persons per story' });
  const T = 4;
  const cy = cycle(() => T, 1.4);
  function reset() { cy.reset(); }
  function draw() {
    const { ctx } = begin(d.c);
    const tau = REDUCED ? T : cy.now(), done = tau >= T - 1e-9;
    const story = P.v * S.v, total = N.v * story;
    const n = done ? N.v : Math.min(N.v, Math.floor((tau / T) * N.v + 1e-6)), up = n * story;
    const G = 560, k = 440 / Math.max(total, 12);   /* the ground line, and canvas units per metre so the finished building fills the height */
    line(ctx, 60, G, 1340, G, PAL.muted, 3);
    /* the ground story, magnified, with its persons stacked inside */
    const ix0 = 90, ix1 = 370, it = 190, ih = G - it, ph = ih / S.v, icx = (ix0 + ix1) / 2;
    text(ctx, 'one story holds ' + num(S.v) + (S.v === 1 ? ' person' : ' persons'), icx, 140, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'and is ' + num(story) + ' m tall', icx, 162, PAL.muted, { size: 17, align: 'center' });
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.05); ctx.fillRect(ix0, it, ix1 - ix0, ih); ctx.restore();
    ctx.save(); ctx.beginPath(); ctx.rect(ix0, it, ix1 - ix0, ih); ctx.clip();
    for (let i = 0; i < Math.ceil(S.v - 1e-9); i++) person(ctx, icx, G - i * ph, ph, PAL.ink);
    ctx.restore();
    line(ctx, ix0, it, ix1, it, PAL.ink, 3); line(ctx, ix0, it, ix0, G, PAL.muted, 2); line(ctx, ix1, it, ix1, G, PAL.muted, 2);
    /* the building, one story at a time */
    const bx0 = 640, bx1 = 900, sh = story * k, top = G - up * k;
    line(ctx, ix1, it, bx0, G - sh, PAL.rule, 2, [6, 8]); line(ctx, ix1, G, bx0, G, PAL.rule, 2, [6, 8]);
    if (n > 0) {
      ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.08); ctx.fillRect(bx0, top, bx1 - bx0, G - top); ctx.restore();
      if (sh >= 7) for (let i = 1; i < n; i++) line(ctx, bx0, G - i * sh, bx1, G - i * sh, PAL.muted, 1.5);
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.strokeRect(bx0, top, bx1 - bx0, G - top); ctx.restore();
      line(ctx, bx0 - 8, top, bx1 + 8, top, PAL.ink, 4);
      vbracket(ctx, 950, G, top, PAL.ink, Math.round(up) + ' m');
    }
    text(ctx, N.v + (N.v === 1 ? ' story' : ' stories'), (bx0 + bx1) / 2, G + 30, PAL.muted, { size: 17, align: 'center' });
    /* the person beside it, at the same scale as the building */
    const hp = P.v * k;
    person(ctx, 560, G, hp, PAL.ink);
    text(ctx, 'a person, ' + num(P.v) + ' m', 560, G - hp - 22, PAL.muted, { size: 17, align: 'center' });
    headline(ctx, done ? N.v + (N.v === 1 ? ' story' : ' stories') + ' of about ' + num(story) + ' m each make a building about ' + Math.round(total) + ' m tall'
      : n + ' of the ' + N.v + ' stories ' + (n === 1 ? 'is' : 'are') + ' up, and the building stands ' + Math.round(up) + ' m tall so far');
    const exact = Math.abs(total - Math.round(total)) < 1e-9;
    readout(d.readout, `\\frac{${num(P.v)}\\ \\text{m}}{1\\ \\text{person}} \\times \\frac{${num(S.v)}\\ \\text{${S.v === 1 ? 'person' : 'persons'}}}{1\\ \\text{story}} \\times ${N.v}\\ \\text{${N.v === 1 ? 'story' : 'stories'}} ${exact ? '=' : '\\approx'} ${Math.round(total)}\\ \\text{m}`,
      'The estimate is only as good as its inputs. A person is between 1.5 and 2 m tall and a story holds between one and a half and three of them, so the height is known to within a factor of about two, which is what an approximation gives.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();

/* =====================================================================
   DEMO 2: a trillion dollars on a football field. A side view of the
   field, 100 yd between the end zones, with a scale in feet on the left
   and a person 6 ft tall in the end zone for scale; the pile of
   100-bill stacks rises on the field to its final height, which is
   computed from the set amount and thickness with the field's true
   area and rounded to one significant figure as the example does.
   Finite motion, so it gets the scrubber.
===================================================================== */
(function () {
  const d = demo('demo-trillion', 640);
  const A = ctl(d.controls, { label: '\\text{trillions}', cls: '', min: 0.1, max: 30, step: 0.1, value: 1, unit: '', dec: 1, onInput: reset, aria: 'amount in trillions of dollars' });
  const TH = ctl(d.controls, { label: '\\text{stack}', cls: '', min: 0.3, max: 0.7, step: 0.05, value: 0.5, unit: 'in.', dec: 2, onInput: reset, aria: 'thickness of a stack of 100 bills' });
  const T = 5, AREA = 6480000;   /* the field between the end zones, 100 yd by 50 yd, in square inches */
  const cy = cycle(() => T, 1.4);
  function reset() { cy.reset(); }
  const volumeOf = (trillions) => (trillions * 1e12 / 1e4) * 6 * 3 * TH.v;   /* stacks of 10,000 dollars, each 6 in. by 3 in. by the set thickness */
  function draw() {
    const { ctx } = begin(d.c);
    const tau = REDUCED ? T : cy.now(), done = tau >= T - 1e-9;
    const vol = volumeOf(A.v), Hin = vol / AREA, Hft = Hin / 12;
    const H1 = round1(Hin), F1 = round1(H1 / 12);
    const h = Hft * (done ? 1 : tau / T);
    /* the field in side view: the end zones shaded, the yard line ticked every 10 yd */
    const G = 560, fx0 = 240, fx1 = 1300, ez = (fx1 - fx0) / 12, gx0 = fx0 + ez, gx1 = fx1 - ez, Xy = (yd) => gx0 + ((gx1 - gx0) * yd) / 100;
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.fillRect(fx0, G, fx1 - fx0, 24); ctx.fillStyle = alpha(PAL.muted, 0.25); ctx.fillRect(fx0, G, ez, 24); ctx.fillRect(gx1, G, ez, 24); ctx.restore();
    line(ctx, 200, G, 1340, G, PAL.muted, 3);
    for (let yd = 0; yd <= 100; yd += 10) line(ctx, Xy(yd), G, Xy(yd), G + 24, PAL.muted, yd % 50 ? 1.5 : 3);
    for (const yd of [0, 50, 100]) text(ctx, yd + ' yd', Xy(yd), G + 44, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'end zone', fx0 + ez / 2, G + 12, PAL.muted, { size: 17, align: 'center' });
    text(ctx, 'end zone', fx1 - ez / 2, G + 12, PAL.muted, { size: 17, align: 'center' });
    /* the scale in feet on the left, drawn so the finished pile fits under the headline */
    const ax = 200, top = 130, span = nice(0, Math.max(Hft * 1.15, 8), 4), step = span.hi / span.n;
    const Y = (ft) => G - (ft / span.hi) * (G - top);
    line(ctx, ax, G, ax, top, PAL.muted, 2);
    for (let i = 0; i <= span.n; i++) { const v = i * step; line(ctx, ax - 8, Y(v), ax, Y(v), PAL.muted, 2); text(ctx, fmt(v, step < 1 ? 1 : 0) + ' ft', ax - 16, Y(v), PAL.muted, { size: 17, align: 'right' }); }
    /* the pile of stacks between the end zones */
    const py = Y(h);
    if (h > 0) {
      ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.1); ctx.fillRect(gx0, py, gx1 - gx0, G - py); ctx.restore();
      const gap = 14; if (G - py > 2 * gap) for (let y = G - gap; y > py + 2; y -= gap) line(ctx, gx0, y, gx1, y, alpha(PAL.ink, 0.18), 1.5);
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.strokeRect(gx0, py, gx1 - gx0, G - py); ctx.restore();
      text(ctx, dec(h * 12) + ' in., or ' + dec(h) + ' ft', (gx0 + gx1) / 2, py - 22, PAL.ink, { weight: 600 });
    }
    /* a person 6 ft tall in the end zone, at the scale of the axis */
    const hp = (6 / span.hi) * (G - top), px = fx1 - ez / 2;
    person(ctx, px, G, hp, PAL.ink);
    text(ctx, 'a person', px, G - hp - 40, PAL.muted, { size: 17, align: 'center' });
    text(ctx, '6 ft tall', px, G - hp - 18, PAL.muted, { size: 17, align: 'center' });
    const amount = A.v === 1 ? 'one trillion dollars' : fmt(A.v, 1) + ' trillion dollars';
    headline(ctx, done ? amount + ' in $100 bills covers the field to a height of about ' + plain(H1) + ' in., ' + (F1 >= 1 ? 'or about ' + plain(F1) + ' ft' : 'which is less than a foot')
      : 'the stacks are being laid down, and the pile is ' + dec(h) + ' ft high so far');
    readout(d.readout, `\\text{height} = \\frac{${sci(vol)}\\ \\text{in.}^{3}}{6.48 \\times 10^{6}\\ \\text{in.}^{2}} = ${dec(Hin)}\\ \\text{in.} \\approx ${sci(H1)}\\ \\text{in.} = ${plain(F1)}\\ \\text{ft}`,
      'Before rounding, the pile is ' + dec(Hin) + ' in. or ' + dec(Hft) + ' ft high, and the example keeps only one significant figure because its inputs are that rough. Set the amount to 28 trillion, the federal debt of 2021 the example mentions, and the pile rises to about ' + plain(round1(round1(volumeOf(28) / AREA) / 12)) + ' ft, taller than most buildings.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
