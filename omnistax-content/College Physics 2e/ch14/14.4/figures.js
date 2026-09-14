/* Figures for section 14.4 Heat Transfer Methods. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['14.4'] = function (root, F) {
const { el, PAL, alpha, choice, hover, register, begin, line, arrow, dot, text, topline, spring } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI;

/* ---------- small helpers shared by the figures ---------- */
/* a curved arrow along the quadratic Bezier p0, p1, p2 with its head laid along the end tangent */
function carrow(ctx, [x0, y0], [x1, y1], [x2, y2], color, w) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath(); ctx.moveTo(x0, y0);
  const tx = x2 - x1, ty = y2 - y1, L = Math.hypot(tx, ty) || 1, ex = x2 - (tx / L) * 12, ey = y2 - (ty / L) * 12;
  ctx.quadraticCurveTo(x1, y1, ex, ey); ctx.stroke(); ctx.restore();
  arrow(ctx, x2 - (tx / L) * 26, y2 - (ty / L) * 26, x2, y2, color, w);
}
/* a wavy arrow from (x1, y1) to (x2, y2): the book's mark for radiation leaving a hot body */
function wavy(ctx, x1, y1, x2, y2, color, w, amp) {
  const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy), ux = dx / L, uy = dy / L, px = -uy, py = ux;
  const body = L - 24, n = Math.max(24, Math.round(body / 5));
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath();
  for (let i = 0; i <= n; i++) { const s = (i / n) * body, o = amp * Math.sin((s / 20) * TAU); const x = x1 + ux * s + px * o, y = y1 + uy * s + py * o; if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
  ctx.stroke(); ctx.restore();
  arrow(ctx, x1 + ux * body, y1 + uy * body, x2, y2, color, w);
}
/* a label written up the page, for the side of a chimney */
function upright(ctx, s, x, y, color, size) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(-Math.PI / 2); text(ctx, s, 0, 0, color, { size, weight: 600, align: 'center', bg: PAL.panel }); ctx.restore();
}
function poly(ctx, pts, fill, stroke, w) {
  ctx.save(); ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.closePath();
  if (fill) { ctx.fillStyle = fill; ctx.fill(); } if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = w || 3; ctx.stroke(); } ctx.restore();
}

/* =====================================================================
   FIGURE 14.13: the fireplace. The room, the chimney, the window and the
   couch are the book's; each of the three methods is a path the reader can
   pick out alone, and putting the fire out takes every path away, since
   nothing is then hotter than anything else. Still: the section states no
   rate and no time, so nothing here has a clock.
===================================================================== */
(function () {
  const H = 720;
  const d = sim('sim-fireplace', H);
  const show = choice(d.controls, { label: '\\text{Show}', options: [{ value: 'all', label: 'all three' }, { value: 'conduction', label: 'conduction' }, { value: 'convection', label: 'convection' }, { value: 'radiation', label: 'radiation' }], value: 'all', aria: 'which method of heat transfer to show' });
  const fire = choice(d.controls, { label: '\\text{Fire}', options: [{ value: 'on', label: 'burning' }, { value: 'off', label: 'out' }], value: 'on', aria: 'whether the fire is burning' });
  /* the scene, in logical units: the chimney at the left, the room with its window at the right, the ground under both */
  const CH = { l: 200, r: 340, top: 110, open: 440 };                 /* the chimney shaft and the height of its opening into the room */
  const ROOM = { l: 340, r: 1240, t: 160, b: 640 };                    /* the room's front frame */
  const BACK = { l: 460, r: 1120, t: 240, b: 560 };                    /* the back wall */
  const GROUND = { t: 640, b: 700 };
  const WIN = [[1150, 300], [1215, 268], [1215, 422], [1150, 442]];    /* the window on the right wall */
  const FIRE = { x: 285, y: 600 };                                     /* the base of the flames */
  /* the flame is the one colour on the page: the physical fact, in the flame's own orange and yellow (rule 7) */
  const FLAME_OUT = '#f2a33a', FLAME_IN = '#ffd166';
  const HEADS = {
    all: 'In a fireplace, heat is transferred into the room by all three methods, and most of it by radiation.',
    conduction: 'Conduction carries heat from the fire into the floor through matter that stays where it is, and at a much slower rate than the other two.',
    convection: 'Convection carries heat by moving the air itself: cold air comes in around the window and hot air leaves up the chimney.',
    radiation: 'Radiation carries most of the heat into the room, crossing from the flames to the couch and the walls with nothing to carry it.',
    off: 'With the fire out and the room at the temperature of the outdoors, there is no temperature difference and no heat is transferred by any method.',
  };
  const READS = {
    all: 'Every one of the three transfers heat only because the fire is hotter than the room and the room is warmer than the outdoors.',
    conduction: 'Heat passes from the hot hearth into the floor by physical contact, as it does from the burner of a stove into the bottom of a pan.',
    convection: 'The air itself moves and carries the heat with it: the air the fire has warmed rises up the chimney, and cold air drawn in around the window flows along the floor to take its place.',
    radiation: 'Infrared radiation and visible light leave the flames and are absorbed by the couch, the walls and anyone sitting in the room, with no matter needed in between.',
    off: 'The fire, the room, the floor and the outdoors are at one temperature, so nothing drives a transfer by any of the three methods.',
  };
  function flame(ctx, x, y, s, outer, inner) {
    ctx.save();
    ctx.fillStyle = outer; ctx.beginPath(); ctx.moveTo(x - 46 * s, y);
    ctx.bezierCurveTo(x - 60 * s, y - 50 * s, x - 20 * s, y - 70 * s, x - 6 * s, y - 128 * s);
    ctx.bezierCurveTo(x + 6 * s, y - 80 * s, x + 30 * s, y - 84 * s, x + 26 * s, y - 40 * s);
    ctx.bezierCurveTo(x + 40 * s, y - 44 * s, x + 50 * s, y - 24 * s, x + 46 * s, y);
    ctx.closePath(); ctx.fill();
    ctx.fillStyle = inner; ctx.beginPath(); ctx.moveTo(x - 22 * s, y);
    ctx.bezierCurveTo(x - 30 * s, y - 30 * s, x - 8 * s, y - 40 * s, x - 2 * s, y - 76 * s);
    ctx.bezierCurveTo(x + 4 * s, y - 46 * s, x + 20 * s, y - 40 * s, x + 22 * s, y);
    ctx.closePath(); ctx.fill();
    ctx.restore();
  }
  function logs(ctx, x, y, burnt) {
    const c = burnt ? alpha(PAL.ink, 0.55) : PAL.ink;
    ctx.save(); ctx.fillStyle = burnt ? alpha(PAL.ink, 0.25) : PAL.soft; ctx.strokeStyle = c; ctx.lineWidth = 3;
    for (const [lx, ly, r] of [[x - 30, y + 14, 16], [x + 8, y + 16, 17], [x + 44, y + 14, 15], [x - 12, y - 10, 15], [x + 26, y - 10, 15]]) {
      ctx.beginPath(); ctx.arc(lx, ly, r, 0, TAU); ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.arc(lx, ly, r * 0.45, 0, TAU); ctx.stroke();
    }
    ctx.restore();
  }
  function couch(ctx, x, y) {                                          /* x, y: the front-left corner of the seat */
    const w = 270, seat = 60, back = 70, arm = 34;
    ctx.save(); ctx.fillStyle = PAL.soft; ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.roundRect(x + arm, y - seat - back, w - 2 * arm, back + 10, 12); ctx.fill(); ctx.stroke();          /* the back */
    ctx.beginPath(); ctx.roundRect(x, y - seat, w, seat, 10); ctx.fill(); ctx.stroke();                                    /* the seat */
    ctx.beginPath(); ctx.roundRect(x, y - seat - 36, arm, seat + 36, 12); ctx.fill(); ctx.stroke();                          /* the arms */
    ctx.beginPath(); ctx.roundRect(x + w - arm, y - seat - 36, arm, seat + 36, 12); ctx.fill(); ctx.stroke();
    line(ctx, x + arm + (w - 2 * arm) / 2, y - seat - back + 8, x + arm + (w - 2 * arm) / 2, y - seat, PAL.muted, 2);
    for (const lx of [x + 14, x + w - 14]) line(ctx, lx, y, lx, y + 16, PAL.ink, 4);
    ctx.restore();
  }
  function draw() {
    const { ctx } = begin(d.c);
    const on = fire.value === 'on', sel = show.value;
    const tone = (k) => (sel === 'all' || sel === k ? PAL.ink : alpha(PAL.ink, 0.18));
    const width = (k) => (sel === k ? 5 : 4);
    /* the ground, the chimney and the room */
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.10); ctx.fillRect(CH.l - 20, GROUND.t, ROOM.r + 20 - (CH.l - 20), GROUND.b - GROUND.t); ctx.restore();
    line(ctx, CH.l - 20, GROUND.t, ROOM.r + 20, GROUND.t, PAL.ink, 3); line(ctx, CH.l - 20, GROUND.b, ROOM.r + 20, GROUND.b, PAL.muted, 2);
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.06); ctx.fillRect(CH.l, CH.top, CH.r - CH.l, GROUND.t - CH.top); ctx.restore();
    line(ctx, CH.l, CH.top, CH.l, GROUND.t, PAL.ink, 10); line(ctx, CH.r, CH.top, CH.r, CH.open, PAL.ink, 10);   /* the shaft's walls; the right one stops at the opening */
    poly(ctx, [[ROOM.l, ROOM.t], [ROOM.r, ROOM.t], [BACK.r, BACK.t], [BACK.l, BACK.t]], alpha(PAL.ink, 0.04), PAL.ink, 3);          /* ceiling */
    poly(ctx, [[BACK.l, BACK.b], [BACK.r, BACK.b], [ROOM.r, ROOM.b], [ROOM.l, ROOM.b]], alpha(PAL.ink, 0.12), PAL.ink, 3);          /* floor */
    poly(ctx, [[ROOM.r, ROOM.t], [ROOM.r, ROOM.b], [BACK.r, BACK.b], [BACK.r, BACK.t]], alpha(PAL.ink, 0.08), PAL.ink, 3);          /* right wall */
    poly(ctx, [[BACK.l, BACK.t], [BACK.r, BACK.t], [BACK.r, BACK.b], [BACK.l, BACK.b]], PAL.soft, PAL.ink, 3);                     /* back wall */
    poly(ctx, [[ROOM.l, ROOM.t], [BACK.l, BACK.t], [BACK.l, BACK.b], [ROOM.l, ROOM.b]], alpha(PAL.ink, 0.08), PAL.ink, 3);          /* left wall */
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.04); ctx.fillRect(CH.r, CH.open, BACK.l - CH.r, ROOM.b - CH.open); ctx.restore();  /* the opening of the hearth */
    line(ctx, CH.r, CH.open, BACK.l, BACK.t + (CH.open - ROOM.t) * (BACK.b - BACK.t) / (ROOM.b - ROOM.t), PAL.ink, 3);
    poly(ctx, WIN, PAL.panel, PAL.ink, 3);                                                                                          /* the window */
    line(ctx, 1182, 284, 1182, 432, PAL.ink, 2); line(ctx, WIN[0][0], 371, WIN[1][0], 345, PAL.ink, 2);
    /* the couch and the fire */
    couch(ctx, 640, 560);
    logs(ctx, FIRE.x, FIRE.y + 18, !on);
    if (on) flame(ctx, FIRE.x, FIRE.y + 6, 1, FLAME_OUT, FLAME_IN);
    /* the three paths, only while a temperature difference drives them */
    if (on) {
      const cd = tone('conduction'), cv = tone('convection'), rd = tone('radiation');
      /* conduction: from under the logs down into the ground and along it */
      ctx.save(); ctx.strokeStyle = cd; ctx.lineWidth = width('conduction'); ctx.beginPath(); ctx.moveTo(FIRE.x, GROUND.t + 4); ctx.lineTo(FIRE.x, GROUND.t + 32); ctx.quadraticCurveTo(FIRE.x, GROUND.t + 46, FIRE.x + 14, GROUND.t + 46); ctx.lineTo(500, GROUND.t + 46); ctx.stroke(); ctx.restore();
      arrow(ctx, 480, GROUND.t + 46, 530, GROUND.t + 46, cd, width('conduction'));
      text(ctx, 'Conduction (into the floor)', 548, GROUND.t + 46, cd, { size: 22, weight: 600, bg: PAL.panel });
      /* convection: cold air in around the window and along the floor to the fire, hot air up the chimney */
      carrow(ctx, [1146, 352], [1040, 400], [936, 566], cv, width('convection'));
      carrow(ctx, [1146, 418], [1080, 500], [1010, 598], cv, width('convection'));
      carrow(ctx, [1010, 610], [700, 646], [372, 614], cv, width('convection'));
      carrow(ctx, [936, 578], [650, 600], [380, 590], cv, width('convection'));
      for (const x of [CH.l + 42, CH.l + 98]) { arrow(ctx, x, 470, x, 300, cv, width('convection')); arrow(ctx, x, 280, x, 130, cv, width('convection')); }
      text(ctx, 'Convection (cold air in)', 700, 612, cv, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
      text(ctx, 'cold air', 1252, 332, cv, { size: 19, weight: 600, bg: PAL.panel });
      upright(ctx, 'Convection (hot air up the chimney)', CH.l - 36, 300, cv, 22);
      /* radiation: wavy arrows from the flames across the room */
      wavy(ctx, 340, 520, 630, 452, rd, width('radiation'), 6);
      wavy(ctx, 340, 566, 626, 516, rd, width('radiation'), 6);
      text(ctx, 'Radiation', 470, 448, rd, { size: 22, weight: 600, align: 'center', bg: PAL.panel });
    }
    topline(ctx, on ? HEADS[sel] : HEADS.off);
    d.readout.replaceChildren(el('small', null, on ? READS[sel] : READS.off));
  }
  hover(d.stage, () => [
    { x: 1182, y: 356, r: 60, name: 'the window, where cold air enters the room' },
    { x: 270, y: 260, r: 80, name: 'the chimney, where hot air leaves' },
    { x: FIRE.x, y: FIRE.y - 30, r: 70, name: fire.value === 'on' ? 'the fire on the hearth' : 'the hearth, with the fire out' },
    { x: 775, y: 500, r: 90, name: 'the couch' },
    { x: 700, y: 672, r: 34, name: 'the floor under the room' },
  ]);
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 14.14: the thermos bottle, cut away. A faithful copy for the
   conceptual question that asks what each part is for: no slider, no
   animation, the book's six labels beside their parts, and hover names for
   the stopper, the neck and the air layer, which the question names too.
===================================================================== */
(function () {
  const H = 720;
  const d = sim('fig-thermos', H);
  const CX = 620;                                                     /* the bottle's axis */
  const CON = { l: 500, r: 740, t: 200, b: 690, neck: 36, top: 122 };  /* the outer container: shoulders at t, the neck half-width, the top of the neck */
  const OUT = { l: 536, r: 704, t: 236, b: 640, neck: 28, top: 150 };  /* the vessel's outer glass wall */
  const INN = { l: 558, r: 682, t: 258, b: 618, neck: 16, top: 150 };  /* the vessel's inner glass wall */
  const LEVEL = 400;                                                   /* the liquid's surface */
  /* a bottle outline: a rounded bottom, straight sides, shoulders curving in to a neck of the given half-width */
  function bottle(ctx, b) {
    ctx.beginPath(); ctx.moveTo(CX - b.neck, b.top); ctx.lineTo(CX - b.neck, b.t - 30);
    ctx.bezierCurveTo(CX - b.neck, b.t + 10, b.l, b.t - 10, b.l, b.t + 40);
    ctx.lineTo(b.l, b.b - 40); ctx.quadraticCurveTo(b.l, b.b, b.l + 40, b.b); ctx.lineTo(b.r - 40, b.b); ctx.quadraticCurveTo(b.r, b.b, b.r, b.b - 40);
    ctx.lineTo(b.r, b.t + 40); ctx.bezierCurveTo(b.r, b.t - 10, CX + b.neck, b.t + 10, CX + b.neck, b.t - 30);
    ctx.lineTo(CX + b.neck, b.top);
  }
  function draw() {
    const { ctx } = begin(d.c);
    /* the container, thick-walled, and the air inside it */
    ctx.save(); ctx.lineJoin = 'round'; bottle(ctx, CON); ctx.closePath(); ctx.fillStyle = alpha(PAL.ink, 0.10); ctx.fill(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 12; ctx.stroke(); ctx.restore();
    /* the vacuum between the two glass walls, empty, and the walls themselves with their silvered faces */
    ctx.save(); bottle(ctx, OUT); ctx.closePath(); ctx.fillStyle = PAL.panel; ctx.fill(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.stroke(); ctx.restore();
    ctx.save(); bottle(ctx, INN); ctx.closePath(); ctx.fillStyle = PAL.panel; ctx.fill(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.stroke(); ctx.restore();
    /* the silvering: a grey band along each wall's face onto the vacuum */
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.45); ctx.lineWidth = 5; bottle(ctx, { ...OUT, l: OUT.l + 5, r: OUT.r - 5, b: OUT.b - 5, neck: OUT.neck - 5, top: OUT.top + 4 }); ctx.stroke(); bottle(ctx, { ...INN, l: INN.l - 5, r: INN.r + 5, b: INN.b + 5, neck: INN.neck + 5, top: INN.top + 4 }); ctx.stroke(); ctx.restore();
    /* the liquid, up to its level */
    ctx.save(); bottle(ctx, INN); ctx.closePath(); ctx.clip(); ctx.fillStyle = alpha(PAL.ink, 0.16); ctx.fillRect(INN.l - 10, LEVEL, INN.r - INN.l + 20, INN.b - LEVEL + 20); ctx.restore();
    line(ctx, INN.l + 2, LEVEL, INN.r - 2, LEVEL, PAL.ink, 2);
    /* the neck: the two walls meet at the lip, and the stopper closes it */
    line(ctx, CX - OUT.neck, OUT.top, CX - INN.neck, INN.top, PAL.ink, 3); line(ctx, CX + OUT.neck, OUT.top, CX + INN.neck, INN.top, PAL.ink, 3);
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.5); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.roundRect(CX - 52, 86, 104, 38, 8); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(CX - 30, 124); ctx.lineTo(CX - 26, 166); ctx.quadraticCurveTo(CX, 182, CX + 26, 166); ctx.lineTo(CX + 30, 124); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.restore();
    /* the spring centering device on each side, and the rubber support under the vessel */
    spring(ctx, CON.l + 8, 380, OUT.l - 2, 380, 3, 7, PAL.ink, 3); spring(ctx, OUT.r + 2, 380, CON.r - 8, 380, 3, 7, PAL.ink, 3);
    ctx.save(); ctx.fillStyle = alpha(PAL.ink, 0.55); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.roundRect(CX - 22, OUT.b - 2, 44, CON.b - OUT.b + 2, 4); ctx.fill(); ctx.stroke(); ctx.restore();
    /* the book's six labels, each beside its part with a leader to it */
    const LAB = [
      ['Glass walls with silvered surfaces', 820, 236, 'left', 692, 300],
      ['Spring centering device', 820, 380, 'left', 722, 380],
      ['Container', 820, 470, 'left', 742, 470],
      ['Vacuum', 820, 560, 'left', 694, 560],
      ['Rubber support', 820, 662, 'left', 642, 664],
      ['Hot or cold liquid', 420, 520, 'right', 600, 520],
    ];
    for (const [s, lx, ly, align, hx, hy] of LAB) {
      const ex = align === 'left' ? lx - 8 : lx + 8;
      line(ctx, hx, hy, ex, ly, alpha(PAL.ink, 0.55), 1.5, [5, 6]); dot(ctx, hx, hy, PAL.ink, true, 4);
      text(ctx, s, lx, ly, PAL.ink, { size: 22, weight: 600, align, bg: PAL.panel });
    }
    topline(ctx, 'A thermos bottle is built to slow every method of heat transfer at once.');
  }
  hover(d.stage, () => [
    { x: CX, y: 105, r: 50, name: 'the stopper' },
    { x: CX, y: 175, r: 34, name: 'the thin-walled long glass neck' },
    { x: 518, y: 520, r: 16, name: 'the air layer between the vessel and the container' },
    { x: 722, y: 520, r: 16, name: 'the air layer between the vessel and the container' },
    { x: CX, y: 520, r: 60, name: 'the hot or cold liquid' },
    { x: 694, y: 560, r: 12, name: 'the vacuum between the two glass walls' },
    { x: CX, y: 664, r: 24, name: 'the rubber support' },
    { x: 722, y: 380, r: 20, name: 'the spring centering device' },
    { x: 518, y: 380, r: 20, name: 'the spring centering device' },
  ]);
  register(d.fig, { update: () => {}, draw });
})();
};
