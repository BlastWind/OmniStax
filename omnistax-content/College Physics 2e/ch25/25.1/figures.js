/* Figures for section 25.1 The Ray Aspect of Light. The page binds no type, as
   ch25/COLOR.md gives 25.1: a path of light is a chain of straight lines, and the
   Sun, the Earth, the window, the car, the person and every ray are in ink. Nothing
   moves, since a path has no clock in it, so the figure registers no cycle and
   redraws on its choice alone (root rule 14). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['25.1'] = function (root, F) {
const { tex, PAL, alpha, choice, register, begin, line, arrow, dot, topline, label, silhouette, car, hover } = F;
const sim = (id, H) => F.sim(root, id, H);

const N_GLASS = 1.5;                     /* the index of window glass, which sets how far a ray bends inside the pane */

/* a ray as a polyline, with an arrowhead halfway along its first and its last segment */
function ray(ctx, pts, color, w) {
  for (let i = 1; i < pts.length; i++) line(ctx, pts[i - 1].x, pts[i - 1].y, pts[i].x, pts[i].y, color, w);
  const head = (a, b) => {
    const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2, L = Math.hypot(b.x - a.x, b.y - a.y) || 1;
    arrow(ctx, mx - ((b.x - a.x) / L) * 20, my - ((b.y - a.y) / L) * 20, mx + ((b.x - a.x) / L) * 8, my + ((b.y - a.y) / L) * 8, color, w);
  };
  head(pts[0], pts[1]);
  if (pts.length > 2) head(pts[pts.length - 2], pts[pts.length - 1]);
}

/* ---------- Figure 25.3: three paths from the Sun ---------- */
(function () {
  const H = 560;
  const d = sim('sim-three-paths', H);
  if (!d) return;
  const path = choice(d.controls, {
    label: 'Path', value: 'direct', aria: 'path of the light',
    options: [{ value: 'direct', label: 'Through empty space' }, { value: 'media', label: 'Through media' }, { value: 'reflect', label: 'After reflection' }],
  });

  /* panel (a): the Sun and the Earth with its atmosphere */
  const SUN = { x: 110, y: 190, r: 36 }, EARTH = { x: 300, y: 430, r: 92 }, ATM = 114;
  /* panel (b): a window seen in cross-section, a car outside it and a person inside */
  const GL = 960, GR = 982, GT = 210, GB = 430;       /* the pane of glass */
  const GROUND = 500, FLOOR = 540, LEFT = 500;
  const CAR = { x: 720, y: 465, s: 2.2 };
  const TOP = { x: 736, y: CAR.y - 24 * CAR.s };      /* the shiny roof of the car, where the ray reflects */
  const PS = 1.6, PX = 1262;
  const EYE = { x: PX - 14 * PS, y: FLOOR - 140 * PS };
  const SUNDIR = (() => { const L = Math.hypot(1, 0.25); return { x: 1 / L, y: 0.25 / L }; })();

  /* the path of a ray that arrives at `end` travelling along `u`, traced back through the pane:
     it bends toward the normal inside the glass and leaves parallel to the way it came */
  function throughGlass(end, u) {
    const t1 = (end.x - GR) / u.x, inner = { x: GR, y: end.y - t1 * u.y };
    const s1 = u.y, s2 = s1 / N_GLASS, c2 = Math.sqrt(1 - s2 * s2);
    const outer = { x: GL, y: inner.y - ((GR - GL) / c2) * s2 };
    return [outer, inner, end];
  }
  const back = (p, u, x) => ({ x, y: p.y - ((p.x - x) / u.x) * u.y });

  function paths() {
    const au = { x: EARTH.x - SUN.x, y: EARTH.y - SUN.y }, aL = Math.hypot(au.x, au.y);
    const direct = [
      { x: SUN.x + (au.x / aL) * (SUN.r + 6), y: SUN.y + (au.y / aL) * (SUN.r + 6) },
      { x: EARTH.x - (au.x / aL) * ATM, y: EARTH.y - (au.y / aL) * ATM },
    ];
    const m = throughGlass(EYE, SUNDIR);
    const media = [back(m[0], SUNDIR, LEFT), ...m];
    const ru = { x: EYE.x - TOP.x, y: EYE.y - TOP.y }, rL = Math.hypot(ru.x, ru.y);
    const r = throughGlass(EYE, { x: ru.x / rL, y: ru.y / rL });
    const reflect = [back(TOP, SUNDIR, LEFT), TOP, ...r];
    return { direct, media, reflect };
  }

  const HEAD = {
    direct: 'Light from the Sun reaches the upper atmosphere of Earth in one straight ray.',
    media: 'Sunlight passes through the air and the glass to the person, bending at each face of the pane.',
    reflect: 'Sunlight reflects from the car, then passes through the window to the person.',
  };
  const CHAIN = {
    direct: '\\text{Sun} \\rightarrow \\text{upper atmosphere}:\\ 1\\ \\text{straight segment}',
    media: '\\text{Sun} \\rightarrow \\text{air} \\rightarrow \\text{glass} \\rightarrow \\text{air} \\rightarrow \\text{eye}:\\ 3\\ \\text{straight segments}',
    reflect: '\\text{Sun} \\rightarrow \\text{car} \\rightarrow \\text{air} \\rightarrow \\text{glass} \\rightarrow \\text{eye}:\\ 4\\ \\text{straight segments}',
  };

  hover(d.stage, () => [
    { x: EARTH.x, y: EARTH.y, r: EARTH.r, name: 'Earth' },
    { x: PX, y: FLOOR - 70 * PS, r: 70 * PS, name: 'person' },
  ]);

  function draw() {
    const { ctx } = begin(d.c);
    const soft = alpha(PAL.ink, 0.35);

    /* panel (a) */
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(SUN.x, SUN.y, SUN.r, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.restore();
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2, c = Math.cos(a), s = Math.sin(a);
      line(ctx, SUN.x + c * (SUN.r + 8), SUN.y + s * (SUN.r + 8), SUN.x + c * (SUN.r + 20), SUN.y + s * (SUN.r + 20), PAL.ink, 3);
    }
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(EARTH.x, EARTH.y, EARTH.r, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.setLineDash([10, 10]); ctx.strokeStyle = soft; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(EARTH.x, EARTH.y, ATM, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
    line(ctx, 460, 100, 460, H - 20, alpha(PAL.ink, 0.2), 2);

    /* panel (b) */
    line(ctx, LEFT, GROUND, GL, GROUND, PAL.ink, 3);
    line(ctx, GR, FLOOR, 1390, FLOOR, PAL.ink, 3);
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.55);
    ctx.fillRect(GL, 110, GR - GL, GT - 110); ctx.fillRect(GL, GB, GR - GL, FLOOR - GB);
    ctx.fillStyle = alpha(PAL.ink, 0.08); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 2;
    ctx.fillRect(GL, GT, GR - GL, GB - GT); ctx.strokeRect(GL, GT, GR - GL, GB - GT); ctx.restore();
    car(ctx, CAR.x, CAR.y, PAL.ink, CAR.s);
    silhouette(ctx, { x: PX, y: FLOOR, s: PS, face: -1, pose: 'stand', color: PAL.ink });

    /* the three paths, the chosen one in full and the others faint */
    const P = paths();
    ['direct', 'media', 'reflect'].forEach((k) => {
      const on = path.a(k);
      ray(ctx, P[k], alpha(PAL.ink, 0.25 + 0.75 * on), 3 + 2 * on);
    });
    const m = P[path.value];
    dot(ctx, m[m.length - 1].x, m[m.length - 1].y, PAL.ink, true, 7);

    label(ctx, 'Sun', SUN.x, SUN.y - SUN.r - 14, { side: 'above', H });
    label(ctx, 'upper atmosphere', EARTH.x - ATM * 0.8, EARTH.y - ATM * 0.6, { side: 'left', gap: 12, H });
    label(ctx, 'sunlight', LEFT, P.media[0].y, { side: 'above', H });
    label(ctx, 'window glass', GL, GT, { side: 'above', gap: 40, H });
    label(ctx, 'car', CAR.x - 60, CAR.y + 20, { side: 'left', H });

    topline(ctx, HEAD[path.value]);
    tex(d.readout, CHAIN[path.value]);
  }
  register(d.fig, { update: () => {}, draw });
})();
};
