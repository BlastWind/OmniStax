/* Figures for section 17.6 Hearing. Boots against the section's text article.
   Hearing is a set of relations between what reaches the ear and what is
   perceived, and none of them runs on a clock, so every figure here is a
   still picture: none registers a cycle, none carries a transport, and a
   slider's or a choice's input alone redraws it. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['17.6'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, hover, register, begin, line, arrow, dot, text, topline, vbracket, fixed, curve } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* ---------- the equal-loudness curves, shared by three figures ----------
   The thirteen curves of Figure 17.34, read from the book's graph at the
   frequencies below and interpolated between them in log f by a monotone
   cubic, so the dips near 4000 Hz and the rise at both ends keep their
   shape. Each row is one loudness in phons, 0 to 120. The values the
   section's example and problems read off the book's graph (48, 9, 0, −7
   and 20 dB on the 0-phon curve at 60, 400, 1000, 4000 and 15,000 Hz; 75
   phons at 100 Hz and 80 dB; 67 dB at 4000 Hz and 70 phons; 23 and 70 dB
   at 600 Hz for 20 and 70 phons) are reproduced. */
const FG = [20, 30, 40, 60, 100, 200, 400, 600, 1000, 1500, 2000, 3000, 4000, 5000, 6000, 8000, 10000, 15000, 20000];
const LG = FG.map((f) => Math.log10(f));
const PH = [
  [72, 63, 57, 48, 37, 23, 9, 4, 0, -2, -5, -7, -7, -3, 2, 9, 12, 20, 28],
  [78, 70, 65, 57, 46, 33, 19, 14, 10, 8, 5, 3, 3, 7, 11, 18, 21, 28, 36],
  [82, 75, 70, 63, 53, 41, 27, 23, 20, 18, 15, 13, 15, 18, 22, 27, 30, 37, 45],
  [86, 80, 75, 69, 60, 49, 36, 33, 30, 28, 25, 23, 25, 28, 32, 37, 40, 46, 54],
  [90, 84, 79, 74, 66, 55, 44, 42, 40, 38, 35, 33, 35, 38, 42, 47, 50, 55, 63],
  [93, 88, 83, 78, 71, 59, 52, 51, 50, 48, 45, 43, 45, 48, 54, 61, 63, 68, 76],
  [97, 92, 87, 82, 76, 66, 61, 60, 60, 58, 55, 53, 55, 59, 64, 70, 72, 77, 85],
  [100, 95, 91, 87, 77, 73, 71, 70, 70, 68, 65, 64, 67, 70, 73, 79, 81, 85, 93],
  [104, 99, 96, 92, 83, 80, 80, 80, 80, 78, 75, 74, 77, 80, 83, 88, 90, 94, 102],
  [108, 104, 101, 98, 91, 89, 90, 90, 90, 88, 85, 84, 87, 90, 93, 97, 99, 103, 111],
  [113, 109, 106, 103, 100, 99, 100, 100, 100, 98, 95, 94, 96, 99, 102, 106, 108, 112, 120],
  [118, 115, 112, 110, 109, 109, 110, 110, 110, 108, 105, 103, 105, 108, 111, 115, 117, 121, 129],
  [128, 125, 123, 122, 121, 121, 120, 120, 120, 117, 114, 111, 113, 116, 119, 123, 125, 130, 138],
];
/* a monotone cubic through the points (xs, ys), which never overshoots a dip */
function mono(xs, ys) {
  const n = xs.length, d = [], m = [];
  for (let i = 0; i < n - 1; i++) d.push((ys[i + 1] - ys[i]) / (xs[i + 1] - xs[i]));
  m[0] = d[0]; m[n - 1] = d[n - 2];
  for (let i = 1; i < n - 1; i++) m[i] = d[i - 1] * d[i] <= 0 ? 0 : (d[i - 1] + d[i]) / 2;
  for (let i = 0; i < n - 1; i++) {
    if (d[i] === 0) { m[i] = 0; m[i + 1] = 0; continue; }
    const a = m[i] / d[i], b = m[i + 1] / d[i], s = a * a + b * b;
    if (s > 9) { const t = 3 / Math.sqrt(s); m[i] = t * a * d[i]; m[i + 1] = t * b * d[i]; }
  }
  return (x) => {
    if (x <= xs[0]) return ys[0]; if (x >= xs[n - 1]) return ys[n - 1];
    let i = 0; while (xs[i + 1] < x) i++;
    const h = xs[i + 1] - xs[i], t = (x - xs[i]) / h, t2 = t * t, t3 = t2 * t;
    return (2 * t3 - 3 * t2 + 1) * ys[i] + (t3 - 2 * t2 + t) * h * m[i] + (-2 * t3 + 3 * t2) * ys[i + 1] + (t3 - t2) * h * m[i + 1];
  };
}
const CURVES = PH.map((row) => mono(LG, row));
const levels = (lf) => CURVES.map((fn) => fn(lf));
/* the loudness in phons of a sound at log10 f and β dB: linear between the two curves it lies between,
   and extrapolated below the 0-phon curve (a negative reading, not heard) and above the 120-phon one */
function phons(lf, beta) {
  const c = levels(lf);
  if (beta < c[0]) return 10 * (beta - c[0]) / (c[1] - c[0]);
  for (let k = 0; k < 12; k++) if (beta < c[k + 1]) return 10 * k + 10 * (beta - c[k]) / (c[k + 1] - c[k]);
  return 120 + 10 * (beta - c[12]) / (c[12] - c[11]);
}
/* the intensity level at which a sound at log10 f has the loudness L phons */
function levelFor(lf, L) {
  const c = levels(lf), k = Math.max(0, Math.min(11, Math.floor(L / 10)));
  return c[k] + ((L - 10 * k) / 10) * (c[k + 1] - c[k]);
}

/* ---------- the frequency slider ----------
   The audible range spans three decades, and 60 Hz and 15,000 Hz must be
   as easy to set as each other on a logarithmic axis, so the slider walks a
   geometric series of thirty-one frequencies and shows the frequency it
   stands on. */
const FREQ = [20, 25, 30, 40, 50, 60, 80, 100, 125, 150, 200, 250, 300, 400, 500, 600, 800, 1000, 1250, 1500, 2000, 2500, 3000, 4000, 5000, 6000, 8000, 10000, 12500, 15000, 20000];
const hz = (n) => (n >= 10000 ? Math.floor(n / 1000) + ',' + String(n % 1000).padStart(3, '0') : String(n)) + ' Hz';
function freqCtl(host, value, onInput) {
  const s = ctl(host, { label: '\\kf', cls: 'frequency', min: 0, max: FREQ.length - 1, step: 1, value: FREQ.indexOf(value), unit: 'Hz', dec: 0, aria: 'the frequency of the sound', onInput: () => { show(); if (onInput) onInput(); } });
  const lab = host.lastElementChild, val = lab.querySelector('.ctl-val'), inp = lab.querySelector('input');
  const show = () => { val.textContent = hz(FREQ[s.v]); inp.setAttribute('aria-valuetext', hz(FREQ[s.v])); };
  show();
  return { get f() { return FREQ[s.v]; }, get lf() { return Math.log10(FREQ[s.v]); } };
}
const sup = (n) => String(n).replace('-', '⁻').replace(/\d/g, (ch) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[+ch]);
/* a graph frame with a logarithmic frequency axis: gridlines at the named frequencies, labelled
   where `major` says, and a linear dB axis with a line every `step` and a label every `every` */
function logFrame(ctx, box, X, Y, freqs, major, ylo, yhi, step, every, ytitle, yside) {
  ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
  for (const f of freqs) line(ctx, X(Math.log10(f)), box.t, X(Math.log10(f)), box.b, PAL.rule, major.includes(f) ? 1.5 : 1);
  for (let v = ylo; v <= yhi + 1e-9; v += step) line(ctx, box.l, Y(v), box.r, Y(v), PAL.rule, 1.5);
  ctx.restore();
  for (const f of major) text(ctx, f >= 10000 ? hz(f).replace(' Hz', '') : String(f), X(Math.log10(f)), box.b + 26, PAL.muted, { size: 17, align: 'center' });
  for (let v = ylo; v <= yhi + 1e-9; v += every) text(ctx, fmt(v, 0), yside > 0 ? box.r + 14 : box.l - 14, Y(v), PAL.muted, { size: 17, align: yside > 0 ? 'left' : 'right' });
  line(ctx, box.l, box.t, box.l, box.b, PAL.muted, 2); line(ctx, box.l, box.b, box.r, box.b, PAL.muted, 2);
  text(ctx, 'Frequency f (Hz)', box.r, box.b + 62, C('frequency'), { align: 'right', weight: 600, size: 20 });
  text(ctx, ytitle, yside > 0 ? box.r : box.l, box.t - 24, PAL.ink, { align: yside > 0 ? 'right' : 'left', weight: 600, size: 20 });
}
const GRID = [20, 30, 40, 50, 60, 80, 100, 200, 300, 400, 500, 600, 800, 1000, 2000, 3000, 4000, 5000, 6000, 8000, 10000, 20000];
const MAJOR = [20, 50, 100, 200, 500, 1000, 2000, 5000, 10000, 20000];

/* =====================================================================
   FIGURE 17.34: the equal-loudness curves. The thirteen curves on a
   logarithmic frequency axis against intensity level, a second axis of
   intensity, and the sound the reader sets marked on the grid with its
   loudness read between the two curves it lies between. Still: a relation
   between three quantities, with no time in it.
===================================================================== */
(function () {
  const d = sim('sim-equal-loudness', 760);
  const fs = freqCtl(d.controls, 100);
  const bs = ctl(d.controls, { label: '\\beta', cls: '', min: -10, max: 130, step: 1, value: 80, unit: 'dB', dec: 0, aria: 'the intensity level of the sound' });
  /* axes fixed: 20 to 20,000 Hz, −10 to 140 dB, so the 120-phon curve stays on the grid at 20,000 Hz */
  const box = { l: 170, r: 1040, t: 130, b: 640 }, IX = 1210, L0 = Math.log10(20), L1 = Math.log10(20000);
  const X = (lf) => box.l + ((lf - L0) / (L1 - L0)) * (box.r - box.l);
  const Y = (db) => box.b - ((db + 10) / 150) * (box.b - box.t);
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('frequency'), ic = C('intensity');
    const lf = fs.lf, beta = bs.v, L = phons(lf, beta), c = levels(lf);
    const lo = L < 0 ? -1 : L >= 120 ? 12 : Math.floor(L / 10), hi = lo + 1;
    logFrame(ctx, box, X, Y, GRID, MAJOR, -10, 140, 10, 20, 'Intensity level β (dB)', -1);
    /* the right-hand axis: the intensity itself, in its own hue, one decade per 10 dB. It stands
       clear of the plot so that the curve labels have a gutter of their own between the two. */
    line(ctx, IX, box.t, IX, box.b, ic, 2);
    for (let v = 0; v <= 140; v += 20) { line(ctx, IX - 8, Y(v), IX + 8, Y(v), ic, 2); text(ctx, '10' + sup(v / 10 - 12) + ' W/m²', IX + 16, Y(v), ic, { size: 17 }); }
    text(ctx, 'Intensity I (W/m²)', IX + 16, box.t - 24, ic, { align: 'left', weight: 600, size: 20 });
    /* the thirteen curves, the two that bracket the sound drawn heavier, each labelled at its right end */
    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
    CURVES.forEach((fn, k) => { const on = k === lo || k === hi; curve(ctx, fn, L0, L1, X, Y, on ? PAL.ink : alpha(PAL.ink, 0.45), on ? 4.5 : 2, 140); });
    ctx.restore();
    /* each curve is labelled where it leaves the frame, in the gutter between the plot and the
       intensity axis, as the book labels them; no two ends are closer than the label is tall */
    const ends = CURVES.map((fn, k) => ({ k, y: Y(fn(L1)) }));
    for (let i = 1; i < ends.length; i++) if (ends[i].y > ends[i - 1].y - 26) ends[i].y = ends[i - 1].y - 26;
    for (const e of ends) {
      const on = e.k === lo || e.k === hi, y0 = Y(CURVES[e.k](L1));
      line(ctx, box.r + 4, y0, box.r + 22, e.y, alpha(PAL.ink, 0.4), 1.5);
      text(ctx, 10 * e.k + ' phon', box.r + 26, e.y, on ? PAL.ink : PAL.muted, { size: 16, weight: on ? 600 : 400 });
    }
    /* the sound: a drop line to the frequency axis in its hue, a level line across to both vertical axes */
    const px = X(lf), py = Y(beta);
    line(ctx, px, py, px, box.b, fc, 2.5, [4, 8]);
    line(ctx, box.l, py, box.r, py, alpha(PAL.ink, 0.5), 2, [4, 8]);
    line(ctx, IX - 8, py, IX + 8, py, ic, 3);
    text(ctx, hz(fs.f), px, box.b - 16, fc, { size: 18, weight: 600, align: px > box.r - 120 ? 'right' : px < box.l + 120 ? 'left' : 'center', bg: alpha(PAL.panel, 0.85) });
    dot(ctx, px, py, PAL.ink, true, 10);
    const word = L < 0 ? 'not heard' : L > 120 ? 'painful' : fmt(L, 0) + ' phons';
    text(ctx, word, px + (px > box.r - 220 ? -18 : 18), py - 26, PAL.ink, { size: 21, weight: 600, align: px > box.r - 220 ? 'right' : 'left', bg: alpha(PAL.panel, 0.9) });
    /* what the point says */
    topline(ctx, L < 0 ? 'A ' + hz(fs.f) + ' sound at ' + fmt(beta, 0) + ' dB lies below the 0-phon curve, so most people do not hear it at all.'
      : L > 120 ? 'A ' + hz(fs.f) + ' sound at ' + fmt(beta, 0) + ' dB lies above the 120-phon curve, and a sound that loud is painful as well as damaging.'
      : Math.abs(L - 10 * Math.round(L / 10)) < 0.5 ? 'A ' + hz(fs.f) + ' sound at ' + fmt(beta, 0) + ' dB lies on the ' + fmt(L, 0) + '-phon curve, so its loudness is ' + fmt(L, 0) + ' phons.'
      : 'A ' + hz(fs.f) + ' sound at ' + fmt(beta, 0) + ' dB lies between the ' + (10 * lo) + '- and ' + (10 * hi) + '-phon curves, so its loudness is about ' + fmt(L, 0) + ' phons.');
    const ex = beta / 10 - 12, e = Math.floor(ex), man = Math.pow(10, ex - e);
    const I = `${fmt(man, 1)} \\times 10^{${e}}`;
    readout(d.readout, `\\text{loudness} ${L < 0 ? '<' : L > 120 ? '>' : '\\approx'} ${L < 0 ? 0 : L > 120 ? 120 : fmt(L, 0)}\\ \\text{phons at } \\kf = ${hz(fs.f).replace(' Hz', '')}\\ \\text{Hz and } \\beta = ${fmt(beta, 0)}\\ \\text{dB, where } \\kIntens = \\kIo\\,10^{\\beta/10} = ${I}\\ \\text{W/m}^2`,
      fs.f === 1000 ? 'At 1000 Hz phons are taken to be numerically equal to decibels, which is why every curve crosses this frequency at the level its label names.'
        : L < 0 ? 'The 0-phon curve is the threshold of normal hearing at each frequency: here it lies at ' + fmt(c[0], 0) + ' dB, and a sound this far below it produces no sensation. Note that the threshold is well below 0 dB between about 2000 and 5000 Hz, where the ear is most sensitive.'
        : 'The curves dip between about 2000 and 5000 Hz, where the ear is most sensitive, and rise at both ends of the range, so the same intensity level seems louder in the middle of the range than at either extreme. Here the ' + (10 * lo) + '-phon curve passes at ' + fmt(c[Math.max(0, lo)], 0) + ' dB and the ' + (10 * hi) + '-phon curve at ' + fmt(c[Math.min(12, hi)], 0) + ' dB.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 17.35: the speech region and the raised threshold. The shaded
   region of conversational speech, the normal threshold dashed, and the
   threshold of a person with the hearing loss the reader sets, which is
   the equal-loudness curve of that many phons. Still: a threshold is a
   curve and a loss is a number.
===================================================================== */
(function () {
  const d = sim('sim-speech-region', 720);
  const ls = ctl(d.controls, { label: '\\text{hearing loss}', cls: '', min: 0, max: 80, step: 5, value: 40, unit: 'phons', dec: 0, detents: [0, 40, 60], aria: 'the hearing loss at all frequencies, in phons' });
  const fs = freqCtl(d.controls, 1000);
  /* axes fixed: 20 to 20,000 Hz, −20 to 130 dB, the book's frame widened to the audible range */
  const box = { l: 170, r: 1200, t: 130, b: 620 }, L0 = Math.log10(20), L1 = Math.log10(20000);
  const X = (lf) => box.l + ((lf - L0) / (L1 - L0)) * (box.r - box.l);
  const Y = (db) => box.b - ((db + 20) / 150) * (box.b - box.t);
  /* the region of conversational speech, read from the book's figure: frequency and dB round its edge */
  const SPEECH = [[180, 58], [250, 62], [400, 61], [600, 60], [1000, 58], [1500, 52], [2000, 47], [3000, 41], [3800, 36], [4000, 32], [3000, 32], [2000, 34], [1500, 36], [1000, 40], [700, 48], [500, 52], [300, 55], [200, 56]];
  function region(ctx) { ctx.beginPath(); SPEECH.forEach(([f, db], i) => { const x = X(Math.log10(f)), y = Y(db); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }); ctx.closePath(); }
  /* the levels of speech at one frequency: where a vertical line crosses the region's edge */
  function band(lf) {
    const f = Math.pow(10, lf), ys = [];
    for (let i = 0; i < SPEECH.length; i++) {
      const [f1, d1] = SPEECH[i], [f2, d2] = SPEECH[(i + 1) % SPEECH.length];
      if ((f1 <= f && f < f2) || (f2 <= f && f < f1)) ys.push(d1 + ((Math.log10(f) - Math.log10(f1)) / (Math.log10(f2) - Math.log10(f1))) * (d2 - d1));
    }
    return ys.length >= 2 ? [Math.min(...ys), Math.max(...ys)] : null;
  }
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('frequency');
    const loss = ls.v, lf = fs.lf, thr = (l) => levelFor(l, loss), thrHere = thr(lf), b = band(lf);
    const art = loss === 80 ? 'an' : 'a';                            /* the only loss on this slider that takes "an" */
    logFrame(ctx, box, X, Y, GRID, MAJOR, -20, 130, 10, 20, 'Intensity level β (dB)', -1);
    /* the speech region: the part above the threshold shaded, the part below it left faint */
    ctx.save(); region(ctx); ctx.fillStyle = alpha(PAL.ink, 0.08); ctx.fill(); ctx.restore();
    ctx.save(); region(ctx); ctx.clip();
    ctx.beginPath(); ctx.moveTo(box.l, box.t);
    for (let i = 0; i <= 120; i++) { const l = L0 + ((L1 - L0) * i) / 120; ctx.lineTo(X(l), Y(thr(l))); }
    ctx.lineTo(box.r, box.t); ctx.closePath(); ctx.fillStyle = alpha(PAL.ink, 0.22); ctx.fill(); ctx.restore();
    ctx.save(); region(ctx); ctx.strokeStyle = PAL.muted; ctx.lineWidth = 2; ctx.stroke(); ctx.restore();
    text(ctx, 'Conversational speech', X(Math.log10(330)), Y(20), PAL.ink, { size: 19, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    line(ctx, X(Math.log10(330)), Y(25), X(Math.log10(330)), Y(48), alpha(PAL.ink, 0.5), 1.5, [4, 6]);
    /* the normal threshold, and the threshold of the person with this loss */
    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
    ctx.setLineDash([10, 10]); curve(ctx, CURVES[0], L0, L1, X, Y, PAL.muted, 3, 140); ctx.setLineDash([]);
    if (loss > 0) curve(ctx, thr, L0, L1, X, Y, PAL.ink, 4.5, 140);
    ctx.restore();
    text(ctx, 'normal threshold, 0 phon', X(Math.log10(40)), Y(CURVES[0](Math.log10(40))) + 30, PAL.muted, { size: 18, weight: 600, bg: alpha(PAL.panel, 0.85) });
    if (loss > 0) text(ctx, 'threshold with ' + art + ' ' + fmt(loss, 0) + '-phon loss', X(Math.log10(3000)), Y(thr(Math.log10(3000))) + 32, PAL.ink, { size: 18, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    /* the frequency the reader is looking at: the threshold there, and the levels of speech there */
    const px = X(lf);
    line(ctx, px, box.t, px, box.b, fc, 2.5, [4, 8]);
    text(ctx, hz(fs.f), px, box.b - 16, fc, { size: 18, weight: 600, align: px > box.r - 120 ? 'right' : px < box.l + 120 ? 'left' : 'center', bg: alpha(PAL.panel, 0.85) });
    const side = px > 760 ? -1 : 1;                                  /* the speech band is labelled on one side of the line, the threshold on the other */
    if (b) {
      vbracket(ctx, px, Y(b[1]), Y(b[0]), PAL.ink);
      text(ctx, 'speech ' + fmt(b[0], 0) + ' to ' + fmt(b[1], 0) + ' dB', px, Y(b[1]) - 24, PAL.ink, { size: 18, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.9) });
    }
    dot(ctx, px, Y(thrHere), PAL.ink, true, 10);
    text(ctx, 'threshold ' + fmt(thrHere, 0) + ' dB', px + side * 18, Y(thrHere), PAL.ink, { size: 19, weight: 600, align: side > 0 ? 'left' : 'right', bg: alpha(PAL.panel, 0.9) });
    /* what is heard at this frequency */
    const heard = !b ? null : b[0] >= thrHere ? 'all' : b[1] > thrHere ? 'part' : 'none';
    topline(ctx, loss === 0 ? 'With normal hearing the threshold at ' + hz(fs.f) + ' is ' + fmt(thrHere, 0) + ' dB, and all of conversational speech lies well above it.'
      : 'With ' + art + ' ' + fmt(loss, 0) + '-phon loss the threshold at ' + hz(fs.f) + ' is ' + fmt(thrHere, 0) + ' dB' + (!b ? ', and conversational speech has little at this frequency.'
        : heard === 'all' ? ', and speech there, at ' + fmt(b[0], 0) + ' to ' + fmt(b[1], 0) + ' dB, is heard, though quietly.'
        : heard === 'part' ? ', so only the louder part of speech there, above ' + fmt(thrHere, 0) + ' dB, is heard.'
        : ', and speech there, at ' + fmt(b[0], 0) + ' to ' + fmt(b[1], 0) + ' dB, is not heard at all.'));
    readout(d.readout, `\\beta_{\\text{threshold}}(\\kf = ${hz(fs.f).replace(' Hz', '')}\\ \\text{Hz}) = ${fmt(thrHere, 0)}\\ \\text{dB}` + (b ? `,\\quad \\text{speech there } ${fmt(b[0], 0)}\\ \\text{to}\\ ${fmt(b[1], 0)}\\ \\text{dB}` : ''),
      loss >= 60 ? 'A person with a loss of 60 phons or more hears only the lowest frequencies of speech and cannot understand it unless it is much louder than normal. Female voices carry more of their sound at the higher frequencies, where the threshold has risen furthest, so they are the harder to follow.'
        : loss >= 40 ? 'The threshold of a person with a loss of this many phons at all frequencies is the equal-loudness curve of that many phons. Speech still lies above it across most of its range, so conversation is understood, although it seems very quiet.'
        : 'The threshold of a person with a loss of this many phons at all frequencies is the equal-loudness curve of that many phons; the shaded part of the speech region is what lies above it and is heard. Note that the threshold rises fastest at the low and high ends of the range.');
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 17.36: three audiograms on one frame. The threshold of each ear
   relative to the normal threshold, at the six frequencies of a hearing
   test, for the person the reader chooses. Still: a test is a set of
   readings.
===================================================================== */
(function () {
  const d = sim('sim-audiogram', 640);
  const FT = [250, 500, 1000, 2000, 4000, 8000];
  const PEOPLE = {
    normal: { R: [5, 5, 0, 0, 0, 0], L: [5, 0, 0, 5, 3, 5] },
    capgun: { R: [5, 5, 0, 0, 55, 0], L: [5, 0, 0, 5, 55, 5] },
    presby: { R: [5, 5, 0, 10, 30, 60], L: [0, 0, 10, 15, 40, 55], bone: true },
  };
  const who = choice(d.controls, { label: '\\text{the person tested}', options: [{ value: 'normal', label: 'normal hearing' }, { value: 'capgun', label: 'the child after the cap gun' }, { value: 'presby', label: 'presbycusis' }], value: 'capgun', aria: 'whose audiogram is shown' });
  /* axes fixed: 250 to 8000 Hz, and −10 to 60 dB relative to the normal threshold, drawn downward as an audiogram is */
  const box = { l: 170, r: 1200, t: 130, b: 540 }, L0 = Math.log10(200), L1 = Math.log10(13000);
  const X = (lf) => box.l + ((lf - L0) / (L1 - L0)) * (box.r - box.l);
  const Y = (db) => box.t + ((db + 10) / 80) * (box.b - box.t);
  const hits = [];
  function diamond(ctx, x, y, color) { ctx.save(); ctx.fillStyle = color; ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(x, y - 12); ctx.lineTo(x + 12, y); ctx.lineTo(x, y + 12); ctx.lineTo(x - 12, y); ctx.closePath(); ctx.fill(); ctx.restore(); }
  function bracket(ctx, x, y, open) { ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2.5; ctx.beginPath(); const s = open ? -1 : 1; ctx.moveTo(x + s * 6, y - 12); ctx.lineTo(x, y - 12); ctx.lineTo(x, y + 12); ctx.lineTo(x + s * 6, y + 12); ctx.stroke(); ctx.restore(); }
  function draw() {
    const { ctx } = begin(d.c);
    const fc = C('frequency'), rc = F.cat(0), lc = F.cat(3);
    const p = PEOPLE[who.value];
    hits.length = 0;
    /* the frame: the six test frequencies, and the level every 10 dB downward */
    ctx.save(); ctx.beginPath(); ctx.rect(box.l, box.t, box.r - box.l, box.b - box.t); ctx.clip();
    for (const f of FT) line(ctx, X(Math.log10(f)), box.t, X(Math.log10(f)), box.b, PAL.rule, 1.5);
    for (let v = -10; v <= 70; v += 10) line(ctx, box.l, Y(v), box.r, Y(v), v === 0 ? PAL.muted : PAL.rule, v === 0 ? 2 : 1.5);
    ctx.restore();
    for (const f of FT) text(ctx, String(f), X(Math.log10(f)), box.b + 26, PAL.muted, { size: 17, align: 'center' });
    for (let v = -10; v <= 70; v += 10) text(ctx, fmt(v, 0), box.l - 14, Y(v), PAL.muted, { size: 17, align: 'right' });
    line(ctx, box.l, box.t, box.l, box.b, PAL.muted, 2); line(ctx, box.l, box.b, box.r, box.b, PAL.muted, 2);
    text(ctx, 'Frequency f (Hz)', box.r, box.b + 62, fc, { align: 'right', weight: 600, size: 20 });
    text(ctx, 'Hearing threshold level (dB above normal)', box.l, box.t - 24, PAL.ink, { align: 'left', weight: 600, size: 20 });
    text(ctx, 'normal', box.r - 10, Y(0) - 14, PAL.muted, { size: 16, align: 'right' });
    /* the two ears, each a line through its six readings */
    for (const [ear, vals, color, name] of [['R', p.R, rc, 'right ear'], ['L', p.L, lc, 'left ear']]) {
      ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 3; ctx.beginPath();
      vals.forEach((v, i) => { const x = X(Math.log10(FT[i])), y = Y(v); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }); ctx.stroke(); ctx.restore();
      vals.forEach((v, i) => {
        const x = X(Math.log10(FT[i])), y = Y(v);
        if (ear === 'R') dot(ctx, x, y, color, true, 10); else diamond(ctx, x, y, color);
        if (p.bone) bracket(ctx, x + (ear === 'R' ? 22 : -22), y, ear === 'L');
        hits.push({ x, y, r: 22, name: name + ' at ' + hz(FT[i]) + ': ' + fmt(v, 0) + ' dB above normal' });
      });
    }
    /* the legend, where the book puts it */
    dot(ctx, box.l + 40, box.b - 92, rc, true, 9); text(ctx, 'right ear', box.l + 62, box.b - 92, PAL.ink, { size: 18 });
    diamond(ctx, box.l + 40, box.b - 58, lc); text(ctx, 'left ear', box.l + 62, box.b - 58, PAL.ink, { size: 18 });
    if (p.bone) { bracket(ctx, box.l + 34, box.b - 24, true); bracket(ctx, box.l + 46, box.b - 24, false); text(ctx, 'bone conduction', box.l + 62, box.b - 24, PAL.ink, { size: 18 }); }
    const w = who.value;
    topline(ctx, w === 'normal' ? 'Both ears lie within 5 dB of the normal threshold at every frequency tested, which is normal hearing.'
      : w === 'capgun' ? 'The child hears normally except near 4000 Hz, where both ears need 55 dB more than normal: the dip that noise damage leaves.'
      : 'The thresholds rise with frequency to 60 and 55 dB above normal at 8000 Hz, the progressive high-frequency loss of presbycusis.');
    const fi = w === 'presby' ? 5 : 4;
    readout(d.readout, `\\text{at } \\kf = ${FT[fi]}\\ \\text{Hz: right ear } ${fmt(p.R[fi], 0)}\\ \\text{dB, left ear } ${fmt(p.L[fi], 0)}\\ \\text{dB above the normal threshold}`,
      w === 'normal' ? 'A hearing test measures the threshold relative to the normal threshold of Figure 17.34, so a person with normal hearing registers 0 dB at all frequencies, whatever the absolute threshold at each frequency may be.'
        : w === 'capgun' ? 'Hearing loss caused by noise typically shows a dip near 4000 Hz, irrespective of the frequency that caused the loss, and often affects both ears. Everywhere else this child hears normally.'
        : 'The brackets are the same test made by conducting sound through the bone behind the ear, which bypasses the middle ear. They agree with the readings through the ear canal, so the loss is in the nerves of the cochlea rather than in the conduction of the middle ear.');
  }
  hover(d.stage, () => hits);
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 17.38: the middle ear's lever. The sound pressure on the whole
   eardrum becomes a force on the hammer, the lever of hammer, anvil and
   stirrup raises the force, and the small oval window turns it back into a
   much larger pressure. Still: a chain of relations, not a motion.
===================================================================== */
(function () {
  const d = sim('sim-middle-ear', 640);
  const ps = ctl(d.controls, { label: '\\kProne', cls: 'pressure', min: 0.02, max: 2, step: 0.02, value: 0.2, unit: 'Pa', dec: 2, aria: 'the sound pressure on the eardrum' });
  const a1 = ctl(d.controls, { label: 'A_1', cls: '', min: 30, max: 90, step: 1, value: 60, unit: 'mm²', dec: 0, aria: 'the area of the eardrum' });
  const a2 = ctl(d.controls, { label: 'A_2', cls: '', min: 1, max: 5, step: 0.1, value: 2, unit: 'mm²', dec: 1, aria: 'the area of the oval window' });
  const rs = ctl(d.controls, { label: 'r_1/r_2', cls: '', min: 1, max: 3, step: 0.1, value: 1.3, unit: '', dec: 1, aria: 'the ratio of the lever arms, hammer to stirrup' });
  const PX = 560, PY = 120, R1 = 300, EX = 250, WX = 800, MM = 28;       /* the pivot, the hammer arm in units, the eardrum and window x, units per mm */
  const GX = 1180, GT = 130, GB = 570;                                     /* the pressure gauge: log scale, 0.01 to 1000 Pa */
  const gy = (P) => GB - ((Math.log10(P) + 2) / 5) * (GB - GT);
  function draw() {
    const { ctx } = begin(d.c);
    const pc = C('pressure'), fc = C('force');
    const P1 = ps.v, A1 = a1.v, A2 = a2.v, ratio = rs.v;
    const F1 = P1 * A1, F2 = ratio * F1, P2 = F2 / A2;                 /* µN, µN, Pa */
    const r2 = R1 / ratio, HY = PY + R1, SY = PY + r2;                  /* the hammer's and the stirrup's heights */
    const d1 = MM * 2 * Math.sqrt(A1 / Math.PI), d2 = MM * 2 * Math.sqrt(A2 / Math.PI);   /* the membranes drawn as the diameter of a circle of that area */
    /* the bones: the anvil from the pivot down to the hammer, the hammer to the eardrum, the stirrup to the window */
    fixed(ctx, PX - 60, PY - 40, 120, 30);
    line(ctx, PX, PY, PX, HY, PAL.ink, 6);
    line(ctx, EX, HY, PX, HY, PAL.ink, 6);
    line(ctx, PX, SY, WX, SY, PAL.ink, 6);
    dot(ctx, PX, PY, PAL.ink, false, 9); dot(ctx, PX, SY, PAL.ink, true, 8); dot(ctx, PX, HY, PAL.ink, true, 8);
    /* the two membranes, drawn as taut skins bowed a little inward by the pressure on them */
    const membrane = (x, y, dia) => {
      const h = dia / 2, bow = Math.max(6, Math.min(16, h / 6));
      ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3.5;
      ctx.beginPath(); ctx.moveTo(x - 4, y - h); ctx.quadraticCurveTo(x + bow, y, x - 4, y + h); ctx.quadraticCurveTo(x + bow + 6, y, x - 4, y - h); ctx.fill(); ctx.stroke();
      ctx.restore();
      fixed(ctx, x - 12, y - h - 14, 16, 12); fixed(ctx, x - 12, y + h + 2, 16, 12);
    };
    membrane(EX, HY, d1); membrane(WX, SY, d2);
    /* the lever arms, bracketed on either side of the anvil */
    vbracket(ctx, PX + 42, PY, HY, PAL.ink, 'r_1', 1);
    vbracket(ctx, PX - 42, PY, SY, PAL.ink, 'r_2', -1);
    /* the pressures and the forces. The force arrows are drawn to one scale, so the stirrup's is r₁/r₂ times the
       hammer's; the pressure arrows only point, since the two pressures differ by a factor the gauge shows. */
    arrow(ctx, EX - 120, HY, EX - 14, HY, pc, 5);
    text(ctx, 'P_1 = ' + fmt(P1, 2) + ' Pa', EX - 66, HY - 34, pc, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    arrow(ctx, EX + 14, HY, EX + 14 + 70, HY, fc, 5);
    text(ctx, 'F_1 = ' + fmt(F1, 1) + ' µN', EX + 14, HY + 40, fc, { size: 21, weight: 600, bg: alpha(PAL.panel, 0.85) });
    arrow(ctx, PX + 12, SY, PX + 12 + 70 * ratio, SY, fc, 5);
    text(ctx, 'F_2 = ' + fmt(F2, 1) + ' µN', PX + 12, SY - 34, fc, { size: 21, weight: 600, bg: alpha(PAL.panel, 0.85) });
    arrow(ctx, WX + 14, SY, WX + 14 + 180, SY, pc, 5);
    text(ctx, 'P_2 = ' + fmt(P2, P2 < 10 ? 1 : 0) + ' Pa', WX + 104, SY + 40, pc, { size: 21, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    /* names */
    text(ctx, 'pivot', PX + 20, PY - 4, PAL.muted, { size: 18 });
    text(ctx, 'anvil', PX - 16, (SY + HY) / 2, PAL.muted, { size: 18, align: 'right', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'hammer', (EX + PX) / 2 + 40, HY + 28, PAL.muted, { size: 18, align: 'center' });
    text(ctx, 'stirrup', (PX + WX) / 2 + 60, SY + 28, PAL.muted, { size: 18, align: 'center', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'eardrum, A_1 = ' + fmt(A1, 0) + ' mm²', EX, HY - d1 / 2 - 32, PAL.ink, { size: 19, weight: 600, align: 'center', bg: alpha(PAL.panel, 0.85) });
    text(ctx, 'oval window, A_2 = ' + fmt(A2, 1) + ' mm²', WX + 22, SY - d2 / 2 - 22, PAL.ink, { size: 19, weight: 600, bg: alpha(PAL.panel, 0.85) });
    /* the gauge: the two pressures on one logarithmic scale */
    line(ctx, GX, GT, GX, GB, PAL.muted, 2);
    for (let e = -2; e <= 3; e++) { const y = gy(Math.pow(10, e)); line(ctx, GX - 8, y, GX + 8, y, PAL.muted, 2); text(ctx, (e === -2 ? '0.01' : e === -1 ? '0.1' : e === 3 ? '1000' : String(Math.pow(10, e))) + ' Pa', GX + 18, y, PAL.muted, { size: 16 }); }
    text(ctx, 'pressure', GX, GT - 28, PAL.ink, { size: 19, weight: 600, align: 'center' });
    const y1 = gy(P1), y2 = gy(P2);
    line(ctx, GX, y1, GX, y2, pc, 4);
    dot(ctx, GX, y1, pc, false, 10); dot(ctx, GX, y2, pc, true, 10);
    text(ctx, 'P_1', GX - 20, y1, pc, { size: 20, weight: 600, align: 'right' });
    text(ctx, 'P_2', GX - 20, y2, pc, { size: 20, weight: 600, align: 'right' });
    text(ctx, '× ' + fmt(P2 / P1, 0), GX - 16, (y1 + y2) / 2, PAL.ink, { size: 20, weight: 600, align: 'right', bg: alpha(PAL.panel, 0.85) });
    topline(ctx, 'A sound pressure of ' + fmt(P1, 2) + ' Pa on the eardrum becomes ' + fmt(P2, P2 < 10 ? 1 : 0) + ' Pa at the oval window, ' + fmt(P2 / P1, 0) + ' times as great.');
    readout(d.readout, `\\kPrtwo = \\frac{\\kFtwo}{A_2} = \\frac{(r_1/r_2)\\,\\kProne A_1}{A_2} = \\frac{${fmt(ratio, 1)}\\,(${fmt(P1, 2)}\\ \\text{Pa})(${fmt(A1, 0)}\\ \\text{mm}^2)}{${fmt(A2, 1)}\\ \\text{mm}^2} = ${fmt(P2, P2 < 10 ? 1 : 0)}\\ \\text{Pa}`,
      'The force on the eardrum is F₁ = P₁A₁ = ' + fmt(F1, 1) + ' µN, and the lever raises it to F₂ = ' + fmt(F2, 1) + ' µN, a factor of ' + fmt(ratio, 1) + '. The oval window has ' + fmt(A1 / A2, 0) + ' times less area than the eardrum, so the pressure is raised ' + fmt(P2 / P1, 0) + ' times in all' + (Math.abs(P2 / P1 - 40) < 6 ? ', about the 40 the text gives.' : '.') + ' The protective muscles of the middle ear act by reducing the mechanical advantage of this lever.');
  }
  register(d.fig, { update: () => {}, draw });
})();
};
