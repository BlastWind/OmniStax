/* Figures for section 22.3 Magnetic Fields and Magnetic Field Lines. Boots
   against the section's text article. The page binds magnetic-field, from every
   field line and every compass needle of both figures, and current, from the
   arrow that runs along a wire and round a loop; every distance, angle and place
   is untyped and in ink, and no body is tinted, a bar magnet being ink with N and
   S lettered on its ends and a wire being ink. Both figures answer their controls
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

/* a compass lying flat on the page: an ink case, and a needle whose north half
   wears the field hue and carries the point */
function compass(ctx, X, Y, r, ang, color, letter) {
  ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.75); ctx.lineWidth = Math.max(2, r * 0.09); ctx.fillStyle = PAL.panel;
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
function compassEdge(ctx, X, Y, r, out, color) {
  ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.75); ctx.lineWidth = 2.5; ctx.fillStyle = PAL.panel;
  ctx.beginPath(); ctx.ellipse(X, Y, r, r * 0.34, 0, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); ctx.restore();
  if (out > 0) outSym(ctx, X, Y, r * 0.45, color);
  else if (out < 0) inSym(ctx, X, Y, r * 0.45, color);
  else dot(ctx, X, Y, PAL.ink, true, 5);
}

/* =====================================================================
   FIGURE 22.14: the bar magnet, the compasses laid all round it, the
   continuous lines their arrows trace, and the closed loops those lines
   make when the inside of the magnet is probed as well. Still: a compass
   laid beside a magnet has settled (rule 14).
===================================================================== */
(function () {
  const d = sim('sim-field-map', 860);
  const viewC = choice(d.controls, {
    label: '\\text{what is drawn}',
    options: [{ value: 'compasses', label: 'compass needles' }, { value: 'lines', label: 'field lines' }, { value: 'loops', label: 'closed loops' }],
    value: 'compasses',
    aria: 'whether the map is drawn as compass needles, as the continuous lines their arrows trace, or as the closed loops those lines make inside the magnet',
  });
  const alongS = ctl(d.controls, { label: '\\text{along}', cls: '', min: -16, max: 16, step: 0.5, value: 9, unit: 'cm', dec: 1, aria: 'how far along the magnet your own compass is held' });
  const acrossS = ctl(d.controls, { label: '\\text{across}', cls: '', min: -10, max: 10, step: 0.5, value: 5, unit: 'cm', dec: 1, aria: 'how far across the magnet your own compass is held' });

  const CX = 700, CY = 455, S = 32;            /* 32 units to the centimeter */
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
  function inside(ctx, r, color) {
    ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = 3.5;
    ctx.beginPath(); ctx.moveTo(PX(r.from[0]), PY(r.from[1]));
    ctx.bezierCurveTo(PX(r.from[0] * 0.55), PY(r.depth), PX(r.to[0] * 0.55), PY(r.depth), PX(r.to[0]), PY(r.to[1]));
    ctx.stroke(); ctx.restore();
  }

  function draw() {
    const { ctx } = begin(d.c);
    const col = C('magnetic-field');
    const px = alongS.v, py = acrossS.v;
    const b = B(px, py);
    const fromAxis = Math.acos(Math.max(-1, Math.min(1, b.x / Math.hypot(b.x, b.y)))) * DEG;
    const ratio = mag(px, py) / mag(MX, 0);
    const state = viewC.value;

    if (state !== 'compasses') ARCS.forEach((pts) => stroke(ctx, pts, col, 3.5));

    /* the magnet: ink, with N and S lettered on its ends and no tint of its own */
    const L = 2 * HL * S, T = TH * S;
    ctx.save(); ctx.lineWidth = 3; ctx.strokeStyle = PAL.ink; ctx.fillStyle = PAL.panel;
    ctx.beginPath(); ctx.rect(CX - L / 2, CY - T / 2, L, T); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(CX, CY - T / 2); ctx.lineTo(CX, CY + T / 2); ctx.stroke();
    ctx.restore();
    if (state === 'loops') RETURNS.forEach((r) => inside(ctx, r, col));
    text(ctx, 'S', PX(-HL / 2), CY, PAL.ink, { size: 44, weight: 700, align: 'center', bg: PAL.panel });
    text(ctx, 'N', PX(HL / 2), CY, PAL.ink, { size: 44, weight: 700, align: 'center', bg: PAL.panel });

    /* the mark the packing of the lines is counted against */
    const mx = PX(MX), my = PY(0);
    line(ctx, mx - 11, my - 11, mx + 11, my + 11, alpha(PAL.ink, 0.85), 3);
    line(ctx, mx + 11, my - 11, mx - 11, my + 11, alpha(PAL.ink, 0.85), 3);

    if (state === 'compasses') {
      GRID.forEach(([x, y]) => {
        if (Math.hypot(x - px, y - py) < 2.7) return;         /* the reader's own compass has this place */
        const g = B(x, y);
        compass(ctx, PX(x), PY(y), 24, Math.atan2(-g.y, g.x), col);
      });
    }

    label(ctx, 'bar magnet', CX, PY(-TH / 2), { side: 'below', size: 19, gap: 28, leader: false });
    label(ctx, 'the mark', mx, my, { side: 'above', size: 19, gap: 46 });
    if (state === 'compasses') label(ctx, 'a compass laid on the map', PX(-11), PY(9.0), { side: 'left', size: 19, gap: 26 });
    else {
      const i = Math.round(NAMED.length * 0.5);
      label(ctx, 'a field line', PX(NAMED[i][0]), PY(NAMED[i][1]), { side: 'above', size: 19, gap: 26, color: col });
    }
    if (state === 'loops') label(ctx, 'the line carries on through the magnet', PX(-1.6), PY(0.1), { side: 'above', size: 19, gap: 118, color: col });

    /* the reader's own compass, held over the map, and its name drawn last of all */
    const cx = PX(px), cy = PY(py);
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.globalAlpha = 0.88;
    ctx.beginPath(); ctx.arc(cx, cy, 43, 0, 2 * Math.PI); ctx.fill(); ctx.restore();
    compass(ctx, cx, cy, 34, Math.atan2(-b.y, b.x), col, 'N');
    label(ctx, 'your compass', cx, cy + (py > 6 ? 43 : -43), { side: py > 6 ? 'below' : 'above', size: 19, gap: 22 });

    const says = {
      compasses: 'Every needle has settled along the field at the place its compass lies, away from the north pole of the magnet and toward the south pole.',
      lines: 'Joining the arrows the needles make gives continuous lines, which leave the north pole and return to the south pole.',
      loops: 'If the inside of the magnet could be probed as well, every line would be found to close on itself, running back from the south end to the north end.',
    };
    text(ctx, says[state], CX, 836, PAL.muted, { size: 18, align: 'center' });

    /* the place in words, since a signed number reads badly in a sentence */
    const along = px === 0 ? '' : `${fmt(Math.abs(px), 1)} cm toward the ${px < 0 ? 'south' : 'north'} pole`;
    const across = py === 0 ? '' : `${fmt(Math.abs(py), 1)} cm ${py < 0 ? 'below' : 'above'} the magnet`;
    const place = along && across ? `${along} and ${across}` : along ? `${along}, on the line of the magnet` : across ? `over the middle of the magnet and ${across}` : 'at the middle of the magnet';
    topline(ctx, `The compass held ${place} points ${fmt(fromAxis, 0)}° from the line of the magnet, where the field lines are packed ${fmt(ratio, 2)} times as closely as they are at the mark.`);
    readout(d.readout,
      `\\text{the needle points } ${fmt(fromAxis, 0)}^\\circ \\text{ from the line of the magnet} \\qquad \\kBmag = ${fmt(ratio, 2)}\\,\\kBmag_{\\text{mark}}`,
      'Carry the compass in toward either pole and the lines crowd together, which is what makes the field strong there; carry it far out to the side and they open out and the field weakens.');
  }
  register(d.fig, { update: () => {}, draw });

  hover(d.stage, () => {
    if (viewC.value !== 'compasses') return [];
    const px = alongS.v, py = acrossS.v;
    return GRID.filter(([x, y]) => Math.hypot(x - px, y - py) >= 2.7).map(([x, y]) => {
      const g = B(x, y), a = Math.acos(Math.max(-1, Math.min(1, g.x / Math.hypot(g.x, g.y)))) * DEG;
      return {
        x: PX(x), y: PY(y), r: 27,
        name: `a compass ${fmt(Math.abs(x), 1)} cm toward the ${x < 0 ? 'south' : 'north'} pole and ${fmt(Math.abs(y), 1)} cm ${y < 0 ? 'below' : 'above'} the magnet, its needle ${fmt(a, 0)}° from the line of the magnet`,
      };
    });
  });
})();

/* =====================================================================
   FIGURE 22.15: the field a current makes, round a loop, round a wire
   lying in the page and round the same wire seen end-on, with the dot and
   the cross for a field perpendicular to the page. Still: a steady current
   makes a steady field, and the compass in it has settled (rule 14).
===================================================================== */
(function () {
  const d = sim('sim-field-sources', 800);
  const srcC = choice(d.controls, {
    label: '\\text{the source}',
    options: [{ value: 'loop', label: 'a current loop' }, { value: 'wire', label: 'a wire in the page' }, { value: 'endon', label: 'a wire seen end-on' }],
    value: 'loop',
    aria: 'which of the three arrangements the compass is put into',
  });
  const dirC = choice(d.controls, {
    label: '\\text{the current}',
    options: [{ value: 'book', label: 'as drawn' }, { value: 'rev', label: 'reversed' }],
    value: 'book',
    aria: 'whether the current runs as it is drawn or the other way round',
  });
  const angS = ctl(d.controls, { label: '\\text{angle}', cls: '', min: 0, max: 360, step: 5, value: 60, unit: '°', dec: 0, aria: 'where round the source the compass is held, as an angle counterclockwise from the right of the page' });
  const distS = ctl(d.controls, { label: '\\text{distance}', cls: '', min: 2, max: 12, step: 0.5, value: 6, unit: 'cm', dec: 1, aria: 'how far from the source the compass is held' });

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

  function legend(ctx, col, cur, withCurrent) {
    const x = 70, y0 = 132;
    const row = (y, sym, color, s) => { sym(ctx, x, y, 13, color); text(ctx, s, x + 26, y, PAL.ink, { size: 18, align: 'left' }); };
    line(ctx, x - 13, y0, x + 13, y0, col, 3.5);
    text(ctx, 'a field line', x + 26, y0, PAL.ink, { size: 18, align: 'left' });
    row(y0 + 44, outSym, col, 'the field, out of the page');
    row(y0 + 88, inSym, col, 'the field, into the page');
    if (!withCurrent) return;
    row(y0 + 144, outSym, cur, 'the current, out of the page');
    row(y0 + 188, inSym, cur, 'the current, into the page');
  }

  function flat(ctx, bx, by, col, px, py) {
    const X = PX(px), Y = PY(py);
    ctx.save(); ctx.fillStyle = PAL.panel; ctx.globalAlpha = 0.88;
    ctx.beginPath(); ctx.arc(X, Y, 39, 0, 2 * Math.PI); ctx.fill(); ctx.restore();
    compass(ctx, X, Y, 31, Math.atan2(-by, bx), col, 'N');
    label(ctx, 'your compass', X, Y + (py > 7 ? 39 : -39), { side: py > 7 ? 'below' : 'above', size: 19, gap: 22 });
  }

  function draw() {
    const { ctx } = begin(d.c);
    const col = C('magnetic-field'), cur = C('current');
    const a = angS.v * RAD, r = distS.v;
    const px = r * Math.cos(a), py = r * Math.sin(a);
    const src = srcC.value, s = sgn();
    let main = '', small = '', headline = '';

    if (src === 'loop') {
      /* every line that threads the loop closes on itself, so one forward trace
         from a seed in the plane of the loop draws the whole of it */
      LOOPLINES.forEach((pts) => stroke(ctx, pts, col));
      /* the loop, seen edge-on: the near arc solid, the arc behind it dashed */
      ctx.save(); ctx.strokeStyle = PAL.ink; ctx.lineWidth = 4;
      ctx.setLineDash([9, 9]); ctx.beginPath(); ctx.ellipse(CX, CY, R * S, R * S * 0.26, 0, Math.PI, 2 * Math.PI); ctx.stroke();
      ctx.setLineDash([]); ctx.beginPath(); ctx.ellipse(CX, CY, R * S, R * S * 0.26, 0, 0, Math.PI); ctx.stroke();
      ctx.restore();
      const ay = CY + R * S * 0.26;
      arrow(ctx, CX - s * 48, ay, CX + s * 48, ay, cur, 5);
      (s > 0 ? outSym : inSym)(ctx, PX(-R), CY, 14, cur);
      (s > 0 ? inSym : outSym)(ctx, PX(R), CY, 14, cur);
      label(ctx, 'the current loop, seen edge-on', CX, ay, { side: 'below', size: 19, gap: 58, leader: false });
      label(ctx, 'I', CX + s * 54, ay, { side: s > 0 ? 'right' : 'left', size: 24, gap: 12, color: cur, leader: false });
      const b = Bloop(px, py);
      flat(ctx, b.x, b.y, col, px, py);
      const across = Math.acos(Math.max(-1, Math.min(1, (b.x * Math.cos(a) + b.y * Math.sin(a)) / Math.hypot(b.x, b.y)))) * DEG;
      const side = s > 0 ? 'left' : 'right', other = s > 0 ? 'right' : 'left';
      const way = s > 0 ? 'up through the middle of the loop and back down outside it' : 'down through the middle of the loop and back up outside it';
      headline = `The current comes out of the page where the loop crosses on the ${side} and goes back into it on the ${other}, so the field runs ${way}.`;
      main = `\\kIcur \\text{ out of the page on the ${side}} \\qquad \\kBmag \\text{ lies } ${fmt(across, 0)}^\\circ \\text{ from the line out from the center}`;
      small = 'The field of a circular loop of current is shaped like the field of a bar magnet, with one face of the loop for a north pole and the other for a south. Reverse the current and every needle turns end for end.';
    } else if (src === 'endon') {
      [1.6, 3, 5, 7.5, 10.5].forEach((rad) => {
        const pts = [];
        for (let k = 0; k <= 96; k++) { const t = (k / 96) * 2 * Math.PI; pts.push([rad * Math.cos(t), rad * Math.sin(t)]); }
        stroke(ctx, pts, col);
      });
      (s > 0 ? outSym : inSym)(ctx, CX, CY, 15, cur);
      label(ctx, 'the wire, seen end-on', CX, CY, { side: 'below', size: 19, gap: 48 });
      label(ctx, 'I', CX + 22, CY - 22, { side: 'right', size: 24, gap: 10, color: cur, leader: false });
      const b = Bendon(px, py);
      flat(ctx, b.x, b.y, col, px, py);
      headline = `Seen end-on, the field lines of a long straight wire are circles round it, and the compass held ${fmt(r, 1)} cm out lies along the circle that passes through the place it is held.`;
      main = `\\kIcur \\text{ ${s > 0 ? 'out of' : 'into'} the page} \\qquad \\kBmag \\text{ lies } 90^\\circ \\text{ across the line out from the wire}`;
      small = 'Carry the compass all the way round the wire and the needle turns with it, always square to the line out from the wire, because the field line through every place is a circle with the wire at its center. The circles close on themselves and so carry no arrowhead; the compass and the current tell which way round the field runs.';
    } else {
      line(ctx, CX, PY(12.2), CX, PY(-12.2), PAL.ink, 5);
      arrow(ctx, CX, PY(s * 9.2), CX, PY(s * 11.9), cur, 5);
      label(ctx, 'I', CX, PY(s * 10.6), { side: 'right', size: 24, gap: 14, color: cur, leader: false });
      [2.2, 5.2, 9].forEach((x) => [-7.6, -3.8, 0, 3.8, 7.6].forEach((y) => [-1, 1].forEach((sd) => {
        const rad = 6 + 13 / Math.pow(x, 0.6);
        (Bz(sd * x) > 0 ? outSym : inSym)(ctx, PX(sd * x), PY(y), rad, col);
      })));
      label(ctx, 'a long straight wire lying in the page', CX, PY(-12.2), { side: 'below', size: 19, gap: 22, leader: false });
      const onWire = Math.abs(px) < 0.6;
      compassEdge(ctx, PX(px), PY(py), 27, onWire ? 0 : (Bz(px) > 0 ? 1 : -1), col);
      label(ctx, 'your compass', PX(px), PY(py) + (py > 7 ? 12 : -12), { side: py > 7 ? 'below' : 'above', size: 19, gap: 24 });
      const outSide = s > 0 ? 'left' : 'right', inSide = s > 0 ? 'right' : 'left';
      headline = onWire
        ? `Held straight ${py < 0 ? 'below' : 'above'} the wire the compass sits on the wire itself, where there is no field outside the wire to lie along; move it a little to either side and its needle stands out of the page on the ${outSide} and into the page on the ${inSide}.`
        : `The compass held ${fmt(Math.abs(px), 1)} cm to the ${px < 0 ? 'left' : 'right'} of the wire stands on end, its north pole pointing ${Bz(px) > 0 ? 'out of' : 'into'} the page, which is why the field there is drawn as a ${Bz(px) > 0 ? 'dot' : 'cross'}.`;
      main = `\\kIcur \\text{ running ${s > 0 ? 'up' : 'down'} the page} \\qquad \\kBmag \\text{ ${onWire ? 'is not defined on the wire itself' : (Bz(px) > 0 ? 'comes out of the page here' : 'goes into the page here')}}`;
      small = 'The field of this wire is perpendicular to the page everywhere in it, so a compass laid flat would tell you nothing and one standing on edge tells everything: the dot is the tip of an arrow coming toward you, and the cross is the tail of one going away.';
    }

    legend(ctx, col, cur, src !== 'wire');
    topline(ctx, headline);
    readout(d.readout, main, small);
  }
  register(d.fig, { update: () => {}, draw });
})();

};
