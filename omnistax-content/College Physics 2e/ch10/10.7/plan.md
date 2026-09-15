# Plan: 10.7 Gyroscopic Effects: Vector Aspects of Angular Momentum (m42184)

Source: `source.md`, converted from the CNXML module. Status: built
2026-09-14 without a review stop, on Chen's instruction to finish the book in
waves without check-ins; the per-section stop of rule 2 and the plan review of
rule 5 are replaced by this file, written before the section was built and
left for review after, as `ch10/config.md` records.

The shortest section of the chapter and the one place it leaves the plane.
Angular momentum is a vector, its direction is given by the right-hand rule,
a torque changes it in the torque's own direction, and when the torque is
perpendicular to the angular momentum the axis of rotation swings sideways
instead of tipping: the bicycle wheel with handles, the precessing gyroscope
and the Earth. One equation, $\text{net}\;\ktau = \kdLang / \Delta t$, four
narrative sketches (Figures 10.37 to 10.40), one figure inside the problem
(10.41), no worked example, no boxed note, no table, one Check Your
Understanding box, two AP items (one keyed), two conceptual questions and one
keyed problem. One page (rule 11).

## Sub-concepts (page headers)

The book prints no header of its own; the run of the argument divides into
four blocks, one idea each.

1. `right-hand-rule` **The right-hand rule** (book: angular momentum is a
   vector; the direction of $\kL$ and $\kw$ from the curled fingers and the
   thumb; Figure 10.37). The variables $\kL$ and $\kw$ anchor here, and the
   glossary term.
2. `torque-direction` **A torque changes angular momentum in its own
   direction** (book: $\text{net}\;\ktau = \kdLang / \Delta t$; the direction
   of $\kdLang$ is the direction of $\ktau$; Figure 10.38, the torque
   perpendicular to the plane of $\kr$ and $\kF$ and the merry-go-round).
   The equation and the variables $\ktau$, $\kdLang$, $\Delta t$, $\kF$ and
   $r$ anchor here.
3. `bike-wheel` **The bicycle wheel that will not tip** (book: the wheel with
   handles, the torque toward the person, $\kdLang$ perpendicular to $\kL$,
   the axis moving perpendicular to the forces; Figure 10.39).
4. `gyroscope` **Gyroscopes and the Earth** (book: the two forces on a
   spinning gyroscope, the horizontal torque, precession about a vertical
   axis, the gyroscope that is not spinning falling over, the Earth
   precessing once in about 26,000 years; Figure 10.40). The Check Your
   Understanding box on rotational kinetic energy follows this span inline.

Learning objectives, section summary and glossary come out of the running
text into the tables and views. Cross references: none outside the module.
The book sets its vectors as roman $\text{L}$; the page writes them with the
`\k` macros of their type.

## Concept nodes (already in book.json)

| id | kind | introduced in | evidence |
|---|---|---|---|
| right-hand-rule | skill | right-hand-rule | Figure 10.37; the glossary; the direction of a torque in Figure 10.38 |
| torque-sets-the-direction-of-angular-momentum | result, eq-torque-and-angular-momentum-vectors | torque-direction | Figures 10.38 and 10.39; the bicycle wheel; AP items 1 and 2; problem 1 |
| gyroscopic-precession | idea | gyroscope | Figure 10.40; the Earth and Polaris; both conceptual questions; problem 1 |

The section leans on `angular-momentum` and `torque-changes-angular-momentum`
(10.5), `torque` and `perpendicular-lever-arm` (9.2), `angular-velocity`
(6.1), `weight` (4.3), `rotational-kinetic-energy` (10.4) and
`head-to-tail-method` (3.2), marked as used where the text uses them.

## Figures

id · replaces · concepts · value add · motion · sliders and choices · headline · graph · depth

1. `sim-right-hand-rule` · replaces Figure 10.37 (the turning disk and the
   right hand) · right-hand-rule · **variation**: the reader flips the sense
   of the turn and watches both arrows reverse together, and sets the spin
   and sees $\kL = I\kw$ grow along the same axis, which the still cannot show
   · **still**: the rule is a correspondence, not a process; no cycle, no
   transport · a choice of the sense of rotation seen from above
   (counterclockwise, the book's, or clockwise; rule 26.1), the angular
   velocity $\kw$ (2 to 20 rad/s, default 10, angular-rate); the disk is a
   fixed 2.0 kg, 0.25 m one, so $I = \tfrac{1}{2}MR^2 = 0.0625$ kg·m² in ink,
   since the page binds no rotational inertia · "Seen from above the disk
   turns counterclockwise, so the thumb, ω and L all point up along the
   axis." · none · **2D, a locked view** (rule 28.2): the book prints the
   disk in perspective, so it is projected from the book's own viewpoint
   with `view()`/`face()`, no orbit; the right hand is drawn beside it in ink
   with its fingers curled the way the rim moves and its thumb along the
   axis. Labels ω, L and the sense of the turn are three and static, so on
   (rule 26.7). Readout: $\kL = I\kw$ with the numbers; small line that the
   two point the same way because $I$ is positive. Draws angular-rate,
   angular-momentum.
2. `sim-torque-direction` · replaces Figure 10.38 (a) and (b) (the torque
   perpendicular to the plane of $r$ and $F$, and the merry-go-round) ·
   torque-sets-the-direction-of-angular-momentum, right-hand-rule,
   torque (9.2) · **variation**: a push at the rim of a merry-go-round, the
   torque standing up out of the platform, and the reader moves the point of
   application in and out, changes the force and reverses the push to see
   the torque and the angular momentum it produces flip together · **still**:
   the direction of a torque is a rule, not a motion; no transport · the
   force $\kF$ (10 to 100 N, default 50, force), the distance $\kr$ from the
   axis to the push (0.5 to 2.5 m, default 2.0, position), a choice of the
   sense of the push (counterclockwise seen from above, the book's, or
   clockwise), as a dropdown because the row of two sliders leaves no room
   for a segmented control (rule 26.1) · "A 50 N push 2.0 m from the axis makes a torque of 100 N·m
   pointing up out of the platform, and the angular momentum it produces
   points the same way." · none · **2D, a locked view** (rule 28.2): the
   platform in perspective from the book's viewpoint, a person sprite at the
   rim pushing, $\kr$ drawn from the axis to the hands, $\kF$ along the rim,
   $\ktau$ and $\kdLang$ standing along the axis. Four static labels, on.
   Readout: $\ktau = \kr\kF$ with the numbers; small line that $\kdLang =
   \ktau\,\Delta t$ points the way the torque points. Draws torque, force,
   position, angular-momentum.
3. `sim-bike-wheel` · replaces Figure 10.39 (a) and (b) (the woman and the
   spinning wheel, and the vector sum) · torque-sets-the-direction-of-
   angular-momentum, right-hand-rule, head-to-tail-method (3.2) ·
   **motion**: the idea has a time in it, since the wheel's axis swings
   while she pushes, so the scene runs one push of 1.5 s and the reader
   watches the axis turn toward her rather than tip, with the vector diagram
   beside it growing $\kdLang$ head to tail on $\kL$ · **moving**, one loop
   of 1.5 s of pushing then a 1.2 s hold, with the transport · the spin
   $\kw$ (10 to 60 rad/s, default 30, angular-rate), the force of each hand
   $\kF$ (0.5 to 10 N, default 2, force); the wheel's moment of inertia is a
   fixed 0.15 kg·m² and the handles are 0.50 m apart, both in ink · "After
   1.50 s of pushing the axis has swung 18° toward her, and the wheel has
   not tipped." · the vector diagram beside the scene, seen from above
   as the book's (b) is · **2D, a locked view** (rule 28.2) for the wheel
   seen from her right and a little above, so that the axle's swing toward
   her turns the wheel toward the reader rather than edge-on, its ring
   projected as it turns about the vertical, the woman a person sprite
   holding the handles; the diagram is flat. The model is exact for a constant torque: $\kL(t) =
   \kL_0 + \ktau t$, so the direction tilts by $\tan^{-1}(\kdLang/\kL)$ and
   the magnitude grows only slightly, which is what the book says for a
   small change. Labels $\kL$, $\kdLang$, $\kL + \kdLang$, $\ktau$ and the
   two $\kF$ on things that move and turn, so they go behind a Labels button,
   off by default, with hover names (rule 26.7). Readout: $\kdLang =
   \ktau\,\Delta t$ and $\kL = I\kw$ with the numbers; small line with the
   angle. Draws angular-momentum, torque, angular-rate, force.
4. `sim-gyroscope` · replaces Figure 10.40 (a) and (b) (the forces on a
   spinning gyroscope and the cone its angular momentum sweeps) ·
   gyroscopic-precession, torque-sets-the-direction-of-angular-momentum,
   weight (4.3) · **motion and shape in 3D**: the gyroscope precesses in
   front of the reader, the horizontal torque and the horizontal $\kdLang$
   turn with it, the tip of $\kL$ traces the book's dotted circle, and a
   choice stops the spin so the same gyroscope falls over as the book says
   it must · **moving**: one precession per loop while spinning (the axle
   sweeps the cone once, 1.3 s at the defaults), or one fall to the
   horizontal when it is not spinning, drawn six times slower than life and
   held 1.2 s, with the transport · a choice spinning or not spinning (rule
   26.1), the spin $\kw$ (40 to 200 rad/s, default 100, angular-rate), the
   tilt $\theta$ of the axle from the vertical (10° to 80°, default 30°,
   ink); the flywheel is a fixed 0.50 kg rim of radius 0.050 m, 0.060 m from
   the pivot, in ink · "The axle sweeps round once every 1.34 s: the torque
   is always horizontal and perpendicular to L, so L turns and does not
   shrink." · none · **3D, a full scene** (rule 28.3), argued: the lesson is
   an arrangement of three perpendicular directions in space, the tilted
   $\kL$, the vertical weight and normal force, and the horizontal torque
   perpendicular to both, and the motion it explains is a cone swept by the
   axle. The book's own (a) is a perspective drawing and its (b) a cone,
   and a flat drawing has to lie about which arrow is in front, whether the
   torque points at the reader or across the page, and how the axle sweeps
   round without coming down. Built on `F.view3d` with the chrome of rule
   26.2: auto-rotate off by default (the scene moves itself; the button is
   there for a reader who wants to walk round it), snap views "Side" (the
   book's viewpoint, the tilt in the plane of the page), "Above" (the circle
   the tip of $\kL$ traces, the book's (b)) and "Front" (along the tilt, so
   the horizontal torque is seen full length), zoom in and out with the
   wheel doing the same; the scene opens three quarters on, between Side and
   Front, so the tilt and the torque are both seen at once. The orbit is bounded to pitches between 5° and 75° above the foot of the stand
   (a gyroscope on a stand is never seen from beneath) and the yaw is free,
   since the precession has no front. Bodies in ink and grey; $\kL$ and
   $\kdLang$ in the angular-momentum hue, $w$ and $N$ in the force hue,
   $\ktau$ in the torque hue. The spin is drawn at one twentieth of its true
   rate so the spokes can be followed, and the readout says so (rule 28.4).
   Six labels on things that move, so they sit behind a Labels button, off
   by default, and every arrow and body has a hover name (rule 26.7). Where
   WebGL is missing the stage says so. Readout: $\ktau = mgr\sin\theta$ and
   $\kL = I\kw$ with the numbers, and the precession period $2\pi I\kw / mgr$;
   small line on the drawn spin rate. Draws angular-momentum, torque,
   angular-rate, force.

Figure 10.41, Earth's axis precessing, sits inside the section's one problem
and travels on that problem's card as its `figure` field, as the chapter
config says, with the book's caption; it is not redrawn. No photograph in
the section.

Extra simulations (rule 15), considered and left:

- The motorcycle's handlebar (conceptual question 1): the same picture as
  the bicycle wheel with the rider's push for the woman's hands. Left.
- Earth's precession animated over 26,000 years: the gyroscope scene already
  sweeps the cone, and the Earth adds only a change of scale. Left.

None built.

Figure pass, 2026-09-15 (Claude Fable 5.1). `sim-torque-direction`: the person on the platform is `F.silhouette()` in the push pose with the hands on the handle. `sim-bike-wheel`: the woman is `F.silhouette()` standing, drawn in two clipped halves as before so each arm reaches its own handle. `sim-gyroscope`: the headline hangs from the top of the stage instead of rising above it (its two-line form was clipped), and the spinning readout is shortened to one line; the scene itself is kept. `sim-right-hand-rule` looked at and left as built.

## Exercises

- `cyu1` (fs-id1446925): the Check Your Understanding box, rotational
  kinetic energy is a scalar, inline after `gyroscope`, Understand, open,
  the book's answer; tagged `rotational-kinetic-energy` (10.4) and
  `right-hand-rule`.
- `ap1` (fs-id1645907): the globe and the cord, Apply, number 144 N·m·s
  from the book's key with the book's working as the solution; tagged
  `torque-sets-the-direction-of-angular-momentum` and
  `torque-changes-angular-momentum` (10.5).
- `ap2` (fs-id1533695): the fishing reel as a test of $\ktau\,\Delta t =
  \kdLang$, no key, kept as an open item with an AI-marked suggested
  approach, Create; tagged `torque-changes-angular-momentum` at full value
  and `torque-sets-the-direction-of-angular-momentum` at weight 2.
- `cq1` (fs-id2603246): the motorcycle's handlebar, Understand, AI
  approach; tagged `gyroscopic-precession` and
  `torque-sets-the-direction-of-angular-momentum`. The book prints this
  question word for word in 10.6 as well; it is set here, where the vector
  aspect it tests is introduced, and 10.6's notes say so.
- `cq2` (fs-id1972542): guidance gyroscopes under large forces, Understand,
  AI approach; tagged `gyroscopic-precession` and
  `torque-sets-the-direction-of-angular-momentum`.
- `p1` (fs-id350390): Earth's precession, Analyze, multi with the book's
  three keyed parts (5.64 × 10³³ kg·m²/s, 1.39 × 10²² N·m, 2.17 × 10¹⁵ N),
  Figure 10.41 on its card; tagged `gyroscopic-precession`,
  `torque-changes-angular-momentum` and `torque-sets-the-direction-of-
  angular-momentum`, with `torque` (9.2) at weight 1.
- Nothing left out: every problem of the section is keyed.
- No generated questions: every node has a book exercise.

## Views

- Formulas: the one equation, important.
- Definitions: the seven variables of the section; the one glossary term.
- Concept map: the three nodes with their edges into 3.2, 4.3, 6.1, 9.2,
  10.4 and 10.5.

## Colour

The page binds angular-momentum, torque, angular-rate and force, as the
chapter's `COLOR.md` lists for 10.7, and position for the $\kr$ of the
merry-go-round. Every figure draws $\kL$ or $\kdLang$; three draw $\ktau$;
two carry $\kw$ on a slider; three draw a force. The masses, the moment of
inertia $I$, the tilt $\theta$, the handle spacing and the elapsed time
$\Delta t$ stay in ink, since the page binds neither rotational inertia nor
time.

## Wanted at chapter level

- variables `L` → 10.7-right-hand-rule
- variables `ω` → 10.7-right-hand-rule
- variables `τ` → 10.7-torque-direction
- variables `ΔL_ang` → 10.7-torque-direction
- variables `Δt` → 10.7-torque-direction
- variables `F` → 10.7-torque-direction
- variables `r_curv` → 10.7-torque-direction
- equations `eq-torque-and-angular-momentum-vectors` → 10.7-torque-direction
- glossary `right-hand rule` → 10.7-right-hand-rule
- The variable row `r_curv` for 10.7 reuses the symbol whose key names a
  radius of curvature; the section's $r$ is the distance from the axis to
  the point of application, which 9.2's `r_lever` names. The text writes
  `\kr` as the row asks; the chapter pass may prefer `r_lever` and rewrite
  the row and the two places `\kr` appears (the merry-go-round readout and
  the text of `torque-direction`).
- 10.6's `exercise_notes` already say that the motorcycle's handlebar
  question (its third conceptual question, fs-id2578076) is printed again in
  10.7 and set there, which is right. They also say that 10.6's first
  conceptual question, the two collisions (fs-id1575956), is printed again
  in 10.7 and set there, which is not: 10.7 prints only two conceptual
  questions, the handlebar and the guidance gyroscope. That question is set
  nowhere; it tests conservation of angular momentum and belongs in 10.6 (or
  10.5) with an AI-marked suggested approach, and 10.6's notes want the
  sentence corrected.

Decided in the chapter pass (2026-09-14): every variable and equation anchor
above is written on its row. The glossary table has no `anchor` field in the
schema, so the glossary line is not applied. The row keeps `r_curv`: 10.3
and 10.6 use the same key for the same meaning, the distance from the axis to
the point where the force is applied or the disk strikes, so the chapter is
consistent with itself, both keys print as $r$ in the position hue, and
changing this one row would make 10.7 the odd page out; `\kr` stays in the
readout and the text. The two-collisions question is given its home in 10.6
as `cq1`, and 10.6's notes are corrected as this plan asked.
