/* Figures for section 22.3 Magnetic Fields and Magnetic Field Lines. Boots
   against the section's text article. The page colours magnetic-field, from every
   field line and every compass needle of both figures, current, from the arrow
   that runs along a wire and round a loop, and position and angle where a slider
   places the reader's compass. The bar magnet, the mark, the loop, the wire and
   the reader's two compasses are the section's referents; N and S stay ink. Both figures answer their controls
   and register no cycle: a compass laid beside a magnet or a wire has settled
   where the field holds it, and the question is which way it ended up pointing
   (rule 14). */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['22.3'] = function (root, F) {
const { el, fmt, tex, C, PAL, alpha, ctl, choice, register, begin, line, arrow, dot, text, topline, label, hover } = F;
const sim = (id, H) => F.sim(root, id, H);
function readout(host, main, small) { tex(host, main); if (small) host.appendChild(el('small', null, small)); }

const RAD = Math.PI / 180, DEG = 180 / Math.PI;

/* ---------- the pieces the two figures share ---------- */

/* one streamline of a plane field, stepped by the midpoint rule; everything is in
   centimeters, and the caller says where the line is to stop */
function trace(B, x0, y0, dir, h, n, stop) {
  const pts = [[x0, y0]];
  let x = x0, y = y0;
  for (let i = 0; i < n; i++) {
    const b1 = B(x, y); let m = Math.hypot(b1.x, b1.y); if (!(m > 0)) break;
    const hx = x + (dir * h * b1.x) / m / 2, hy = y + (dir * h * b1.y) / m / 2;
    const b2 = B(hx, hy); m = Math.hypot(b2.x, b2.y); if (!(m > 0)) break;
    x += (dir * h * b2.x) / m; y += (dir * h * b2.y) / m;
    pts.push([x, y]);
    if (stop(x, y, i)) break;
  }
  return pts;
}

/* the two symbols for a direction perpendicular to the page: the tip of an arrow
   coming toward the reader, and the tail of one going away from them */
function outSym(ctx, X, Y, r, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = Math.max(2.5, r * 0.2); ctx.fillStyle = PAL.panel;
  ctx.beginPath(); ctx.arc(X, Y, r, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
  dot(ctx, X, Y, color, true, Math.max(3, r * 0.36));
}
function inSym(ctx, X, Y, r, color) {
  ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = Math.max(2.5, r * 0.2); ctx.fillStyle = PAL.panel;
  ctx.beginPath(); ctx.arc(X, Y, r, 0, 2 * Math.PI); ctx.fill(); ctx.stroke();
  ctx.lineWidth = Math.max(2.8, r * 0.28); const k = r * 0.58;
  ctx.beginPath(); ctx.moveTo(X - k, Y - k); ctx.lineTo(X + k, Y + k); ctx.moveTo(X + k, Y - k); ctx.lineTo(X - k, Y + k); ctx.stroke();
  ctx.restore();
}

/* a compass lying flat on the page: a case, ink unless it is a referent's, and a
   needle whose north half wears the field hue and carries the point */
function compass(ctx, X, Y, r, ang, color, letter, rim = alpha(PAL.ink, 0.75)) {
  ctx.save(); ctx.strokeStyle = rim; ctx.lineWidth = Math.max(2, r * 0.09); ctx.fillStyle = PAL.panel;
  ctx.beginPath(); ctx.arc(X, Y, r, 0, 2 * Math.PI); ctx.fill(); ctx.stroke();
  const ux = Math.cos(ang), uy = Math.sin(ang), px = -uy, py = ux, w = Math.max(2.4, r * 0.16);
  ctx.fillStyle = color;
  ctx.beginPath(); ctx.moveTo(X + ux * r * 0.9, Y + uy * r * 0.9); ctx.lineTo(X + px * w, Y + py * w); ctx.lineTo(X - px * w, Y - py * w); ctx.closePath(); ctx.fill();
  ctx.fillStyle = alpha(PAL.ink, 0.4);
  ctx.beginPath(); ctx.moveTo(X - ux * r * 0.9, Y - uy * r * 0.9); ctx.lineTo(X + px * w, Y + py * w); ctx.lineTo(X - px * w, Y - py * w); ctx.closePath(); ctx.fill();
  ctx.restore();
  dot(ctx, X, Y, PAL.ink, true, Math.max(2, r * 0.1));
  if (letter) text(ctx, letter, X + Math.cos(ang) * (r + 14), Y + Math.sin(ang) * (r + 14), color, { size: 19, weight: 700, align: 'center' });
}
/* the same compass seen edge-on, for a field that runs perpendicular to the page */
function compassEdge(ctx, X, Y, r, out, color, rim = alpha(PAL.ink, 0.75)) {
  ctx.save(); ctx.strokeStyle = rim; ctx.lineWidth = 2.5; ctx.fillStyle = PAL.panel;
  ctx.beginPath(); ctx.ellipse(X, Y, r, r * 0.34, 0, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
  if (out > 0) outSym(ctx, X, Y, r * 0.45, color);
  else if (out < 0) inSym(ctx, X, Y, r * 0.45, color);
  else dot(ctx, X, Y, PAL.ink, true, 5);
}

/* =====================================================================
   FIGURE 22.14: the bar magnet, the compasses laid all round it, the
   continuous lines their arrows trace, and the closed loops those lines
   make when the inside of the magnet is probed as well. The book's three
   panels are one story slider (manim 6): the lines are drawn along their
   length out of the needles, which then fade, and the lines are carried on
   through the magnet into closed loops. The compass settles, so there is no
   clock; the story is the one timeline (rule 14).
===================================================================== */
(function () {
  const d = sim('sim-field-map', 900);
  const stS = ctl(d.controls, { label: '\\text{指针} \\to \\text{闭合曲线}', cls: '', min: 0, max: 2, step: 0.01, value: 0, unit: '', dec: 2, aria: '从指南针的指针，到它们描出的磁感线，再到这些磁感线在磁体内部形成的闭合曲线' });
  const alongS = ctl(d.controls, { label: '\\text{沿着}', cls: 'position', min: -16, max: 16, step: 0.5, value: 9, unit: 'cm', dec: 1, aria: '你自己的指南针沿磁体方向放在多远处' });
  const acrossS = ctl(d.controls, { label: '\\text{横跨}', cls: 'position', min: -10, max: 10, step: 0.5, value: 5, unit: 'cm', dec: 1, aria: '你自己的指南针横跨磁体方向放在多远处' });

  const CX = 700, CY = 480, S = 30;            /* 30 units to the centimeter, so the compass at 10 cm above the magnet clears the headline */
  const HL = 7, TH = 4, A = 5.5, MX = 10;      /* the bar is 14 cm by 4 cm, its poles sit 5.5 cm out, the mark 3 cm off the north end */
  const PX = (x) => CX + x * S, PY = (y) => CY - y * S;

  function B(x, y) {
    let bx = 0, by = 0;
    for (const [px, q] of [[A, 1], [-A, -1]]) {
      const dx = x - px, dy = y, r = Math.max(Math.hypot(dx, dy), 0.4), r3 = r * r * r;
      bx += (q * dx) / r3; by += (q * dy) / r3;
    }
    return { x: bx, y: by };
  }
  const mag = (x, y) => { const b = B(x, y); return Math.hypot(b.x, b.y); };
  const inBar = (x, y) => Math.abs(x) < HL && Math.abs(y) < TH / 2;
  const outBox = (x, y) => Math.abs(x) > 15.4 || Math.abs(y) > 10.6;
  const stop = (x, y, i) => (i > 6 && inBar(x, y)) || outBox(x, y);

  /* Where the lines are seeded: on the surface of the north half, which is where
     the lines of a bar magnet come out. A line from the flat face closes inside
     the frame. A line from the end face runs farther than the frame reaches, so
     its far half is drawn as the mirror image the field's own symmetry gives it,
     entering the south end from the other side. `depth` is the height each line
     takes when it is carried back through the magnet. */
  const ARCS = [], RETURNS = [];
  const addFace = (x, sy, depth) => {
    const s = [x, sy * (TH / 2 + 0.05)];
    const pts = trace(B, s[0], s[1], 1, 0.2, 1200, stop);
    ARCS.push(pts);
    const e = pts[pts.length - 1];
    if (inBar(e[0], e[1])) RETURNS.push({ from: e, to: s, depth: sy * depth });
  };
  const addEnd = (y, sy, depth) => {
    const s = [HL + 0.05, sy * y];
    const pts = trace(B, s[0], s[1], 1, 0.2, 1200, stop);
    ARCS.push(pts);
    ARCS.push(pts.map(([x, yy]) => [-x, yy]).reverse());    /* the far half, mirrored */
    RETURNS.push({ from: [-s[0], s[1]], to: s, depth: sy * depth });
  };
  [1, -1].forEach((sy) => {
    [[1.5, 1.75], [3.0, 1.33], [4.2, 0.91], [5.2, 0.49]].forEach(([x, dep]) => addFace(x, sy, dep));
    [[0.35, 0.10], [1.05, 0.22], [1.7, 0.36]].forEach(([y, dep]) => addEnd(y, sy, dep));
  });
  const NAMED = ARCS[3];                                     /* the line the figure names, from the face seed at 5.2 cm */

  /* the compasses the book lays all round the magnet */
  const GRID = [];
  [4.6, -4.6].forEach((y) => [-8, -4, 0, 4, 8].forEach((x) => GRID.push([x, y])));
  [9.0, -9.0].forEach((y) => [-11, -5.5, 0, 5.5, 11].forEach((x) => GRID.push([x, y])));
  [[-15.2, 0], [-12.2, 0], [12.2, 0], [15.2, 0]].forEach((p) => GRID.push(p));

  function stroke(ctx, pts, color, w) {
    if (pts.length < 2) return;
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = w;
    ctx.beginPath(); ctx.moveTo(PX(pts[0][0]), PY(pts[0][1]));
    for (let i = 1; i < pts.length; i++) ctx.lineTo(PX(pts[i][0]), PY(pts[i][1]));
    ctx.stroke(); ctx.restore();
  }
  /* the part of a line inside the magnet, from the south end back to the north, as
     points so that it can be drawn along its length */
  const bez = (r) => {
    const P0 = r.from, P1 = [r.from[0] * 0.55, r.depth], P2 = [r.to[0] * 0.55, r.depth], P3 = r.to, out = [];
    for (let i = 0; i <= 40; i++) {
      const t = i / 40, u = 1 - t, a = u * u * u, b2 = 3 * u * u * t, c = 3 * u * t * t, e = t * t * t;
      out.push([a * P0[0] + b2 * P1[0] + c * P2[0] + e * P3[0], a * P0[1] + b2 * P1[1] + c * P2[1] + e * P3[1]]);
    }
    return out;
  };
  const INSIDE = RETURNS.map(bez);
  const STAGES = ['compasses', 'lines', 'loops'];

  function draw() {
    const { ctx } = begin(d.c);
    const col = C('magnetic-field'), bm = F.ref('magnet'), mk = F.ref('mark'), yc = F.ref('your-compass');
    const px = alongS.v, py = acrossS.v;
    const b = B(px, py);
    const fromAxis = Math.acos(Math.max(-1, Math.min(1, b.x / Math.hypot(b.x, b.y)))) * DEG;
    const ratio = mag(px, py) / mag(MX, 0);
    /* the lines grow out along the needles over the first half of the first step and
       the needles fade over its second half; the second step carries each line on
       through the magnet */
    const s = stS.v, kLine = F.ease.smooth(Math.min(1, Math.max(0, s / 0.6)));
    const kNeedle = 1 - F.ease.smooth(Math.min(1, Math.max(0, (s - 0.4) / 0.6)));
    const kIn = F.ease.smooth(Math.min(1, Math.max(0, s - 1)));
    const state = STAGES[Math.min(2, Math.round(s))];

    if (kLine > 0) ARCS.forEach((pts) => stroke(ctx, F.partial(pts, kLine), col, 3.5));

    /* the magnet, with N and S lettered on its ends */
    const L = 2 * HL * S, T = TH * S;
    ctx.save(); ctx.lineWidth = 3; ctx.strokeStyle = bm; ctx.fillStyle = PAL.panel;
    ctx.beginPath(); ctx.rect(CX - L / 2, CY - T / 2, L, T); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(CX, CY - T / 2); ctx.lineTo(CX, CY + T / 2); ctx.stroke();
    ctx.restore();
    if (kIn > 0) INSIDE.forEach((pts) => stroke(ctx, F.partial(pts, kIn), col, 3.5));
    text(ctx, 'S', PX(-HL / 2), CY, PAL.ink, { size: 44, weight: 700, align: 'center', bg: PAL.panel });
    text(ctx, 'N', PX(HL / 2), CY, PAL.ink, { size: 44, weight: 700, align: 'center', bg: PAL.panel });

    /* the mark the packing of the lines is counted against */
    const mx = PX(MX), my = PY(0);
    line(ctx, mx - 11, my - 11, mx + 11, my + 11, mk, 3);
    line(ctx, mx + 11, my - 11, mx - 11, my + 11, mk, 3);

    if (kNeedle > 0) {
      ctx.save(); ctx.globalAlpha = kNeedle;
      GRID.forEach(([x, y]) => {
        if (Math.hypot(x - px, y - py) < 2.7) return;         /* the reader's own compass has this place */
        const g = B(x, y);
        compass(ctx, PX(x), PY(y), 24, Math.atan2(-g.y, g.x), col);
      });
      label(ctx, '放在图上的指南针', PX(-11), PY(9.0), { side: 'left', size: 19, gap: 26 });
      ctx.restore();
    }

    label(ctx, '条形磁铁', CX, PY(-TH / 2), { side: 'below', size: 19, gap: 28, leader: false, color: bm });
    label(ctx, '标记点', mx, my, { side: 'above', size: 19, gap: 46, color: mk });
    if (kNeedle < 1) {
      const i = Math.round(NAMED.length * 0.5);
      ctx.save(); ctx.globalAlpha = 1 - kNeedle;
      label(ctx, '一条磁感线', PX(NAMED[i][0]), PY(NAMED[i][1]), { side: 'above', size: 19, gap: 26, color: col });
      ctx.restore();
    }
    if (kIn > 0) {
      ctx.save(); ctx.globalAlpha = kIn;
      label(ctx, '磁感线继续穿过磁体', PX(-1.6), PY(0.1), { side: 'above', size: 19, gap: 118, color: col });
      ctx.restore();
    }

    /* the reader's own compass, held over the map, and its name drawn last of all */
    const cx = PX(px), cy = PY(py);
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.globalAlpha = 0.88;
    ctx.beginPath(); ctx.arc(cx, cy, 43, 0, 2 * Math.PI); ctx.fill(); ctx.restore();
    compass(ctx, cx, cy, 34, Math.atan2(-b.y, b.x), col, 'N', yc);
    label(ctx, '你的指南针', cx, cy + (py > 6 ? 43 : -43), { side: py > 6 ? 'below' : 'above', size: 19, gap: 22, color: yc });

    const says = {
      compasses: '每根指针都已沿着它的指南针所在处的磁场稳定下来，背离磁体的北极，指向南极。',
      lines: '把指针的箭头连起来，就得到连续的线，它们从北极出发，回到南极。',
      loops: '如果也能探测磁体的内部，就会发现每条线都自身闭合，从南端折回北端。',
    };

    /* the place in words, since a signed number reads badly in a sentence */
    const along = px === 0 ? '' : `朝${px < 0 ? '南' : '北'}极方向 ${fmt(Math.abs(px), 1)} cm`;
    const across = py === 0 ? '' : `磁体${py < 0 ? '下方' : '上方'} ${fmt(Math.abs(py), 1)} cm`;
    const place = along && across ? `${along}、${across}处` : along ? `${along}处、磁体所在直线上` : across ? `磁体中部之上、${across}处` : '磁体中部';
    topline(ctx, `放在${place}的指南针，其指向偏离磁体所在直线 ${fmt(fromAxis, 0)}°，该处的磁感线排得有标记点处的 ${fmt(ratio, 2)} 倍那么密。`);
    readout(d.readout,
      `\\kBmag = ${fmt(ratio, 2)}\\,\\kBmag_{\\text{mark}}`,
      `朝任一磁极靠拢处，线挤在一起，这使那里的场很强；远远偏向一侧时，线散开，场就减弱了。`);
  }
  register(d.fig, { update: () => {}, draw });
  F.story(d, stS, { stops: [{ v: 0, label: '指针' }, { v: 1, label: '磁感线' }, { v: 2, label: '闭合曲线' }], ms: 1800 });

  hover(d.stage, () => {
    if (stS.v > 0.7) return [];
    const px = alongS.v, py = acrossS.v;
    return GRID.filter(([x, y]) => Math.hypot(x - px, y - py) >= 2.7).map(([x, y]) => {
      const g = B(x, y), a = Math.acos(Math.max(-1, Math.min(1, g.x / Math.hypot(g.x, g.y)))) * DEG;
      return {
        x: PX(x), y: PY(y), r: 27,
        name: `一个朝${x < 0 ? '南' : '北'}极方向 ${fmt(Math.abs(x), 1)} cm、磁体${y < 0 ? '下方' : '上方'} ${fmt(Math.abs(y), 1)} cm 处的指南针，其指针偏离磁体所在直线 ${fmt(a, 0)}°`,
      };
    });
  });
})();

/* =====================================================================
   FIGURE 22.15: the field a current makes, round a loop, round a wire
   lying in the page and round the same wire seen end-on, with the dot and
   the cross for a field perpendicular to the page. Still: a steady current
   makes a steady field, and the compass in it has settled (rule 14). The
   wire in the page turns out of it to be seen end-on, its circles swept
   out as it turns (manim 1, 16); a reversed current turns every needle
   end for end and every dot into a cross.
===================================================================== */
(function () {
  const d = sim('sim-field-sources', 800);
  const srcC = F.select(d.controls, {
    label: '\\text{场源}',
    options: [{ value: 'loop', label: '一个载流线圈' }, { value: 'wire', label: '纸面内的一根导线' }, { value: 'endon', label: '沿轴线看去的一根导线' }],
    value: 'loop',
    aria: '指南针放在三种布置中的哪一种',
  });
  const dirC = choice(d.controls, {
    label: '\\text{电流}',
    options: [{ value: 'book', label: '一个方向' }, { value: 'rev', label: '另一个方向' }],
    value: 'book',
    aria: '电流沿哪个方向流动',
  });
  const angS = ctl(d.controls, { label: '\\text{角度}', cls: 'angle', min: 0, max: 360, step: 5, value: 60, unit: '°', dec: 0, aria: '指南针放在场源周围的什么位置，以自页面右方起沿逆时针方向的角度表示' });
  const distS = ctl(d.controls, { label: '\\text{距离}', cls: 'position', min: 2, max: 12, step: 0.5, value: 6, unit: 'cm', dec: 1, aria: '指南针放在离场源多远处' });

  const CX = 700, CY = 420, S = 24, R = 4;     /* 24 units to the centimeter; the loop is 4 cm across its radius */
  const PX = (x) => CX + x * S, PY = (y) => CY - y * S;
  const sgn = () => (dirC.value === 'book' ? 1 : -1);

  /* Two of the three arrangements are straight currents perpendicular to the page,
     so their fields lie in the page and can be traced. The wire that lies in the
     page has a field perpendicular to it, which is what the dot and the cross are
     for, and `Bz` is positive where that field comes out of the page. */
  /* The loop lies in the horizontal plane through the centre and the page is one
     plane through its axis, so the field drawn here is summed piece by piece round
     the whole ring, as Biot and Savart's law gives it, and not the field of two
     long wires; that is what makes the picture the one the book draws, with the
     lines running up through the middle of the loop and back down outside it. */
  const SEG = 120, RING = [];
  for (let k = 0; k < SEG; k++) {
    const p1 = (k / SEG) * 2 * Math.PI, p2 = ((k + 1) / SEG) * 2 * Math.PI;
    RING.push({
      mx: (R * Math.cos(p1) + R * Math.cos(p2)) / 2, mz: (R * Math.sin(p1) + R * Math.sin(p2)) / 2,
      dx: R * Math.cos(p2) - R * Math.cos(p1), dz: R * Math.sin(p2) - R * Math.sin(p1),
    });
  }
  function ring(x, y) {
    let bx = 0, by = 0;
    for (const g of RING) {
      const rx = x - g.mx, ry = y, rz = -g.mz;
      const r = Math.sqrt(Math.max(rx * rx + ry * ry + rz * rz, 0.02)), r3 = r * r * r;
      bx += (-g.dz * ry) / r3; by += (g.dz * rx - g.dx * rz) / r3;
    }
    return { x: -bx, y: -by };                  /* the book's direction: out of the page on the left, field up through the middle */
  }
  const Bloop = (x, y) => { const b = ring(x, y), s = sgn(); return { x: s * b.x, y: s * b.y }; };

  /* the lines are the same curves whichever way the current runs, so they are
     traced once and only the arrowheads turn round */
  const LOOPLINES = [];
  [0.9, -0.9, 1.8, -1.8, 2.6, -2.6, 3.3, -3.3].forEach((x0) => {
    const st = (x, y, k) => (k > 80 && Math.hypot(x - x0, y) < 0.2) || Math.abs(x) > 27 || y > 13.2 || y < -15.5;
    const fwd = trace(ring, x0, 0, 1, 0.16, 4000, st);
    const closed = Math.hypot(fwd[fwd.length - 1][0] - x0, fwd[fwd.length - 1][1]) < 0.3;
    LOOPLINES.push(closed ? fwd : trace(ring, x0, 0, -1, 0.16, 4000, st).reverse().concat(fwd.slice(1)));
  });
  function Bendon(x, y) {
    const s = sgn(), d2 = Math.max(x * x + y * y, 0.09);
    return { x: (s * -y) / d2, y: (s * x) / d2 };
  }
  const Bz = (x) => (Math.abs(x) < 1e-6 ? 0 : -sgn() / x);

  function stroke(ctx, pts, color) {
    if (pts.length < 2) return;
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 3.5;
    ctx.beginPath(); ctx.moveTo(PX(pts[0][0]), PY(pts[0][1]));
    for (let i = 1; i < pts.length; i++) ctx.lineTo(PX(pts[i][0]), PY(pts[i][1]));
    ctx.stroke(); ctx.restore();
  }

  function legend(ctx, col, cur, withCurrent, y0 = 132) {
    const x = 70;
    const row = (y, sym, color, s) => { sym(ctx, x, y, 13, color); text(ctx, s, x + 26, y, PAL.ink, { size: 18, align: 'left' }); };
    line(ctx, x - 13, y0, x + 13, y0, col, 3.5);
    text(ctx, '一条磁感线', x + 26, y0, PAL.ink, { size: 18, align: 'left' });
    row(y0 + 44, outSym, col, '磁场，垂直纸面向外');
    row(y0 + 88, inSym, col, '磁场，垂直纸面向里');
    if (!withCurrent) return;
    row(y0 + 144, outSym, cur, '电流，垂直纸面向外');
    row(y0 + 188, inSym, cur, '电流，垂直纸面向里');
  }

  function flat(ctx, bx, by, col, px, py, turn) {
    const X = PX(px), Y = PY(py);
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.globalAlpha *= 0.88;
    ctx.beginPath(); ctx.arc(X, Y, 39, 0, 2 * Math.PI); ctx.fill(); ctx.restore();
    const wc = F.ref('wire-compass');
    compass(ctx, X, Y, 31, Math.atan2(-by, bx) + turn, col, 'N', wc);
    label(ctx, '你的指南针', X, Y + (py > 7 ? 39 : -39), { side: py > 7 ? 'below' : 'above', size: 19, gap: 22, color: wc });
  }
  /* a symbol for a direction through the page whose sign may be turning over: the
     dot fades as the cross arrives, never a cut */
  function through(ctx, X, Y, r, color, s) {
    const up = (1 + s) / 2;
    F.faded(ctx, up, [0, 0], () => outSym(ctx, X, Y, r, color));
    F.faded(ctx, 1 - up, [0, 0], () => inSym(ctx, X, Y, r, color));
  }

  function draw() {
    const { ctx } = begin(d.c);
    const col = C('magnetic-field'), cur = C('current'), lc = F.ref('loop'), wr = F.ref('wire'), wc = F.ref('wire-compass');
    const a = angS.v * RAD, r = distS.v;
    const px = r * Math.cos(a), py = r * Math.sin(a);
    const src = srcC.value;
    /* the current turning over: s runs from 1 to -1, and every needle turns end for end with it */
    const s = dirC.mix((v) => (v === 'book' ? 1 : -1)), turn = Math.PI * (1 - s) / 2;
    const S0 = sgn();
    /* the wire in the page and the same wire seen end-on are one wire turned: between
       those two the wire tips out of the page (tilt 0 to 1) rather than fading */
    const pair = ['wire', 'endon'].includes(srcC.from) && ['wire', 'endon'].includes(src) && srcC.from !== src;
    const tilt = pair ? srcC.mix((v) => (v === 'endon' ? 1 : 0)) : (src === 'endon' ? 1 : 0);
    const aLoop = srcC.a('loop');
    const aWire = pair ? 1 - tilt : srcC.a('wire'), aEnd = pair ? tilt : srcC.a('endon');
    const bookOf = (f) => { const b = f(px, py); return { x: S0 * b.x, y: S0 * b.y }; };   /* the field with the current run the first way */

    if (aLoop > 0) {
      ctx.save(); ctx.globalAlpha = aLoop;
      /* every line that threads the loop closes on itself, so one forward trace
         from a seed in the plane of the loop draws the whole of it */
      LOOPLINES.forEach((pts) => stroke(ctx, pts, col));
      /* the loop, seen edge-on: the near arc solid, the arc behind it dashed */
      ctx.save(); ctx.strokeStyle = lc; ctx.lineWidth = 4;
      ctx.setLineDash([9, 9]); ctx.beginPath(); ctx.ellipse(CX, CY, R * S, R * S * 0.26, 0, Math.PI, 2 * Math.PI); ctx.stroke();
      ctx.setLineDash([]); ctx.beginPath(); ctx.ellipse(CX, CY, R * S, R * S * 0.26, 0, 0, Math.PI); ctx.stroke();
      ctx.restore();
      const ay = CY + R * S * 0.26;
      if (Math.abs(s) > 0.05) arrow(ctx, CX - s * 48, ay, CX + s * 48, ay, cur, 5);
      through(ctx, PX(-R), CY, 14, cur, s);
      through(ctx, PX(R), CY, 14, cur, -s);
      label(ctx, '侧视的载流线圈', CX, ay, { side: 'below', size: 19, gap: 58, leader: false, color: lc });
      label(ctx, 'I', CX + (s >= 0 ? 54 : -54), ay, { side: s >= 0 ? 'right' : 'left', size: 24, gap: 12, color: cur, leader: false });
      const b = bookOf(Bloop);
      flat(ctx, b.x, b.y, col, px, py, turn);
      ctx.restore();
    }
    if (aEnd > 0) {
      ctx.save(); ctx.globalAlpha = pair ? 1 : aEnd;
      /* the circles are swept out as the wire turns to face the reader */
      [1.6, 3, 5, 7.5, 10.5].forEach((rad) => {
        const pts = [];
        for (let k = 0; k <= 96; k++) { const t = (k / 96) * 2 * Math.PI; pts.push([rad * Math.cos(t), rad * Math.sin(t)]); }
        stroke(ctx, F.partial(pts, pair ? tilt : 1), col);
      });
      ctx.globalAlpha = aEnd;
      through(ctx, CX, CY, 15, cur, s);
      label(ctx, '沿轴线看去的导线', CX, CY, { side: 'below', size: 19, gap: 48, color: wr });
      label(ctx, 'I', CX + 22, CY - 22, { side: 'right', size: 24, gap: 10, color: cur, leader: false });
      const b = bookOf(Bendon);
      flat(ctx, b.x, b.y, col, px, py, turn);
      ctx.restore();
    }
    if (aWire > 0 || (pair && tilt < 1)) {
      ctx.save();
      /* the wire itself, foreshortened as it turns out of the page */
      const h = 12.2 * (pair ? 1 - tilt : 1);
      ctx.globalAlpha = pair ? 1 : aWire;
      if (h > 0.3) line(ctx, CX, PY(h), CX, PY(-h), wr, 5);
      ctx.globalAlpha = aWire;
      if (Math.abs(s) > 0.05 && h > 9) arrow(ctx, CX, PY(s * 9.2 * h / 12.2), CX, PY(s * 11.9 * h / 12.2), cur, 5);
      label(ctx, 'I', CX, PY(10.6 * h / 12.2 * (s >= 0 ? 1 : -1)), { side: 'right', size: 24, gap: 14, color: cur, leader: false });
      [2.2, 5.2, 9].forEach((x) => [-7.6, -3.8, 0, 3.8, 7.6].forEach((y) => [-1, 1].forEach((sd) => {
        const rad = 6 + 13 / Math.pow(x, 0.6);
        through(ctx, PX(sd * x), PY(y), rad, col, -sd * s);
      })));
      label(ctx, '位于纸面内的一根长直导线', CX, PY(-12.2), { side: 'below', size: 19, gap: 22, leader: false, color: wr });
      const onWire = Math.abs(px) < 0.6;
      compassEdge(ctx, PX(px), PY(py), 27, 0, col, wc);
      if (!onWire) through(ctx, PX(px), PY(py), 27 * 0.45, col, -Math.sign(px) * s);
      /* the label stands clear of the grid of dots and crosses, above it or below it */
      const yl = py >= 0 ? 9.4 : -9.4;
      if (Math.abs(py) < 8.6) label(ctx, '你的指南针', PX(px), PY(py), { side: py >= 0 ? 'above' : 'below', size: 19, gap: Math.abs(PY(yl) - PY(py)), color: wc });
      else label(ctx, '你的指南针', PX(px), PY(py) + (py > 7 ? 12 : -12), { side: py > 7 ? 'below' : 'above', size: 19, gap: 40, color: wc });
      ctx.restore();
    }

    let main = '', small = '', headline = '';
    const sg = sgn();
    if (src === 'loop') {
      const b = Bloop(px, py);
      const across = Math.acos(Math.max(-1, Math.min(1, (b.x * Math.cos(a) + b.y * Math.sin(a)) / Math.hypot(b.x, b.y)))) * DEG;
      const side = sg > 0 ? '左' : '右', other = sg > 0 ? '右' : '左';
      const way = sg > 0 ? '向上穿过线圈中间，再从外侧向下回来' : '向下穿过线圈中间，再从外侧向上回来';
      headline = `线圈在${side}侧穿过纸面处，电流垂直纸面向外，在${other}侧又垂直纸面向里，所以磁场${way}。`;
      main = `\\kBmag \\text{ 与从中心向外的连线成 } ${fmt(across, 0)}^\\circ`;
      small = `圆形载流线圈的场，形状像条形磁铁的场，线圈的一个面相当于北极，另一个面相当于南极。`;
    } else if (src === 'endon') {
      headline = `沿轴线看去，长直导线的磁感线是围绕它的圆，放在 ${fmt(r, 1)} cm 处的指南针沿着经过其所在位置的那个圆。`;
      main = `\\kBmag \\text{ 与从导线向外的连线成 } 90^\\circ`;
      small = `这些圆自身闭合，所以不带箭头；磁场沿哪个方向绕行，由指南针和电流来表明。`;
    } else {
      const onWire = Math.abs(px) < 0.6;
      const outSide = sg > 0 ? '左' : '右', inSide = sg > 0 ? '右' : '左';
      headline = onWire
        ? `指南针正放在导线${py < 0 ? '下方' : '上方'}，就落在导线本身上，那里没有导线之外的场可供它沿着；稍偏向任一侧，它的指针在${outSide}侧垂直纸面向外立起，在${inSide}侧垂直纸面向里立起。`
        : `放在导线${px < 0 ? '左' : '右'}侧 ${fmt(Math.abs(px), 1)} cm 处的指南针竖立起来，它的北极指向${Bz(px) > 0 ? '纸面之外' : '纸面之内'}，所以那里的场是${Bz(px) > 0 ? '一个圆点' : '一个叉号'}。`;
      main = `\\kBmag \\text{ ${onWire ? '在导线本身上没有定义' : (Bz(px) > 0 ? '在此处垂直纸面向外' : '在此处垂直纸面向里')}}`;
      small = '';
    }

    legend(ctx, col, cur, src !== 'wire', src === 'loop' ? 590 : 132);
    topline(ctx, headline);
    readout(d.readout, main, small);
  }
  register(d.fig, { update: () => {}, draw });
})();

};
