/* Figures for section 1.1 Physics: An Introduction. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['1.1'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, REDUCED, ctl, cycle, register, begin, line, dot, text, headline } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

/* =====================================================================
   SIM 1: the planetary model of the atom, replacing Figure 1.10. A
   nucleus of protons at the centre, electrons on circular orbits of
   increasing radius filling shells of two, eight and eight, going round
   without end. One slider, the number of electrons, since the section
   introduces no physical quantity; what is variable in the idea is which
   atom the model is a picture of. An endless cycle, so no scrubber.
===================================================================== */
(function () {
  const d = sim('sim-atom-model', 620);
  const Z = ctl(d.controls, { label: '\\text{electrons}', cls: '', min: 1, max: 18, step: 1, value: 1, unit: '', dec: 0, onInput: reset, aria: 'number of electrons' });
  const cy = cycle(() => Infinity, 0);
  function reset() { cy.reset(); }
  const NAMES = ['hydrogen', 'helium', 'lithium', 'beryllium', 'boron', 'carbon', 'nitrogen', 'oxygen', 'fluorine', 'neon', 'sodium', 'magnesium', 'aluminum', 'silicon', 'phosphorus', 'sulfur', 'chlorine', 'argon'];
  const SYMB = ['H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar'];
  const WORDS = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen'];
  const SHELL = [2, 8, 8];          /* how many electrons each shell holds */
  const RAD = [92, 162, 232];       /* the radius of each orbit, in logical units */
  const OMEGA = [1.5, 0.95, 0.65];  /* how fast each shell goes round, in radians per second; the inner ones faster, as planets do */
  const ORD = ['first', 'second', 'third'];
  const cx = 700, cy0 = 350;        /* the centre of the atom */
  const GOLD = Math.PI * (3 - Math.sqrt(5));   /* the angle between successive protons in the cluster */
  const fill = (z) => SHELL.map((cap, i) => Math.max(0, Math.min(cap, z - SHELL.slice(0, i).reduce((a, b) => a + b, 0))));
  /* the nucleus: z protons packed round the centre */
  function nucleus(ctx, x, y, z, r) {
    for (let i = 0; i < z; i++) { const rho = i === 0 ? 0 : 1.18 * r * Math.sqrt(i), a = i * GOLD; dot(ctx, x + rho * Math.cos(a), y + rho * Math.sin(a), PAL.ink, true, r); }
  }
  function draw() {
    const { ctx } = begin(d.c);
    const raw = cy.now(), tau = isFinite(raw) ? raw : 0;   /* reduced motion and a stopped figure both draw the atom at rest */
    const z = Z.v, shells = fill(z);
    /* the orbits, faint, with the empty ones fainter still */
    ctx.save(); ctx.lineWidth = 3;
    shells.forEach((n, s) => { ctx.strokeStyle = n ? PAL.rule : alpha(PAL.rule, 0.45); ctx.beginPath(); ctx.arc(cx, cy0, RAD[s], 0, Math.PI * 2); ctx.stroke(); });
    ctx.restore();
    /* the nucleus */
    nucleus(ctx, cx, cy0, z, 8);
    /* the electrons, spaced evenly round each shell and going round together */
    shells.forEach((n, s) => {
      for (let k = 0; k < n; k++) { const a = OMEGA[s] * tau + (2 * Math.PI * k) / n + s * 0.6; dot(ctx, cx + RAD[s] * Math.cos(a), cy0 + RAD[s] * Math.sin(a), PAL.ink, true, 9); }
    });
    /* the element, named at the left */
    text(ctx, SYMB[z - 1], 230, 330, PAL.ink, { weight: 700, size: 88, align: 'center' });
    text(ctx, NAMES[z - 1], 230, 400, PAL.muted, { size: 22, align: 'center' });
    text(ctx, z + (z === 1 ? ' electron' : ' electrons'), 230, 434, PAL.muted, { size: 17, align: 'center' });
    /* what the drawing shows, at the right */
    const lx = 1010;
    dot(ctx, lx, 170, PAL.ink, true, 9); text(ctx, 'an electron', lx + 26, 170, PAL.muted);
    nucleus(ctx, lx, 226, 3, 6); text(ctx, 'the nucleus, ' + z + (z === 1 ? ' proton' : ' protons'), lx + 26, 226, PAL.muted);
    line(ctx, lx - 14, 274, lx + 14, 274, PAL.rule, 3); text(ctx, 'one orbit for each shell', lx + 26, 274, PAL.muted);
    shells.forEach((n, s) => text(ctx, ORD[s] + ' shell, ' + n + ' of ' + SHELL[s] + (n === 1 ? ' electron' : ' electrons'), lx - 14, 340 + 40 * s, n ? PAL.ink : PAL.muted, { size: 20, weight: n ? 600 : 400 }));
    headline(ctx, NAMES[z - 1] + ': ' + WORDS[z - 1] + (z === 1 ? ' electron orbits' : ' electrons orbit') + ' a nucleus of ' + WORDS[z - 1] + (z === 1 ? ' proton' : ' protons') + ', in the picture the model gives us');
    readout(d.readout, '\\text{diameter of the atom} \\approx 10^{-10}\\ \\text{m}',
      'The nucleus is about 10⁵ times smaller than the atom, so a drawing to scale would show nothing but the orbits. The model is not a photograph; it is a picture that helps explain what we can measure.');
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => 1), draw });
})();
};
